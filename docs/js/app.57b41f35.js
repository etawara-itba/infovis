(function(t){function e(e){for(var i,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},r=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2b88bbc7","chunk-2d0d056e":"e7c117b6"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=i);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(t);var u=new Error;r=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/infovis/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{staticClass:"hidden-sm-and-down"},[t._v("infovis")])]),n("v-spacer")],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"",permanent:!0,"expand-on-hover":!t.drawer},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},[n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.goTo("/")}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-list-item",{attrs:{link:""},on:{click:function(e){return t.goTo("/about")}}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-information-outline")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("About")])],1)],1),n("v-divider"),n("v-list-group",{attrs:{"prepend-icon":"mdi-drawing-box","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Viz")])],1)],1)]},proxy:!0}]),model:{value:t.vizTab,callback:function(e){t.vizTab=e},expression:"vizTab"}},t._l(t.getVizList(),(function(e){return n("v-list-item",{key:e.path,attrs:{link:""},on:{click:function(n){t.goTo("/viz/".concat(e.path))}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),1)],1)],1),n("v-main",[n("router-view")],1)],1)},r=[],a=(n("6762"),n("2fdb"),n("7f7f"),n("7ff6")),c={name:"App",data:function(){return{drawer:null,viz:"viz",vizTab:!0}},methods:{goTo:function(t){this.$router.push(t).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.error(t)}))},getIconDir:function(t){return t?"mdi-chevron-up":"mdi-chevron-down"},getVizList:function(){return a["a"].VIZ_LIST}}},s=c,u=n("2877"),l=n("6544"),p=n.n(l),f=n("7496"),v=n("40dc"),d=n("5bc1"),m=n("ce7e6"),h=n("132d"),b=n("8860"),g=n("56b0"),_=n("da13"),w=n("1800"),y=n("5d23"),k=n("f6c4"),V=n("f774"),T=n("2fa4"),I=n("2a7f"),j=Object(u["a"])(s,o,r,!1,null,null,null),x=j.exports;p()(j,{VApp:f["a"],VAppBar:v["a"],VAppBarNavIcon:d["a"],VDivider:m["a"],VIcon:h["a"],VList:b["a"],VListGroup:g["a"],VListItem:_["a"],VListItemAction:w["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VMain:k["a"],VNavigationDrawer:V["a"],VSpacer:T["a"],VToolbarTitle:I["a"]});var z=n("f309");i["a"].use(z["a"]);var O=new z["a"]({}),L=n("8c4f"),P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("This is a home page")])])}],W={name:"Home"},M=W,A=Object(u["a"])(M,P,S,!1,null,null,null),D=A.exports,E=n("7746");i["a"].use(L["a"]);var $=new L["a"]({mode:"history",base:"/infovis/",routes:[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/viz/:vizId",name:"viz",component:function(){return n.e("chunk-2d0d056e").then(n.bind(null,"680f"))}},{path:"/*",name:"404",component:E["a"]}]});i["a"].config.productionTip=!1,new i["a"]({vuetify:O,router:$,render:function(t){return t(x)}}).$mount("#app")},7746:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-img",{attrs:{src:"https://httpstatusdogs.com/img/404.jpg"}}),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n        This image belongs to \n        "),n("a",{attrs:{href:"https://httpstatusdogs.com/"}},[t._v("http status dogs")])])}],r={name:"error404"},a=r,c=n("2877"),s=n("6544"),u=n.n(s),l=n("adda"),p=Object(c["a"])(a,i,o,!1,null,null,null);e["a"]=p.exports;u()(p,{VImg:l["a"]})},"7ff6":function(t,e,n){"use strict";e["a"]={VIZ_LIST:[{title:"InfoVis 2020/W33: The state of the Digital Nation",name:"MM 2020 - Week 33",path:"2020W33",url:"https://public.tableau.com/views/InfoVis2020W33ThestateoftheDigitalNation/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link"},{title:"InfoVis 2020/W32: Benefits of Remote Work",path:"2020W32",name:"MM 2020 - Week 32",url:"https://public.tableau.com/views/InfoVis2020W32BenefitsofRemoteWork/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link"}]}}});
//# sourceMappingURL=app.57b41f35.js.map