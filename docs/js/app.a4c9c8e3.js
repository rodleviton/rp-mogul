(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],l=0,f=[];l<o.length;l++)s=o[l],n[s]&&f.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={app:0},r=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"41d636ee"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i=n[t];if(0!==i)if(i)e.push(i[2]);else{var a=new Promise(function(e,a){i=n[t]=[e,a]});e.push(i[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),r=function(e){c.onerror=c.onload=null,clearTimeout(u);var i=n[t];if(0!==i){if(i){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,i[1](s)}n[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/rp-mogul/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"154e":function(t,e,i){},"24f6":function(t,e,i){},"34be":function(t,e,i){},"4c26":function(t,e,i){},"4ced":function(t,e,i){},"54b1":function(t,e,i){"use strict";var a=i("78c0"),n=i.n(a);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Shell",[i("Header",[i("Logo",{attrs:{title:"Movies"}}),i("Avatar",{attrs:{src:"img/user/avatar.jpg"}})],1),i("router-view")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"avatar"},[i("img",{attrs:{src:t.src}})])},o=[],c=a["a"].extend({props:{src:String}}),u=c,l=(i("f918"),i("2877")),d=Object(l["a"])(u,s,o,!1,null,"e0b24fda",null),f=d.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[t._t("default")],2)},g=[],p=a["a"].extend({}),v=p,m=(i("54b1"),Object(l["a"])(v,h,g,!1,null,"90b9a596",null)),b=m.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"logo"},[t._v("\n  "+t._s(t.title)+"\n  "),i("div",{staticClass:"period"})])},x=[],y=a["a"].extend({props:{title:String}}),k=y,P=(i("9a94"),Object(l["a"])(k,C,x,!1,null,"26dccac6",null)),S=P.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"shell"},[i("div",{staticClass:"container"},[t._t("default")],2),i("div",{staticClass:"shadow"})])},O=[],D=a["a"].extend({}),$=D,j=(i("e158"),Object(l["a"])($,_,O,!1,null,"78de464c",null)),w=j.exports,M=a["a"].extend({components:{Avatar:f,Header:b,Logo:S,Shell:w}}),T=M,E=(i("5c0b"),Object(l["a"])(T,n,r,!1,null,null,null)),I=E.exports,X=i("8c4f"),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("CardStack",{attrs:{cards:t.data,onChange:t.onChange,onMove:t.onMove}}),i("Panel",t._l(t.data,function(e,a){return i("div",{key:a,style:{position:"absolute",top:t.getYPosition(a)+"px",transition:"top "+(t.isDragging||!t.isVisible(a)?0:t.speed)+"s ease 0s, opacity "+(t.isDragging||!t.isVisible(a)?0:t.speed)+"s ease 0s",opacity:t.getOpacity(a)}},[i("h2",{staticClass:"title"},[t._v(t._s(e.title))]),i("h3",{staticClass:"date"},[t._v("\n        Coming in\n        "),i("span",[t._v(t._s(e.release))])])])}),0)],1)},R=[],N=(i("20d6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},t._l(t.stack,function(e,a){return i("Card",{key:e._uuid,style:{top:e.yPos+"px",width:e.width+"px",height:e.height+"px",opacity:e.opacity,display:a>t.maxVisibleCards+2?"none":"flex",zIndex:e.zIndex,position:"absolute",transition:"transform "+(t.isDragging?0:t.speed)+"s ease 0s",transform:"scale("+e.scale+", "+e.scale+") translate("+e.xPos+"px, 0)",transformOrigin:0},attrs:{src:e.cover,scale:e.imageScale,isDragging:t.isDragging,opacity:e.imageOpacity}})}),1)}),L=[],W=(i("6c7b"),i("cebc")),A=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("img",{style:{opacity:t.opacity,transform:"scale("+t.getScale()+", "+t.getScale(),transition:"transform "+(t.isDragging?0:t.speed)+"s, opacity "+(t.isDragging?0:t.speed)+"s"},attrs:{src:t.src,draggable:"false"}})])}),H=[],q=a["a"].extend({data:function(){return{speed:.2}},methods:{getScale:function(){return 1===this.scale?this.scale/2:(1-this.scale+1)/2}},props:{scale:{type:Number,default:1},isDragging:{type:Boolean,default:!1},src:{type:String},opacity:{type:Number,default:1}}}),B=q,F=(i("87e8"),Object(l["a"])(B,A,H,!1,null,"c9f712e0",null)),G=F.exports;function z(t,e,i){var a;return function(){var n=this,r=arguments,s=function(){a=null,i||t.apply(n,r)},o=i&&!a;clearTimeout(a),a=setTimeout(s,e),o&&t.apply(n,r)}}var J=i("c64e"),U=i.n(J),Y=a["a"].extend({props:{onMove:{type:Function,required:!0},onChange:{type:Function,required:!0},maxVisible:{type:Number,default:function(){return 3}},cards:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{activeCardIndex:1,activeCardOffset:0,cardWidth:286,cardHeight:458,debounceRate:10,dragging:!1,dragStartX:0,isTouch:"ontouchstart"in window,isDragging:!1,isDraggingLeft:!1,isDraggingRight:!1,opacityMultiplier:.35,stackRestPoints:[],scaleMultiplier:.075,stack:[],stackGutter:24,speed:.2}},components:{Card:G},methods:{updateStack:function(){var t=this,e=this.$data.stack[this.activeCardIndex],i=this.stackRestPoints[this.activeCardIndex],a=e.xPos-i;if(this.isDraggingRight){if(a>this.activeCardMaxTravelDistance/3){var n=this.$data.stack.shift();this.$data.stack.push(n)}}else if(-1*a>this.activeCardMaxTravelDistance/3){var r=this.$data.stack.pop();this.$data.stack.unshift(r)}this.$data.stack=this.$data.stack.map(function(e,i){return Object(W["a"])({_uuid:e._uuid},t.getDefaultCardProps(e,i))}),this.onStackUpdate()},moveStack:function(t){var e=this;this.$data.stack=this.$data.stack.map(function(i,a){var n=e.getDefaultCardProps(i,a),r=e.getCardStackPosition(a);e.activeCardOffset=t-e.dragStartX,e.isDraggingLeft=t<e.dragStartX,e.isDraggingRight=t>e.dragStartX,e.isDraggingRight?e.activeCardIndex=1:e.activeCardIndex=0;var s=a===e.activeCardIndex;return s&&e.onMove(e.activeCardOffset/e.activeCardMaxTravelDistance),Object(W["a"])({},n,{_uuid:i._uuid,xPos:e.calculateCardProp(n.xPos,e.cardXPosOffset,1,s),opacity:e.isCardVisible(r)?1:0,imageOpacity:e.isCardVisible(r)?e.calculateCardProp(n.imageOpacity,e.opacityMultiplier,0,s):0,scale:e.calculateCardProp(n.scale,e.scaleMultiplier,0,s),imageScale:e.calculateCardProp(n.imageScale,4*e.scaleMultiplier,0,s)})})},calculateCardProp:function(t,e,i,a){var n=a?i:e/this.activeCardMaxTravelDistance;return t+n*this.activeCardOffset},getDragXPos:function(t){return this.isTouch?t.touches[0].clientX:t.clientX},onTouchStart:function(t){var e=this.getDragXPos(t);this.isDragging=!0,this.dragStartX=e-this.elementXPosOffset,this.$el.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag)},onTouchEnd:function(){this.isDragging=!1,this.dragStartX=0,this.$el.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),this.updateStack()},onDrag:function(t){var e=this.getDragXPos(t);this.moveStack(e-this.elementXPosOffset)},getCardStackPosition:function(t){return t-1},getCardProp:function(t,e){var i=1-t*e;return i<=1?i<0?0:i:1},isCardVisible:function(t){return t<this.$props.maxVisible},getDefaultCardProps:function(t,e){var i=this.getCardStackPosition(e);return{id:t.id,background:"#fff",title:t.title,height:this.cardHeight,width:this.cardWidth,xPos:this.stackRestPoints[e],yPos:0,zIndex:this.totalCards-e,opacity:this.isCardVisible(i)?1:0,imageOpacity:this.isCardVisible(i)?this.getCardProp(i,this.opacityMultiplier):0,scale:this.getCardProp(i,this.scaleMultiplier),imageScale:this.getCardProp(i,4*this.scaleMultiplier),cover:t.cover,isVisible:this.isCardVisible(i)}},getStackRestPoints:function(){var t=this;return new Array(this.totalCards).fill("").map(function(e,i){if(0===i)return t.stackWidth;var a=t.getCardStackPosition(i),n=t.cardXPosOffset*a;return t.stackWidth-t.cardWidth-n-t.stackGutter})},onStackMove:function(t){this.$props.onMove(t)},onStackUpdate:function(){this.$props.onChange(this.$data.stack[1].id)}},computed:{maxVisibleCards:function(){return this.$props.maxVisible},totalCards:function(){return this.$props.cards.length},cardXPosOffset:function(){return(this.stackWidth-2*this.stackGutter-this.cardWidth)/(this.maxVisibleCards-1)},stackWidth:function(){return this.$el.clientWidth},stackHeight:function(){return this.$el.clientHeight},elementXPosOffset:function(){return this.$el.getBoundingClientRect().x},activeCardMaxTravelDistance:function(){return this.cardWidth+this.stackGutter}},mounted:function(){var t=this,e=z(this.onTouchStart,this.debounceRate);document.addEventListener(this.isTouch?"touchstart":"mousedown",e);var i=z(this.onTouchEnd,this.debounceRate);document.addEventListener(this.isTouch?"touchend":"mouseup",i);var a=[].concat(this.$props.cards),n=a.pop();a.unshift(n),this.$data.stackRestPoints=this.getStackRestPoints(),this.$data.stack=a.map(function(e,i){return Object(W["a"])({_uuid:U()()},t.getDefaultCardProps(e,i))}),this.onStackUpdate()}}),K=Y,Q=(i("dd7c"),Object(l["a"])(K,N,L,!1,null,"794b22a5",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel"},[t._t("default")],2)},et=[],it=a["a"].extend({}),at=it,nt=(i("971d"),Object(l["a"])(at,tt,et,!1,null,"c957ae32",null)),rt=nt.exports,st=[{id:"1",title:"Blade Runner 2049",release:"10.6.17",cover:"img/covers/blade-runner.jpg",background:"red"},{id:"2",title:"Justice League",release:"10.6.17",cover:"img/covers/justice-league.jpg",background:"green"},{id:"3",title:"Ex Machina",release:"10.6.17",cover:"img/covers/ex-machina.jpg",background:"blue"},{id:"4",title:"The Martian",release:"10.6.17",cover:"img/covers/the-martian.jpg",background:"red"},{id:"5",title:"Alien",release:"10.6.17",cover:"img/covers/alien.jpg",background:"green"},{id:"6",title:"Interstellar",release:"10.6.17",cover:"img/covers/interstellar.jpg",background:"blue"}],ot=a["a"].extend({components:{CardStack:Z,Panel:rt},data:function(){return{data:st,offset:20,activeIndex:0,factor:0,isDragging:!1,speed:.2}},methods:{isCurrent:function(t){return t===this.activeIndex},isPrevious:function(t){var e=this.activeIndex>0?this.activeIndex-1:this.data.length-1;return t===e},isNext:function(t){var e=this.activeIndex<this.data.length-1?this.activeIndex+1:0;return t===e},isVisible:function(t){return this.isCurrent(t)||this.isPrevious(t)||this.isNext(t)},onChange:function(t){this.isDragging=!1,this.activeIndex=this.data.findIndex(function(e){return t===e.id})},getYPosition:function(t){return this.isDragging?this.isCurrent(t)?1-this.factor*this.offset*2:this.isPrevious(t)?-this.offset+this.factor*-this.offset:this.isNext(t)?this.offset-this.factor*this.offset:0:this.isPrevious(t)?-this.offset:this.isNext(t)?this.offset:0},getOpacity:function(t){return this.isDragging?this.factor>=0?this.isCurrent(t)?1-2*this.factor:this.isNext(t)?this.factor:0:this.factor<0?this.isCurrent(t)?1+2*this.factor:this.isPrevious(t)?-1*this.factor:0:void 0:this.isCurrent(t)?1:0},onMove:function(t){this.isDragging=!0,this.factor=t}}}),ct=ot,ut=(i("ef75"),Object(l["a"])(ct,V,R,!1,null,"85aef2f4",null)),lt=ut.exports;a["a"].use(X["a"]);var dt=new X["a"]({mode:"history",base:"/rp-mogul/",routes:[{path:"/",name:"explorer",component:lt},{path:"/about",name:"about",component:function(){return i.e("about").then(i.bind(null,"f820"))}}]}),ft=i("2f62");a["a"].use(ft["a"]);var ht=new ft["a"].Store({state:{},mutations:{},actions:{}}),gt=i("9483");Object(gt["a"])("".concat("/rp-mogul/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({router:dt,store:ht,render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var a=i("5e27"),n=i.n(a);n.a},"5e27":function(t,e,i){},7006:function(t,e,i){},"78c0":function(t,e,i){},"87e8":function(t,e,i){"use strict";var a=i("34be"),n=i.n(a);n.a},"971d":function(t,e,i){"use strict";var a=i("4ced"),n=i.n(a);n.a},"9a94":function(t,e,i){"use strict";var a=i("c17b"),n=i.n(a);n.a},c17b:function(t,e,i){},dd7c:function(t,e,i){"use strict";var a=i("154e"),n=i.n(a);n.a},e158:function(t,e,i){"use strict";var a=i("7006"),n=i.n(a);n.a},ef75:function(t,e,i){"use strict";var a=i("4c26"),n=i.n(a);n.a},f918:function(t,e,i){"use strict";var a=i("24f6"),n=i.n(a);n.a}});
//# sourceMappingURL=app.a4c9c8e3.js.map