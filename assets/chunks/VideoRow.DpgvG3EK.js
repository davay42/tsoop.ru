import{b as d}from"./theme.6C_RrGLA.js";import{_ as u,r as c,w as f,f as e,h as t,i as s,t as _,u as m,F as p,y,k as g}from"./framework.IGxAlaI1.js";const x={class:"text-3xl"},h={class:"flex flex-wrap gap-16"},w=["src"],b={__name:"VideoRow",props:{title:{type:String,default:""},list:{type:Array,default:()=>[]}},setup(a){const r=c(null),l=c(!1),o=d(r);return f(o,n=>{l.value=!0}),(n,k)=>(e(),t("div",{class:"flex flex-col gap-12 p-8 items-start my-4 bg-dark-500",ref_key:"target",ref:r},[s("div",x,_(a.title),1),s("div",h,[m(o)||l.value?(e(!0),t(p,{key:0},y(a.list,i=>(e(),t("div",{class:"flex-0 flex items-center justify-start",key:i},[s("iframe",{class:"shadow-2xl rounded-lg",loading:"lazy",width:"320",height:"200",src:`https://www.youtube.com/embed/${i}`,title:"YouTube video player",frameborder:"0",allowfullscreen:""},null,8,w)]))),128)):g("",!0)])],512))}},B=u(b,[["__scopeId","data-v-967c6c31"]]);export{B as _};
