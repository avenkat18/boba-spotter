(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){},5410:function(e,t,n){e.exports=n(5531)},5415:function(e,t,n){},5530:function(e,t,n){},5531:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),l=(n(5415),n(11)),o=n(12),s=n(14),u=n(13),m=n(15),p=n(5536),h=n(5535),f=n(4),b=n(25),j=n(23),d=n.n(j),O=(n(29),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:d()("fillParent",e.container)},r.a.createElement(f.j,{variant:"h6",color:"inherit"},"Home"))}}]),t}(a.Component)),E=Object(b.withStyles)({container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}})(O),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:d()("fillParent",e.container)},r.a.createElement(f.j,{variant:"h6",color:"inherit"},"About"))}}]),t}(a.Component),v=Object(b.withStyles)({container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}})(y),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:d()("fillParent",e.container)},r.a.createElement(f.j,{variant:"h6",color:"inherit"},"Feed"))}}]),t}(a.Component),w=Object(b.withStyles)({container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}})(g),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:d()("fillParent",e.container)},r.a.createElement(f.j,{variant:"h6",color:"inherit"},"Map"))}}]),t}(a.Component),k=Object(b.withStyles)({container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}})(C),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:d()("fillParent",e.container)},r.a.createElement(f.j,{variant:"h6",color:"inherit"},"Login"))}}]),t}(a.Component),I=Object(b.withStyles)({container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}})(x),N=n(5533),D=n(26),B=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleItemClicked=function(e){var t="";switch(e){case 0:t="/";break;case 1:t="/map";break;case 2:t="/feed";break;case 3:t="/about"}n.props.history.push(t)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.isOpened,c=t.needsClose;return r.a.createElement(f.c,{anchor:"left",classes:{paper:n.drawer},open:a,onClose:c},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(f.e,null,r.a.createElement(f.f,{button:!0,onClick:function(){return e.handleItemClicked(0)}},r.a.createElement(f.g,null,r.a.createElement(D.b,null)),r.a.createElement(f.h,{primary:"Home"})),r.a.createElement(f.f,{button:!0,onClick:function(){return e.handleItemClicked(1)}},r.a.createElement(f.g,null,r.a.createElement(D.c,null)),r.a.createElement(f.h,{primary:"Map"})),r.a.createElement(f.f,{button:!0,onClick:function(){return e.handleItemClicked(2)}},r.a.createElement(f.g,null,r.a.createElement(D.f,null)),r.a.createElement(f.h,{primary:"Feed"})),r.a.createElement(f.f,{button:!0,onClick:function(){return e.handleItemClicked(3)}},r.a.createElement(f.g,null,r.a.createElement(D.a,null)),r.a.createElement(f.h,{primary:"About"}))))}}]),t}(a.Component),S=Object(N.a)(Object(b.withStyles)(function(e){return{drawer:{width:240},toolbar:e.mixins.toolbar}})(B)),P=n(5534),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.onMenuClicked;return r.a.createElement(f.a,{className:t.appBar,position:"fixed"},r.a.createElement(f.i,{className:t.toolbar},r.a.createElement(f.j,{variant:"h6",color:"inherit",className:t.title},"Boba Spotter (Beta)"),r.a.createElement(f.d,{className:t.menuButton,color:"inherit",onClick:n},r.a.createElement(D.d,null)),r.a.createElement(f.b,{color:"inherit",className:t.loginButton,component:P.a,to:"/login"},r.a.createElement(D.e,{className:t.loginButtonIcon}),"Login")))}}]),t}(a.Component),M=Object(b.withStyles)(function(e){return{appBar:{textAlign:"center",zIndex:1400},loginButtonIcon:{marginRight:e.spacing.unit,fontSize:20},toolbar:{justifyContent:"space-between"},title:{position:"absolute",left:0,right:0}}})(A),z=(n(5530),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleDrawer=function(){var e=n.state.isDrawerOpen;e=!e,n.setState({isDrawerOpen:e})},n.state={isDrawerOpen:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"fillParent"},r.a.createElement(M,{onMenuClicked:this.toggleDrawer}),r.a.createElement(S,{isOpened:this.state.isDrawerOpen,needsClose:this.toggleDrawer}),r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement(h.a,{path:"/feed",component:w}),r.a.createElement(h.a,{path:"/map",component:k}),r.a.createElement(h.a,{path:"/about",component:v}),r.a.createElement(h.a,{path:"/login",component:I}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5410,1,2]]]);
//# sourceMappingURL=main.8e5140a8.chunk.js.map