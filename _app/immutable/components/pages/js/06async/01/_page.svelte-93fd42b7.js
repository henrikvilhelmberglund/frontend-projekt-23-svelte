import{_ as x}from"../../../../../chunks/preload-helper-41c905a7.js";import{S as E,i as P,s as W,$ as q,a as k,k as u,q as d,c as y,l as m,m as f,r as b,h as s,n as v,b as p,G as h,a0 as B,B as _,o as T}from"../../../../../chunks/index-dd0daf5a.js";function M(r){return{c:_,l:_,m:_,p:_,d:_}}function S(r){let t,l,i,o,c=r[1]+"",n;return{c(){t=u("p"),l=d("We waited!"),i=k(),o=u("p"),n=d(c)},l(e){t=m(e,"P",{});var a=f(t);l=b(a,"We waited!"),a.forEach(s),i=y(e),o=m(e,"P",{});var w=f(o);n=b(w,c),w.forEach(s)},m(e,a){p(e,t,a),h(t,l),p(e,i,a),p(e,o,a),h(o,n)},p:_,d(e){e&&s(t),e&&s(i),e&&s(o)}}}function $(r){let t,l;return{c(){t=u("p"),l=d("Waiting...")},l(i){t=m(i,"P",{});var o=f(t);l=b(o,"Waiting..."),o.forEach(s)},m(i,o){p(i,t,o),h(t,l)},p:_,d(i){i&&s(t)}}}function C(r){let t,l,i,o,c,n={ctx:r,current:null,token:null,hasCatch:!1,pending:$,then:S,catch:M,value:1};return q(r[0],n),{c(){n.block.c(),t=k(),l=u("button"),i=d("Move the box!"),o=k(),c=u("div"),this.h()},l(e){n.block.l(e),t=y(e),l=m(e,"BUTTON",{id:!0});var a=f(l);i=b(a,"Move the box!"),a.forEach(s),o=y(e),c=m(e,"DIV",{id:!0,class:!0}),f(c).forEach(s),this.h()},h(){v(l,"id","moveBoxBtn"),v(c,"id","box"),v(c,"class","svelte-1oq0pnj")},m(e,a){n.block.m(e,n.anchor=a),n.mount=()=>t.parentNode,n.anchor=t,p(e,t,a),p(e,l,a),h(l,i),p(e,o,a),p(e,c,a)},p(e,[a]){r=e,B(n,r,a)},i:_,o:_,d(e){n.block.d(e),n.token=null,n=null,e&&s(t),e&&s(l),e&&s(o),e&&s(c)}}}function D(r){T(()=>{let l=document.querySelector("body");l.style.display="block",x(()=>import("../../../../../chunks/main-a71d27a8.js"),[],import.meta.url),t.then(()=>console.log("We waited"))});let t=new Promise(l=>{setTimeout(()=>{l("waiting complete")},500)});return[t]}class O extends E{constructor(t){super(),P(this,t,D,C,W,{})}}export{O as default};
