import{o as g,c as y,b as p,I as wt,t as M,n as bt,h as Y,u as tt,f as d,i as x,C,F as rt,g as Et,J as Tt,j as $t,B as Yt,e as H,T as Nt,_ as jt,r as P,E as Bt,G as Ft,p as It,K as Xt,L as nt,M as Ut,R as qt,N as Zt,O as Jt,P as Qt,Q as te,S as ee,U as se,V as ne,W as re,q as ie,X as ae,Y as oe,Z as ce,$ as ue,a0 as le,a1 as he}from"./chunks/framework.a0bb1249.js";import{u as de,d as et,a as fe,b as ge}from"./chunks/pages.data.37e448fa.js";import{u as pe}from"./chunks/index.81d4405f.js";const me=["href"],$={__name:"NavCard",props:{page:{type:Object,default:()=>({})}},setup(e){return(t,s)=>{var n,r,i,a,o,c,u;return e.page?(g(),y("a",{key:0,href:(n=e.page)==null?void 0:n.url,style:bt({background:`url(${(i=(r=e.page)==null?void 0:r.frontmatter)==null?void 0:i.cover})`})},[p("div",null,[wt(t.$slots,"default"),p("h3",null,M((o=(a=e.page)==null?void 0:a.frontmatter)==null?void 0:o.title),1),p("h4",null,M((u=(c=e.page)==null?void 0:c.frontmatter)==null?void 0:u.description),1)])],12,me)):Y("",!0)}}},ve={class:"grid grid-cols-2"},_e=p("div",{class:"i-la-arrow-left"},null,-1),ye=p("div",{class:"i-la-arrow-up"},null,-1),Se=p("div",{class:"i-la-arrow-right"},null,-1),we=p("div",{class:"i-la-arrow-up"},null,-1),be={__name:"NavSiblings",setup(e){const{parents:t,siblings:s}=de(tt(),et);return(n,r)=>{var i,a,o,c,u,l;return g(),y("nav",ve,[(i=d(s))!=null&&i.prev?(g(),x($,{key:0,page:(a=d(s))==null?void 0:a.prev},{default:C(()=>[_e]),_:1},8,["page"])):((o=d(t))==null?void 0:o.length)>1?(g(),x($,{key:1,page:d(t)[d(t).length-2]},{default:C(()=>[ye]),_:1},8,["page"])):Y("",!0),(c=d(s))!=null&&c.next?(g(),x($,{key:2,page:(u=d(s))==null?void 0:u.next},{default:C(()=>[Se]),_:1},8,["page"])):((l=d(t))==null?void 0:l.length)>1?(g(),x($,{key:3,page:d(t)[d(t).length-2]},{default:C(()=>[we]),_:1},8,["page"])):Y("",!0)])}}},Ee={key:0,class:"flex flex-wrap","aria-label":"children"},Te={__name:"NavChildren",setup(e){const t=fe(tt(),et);return(s,n)=>d(t)?(g(),y("nav",Ee,[(g(!0),y(rt,null,Et(d(t),r=>(g(),x($,{page:r,key:r},null,8,["page"]))),128))])):Y("",!0)}},Ie={class:"flex flex-wrap sticky top-0 z-10 bg-dark-200 bg-opacity-50 backdrop-blur-lg","aria-label":"parents"},Ge=["href"],xe={__name:"NavParents",setup(e){const t=ge(tt(),et);return(s,n)=>(g(),y("nav",Ie,[wt(s.$slots,"default"),(g(!0),y(rt,null,Et(d(t).slice(0,-1),r=>{var i;return g(),y("a",{class:"p-2 text-sm sm-text-lg",key:r,href:r==null?void 0:r.url},M((i=r==null?void 0:r.frontmatter)==null?void 0:i.title),9,Ge)}),128))]))}};const Ce={class:"page relative flex flex-col min-h-100vh"},De={key:0,class:"p-4 bg-dark-500 bg-opacity-60 backdrop-blur-md -mt-20 sticky top-14 z-20 max-w-55ch"},Me={class:"text-sm"},ke=p("div",{class:"text-md"},null,-1),Pe={class:"text-3xl font-bold"},Oe={class:"text-md"},Ae=p("div",{class:"h-50 bg-dark-400 flex flex-col items-center justify-center"},[p("a",{class:"text-3xl",href:"/"},"tsoop"),p("div",{class:"text-sm p-2"},"live multimedia generation")],-1),Ke={__name:"layout",setup(e){const{frontmatter:t}=Tt(),s=tt(),n=$t(()=>et.find(a=>a.url.replace(/\/[^/]*\.(html)$/,"/")==s.path.replace(/\/[^/]*\.(html)$/,"/")));function r(){window.scroll(0,0)}const i=pe(()=>{var a,o;return(o=(a=n.value)==null?void 0:a.frontmatter)==null?void 0:o.date},"DD MMMM YYYY, dddd");return(a,o)=>{var E,T,S,m,X;const c=Yt("content"),u=xe,l=Te,b=be;return g(),y("div",Ce,[d(t).home?(g(),x(c,{key:0})):(g(),y(rt,{key:1},[H(u,null,{default:C(()=>[p("a",{class:"font-mono",href:"/",onClick:o[0]||(o[0]=w=>r())},"tsoop")]),_:1}),H(Nt,{name:"fade",mode:"out-in"},{default:C(()=>{var w,U,z,ut,lt;return[(g(),y("div",{class:"opacity-50 hover-opacity-100 transition z-0 overflow-hidden",style:bt({background:`url(${(U=(w=n.value)==null?void 0:w.frontmatter)==null?void 0:U.cover}) no-repeat center/100%`,height:(ut=(z=n.value)==null?void 0:z.frontmatter)!=null&&ut.cover?"40vh":"90px"}),key:(lt=n.value)==null?void 0:lt.url},null,4))]}),_:1}),(E=n.value)!=null&&E.frontmatter?(g(),y("div",De,[p("div",Me,M(d(i)),1),ke,p("div",Pe,M((S=(T=n.value)==null?void 0:T.frontmatter)==null?void 0:S.title),1),p("div",Oe,M((X=(m=n.value)==null?void 0:m.frontmatter)==null?void 0:X.description),1)])):Y("",!0),H(c,{class:"content p-4 bg-dark-300"})],64)),H(l),H(b),Ae])}}};function Le(e,t){return g(),y("p",null,"not found")}const We={},Re=jt(We,[["render",Le]]);/*!
  * @vueuse/gesture v1.0.0
  * (c) 2021 
  * @license MIT
  */function ze(){try{return"constructor"in GestureEvent}catch{return!1}}function Gt(){return typeof window<"u"&&"ontouchstart"in window}function xt(e){return"pointerId"in e?null:e.type==="touchend"?e.changedTouches:e.targetTouches}function it(e){return Array.from(xt(e)).map(t=>t.identifier)}function v(e){const t="buttons"in e?e.buttons:0,{shiftKey:s,altKey:n,metaKey:r,ctrlKey:i}=e;return{buttons:t,shiftKey:s,altKey:n,metaKey:r,ctrlKey:i}}const j=e=>e;function D(e,t=j){const s=xt(e),{clientX:n,clientY:r}=s?s[0]:e;return t([n,r])}function ht(e,t,s=j){const[n,r]=Array.from(e.touches).filter(T=>t.includes(T.identifier));if(!n||!r)throw Error("The event doesn't have two pointers matching the pointerIds");const i=r.clientX-n.clientX,a=r.clientY-n.clientY,o=(r.clientX+n.clientX)/2,c=(r.clientY+n.clientY)/2,u=Math.hypot(i,a),l=-(Math.atan2(i,a)*180)/Math.PI,b=s([u,l]),E=s([o,c]);return{values:b,origin:E}}function He(e,t=j){const{scrollX:s,scrollY:n,scrollLeft:r,scrollTop:i}=e.currentTarget;return t([s||r||0,n||i||0])}const dt=40,ft=800;function Ct(e,t=j){let{deltaX:s,deltaY:n,deltaMode:r}=e;return r===1?(s*=dt,n*=dt):r===2&&(s*=ft,n*=ft),t([s,n])}function gt(e,t=j){return t([e.scale,e.rotation])}function Dt(){}function Mt(...e){return e.length===0?Dt:e.length===1?e[0]:function(){var t;for(let s of e)t=s.apply(this,arguments)||t;return t}}function I(e,t){if(e===void 0){if(t===void 0)throw new Error("Must define fallback value if undefined is expected");e=t}return Array.isArray(e)?e:[e,e]}function pt(e,t){return Object.assign({},t,e||{})}function Z(e,...t){return typeof e=="function"?e(...t):e}function V(e){return{_active:!1,_blocked:!1,_intentional:[!1,!1],_movement:[0,0],_initial:[0,0],_bounds:[[-1/0,1/0],[-1/0,1/0]],_lastEventType:void 0,_dragStarted:!1,_dragPreventScroll:!1,_dragIsTap:!0,_dragDelayed:!1,event:void 0,intentional:!1,values:[0,0],velocities:[0,0],delta:[0,0],movement:[0,0],offset:[0,0],lastOffset:[0,0],direction:[0,0],initial:[0,0],previous:[0,0],first:!1,last:!1,active:!1,timeStamp:0,startTime:0,elapsedTime:0,cancel:Dt,canceled:!1,memo:void 0,args:void 0,...e}}function kt(){const e={hovering:!1,scrolling:!1,wheeling:!1,dragging:!1,moving:!1,pinching:!1,touches:0,buttons:0,down:!1,shiftKey:!1,altKey:!1,metaKey:!1,ctrlKey:!1,locked:!1},t=V({_pointerId:void 0,axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0,tap:!1,swipe:[0,0]}),s=V({_pointerIds:[],da:[0,0],vdva:[0,0],origin:void 0,turns:0}),n=V({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),r=V({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),i=V({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0});return{shared:e,drag:t,pinch:s,wheel:n,move:r,scroll:i}}class Ve{constructor(t){this.classes=t,this.pointerIds=new Set,this.touchIds=new Set,this.supportsTouchEvents=Gt(),this.supportsGestureEvents=ze(),this.bind=(...s)=>{const n={};for(let r of this.classes)new r(this,s).addBindings(n);for(let r in this.nativeRefs)h(n,r,i=>this.nativeRefs[r]({...this.state.shared,event:i,args:s}));return this.config.domTarget?je(this,n):Be(this,n)},this.clean=()=>{const{eventOptions:s,domTarget:n}=this.config,r=d(n);r&&B(r,At(this.domListeners),s),Object.values(this.timeouts).forEach(clearTimeout),$e(this)},this.classes=t,this.state=kt(),this.timeouts={},this.domListeners=[],this.windowListeners={}}}function Pt(e,t){"pointerId"in t?e.pointerIds.add(t.pointerId):e.touchIds=new Set(it(t))}function Ot(e,t){"pointerId"in t?e.pointerIds.delete(t.pointerId):it(t).forEach(s=>e.touchIds.delete(s))}function $e(e){const{config:{window:t,eventOptions:s},windowListeners:n}=e,r=d(t);if(r){for(let i in n){const a=n[i];B(r,a,s)}e.windowListeners={}}}function Ye({config:e,windowListeners:t},s,n=e.eventOptions){const r=d(e.window);r&&(B(r,t[s],n),delete t[s])}function Ne({config:e,windowListeners:t},s,n=[],r=e.eventOptions){const i=d(e.window);i&&(B(i,t[s],r),Kt(i,t[s]=n,r))}function je({config:e,domListeners:t},s){const{eventOptions:n,domTarget:r}=e,i=d(r);if(!i)throw new Error("domTarget must be defined");B(i,At(t),n);for(let[a,o]of Object.entries(s)){const c=a.slice(2).toLowerCase();t.push([c,Mt(...o)])}Kt(i,t,n)}function Be({config:e},t){const s={},n=e.eventOptions.capture?"Capture":"";for(let[r,i]of Object.entries(t)){const a=Array.isArray(i)?i:[i],o=r+n;s[o]=Mt(...a)}return s}function At(e=[]){return e.splice(0,e.length)}function h(e,t,s){e[t]||(e[t]=[]),e[t].push(s)}function Kt(e,t=[],s={}){if(e)for(let[n,r]of t)e.addEventListener(n,r,s)}function B(e,t=[],s={}){if(e)for(let[n,r]of t)e.removeEventListener(n,r,s)}function J(e,t){return e.map((s,n)=>s+t[n])}function at(e,t){return e.map((s,n)=>s-t[n])}function N(e){return Math.hypot(...e)}function Lt(e,t=e){const s=N(t),n=s===0?0:1/s,r=t.map(a=>n*a);return{distance:N(e),direction:r}}function Wt(e,t,s){const n=N(t),r=n===0?0:1/n,i=s===0?0:1/s,a=i*n,o=t.map(l=>i*l),c=t.map(l=>r*l),u=N(e);return{velocities:o,velocity:a,distance:u,direction:c}}function Q(e){return Math.sign?Math.sign(e):+(e>0)-+(e<0)||+e}function Fe(e,t,s){return Math.max(t,Math.min(e,s))}function Xe(e,t){return Math.pow(e,t*5)}function mt(e,t,s){return t===0||Math.abs(t)===1/0?Xe(e,s):e*t*s/(t+s*e)}function vt(e,t,s,n=.15){return n===0?Fe(e,t,s):e<t?-mt(t-e,s-t,n)+t:e>s?+mt(e-s,s-t,n)+s:e}const _=new Map,Ue=e=>e;class Rt{constructor(t,s=[]){this.controller=t,this.args=s,this.debounced=!0,this.setTimeout=(n,r=140,...i)=>{clearTimeout(this.controller.timeouts[this.stateKey]),this.controller.timeouts[this.stateKey]=window.setTimeout(n,r,...i)},this.clearTimeout=()=>{clearTimeout(this.controller.timeouts[this.stateKey])},this.fireGestureHandler=(n=!1)=>{if(this.state._blocked)return this.debounced||(this.state._active=!1,this.clean()),null;if(!n&&!this.state.intentional&&!this.config.triggerAllEvents)return null;if(this.state.intentional){const c=this.state.active,u=this.state._active;this.state.active=u,this.state.first=u&&!c,this.state.last=c&&!u,this.controller.state.shared[this.ingKey]=u}const r=this.controller.pointerIds.size||this.controller.touchIds.size,i=this.controller.state.shared.buttons>0||r>0,a={...this.controller.state.shared,...this.state,...this.mapStateValues(this.state),locked:!!document.pointerLockElement,touches:r,down:i},o=this.handler(a);return this.state.memo=o!==void 0?o:this.state.memo,a},this.controller=t,this.args=s}get config(){return this.controller.config[this.stateKey]}get enabled(){return this.controller.config.enabled&&this.config.enabled}get state(){return this.controller.state[this.stateKey]}get handler(){return this.controller.handlers[this.stateKey]}get transform(){return this.config.transform||this.controller.config.transform||Ue}updateSharedState(t){Object.assign(this.controller.state.shared,t)}updateGestureState(t){Object.assign(this.state,t)}checkIntentionality(t,s){return{_intentional:t,_blocked:!1}}getMovement(t){const{rubberband:s,threshold:n}=this.config,{_bounds:r,_initial:i,_active:a,_intentional:o,lastOffset:c,movement:u}=this.state,l=this.getInternalMovement(t,this.state),b=this.transform(n).map(Math.abs),E=o[0]===!1?_t(l[0],b[0]):o[0],T=o[1]===!1?_t(l[1],b[1]):o[1],S=this.checkIntentionality([E,T],l);if(S._blocked)return{...S,_movement:l,delta:[0,0]};const m=S._intentional,X=l;let w=[m[0]!==!1?l[0]-m[0]:0,m[1]!==!1?l[1]-m[1]:0];const U=J(w,c),z=a?s:[0,0];return w=yt(r,J(w,i),z),{...S,intentional:m[0]!==!1||m[1]!==!1,_initial:i,_movement:X,movement:w,values:t,offset:yt(r,U,z),delta:at(w,u)}}clean(){this.clearTimeout()}}function _t(e,t){return Math.abs(e)>=t?Q(e)*t:!1}function yt(e,[t,s],[n,r]){const[[i,a],[o,c]]=e;return[vt(t,i,a,n),vt(s,o,c,r)]}function f({state:e},t,s){const{timeStamp:n,type:r}=t,i=e.values,a=s?0:n-e.startTime;return{_lastEventType:r,event:t,timeStamp:n,elapsedTime:a,previous:i}}function G({state:e,config:t,stateKey:s,args:n},r,i){const a=e.offset,o=i.timeStamp,{initial:c,bounds:u}=t,l={...kt()[s],_active:!0,args:n,values:r,initial:r,offset:a,lastOffset:a,startTime:o};return{...l,_initial:Z(c,l),_bounds:Z(u,l)}}class st extends Rt{getInternalMovement(t,s){return at(t,s.initial)}checkIntentionality(t,s){if(t[0]===!1&&t[1]===!1)return{_intentional:t,axis:this.state.axis};const[n,r]=s.map(Math.abs),i=this.state.axis||(n>r?"x":n<r?"y":void 0);return!this.config.axis&&!this.config.lockDirection?{_intentional:t,_blocked:!1,axis:i}:i?this.config.axis&&i!==this.config.axis?{_intentional:t,_blocked:!0,axis:i}:(t[i==="x"?1:0]=!1,{_intentional:t,_blocked:!1,axis:i}):{_intentional:[!1,!1],_blocked:!1,axis:i}}getKinematics(t,s){const n=this.getMovement(t);if(!n._blocked){const r=s.timeStamp-this.state.timeStamp;Object.assign(n,Wt(n.movement,n.delta,r))}return n}mapStateValues(t){return{xy:t.values,vxvy:t.velocities}}}const qe=3;function St(e){"persist"in e&&typeof e.persist=="function"&&e.persist()}class Ze extends st{constructor(){super(...arguments),this.ingKey="dragging",this.stateKey="drag",this.setPointerCapture=t=>{if(this.config.useTouch||document.pointerLockElement)return;const{target:s,pointerId:n}=t;s&&"setPointerCapture"in s&&s.setPointerCapture(n),this.updateGestureState({_dragTarget:s,_dragPointerId:n})},this.releasePointerCapture=()=>{if(this.config.useTouch||document.pointerLockElement)return;const{_dragTarget:t,_dragPointerId:s}=this.state;if(s&&t&&"releasePointerCapture"in t&&(!("hasPointerCapture"in t)||t.hasPointerCapture(s)))try{t.releasePointerCapture(s)}catch{}},this.preventScroll=t=>{this.state._dragPreventScroll&&t.cancelable&&t.preventDefault()},this.getEventId=t=>this.config.useTouch?t.changedTouches[0].identifier:t.pointerId,this.isValidEvent=t=>this.state._pointerId===this.getEventId(t),this.shouldPreventWindowScrollY=this.config.preventWindowScrollY&&this.controller.supportsTouchEvents,this.setUpWindowScrollDetection=t=>{St(t),Ne(this.controller,this.stateKey,[["touchmove",this.preventScroll],["touchend",this.clean.bind(this)],["touchcancel",this.clean.bind(this)]],{passive:!1}),this.setTimeout(this.startDrag.bind(this),250,t)},this.setUpDelayedDragTrigger=t=>{this.state._dragDelayed=!0,St(t),this.setTimeout(this.startDrag.bind(this),this.config.delay,t)},this.setStartState=t=>{const s=D(t,this.transform);this.updateSharedState(v(t)),this.updateGestureState({...G(this,s,t),...f(this,t,!0),_pointerId:this.getEventId(t)}),this.updateGestureState(this.getMovement(s))},this.onDragStart=t=>{Pt(this.controller,t),!(!this.enabled||this.state._active)&&(this.setStartState(t),this.setPointerCapture(t),this.shouldPreventWindowScrollY?this.setUpWindowScrollDetection(t):this.config.delay>0?this.setUpDelayedDragTrigger(t):this.startDrag(t,!0))},this.onDragChange=t=>{if(this.state.canceled||!this.state._active||!this.isValidEvent(t)||this.state._lastEventType===t.type&&t.timeStamp===this.state.timeStamp)return;let s;if(document.pointerLockElement){const{movementX:c,movementY:u}=t;s=J(this.transform([c,u]),this.state.values)}else s=D(t,this.transform);const n=this.getKinematics(s,t);if(!this.state._dragStarted){if(this.state._dragDelayed){this.startDrag(t);return}if(this.shouldPreventWindowScrollY)if(!this.state._dragPreventScroll&&n.axis)if(n.axis==="x")this.startDrag(t);else{this.state._active=!1;return}else return;else return}const r=v(t);this.updateSharedState(r);const i=f(this,t),a=N(n._movement);let{_dragIsTap:o}=this.state;o&&a>=qe&&(o=!1),this.updateGestureState({...i,...n,_dragIsTap:o}),this.fireGestureHandler()},this.onDragEnd=t=>{if(Ot(this.controller,t),!this.isValidEvent(t)||(this.clean(),!this.state._active))return;this.state._active=!1;const s=this.state._dragIsTap,[n,r]=this.state.velocities,[i,a]=this.state.movement,[o,c]=this.state._intentional,[u,l]=this.config.swipeVelocity,[b,E]=this.config.swipeDistance,T=this.config.swipeDuration,S={...f(this,t),...this.getMovement(this.state.values)},m=[0,0];S.elapsedTime<T&&(o!==!1&&Math.abs(n)>u&&Math.abs(i)>b&&(m[0]=Q(n)),c!==!1&&Math.abs(r)>l&&Math.abs(a)>E&&(m[1]=Q(r))),this.updateSharedState({buttons:0}),this.updateGestureState({...S,tap:s,swipe:m}),this.fireGestureHandler(this.config.filterTaps&&s===!0)},this.clean=()=>{super.clean(),this.state._dragStarted=!1,this.releasePointerCapture(),Ye(this.controller,this.stateKey)},this.onCancel=()=>{this.state.canceled||(this.updateGestureState({canceled:!0,_active:!1}),this.updateSharedState({buttons:0}),Bt(this.fireGestureHandler))},this.onClick=t=>{this.state._dragIsTap||t.stopPropagation()}}startDrag(t,s=!1){!this.state._active||this.state._dragStarted||(s||this.setStartState(t),this.updateGestureState({_dragStarted:!0,_dragPreventScroll:!0,cancel:this.onCancel}),this.clearTimeout(),this.fireGestureHandler())}addBindings(t){if(this.config.useTouch?(h(t,"onTouchStart",this.onDragStart),h(t,"onTouchMove",this.onDragChange),h(t,"onTouchEnd",this.onDragEnd),h(t,"onTouchCancel",this.onDragEnd)):(h(t,"onPointerDown",this.onDragStart),h(t,"onPointerMove",this.onDragChange),h(t,"onPointerUp",this.onDragEnd),h(t,"onPointerCancel",this.onDragEnd)),this.config.filterTaps){const s=this.controller.config.eventOptions.capture?"onClick":"onClickCapture";h(t,s,this.onClick)}}}function O(e,t){let s,n=[],r,i=!1;function a(...o){return i&&s===this&&t(o,n)||(r=e.apply(this,o),i=!0,s=this,n=o),r}return a}function q(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let s,n,r;if(Array.isArray(e)){if(s=e.length,s!==t.length)return!1;for(n=s;n--!==0;)if(!q(e[n],t[n]))return!1;return!0}let i;if(typeof Map=="function"&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;for(i=e.entries();!(n=i.next()).done;)if(!q(n.value[1],t.get(n.value[0])))return!1;return!0}if(typeof Set=="function"&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(n=i.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(r=Object.keys(e),s=r.length,s!==Object.keys(t).length)return!1;for(n=s;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,r[n]))return!1;if(typeof Element<"u"&&e instanceof Element)return!1;for(n=s;n--!==0;)if(!(r[n]==="_owner"&&e.$$typeof)&&!q(e[r[n]],t[r[n]]))return!1;return!0}return e!==e&&t!==t}function A(e,t){try{return q(e,t)}catch(s){if((s.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw s}}function F(e={},t){const s={};for(const[n,r]of Object.entries(t))switch(typeof r){case"function":s[n]=r.call(s,e[n],n,e);break;case"object":s[n]=F(e[n],r);break;case"boolean":r&&(s[n]=e[n]);break}return s}const Je=180,Qe=.15,ts=.5,es=50,ss=250,zt={threshold(e=0){return I(e)},rubberband(e=0){switch(e){case!0:return I(Qe);case!1:return I(0);default:return I(e)}},enabled(e=!0){return e},triggerAllEvents(e=!1){return e},initial(e=0){return typeof e=="function"?e:I(e)},transform:!0},ot={...zt,axis:!0,lockDirection(e=!1){return e},bounds(e={}){if(typeof e=="function")return i=>ot.bounds(e(i));const{left:t=-1/0,right:s=1/0,top:n=-1/0,bottom:r=1/0}=e;return[[t,s],[n,r]]}},ns=typeof window<"u"&&window.document&&window.document.createElement,rs={enabled(e=!0){return e},domTarget:!0,window(e=ns?window:void 0){return e},eventOptions({passive:e=!0,capture:t=!1}={}){return{passive:e,capture:t}},transform:!0},is={...zt,bounds(e,t,{distanceBounds:s={},angleBounds:n={}}){const r=a=>{const o=pt(Z(s,a),{min:-1/0,max:1/0});return[o.min,o.max]},i=a=>{const o=pt(Z(n,a),{min:-1/0,max:1/0});return[o.min,o.max]};return typeof s!="function"&&typeof n!="function"?[r(),i()]:a=>[r(a),i(a)]}},as={...ot,useTouch(e=!0){return e&&Gt()},preventWindowScrollY(e=!1){return e},threshold(e,t,{filterTaps:s=!1,lockDirection:n=!1,axis:r=void 0}){const i=I(e,s?3:n||r?1:0);return this.filterTaps=s,i},swipeVelocity(e=ts){return I(e)},swipeDistance(e=es){return I(e)},swipeDuration(e=ss){return e},delay(e=0){switch(e){case!0:return Je;case!1:return 0;default:return e}}};function K(e){return F(e,rs)}function ct(e={}){return F(e,ot)}function os(e={}){return F(e,is)}function cs(e={}){return F(e,as)}function us({domTarget:e,eventOptions:t,window:s,enabled:n,...r}){const i=K({domTarget:e,eventOptions:t,window:s,enabled:n});return i.move=ct(r),i}function ls({domTarget:e,eventOptions:t,window:s,enabled:n,...r}){const i=K({domTarget:e,eventOptions:t,window:s,enabled:n});return i.hover={enabled:!0,...r},i}function hs({domTarget:e,eventOptions:t,window:s,enabled:n,...r}){const i=K({domTarget:e,eventOptions:t,window:s,enabled:n});return i.drag=cs(r),i}function ds({domTarget:e,eventOptions:t,window:s,enabled:n,...r}){const i=K({domTarget:e,eventOptions:t,window:s,enabled:n});return i.pinch=os(r),i}function fs({domTarget:e,eventOptions:t,window:s,enabled:n,...r}){const i=K({domTarget:e,eventOptions:t,window:s,enabled:n});return i.scroll=ct(r),i}function gs({domTarget:e,eventOptions:t,window:s,enabled:n,...r}){const i=K({domTarget:e,eventOptions:t,window:s,enabled:n});return i.wheel=ct(r),i}function L(e,t,s={}){const n=ps(e),r=new Ve(n);return r.config=t,r.handlers=e,r.nativeRefs=s,Ft()&&!t.manual&&(It(r.bind),Xt(r.clean)),r}function ps(e){const t=new Set;return e.drag&&t.add(_.get("drag")),e.wheel&&t.add(_.get("wheel")),e.scroll&&t.add(_.get("scroll")),e.move&&t.add(_.get("move")),e.pinch&&t.add(_.get("pinch")),e.hover&&t.add(_.get("hover")),t}function ms(e,t={}){_.set("drag",Ze);const s=P();return s.value||(s.value=O(hs,A)),L({drag:e},s.value(t))}class Ht extends st{constructor(){super(...arguments),this.ingKey="moving",this.stateKey="move",this.debounced=!0,this.onMove=t=>{this.enabled&&(this.setTimeout(this.onMoveEnd),this.state._active?this.onMoveChange(t):this.onMoveStart(t))},this.onMoveStart=t=>{this.updateSharedState(v(t));const s=D(t,this.transform);this.updateGestureState({...G(this,s,t),...f(this,t,!0)}),this.updateGestureState(this.getMovement(s)),this.fireGestureHandler()},this.onMoveChange=t=>{this.updateSharedState(v(t));const s=D(t,this.transform);this.updateGestureState({...f(this,t),...this.getKinematics(s,t)}),this.fireGestureHandler()},this.onMoveEnd=()=>{if(this.clean(),!this.state._active)return;const t=this.state.values;this.updateGestureState(this.getMovement(t)),this.updateGestureState({velocities:[0,0],velocity:0,_active:!1}),this.fireGestureHandler()},this.hoverTransform=()=>this.controller.config.hover.transform||this.controller.config.transform,this.onPointerEnter=t=>{if(this.controller.state.shared.hovering=!0,!!this.controller.config.enabled){if(this.controller.config.hover.enabled){const s=D(t,this.hoverTransform()),n={...this.controller.state.shared,...this.state,...f(this,t,!0),args:this.args,values:s,active:!0,hovering:!0};this.controller.handlers.hover({...n,...this.mapStateValues(n)})}"move"in this.controller.handlers&&this.onMoveStart(t)}},this.onPointerLeave=t=>{if(this.controller.state.shared.hovering=!1,"move"in this.controller.handlers&&this.onMoveEnd(),!this.controller.config.hover.enabled)return;const s=D(t,this.hoverTransform()),n={...this.controller.state.shared,...this.state,...f(this,t),args:this.args,values:s,active:!1};this.controller.handlers.hover({...n,...this.mapStateValues(n)})}}addBindings(t){"move"in this.controller.handlers&&h(t,"onPointerMove",this.onMove),"hover"in this.controller.handlers&&(h(t,"onPointerEnter",this.onPointerEnter),h(t,"onPointerLeave",this.onPointerLeave))}}class vs extends Rt{getInternalMovement(t,s){const n=s.values[1];let[r,i=n]=t,a=i-n,o=s.turns;return Math.abs(a)>270&&(o+=Q(a)),at([r,i-360*o],s.initial)}getKinematics(t,s){const n=this.getMovement(t),r=(t[1]-n._movement[1]-this.state.initial[1])/360,i=s.timeStamp-this.state.timeStamp,{distance:a,velocity:o,...c}=Wt(n.movement,n.delta,i);return{turns:r,...n,...c}}mapStateValues(t){return{da:t.values,vdva:t.velocities}}}const _s=7,ys=260;class Ss extends vs{constructor(){super(...arguments),this.ingKey="pinching",this.stateKey="pinch",this.onPinchStart=t=>{Pt(this.controller,t);const s=this.controller.touchIds;if(!this.enabled||this.state._active&&this.state._pointerIds.every(a=>s.has(a))||s.size<2)return;const n=Array.from(s).slice(0,2),{values:r,origin:i}=ht(t,n,this.transform);this.updateSharedState(v(t)),this.updateGestureState({...G(this,r,t),...f(this,t,!0),_pointerIds:n,cancel:this.onCancel,origin:i}),this.updateGestureState(this.getMovement(r)),this.fireGestureHandler()},this.onPinchChange=t=>{const{canceled:s,_active:n}=this.state;if(s||!n||t.timeStamp===this.state.timeStamp)return;const r=v(t);this.updateSharedState(r);try{const{values:i,origin:a}=ht(t,this.state._pointerIds,this.transform),o=this.getKinematics(i,t);this.updateGestureState({...f(this,t),...o,origin:a}),this.fireGestureHandler()}catch{this.onPinchEnd(t)}},this.onPinchEnd=t=>{Ot(this.controller,t);const s=it(t);this.state._pointerIds.every(n=>!s.includes(n))||(this.clean(),this.state._active&&(this.updateGestureState({...f(this,t),...this.getMovement(this.state.values),_active:!1}),this.fireGestureHandler()))},this.onCancel=()=>{this.state.canceled||(this.updateGestureState({_active:!1,canceled:!0}),this.fireGestureHandler())},this.onGestureStart=t=>{if(!this.enabled)return;t.preventDefault();const s=gt(t,this.transform);this.updateSharedState(v(t)),this.updateGestureState({...G(this,s,t),...f(this,t,!0),origin:[t.clientX,t.clientY],cancel:this.onCancel}),this.updateGestureState(this.getMovement(s)),this.fireGestureHandler()},this.onGestureChange=t=>{const{canceled:s,_active:n}=this.state;if(s||!n)return;t.preventDefault();const r=v(t);this.updateSharedState(r);const i=gt(t,this.transform);i[0]=(i[0]-this.state.event.scale)*ys+this.state.values[0];const a=this.getKinematics(i,t);this.updateGestureState({...f(this,t),...a,origin:[t.clientX,t.clientY]}),this.fireGestureHandler()},this.onGestureEnd=t=>{this.clean(),this.state._active&&(this.updateGestureState({...f(this,t),...this.getMovement(this.state.values),_active:!1,origin:[t.clientX,t.clientY]}),this.fireGestureHandler())},this.wheelShouldRun=t=>this.enabled&&t.ctrlKey,this.getWheelValuesFromEvent=t=>{const[,s]=Ct(t,this.transform),{values:[n,r]}=this.state;return{values:[n-s*_s,r!==void 0?r:0],origin:[t.clientX,t.clientY],delta:[0,s]}},this.onWheel=t=>{this.wheelShouldRun(t)&&(this.setTimeout(this.onWheelEnd),this.state._active?this.onWheelChange(t):this.onWheelStart(t))},this.onWheelStart=t=>{const{values:s,delta:n,origin:r}=this.getWheelValuesFromEvent(t);t.cancelable&&t.preventDefault(),this.updateSharedState(v(t)),this.updateGestureState({...G(this,s,t),...f(this,t,!0),initial:this.state.values,offset:s,delta:n,origin:r}),this.updateGestureState(this.getMovement(s)),this.fireGestureHandler()},this.onWheelChange=t=>{t.cancelable&&t.preventDefault(),this.updateSharedState(v(t));const{values:s,origin:n,delta:r}=this.getWheelValuesFromEvent(t);this.updateGestureState({...f(this,t),...this.getKinematics(s,t),origin:n,delta:r}),this.fireGestureHandler()},this.onWheelEnd=()=>{this.clean(),this.state._active&&(this.state._active=!1,this.updateGestureState(this.getMovement(this.state.values)),this.fireGestureHandler())}}addBindings(t){this.controller.config.domTarget&&!this.controller.supportsTouchEvents&&this.controller.supportsGestureEvents?(h(t,"onGestureStart",this.onGestureStart),h(t,"onGestureChange",this.onGestureChange),h(t,"onGestureEnd",this.onGestureEnd)):(h(t,"onTouchStart",this.onPinchStart),h(t,"onTouchMove",this.onPinchChange),h(t,"onTouchEnd",this.onPinchEnd),h(t,"onTouchCancel",this.onPinchEnd),h(t,"onWheel",this.onWheel))}}class ws extends st{constructor(){super(...arguments),this.ingKey="scrolling",this.stateKey="scroll",this.debounced=!0,this.handleEvent=t=>{if(!this.enabled)return;this.clearTimeout(),this.setTimeout(this.onEnd);const s=He(t,this.transform);if(this.updateSharedState(v(t)),this.state._active)this.updateGestureState({...f(this,t),...this.getKinematics(s,t)});else{this.updateGestureState({...G(this,s,t),...f(this,t,!0),initial:this.state.values});const n=this.getMovement(s),r=Lt(n.delta);this.updateGestureState(n),this.updateGestureState(r)}this.fireGestureHandler()},this.onEnd=()=>{this.clean(),this.state._active&&(this.updateGestureState({...this.getMovement(this.state.values),_active:!1,velocities:[0,0],velocity:0}),this.fireGestureHandler())}}addBindings(t){h(t,"onScroll",this.handleEvent)}}class bs extends st{constructor(){super(...arguments),this.ingKey="wheeling",this.stateKey="wheel",this.debounced=!0,this.handleEvent=t=>{if(t.ctrlKey&&"pinch"in this.controller.handlers||!this.enabled)return;this.setTimeout(this.onEnd),this.updateSharedState(v(t));const s=J(Ct(t,this.transform),this.state.values);if(this.state._active)this.updateGestureState({...f(this,t),...this.getKinematics(s,t)});else{this.updateGestureState({...G(this,s,t),...f(this,t,!0),initial:this.state.values});const n=this.getMovement(s),r=Lt(n.delta);this.updateGestureState(n),this.updateGestureState(r)}this.fireGestureHandler()},this.onEnd=()=>{if(this.clean(),!this.state._active)return;const t=this.getMovement(this.state.values);this.updateGestureState(t),this.updateGestureState({_active:!1,velocities:[0,0],velocity:0}),this.fireGestureHandler()}}addBindings(t){h(t,"onWheel",this.handleEvent)}}function Es(e,t={}){_.set("hover",Ht);const s=P();return s.value||(s.value=O(ls,A)),L({hover:e},s.value(t))}function Ts(e,t={}){_.set("move",Ht);const s=P();return s.value||(s.value=O(us,A)),L({move:e},s.value(t))}function Is(e,t={}){_.set("pinch",Ss);const s=P();return s.value||(s.value=O(ds,A)),L({pinch:e},s.value(t))}function Gs(e,t={}){_.set("scroll",ws);const s=P();return s.value||(s.value=O(fs,A)),L({scroll:e},s.value(t))}function xs(e,t={}){_.set("wheel",bs);const s=P();return s.value||(s.value=O(gs,A)),L({wheel:e},s.value(t))}const W=(e,t)=>({created:e,unmounted:t,bind:e,unbind:t}),R=e=>`Your v-${e} directive must have a handler specified as a value`,Cs=()=>W((s,n,r)=>{if(!n.value)throw new Error(R("drag"));s.gestures||(s.gestures={});const i=ms(n.value,{domTarget:s,manual:!0});i.bind(),s.gestures.drag=i},(s,n,r)=>{!s.gestures||!s.gestures.drag||s.gestures.drag.clean()}),Ds=()=>W((s,n,r)=>{if(!n.value)throw new Error(R("move"));s.gestures||(s.gestures={});const i=Ts(n.value,{domTarget:s,manual:!0});i.bind(),s.gestures.move=i},(s,n,r)=>{!s.gestures||!s.gestures.move||s.gestures.move.clean()}),Ms=()=>W((s,n,r)=>{if(!n.value)throw new Error(R("hover"));s.gestures||(s.gestures={});const i=Es(n.value,{domTarget:s,manual:!0});i.bind(),s.gestures.hover=i},(s,n,r)=>{!s.gestures||!s.gestures.hover||s.gestures.hover.clean()}),ks=()=>W((s,n,r)=>{if(!n.value)throw new Error(R("pinch"));s.gestures||(s.gestures={});const i=Is(n.value,{domTarget:s,manual:!0});i.bind(),s.gestures.pinch=i},(s,n,r)=>{!s.gestures||!s.gestures.pinch||s.gestures.pinch.clean()}),Ps=()=>W((s,n,r)=>{if(!n.value)throw new Error(R("wheel"));s.gestures||(s.gestures={});const i=xs(n.value,{domTarget:s,manual:!0});i.bind(),s.gestures.wheel=i},(s,n,r)=>{!s.gestures||!s.gestures.wheel||s.gestures.wheel.clean()}),Os=()=>W((s,n,r)=>{if(!n.value)throw new Error(R("scroll"));s.gestures||(s.gestures={});const i=Gs(n.value,{domTarget:s,manual:!0});i.bind(),s.gestures.drag=i},(s,n,r)=>{!s.gestures||!s.gestures.drag||s.gestures.drag.clean()}),As={install(e,t){Object.entries({drag:Cs,hover:Ms,move:Ds,pinch:ks,scroll:Os,wheel:Ps}).forEach(([n,r])=>e.directive(n,r()))}},Ks={Layout:Ke,NotFound:Re,enhanceApp({app:e}){e.use(As)}};function Vt(e){if(e.extends){const t=Vt(e.extends);return{...t,...e,async enhanceApp(s){t.enhanceApp&&await t.enhanceApp(s),e.enhanceApp&&await e.enhanceApp(s)}}}return e}const k=Vt(Ks),Ls=ae({name:"VitePressApp",setup(){const{site:e}=Tt();return It(()=>{oe(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),ce(),ue(),le(),k.setup&&k.setup(),()=>he(k.Layout)}});async function Ws(){const e=zs(),t=Rs();t.provide(qt,e);const s=Zt(e.route);return t.provide(Jt,s),t.component("Content",Qt),t.component("ClientOnly",te),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),k.enhanceApp&&await k.enhanceApp({app:t,router:e,siteData:ee}),{app:t,router:e,data:s}}function Rs(){return se(Ls)}function zs(){let e=nt,t;return ne(s=>{let n=re(s);return e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),nt&&(e=!1),ie(()=>import(n),[])},k.NotFound)}nt&&Ws().then(({app:e,router:t,data:s})=>{t.go().then(()=>{Ut(t.route,s.site),e.mount("#app")})});export{Ws as createApp};
