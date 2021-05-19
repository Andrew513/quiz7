(this.webpackJsonpq7=this.webpackJsonpq7||[]).push([[0],{40:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(9),s=n.n(a),c=(n(54),n.p,n(55),n(4));var r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),o(e),i(e),a(e),s(e)}))},u=n(12),l=n(13),d=n(11),m=n(15),j=n(14),h=n(100),b=n(102),p=n(106),v=n(104),O=n(103),f=n(105),g=n(107),y=n(98),x=Object(y.a)({root:{height:"100vh",width:"100vw"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundPosition:"center",display:"grid","grid-auto-flow":"column"},cardOutside:{display:"grid",alignItems:"center",justifyContent:"flex-end"},logoOutside:{display:"grid",height:"100vh"},text:{left:"3vw",position:"relative"},logoLine:{color:"white",display:"grid",opacity:"0.6"},card:{background:"black",height:"90vh",width:"40vw",margin:"3vw",opacity:"0.4",display:"grid"},word:{color:"white",justifyContent:"center",display:"grid",position:"relative"},inputText:{top:"8vh",margin:"2vw",width:"36vw",background:"white",opacity:"0.9"},normalDistance:{top:"5vh"},cardButton:{justifyContent:"center",width:"25vw",left:"8vw"}});function k(e){var t=x();return Object(c.jsx)("div",{className:"LoginPage",children:Object(c.jsx)(h.a,{container:!0,component:"main",justify:"center",className:t.root,children:Object(c.jsxs)(h.a,{item:!0,xs:!1,sm:8,md:!0,className:t.image,children:[Object(c.jsx)(p.a,{display:{xs:"none",sm:"none",md:"block"},children:Object(c.jsx)("div",{className:t.logoOutside})}),Object(c.jsx)("div",{className:t.cardOutside,children:Object(c.jsxs)(b.a,{variant:"outlined",className:t.card,children:[Object(c.jsx)(O.a,{className:t.word,component:"h1",variant:"h3",style:{top:"6vh"},children:"Login"}),Object(c.jsxs)("form",{style:{height:"80vh"},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(f.a,{className:t.inputText,variant:"outlined",required:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(c.jsx)(f.a,{className:[t.inputText,t.normalDistance].join(" "),variant:"outlined",required:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(c.jsx)(g.a,{className:[t.cardButton].join(" "),type:"submit",variant:"contained",color:"primary",style:{top:"7vh"},onClick:e.onLogin,children:"Sign In"})]}),Object(c.jsx)(v.a,{variant:"middle"}),Object(c.jsx)(g.a,{className:[t.cardButton].join(" "),type:"submit",variant:"contained",color:"secondary",style:{top:"17vh"},children:"Sign Up"})]})]})})]})})})}var I=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("h1",{children:"CGU Todo list"})}}]),n}(i.a.Component),C=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).onSubmit=o.onSubmit.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.refs.itemName.focus()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.itemName.value;t&&(this.props.addItem({newItemValue:t}),this.refs.form.reset())}},{key:"render",value:function(){return Object(c.jsxs)("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline",children:[Object(c.jsx)("input",{type:"text",ref:"itemName",className:"form-control",placeholder:"add a new todo..."}),Object(c.jsx)("button",{type:"submit",className:"btn btn-default",children:"Add"})]})}}]),n}(i.a.Component),w=(n(40),function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).onClickClose=o.onClickClose.bind(Object(d.a)(o)),o.onClickDone=o.onClickDone.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"onClickClose",value:function(){var e=parseInt(this.props.index);this.props.removeItem(e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index);this.props.TodoDone(e)}},{key:"render",value:function(){var e=this.props.item.done?"done":"undone";return Object(c.jsx)("li",{className:"list-group-item ",children:Object(c.jsxs)("div",{className:e,children:[Object(c.jsx)("button",{type:"button",onClick:this.onClickDone,children:"\u221a"}),this.props.item.value,Object(c.jsx)("button",{type:"button",className:"close",onClick:this.onClickClose,children:"\xd7"})]})})}}]),n}(i.a.Component)),L=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t,n){return Object(c.jsx)(w,{item:t,index:n,removeItem:e.props.removeItem,TodoDone:e.props.TodoDone},n)}));return Object(c.jsxs)("ul",{className:"list-group",children:[" ",t," "]})}}]),n}(i.a.Component),N=[];N.push({index:1,value:"have fun",done:!0}),N.push({index:2,value:"Go studying",done:!1}),N.push({index:3,value:"sleep well",done:!1});var D=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={todoItems:N},o.addItem=o.addItem.bind(Object(d.a)(o)),o.removeItem=o.removeItem.bind(Object(d.a)(o)),o.TodoDone=o.TodoDone.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"addItem",value:function(e){N.unshift({index:N.length+1,value:e.newItemValue,done:!1}),this.setState({todoItems:N})}},{key:"removeItem",value:function(e){N.splice(e,1),this.setState({todoItems:N})}},{key:"TodoDone",value:function(e){var t=N[e];N.splice(e,1),t.done=!t.done,t.done?N.push(t):N.unshift(t),this.setState({todoItems:N})}},{key:"render",value:function(){return Object(c.jsxs)("div",{id:"main",children:[Object(c.jsx)(I,{}),Object(c.jsx)(L,{items:this.state.todoItems,removeItem:this.removeItem,TodoDone:this.TodoDone}),Object(c.jsx)(C,{addItem:this.addItem})]})}}]),n}(i.a.Component),S=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).setRenderItem=o.setRenderItem.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"setRenderItem",value:function(){return this.props.LoginStatus?Object(c.jsx)(D,{}):Object(c.jsx)(k,{onLogin:this.props.onLogin})}},{key:"render",value:function(){return Object(c.jsx)("div",{children:this.setRenderItem()})}}]),n}(i.a.Component),T=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).state={login:!1},o.onLogin=o.onLogin.bind(Object(d.a)(o)),o.onLogout=o.onLogout.bind(Object(d.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"onLogin",value:function(){this.setState({login:!0})}},{key:"onLogout",value:function(){this.setState({login:!1})}},{key:"getLoginStatus",value:function(){return this.state.login}},{key:"render",value:function(){return Object(c.jsx)(S,{onLogin:this.onLogin,onLogout:this.onLogout,LoginStatus:this.getLoginStatus()})}}]),n}(i.a.Component);s.a.render(Object(c.jsx)(T,{}),document.getElementById("root")),r()}},[[60,1,2]]]);
//# sourceMappingURL=main.91e8f637.chunk.js.map