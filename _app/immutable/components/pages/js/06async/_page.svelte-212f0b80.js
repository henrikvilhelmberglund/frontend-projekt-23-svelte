import{S as x,i as k,s as q,k as m,q as p,a as z,l as _,m as d,r as y,h as f,c as H,n as g,b as P,G as c,u as D,B as v,o as E,T as F}from"../../../../chunks/index-dd0daf5a.js";function I(i){let s,a,n,o,r;return{c(){s=m("div"),a=m("h1"),n=p("Hello!"),o=z(),r=p(i[1]),this.h()},l(t){s=_(t,"DIV",{class:!0});var e=d(s);a=_(e,"H1",{class:!0});var l=d(a);n=y(l,"Hello!"),l.forEach(f),o=H(e),r=y(e,i[1]),e.forEach(f),this.h()},h(){g(a,"class","font-sans svelte-11mk4qi"),g(s,"class","flex flex-col items-center justify-center")},m(t,e){P(t,s,e),c(s,a),c(a,n),i[2](a),c(s,o),c(s,r)},p(t,[e]){e&2&&D(r,t[1])},i:v,o:v,d(t){t&&f(s),i[2](null)}}}const S=60,V=3e3,u=50,j=200;function B(i,s,a){let n;const o=V/(1e3/S),r=(j-u)/o;let t=0,e=u;function l(){e=u,a(1,t=0)}E(()=>{setInterval(function(){a(1,t++,t),a(0,n.style.fontSize=e+"px",n),t>=o?e-=r:e+=r,t>=o*2&&l()},1e3/S)});function b(h){F[h?"unshift":"push"](()=>{n=h,a(0,n)})}return i.$$.update=()=>{i.$$.dirty&3&&n&&n.style.setProperty("--frames",t)},[n,t,b]}class G extends x{constructor(s){super(),k(this,s,B,I,q,{})}}export{G as default};