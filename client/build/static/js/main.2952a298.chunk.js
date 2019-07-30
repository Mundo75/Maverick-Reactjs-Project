(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(31),r=a.n(o),c=(a(40),a(17)),l=a(11),s=(a(41),a(6)),m=a(7),u=a(9),h=a(8),d=a(10),p=(a(42),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"user-input"},i.a.createElement("h4",null,"Sign in to continue"),i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"empId"},"Employee ID"),i.a.createElement("input",{type:"text",className:"form-control",id:"empIdInput",placeholder:"Enter ID"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"empPassword"},"Password"),i.a.createElement("input",{type:"password",className:"form-control",id:"passwordInput",placeholder:"Password"})),i.a.createElement("a",{className:"btn btn-secondary",href:"/search",role:"button",type:"submit",id:"login-btn"},"Login"))))}}]),t}(n.Component)),f=a(32),b=a(14),E=(a(43),a(15)),g=a.n(E),C={getFlightInfo:function(e,t){return g.a.post("/api/parameters"+e+t)},getKitInfo:function(e){return g.a.post("http://localhost:3001/api/kits/",e)},getOpsInfo:function(e){return g.a.get("/api/ops"+e)}},v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).searchGiphy=function(e){C.getKitInfo(e).then(function(e){return a.setState({results:e.data.data})}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){var t={icaoCode:a.state.icaoCode,iataCode:a.state.iataCode,flightNumber:a.state.flightNumber};e.preventDefault(),a.state.icaoCode&&a.state.iataCode&&a.state.flightNumber&&C.getKitInfo(t.icaoCode).then(a.setState({redirectToReferrer:!0})).catch(function(e){return console.log(e)});var n="https://flightaware.com/live/flight/"+t.icaoCode+t.flightNumber;window.open(n,"_blank","height=600,width=600")},a.state={icaoCode:"",iataCode:"",flightNumber:"",kitList:[],redirectToReferrer:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),console.log(a.state.kitList),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value)),"AAL"===this.state.icaoCode?this.setState({iataCode:"AA"}):"BAW"===this.state.icaoCode?this.setState({iataCode:"BA"}):"CPA"===this.state.icaoCode?this.setState({iataCode:"CX"}):"ETD"===this.state.icaoCode?this.setState({iataCode:"EY"}):"HAL"===this.state.icaoCode?this.setState({iataCode:"HA"}):"QFA"===this.state.icaoCode?this.setState({iataCode:"QF"}):"QAF"===this.state.icaoCode?this.setState({iataCode:"QR"}):"UAL"===this.state.icaoCode?this.setState({iataCode:"UA"}):"VIR"===this.state.icaoCode?this.setState({iataCode:"VS"}):"VOZ"===this.state.icaoCode&&this.setState({iataCode:"VA"}),console.log(e.target.value)}},{key:"render",value:function(){return!0===this.state.redirectToReferrer?i.a.createElement(l.a,{to:{pathname:"/results",state:{icaoCode:this.state.icaoCode,iataCode:this.state.iataCode,flightNumber:this.state.flightNumber}}}):i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"user-input"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("h4",null,"Search for a flight"),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"selectAirline"},"Select Airline"),i.a.createElement("select",{className:"form-control",id:"select-airline",name:"icaoCode",value:this.state.value,onChange:this.handleChange},i.a.createElement("option",{value:"",defaultValue:!0},"----------------"),i.a.createElement("option",{value:"AAL"},"American Airlines - AA"),i.a.createElement("option",{value:"BAW"},"British Airways - BA"),i.a.createElement("option",{value:"CPA"},"Cathay Pacific - CX"),i.a.createElement("option",{value:"ETD"},"Etihad Airways - EY"),i.a.createElement("option",{value:"HAL"},"Hawaiian Airlines - HA"),i.a.createElement("option",{value:"QFA"},"Qantas - QF"),i.a.createElement("option",{value:"QAF"},"Qatar Airways - QR"),i.a.createElement("option",{value:"UAL"},"United Airlines - UA"),i.a.createElement("option",{value:"VIR"},"Virgin Atlantic Airways - VS"),i.a.createElement("option",{value:"VOZ"},"Virgin Australia - VA"))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"flightNumber"},"Flight Number"),i.a.createElement("input",{type:"text",className:"form-control",id:"flight-number",placeholder:"----------------",name:"flightNumber",onChange:this.handleChange})),i.a.createElement("button",{className:"btn btn-secondary",type:"submit"},"Submit"))))}}]),t}(n.Component),A=(a(65),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},"Flight Information"),i.a.createElement("div",{className:"col"},"Medical Kit Contents"),i.a.createElement("div",{className:"col"},"Procedures")),i.a.createElement("a",{href:"/search"},"\u2190 Back to search")))}}]),t}(n.Component)),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"user-input"},i.a.createElement("h4",null,"404 Page Not Found")))}}]),t}(n.Component);var w=function(){return i.a.createElement(c.a,null,i.a.createElement("div",null,i.a.createElement(l.d,null,i.a.createElement(l.b,{exact:!0,path:"/",component:p}),i.a.createElement(l.b,{exact:!0,path:"/login",component:p}),i.a.createElement(l.b,{exact:!0,path:"/search",component:v}),i.a.createElement(l.b,{exact:!0,path:"/results",component:A}),i.a.createElement(l.b,{component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.2952a298.chunk.js.map