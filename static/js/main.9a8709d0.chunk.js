(this.webpackJsonpfrom_i1=this.webpackJsonpfrom_i1||[]).push([[0],{13:function(e,t,n){e.exports={spinner:"HW10_spinner__3RcvZ",cssload_fond:"HW10_cssload_fond__16lKS",cssload_container_general:"HW10_cssload_container_general__22qz8","cssload-animball_two":"HW10_cssload-animball_two__38kKw",cssload_internal:"HW10_cssload_internal__3Xxaf",cssload_ballcolor:"HW10_cssload_ballcolor__4xmCa",cssload_ball_1:"HW10_cssload_ball_1__3nLMh",cssload_ball_2:"HW10_cssload_ball_2__3AvUJ",cssload_ball_3:"HW10_cssload_ball_3__3v32w",cssload_ball_4:"HW10_cssload_ball_4__1R8wH","cssload-animball_one":"HW10_cssload-animball_one__3ytrH"}},18:function(e,t,n){e.exports={message:"Message_message__JChDp",avatar:"Message_avatar__1ad23",messageWrap:"Message_messageWrap__s5wjP",textMessage:"Message_textMessage__1mlWk",name:"Message_name__1jiMo",time:"Message_time__7ieJv",triangle:"Message_triangle__3N8t1"}},20:function(e,t,n){e.exports={someClass:"Greeting_someClass__PogKE",error:"Greeting_error__euXOO"}},21:function(e,t,n){e.exports={btnClose:"Affairs_btnClose__3wYGH",btnPriority:"Affairs_btnPriority__Krz3T",wrapBox:"Affairs_wrapBox__3Krh1",active:"Affairs_active__1s4IS"}},27:function(e,t,n){e.exports={link:"Header_link__PtZpn",active:"Header_active__24pWZ",block:"Header_block__F0nBq",header:"Header_header__F1FQE"}},30:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__g9Mzb",errorInput:"SuperInputText_errorInput__3e2bj",error:"SuperInputText_error__bWXT1"}},31:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3ViuG",spanClassName:"SuperCheckbox_spanClassName__2SROf"}},36:function(e,t,n){e.exports={blue:"HW4_blue__P8yie",column:"HW4_column__2dD2g",testSpanError:"HW4_testSpanError__1NbhD"}},40:function(e,t,n){e.exports={default:"SuperButton_default__2UI6h",red:"SuperButton_red__2_diJ"}},41:function(e,t,n){e.exports={maxValue:"HW11_maxValue__1t61C"}},42:function(e,t,n){e.exports={dark:"HW12_dark__1yqMl","dark-text":"HW12_dark-text__1de_J",red:"HW12_red__3sOIS","red-text":"HW12_red-text__1SxPe",some:"HW12_some__3Lqto","some-text":"HW12_some-text__2Qigz"}},47:function(e,t,n){e.exports={App:"App_App__W1mz9"}},49:function(e,t,n){e.exports={span:"SuperEditableSpan_span__1PoPT"}},50:function(e,t,n){e.exports={main:"Clock_main__2Nnqy"}},52:function(e,t,n){e.exports={range:"SuperRange_range__1YVBZ"}},63:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(33),s=n.n(r),o=(n(63),n(47)),i=n.n(o),l=n(22),j=n(5),b=n(18),d=n.n(b),u=n(0);var O=function(e){return Object(u.jsx)("div",{className:d.a.message,children:Object(u.jsxs)("div",{className:d.a.messageWrap,children:[Object(u.jsx)("div",{className:d.a.avatar,children:Object(u.jsx)("img",{src:e.avatar})}),Object(u.jsx)("div",{className:d.a.name,children:e.name}),Object(u.jsx)("div",{className:d.a.textMessage,children:e.message}),Object(u.jsx)("div",{className:d.a.time,children:e.time})]})})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",_="some text",m="22:00";var v=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(O,{avatar:h,name:x,message:_,time:m}),Object(u.jsx)("svg",{className:d.a.triangle}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},p=n(4),f=n(21),g=n.n(f);var k=function(e){return Object(u.jsxs)("div",{children:[e.affair.name,Object(u.jsx)("button",{className:g.a.btnClose,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"}),Object(u.jsx)("span",{children:e.affair.priority})]})};var C=function(e){var t=e.data.map((function(t){return Object(u.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return g.a.btnPriority+(e.filter===t?" "+g.a.active:"")};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{className:n("all"),onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{className:n("high"),onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{className:n("middle"),onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{className:n("low"),onClick:function(){e.setFilter("low")},children:"Low"})]})})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(N),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(p.a)(r,2),o=s[0],i=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)("div",{className:g.a.wrapBox,children:Object(u.jsx)(C,{data:l,setFilter:i,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:o})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},y=n(9),w=n(20),H=n.n(w),W=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.addEnter,o=H.a.error?H.a.errorInput:H.a.input;return Object(u.jsxs)("div",{className:H.a.greeting,children:[Object(u.jsx)("input",{value:t,onChange:n,className:o,onKeyPress:s,onBlur:n}),Object(u.jsx)("span",{className:H.a.error,children:c}),Object(u.jsx)("button",{onClick:a,className:H.a.button,disabled:!t,children:"add"}),Object(u.jsx)("span",{className:H.a.count,children:r})]})},T=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(p.a)(c,2),s=r[0],o=r[1],i=Object(a.useState)(!1),l=Object(p.a)(i,2),j=l[0],b=l[1],d=function(){n(s),alert("Hello, ".concat(s,"!")),o("")},O=t.length;return Object(u.jsx)(W,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(o(t),j&&b(!1)):(o(""),b(!0))},addUser:d,error:j,totalUsers:O,addEnter:function(e){"Enter"===e.key&&s&&(d(),o(""))}})},A=n(48);var E=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(A.v1)(),name:e};c([].concat(Object(y.a)(n),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},I=n(8),M=n(14),P=n(30),F=n.n(P),B=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(F.a.error," ").concat(o||""),j="".concat(F.a.errorInput," ").concat(r?F.a.errorInput:F.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},i)),r&&Object(u.jsx)("span",{className:l,children:r})]})},R=n(36),D=n.n(R),J=n(40),L=n.n(J),K=function(e){var t=e.red,n=e.className,a=Object(M.a)(e,["red","className"]),c="".concat(t?L.a.red:L.a.default," ").concat(n);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("button",Object(I.a)({className:c},a))})},U=n(31),q=n.n(U),G=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=(e.className,e.spanClassName,e.children),c=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),r="".concat(q.a.checkbox," ").concat(q.a.checkbox?q.a.checkbox:"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:r},c)),a&&Object(u.jsx)("span",{className:q.a.spanClassName,children:a})]})};var V=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(a.useState)(!1),i=Object(p.a)(o,2),l=i[0],j=i[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:D.a.column,children:[Object(u.jsx)(B,{value:n,onChangeText:c,onEnter:s,error:r,spanClassName:D.a.testSpanError}),Object(u.jsx)(B,{className:D.a.blue}),Object(u.jsx)(K,{children:"default"}),Object(u.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(K,{disabled:!0,children:"disabled"}),Object(u.jsx)(G,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(G,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var z=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(S,{}),Object(u.jsx)(E,{}),Object(u.jsx)(V,{})]})};var X=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Z=n(49),Y=n.n(Z),Q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(M.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),o=Object(p.a)(s,2),i=o[0],l=o[1],j=c||{},b=j.children,d=j.onDoubleClick,O=(j.className,Object(M.a)(j,["children","onDoubleClick","className"])),h="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",Y.a.span);return Object(u.jsx)(u.Fragment,{children:i?Object(u.jsx)(B,Object(I.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(u.jsx)("span",Object(I.a)(Object(I.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:h},O),{},{children:b||r.value}))})};function $(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{children:Object(u.jsx)(Q,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(u.jsx)(K,{onClick:function(){$("editable-span-value",n)},children:"save"}),Object(u.jsx)(K,{onClick:function(){c(ee("editable-span-value",""))},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},ne=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(M.a)(e,["options","onChange","onChangeOption"]),r=t.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}));return Object(u.jsx)("select",Object(I.a)(Object(I.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},ae=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(M.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:t,value:e,onChange:s,checked:e===a}),e]},t+"-"+n)})):[];return Object(u.jsx)(u.Fragment,{children:o})},ce=["x","y","z"];var re=function(){var e=Object(a.useState)(ce[1]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{children:Object(u.jsx)(ne,{options:ce,value:n,onChangeOption:c})}),Object(u.jsx)("div",{children:Object(u.jsx)(ae,{name:"radio",options:ce,value:n,onChangeOption:c})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},se=function(e,t){switch(t.type){case"sort":var n=Object(y.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return Object(y.a)(e).filter((function(e){return e.age>=t.payload}));default:return e}},oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ie=function(){var e=Object(a.useState)(oe),t=Object(p.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(u.jsxs)("div",{children:[e.name,", ",e.age]},e._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 8",r,Object(u.jsx)("div",{children:Object(u.jsx)(K,{onClick:function(){return c(se(oe,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(u.jsx)("div",{children:Object(u.jsx)(K,{onClick:function(){return c(se(oe,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(u.jsx)("div",{children:Object(u.jsx)(K,{onClick:function(){return c(se(oe,{type:"check",payload:18}))},children:"check18"})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},le=n(50),je=n.n(le);var be=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(p.a)(r,2),o=s[0],i=s[1],l=Object(a.useState)(!1),j=Object(p.a)(l,2),b=j[0],d=j[1],O=function(){clearInterval(n),d(!1)},h=null===o||void 0===o?void 0:o.toLocaleTimeString(),x=null===o||void 0===o?void 0:o.toLocaleDateString();return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},className:je.a.main,children:h}),b&&Object(u.jsx)("div",{children:x}),Object(u.jsx)(K,{onClick:function(){O();var e=window.setInterval((function(){i(new Date)}),1e3);c(e)},children:"start"}),Object(u.jsx)(K,{onClick:O,children:"stop"})]})};var de=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 9",Object(u.jsx)(be,{}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},ue=n(13),Oe=n.n(ue),he=n(19),xe={loadingSt:!1},_e=function(e){return{type:"LOAD-START",loadingSt:e}};var me=function(){var e=Object(he.c)((function(e){return e.loading.loadingSt})),t=Object(he.b)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 10",e?Object(u.jsx)("div",{className:Oe.a.spinner,children:Object(u.jsx)("div",{className:Oe.a.cssload_fond,children:Object(u.jsxs)("div",{className:Oe.a.cssload_container_general,children:[Object(u.jsx)("div",{className:Oe.a.cssload_internal,children:Object(u.jsx)("div",{className:"".concat(Oe.a.cssload_ballcolor," ").concat(Oe.a.cssload_ball_1)})}),Object(u.jsx)("div",{className:Oe.a.cssload_internal,children:Object(u.jsx)("div",{className:"".concat(Oe.a.cssload_ballcolor," ").concat(Oe.a.cssload_ball_2)})}),Object(u.jsx)("div",{className:Oe.a.cssload_internal,children:Object(u.jsx)("div",{className:"".concat(Oe.a.cssload_ballcolor," ").concat(Oe.a.cssload_ball_3)})}),Object(u.jsx)("div",{className:Oe.a.cssload_internal,children:Object(u.jsx)("div",{className:"".concat(Oe.a.cssload_ballcolor," ").concat(Oe.a.cssload_ball_4)})})]})})}):Object(u.jsx)("div",{children:Object(u.jsx)(K,{onClick:function(){t(_e(!0)),setTimeout((function(){t(_e(!1))}),700)},children:"set loading..."})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},ve=n(52),pe=n.n(ve),fe=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(M.a)(e,["type","onChange","onChangeRange","className"]),r="".concat(pe.a.range," ").concat(a||"");return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",Object(I.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r},c))})},ge=n(87),ke=n(89),Ce=function(e){var t=e.onChangeRange,n=e.value;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(ke.a,{sx:{width:500},children:Object(u.jsx)(ge.a,{getAriaLabel:function(){return"Temperature range"},value:n,onChange:function(e,n){t&&t([n[0],n[1]])},valueLabelDisplay:"auto",getAriaValueText:function(e){return e.toString()}})})})},Ne=n(41),Se=n.n(Ne);var ye=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([5,95]),s=Object(p.a)(r,2),o=s[0],i=s[1],l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 11",Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:n}),Object(u.jsx)(fe,{value:n,onChangeRange:c})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:Se.a.minValue,children:l}),Object(u.jsx)("span",{className:Se.a.maxValue,children:j}),Object(u.jsx)(Ce,{value:o,onChangeRange:i})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var we=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(te,{}),Object(u.jsx)(re,{}),Object(u.jsx)(ie,{}),Object(u.jsx)(de,{}),Object(u.jsx)(me,{}),Object(u.jsx)(ye,{})]})},He=n(42),We=n.n(He),Te={theme:"red"};var Ae=function(){var e=Object(he.c)((function(e){return e.theme.theme})),t=Object(he.b)(),n=function(e){var n=e.currentTarget.value;t(function(e){return{type:"CHANGE-THEME",theme:e}}(n)),console.log("callback: ".concat(n))};return Object(u.jsxs)("div",{className:We.a[e],children:[Object(u.jsx)("hr",{}),Object(u.jsx)("span",{className:We.a[e+"-text"],children:"homeworks 12"}),Object(u.jsx)(K,{onClick:function(e){return n(e)},value:"dark",children:"dark"}),Object(u.jsx)(K,{onClick:function(e){return n(e)},value:"red",children:"red"}),Object(u.jsx)(K,{onClick:function(e){return n(e)},value:"some",children:"some"}),Object(u.jsx)("hr",{})]})};var Ee=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true}")}),[]),Object(u.jsxs)("div",{children:["API",Object(u.jsx)(K,{children:"request"}),Object(u.jsx)(G,{onClick:function(){return c(!n)},checked:n,children:"poke"})]})};var Ie=function(){return Object(u.jsxs)("div",{children:["homeworks 13",Object(u.jsx)(Ee,{}),Object(u.jsx)("hr",{})]})};var Me=function(){return Object(u.jsxs)("div",{children:["Junior+",Object(u.jsx)(Ae,{}),Object(u.jsx)(Ie,{})]})},Pe="/HW/pre-junior",Fe="/HW/junior",Be="/HW/junior-plus";var Re=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{path:"/HW/",element:Object(u.jsx)(j.a,{to:Pe})}),Object(u.jsx)(j.b,{path:Pe,element:Object(u.jsx)(z,{})}),Object(u.jsx)(j.b,{path:Fe,element:Object(u.jsx)(we,{})}),Object(u.jsx)(j.b,{path:Be,element:Object(u.jsx)(Me,{})}),Object(u.jsx)(j.b,{path:"/HW/*",element:Object(u.jsx)(X,{})})]})})},De=n(27),Je=n.n(De);var Le=function(){return Object(u.jsxs)("div",{className:Je.a.header,children:[Object(u.jsx)(l.b,{to:Pe,className:Je.a.link,children:"pre-junior"}),Object(u.jsx)(l.b,{to:Fe,className:Je.a.link,children:"junior"}),Object(u.jsx)(l.b,{to:Be,className:Je.a.link,children:"junior+"}),Object(u.jsx)("div",{className:Je.a.block,children:" \u2192"})]})};var Ke=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(Le,{}),Object(u.jsx)(Re,{})]})})};var Ue=function(){return Object(u.jsxs)("div",{className:i.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(Ke,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=n(43),Ge=Object(qe.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD-START":return Object(I.a)(Object(I.a)({},e),{},{loadingSt:t.loadingSt});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":return Object(I.a)(Object(I.a)({},e),{},{theme:t.theme});default:return e}}}),Ve=Object(qe.b)(Ge),ze=Ve;window.store=Ve,s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(he.a,{store:ze,children:Object(u.jsx)(Ue,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.9a8709d0.chunk.js.map