(function(t){function e(e){for(var i,s,c=e[0],o=e[1],u=e[2],l=0,f=[];l<c.length;l++)s=c[l],n[s]&&f.push(n[s][0]),n[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},r=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"41d636ee"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=n[t]=[e,i]});e.push(a[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=s(t),r=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,a[1](s)}n[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/rp-mogul/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"24f6":function(t,e,a){},"3d2b":function(t,e,a){"use strict";var i=a("774f"),n=a.n(i);n.a},"4ced":function(t,e,a){},"54b1":function(t,e,a){"use strict";var i=a("78c0"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Shell",[a("Header",[a("Logo",{attrs:{title:"Movies"}}),a("Avatar",{attrs:{src:"img/user/avatar.jpg"}})],1),a("router-view")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.src}})])},c=[],o=i["a"].extend({props:{src:String}}),u=o,l=(a("f918"),a("2877")),d=Object(l["a"])(u,s,c,!1,null,"e0b24fda",null),f=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[t._t("default")],2)},p=[],g=i["a"].extend({}),v=g,m=(a("54b1"),Object(l["a"])(v,h,p,!1,null,"90b9a596",null)),b=m.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"logo"},[t._v("\n  "+t._s(t.title)+"\n  "),a("div",{staticClass:"period"})])},x=[],y=i["a"].extend({props:{title:String}}),k=y,P=(a("9a94"),Object(l["a"])(k,C,x,!1,null,"26dccac6",null)),S=P.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"shell"},[a("div",{staticClass:"container"},[t._t("default")],2),a("div",{staticClass:"shadow"})])},O=[],j=i["a"].extend({}),$=j,w=(a("e158"),Object(l["a"])($,_,O,!1,null,"78de464c",null)),D=w.exports,T=i["a"].extend({components:{Avatar:f,Header:b,Logo:S,Shell:D}}),E=T,M=(a("5c0b"),Object(l["a"])(E,n,r,!1,null,null,null)),R=M.exports,X=a("8c4f"),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("CardStack",{attrs:{cards:t.data,onChange:t.onActiveTitle}}),a("Panel",[a("h2",{staticClass:"title"},[t._v(t._s(t.getCardTitle()))]),a("h3",{staticClass:"date"},[t._v("\n      Coming in\n      "),a("span",[t._v(t._s(t.getReleaseData()))])])])],1)},A=[],I=(a("7514"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},t._l(t.stack,function(e,i){return a("Card",{key:e._uuid,style:{top:e.yPos+"px",width:e.width+"px",height:e.height+"px",opacity:e.opacity,display:i>t.maxVisibleCards+2?"none":"flex",zIndex:e.zIndex,position:"absolute",transition:"transform "+(t.isDragging?0:t.speed)+"s ease 0s",transform:"scale("+e.scale+", "+e.scale+") translate("+e.xPos+"px, 0)",transformOrigin:0},attrs:{src:e.cover,scale:e.imageScale,isDragging:t.isDragging,opacity:e.imageOpacity}})}),1)}),L=[],W=(a("6c7b"),a("cebc")),H=(a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("img",{style:{opacity:t.opacity,transform:"scale("+t.getScale()+", "+t.getScale(),transition:"transform "+(t.isDragging?0:t.speed)+"s, opacity "+(t.isDragging?0:t.speed)+"s"},attrs:{src:t.src,draggable:"false"}})])}),N=[],q=i["a"].extend({data:function(){return{speed:.2}},methods:{getScale:function(){return 1===this.scale?this.scale/2:(1-this.scale+1)/2}},props:{scale:{type:Number,default:1},isDragging:{type:Boolean,default:!1},src:{type:String},opacity:{type:Number,default:1}}}),B=q,G=(a("3d2b"),Object(l["a"])(B,H,N,!1,null,"29dd0ec2",null)),z=G.exports;function F(t,e,a){var i;return function(){var n=this,r=arguments,s=function(){i=null,a||t.apply(n,r)},c=a&&!i;clearTimeout(i),i=setTimeout(s,e),c&&t.apply(n,r)}}var J=a("c64e"),U=a.n(J),K=i["a"].extend({props:{onChange:{type:Function,required:!0},maxVisible:{type:Number,default:function(){return 3}},cards:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{activeCardIndex:1,activeCardOffset:0,cardWidth:286,cardHeight:458,debounceRate:10,dragging:!1,dragStartX:0,isTouch:"ontouchstart"in window,isDragging:!1,isDraggingLeft:!1,isDraggingRight:!1,opacityMultiplier:.35,stackRestPoints:[],scaleMultiplier:.075,stack:[],stackGutter:24,speed:.2}},components:{Card:z},methods:{updateStack:function(){var t=this,e=this.$data.stack[this.activeCardIndex],a=this.stackRestPoints[this.activeCardIndex],i=e.xPos-a;if(this.isDraggingRight){if(i>this.activeCardMaxTravelDistance/3){var n=this.$data.stack.shift();this.$data.stack.push(n)}}else if(-1*i>this.activeCardMaxTravelDistance/3){var r=this.$data.stack.pop();this.$data.stack.unshift(r)}this.$data.stack=this.$data.stack.map(function(e,a){return Object(W["a"])({_uuid:e._uuid},t.getDefaultCardProps(e,a))}),this.onStackUpdate()},moveStack:function(t){var e=this;this.$data.stack=this.$data.stack.map(function(a,i){var n=e.getDefaultCardProps(a,i),r=e.getCardStackPosition(i);e.activeCardOffset=t-e.dragStartX,e.isDraggingLeft=t<e.dragStartX,e.isDraggingRight=t>e.dragStartX,e.isDraggingRight?e.activeCardIndex=1:e.activeCardIndex=0;var s=i===e.activeCardIndex;return Object(W["a"])({},n,{_uuid:a._uuid,xPos:e.calculateCardProp(n.xPos,e.cardXPosOffset,1,s),opacity:e.isCardVisible(r)?1:0,imageOpacity:e.isCardVisible(r)?e.calculateCardProp(n.imageOpacity,e.opacityMultiplier,0,s):0,scale:e.calculateCardProp(n.scale,e.scaleMultiplier,0,s),imageScale:e.calculateCardProp(n.imageScale,4*e.scaleMultiplier,0,s)})})},calculateCardProp:function(t,e,a,i){var n=i?a:e/this.activeCardMaxTravelDistance;return t+n*this.activeCardOffset},getDragXPos:function(t){return this.isTouch?t.touches[0].clientX:t.clientX},onTouchStart:function(t){var e=this.getDragXPos(t);this.isDragging=!0,this.dragStartX=e-this.elementXPosOffset,this.$el.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag)},onTouchEnd:function(){this.isDragging=!1,this.dragStartX=0,this.$el.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),this.updateStack()},onDrag:function(t){var e=this.getDragXPos(t);this.moveStack(e-this.elementXPosOffset)},getCardStackPosition:function(t){return t-1},getCardProp:function(t,e){var a=1-t*e;return a<=1?a<0?0:a:1},isCardVisible:function(t){return t<this.$props.maxVisible},getDefaultCardProps:function(t,e){var a=this.getCardStackPosition(e);return{id:t.id,background:"#fff",title:t.title,height:this.cardHeight,width:this.cardWidth,xPos:this.stackRestPoints[e],yPos:0,zIndex:this.totalCards-e,opacity:this.isCardVisible(a)?1:0,imageOpacity:this.isCardVisible(a)?this.getCardProp(a,this.opacityMultiplier):0,scale:this.getCardProp(a,this.scaleMultiplier),imageScale:this.getCardProp(a,4*this.scaleMultiplier),cover:t.cover,isVisible:this.isCardVisible(a)}},getStackRestPoints:function(){var t=this;return new Array(this.totalCards).fill("").map(function(e,a){if(0===a)return t.stackWidth;var i=t.getCardStackPosition(a),n=t.cardXPosOffset*i;return t.stackWidth-t.cardWidth-n-t.stackGutter})},onStackUpdate:function(){this.$props.onChange(this.$data.stack[1].id)}},computed:{maxVisibleCards:function(){return this.$props.maxVisible},totalCards:function(){return this.$props.cards.length},cardXPosOffset:function(){return(this.stackWidth-2*this.stackGutter-this.cardWidth)/(this.maxVisibleCards-1)},stackWidth:function(){return this.$el.clientWidth},stackHeight:function(){return this.$el.clientHeight},elementXPosOffset:function(){return this.$el.getBoundingClientRect().x},activeCardMaxTravelDistance:function(){return this.cardWidth+this.stackGutter}},mounted:function(){var t=this,e=F(this.onTouchStart,this.debounceRate);document.addEventListener(this.isTouch?"touchstart":"mousedown",e);var a=F(this.onTouchEnd,this.debounceRate);document.addEventListener(this.isTouch?"touchend":"mouseup",a);var i=[].concat(this.$props.cards),n=i.pop();i.unshift(n),this.$data.stackRestPoints=this.getStackRestPoints(),this.$data.stack=i.map(function(e,a){return Object(W["a"])({_uuid:U()()},t.getDefaultCardProps(e,a))}),this.onStackUpdate()}}),Q=K,Y=(a("aa7c"),Object(l["a"])(Q,I,L,!1,null,"b5f94da6",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel"},[t._t("default")],2)},et=[],at=i["a"].extend({}),it=at,nt=(a("971d"),Object(l["a"])(it,tt,et,!1,null,"c957ae32",null)),rt=nt.exports,st=[{id:"1",title:"Blade Runner 2049",release:"10.6.17",cover:"img/covers/blade-runner.jpg"},{id:"2",title:"Justice League",release:"10.6.17",cover:"img/covers/justice-league.jpg"},{id:"3",title:"Ex Machina",release:"10.6.17",cover:"img/covers/ex-machina.jpg"},{id:"4",title:"The Martian",release:"10.6.17",cover:"img/covers/the-martian.jpg"},{id:"5",title:"Alien",release:"10.6.17",cover:"img/covers/alien.jpg"},{id:"6",title:"Interstellar",release:"10.6.17",cover:"img/covers/interstellar.jpg"}],ct=i["a"].extend({components:{CardStack:Z,Panel:rt},data:function(){return{data:st,activeTitle:st[0]}},methods:{getCardTitle:function(){return this.activeTitle.title},getReleaseData:function(){return this.activeTitle.release},onActiveTitle:function(t){this.activeTitle=this.data.find(function(e){return t===e.id})}}}),ot=ct,ut=(a("b866"),Object(l["a"])(ot,V,A,!1,null,"e9210518",null)),lt=ut.exports;i["a"].use(X["a"]);var dt=new X["a"]({mode:"history",base:"/rp-mogul/",routes:[{path:"/",name:"explorer",component:lt},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),ft=a("2f62");i["a"].use(ft["a"]);var ht=new ft["a"].Store({state:{},mutations:{},actions:{}}),pt=a("9483");Object(pt["a"])("".concat("/rp-mogul/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["a"].config.productionTip=!1,new i["a"]({router:dt,store:ht,render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("5e27"),n=a.n(i);n.a},"5e27":function(t,e,a){},7006:function(t,e,a){},"774f":function(t,e,a){},"78c0":function(t,e,a){},"971d":function(t,e,a){"use strict";var i=a("4ced"),n=a.n(i);n.a},"9a94":function(t,e,a){"use strict";var i=a("c17b"),n=a.n(i);n.a},aa7c:function(t,e,a){"use strict";var i=a("b562"),n=a.n(i);n.a},b562:function(t,e,a){},b866:function(t,e,a){"use strict";var i=a("cd93"),n=a.n(i);n.a},c17b:function(t,e,a){},cd93:function(t,e,a){},e158:function(t,e,a){"use strict";var i=a("7006"),n=a.n(i);n.a},f918:function(t,e,a){"use strict";var i=a("24f6"),n=a.n(i);n.a}});
//# sourceMappingURL=app.04db0aed.js.map