const axios = require('axios');
const cheerio = require('cheerio');
const request = require("request");
const async = require("async");

var ans={};
var ScrapeGoogle=function(response){
	var $ = cheerio.load(response.data);
	var t=$("#buy_v").children();
	var op=t.html();
	urls=op.match(/href=(["'])(.*?)\1/gi);
	
	//below code scrapes the domain name from a list of urls
	urls.forEach(function(entry){
		var temp2=entry.match(/(["'])(.*?)\1/gi)[0];
		temp2=temp2.match(/(\.)(\w+)\./gi)[0];
		temp2=temp2.match(/\w+/gi)[0];

		//below code makes the given url into a proper format using regex				
		temp3=entry.match(/(http)(.*)/gi)[0];
		temp3=temp3.replace(/"/g,'');
		if(temp2!="google")
			ans[temp2]=temp3;
	});
	return ans;
}

var GoogleRedirectedUrl=function(url){
	var links=axios.get(url).then(ScrapeGoogle);
	return links;
}

const ScrapeGoodreads=function(url){
	let promise=new Promise(function(resolve,rej){
		setTimeout(async function(){
			var webpage=await axios.get(url);
			var $ = cheerio.load(webpage.data);
			var t=$(".buyButtonBar").html().match(/href=(["'])(.*?)\1>[\w]+/gi);
			t.forEach(function(elem){
				var entry=elem.match(/(\/)(.*)["']/);
				var nme=elem.match(/>\w+/gi);
				if(entry){			
					entry=entry[0].replace('"',"");
					nme=nme[0].replace('>',"");
			 		ans[nme]="http://www.goodreads.com/"+entry;
			 	}
			});
			resolve(ans);
		},2000);
	});
	return promise;
}

function doRequest(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(res.request.uri.href);
      } else {
        reject(error);
      }
    });
  });
}

var GoodreadsRedirectedUrl=async function(ans){
	var reans={};
	for(var i=0;i<Object.keys(ans).length;++i){
		await doRequest(ans[Object.keys(ans)[i]]).then(function(res){
			reans[Object.keys(ans)[i]]=res;
		}).catch(function(err){
			reans[Object.keys(ans)[i]]=ans[Object.keys(ans)[i]];
		});					
	}
	return reans;
}

exports.GoodreadsRedirectedUrl = GoodreadsRedirectedUrl;
exports.ScrapeGoodreads = ScrapeGoodreads;
exports.GoogleRedirectedUrl=GoogleRedirectedUrl;
