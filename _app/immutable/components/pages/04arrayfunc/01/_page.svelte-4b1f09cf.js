import{S as k,i as P,s as q,k as g,l as v,m as b,h,n as y,b as x,B as _,I as D,q as f,a as E,r as u,c as I,G as d}from"../../../../chunks/index-acd62099.js";function m(o,e,a){const t=o.slice();return t[1]=e[a].field,t[2]=e[a].error,t}function p(o){let e,a=o[1]+"",t,l,n=o[2]+"",r,i;return{c(){e=g("p"),t=f(a),l=f(": "),r=f(n),i=E()},l(c){e=v(c,"P",{});var s=b(e);t=u(s,a),l=u(s,": "),r=u(s,n),i=I(s),s.forEach(h)},m(c,s){x(c,e,s),d(e,t),d(e,l),d(e,r),d(e,i)},p:_,d(c){c&&h(e)}}}function R(o){let e,a=o[0],t=[];for(let l=0;l<a.length;l+=1)t[l]=p(m(o,a,l));return{c(){e=g("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=v(l,"DIV",{id:!0});var n=b(e);for(let r=0;r<t.length;r+=1)t[r].l(n);n.forEach(h),this.h()},h(){y(e,"id","errors")},m(l,n){x(l,e,n);for(let r=0;r<t.length;r+=1)t[r].m(e,null)},p(l,[n]){if(n&1){a=l[0];let r;for(r=0;r<a.length;r+=1){const i=m(l,a,r);t[r]?t[r].p(i,n):(t[r]=p(i),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=a.length}},i:_,o:_,d(l){l&&h(e),D(t,l)}}}function S(o){return[[{field:"name",error:"Name is too short"},{field:"description",error:"Description is too long"},{field:"price",error:"Price is not a number"},{field:"terms",error:"Terms and conditions are not accepted"}]]}class B extends k{constructor(e){super(),P(this,e,S,R,q,{})}}export{B as default};