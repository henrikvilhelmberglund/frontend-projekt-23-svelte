import{S as s,i as l,s as a,o as c}from"../../../../../chunks/index-dd0daf5a.js";function n(o){return new Promise((e,t)=>{typeof o=="string"?e(o.toUpperCase()):t("Not a string")})}function r(o){return c(()=>{let e=document.querySelector("body");e.style.display="block",n("jonas").then(function(t){console.log(t)}),n(5).catch(function(t){console.log(t)})}),[]}class u extends s{constructor(e){super(),l(this,e,r,null,a,{})}}export{u as default};
