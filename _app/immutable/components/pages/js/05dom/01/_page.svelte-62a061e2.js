import{S as d,i as m,s as u,o as p}from"../../../../../chunks/index-acd62099.js";function g(r){return p(()=>{let t=document.querySelector("body");t.style.display="block";let e=document.createElement("aside");e.id="chatbox";let n=document.createElement("button");n.innerText="Show Chat",n.addEventListener("click",o=>{e.classList.toggle("hidden")}),t.append(n);let l=document.createElement("h2");l.innerText="Chatbox",e.prepend(l),e.classList.add("hidden");let a=document.createElement("ul");const i=[{from:"bot",text:"Välkommen till vår chat! Kan jag hjälpa till med något?"},{from:"user",text:"Något går fel när jag försöker bekräfta beställningen"},{from:"bot",text:'Det verkar som du inte klickat i "godkänn"-rutan'}];let s="";i.forEach(({from:o,text:c})=>{s+=`<li class="${o}">${c}</li>`}),a.innerHTML+=s,e.append(a),t.append(e)}),[]}class b extends d{constructor(t){super(),m(this,t,g,null,u,{})}}export{b as default};