const axios = require('axios');
const cheerio = require('cheerio');

var ans={};
var extract=function(response){
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

var getlinks=function(url){
	var links=axios.get(url).then(extract);
	return links;
}

exports.getlinks=getlinks;
