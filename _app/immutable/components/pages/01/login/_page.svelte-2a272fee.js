import{S as Y,i as Z,s as $,k as d,q as A,a as P,l as v,m as E,r as B,h as u,c as L,n as s,J as T,K as W,b as I,G as l,L as V,M as G,B as X,N as x}from"../../../../chunks/index-66f1dbcf.js";function ee(p){let a,i,b,_,t,n,U,g,o,k,w,F,q,m,D,h,M,N,c,y,O,S,C,H;return{c(){a=d("div"),i=d("h1"),b=A("Välkommen till 01 - Forms!"),_=P(),t=d("form"),n=d("label"),U=A("Username"),g=P(),o=d("input"),k=P(),w=d("label"),F=A("Password"),q=P(),m=d("input"),D=P(),h=d("button"),M=A("Submit"),N=P(),c=d("div"),y=d("p"),O=A("Användaruppgifterna är fel."),this.h()},l(e){a=v(e,"DIV",{id:!0,class:!0});var r=E(a);i=v(r,"H1",{class:!0});var J=E(i);b=B(J,"Välkommen till 01 - Forms!"),J.forEach(u),r.forEach(u),_=L(e),t=v(e,"FORM",{id:!0,class:!0});var f=E(t);n=v(f,"LABEL",{for:!0,class:!0});var K=E(n);U=B(K,"Username"),K.forEach(u),g=L(f),o=v(f,"INPUT",{id:!0,type:!0,class:!0}),k=L(f),w=v(f,"LABEL",{for:!0,class:!0});var R=E(w);F=B(R,"Password"),R.forEach(u),q=L(f),m=v(f,"INPUT",{id:!0,type:!0,class:!0}),D=L(f),h=v(f,"BUTTON",{id:!0,type:!0,class:!0});var j=E(h);M=B(j,"Submit"),j.forEach(u),f.forEach(u),N=L(e),c=v(e,"DIV",{id:!0,class:!0});var z=E(c);y=v(z,"P",{class:!0});var Q=E(y);O=B(Q,"Användaruppgifterna är fel."),Q.forEach(u),z.forEach(u),this.h()},h(){s(i,"class","svelte-em10p9"),s(a,"id","welcome"),s(a,"class","svelte-em10p9"),T(a,"visible",p[2]),T(a,"hide",!p[2]),s(n,"for","username"),s(n,"class","svelte-em10p9"),s(o,"id","username"),s(o,"type","text"),s(o,"class","svelte-em10p9"),s(w,"for","password"),s(w,"class","svelte-em10p9"),s(m,"id","password"),s(m,"type","password"),s(m,"class","svelte-em10p9"),s(h,"id","submit"),s(h,"type","submit"),s(h,"class","columns-1 rounded-lg bg-blue-400 svelte-em10p9"),s(t,"id","form"),s(t,"class","svelte-em10p9"),s(y,"class","svelte-em10p9"),s(c,"id","wrong"),s(c,"class",S=W(p[3]?"visible":"hide")+" svelte-em10p9")},m(e,r){I(e,a,r),l(a,i),l(i,b),I(e,_,r),I(e,t,r),l(t,n),l(n,U),l(t,g),l(t,o),V(o,p[0]),l(t,k),l(t,w),l(w,F),l(t,q),l(t,m),V(m,p[1]),l(t,D),l(t,h),l(h,M),I(e,N,r),I(e,c,r),l(c,y),l(y,O),C||(H=[G(o,"input",p[4]),G(m,"input",p[5]),G(t,"submit",p[6])],C=!0)},p(e,[r]){r&4&&T(a,"visible",e[2]),r&4&&T(a,"hide",!e[2]),r&1&&o.value!==e[0]&&V(o,e[0]),r&2&&m.value!==e[1]&&V(m,e[1]),r&8&&S!==(S=W(e[3]?"visible":"hide")+" svelte-em10p9")&&s(c,"class",S)},i:X,o:X,d(e){e&&u(a),e&&u(_),e&&u(t),e&&u(N),e&&u(c),C=!1,x(H)}}}function se(p,a,i){let b="",_="",t,n;function U(){b=this.value,i(0,b)}function g(){_=this.value,i(1,_)}return[b,_,t,n,U,g,()=>{b==="admin"&&_==="pass123"?(i(2,t=!0),i(3,n=!1)):(i(2,t=!1),i(3,n=!0))}]}class le extends Y{constructor(a){super(),Z(this,a,se,ee,$,{})}}export{le as default};
