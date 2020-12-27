(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={search:"filter_search__3Zsrs"}},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),o=n(8),i=n.n(o),u=(n(17),n(11)),s=n(2),m=n(22),l=n(6),b=n.n(l);function d(e){var t=e.onAddContact,n=e.onCheckContact,c=Object(a.useState)(""),o=Object(s.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(""),d=Object(s.a)(l,2),j=d[0],f=d[1],h=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":u(r);break;case"number":f(r);break;default:return}},O=function(e,t){return e.trim()&&t.trim()?n(e):(alert("\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f Name \u0438 Number"),!1)},p=function(){u(""),f("")};return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),O(i,j)&&(t({id:Object(m.a)(),name:i,number:j}),p())},children:[Object(r.jsxs)("label",{htmlFor:"",children:["Name",Object(r.jsx)("input",{className:b.a.input,type:"text",name:"name",value:i,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",onChange:h,autoFocus:!0})]}),Object(r.jsxs)("label",{htmlFor:"",children:["Number",Object(r.jsx)("input",{className:b.a.input,type:"tel",name:"number",value:j,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430",onChange:h})]}),Object(r.jsx)("button",{children:"Add contact"})]})})}var j=n(3),f=n.n(j),h={id:f.a.string.isRequired,name:f.a.string.isRequired,number:f.a.string.isRequired},O=n(9),p=n.n(O);function v(e){var t=e.id,n=e.name,a=e.number,c=e.onRemove;return Object(r.jsxs)("li",{className:p.a.item,children:[n," : ",a," ",Object(r.jsx)("button",{onClick:function(){return c(t)},children:"Delete"})]})}function x(e){var t=e.contacts,n=e.onRemove;return 0===t.length?null:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)(v,{name:e.name,number:e.number,id:e.id,onRemove:n},e.id)}))})}v.propTypes={contacts:f.a.arrayOf(f.a.shape(h)),onRemove:f.a.func};var g=n(10),C=n.n(g);function F(e){var t=e.filter,n=e.onChange;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:C.a.search,children:"Find contacts by name"}),Object(r.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})}var k=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),r=Object(s.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(c))}),[e,c]),[c,o]},S=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function _(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],o=k("contacts",S),i=Object(s.a)(o,2),m=i[0],l=i[1],b=m.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Phonebook"}),Object(r.jsx)(d,{onAddContact:function(e){l([].concat(Object(u.a)(m),[e]))},onCheckContact:function(e){var t=!!m.find((function(t){return t.name.trim()===e.trim()}));return t&&alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u0438\u043c\u0435\u043d\u0435\u043c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"),!t}}),Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)(F,{filter:n,onChange:function(e){c(e.target.value)}}),Object(r.jsx)(x,{contacts:b,onRemove:function(e){return l(m.filter((function(t){return t.id!==e})))}})]})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(_,{})}),document.getElementById("root")),w()},6:function(e,t,n){e.exports={form:"ContactForm_form__3GuGF",input:"ContactForm_input__X94eX"}},9:function(e,t,n){e.exports={item:"ContactListItem_item__1g6Fu"}}},[[20,1,2]]]);
//# sourceMappingURL=main.ae09a321.chunk.js.map