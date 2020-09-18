(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3Hg_4",card:"Cards_card__2DRkb",infected:"Cards_infected__2ElfL",recovered:"Cards_recovered__3mcSE",deaths:"Cards_deaths__1pjxr"}},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(68),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(69),d=a(70),m=a(80),f=a(79),p=a(224),v=a(228),h=a(225),E=a(226),b=a(13),x=a.n(b),y=a(30),_=a.n(y),g=a(31),O=a.n(g),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:x.a.container},r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:O()(x.a.card,x.a.infected)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:O()(x.a.card,x.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,xs:12,md:3,className:O()(x.a.card,x.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(E.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading ..."},w=a(29),C=a(32),k=a.n(C),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(D);case 3:return t=e.sent,a=t.data,n=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(75),V=a(76),J=a.n(V),L=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=a.length?r.a.createElement(B.Line,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Infected",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5",fill:!0}]}}):null;return r.a.createElement("div",{className:J.a.container},o)},U=a(229),A=a(227),R=a(77),G=a.n(R),H=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(U.a,{className:G.a.formControl},r.a.createElement(A.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},M=a(78),q=a.n(M),z=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:q.a.container},r.a.createElement(j,{data:e}),r.a.createElement(H,null),r.a.createElement(L,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(z,null),document.getElementById("root"))},76:function(e,t,a){e.exports={container:"Chart_container__3OgpJ"}},77:function(e,t,a){},78:function(e,t,a){e.exports={container:"App_container__3r88O"}},83:function(e,t,a){e.exports=a(206)}},[[83,1,2]]]);
//# sourceMappingURL=main.190ca861.chunk.js.map