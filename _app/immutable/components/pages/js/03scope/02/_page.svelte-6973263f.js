import{S as x,i as b,s as M,a as u,k as f,q as k,c as d,l as p,m as g,h as a,r as E,n as h,b as c,G as v,B as _,o as B}from"../../../../../chunks/index-3d15730c.js";function w(y){let o,s,i,l,m,r,t;return{c(){o=u(),s=f("p"),i=u(),l=f("button"),m=k("Show message history"),r=u(),t=f("ul"),this.h()},l(e){o=d(e),s=p(e,"P",{id:!0}),g(s).forEach(a),i=d(e),l=p(e,"BUTTON",{id:!0});var n=g(l);m=E(n,"Show message history"),n.forEach(a),r=d(e),t=p(e,"UL",{id:!0}),g(t).forEach(a),this.h()},h(){h(s,"id","latestMessage"),h(l,"id","showAllMessagesBtn"),h(t,"id","allMessages")},m(e,n){c(e,o,n),c(e,s,n),c(e,i,n),c(e,l,n),v(l,m),c(e,r,n),c(e,t,n)},p:_,i:_,o:_,d(e){e&&a(o),e&&a(s),e&&a(i),e&&a(l),e&&a(r),e&&a(t)}}}function S(y){return B(()=>{let o=document.querySelector("body");o.style.display="block";const s=[{time:"10:12",from:"bot",text:"Välkommen till vår chat! Kan jag hjälpa till med något?"},{time:"10:14",from:"user",text:"Något går fel när jag försöker bekräfta beställningen"},{time:"10:20",from:"bot",text:'Det verkar som du inte klickat i "godkänn"-rutan'}];function i(t){const e=[...t];return e.reverse(),e[0].text}const l=document.getElementById("latestMessage"),m=document.getElementById("showAllMessagesBtn"),r=document.getElementById("allMessages");l.innerText=i(s),m.addEventListener("click",function(){s.forEach(function(t){const e=document.createElement("li");e.innerText=`${t.time}: ${t.text}`,r.appendChild(e)})})}),[]}class L extends x{constructor(o){super(),b(this,o,S,w,M,{})}}export{L as default};
