(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),o=n.n(i),r=n(4),s=n.n(r),j=(n(11),n(2)),d=o.a.createContext(),u={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},input:{marginRight:"1rem"}};var a=function(e){var t=e.todo,n=e.index,o=e.onChange,r=Object(i.useContext)(d).removeTodo,s=[];return t.completed&&s.push("done"),Object(c.jsxs)("li",{style:u.li,children:[Object(c.jsxs)("span",{className:s.join(" "),children:[Object(c.jsx)("input",{checked:t.completed,type:"checkbox",style:u.input,onChange:function(){return o(t.id)}}),Object(c.jsx)("strong",{children:n+1}),"\xa0",t.title]}),Object(c.jsx)("button",{className:"rm",onClick:function(){return r(t.id)},children:"\xd7"})]})},l={ul:{listStyle:"none",margin:0,padding:0}};var b=function(e){return Object(c.jsx)("ul",{style:l.ul,children:e.todos.map((function(t,n){return Object(c.jsx)(a,{todo:t,index:n,onChange:e.onToggle},t.id)}))})},x=n(5);var O=function(e){var t=e.onCreate,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(i.useState)(e),n=Object(j.a)(t,2),c=n[0],o=n[1];return{bind:{value:c,onChange:function(e){return o(e.target.value)}},clear:function(){return o("")},value:function(){return c}}}("");return Object(c.jsxs)("form",{style:{marginBottom:"1rem"},onSubmit:function(e){e.preventDefault(),n.value().trim()&&(t(n.value()),n.clear())},children:[Object(c.jsx)("input",Object(x.a)({},n.bind)),Object(c.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})},f=function(){return Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(c.jsxs)("div",{className:"lds-spinner",children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})})};var h=function(){var e=o.a.useState([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=o.a.useState(!0),u=Object(j.a)(s,2),a=u[0],l=u[1];return Object(i.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=4").then((function(e){return e.json()})).then((function(e){setTimeout((function(){r(e),l(!1)}),2e3)}))}),[]),Object(c.jsx)(d.Provider,{value:{removeTodo:function(e){r(n.filter((function(t){return t.id!==e})))}},children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)("h1",{children:"Todo \u043d\u0430 React"}),Object(c.jsx)("h2",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443!"}),Object(c.jsx)(O,{onCreate:function(e){r(n.concat([{title:e,id:Date.now(),completed:!1}]))}}),a&&Object(c.jsx)(f,{}),n.length?Object(c.jsx)(b,{todos:n,onToggle:function(e){r(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):a?null:Object(c.jsx)("p",{children:"\u043d\u0435\u0442 \u0434\u0435\u043b!"})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),m()}},[[12,1,2]]]);
//# sourceMappingURL=main.95533558.chunk.js.map