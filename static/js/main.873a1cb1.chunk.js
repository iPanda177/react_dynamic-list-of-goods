(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,n,e){},17:function(t,n,e){"use strict";e.r(n);var o=e(7),r=e.n(o),c=e(8),a=e(9),u=e(5),i=e.n(u),s=e(1),d=(e(15),e(0)),l=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){var n=t.id,e=t.name,o=t.color;return Object(d.jsx)("li",{"data-cy":"good",style:{color:o},children:e},n)}))})},f=e(6);function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var j=function(){return b().then((function(t){return Object(f.a)(t).sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},h=function(){return b().then((function(t){return Object(f.a)(t).filter((function(t){return"red"===t.color}))}))},p=function(){var t=Object(s.useState)([]),n=Object(a.a)(t,2),e=n[0],o=n[1],r=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=o,t.next=3,n();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return r(b)},children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return r(j)},children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return r(h)},children:"Load red goods"}),Object(d.jsx)(l,{goods:e})]})};r.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.873a1cb1.chunk.js.map