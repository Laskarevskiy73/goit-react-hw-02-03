(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,a){t.exports={history:"TransactionHistory_history__2tuRs",bgcHead:"TransactionHistory_bgcHead__3Dzgj",headList:"TransactionHistory_headList__3nxdC",listItem:"TransactionHistory_listItem__2nWis"}},23:function(t,e,a){t.exports={dashboard:"Dashboard_dashboard__3jv_N"}},24:function(t,e,a){t.exports=a(55)},4:function(t,e,a){t.exports={balance:"Balance_balance__3kYYE",amount:"Balance_amount__2qXif",deposit:"Balance_deposit__w-ZDH",withdrawal:"Balance_withdrawal__2R7uT"}},5:function(t,e,a){t.exports={controls:"Controls_controls__OPX8q",input:"Controls_input__VD_hM",btn:"Controls_btn__2VuJy"}},55:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=a(13),s=a(7),l=a(21),u=a(9),m=a(8),d=a(10),h=a(22),b=a.n(h),p=a(3),f=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).createNotification=function(t){return function(){switch(t){case"info":p.NotificationManager.info("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");break;case"success":p.NotificationManager.success("C\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0443\u044e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e!");break;case"error":p.NotificationManager.error("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");break;case"warning":p.NotificationManager.warning("warning")}}},a}return Object(d.a)(e,t),e}(n.Component),y=a(5),N=a.n(y),_=function(t){var e=t.addingMoney,a=t.state,n=t.onDeposit,o=t.onWithdrawal;return r.a.createElement("section",{className:N.a.controls},r.a.createElement("input",{className:N.a.input,onChange:e,value:a,type:"number"}),r.a.createElement("button",{className:N.a.btn,onClick:n,type:"button"},"Deposit"),r.a.createElement("button",{className:N.a.btn,onClick:o,type:"button"},"Withdraw"))},g=a(4),w=a.n(g),E=function(t){var e=t.balance,a=t.balanceCalculation;return r.a.createElement("section",{className:w.a.balance},r.a.createElement("p",{className:w.a.amount},r.a.createElement("span",{className:w.a.deposit},"\u2b06"),a().toLocaleString(),"$"),r.a.createElement("p",{className:w.a.amount},r.a.createElement("span",{className:w.a.withdrawal},"\u2b07"),a().toLocaleString(),"$"),r.a.createElement("p",{className:w.a.amount},"Balance: ",e.toLocaleString(),"$"))},v=a(1),S=a.n(v),O=function(t){var e=t.items;return r.a.createElement("table",{className:S.a.history},r.a.createElement("thead",null,r.a.createElement("tr",{className:S.a.bgcHead},r.a.createElement("th",{className:S.a.headList},"Transaction"),r.a.createElement("th",{className:S.a.headList},"Amount"),r.a.createElement("th",{className:S.a.headList},"Date"))),0!==e.length&&e.map(function(t){return r.a.createElement("tbody",{key:t.id},r.a.createElement("tr",null,r.a.createElement("td",{className:S.a.listItem},t.type),r.a.createElement("td",{className:S.a.listItem},t.amount,"$"),r.a.createElement("td",{className:S.a.listItem},t.date)))}))},C=a(23),D=a.n(C),j=(a(54),new f),k="Deposit",I="Withdrawal",M=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={history:[],balance:0,amount:"",type:""},a.newTransaction=function(t){var e=a.state.amount;return a.setState({type:t}),{id:b.a.generate(),type:t,amount:Number(e),date:(new Date).toLocaleString()}},a.handleAddingMoney=function(t){var e=t.target;a.setState({amount:e.value})},a.handleDeposit=function(){var t=a.state.amount;if("0"===t||""===t)return j.createNotification("info")(),void a.resetField();a.setState(function(e){return{history:[].concat(Object(i.a)(e.history),[a.newTransaction(k)]),balance:e.balance+Number(t)}}),j.createNotification("success")(),a.resetField()},a.handleWithdrawal=function(){var t=a.state,e=t.balance,n=t.amount;return e<n?(j.createNotification("error")(),void a.resetField()):"0"===n||""===n?(j.createNotification("info")(),void a.resetField()):(a.setState(function(t){return{history:[].concat(Object(i.a)(t.history),[a.newTransaction(I)]),balance:t.balance-Number(n)}}),j.createNotification("success")(),void a.resetField())},a.resetField=function(){a.setState({amount:""})},a.balanceCalculation=function(){var t=a.state,e=t.history,n=t.type;return e.reduce(function(t,e){return e.type===n?t+e.amount:t},0)},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("items"),e=localStorage.getItem("balance"),a=localStorage.getItem("type");if(t){var n=JSON.parse(t),r=JSON.parse(e),o=JSON.parse(a);this.setState({history:n,balance:r,type:o})}}},{key:"componentDidUpdate",value:function(t){var e=this.state,a=e.history,n=e.balance,r=e.type;t.history!==a&&(localStorage.setItem("items",JSON.stringify(a)),localStorage.setItem("balance",JSON.stringify(n)),localStorage.setItem("type",JSON.stringify(r)))}},{key:"render",value:function(){var t=this.state,e=t.history,a=t.amount,n=t.balance;return r.a.createElement("div",{className:D.a.dashboard},r.a.createElement(_,{state:a,addingMoney:this.handleAddingMoney,onDeposit:this.handleDeposit,onWithdrawal:this.handleWithdrawal}),r.a.createElement(E,{balance:n,balanceCalculation:this.balanceCalculation}),r.a.createElement(O,{items:e}),r.a.createElement(p.NotificationContainer,null))}}]),e}(n.Component);c.a.render(r.a.createElement(function(){return r.a.createElement(M,null)},null),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.63d4a16a.chunk.js.map