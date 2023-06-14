import{j,f as T,r as _,w as O,k as D,l as A,m as R,p as x,q as E,s as Y,v as H,x as L}from"./framework.4d4a218a.js";function nt(t){return E()?(Y(t),!0):!1}function m(t){return typeof t=="function"?t():T(t)}const ot=typeof window<"u",at=t=>t!=null,st=(t,e,r)=>Math.min(r,Math.max(e,t)),v=()=>{};function $(t,e){function r(...n){return new Promise((o,a)=>{Promise.resolve(t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(o).catch(a)})}return r}const P=t=>t();function C(t,e={}){let r,n,o=v;const a=s=>{clearTimeout(s),o(),o=v};return s=>{const i=m(t),l=m(e.maxWait);return r&&a(r),i<=0||l!==void 0&&l<=0?(n&&(a(n),n=null),Promise.resolve(s())):new Promise((c,d)=>{o=e.rejectOnCancel?d:c,l&&!n&&(n=setTimeout(()=>{r&&a(r),n=null,c(s())},l)),r=setTimeout(()=>{n&&a(n),n=null,c(s())},i)})}}function I(t=P){const e=_(!0);function r(){e.value=!1}function n(){e.value=!0}const o=(...a)=>{e.value&&t(...a)};return{isActive:D(e),pause:r,resume:n,eventFilter:o}}function it(t,e=!1,r="Timeout"){return new Promise((n,o)=>{setTimeout(e?()=>o(r):n,t)})}function lt(t){return t}function ut(...t){if(t.length!==1)return H(...t);const e=t[0];return typeof e=="function"?D(L(()=>({get:e,set:v}))):_(e)}function N(t,e=200,r={}){return $(C(e,r),t)}function ct(t,e=200,r={}){const n=_(t.value),o=N(()=>{n.value=t.value},e,r);return O(t,()=>o()),n}function ft(t,e=!0){A()?R(t):e?t():x(t)}const W=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function V(t,e,r,n){let o=t<12?"AM":"PM";return n&&(o=o.split("").reduce((a,u)=>a+=`${u}.`,"")),r?o.toLowerCase():o}function X(t,e,r={}){var n;const o=t.getFullYear(),a=t.getMonth(),u=t.getDate(),s=t.getHours(),i=t.getMinutes(),l=t.getSeconds(),c=t.getMilliseconds(),d=t.getDay(),f=(n=r.customMeridiem)!=null?n:V,g={YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>a+1,MM:()=>`${a+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(r.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(r.locales,{month:"long"}),D:()=>String(u),DD:()=>`${u}`.padStart(2,"0"),H:()=>String(s),HH:()=>`${s}`.padStart(2,"0"),h:()=>`${s%12||12}`.padStart(1,"0"),hh:()=>`${s%12||12}`.padStart(2,"0"),m:()=>String(i),mm:()=>`${i}`.padStart(2,"0"),s:()=>String(l),ss:()=>`${l}`.padStart(2,"0"),SSS:()=>`${c}`.padStart(3,"0"),d:()=>d,dd:()=>t.toLocaleDateString(r.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(r.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(r.locales,{weekday:"long"}),A:()=>f(s,i),AA:()=>f(s,i,!1,!0),a:()=>f(s,i,!0),aa:()=>f(s,i,!0,!0)};return e.replace(G,(w,F)=>{var S;return F||((S=g[w])==null?void 0:S.call(g))||w})}function Z(t){if(t===null)return new Date(NaN);if(t===void 0)return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){const e=t.match(W);if(e){const r=e[2]-1||0,n=(e[7]||"0").substring(0,3);return new Date(e[1],r,e[3]||1,e[4]||0,e[5]||0,e[6]||0,n)}}return new Date(t)}function mt(t,e="HH:mm:ss",r={}){return j(()=>X(Z(m(t)),m(e),r))}var h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,z=(t,e)=>{var r={};for(var n in t)k.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&h)for(var n of h(t))e.indexOf(n)<0&&q.call(t,n)&&(r[n]=t[n]);return r};function B(t,e,r={}){const n=r,{eventFilter:o=P}=n,a=z(n,["eventFilter"]);return O(t,$(o,e),a)}var J=Object.defineProperty,K=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(t,e,r)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,U=(t,e)=>{for(var r in e||(e={}))M.call(e,r)&&y(t,r,e[r]);if(p)for(var r of p(e))b.call(e,r)&&y(t,r,e[r]);return t},tt=(t,e)=>K(t,Q(e)),et=(t,e)=>{var r={};for(var n in t)M.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&p)for(var n of p(t))e.indexOf(n)<0&&b.call(t,n)&&(r[n]=t[n]);return r};function pt(t,e,r={}){const n=r,{eventFilter:o}=n,a=et(n,["eventFilter"]),{eventFilter:u,pause:s,resume:i,isActive:l}=I(o);return{stop:B(t,e,tt(U({},a),{eventFilter:u})),pause:s,resume:i,isActive:l}}export{at as a,lt as b,st as c,ft as d,nt as e,ut as f,ot as i,v as n,it as p,ct as r,m as t,mt as u,pt as w};
