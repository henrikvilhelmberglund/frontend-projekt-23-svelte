import{S as SvelteComponent,i as init,s as safe_not_equal,k as element,a as space,q as text,l as claim_element,c as claim_space,m as children,r as claim_text,h as detach,n as attr,b as insert_hydration,L as set_input_value,G as append_hydration,M as listen,u as set_data,B as noop}from"../../../../chunks/index-dd0daf5a.js";function create_fragment(l){let n,r,i,u,s=l[0].split(" ").filter(func)+"",f,c,p,d,_=antifilter(l[0],"a % 2 === 0")+"",o,m,v;return{c(){n=element("input"),r=space(),i=element("p"),u=text("Even: "),f=text(s),c=space(),p=element("p"),d=text("Odd: "),o=text(_),this.h()},l(t){n=claim_element(t,"INPUT",{type:!0}),r=claim_space(t),i=claim_element(t,"P",{});var e=children(i);u=claim_text(e,"Even: "),f=claim_text(e,s),e.forEach(detach),c=claim_space(t),p=claim_element(t,"P",{});var h=children(p);d=claim_text(h,"Odd: "),o=claim_text(h,_),h.forEach(detach),this.h()},h(){attr(n,"type","text")},m(t,e){insert_hydration(t,n,e),set_input_value(n,l[0]),insert_hydration(t,r,e),insert_hydration(t,i,e),append_hydration(i,u),append_hydration(i,f),insert_hydration(t,c,e),insert_hydration(t,p,e),append_hydration(p,d),append_hydration(p,o),m||(v=listen(n,"input",l[1]),m=!0)},p(t,[e]){e&1&&n.value!==t[0]&&set_input_value(n,t[0]),e&1&&s!==(s=t[0].split(" ").filter(func)+"")&&set_data(f,s),e&1&&_!==(_=antifilter(t[0],"a % 2 === 0")+"")&&set_data(o,_)},i:noop,o:noop,d(t){t&&detach(n),t&&detach(r),t&&detach(i),t&&detach(c),t&&detach(p),m=!1,v()}}}function antifilter(input,func){input=input.split(" ");let found=input.filter(a=>!eval(func));return found}const func=l=>l%2===0;function instance(l,n,r){let i="1 2 3 4 5";i.split(" ").filter(s=>s%2===0);function u(){i=this.value,r(0,i)}return[i,u]}class Page extends SvelteComponent{constructor(n){super(),init(this,n,instance,create_fragment,safe_not_equal,{})}}export{Page as default};