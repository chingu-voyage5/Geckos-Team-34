webpackJsonp([1],{"2FTV":function(e,t,n){var r=n("2WX8");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("9d084bb8",r,!1,{})},"2WX8":function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\nh1[data-v-56bbef28],\nh2[data-v-56bbef28] {\n  font-weight: normal;\n}\nul[data-v-56bbef28] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-56bbef28] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-56bbef28] {\n  color: #42b983;\n}\n","",{version:3,sources:["/home/ahmad/app/Geckos-Team-34/src/components/src/components/signup.vue"],names:[],mappings:";AAkEA;;EAEA,oBAAA;CACA;AACA;EACA,sBAAA;EACA,WAAA;CACA;AACA;EACA,sBAAA;EACA,eAAA;CACA;AACA;EACA,eAAA;CACA",file:"signup.vue",sourcesContent:['<template>\n  <div class="signup">\n    <v-app>\n      <v-content>\n        <v-container fluid fill-height class="grey lighten-2">\n          <v-layout align-center justify-center>\n            <v-flex sm4>\n              <v-card class="elevation-12" flat>\n                <v-toolbar>\n                  <v-icon>fiber_new</v-icon> <v-toolbar-title>signup</v-toolbar-title>\n                </v-toolbar>\n                <v-card-text>\n                  <v-form @submit="signup">\n\x3c!--                    <v-text-field v-model="user.username" name="username" lable="username" hint=\'username\' type="text" required></v-text-field>\n                    <v-text-field v-model="user.fullname" name="fullname" lable="fullname" hint=\'fullname\' type="fullname" required ></v-text-field>\n  --\x3e\n                      <v-text-field v-model="user.email" name="email" lable="email" hint=\'email\' type="email" required ></v-text-field>\n                  <v-text-field v-model="user.password" name="password" lable="password" hint=\'password\' type="password" required ></v-text-field>\n                      <v-card-actions>\n                        <v-spacer></v-spacer>\n                        <v-btn type="submit" color="primary">signup</v-btn>\n                      </v-card-actions>\n                  </v-form>\n                </v-card-text>\n              </v-card>\n            </v-flex>\n          </v-layout>\n        </v-container>\n\n      </v-content>\n    </v-app>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "login",\n  data() {\n    return {\n      user: {},\n      row: null,\n      status : \'\'\n    };\n  },\n  methods: {\n    signup: function(e) {\n      e.preventDefault();\n      this.$store\n        .dispatch("signup", {\n            email: this.user.email,\n            password: this.user.password\n            })\n        .then(res => {\n          var newuser = this.$store.getters.signup;\n        })\n        .catch(err => {\n          console.log("search failed", err);\n        });\n    }\n  },\n  computed: {}\n};\n<\/script>\n\n\x3c!-- Add "scoped" attribute to limit CSS to this component only --\x3e\n<style scoped>\nh1,\nh2 {\n  font-weight: normal;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #42b983;\n}\n</style>\n'],sourceRoot:""}])},"7biW":function(e,t,n){"use strict";var r={name:"search",data:function(){return{aBook:{name:""},row:null,searchResults:{Goodreads:[],Google:[]},user:null}},methods:{bookSearch:function(e){var t=this;this.$store.dispatch("searchBooks",{bookName:this.aBook.name}).then(function(e){return t.$store.getters.getSearchResults}).then(function(e){t.searchResults.Google=e.Google,t.searchResults.Goodreads=e.Goodreads}).catch(function(e){console.log("search failed",e)}),e.preventDefault()},getUser:function(){this.user=this.$store.getters.user}},computed:{},mounted:function(){this.$route.params.name&&(this.aBook.name=this.$route.params.name,this.bookSearch())}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("v-app",[n("v-content",[n("v-container",{staticClass:"grey lighten-2",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{lg8:""}},[n("v-card",{staticClass:"elevation-12",attrs:{flat:""}},[n("v-toolbar",[n("v-icon",[e._v("search")]),e._v(" "),n("v-toolbar-title",[e._v("Search for books")]),e._v(" "),n("v-spacer"),e._v(" "),e.user?n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("router-link",{attrs:{to:"/profile",tag:"v-btn"}},[e._v("profile")])],1):n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("router-link",{attrs:{to:"/login",tag:"v-btn"}},[e._v("Login")]),e._v(" "),n("router-link",{attrs:{to:"/signup",tag:"v-btn",flat:""}},[e._v("Signup")])],1)],1),e._v(" "),n("v-card-text",[n("p",[e._v("Enter book title,isbn or Author name")]),e._v(" "),n("v-form",{ref:"searchForm",on:{submit:e.bookSearch}},[n("v-text-field",{attrs:{name:"search",lable:"search",type:"text",required:"",icon:""},model:{value:e.aBook.name,callback:function(t){e.$set(e.aBook,"name",t)},expression:"aBook.name"}},[n("v-icon",[e._v("search")])],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v("Search")])],1)],1)],1),e._v(" "),0!=Object.keys(e.searchResults.Goodreads).length||0!=Object.keys(e.searchResults.Google).length?n("div",[n("v-toolbar",{attrs:{color:"grey",dark:""}},[n("v-toolbar-title",[e._v("Search Results")]),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-list",{attrs:{"two-line":""}},e._l(e.searchResults,function(t,r){return n("span",{key:r},[n("v-subheader",[e._v(e._s(r)+" Results")]),e._v(" "),e._l(t,function(a,o){return t[0].error?n("div",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v("No search results found in "+e._s(r)+".")])],1)],1)],1):n("div",{key:o},[n("v-list-tile",{key:a.title,attrs:{avatar:""}},[n("router-link",{attrs:{to:"/book/"+e.aBook.name+"/"+r+"/"+a.id}},[n("v-list-tile-avatar",[n("img",{attrs:{src:a.small_image_url}})])],1),e._v(" "),n("v-list-tile-content",[n("router-link",{attrs:{to:"/book/"+e.aBook.name+"/"+r+"/"+a.id}},[n("v-list-tile-title",{domProps:{innerHTML:e._s(a.title)}})],1),e._v(" "),n("v-list-tile-sub-title",[n("span",{staticClass:"text--primary"},[e._v(e._s(a.author))]),e._v("— "+e._s(a.average_rating))])],1)],1)],1)}),e._v(" "),n("v-divider")],2)}))],1):e._e()],1)],1)],1)],1)],1)],1)],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]},s=o;var i=!1;var l=n("VU/8")(r,s,!1,function(e){i||n("K0dx")},"data-v-4ad41bb8",null);l.options.__file="src/components/search.vue";t.a=l.exports},"7zck":function(e,t){},DBS9:function(e,t,n){"use strict";var r={name:"login",data:function(){return{user:{},row:null,status:""}},methods:{signup:function(e){var t=this;e.preventDefault(),this.$store.dispatch("signup",{email:this.user.email,password:this.user.password}).then(function(e){t.$store.getters.signup}).catch(function(e){console.log("search failed",e)})}},computed:{}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signup"},[n("v-app",[n("v-content",[n("v-container",{staticClass:"grey lighten-2",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{sm4:""}},[n("v-card",{staticClass:"elevation-12",attrs:{flat:""}},[n("v-toolbar",[n("v-icon",[e._v("fiber_new")]),e._v(" "),n("v-toolbar-title",[e._v("signup")])],1),e._v(" "),n("v-card-text",[n("v-form",{on:{submit:e.signup}},[n("v-text-field",{attrs:{name:"email",lable:"email",hint:"email",type:"email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),n("v-text-field",{attrs:{name:"password",lable:"password",hint:"password",type:"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v("signup")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]},s=o;var i=!1;var l=n("VU/8")(r,s,!1,function(e){i||n("2FTV")},"data-v-56bbef28",null);l.options.__file="src/components/signup.vue";t.a=l.exports},Fn2k:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-card-text",[n("div",{staticClass:"text-md-center"},[n("v-icon",{attrs:{large:"",color:"green darken-2"}},[e._v("check_circle")]),e._v(" "),n("h1",{staticClass:"green--text"},[e._v("Login Success")]),e._v(" "),n("h4",{staticClass:"headline mb-0"},[n("b",{staticClass:"red--text"},[e._v("Name :")]),e._v(" "+e._s(e.user.name))]),e._v(" "),n("h4",{staticClass:"headline mb-0"},[n("b",{staticClass:"red--text"},[e._v("Email :")]),e._v(" "+e._s(e.user.email))])],1)])],1)],1)],1)],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]},o=a;var s=n("VU/8")({name:"profile",data:function(){return{user:{}}},methods:{getUser:function(){this.user=this.$store.getters.user}},computed:{},beforeMount:function(){this.getUser()}},o,!1,null,null,null);s.options.__file="src/components/profile.vue";t.a=s.exports},GHGh:function(e,t,n){var r=n("z/+d");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("08bac906",r,!1,{})},IcnI:function(e,t,n){"use strict";var r=n("7+uW"),a=n("NYxO"),o=n("pFYg"),s=n.n(o),i=n("woOf"),l=n.n(i),c=n("fZjL"),u=n.n(c),v=n("mtWM"),d=n.n(v),p=n("kxiW"),m=n.n(p),f=n("JNJt"),h="",g={searchBooks:function(e,t){var n=e.commit;h=t.bookName;var r=[];d.a.get("https://www.googleapis.com/books/v1/volumes?q="+h).then(function(e){var t=e.data;if(0!=t.totalItems)for(var n=t.items,a=0;a<u()(n).length;a++)r.push({}),r[a].id=n[a].id,r[a].small_image_url=n[a].volumeInfo.hasOwnProperty("imageLinks")?n[a].volumeInfo.imageLinks.smallThumbnail:"",r[a].author=n[a].volumeInfo.hasOwnProperty("authors")?n[a].volumeInfo.authors[0]:"",r[a].title=n[a].volumeInfo.title,r[a].average_rating="";else r.push({error:1})}).catch(function(e){console.log(e)});var a=[],o="https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=GbL6BV4VM4nw9Ed5rodaQ&q="+h;d.a.get(o).then(function(e){var t=(new f.X2JS).xml_str2json(e.data).GoodreadsResponse.search;if("1"===t["total-results"]){var n=t.results.work;a.push({}),a[0].id=n.best_book.id,a[0].small_image_url=n.best_book.small_image_url,a[0].author=n.best_book.author.name,a[0].title=n.best_book.title,a[0].average_rating="string"==typeof n.average_rating?n.average_rating:n.average_rating.__text}else if(t["total-results"]>1){n=t.results.work;for(var r=0;r<u()(n).length;r++)a.push({}),a[r].id=n[r].best_book.id.__text,a[r].small_image_url=n[r].best_book.small_image_url,a[r].author=n[r].best_book.author.name,a[r].title=n[r].best_book.title,a[r].average_rating="string"==typeof n[r].average_rating?n[r].average_rating:n[r].average_rating.__text}else a.push({error:1})}).catch(function(e){console.log(e)}),n("searchBooks",{google:r,goodreads:a})},grabBook:function(e,t){var n=e.commit,r=t.src,a=t.id;switch(r){case"Goodreads":this.dispatch("GetbookGoodread",{id:a}).then(function(e){n("grabBook",{bookInfo:e})});break;case"Google":this.dispatch("GetbookGoogle",{id:a}).then(function(e){n("grabBook",{bookInfo:e})});break;default:this.$router.push("/")}},getSimilarBooks:function(e,t){var n=e.commit,r=t.name,a={};return r=r.replace(/ /g,"+"),fetch("https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q="+r+"&type=books&k=311343-BookFind-LEZGJAUK&info=1").then(function(e){return e.json()}).then(function(e){return l()(a,e.Similar.Results),console.log("got similar books"),n("getSimilarBooks",{similarBooks:a}),a})},GetbookGoodread:function(e,t){e.commit;var n={},a="https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/show/"+t.id+".xml?key=GbL6BV4VM4nw9Ed5rodaQ";return d.a.get(a).then(function(e){var t=(new f.X2JS).xml_str2json(e.data).GoodreadsResponse.book;if(t){n.id=t.id,n.title=t.title,n.image_url=t.image_url,n.url=t.url,n.average_rating=t.average_rating,n.description=t.description;var a=[];if("object"==s()(t.authors.author[0]))for(var o=0;o<u()(t.authors).length;o++)a.push({}),a[o].name=t.authors.author[o].name,a[o].average_rating=t.authors.author[o].average_rating,a[o].link=t.authors.author[o].link;else a.push({}),a[0].name=t.authors.author.name,a[0].average_rating=t.authors.author.average_rating,a[0].link=t.authors.author.link;r.a.set(n,"authors",a),n.info=h,n.tastediveKey="311343-BookFind-LEZGJAUK"}else n.error=1}),n},GetbookGoogle:function(e,t){e.commit;var n=t.id,a={};return d.a.get("https://www.googleapis.com/books/v1/volumes/"+n).then(function(e){var t=e.data;if(t.error)a.error=1;else{a.id=t.id,a.title=t.volumeInfo.title,a.image_url=t.volumeInfo.imageLinks.thumbnail,a.url=t.volumeInfo.previewLink,a.average_rating=t.volumeInfo.maturityRating,a.description="string"==typeof t.volumeInfo.description?t.volumeInfo.description:"N/A";for(var n=[],o=0;o<u()(t.volumeInfo.authors).length;o++)n.push({}),n[o].name=t.volumeInfo.authors[o],n[o].average_rating="N/A",n[o].link="N/A";r.a.set(a,"authors",n),a.info=h}}),a},login:function(e,t){var n=e.commit,r=t.email,a=t.password;m.a.auth().signInWithEmailAndPassword(r,a).then(function(e){var t={id:e.user.uid,name:e.user.displayName,email:e.user.email,photoUrl:e.user.photoURL};n("setUser",{user:t})}).catch(function(e){alert("ERR .. "+e.message)})},signup:function(e,t){var n=e.commit,r=t.email,a=t.password;m.a.auth().createUserWithEmailAndPassword(r,a).then(function(e){var t={id:e.user.uid,name:e.user.displayName,email:e.user.email,photoUrl:e.user.photoURL};n("setUser",{user:t})}).catch(function(e){alert("ERR .. "+e.message)})},checkUser:function(e){var t=e.commit,n=m.a.auth().currentUser,r={id:n.uid,name:n.displayName,email:n.email,photoUrl:n.photoURL};console.log(r),t("setUser",{user:r})}};n.d(t,"a",function(){return _}),r.a.use(a.a);var _=new a.a.Store({state:{searchResults:{Goodreads:[],Google:[]},bookInfo:{},user:null,similarBooks:{}},mutations:{grabBook:function(e,t){e.bookInfo=t.bookInfo},getSimilarBooks:function(e,t){e.similarBooks=t.similarBooks},searchBooks:function(e,t){e.searchResults.Google=t.google,e.searchResults.Goodreads=t.goodreads},setUser:function(e,t){e.user=t.user}},actions:g,getters:{getSearchResults:function(e){return e.searchResults},grabBook:function(e){return e.bookInfo},getSimilarBooks:function(e){return e.similarBooks},user:function(e){return e.user}}})},JDQ1:function(e,t,n){var r=n("uDL/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("1ea2a02c",r,!1,{})},JNJt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t,r,a=n("pFYg"),o=n.n(a);t=this,r=function(){return function(e){e=e||{},function(){void 0===e.escapeMode&&(e.escapeMode=!0);e.attributePrefix=e.attributePrefix||"_",e.arrayAccessForm=e.arrayAccessForm||"none",e.emptyNodeForm=e.emptyNodeForm||"text",void 0===e.enableToStringFunc&&(e.enableToStringFunc=!0);e.arrayAccessFormPaths=e.arrayAccessFormPaths||[],void 0===e.skipEmptyTextNodesForObj&&(e.skipEmptyTextNodesForObj=!0);void 0===e.stripWhitespaces&&(e.stripWhitespaces=!0);e.datetimeAccessFormPaths=e.datetimeAccessFormPaths||[],void 0===e.useDoubleQuotes&&(e.useDoubleQuotes=!1);e.xmlElementsFilter=e.xmlElementsFilter||[],e.jsonPropertiesFilter=e.jsonPropertiesFilter||[],void 0===e.keepCData&&(e.keepCData=!1)}();var t={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};function n(e){var t=e.localName;return null==t&&(t=e.baseName),null!=t&&""!=t||(t=e.nodeName),t}function r(e){return"string"==typeof e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"):e}function a(e,t,n,r){for(var a=0;a<e.length;a++){var o=e[a];if("string"==typeof o){if(o==r)break}else if(o instanceof RegExp){if(o.test(r))break}else if("function"==typeof o&&o(t,n,r))break}return a!=e.length}function o(t,n,r){switch(e.arrayAccessForm){case"property":t[n]instanceof Array?t[n+"_asArray"]=t[n]:t[n+"_asArray"]=[t[n]]}!(t[n]instanceof Array)&&e.arrayAccessFormPaths.length>0&&a(e.arrayAccessFormPaths,t,n,r)&&(t[n]=[t[n]])}function s(e){var t=e.split(/[-T:+Z]/g),n=new Date(t[0],t[1]-1,t[2]),r=t[5].split(".");if(n.setHours(t[3],t[4],r[0]),r.length>1&&n.setMilliseconds(r[1]),t[6]&&t[7]){var a=60*t[6]+Number(t[7]);a=0+("-"==(/\d\d-\d\d:\d\d$/.test(e)?"-":"+")?-1*a:a),n.setMinutes(n.getMinutes()-a-n.getTimezoneOffset())}else-1!==e.indexOf("Z",e.length-1)&&(n=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())));return n}function i(n,r,o,s){return!(r==t.ELEMENT_NODE&&e.xmlElementsFilter.length>0)||a(e.xmlElementsFilter,n,o,s)}function l(r,c){if(r.nodeType==t.DOCUMENT_NODE){for(var u=new Object,v=r.childNodes,d=0;d<v.length;d++){if((p=v.item(d)).nodeType==t.ELEMENT_NODE)u[m=n(p)]=l(p,m)}return u}if(r.nodeType==t.ELEMENT_NODE){(u=new Object).__cnt=0;for(v=r.childNodes,d=0;d<v.length;d++){var p,m=n(p=v.item(d));if(p.nodeType!=t.COMMENT_NODE){var f=c+"."+m;i(u,p.nodeType,m,f)&&(u.__cnt++,null==u[m]?(u[m]=l(p,f),o(u,m,f)):(null!=u[m]&&(u[m]instanceof Array||(u[m]=[u[m]],o(u,m,f))),u[m][u[m].length]=l(p,f)))}}for(var h=0;h<r.attributes.length;h++){var g=r.attributes.item(h);u.__cnt++,u[e.attributePrefix+g.name]=g.value}var _=function(e){return e.prefix}(r);return null!=_&&""!=_&&(u.__cnt++,u.__prefix=_),null!=u["#text"]&&(u.__text=u["#text"],u.__text instanceof Array&&(u.__text=u.__text.join("\n")),e.stripWhitespaces&&(u.__text=u.__text.trim()),delete u["#text"],"property"==e.arrayAccessForm&&delete u["#text_asArray"],u.__text=function(t,n,r){if(e.datetimeAccessFormPaths.length>0){var o=r.split(".#")[0];return a(e.datetimeAccessFormPaths,t,n,o)?s(t):t}return t}(u.__text,m,c+"."+m)),null!=u["#cdata-section"]&&(u.__cdata=u["#cdata-section"],delete u["#cdata-section"],"property"==e.arrayAccessForm&&delete u["#cdata-section_asArray"]),0==u.__cnt&&"text"==e.emptyNodeForm?u="":1==u.__cnt&&null!=u.__text?u=u.__text:1!=u.__cnt||null==u.__cdata||e.keepCData?u.__cnt>1&&null!=u.__text&&e.skipEmptyTextNodesForObj&&(e.stripWhitespaces&&""==u.__text||""==u.__text.trim())&&delete u.__text:u=u.__cdata,delete u.__cnt,!e.enableToStringFunc||null==u.__text&&null==u.__cdata||(u.toString=function(){return(null!=this.__text?this.__text:"")+(null!=this.__cdata?this.__cdata:"")}),u}if(r.nodeType==t.TEXT_NODE||r.nodeType==t.CDATA_SECTION_NODE)return r.nodeValue}function c(t,n,a,o){var s="<"+(null!=t&&null!=t.__prefix?t.__prefix+":":"")+n;if(null!=a)for(var i=0;i<a.length;i++){var l=a[i],c=t[l];e.escapeMode&&(c=r(c)),s+=" "+l.substr(e.attributePrefix.length)+"=",e.useDoubleQuotes?s+='"'+c+'"':s+="'"+c+"'"}return s+=o?"/>":">"}function u(e,t){return"</"+(null!=e.__prefix?e.__prefix+":":"")+t+">"}function v(t,n){return!!("property"==e.arrayAccessForm&&function(e,t){return-1!==e.indexOf(t,e.length-t.length)}(n.toString(),"_asArray")||0==n.toString().indexOf(e.attributePrefix)||0==n.toString().indexOf("__")||t[n]instanceof Function)}function d(e){var t=0;if(e instanceof Object)for(var n in e)v(e,n)||t++;return t}function p(t,n,r){return 0==e.jsonPropertiesFilter.length||""==r||a(e.jsonPropertiesFilter,t,n,r)}function m(t){var n=[];if(t instanceof Object)for(var r in t)-1==r.toString().indexOf("__")&&0==r.toString().indexOf(e.attributePrefix)&&n.push(r);return n}function f(t){var n="";return t instanceof Object?n+=function(t){var n="";return null!=t.__cdata&&(n+="<![CDATA["+t.__cdata+"]]>"),null!=t.__text&&(e.escapeMode?n+=r(t.__text):n+=t.__text),n}(t):null!=t&&(e.escapeMode?n+=r(t):n+=t),n}function h(e,t){return""===e?t:e+"."+t}function g(e,t,n,r){var a="";if(0==e.length)a+=c(e,t,n,!0);else for(var o=0;o<e.length;o++)a+=c(e[o],t,m(e[o]),!1),a+=_(e[o],h(r,t)),a+=u(e[o],t);return a}function _(e,t){var n="";if(d(e)>0)for(var r in e)if(!v(e,r)&&(""==t||p(e,r,h(t,r)))){var a=e[r],o=m(a);if(null==a||void 0==a)n+=c(a,r,o,!0);else if(a instanceof Object)if(a instanceof Array)n+=g(a,r,o,t);else if(a instanceof Date)n+=c(a,r,o,!1),n+=a.toISOString(),n+=u(a,r);else d(a)>0||null!=a.__text||null!=a.__cdata?(n+=c(a,r,o,!1),n+=_(a,h(t,r)),n+=u(a,r)):n+=c(a,r,o,!0);else n+=c(a,r,o,!1),n+=f(a),n+=u(a,r)}return n+=f(e)}this.parseXmlString=function(e){var t,n=window.ActiveXObject||"ActiveXObject"in window;if(void 0===e)return null;if(window.DOMParser){var r=new window.DOMParser,a=null;if(!n)try{a=r.parseFromString("INVALID","text/xml").getElementsByTagName("parsererror")[0].namespaceURI}catch(e){a=null}try{t=r.parseFromString(e,"text/xml"),null!=a&&t.getElementsByTagNameNS(a,"parsererror").length>0&&(t=null)}catch(e){t=null}}else 0==e.indexOf("<?")&&(e=e.substr(e.indexOf("?>")+2)),(t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e);return t},this.asArray=function(e){return void 0===e||null==e?[]:e instanceof Array?e:[e]},this.toXmlDateTime=function(e){return e instanceof Date?e.toISOString():"number"==typeof e?new Date(e).toISOString():null},this.asDateTime=function(e){return"string"==typeof e?s(e):e},this.xml2json=function(e){return l(e)},this.xml_str2json=function(e){var t=this.parseXmlString(e);return null!=t?this.xml2json(t):null},this.json2xml_str=function(e){return _(e,"")},this.json2xml=function(e){var t=this.json2xml_str(e);return this.parseXmlString(t)},this.getVersion=function(){return"1.2.0"}}},"function"==typeof define&&n("nErl")?define([],r):"object"===("undefined"==typeof exports?"undefined":o()(exports))?e.exports=r():t.X2JS=r()}.call(t,n("f1Eh")(e))},K0dx:function(e,t,n){var r=n("pyF3");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("d575f840",r,!1,{})},K31e:function(e,t,n){"use strict";var r={name:"login",data:function(){return{nwuser:{},row:null,error:""}},methods:{login:function(e){e.preventDefault(),this.$store.dispatch("login",{email:this.nwuser.email,password:this.nwuser.password})}},watch:{user:function(e){null!==e&&void 0!==e&&this.$router.push("/profile")}},computed:{user:function(){return this.$store.getters.user}}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("v-app",[n("v-content",[n("v-container",{staticClass:"grey lighten-2",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{sm4:""}},[n("v-card",{staticClass:"elevation-12",attrs:{flat:""}},[n("v-toolbar",[n("v-icon",[e._v("lock")]),e._v(" "),n("v-toolbar-title",[e._v("Login")])],1),e._v(" "),n("v-card-text",[n("v-form",{on:{submit:e.login}},[n("v-text-field",{attrs:{name:"email",lable:"email",hint:"email",type:"text",required:""},model:{value:e.nwuser.email,callback:function(t){e.$set(e.nwuser,"email",t)},expression:"nwuser.email"}}),e._v(" "),n("v-text-field",{attrs:{name:"password",lable:"password",hint:"password",type:"password",required:""},model:{value:e.nwuser.password,callback:function(t){e.$set(e.nwuser,"password",t)},expression:"nwuser.password"}}),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]},s=o;var i=!1;var l=n("VU/8")(r,s,!1,function(e){i||n("lE0i")},"data-v-10d9df09",null);l.options.__file="src/components/login.vue";t.a=l.exports},MFsm:function(e,t,n){"use strict";var r={name:"book",data:function(){return{result:{},id:this.$route.params.id,src:this.$route.params.src,name:this.$route.params.name,similar:{}}},computed:{},methods:{getSimilar:function(e){var t=this;this.$store.dispatch("getSimilarBooks",{name:e}).then(function(e){t.similar=t.$store.getters.getSimilarBooks,console.log()}).catch(function(e){console.log("Error in fetching similar books")})},getBook:function(e,t){var n=this;this.$store.dispatch("grabBook",{src:e,id:t}).then(function(e){n.result=n.$store.getters.grabBook}).catch(function(e){console.log("Grab book Failed",e)})}},beforeRouteUpdate:function(e){this.id=e.params.id,this.getBook(this.src,this.id)},beforeMount:function(){this.getBook(this.src,this.id)},created:function(){console.log("Created"),this.getSimilar(this.name)}},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"book"},[n("v-app",[n("v-content",[n("v-container",{staticClass:"grey lighten-2",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{lg6:""}},[n("v-card",{staticClass:"elevation-12",attrs:{flat:""}},[e.result.hasOwnProperty("id")&!e.result.hasOwnProperty("error")?n("div",[n("v-card-media",{staticClass:"white--text",attrs:{height:"200px",src:e.result.image_url}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline"},[n("a",{attrs:{href:e.result.url,target:"_blank"}},[e._v(e._s(e.result.title))])])])],1)],1)],1),e._v(" "),n("v-card-title",[n("div",[n("span",{staticClass:"grey--text"},[e._v(e._s(e.result.average_rating))]),n("br"),e._v(" "),n("span",{domProps:{innerHTML:e._s(e.result.description)}}),n("br"),e._v(" "),n("span",[n("v-subheader",[e._v("Authors")]),e._v(" "),e._l(e.result.authors,function(t,r){return n("div",{key:r},[n("v-list-tile",{key:t.name},[n("v-list-tile-content",[n("a",{attrs:{href:t.link,target:"_blank"}},[n("v-list-tile-title",{domProps:{innerHTML:e._s(t.name)}})],1),e._v(" "),n("v-list-tile-sub-title",[n("span",{staticClass:"text--primary"},[e._v(e._s(t.average_rating))])])],1)],1)],1)})],2),e._v(" "),n("span",[n("v-subheader",[e._v("Similar Books")]),e._v(" "),n("div",e._l(e.similar,function(t){return n("li",[n("router-link",{attrs:{to:"/search/"+t.Name}},[e._v(e._s(t.Name))])],1)}))],1)])]),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"orange"}},[e._v("read")]),e._v(" "),n("v-btn",{attrs:{flat:"",color:"orange"}},[e._v("share")])],1)],1):e.result.error?n("div",[n("v-list-tile",[n("v-list-tile-content",[n("v-list-tile-title",[e._v("No search results found in "+e._s(e.index)+".")])],1)],1)],1):e._e(),e._v(" "),n("v-divider")],1)],1)],1)],1)],1)],1)],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]},s=o;var i=!1;var l=n("VU/8")(r,s,!1,function(e){i||n("JDQ1")},"data-v-49b8e679",null);l.options.__file="src/components/book.vue";t.a=l.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]},s=o;var i=!1;var l=n("VU/8")({name:"App"},s,!1,function(e){i||n("GHGh")},null,null);l.options.__file="src/App.vue";var c=l.exports,u=n("3EgV"),v=n.n(u),d=n("cHtD"),p=n("IcnI"),m=n("kxiW"),f=n.n(m);n("7zck"),n("gJtD");r.a.config.productionTip=!1,r.a.use(v.a);var h={apiKey:"AIzaSyCj2WDo_cLxdDPpFWd-BG3m1rwzMkKBNNk",authDomain:"book-manager-df1e4.firebaseapp.com",databaseURL:"https://book-manager-df1e4.firebaseio.com",projectId:"book-manager-df1e4",storageBucket:"book-manager-df1e4.appspot.com",messagingSenderId:"832377572325"};f.a.initializeApp(h),new r.a({router:d.a,store:p.a,components:{App:c},template:"<App/>"}).$mount("#app")},XSdk:function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\nh1[data-v-10d9df09],\nh2[data-v-10d9df09] {\n    font-weight: normal;\n}\nul[data-v-10d9df09] {\n    list-style-type: none;\n    padding: 0;\n}\nli[data-v-10d9df09] {\n    display: inline-block;\n    margin: 0 10px;\n}\na[data-v-10d9df09] {\n    color: #42b983;\n}\n","",{version:3,sources:["/home/ahmad/app/Geckos-Team-34/src/components/src/components/login.vue"],names:[],mappings:";AAqEA;;IAEA,oBAAA;CACA;AACA;IACA,sBAAA;IACA,WAAA;CACA;AACA;IACA,sBAAA;IACA,eAAA;CACA;AACA;IACA,eAAA;CACA",file:"login.vue",sourcesContent:['<template>\n    <div class="login">\n        <v-app>\n            <v-content>\n                <v-container fluid fill-height class="grey lighten-2">\n                    <v-layout align-center justify-center>\n                        <v-flex sm4>\n                            \x3c!--               <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>--\x3e\n                            <v-card class="elevation-12" flat>\n                                <v-toolbar>\n                                    <v-icon>lock</v-icon> <v-toolbar-title>Login</v-toolbar-title>\n                                </v-toolbar>\n                                <v-card-text>\n                                    <v-form @submit="login">\n                                        <v-text-field v-model="nwuser.email" name="email" lable="email" hint=\'email\' type="text" required></v-text-field>\n                                        <v-text-field v-model="nwuser.password" name="password" lable="password" hint=\'password\' type="password" required ></v-text-field>\n                                        <v-card-actions>\n                                            <v-spacer></v-spacer>\n                                            <v-btn type="submit" color="primary">Login</v-btn>\n                                        </v-card-actions>\n                                    </v-form>\n                                </v-card-text>\n                            </v-card>\n                        </v-flex>\n                    </v-layout>\n                </v-container>\n\n            </v-content>\n        </v-app>\n    </div>\n</template>\n\n<script>\nexport default {\n    name: "login",\n    data() {\n        return {\n            nwuser: {},\n            row: null,\n            error : \'\'\n        };\n    },\n    methods: {\n        login: function(e) {\n            e.preventDefault();\n            this.$store\n            .dispatch("login", {\n                email: this.nwuser.email,\n                password: this.nwuser.password\n            })\n        }\n    },\n    watch: {\n        user (value) {\n            if (value !== null && value !== undefined) {\n                this.$router.push(\'/profile\')\n            }\n        }\n    },\n    computed: {\n        user () {\n            return this.$store.getters.user\n        }\n    }\n}\n<\/script>\n\n\x3c!-- Add "scoped" attribute to limit CSS to this component only --\x3e\n<style scoped>\nh1,\nh2 {\n    font-weight: normal;\n}\nul {\n    list-style-type: none;\n    padding: 0;\n}\nli {\n    display: inline-block;\n    margin: 0 10px;\n}\na {\n    color: #42b983;\n}\n</style>\n'],sourceRoot:""}])},cHtD:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return v});var r=n("7+uW"),a=n("/ocq"),o=n("IcnI"),s=n("7biW"),i=n("MFsm"),l=n("K31e"),c=n("DBS9"),u=n("Fn2k");r.a.use(a.a);var v=new a.a({mode:"hash",base:e,routes:[{path:"/",component:s.a},{path:"/search",component:s.a},{path:"/search/:name",component:s.a},{path:"/book/:name/:src/:id/",component:i.a},{path:"/signup",component:c.a},{path:"/login",component:l.a},{path:"/profile",component:u.a,beforeEnter:function(e,t,n){o.a.getters.user?n():n("/login")}}]})}).call(t,"/")},gJtD:function(e,t){},lE0i:function(e,t,n){var r=n("XSdk");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("061185fa",r,!1,{})},pyF3:function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\nh1[data-v-4ad41bb8],\nh2[data-v-4ad41bb8] {\n  font-weight: normal;\n}\nul[data-v-4ad41bb8] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-4ad41bb8] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-4ad41bb8] {\n  color: #42b983;\n}\n","",{version:3,sources:["/home/ahmad/app/Geckos-Team-34/src/components/src/components/search.vue"],names:[],mappings:";AAyHA;;EAEA,oBAAA;CACA;AACA;EACA,sBAAA;EACA,WAAA;CACA;AACA;EACA,sBAAA;EACA,eAAA;CACA;AACA;EACA,eAAA;CACA",file:"search.vue",sourcesContent:['<template>\n  <div class="search">\n    <v-app>\n      <v-content>\n        <v-container fluid fill-height class="grey lighten-2">\n          <v-layout align-center justify-center>\n            <v-flex lg8>\n              <v-card class="elevation-12" flat>\n                <v-toolbar>\n                  <v-icon>search</v-icon> <v-toolbar-title>Search for books</v-toolbar-title>\n                  <v-spacer></v-spacer>\n                  <v-toolbar-items  v-if="!user" class="hidden-sm-and-down">\n                      <router-link to="/login" tag="v-btn">Login</router-link>\n                      <router-link to="/signup" tag="v-btn" flat>Signup</router-link>\n                  </v-toolbar-items>\n                  <v-toolbar-items  v-else class="hidden-sm-and-down">\n                      <router-link to="/profile" tag="v-btn">profile</router-link>\n                  </v-toolbar-items>\n                </v-toolbar>\n                <v-card-text>\n                  <p>Enter book title,isbn or Author name</p>\n                  <v-form ref="searchForm" @submit="bookSearch">\n                    <v-text-field v-model="aBook.name" name="search" lable="search" type="text" required icon> <v-icon>search</v-icon></v-text-field>\n                      <v-card-actions>\n                        <v-spacer></v-spacer>\n                        <v-btn type="submit" color="primary">Search</v-btn>\n                      </v-card-actions>\n                  </v-form>\n                </v-card-text>\n\x3c!--- SEARCH RESULTS --\x3e\n <div v-if="(Object.keys(searchResults.Goodreads).length != 0) || (Object.keys(searchResults.Google).length != 0)">\n               <v-toolbar color="grey" dark>\n                  <v-toolbar-title>Search Results</v-toolbar-title>\n                  <v-spacer></v-spacer>\n                </v-toolbar>\n                <v-list two-line>\n                  <span v-for="(result, index) in searchResults" v-bind:key="index">\n                    <v-subheader>{{ index }} Results</v-subheader>\n\n                    <div v-if="!result[0].error" v-for="(book, key) in result" v-bind:key="key">\n                        <v-list-tile :key="book.title" avatar>\n                      <router-link :to="\'/book/\'+aBook.name+\'/\'+index+\'/\'+book.id">\n                         <v-list-tile-avatar>\n                        <img :src="book.small_image_url" >\n                      </v-list-tile-avatar>\n                      </router-link>\n                      <v-list-tile-content>\n                      <router-link :to="\'/book/\'+aBook.name+\'/\'+index+\'/\'+book.id">\n                        <v-list-tile-title v-html="book.title"></v-list-tile-title>\n                      </router-link>\n                        <v-list-tile-sub-title><span class=\'text--primary\'>{{book.author}}</span>&mdash; {{book.average_rating}}</v-list-tile-sub-title>\n                      </v-list-tile-content>\n                    </v-list-tile>\n                    </div>\n                    <div v-else>\n                      <v-list-tile>\n                      <v-list-tile-content>\n                        <v-list-tile-title >No search results found in {{index}}.</v-list-tile-title>\n                      </v-list-tile-content>\n                    </v-list-tile>\n                      </div>\n                    <v-divider ></v-divider>\n                  </span>\n                </v-list>\n </div>\n              </v-card>\n            </v-flex>\n          </v-layout>\n        </v-container>\n\n      </v-content>\n    </v-app>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "search",\n  data() {\n    return {\n      aBook: { name: "" },\n      row: null,\n      searchResults: { Goodreads: [], Google: [] },\n      user: null\n    };\n  },\n  methods: {\n    bookSearch: function(e) {\n\n      this.$store\n        .dispatch("searchBooks", { bookName: this.aBook.name })\n        .then(res => {\n          return this.$store.getters.getSearchResults;\n        })\n        .then(res => {\n          this.searchResults.Google = res.Google;\n          this.searchResults.Goodreads = res.Goodreads;\n        })\n        .catch(err => {\n          console.log("search failed", err);\n        });\n              e.preventDefault();\n\n    },\n    getUser(){\n           this.user = this.$store.getters.user;\n       }\n  },\n  computed: {},\n  mounted: function (){\n    if (this.$route.params.name){\n      this.aBook.name = this.$route.params.name;\n      this.bookSearch();\n    }\n\n  }\n};\n<\/script>\n\n\x3c!-- Add "scoped" attribute to limit CSS to this component only --\x3e\n<style scoped>\nh1,\nh2 {\n  font-weight: normal;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\nli {\n  display: inline-block;\n  margin: 0 10px;\n}\na {\n  color: #42b983;\n}\n</style>\n'],sourceRoot:""}])},"uDL/":function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"book.vue",sourceRoot:""}])},"z/+d":function(e,t,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"App.vue",sourceRoot:""}])}},["NHnr"]);
//# sourceMappingURL=app.9b5f7c895936dcba5b68.js.map