import{c as p}from"./index.a9351b57.js";import{u as m}from"./index.0cee6d94.js";import{e as g,o as f,c as v,b as a,t as c,u as l,n as b}from"./framework.22798ebe.js";const x=["href"],_={class:"bg-dark-100 p-2 bg-opacity-50 backdrop-blur-sm hover-backdrop-blur-lg transition"},k=a("div",{class:"flex-1"},null,-1),$={class:"text-xs"},y={class:"text-2xl font-bold"},M={class:"text-md"},Y={__name:"EventCard",props:{event:{type:Object,default:()=>({})},url:{type:String,default:""}},setup(s){const n=s,i=m(()=>{var t;return(t=n.event)==null?void 0:t.date},"DD MMMM YYYY"),h=t=>t.split("").reduce((e,o)=>Math.imul(31,e)+o.charCodeAt(0)|0,0),u=g(()=>{var d;const e=h(n.url)%360,o=20+Math.random()*20,r=22+Math.random()*8;return`
  url(${(d=n.event)==null?void 0:d.cover}) no-repeat top/100%,
  linear-gradient(180deg, hsl(${e},${o}%,${r}%) 0%, hsl(${e}deg,${o-10}%,${r+5}%) 40%, hsl(${e+10}deg,${o}%,${r-15}%) 100%)`});return(t,e)=>(f(),v("a",{class:"overflow-hidden pt-42 flex flex-col bg-dark-700 shadow-lg hover-bg-dark-200 hover-shadow-xl transition flex-1 opacity-50 hover-opacity-100 max-w-120 min-w-50",href:l(p)(s.url),style:b([{background:u.value},{"padding-bottom":"0","padding-left":"0","padding-right":"0",flex:"1 1 auto"}])},[a("div",_,[k,a("div",$,c(l(i)),1),a("div",y,c(s.event.title),1),a("div",M,c(s.event.description),1)])],12,x))}};export{Y as _};
