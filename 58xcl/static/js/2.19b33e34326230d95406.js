webpackJsonp([2],{22:function(t,e,n){n(56);var a=n(6)(n(44),n(64),null,null);t.exports=a.exports},27:function(t,e,n){"use strict";var a="https://www.58xcl.com/ns",i=function(t,e,n){e=encodeURIComponent(window.JSON.stringify(e));var a="jsonpCallback"+1*new Date+Math.floor(1e4*Math.random()),i=document.createElement("script"),s=document.getElementsByTagName("head")[0];t.indexOf("?")>-1?t+="&CallBack="+a+"&data="+e:t+="?CallBack="+a+"&data="+e,i.src=t,s.appendChild(i),window[a]=window[a]||function(t){window[a]=void 0;try{delete window[a]}catch(t){}s&&s.removeChild(i),n(t)}},s={func:"function",params:{}},r={getJournalismtList:function(t,e,n,r){s.func="getJournalismtList",s.params.t=t,s.params.p=e,s.params.cpp=n,i(a+"/consult?f=t",s,r)},getJournalismtById:function(t,e){s.func="getJournalismtById",s.params.id=t,i(a+"/consult?f=t",s,e)},getFundGrades:function(t,e,n,r,o,u,c,l,d,p,f,h,m){s.func="getFundGrades",s.params.is=t,s.params.pt=e,s.params.et=n,s.params.tr=r,s.params.ir=o,s.params.nrr=u,s.params.err=c,s.params.t=l,s.params.ia=d,s.params.p=p,s.params.cpp=f,s.params.o=h,i(a+"/datagrade?f=t",s,m)},getFundIndexBaseByType:function(t,e){s.func="getFundIndexBaseByType",s.params.t=t,i(a+"/datagrade?f=t",s,e)},SiMuWangCompanyByCompanySID:function(t,e){s.func="SiMuWangCompanyByCompanySID",s.params.csid=t,i(a+"/datagrade?f=t",s,e)},getCompanyFundGrades:function(t,e){s.func="getCompanyFundGrades",s.params.sid=t,i(a+"/datagrade?f=t",s,e)},fullTextSearch:function(t,e){i("https://www.58xcl.com/qs/qs?func=fullTextSearch&kw="+t+"&t=0&p=1&c=8",s,e)},getSiMuWangProductInfoBySID:function(t,e){s.func="getSiMuWangProductInfoBySID",s.params.psid=t,i(a+"/datacapture?f=t",s,e)},getPrivateFundGrade:function(t,e){s.func="getPrivateFundGrade",s.params.sid=t,i(a+"/datagrade?f=t",s,e)},getProductNets:function(t,e){s.func="getProductNets",s.params.sid=t,i(a+"/datagrade?f=t",s,e)},getCSI:function(t,e,n){s.func="getCSI",s.params.bt=t,s.params.et=e,i(a+"/product?f=t",s,n)},getFundIndexByType:function(t,e){s.func="getFundIndexByType",s.params.t=t,s.params.g=0,i(a+"/datagrade?f=t",s,e)},getSiMuWangManagerBySID:function(t,e){s.func="getSiMuWangManagerBySID",s.params.psid=t,i(a+"/datagrade?f=t",s,e)},SiMuWangCompanyBySID:function(t,e){s.func="SiMuWangCompanyBySID",s.params.psid=t,i(a+"/datagrade?f=t",s,e)}};e.a=r},28:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{bottomNav:this.$route.path,bottomNavColor:"home"}},methods:{handleChange:function(t){this.bottomNav=t,this.$router.push(t)}}}},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27);e.default={props:{title:{type:String,default:"新策略"}},data:function(){return{dataSource:[],links:[],open:!1,value:"",showBackBtn:-1===["Index","Grade","News","Exponent"].indexOf(this.$route.name)}},methods:{handlechange:function(t){this.open=!1,document.querySelector(".mu-overlay").style.display="none",this.$router.push("/grade/"+this.links[this.dataSource.indexOf(t)])},toggle:function(){this.open=!this.open},back:function(){this.$router.back()},handleInput:function(t){var e=this;this.dataSource=[],this.links=[],a.a.fullTextSearch(t,function(t){t.results&&t.results.length&&t.results.forEach(function(t,n){e.dataSource.push(t.k),e.links.push(t.lp)})})}}}},30:function(t,e,n){var a=n(6)(n(28),n(33),null,null);t.exports=a.exports},31:function(t,e,n){var a=n(6)(n(29),n(32),null,null);t.exports=a.exports},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("mu-appbar",{attrs:{titleClass:"center"}},[n("div",{slot:"default"},[t._v(t._s(t.title))]),t._v(" "),t.showBackBtn?n("mu-icon-button",{staticStyle:{position:"absolute"},attrs:{icon:"arrow_back"},on:{click:t.back},slot:"left"}):t._e(),t._v(" "),n("mu-icon-button",{staticStyle:{position:"absolute",right:"10px"},attrs:{icon:"search"},on:{click:t.toggle},slot:"right"})],1),t._v(" "),n("mu-drawer",{attrs:{open:t.open,docked:!1},on:{close:t.toggle}},[n("mu-auto-complete",{attrs:{label:"请输入基金关键词",labelFloat:"",value:t.value,dataSource:t.dataSource,filter:"noFilter"},on:{input:t.handleInput,change:t.handlechange}})],1)],1)},staticRenderFns:[]}},33:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("mu-paper",[n("mu-bottom-nav",{attrs:{value:t.bottomNav},on:{change:t.handleChange}},[n("mu-bottom-nav-item",{attrs:{value:"/",title:"主页",icon:"home"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"/grade",title:"评级",icon:"equalizer"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"/exponent",title:"指数",icon:"trending_up"}}),t._v(" "),n("mu-bottom-nav-item",{attrs:{value:"/news",title:"资讯",icon:"rss_feed"}})],1)],1)],1)},staticRenderFns:[]}},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),i=n(30),s=n.n(i),r=n(31),o=n.n(r),u=n(75);n.n(u);n(55),e.default={data:function(){return{list:[],value:"simple1"}},mounted:function(){this.getData(1,"chart1","股票型"),this.getData(2,"chart2","期货型")},methods:{initEcharts:function(t,e,n,a){var i=window.echarts.init(document.getElementById(t));a=a||"";var s={backgroundColor:"#fff",color:["#8352F2"],legend:{data:[a]},tooltip:{trigger:"axis",formatter:"{a} {b} : {c}"},dataZoom:{show:!1,realtime:!0,start:0},grid:{x:40,y:30,x2:2,y2:20},xAxis:[{type:"category",data:e}],yAxis:[{type:"value",min:1e3,max:2600,axisLabel:{formatter:"{value}"}}],series:[{name:a,type:"line",data:n}],noDataLoadingOption:{effect:"whirling"}};i.setOption(s)},getData:function(t,e,n){var i=this;a.a.getFundIndexBaseByType(t,function(t){if(200===t.code&&t.results&&t.results.length>0){for(var a=[],s=[],r=0;r<t.results.length;r++)a.push(t.results[r].rts.substring(0,10)),s.push(t.results[r].v.toFixed(2));i.initEcharts(e,a,s,n)}else i.initEcharts("chart1",[],[]),i.initEcharts("chart2",[],[])})}},components:{GlobalFooter:s.a,GlobalHeader:o.a,Swipe:u.Swipe,SwipeItem:u.SwipeItem}}},49:function(t,e,n){e=t.exports=n(15)(),e.push([t.i,".my-swipe{height:150px!important}.my-swipe img{width:100%;height:150px}","",{version:3,sources:["D:/WorkSpace/xcl-museui/src/views/Index.vue"],names:[],mappings:"AACA,UACE,sBAAwB,CACzB,AACD,cACE,WAAY,AACZ,YAAc,CACf",file:"Index.vue",sourcesContent:["\n.my-swipe {\n  height: 150px!important;\n}\n.my-swipe img {\n  width: 100%;\n  height: 150px;\n}\n"],sourceRoot:""}])},54:function(t,e,n){e=t.exports=n(15)(),e.push([t.i,".mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}.mint-swipe-items-wrap{-webkit-transform:translateZ(0);transform:translateZ(0)}.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:100%;height:100%;display:none}.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mint-swipe-indicator{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2;margin:0 3px}.mint-swipe-indicator.is-active{background:#fff}","",{version:3,sources:["D:/WorkSpace/xcl-museui/node_modules/.npminstall/vue-swipe/2.0.3/vue-swipe/dist/vue-swipe.css"],names:[],mappings:"AAAA,mCAAmC,gBAAgB,kBAAkB,WAAW,CAAC,uBAAuB,gCAAgC,uBAAuB,CAAC,2BAA2B,kBAAkB,oCAAoC,4BAA4B,WAAW,YAAY,YAAY,CAAC,qCAAqC,cAAc,uBAAuB,cAAc,CAAC,uBAAuB,kBAAkB,YAAY,SAAS,mCAAmC,0BAA0B,CAAC,sBAAsB,UAAU,WAAW,qBAAqB,mBAAmB,gBAAgB,WAAW,YAAY,CAAC,gCAAgC,eAAe,CAAC",file:"vue-swipe.css",sourcesContent:[".mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}.mint-swipe-items-wrap{-webkit-transform:translateZ(0);transform:translateZ(0)}.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);transform:translateX(-100%);width:100%;height:100%;display:none}.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.mint-swipe-indicator{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2;margin:0 3px}.mint-swipe-indicator.is-active{background:#fff}"],sourceRoot:""}])},55:function(t,e,n){var a=n(54);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(16)("55cd1fff",a,!0)},56:function(t,e,n){var a=n(49);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(16)("f3f6f7fc",a,!0)},64:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("global-header"),t._v(" "),n("global-footer"),t._v(" "),n("div",{staticClass:"infinite-container"},[n("swipe",{staticClass:"my-swipe"},[n("swipe-item",[n("a",{attrs:{href:"/#/grade"}},[n("img",{attrs:{src:"/static/banner02.png"}})])]),t._v(" "),n("swipe-item",[n("a",{attrs:{href:"/#/exponent"}},[n("img",{attrs:{src:"/static/banner01.png"}})])]),t._v(" "),n("swipe-item",[n("a",{attrs:{href:"/#/news"}},[n("img",{attrs:{src:"/static/banner03.png"}})])])],1),t._v(" "),n("mu-sub-header",[t._v("股票型私募基金指数")]),t._v(" "),n("mu-content-block",[n("div",{staticStyle:{height:"200px"},attrs:{id:"chart1"}})]),t._v(" "),n("mu-sub-header",[t._v("期货型私募基金指数")]),t._v(" "),n("mu-content-block",[n("div",{staticStyle:{height:"200px"},attrs:{id:"chart2"}})])],1)],1)},staticRenderFns:[]}},75:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SwipeItem=e.Swipe=void 0;var i=n(7),s=a(i),r=n(6),o=a(r);e.Swipe=s.default,e.SwipeItem=o.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mt-swipe-item",mounted:function(){this.$parent&&this.$parent.swipeItemCreated(this)},destroyed:function(){this.$parent&&this.$parent.swipeItemDestroyed(this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),i=n(3);e.default={name:"mt-swipe",created:function(){this.dragState={}},data:function(){return{ready:!1,dragging:!1,userScrolling:!1,animating:!1,index:0,pages:[],timer:null,reInitTimer:null,noDrag:!1}},props:{speed:{type:Number,default:300},auto:{type:Number,default:3e3},continuous:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},noDragWhenSingle:{type:Boolean,default:!0},prevent:{type:Boolean,default:!1}},methods:{swipeItemCreated:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},swipeItemDestroyed:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},translate:function(t,e,n,i){var s=this,r=arguments;if(n){this.animating=!0,t.style.webkitTransition="-webkit-transform "+n+"ms ease-in-out",setTimeout(function(){t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},50);var o=!1,u=function(){o||(o=!0,s.animating=!1,t.style.webkitTransition="",t.style.webkitTransform="",i&&i.apply(s,r))};(0,a.once)(t,"webkitTransitionEnd",u),setTimeout(u,n+100)}else t.style.webkitTransition="",t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},reInitPages:function(){var t=this.$children;this.noDrag=1===t.length&&this.noDragWhenSingle;var e=[];this.index=0,t.forEach(function(t,n){e.push(t.$el),(0,i.removeClass)(t.$el,"is-active"),0===n&&(0,i.addClass)(t.$el,"is-active")}),this.pages=e},doAnimate:function(t,e){var n=this;if(0!==this.$children.length&&(e||!(this.$children.length<2))){var a,s,r,o,u,c=this.speed||300,l=this.index,d=this.pages,p=d.length;e?(a=e.prevPage,r=e.currentPage,s=e.nextPage,o=e.pageWidth,u=e.offsetLeft):(o=this.$el.clientWidth,r=d[l],a=d[l-1],s=d[l+1],this.continuous&&d.length>1&&(a||(a=d[d.length-1]),s||(s=d[0])),a&&(a.style.display="block",this.translate(a,-o)),s&&(s.style.display="block",this.translate(s,o)));var f,h=this.$children[l].$el;"prev"===t?(l>0&&(f=l-1),this.continuous&&0===l&&(f=p-1)):"next"===t&&(p-1>l&&(f=l+1),this.continuous&&l===p-1&&(f=0));var m=function(){if(void 0!==f){var t=n.$children[f].$el;(0,i.removeClass)(h,"is-active"),(0,i.addClass)(t,"is-active"),n.index=f}a&&(a.style.display=""),s&&(s.style.display="")};setTimeout(function(){"next"===t?(n.translate(r,-o,c,m),s&&n.translate(s,0,c)):"prev"===t?(n.translate(r,o,c,m),a&&n.translate(a,0,c)):(n.translate(r,0,c,m),void 0!==u?(a&&u>0&&n.translate(a,-1*o,c),s&&0>u&&n.translate(s,o,c)):(a&&n.translate(a,-1*o,c),s&&n.translate(s,o,c)))},10)}},next:function(){this.doAnimate("next")},prev:function(){this.doAnimate("prev")},doOnTouchStart:function(t){if(!this.noDrag){var e=this.$el,n=this.dragState,a=t.touches[0];n.startTime=new Date,n.startLeft=a.pageX,n.startTop=a.pageY,n.startTopAbsolute=a.clientY,n.pageWidth=e.offsetWidth,n.pageHeight=e.offsetHeight;var i=this.$children[this.index-1],s=this.$children[this.index],r=this.$children[this.index+1];this.continuous&&this.pages.length>1&&(i||(i=this.$children[this.$children.length-1]),r||(r=this.$children[0])),n.prevPage=i?i.$el:null,n.dragPage=s?s.$el:null,n.nextPage=r?r.$el:null,n.prevPage&&(n.prevPage.style.display="block"),n.nextPage&&(n.nextPage.style.display="block")}},doOnTouchMove:function(t){if(!this.noDrag){var e=this.dragState,n=t.touches[0];e.currentLeft=n.pageX,e.currentTop=n.pageY,e.currentTopAbsolute=n.clientY;var a=e.currentLeft-e.startLeft,i=e.currentTopAbsolute-e.startTopAbsolute,s=Math.abs(a),r=Math.abs(i);if(5>s||s>=5&&r>=1.73*s)return void(this.userScrolling=!0);this.userScrolling=!1,t.preventDefault(),a=Math.min(Math.max(1-e.pageWidth,a),e.pageWidth-1);var o=0>a?"next":"prev";e.prevPage&&"prev"===o&&this.translate(e.prevPage,a-e.pageWidth),this.translate(e.dragPage,a),e.nextPage&&"next"===o&&this.translate(e.nextPage,a+e.pageWidth)}},doOnTouchEnd:function(){if(!this.noDrag){var t=this.dragState,e=new Date-t.startTime,n=null,a=t.currentLeft-t.startLeft,i=t.currentTop-t.startTop,s=t.pageWidth,r=this.index,o=this.pages.length;if(300>e){var u=Math.abs(a)<5&&Math.abs(i)<5;(isNaN(a)||isNaN(i))&&(u=!0),u&&this.$children[this.index].$emit("tap")}300>e&&void 0===t.currentLeft||((300>e||Math.abs(a)>s/2)&&(n=0>a?"next":"prev"),this.continuous||(0===r&&"prev"===n||r===o-1&&"next"===n)&&(n=null),this.$children.length<2&&(n=null),this.doAnimate(n,{offsetLeft:a,pageWidth:t.pageWidth,prevPage:t.prevPage,currentPage:t.dragPage,nextPage:t.nextPage}),this.dragState={})}}},destroyed:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.reInitTimer&&(clearTimeout(this.reInitTimer),this.reInitTimer=null)},mounted:function(){var t=this;this.ready=!0,this.auto>0&&(this.timer=setInterval(function(){t.dragging||t.animating||t.next()},this.auto)),this.reInitPages();var e=this.$el;e.addEventListener("touchstart",function(e){t.prevent&&e.preventDefault(),t.animating||(t.dragging=!0,t.userScrolling=!1,t.doOnTouchStart(e))}),e.addEventListener("touchmove",function(e){t.dragging&&t.doOnTouchMove(e)}),e.addEventListener("touchend",function(e){return t.userScrolling?(t.dragging=!1,void(t.dragState={})):void(t.dragging&&(t.doOnTouchEnd(e),t.dragging=!1))})}}},function(t,e){"use strict";var n=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},a=function(t,e){if(!t||!e)return!1;if(-1!=e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1},i=function(t,e){if(t){for(var n=t.className,i=(e||"").split(" "),s=0,r=i.length;r>s;s++){var o=i[s];o&&(t.classList?t.classList.add(o):a(t,o)||(n+=" "+o))}t.classList||(t.className=n)}},s=function(t,e){if(t&&e){for(var i=e.split(" "),s=" "+t.className+" ",r=0,o=i.length;o>r;r++){var u=i[r];u&&(t.classList?t.classList.remove(u):a(t,u)&&(s=s.replace(" "+u+" "," ")))}t.classList||(t.className=n(s))}};t.exports={hasClass:a,addClass:i,removeClass:s}},function(t,e){"use strict";var n=function(){return document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),a=function(){return document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)}}(),i=function(t,e,i){n(t,e,function n(){i&&i.apply(this,arguments),a(t,e,n)})};t.exports={on:n,off:a,once:i}},function(t,e){},function(t,e,n){var a,i;a=n(1);var s=n(8);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e,n){var a,i;n(5),a=n(2);var s=n(9);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"mint-swipe-item"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mint-swipe"},[n("div",{ref:"wrap",staticClass:"mint-swipe-items-wrap"},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showIndicators,expression:"showIndicators"}],staticClass:"mint-swipe-indicators"},t._l(t.pages,function(e,a){return n("div",{staticClass:"mint-swipe-indicator",class:{"is-active":a===t.index}})}))])},staticRenderFns:[]}}])})}});
//# sourceMappingURL=2.19b33e34326230d95406.js.map