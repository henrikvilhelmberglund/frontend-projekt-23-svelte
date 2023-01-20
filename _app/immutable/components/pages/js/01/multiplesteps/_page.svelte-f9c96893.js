import{S as qe,i as xe,s as Ne,a as c,k as t,q as m,c as u,l,m as s,r as y,h as n,n as r,b as Be,G as e,B as de,o as Oe}from"../../../../../chunks/index-3d15730c.js";function Pe(pe){let k,i,f,d,g,b,I,_,F,U,o,A,C,M,T,j,G,L,w,z,H,B,J,Q,q,V,K,W,X,a,$,Y,Z,x,ee,te,N,le,oe,re,O,ae,ne,P,ie,D,ce,ue,S,se;return{c(){k=c(),i=t("form"),f=t("select"),d=t("option"),g=m("Select your option"),b=t("option"),I=m("Kitchen"),_=t("option"),F=m("Bathroom"),U=c(),o=t("fieldset"),A=t("p"),C=m("This is kitchen"),M=c(),T=t("label"),j=m("Skåpluckor"),G=c(),L=t("input"),w=c(),z=t("br"),H=c(),B=t("label"),J=m("Kylskåp"),Q=c(),q=t("input"),V=c(),K=t("button"),W=m("Spara"),X=c(),a=t("fieldset"),$=t("p"),Y=m("This is bathroom"),Z=c(),x=t("label"),ee=m("Skåpluckor"),te=c(),N=t("input"),le=c(),oe=t("br"),re=c(),O=t("label"),ae=m("Kylskåp"),ne=c(),P=t("input"),ie=c(),D=t("button"),ce=m("Spara"),ue=c(),S=t("button"),se=m("Submit"),this.h()},l(E){k=u(E),i=l(E,"FORM",{id:!0});var v=s(i);f=l(v,"SELECT",{name:!0,id:!0});var R=s(f);d=l(R,"OPTION",{});var he=s(d);g=y(he,"Select your option"),he.forEach(n),b=l(R,"OPTION",{});var be=s(b);I=y(be,"Kitchen"),be.forEach(n),_=l(R,"OPTION",{});var fe=s(_);F=y(fe,"Bathroom"),fe.forEach(n),R.forEach(n),U=u(v),o=l(v,"FIELDSET",{id:!0});var p=s(o);A=l(p,"P",{});var me=s(A);C=y(me,"This is kitchen"),me.forEach(n),M=u(p),T=l(p,"LABEL",{for:!0});var ye=s(T);j=y(ye,"Skåpluckor"),ye.forEach(n),G=u(p),L=l(p,"INPUT",{type:!0,id:!0}),w=u(p),z=l(p,"BR",{}),H=u(p),B=l(p,"LABEL",{for:!0});var _e=s(B);J=y(_e,"Kylskåp"),_e.forEach(n),Q=u(p),q=l(p,"INPUT",{type:!0,id:!0}),V=u(p),K=l(p,"BUTTON",{});var ve=s(K);W=y(ve,"Spara"),ve.forEach(n),p.forEach(n),X=u(v),a=l(v,"FIELDSET",{id:!0});var h=s(a);$=l(h,"P",{});var ke=s($);Y=y(ke,"This is bathroom"),ke.forEach(n),Z=u(h),x=l(h,"LABEL",{for:!0});var Ee=s(x);ee=y(Ee,"Skåpluckor"),Ee.forEach(n),te=u(h),N=l(h,"INPUT",{type:!0,id:!0}),le=u(h),oe=l(h,"BR",{}),re=u(h),O=l(h,"LABEL",{for:!0});var Se=s(O);ae=y(Se,"Kylskåp"),Se.forEach(n),ne=u(h),P=l(h,"INPUT",{type:!0,id:!0}),ie=u(h),D=l(h,"BUTTON",{});var Te=s(D);ce=y(Te,"Spara"),Te.forEach(n),h.forEach(n),ue=u(v),S=l(v,"BUTTON",{type:!0,id:!0});var Le=s(S);se=y(Le,"Submit"),Le.forEach(n),v.forEach(n),this.h()},h(){d.__value="",d.value=d.__value,d.disabled=!0,d.selected=!0,d.hidden=!0,b.__value="kitchen",b.value=b.__value,_.__value="bathroom",_.value=_.__value,r(f,"name",""),r(f,"id","room"),r(T,"for","cabinet"),r(L,"type","checkbox"),L.value="cabinet",r(L,"id","kitchen-cabinet"),r(B,"for","refrigerator"),r(q,"type","checkbox"),q.value="refrigerator",r(q,"id","kitchen-refrigerator"),r(o,"id","kitchen"),r(x,"for","cabinet"),r(N,"type","checkbox"),N.value="cabinet",r(N,"id","bathroom-cabinet"),r(O,"for","refrigerator"),r(P,"type","checkbox"),P.value="refrigerator",r(P,"id","bathroom-refrigerator"),r(a,"id","bathroom"),r(S,"type","submit"),r(S,"id","submit"),r(i,"id","form")},m(E,v){Be(E,k,v),Be(E,i,v),e(i,f),e(f,d),e(d,g),e(f,b),e(b,I),e(f,_),e(_,F),e(i,U),e(i,o),e(o,A),e(A,C),e(o,M),e(o,T),e(T,j),e(o,G),e(o,L),e(o,w),e(o,z),e(o,H),e(o,B),e(B,J),e(o,Q),e(o,q),e(o,V),e(o,K),e(K,W),e(i,X),e(i,a),e(a,$),e($,Y),e(a,Z),e(a,x),e(x,ee),e(a,te),e(a,N),e(a,le),e(a,oe),e(a,re),e(a,O),e(O,ae),e(a,ne),e(a,P),e(a,ie),e(a,D),e(D,ce),e(i,ue),e(i,S),e(S,se)},p:de,i:de,o:de,d(E){E&&n(k),E&&n(i)}}}function ge(pe){return Oe(()=>{let k=document.querySelector("body");k.style.display="block";let i=document.querySelector("#room"),f=document.querySelector("#kitchen"),d=document.querySelector("#bathroom");document.querySelector("#submit");let g=document.querySelector("#form"),b=[];f.style.display="none",d.style.display="none";function I(){b=[]}i.addEventListener("change",_=>{f.style.display="none",d.style.display="none",document.querySelector(`#${i.value}`).style.display="block"}),g.addEventListener("submit",_=>{_.preventDefault(),document.querySelectorAll('input[type="checkbox"]:checked').forEach(U=>{let o=document.querySelector(`label[for=${U.value}`);b.push(o.innerText)}),b=b.join(`
`),I()})}),[]}class Ue extends qe{constructor(k){super(),xe(this,k,ge,Pe,Ne,{})}}export{Ue as default};
