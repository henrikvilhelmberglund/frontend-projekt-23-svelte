function $(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function C(){return Object.create(null)}function p(t){t.forEach(M)}function k(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(I(n,e))}function ot(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function ct(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],u=Math.max(n.dirty.length,r.length);for(let c=0;c<u;c+=1)s[c]=n.dirty[c]|r[c];return s}return n.dirty|r}return n.dirty}function st(t,n,e,i,r,s){if(r){const u=L(n,e,i,s);t.p(u,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function at(t){return t??""}let w=!1;function R(){w=!0}function W(){w=!1}function G(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const o=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:G(1,r,y=>n[e[y]].claim_order,o))-1;i[l]=e[a]+1;const f=a+1;e[f]=l,r=Math.max(f,r)}const s=[],u=[];let c=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);c>=l;c--)u.push(n[c]);c--}for(;c>=0;c--)u.push(n[c]);s.reverse(),u.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<u.length;l++){for(;o<s.length&&u[l].claim_order>=s[o].claim_order;)o++;const a=o<s.length?s[o]:null;t.insertBefore(u[l],a)}}function K(t,n){if(w){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){w&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode&&t.parentNode.removeChild(t)}function _t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function yt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function gt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){X(t);const s=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const c=t[u];if(n(c)){const l=e(c);return l===void 0?t.splice(u,1):t[u]=l,r||(t.claim_info.last_index=u),c}}for(let u=t.claim_info.last_index-1;u>=0;u--){const c=t[u];if(n(c)){const l=e(c);return l===void 0?t.splice(u,1):t[u]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,c}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const s=[];for(let u=0;u<r.attributes.length;u++){const c=r.attributes[u];e[c.name]||s.push(c.name)}s.forEach(u=>r.removeAttribute(u))},()=>i(n))}function xt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function bt(t){return Z(t," ")}function $t(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function wt(t,n){t.value=n??""}function vt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Et(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function Nt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function At(t,n,e){t.classList[e?"add":"remove"](n)}function St(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,e.push(r)):s===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function Tt(t,n){return new t(n)}let m;function h(t){m=t}function H(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){H().$$.on_mount.push(t)}function Ct(t){H().$$.after_update.push(t)}const _=[],D=[],x=[],E=[],O=Promise.resolve();let N=!1;function P(){N||(N=!0,O.then(q))}function Dt(){return P(),O}function A(t){x.push(t)}function Mt(t){E.push(t)}const v=new Set;let g=0;function q(){const t=m;do{for(;g<_.length;){const n=_[g];g++,h(n),tt(n.$$)}for(h(null),_.length=0,g=0;D.length;)D.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(_.length);for(;E.length;)E.pop()();N=!1,v.clear(),h(t)}function tt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const b=new Set;let d;function kt(){d={r:0,c:[],p:d}}function Lt(){d.r||p(d.c),d=d.p}function nt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const Ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ot(t,n,e,i){const r=t.$$.props[n];r!==void 0&&(t.$$.bound[r]=e,i===void 0&&e(t.$$.ctx[r]))}function Pt(t){t&&t.c()}function qt(t,n){t&&t.l(n)}function et(t,n,e,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(n,e),i||A(()=>{const u=t.$$.on_mount.map(M).filter(k);t.$$.on_destroy?t.$$.on_destroy.push(...u):p(u),t.$$.on_mount=[]}),s.forEach(A)}function it(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(_.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,s,u,c=[-1]){const l=m;h(t);const o=t.$$={fragment:null,ctx:[],props:s,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:C(),dirty:c,skip_bound:!1,root:n.target||l.$$.root};u&&u(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,y,...T)=>{const j=T.length?T[0]:y;return o.ctx&&r(o.ctx[f],o.ctx[f]=j)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](j),a&&rt(t,f)),y}):[],o.update(),a=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){R();const f=V(n.target);o.fragment&&o.fragment.l(f),f.forEach(Q)}else o.fragment&&o.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor,n.customElement),W(),q()}h(l)}class Ft{$destroy(){it(this,1),this.$destroy=$}$on(n,e){if(!k(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!F(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Dt as A,$ as B,ot as C,st as D,ft as E,ct as F,K as G,lt as H,_t as I,At as J,at as K,wt as L,pt as M,p as N,A as O,Et as P,Nt as Q,yt as R,Ft as S,D as T,Ot as U,Mt as V,St as W,Ht as X,ht as a,dt as b,bt as c,Lt as d,mt as e,nt as f,kt as g,Q as h,zt as i,Ct as j,U as k,xt as l,V as m,gt as n,jt as o,vt as p,S as q,Z as r,ut as s,Bt as t,$t as u,Tt as v,Pt as w,qt as x,et as y,it as z};
