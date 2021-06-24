(this["webpackJsonpmaria-exercise-agenda"]=this["webpackJsonpmaria-exercise-agenda"]||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(32),c=n.n(s),r=(n(38),n(14)),i=n(2),o=n(10),l=n(11),h=n(13),d=n(12),u=n(0),j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(u.jsx)(r.b,{to:"/",className:"navbar-brand",children:"Agenda"}),Object(u.jsx)("div",{className:"collpase navbar-collapse",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(r.b,{to:"/",className:"nav-link",children:"Contacts"})}),Object(u.jsx)("li",{className:"navbar-item",children:Object(u.jsx)(r.b,{to:"/create",className:"nav-link",children:"Create New Contact"})})]})})]})}}]),n}(a.Component),b=n(4),m=n(9),x=n.n(m),O=function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.exercise.username}),Object(u.jsx)("td",{children:e.exercise.email}),Object(u.jsx)("td",{children:e.exercise.address}),Object(u.jsx)("td",{children:e.exercise.phone}),Object(u.jsxs)("td",{children:[Object(u.jsx)(r.b,{to:"/edit/"+e.exercise._id,children:"Edit"})," | ",Object(u.jsx)("a",{href:"#",onClick:function(){window.confirm("Are you sure to delete this contact?")&&e.deleteExercise(e.exercise._id)},children:"Delete"})]})]})},p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).deleteExercise=a.deleteExercise.bind(Object(b.a)(a)),a.state={exercises:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:5000/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){x.a.delete("http://localhost:5000/exercises/"+e).then((function(e){console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return Object(u.jsx)(O,{exercise:t,deleteExercise:e.deleteExercise},t._id)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Logged Contacts"}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{className:"thead-light",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Address"}),Object(u.jsx)("th",{children:"Phone"}),Object(u.jsx)("th",{children:"Actions"})]})}),Object(u.jsx)("tbody",{children:this.exerciseList()})]})]})}}]),n}(a.Component),g=n(17),v=n.n(g),f=(n(31),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(b.a)(a)),a.onChangeAddress=a.onChangeAddress.bind(Object(b.a)(a)),a.onChangePhone=a.onChangePhone.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={username:"",email:"",address:"",phone:"",users:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:5000/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,email:t.data.email,address:t.data.address,phone:t.data.phone})})).catch((function(e){console.log(e)})),x.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"onChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,email:this.state.email,address:this.state.address,phone:this.state.phone};console.log(t),x.a.post("http://localhost:5000/exercises/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Edit Contact"}),Object(u.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Username: "}),Object(u.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Email: "}),Object(u.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.email,onChange:this.onChangeEmail})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Address: "}),Object(u.jsx)("input",{type:"text",className:"form-control",value:this.state.address,onChange:this.onChangeAddress})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Phone: "}),Object(u.jsx)("div",{children:Object(u.jsx)(v.a,{country:"gr",value:this.state.phone,onChange:function(t){return e.setState({phone:t})}})})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"submit",value:"Edit Contact",className:"btn btn-primary"})})]})]})}}]),n}(a.Component)),C=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(b.a)(a)),a.onChangeAddress=a.onChangeAddress.bind(Object(b.a)(a)),a.onChangePhone=a.onChangePhone.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={username:"",email:"",address:"",phone:"",users:[]},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"onChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,email:this.state.email,address:this.state.address,phone:this.state.phone};console.log(t),x.a.post("http://localhost:5000/exercises/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Create New Contact"}),Object(u.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Name: "}),Object(u.jsx)("input",{type:"text",required:!0,className:"form-control",placeholder:"e.g Maria Mesimeri",onChange:this.onChangeUsername})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Email: "}),Object(u.jsx)("input",{type:"email",required:!0,className:"form-control",placeholder:"e.g mesimeri@gmail.com",value:this.state.email,onChange:this.onChangeEmail})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Address: "}),Object(u.jsx)("input",{type:"text",className:"form-control",value:this.state.address,onChange:this.onChangeAddress})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Phone: "}),Object(u.jsx)("div",{children:Object(u.jsx)(v.a,{country:"gr",value:this.state.phone,onChange:function(t){return e.setState({phone:t})}})})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{type:"submit",value:"Create Contact",className:"btn btn-primary"})})]})]})}}]),n}(a.Component);var y=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsx)("br",{}),Object(u.jsx)(i.a,{path:"/",exact:!0,component:p}),Object(u.jsx)(i.a,{path:"/edit/:id",component:f}),Object(u.jsx)(i.a,{path:"/create",component:C})]})})};c.a.render(Object(u.jsx)(y,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.2c8c099e.chunk.js.map