(this["webpackJsonpfirst-practice"]=this["webpackJsonpfirst-practice"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),l=n.n(c),r=n(8),d=n(5),i=n(1),s=n(2),u=n(4),m=n(3),h=(n(14),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleSubmit=function(t){t.preventDefault();var n=document.getElementById("newTodo");if(null!==n.value&&null===n.value.match(/^ *$/)){var a=n.value;n.value="",e.props.handleAddTodo(a)}},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",id:"newTodo",placeholder:"Add new todo . . ."}),o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-sm"},"Add todo")))}}]),n}(a.Component)),p=(n(15),n(16),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getCheckStyle=function(e){return e.completed?{color:"green"}:{color:"#fcdab7"}},e.getTextStyle=function(e){return e.completed?{color:"#80808080",textDecoration:"line-through"}:{color:"#fcdab7"}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"List"},this.props.todos.map((function(t){return o.a.createElement("div",{key:t.id,className:"todo-item"},o.a.createElement("p",{className:"todo-text",style:e.getTextStyle(t)},t.content),o.a.createElement("div",{className:"control-todo"},o.a.createElement("i",{style:e.getCheckStyle(t),onClick:function(){return e.props.handleCheck(t)},className:"fas fa-check"}),o.a.createElement("i",{onClick:function(){return e.props.handleDelete(t)},className:"fas fa-trash"})))}))))}}]),n}(a.Component)),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={id:4,todos:[{id:1,content:"Study React",completed:!1},{id:2,content:"Eat lunch",completed:!1},{id:3,content:"Work out",completed:!1},{id:4,content:"Sleep early",completed:!1}]},e.handleCheck=function(t){console.log(e.state);var n=Object(d.a)(e.state.todos),a=n.indexOf(t);n[a]=Object(r.a)({},n[a]),n[a].completed?n[a].completed=!1:n[a].completed=!0,e.setState({todos:n})},e.handleDelete=function(t){var n=Object(d.a)(e.state.todos);n=n.filter((function(e){return e.id!==t.id})),e.setState({todos:n})},e.handleAddTodo=function(t){var n=Object(d.a)(e.state.todos),a=e.state.id,o={id:++a,content:t,completed:!1};n.unshift(o),console.log(n),e.setState({id:a,todos:n})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"main"},o.a.createElement("h1",{className:"title"},"Todo List"),o.a.createElement(h,{handleAddTodo:this.handleAddTodo}),o.a.createElement(p,{todos:this.state.todos,handleCheck:this.handleCheck,handleDelete:this.handleDelete})))}}]),n}(a.Component);n(17),n(18);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.3e41c9bb.chunk.js.map