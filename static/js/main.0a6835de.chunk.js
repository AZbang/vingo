(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n.p+"static/media/icon.fe7dec40.png"},133:function(e,t,n){e.exports=n.p+"static/media/classical-building-ios.5a41fe29.png"},134:function(e,t,n){e.exports=n.p+"static/media/classical-building-android.49f7df50.png"},137:function(e,t,n){e.exports=n(278)},158:function(e,t,n){},160:function(e,t,n){},178:function(e,t,n){},185:function(e,t,n){},190:function(e,t){},192:function(e,t){},225:function(e,t){},226:function(e,t){},272:function(e,t,n){},274:function(e,t,n){},276:function(e,t,n){},278:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(38),i=n.n(c),o=n(18),s=n(57),l=n(29),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var p=n(33),d=n(23),h=n(136),f=n(40),b=n.n(f),v=b()({loading:!1,error:null}),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_START":return e.merge({loading:!0});case"FETCH_SUCCEED":return e.merge({loading:!1});case"FETCH_ERROR":return e.merge({loading:!1,error:t.error});default:return e}},g=n(61);function O(e,t){localStorage.setItem(e,JSON.stringify(t))}function y(e){return JSON.parse(localStorage.getItem(e)||"null")}var j=b()({museums:[],achievements:[],stories:[],museum:{id:null,items:[],playgrounds:[],logreg:[]},completeItems:y("completeItems")||[],completeAchievements:y("completeAchievements")||[]}),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MUSEUMS":return e.merge({museums:t.payload});case"SET_MUSEUM":return e.merge({museum:Object(g.a)({},t.payload,{id:t.id})});case"SET_STORIES":return e.merge({stories:t.payload});case"SET_ACHIEVEMENTS":return e.merge({achievements:t.payload});case"SET_COMPLETE_ITEM":return e.merge({completeItems:e.completeItems.concat(t.data)});case"SET_COMPLETE_ACHIEVEMENT":return e.merge({completeAchievements:e.completeAchievements.concat(t.data)});default:return e}},w=b()({tabbarShow:!0}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_TABBAR":return e.merge({tabbarShow:!0});case"HIDE_TABBAR":return e.merge({tabbarShow:!1});default:return e}},C=n(26),k=n.n(C),_=n(7),x="https://raw.githubusercontent.com/AZbang/vingo/db/",I=x+"museums.json",R=x+"achievements.json",M=x+"stories.json",A=x+":id/logreg.json",H=x+":id/playgrounds.json",N=x+":id/items.json",U=k.a.mark(D),F=k.a.mark(B),P=k.a.mark(V),L=k.a.mark(z);function W(e){return fetch(e).then(function(e){return e.json()})}function D(){var e;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.c)({type:"FETCH_START"});case 2:return t.prev=2,t.next=5,Object(_.b)(W,I);case 5:return e=t.sent,t.next=8,Object(_.c)({type:"SET_MUSEUMS",payload:e});case 8:return t.next=10,Object(_.c)({type:"FETCH_SUCCEED"});case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(2),t.next=16,Object(_.c)({type:"FETCH_ERROR",error:t.t0});case 16:case"end":return t.stop()}},U,this,[[2,12]])}function B(){var e;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.c)({type:"FETCH_START"});case 2:return t.prev=2,t.next=5,Object(_.b)(W,M);case 5:return e=t.sent,t.next=8,Object(_.c)({type:"SET_STORIES",payload:e});case 8:return t.next=10,Object(_.c)({type:"FETCH_SUCCEED"});case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(2),t.next=16,Object(_.c)({type:"FETCH_ERROR",error:t.t0});case 16:case"end":return t.stop()}},F,this,[[2,12]])}function V(){var e;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.c)({type:"FETCH_START"});case 2:return t.prev=2,t.next=5,Object(_.b)(W,R);case 5:return e=t.sent,t.next=8,Object(_.c)({type:"SET_ACHIEVEMENTS",payload:e});case 8:return t.next=10,Object(_.c)({type:"FETCH_SUCCEED"});case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(2),t.next=16,Object(_.c)({type:"FETCH_ERROR",error:t.t0});case 16:case"end":return t.stop()}},P,this,[[2,12]])}function z(e){var t;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(_.c)({type:"FETCH_START"});case 2:return n.prev=2,n.next=5,Object(_.a)({playgrounds:Object(_.b)(W,H.replace(":id",e.id)),items:Object(_.b)(W,N.replace(":id",e.id)),logreg:Object(_.b)(W,A.replace(":id",e.id))});case 5:return t=n.sent,n.next=8,Object(_.c)({type:"SET_MUSEUM",payload:t,id:e.id});case 8:return n.next=10,Object(_.c)({type:"FETCH_SUCCEED"});case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(2),n.next=16,Object(_.c)({type:"FETCH_ERROR",error:n.t0});case 16:case"end":return n.stop()}},L,this,[[2,12]])}var G=k.a.mark(J);function J(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)("FETCH_MUSEUMS",D);case 2:return e.next=4,Object(_.d)("FETCH_STORIES",B);case 4:return e.next=6,Object(_.d)("FETCH_ACHIEVEMENTS",V);case 6:return e.next=8,Object(_.d)("FETCH_MUSEUM",z);case 8:case"end":return e.stop()}},G,this)}var X,q=Object(d.a)(),Q=Object(h.a)(),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,$=Object(p.e)((X=q,Object(p.c)({router:Object(l.connectRouter)(X),fetch:E,data:S,ui:T})),Z(Object(p.a)(Object(l.routerMiddleware)(q),Q)));Q.run(J);var K=n(8),Y=n(14),ee=n(10),te=n(9),ne=n(11),ae=n(12),re=n(128),ce=n.n(re),ie=n(129),oe=n.n(ie),se=n(130),le=n.n(se),ue=n(131),me=n.n(ue);n(156);function pe(e){return{type:e?"SHOW_TABBAR":"HIDE_TABBAR"}}var de=n(132),he=n.n(de),fe=(n(158),function(e){function t(){return Object(K.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"vingo-header"},r.a.createElement("img",{alt:"logo",src:he.a,className:"vingo-header__icon"}),r.a.createElement("span",{className:"vingo-header__name"},"VINGO"))}}]),t}(r.a.Component)),be=(n(160),function(e){function t(){return Object(K.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"story-preview",style:{backgroundImage:"url("+x+"hermetage_general_building/"+this.props.data.image+")"}})}}]),t}(r.a.Component)),ve=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(c)))).getStoriesList=function(e){var t={flexShrink:0,display:"flex",width:80,height:120,flexDirection:"column"};return n.props.stories.map(function(e,a){return r.a.createElement("div",{key:a,style:Object(g.a)({},t,{paddingRight:a<n.props.stories.length-1?10:20})},r.a.createElement(be,{data:e}))})},n}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement(ae.HorizontalScroll,null,r.a.createElement("div",{style:{display:"flex",paddingBottom:"10px",margin:"20px"}},this.getStoriesList()))}}]),t}(r.a.Component);var Ee=Object(o.connect)(function(e){return{stories:e.data.stories}})(ve),ge=n(62),Oe=(n(178),n(133)),ye=n.n(Oe),je=n(134),Se=n.n(je),we=function(e){function t(){return Object(K.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"museum-icon"},r.a.createElement("img",{className:"museum-icon__image",alt:"icon",style:{filter:this.props.disable?"grayscale()":"none"},src:Math.random()<.5?ye.a:Se.a}))}}]),t}(r.a.Component),Te=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(c)))).getMarkers=function(){return n.props.museums.map(function(e){return r.a.createElement(ge.Marker,{key:e.id,lat:e.lat,lon:e.lng,onClick:function(){return!e.locked&&n.props.onMuseumClick(e.id)}},r.a.createElement(ge.MarkerLayout,null,r.a.createElement(we,{disable:e.locked})))})},n}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement(ge.Map,{loadOptions:{lang:"en_RU",apikey:"80ea98cf-f2cc-47d6-9fe3-47fc8f9bf7c0"},width:window.innerWidth,height:window.innerHeight/2,center:[59.943569,30.277656],zoom:12},this.getMarkers())}}]),t}(r.a.Component),Ce=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(r)))).openPlayground=function(e){return n.props.dispatch(Object(l.push)("/playground",{museumId:e}))},n}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"museums-map-block",style:{position:"relative",paddingTop:30}},r.a.createElement("h1",{className:"label",style:{position:"absolute",top:-15,zIndex:1e3,width:240}},"\u041c\u0443\u0437\u0435\u0438 \u043f\u043e\u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438"),r.a.createElement(Te,{museums:this.props.museums,onMuseumClick:this.openPlayground}))}}]),t}(r.a.Component);var ke=Object(o.connect)(function(e){return{museums:e.data.museums}})(Ce),_e=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(ae.View,{id:n.props.id,activePanel:n.props.id},r.a.createElement(ae.Panel,{id:n.props.id},r.a.createElement(fe,null),r.a.createElement(Ee,null),r.a.createElement(ke,null)))},n}return Object(ne.a)(t,e),t}(r.a.Component);var xe=Object(o.connect)(function(e){return{}})(_e),Ie=n(25),Re=(n(185),function(e){function t(){return Object(K.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"achievement-item"},this.props.data.icon)}}]),t}(r.a.Component)),Me=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(c)))).getAchievementsList=function(){return n.props.achievements.map(function(e){return r.a.createElement(Ie.Col,{key:e.id,xs:3},r.a.createElement(Re,{data:e}))})},n.render=function(){return r.a.createElement(ae.View,{id:n.props.id,activePanel:n.props.id},r.a.createElement(ae.Panel,{id:n.props.id},r.a.createElement(fe,null),r.a.createElement("h1",{className:"label"},"\u0412\u0430\u0448\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f"),r.a.createElement(Ie.Grid,{fluid:!0,style:{background:"linear-gradient(to right, #457fca, #5691c8)",paddingTop:20}},r.a.createElement(Ie.Row,null,n.getAchievementsList()))))},n}return Object(ne.a)(t,e),t}(r.a.Component);var Ae=Object(o.connect)(function(e){return{achievements:e.data.achievements}})(Me),He=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(c)))).getStoriesList=function(){return n.props.completeItems.map(function(e,t){return r.a.createElement(Ie.Col,{key:t,xs:4,style:{height:160,marginBottom:20}},r.a.createElement(be,{data:e}))})},n.render=function(){return r.a.createElement(ae.View,{id:n.props.id,activePanel:n.props.id},r.a.createElement(ae.Panel,{id:n.props.id},r.a.createElement(fe,null),r.a.createElement("h1",{className:"label"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"),r.a.createElement(Ie.Grid,{fluid:!0},r.a.createElement(Ie.Row,null,n.getStoriesList()))))},n}return Object(ne.a)(t,e),t}(r.a.Component);var Ne=Object(o.connect)(function(e){return{completeItems:e.data.stories}})(He),Ue=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement(ae.View,{id:n.props.id,activePanel:n.props.id},r.a.createElement(ae.Panel,{id:n.props.id},r.a.createElement(fe,null),r.a.createElement("h1",{className:"label",style:{marginTop:20}},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement("div",null,r.a.createElement("h1",{className:"label",style:{marginTop:40}},"\u0423\u0412\u0415\u0414\u041e\u041c\u041b\u0415\u041d\u0418\u042f"),r.a.createElement(ae.Switch,{defaultChecked:!0,style:{marginLeft:0,float:"right",marginTop:-50,marginRight:10}})),r.a.createElement("div",null,r.a.createElement("h1",{className:"label",style:{marginTop:10}},"\u0412\u0418\u0411\u0420\u0410\u0426\u0418\u042f"),r.a.createElement(ae.Switch,{defaultChecked:!0,style:{marginLeft:0,float:"right",marginTop:-50,marginRight:10}})),r.a.createElement("div",null,r.a.createElement("h1",{className:"label",style:{marginTop:10}},"\u0417\u0412\u0423\u041a"),r.a.createElement(ae.Switch,{defaultChecked:!0,style:{marginLeft:0,float:"right",marginTop:-50,marginRight:10}}))))},n}return Object(ne.a)(t,e),t}(r.a.Component);var Fe=Object(o.connect)(function(e){return{}})(Ue);var Pe=n(50),Le=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(c)))).snapShotCanvas=document.createElement("canvas"),n.videoStream=null,n.cameraStream=null,n.tickerId=null,n.render=function(){return r.a.createElement("div",{style:{position:"fixed",top:0}},r.a.createElement("video",{autoPlay:!0,ref:function(e){return n.videoStream=e}}))},n}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"capture",value:function(){var e=this;return Pe.c(function(){var t=Pe.a(e.videoStream),n=e.cropImage(t).expandDims(0).toFloat().div(Pe.b(127)).sub(Pe.b(1));e.props.onStream&&e.props.onStream(n)})}},{key:"cropImage",value:function(e){var t=Math.min(e.shape[0],e.shape[1]),n=e.shape[0]/2-t/2,a=e.shape[1]/2-t/2;return e.slice([n,a,0],[t,t,3])}},{key:"componentDidMount",value:function(){var e=this;navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}},function(t){e.cameraStream=t.getTracks()[0],e.videoStream.srcObject=t,e.videoStream.width=224,e.videoStream.height=224,e.videoStream.onloadedmetadata=function(){e.videoStream.style.width=e.videoStream.videoWidth+e.videoStream.videoHeight+"px",e.videoStream.style.marginLeft=-(e.videoStream.videoWidth+e.videoStream.videoHeight)/2+window.innerWidth/2+"px",e.videoStream.style.height="100vh",e.tickerId=setInterval(function(){return e.capture()},500)}},function(e){throw e})}},{key:"componentWillUnmount",value:function(){this.tickerId&&clearInterval(this.tickerId),this.cameraStream&&this.cameraStream.stop()}}]),t}(r.a.Component),We=(n(272),function(e){function t(){return Object(K.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"render",value:function(){var e={};return"top"===this.props.position?e.top=10:"bottom"===this.props.position&&(e.bottom=10),r.a.createElement(Ie.Grid,{className:"chip-panel",fluid:!0,style:e},r.a.createElement(Ie.Row,null,r.a.createElement(Ie.Col,{className:"chip-panel__block",style:this.props.style,xs:this.props.size},this.props.children)))}}]),t}(r.a.Component)),De=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(c)))).onStream=function(e){},n.render=function(){return r.a.createElement(ae.View,{id:n.props.id,activePanel:n.props.id},r.a.createElement(ae.Panel,{id:n.props.id},r.a.createElement(Le,{onStream:n.onStream}),r.a.createElement(We,{position:"top",size:12},r.a.createElement("span",{style:{fontSize:13,fontWeight:600}},"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u0443, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443")),r.a.createElement(We,{position:"bottom",size:12,style:{textAlign:"left",padding:"24px 15px 15px"}},r.a.createElement("span",{style:{fontSize:"2em",fontWeight:800}},n.props.museum.name))))},n}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(pe(!1)),this.props.dispatch({type:"FETCH_MUSEUM",id:this.props.museumId})}},{key:"componentWillUnmount",value:function(){this.props.dispatch(pe(!0))}}]),t}(r.a.Component);var Be=Object(o.connect)(function(e){var t=e.router.location.state.museumId;return{museumId:t,museum:function(e,t){for(var n=0;n<e.data.museums.length;n++)if(e.data.museums[n].id===t)return e.data.museums[n]}(e,t)||{},predictItem:e.data.predictItem}})(De),Ve=function(e){function t(){var e,n;Object(K.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(ee.a)(this,(e=Object(te.a)(t)).call.apply(e,[this].concat(r)))).onStoryChange=function(e){return n.props.dispatch(Object(l.push)("/"+e.currentTarget.dataset.story))},n}return Object(ne.a)(t,e),Object(Y.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_MUSEUMS"}),this.props.dispatch({type:"FETCH_ACHIEVEMENTS"}),this.props.dispatch({type:"FETCH_STORIES"})}},{key:"componentWillReceiveProps",value:function(e){this.props.tabbarShow!==e.tabbarShow&&(document.querySelector(".Tabbar").style.opacity=e.tabbarShow?1:0)}},{key:"render",value:function(){var e=this.props.pageId||"main";return r.a.createElement(ae.Epic,{activeStory:e,tabbar:r.a.createElement(ae.Tabbar,null,r.a.createElement(ae.TabbarItem,{onClick:this.onStoryChange,selected:"main"===e,"data-story":"main"},r.a.createElement(ce.a,null)),r.a.createElement(ae.TabbarItem,{onClick:this.onStoryChange,selected:"achievements"===e,"data-story":"achievements",label:this.props.achievements},r.a.createElement(oe.a,null)),r.a.createElement(ae.TabbarItem,{onClick:this.onStoryChange,selected:"stories"===e,"data-story":"stories",label:this.props.stories},r.a.createElement(le.a,null)),r.a.createElement(ae.TabbarItem,{onClick:this.onStoryChange,selected:"settings"===e,"data-story":"settings"},r.a.createElement(me.a,null)))},r.a.createElement(xe,{id:"main"}),r.a.createElement(Ae,{id:"achievements"}),r.a.createElement(Ne,{id:"stories"}),r.a.createElement(Fe,{id:"settings"}),r.a.createElement(Be,{id:"playground"}))}}]),t}(r.a.Component);var ze=Object(o.connect)(function(e){return{tabbarShow:e.ui.tabbarShow,achievements:e.data.achievements.length,stories:e.data.stories.length}})(Ve);n(274),n(276);$.subscribe(function(){var e=$.getState().data;O("completeItems",e.completeItems),O("completeAchievements",e.completeAchievements)});var Ge=function(){i.a.render(r.a.createElement(o.Provider,{store:$},r.a.createElement(l.ConnectedRouter,{history:q},r.a.createElement("div",null,r.a.createElement(s.a,{path:"/:pageId?",component:function(e){return r.a.createElement(ze,{pageId:e.match.params.pageId})}})))),document.getElementById("root"))};!function(){if("serviceWorker"in navigator){if(new URL("/vingo",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/vingo","/service-worker.js");u?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):m(e)})}}(),document.addEventListener("deviceready",Ge,!1),!window.cordova&&Ge()}},[[137,2,1]]]);
//# sourceMappingURL=main.0a6835de.chunk.js.map