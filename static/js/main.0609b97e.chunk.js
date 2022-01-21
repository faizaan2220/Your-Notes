(this["webpackJsonpdisney-clone"]=this["webpackJsonpdisney-clone"]||[]).push([[0],{54:function(n,t,e){},62:function(n,t,e){"use strict";e.r(t);var a,r,c,o=e(0),i=e.n(o),s=e(39),l=e.n(s),x=(e(54),e(13)),d=e(7),b=e(16),p=e(17),j=e(2),u=p.a.div(a||(a=Object(b.a)(["\n    width: 100vw;\n    height : 10vh;\n    background-color: rgb(252, 218, 47);\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n\n    .heading{\n        color: black;\n    }\n\n    @media(max-width : 568px){\n        justify-content: center;\n    }\n"]))),h=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(u,{children:Object(j.jsx)("h1",{className:"heading",children:"Your Notes"})})})},g=e(6),O=e(36),f=e(73),m=e(44),v=e.n(m),w=p.a.div(r||(r=Object(b.a)(["\n    margin-top: 20px;\n    width : 100%;\n    background: transparent;\n    display: flex;\n    justify-content: center;\n\n    .form{\n        width : 35%;\n        min-width : 400px;\n        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n        border-radius: 15px;\n    }\n\n    .form:hover{\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n    }\n\n    .title{\n        border-style: none;\n        width : 100%;\n        font-size: 20px;\n        padding : 10px 15px 5px 15px;\n        outline : none;\n        border-radius: 15px;\n    }\n    .textarea{\n        padding-left :  15px;\n        margin-top:20px;\n        border-style: none;\n        width : 100%;\n        outline : none;\n        font-size : 16px;\n    }\n    .avatar{\n        background-color: white;\n        color:rgb(252, 218, 47);\n    }\n    .avatar:hover{\n        background-color:rgb(252, 218, 47);\n        color: white;\n    }\n\n"]))),k=function(n){var t=Object(o.useState)(),e=Object(d.a)(t,2),a=e[0],r=e[1],c=Object(o.useState)(!1),i=Object(d.a)(c,2),s=i[0],l=i[1],x=Object(o.useState)({title:"",content:""}),b=Object(d.a)(x,2),p=b[0],u=b[1],h=function(n){var t=n.target,e=t.name,a=t.value;u((function(n){return Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},e,a))}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(w,{onDoubleClick:function(){r(0),l(!1)},children:Object(j.jsxs)("form",{className:"form",action:"",children:[s?Object(j.jsx)("input",{className:"title",type:"text",placeholder:"Title",onChange:h,value:p.title,name:"title"}):null,Object(j.jsx)("textarea",{className:"textarea",id:"",cols:"30",rows:a,placeholder:"Write a note",onClick:function(){r(5),l(!0)},onChange:h,value:p.content,name:"content"}),s?Object(j.jsx)(f.a,{className:"avatar",sx:{float:"right"},onClick:function(){n.passNote(p),u({title:"",content:""})},children:Object(j.jsx)(v.a,{className:"add"})}):null]})})})},y=e(45),N=e.n(y),C=p.a.div(c||(c=Object(b.a)(["\n    width: 250px;\n    height: 180px;\n    background-color: white;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n    margin-top: 10px;\n    margin-left: 20px;\n    border-radius: 10px;\n    float: left;\n\n    .avatar{\n        float: right;\n        background: transparent;\n        color: rgb(237, 45, 7);\n    }\n    .avatar:hover{\n        background-color: rgb(237, 45, 7);\n        color: white;\n    }\n    .heading,.content{\n        padding-left: 10px;\n        padding-right: 10px;\n        padding-top: 5px;\n        font-family: 'Fuzzy Bubbles', cursive;\n    }\n\n    .content{\n        outline : none;\n        border-style: none;\n    }\n\n    @media(max-width : 568px){\n        margin-left: 25%;\n        margin-right: auto;\n    }\n"]))),F=function(n){var t=n.title,e=n.content;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(C,{children:[Object(j.jsx)("h2",{className:"heading",children:t}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{rows:"4",cols:"25",className:"content",children:e}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:Object(j.jsx)(f.a,{className:"avatar",onClick:function(){n.deleteData(n.id)},children:Object(j.jsx)(N.a,{})})})]})})},S=function(){var n=Object(o.useState)([]),t=Object(d.a)(n,2),e=t[0],a=t[1],r=function(n){a((function(t){return t.filter((function(t,e){return e!==n}))}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(k,{passNote:function(n){a((function(t){return[].concat(Object(x.a)(t),[n])}))}}),e.map((function(n,t){return Object(j.jsx)(F,{id:t,title:n.title,content:n.content,deleteData:r},t)}))]})},z=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(S,{})})};l.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.0609b97e.chunk.js.map