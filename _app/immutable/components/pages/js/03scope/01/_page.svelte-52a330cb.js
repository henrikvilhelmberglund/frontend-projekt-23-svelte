import{S as I,i as C,s as M,a as b,k as m,q as S,c as y,l as v,m as f,r as k,h as s,n as E,b as w,G as u,B as T,o as U}from"../../../../../chunks/index-dd0daf5a.js";function A(q){let i,o,a,c,d,l,n,t,h,L,B,_;return{c(){i=b(),o=m("div"),a=m("button"),c=S("Show quotes"),d=b(),l=m("ul"),n=b(),t=m("div"),h=m("button"),L=S("Show authors"),B=b(),_=m("ul"),this.h()},l(e){i=y(e),o=v(e,"DIV",{});var r=f(o);a=v(r,"BUTTON",{id:!0});var g=f(a);c=k(g,"Show quotes"),g.forEach(s),d=y(r),l=v(r,"UL",{id:!0}),f(l).forEach(s),r.forEach(s),n=y(e),t=v(e,"DIV",{});var p=f(t);h=v(p,"BUTTON",{id:!0});var x=f(h);L=k(x,"Show authors"),x.forEach(s),B=y(p),_=v(p,"UL",{id:!0}),f(_).forEach(s),p.forEach(s),this.h()},h(){E(a,"id","showQuotesBtn"),E(l,"id","quoteList"),E(h,"id","showAuthorsBtn"),E(_,"id","authorList")},m(e,r){w(e,i,r),w(e,o,r),u(o,a),u(a,c),u(o,d),u(o,l),w(e,n,r),w(e,t,r),u(t,h),u(h,L),u(t,B),u(t,_)},p:T,i:T,o:T,d(e){e&&s(i),e&&s(o),e&&s(n),e&&s(t)}}}function D(q){return U(()=>{let i=document.querySelector("body");i.style.display="block";var o=["Charles Dickens","Jane Austen","Mark Twain"],d=document.getElementById("showAuthorsBtn"),a=document.getElementById("authorList");d.addEventListener("click",function(){a.innerHTML="";for(var n=0;n<o.length;n++){var t=document.createElement("li");t.innerText=o[n],a.appendChild(t)}});var c=["The best is yet to be.","Try to be a rainbow in someones cloud.","When things go wrong, dont go with them."],d=document.getElementById("showQuotesBtn"),l=document.getElementById("quoteList");d.addEventListener("click",function(){l.innerHTML="";for(var n=0;n<c.length;n++){var t=document.createElement("li");t.innerText=c[n],l.appendChild(t)}})}),[]}class N extends I{constructor(i){super(),C(this,i,D,A,M,{})}}export{N as default};