import{S as K,i as Q,s as Y,k as r,a as y,q as U,W as Z,l as o,h as s,c as _,m as b,r as k,n as e,G as l,b as E,B as X,o as ee,X as te}from"../../../../../chunks/index-3d15730c.js";const{document:x}=te;function se($){let c,n,i,z,q,m,p,I,L,a,h,M,B,S,F,w,V,D,A,N,v,C,P,f,T,O;return{c(){c=r("meta"),n=r("meta"),i=r("meta"),z=y(),q=y(),m=r("div"),p=r("h1"),I=U("Välkommen till 01 - Forms!"),L=y(),a=r("form"),h=r("label"),M=U("Username"),B=y(),S=r("input"),F=y(),w=r("label"),V=U("Password"),D=y(),A=r("input"),N=y(),v=r("button"),C=U("Submit"),P=y(),f=r("div"),T=r("p"),O=U("Användaruppgifterna är fel."),this.h()},l(t){const u=Z("svelte-rq9opw",x.head);c=o(u,"META",{charset:!0,class:!0}),n=o(u,"META",{"http-equiv":!0,content:!0,class:!0}),i=o(u,"META",{name:!0,content:!0,class:!0}),u.forEach(s),z=_(t),q=_(t),m=o(t,"DIV",{id:!0,class:!0});var G=b(m);p=o(G,"H1",{class:!0});var H=b(p);I=k(H,"Välkommen till 01 - Forms!"),H.forEach(s),G.forEach(s),L=_(t),a=o(t,"FORM",{id:!0,class:!0});var d=b(a);h=o(d,"LABEL",{for:!0,class:!0});var R=b(h);M=k(R,"Username"),R.forEach(s),B=_(d),S=o(d,"INPUT",{id:!0,type:!0,class:!0}),F=_(d),w=o(d,"LABEL",{for:!0,class:!0});var W=b(w);V=k(W,"Password"),W.forEach(s),D=_(d),A=o(d,"INPUT",{id:!0,type:!0,class:!0}),N=_(d),v=o(d,"BUTTON",{id:!0,type:!0,class:!0});var g=b(v);C=k(g,"Submit"),g.forEach(s),d.forEach(s),P=_(t),f=o(t,"DIV",{id:!0,class:!0});var j=b(f);T=o(j,"P",{class:!0});var J=b(T);O=k(J,"Användaruppgifterna är fel."),J.forEach(s),j.forEach(s),this.h()},h(){e(c,"charset","UTF-8"),e(c,"class","svelte-1191zm4"),e(n,"http-equiv","X-UA-Compatible"),e(n,"content","IE=edge"),e(n,"class","svelte-1191zm4"),e(i,"name","viewport"),e(i,"content","width=device-width, initial-scale=1.0"),e(i,"class","svelte-1191zm4"),x.title="Login",e(p,"class","svelte-1191zm4"),e(m,"id","welcome"),e(m,"class","svelte-1191zm4"),e(h,"for","username"),e(h,"class","svelte-1191zm4"),e(S,"id","username"),e(S,"type","text"),e(S,"class","svelte-1191zm4"),e(w,"for","password"),e(w,"class","svelte-1191zm4"),e(A,"id","password"),e(A,"type","password"),e(A,"class","svelte-1191zm4"),e(v,"id","submit"),e(v,"type","submit"),e(v,"class","svelte-1191zm4"),e(a,"id","form"),e(a,"class","svelte-1191zm4"),e(T,"class","svelte-1191zm4"),e(f,"id","wrong"),e(f,"class","svelte-1191zm4")},m(t,u){l(x.head,c),l(x.head,n),l(x.head,i),E(t,z,u),E(t,q,u),E(t,m,u),l(m,p),l(p,I),E(t,L,u),E(t,a,u),l(a,h),l(h,M),l(a,B),l(a,S),l(a,F),l(a,w),l(w,V),l(a,D),l(a,A),l(a,N),l(a,v),l(v,C),E(t,P,u),E(t,f,u),l(f,T),l(T,O)},p:X,i:X,o:X,d(t){s(c),s(n),s(i),t&&s(z),t&&s(q),t&&s(m),t&&s(L),t&&s(a),t&&s(P),t&&s(f)}}}function le($){return ee(()=>{let c=document.querySelector("body"),n=document.querySelector("#welcome"),i=document.querySelector("#wrong");document.querySelector("#submit");let z=document.querySelector("#username"),q=document.querySelector("#password"),m=document.querySelector("#form");n.style.display="none",i.style.display="none",m.addEventListener("submit",p=>{p.preventDefault(),z.value==="admin"&&q.value==="pass123"?n.style.display="block":i.style.display="block"}),c.style.display="block"}),[]}class re extends K{constructor(c){super(),Q(this,c,le,se,Y,{})}}export{re as default};
