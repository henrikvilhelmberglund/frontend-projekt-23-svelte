import{S as c,i,s as u,o as d}from"../../../../../chunks/index-dd0daf5a.js";function a(t,e){return new Promise((o,n)=>{let s=e.find(l=>l.name===t);s?o(s):n("Matching object not found")})}function r(t){const e=[{id:0,name:"STRAW"},{id:1,name:"GRASS"},{id:2,name:"NEEDLE"},{id:3,name:"STICK"}];return d(()=>{let o=document.querySelector("body");o.style.display="block",a("NEEDLE",e).then(function(n){console.log(n)}),a("FOOTBALL",e).catch(function(n){console.log(n)})}),[]}class m extends c{constructor(e){super(),i(this,e,r,null,u,{})}}export{m as default};