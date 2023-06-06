import{o as g,c as z,b as o,x as ye,j as ue,r as Q,_ as ge,p as ke,y as pe,i as he,f as t,e as _e,z as X,A as R,t as fe,F as re,g as ie,h as T,n as we,s as be,v as $e,B as ze,C as Ce}from"./chunks/framework.a0bb1249.js";import{u as ce,o as Se,a as Fe}from"./chunks/index.13ef5b48.js";import{c as ae,t as U}from"./chunks/index.81d4405f.js";const Me={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},De=o("path",{fill:"currentColor",d:"M4 4v9h2V6h7V4H4zm15 0v2h7v7h2V4h-9zM4 19v9h9v-2H6v-7H4zm22 0v7h-7v2h9v-9h-2z"},null,-1),Ve=[De];function je(u,l){return g(),z("svg",Me,Ve)}const Ae={name:"la-expand",render:je},Be={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ge=o("path",{fill:"currentColor",d:"M10 6v20h2V6zm10 0v20h2V6z"},null,-1),Ne=[Ge];function Le(u,l){return g(),z("svg",Be,Ne)}const Pe={name:"la-pause",render:Le},Ue={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ie=o("path",{fill:"currentColor",d:"M9 5.156v21.688l1.531-1L25.844 16L10.53 6.156zm2 3.657L22.156 16L11 23.188z"},null,-1),He=[Ie];function qe(u,l){return g(),z("svg",Ue,He)}const Oe={name:"la-play",render:qe},Xe=.5*(Math.sqrt(3)-1),Y=(3-Math.sqrt(3))/6,Ye=1/3,F=1/6,Z=u=>Math.floor(u)|0,me=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),de=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Ze(u=Math.random){const l=ve(u),i=new Float64Array(l).map(_=>me[_%12*2]),s=new Float64Array(l).map(_=>me[_%12*2+1]);return function(n,M){let c=0,p=0,v=0;const r=(n+M)*Xe,D=Z(n+r),V=Z(M+r),B=(D+V)*Y,f=D-B,a=V-B,m=n-f,h=M-a;let G,N;m>h?(G=1,N=0):(G=0,N=1);const P=m-G+Y,e=h-N+Y,d=m-1+2*Y,k=h-1+2*Y,C=D&255,S=V&255;let w=.5-m*m-h*h;if(w>=0){const x=C+l[S],j=i[x],A=s[x];w*=w,c=w*w*(j*m+A*h)}let b=.5-P*P-e*e;if(b>=0){const x=C+G+l[S+N],j=i[x],A=s[x];b*=b,p=b*b*(j*P+A*e)}let $=.5-d*d-k*k;if($>=0){const x=C+1+l[S+1],j=i[x],A=s[x];$*=$,v=$*$*(j*d+A*k)}return 70*(c+p+v)}}function Ee(u=Math.random){const l=ve(u),i=new Float64Array(l).map(n=>de[n%12*3]),s=new Float64Array(l).map(n=>de[n%12*3+1]),_=new Float64Array(l).map(n=>de[n%12*3+2]);return function(M,c,p){let v,r,D,V;const B=(M+c+p)*Ye,f=Z(M+B),a=Z(c+B),m=Z(p+B),h=(f+a+m)*F,G=f-h,N=a-h,P=m-h,e=M-G,d=c-N,k=p-P;let C,S,w,b,$,x;e>=d?d>=k?(C=1,S=0,w=0,b=1,$=1,x=0):e>=k?(C=1,S=0,w=0,b=1,$=0,x=1):(C=0,S=0,w=1,b=1,$=0,x=1):d<k?(C=0,S=0,w=1,b=0,$=1,x=1):e<k?(C=0,S=1,w=0,b=0,$=1,x=1):(C=0,S=1,w=0,b=1,$=1,x=0);const j=e-C+F,A=d-S+F,W=k-w+F,ee=e-b+2*F,te=d-$+2*F,oe=k-x+2*F,se=e-1+3*F,ne=d-1+3*F,le=k-1+3*F,E=f&255,J=a&255,K=m&255;let I=.6-e*e-d*d-k*k;if(I<0)v=0;else{const y=E+l[J+l[K]];I*=I,v=I*I*(i[y]*e+s[y]*d+_[y]*k)}let H=.6-j*j-A*A-W*W;if(H<0)r=0;else{const y=E+C+l[J+S+l[K+w]];H*=H,r=H*H*(i[y]*j+s[y]*A+_[y]*W)}let q=.6-ee*ee-te*te-oe*oe;if(q<0)D=0;else{const y=E+b+l[J+$+l[K+x]];q*=q,D=q*q*(i[y]*ee+s[y]*te+_[y]*oe)}let O=.6-se*se-ne*ne-le*le;if(O<0)V=0;else{const y=E+1+l[J+1+l[K+1]];O*=O,V=O*O*(i[y]*se+s[y]*ne+_[y]*le)}return 32*(v+r+D+V)}}function ve(u){const i=new Uint8Array(512);for(let s=0;s<512/2;s++)i[s]=s;for(let s=0;s<512/2-1;s++){const _=s+~~(u()*(256-s)),n=i[s];i[s]=i[_],i[_]=n}for(let s=256;s<512;s++)i[s]=i[s-256];return i}function xe(u,l,i){if(typeof u=="function"||ye(u))return ue(()=>ae(U(u),U(l),U(i)));const s=Q(u);return ue({get(){return s.value=ae(s.value,U(l),U(i))},set(_){s.value=ae(_,U(l),U(i))}})}const L=u=>(be("data-v-3f3f4ab2"),u=u(),$e(),u),Je={class:"flex flex-col items-stretch"},Ke={class:"flex"},Re={class:"flex gap-2 absolute right-2 bottom-4 z-200"},Te={class:"p-2 border-1 rounded-xl m-2 flex flex-col absolute bottom-4 left-12 bg-dark-800 bg-opacity-90 z-200 opacity-20 hover_opacity-90 transition"},Qe={class:"flex"},We=L(()=>o("label",{class:"p-1",for:"box"},"Dots",-1)),et={class:"flex"},tt=L(()=>o("label",{class:"p-1",for:"line"},"Lines",-1)),ot={class:"flex"},st=L(()=>o("label",{class:"p-1",for:"circle"},"Disks",-1)),nt={class:"flex"},lt=L(()=>o("label",{class:"p-1",for:"polygon"},"Polygons",-1)),rt={class:"max-h-100vh m-auto w-full cursor-pointer",style:{"transform-box":"fill-box"},version:"1.1",baseProfile:"full",viewBox:"-10 -10 100 100",xmlns:"http://www.w3.org/2000/svg"},it=L(()=>o("defs",null,[o("g",{id:"truchet"},[o("line",{x2:"2",stroke:"currentColor","stroke-width":"0.4"})])],-1)),ct={class:"inc",transform:"translate(2,-6)","stroke-width":"0.2"},at=L(()=>o("rect",{width:"80",height:"2",opacity:"0.2"},null,-1)),dt={class:"font-mono opacity-60","font-size":"1.5",x:"41",y:"1.5",fill:"currentColor"},ut=L(()=>o("line",{x1:"40",x2:"40",y1:"0",y2:"2",stroke:"currentColor"},null,-1)),_t=["transform"],pt=["x2"],ht={class:"zoom",transform:"translate(-6,2)","stroke-width":"0.2"},ft=L(()=>o("rect",{width:"2",height:"80",opacity:"0.2"},null,-1)),mt={class:"font-mono opacity-60","font-size":"1.5",transform:"rotate(-90) translate(-40,1.5)",fill:"currentColor"},xt=["transform"],vt=["transform"],yt=["transform"],gt=["stroke-width","stroke"],kt={key:1},wt=["fill"],bt=["transform"],$t={key:0},zt=["points","fill"],Ct=["stroke","stroke-width","x1","y1","x2","y2"],St=["fill","cx","cy","r"],Ft={__name:"simplex",setup(u){const l=Q(),i=Q(0),s=xe(ce("simplex-inc",.001),-.005,.005),_=Q(!0),n=xe(ce("simplex-zoom",5),1,100);ke(()=>{setInterval(()=>{_.value&&(i.value+=Number(s.value))},20),Se(" ",f=>{f.preventDefault(),_.value=!_.value})});const{toggle:M}=Fe(l),c=ue(()=>i.value),p=ce("simplex-mode",{box:!1,line:!1,circle:!1,polygon:!0}),v=Ee(),r=Ze();function D(f,a=3){let m="";for(let h=1;h<=a;h++)m+=`${v(f*h,f*h,c.value)*40+50},${v((f+1e3)*h,(f+5)*h+1e3,c.value)*40+50} `;return m}function V(f){const[a,m]=f.delta;s.value+=a*1e-5,n.value+=m*.1}function B(f){i.value+=f.delta[1]/1e4}return(f,a)=>{const m=Oe,h=Pe,G=Ae,N=pe("drag"),P=pe("wheel");return g(),z("div",Je,[o("div",Ke,[o("div",Re,[o("button",{class:"p-2 shadow-lg rounded-xl m-1",onClick:a[0]||(a[0]=e=>_.value=!_.value)},[_.value?(g(),he(h,{key:1})):(g(),he(m,{key:0}))]),o("button",{class:"p-2 shadow rounded-xl m-1",onClick:a[1]||(a[1]=e=>t(M)())},[_e(G)])]),o("div",Te,[o("div",Qe,[X(o("input",{type:"checkbox",id:"box","onUpdate:modelValue":a[2]||(a[2]=e=>t(p).box=e)},null,512),[[R,t(p).box]]),We]),o("div",et,[X(o("input",{type:"checkbox",id:"line","onUpdate:modelValue":a[3]||(a[3]=e=>t(p).line=e)},null,512),[[R,t(p).line]]),tt]),o("div",ot,[X(o("input",{type:"checkbox",id:"circle","onUpdate:modelValue":a[4]||(a[4]=e=>t(p).circle=e)},null,512),[[R,t(p).circle]]),st]),o("div",nt,[X(o("input",{type:"checkbox",id:"polygon","onUpdate:modelValue":a[5]||(a[5]=e=>t(p).polygon=e)},null,512),[[R,t(p).polygon]]),lt])])]),o("div",{class:"flex flex-col relative",ref_key:"art",ref:l},[X((g(),z("svg",rt,[it,o("g",ct,[at,o("text",dt,"Speed "+fe((t(s)*2e3).toFixed(1)),1),ut,o("line",{y2:"2",stroke:"currentColor",transform:`translate(${(t(s)+.005)*1e3*8},0)`},null,8,_t),o("line",{x1:"40",x2:40+t(s)*1e3*8,y1:"2",y2:"2","stroke-width":"1",opacity:"0.2",stroke:"currentColor"},null,8,pt)]),o("g",ht,[ft,o("text",mt,"Zoom "+fe(t(n).toFixed(0)),1),o("line",{x2:"2",stroke:"currentColor",transform:`translate(0,${t(n)*.8})`},null,8,xt)]),(g(),z(re,null,ie(20,e=>o("g",{key:e},[(g(),z(re,null,ie(20,d=>o("g",{key:d,transform:`translate(${d*4},${e*4})`},[t(p).circle?(g(),z("g",{key:0,"stroke-width":"0.5",transform:`rotate(${t(v)(e/t(n),d/t(n),c.value)*180})`},[o("circle",{cx:0,cy:0,fill:"none","stroke-width":t(v)(e/t(n),d/t(n),c.value)+1,stroke:`hsla(${t(v)(e/t(n),d/t(n),c.value)*180},50%,50%,1)`,style:we({transform:`rotate3d(1,1,1,${t(v)(e/t(n),d/t(n),c.value)*180+90}deg)`}),r:1},null,12,gt)],8,yt)):T("",!0),t(p).box?(g(),z("g",kt,[o("rect",{fill:`hsla(${t(v)(e/t(n),d/t(n),c.value)*180},50%,50%,1)`,x:-2,y:-2,rx:"2",ry:"2",width:"4",height:"4"},null,8,wt)])):T("",!0),t(p).line?(g(),z("line",{key:2,stroke:"white","stroke-width":"0.4",x1:-2,x2:2,y1:0,y2:0,transform:`rotate(${t(v)(e/t(n),d/t(n),c.value)*180})`},null,8,bt)):T("",!0)],8,vt)),64))])),64)),t(p).polygon?(g(),z("g",$t,[(g(),z(re,null,ie(3,e=>o("g",{key:e},[o("polygon",{class:"fltr mix-blend-multiply",points:D(e),fill:`hsla(${t(r)(e*(t(n)/5e3)*100+900,t(v)(e+30*e,e+30*e,c.value))*180},50%,50%,1)`},null,8,zt),o("line",{class:"mix-blend-difference",stroke:`hsla(${t(r)(e*(t(n)/2e3),t(r)(e*e,c.value))*180},50%,50%,1)`,"stroke-width":Math.pow(t(r)(e*(t(n)/500)+5,t(r)(e+50,c.value)),2)*80+1,x1:Math.pow(t(r)(e+5,t(r)(e+50,c.value)),2)*40+40,y1:Math.pow(t(r)(e+10,t(r)(e+100,c.value)),2)*40+40,x2:t(r)(e+20,t(r)(e+200,c.value))*40+40,y2:t(r)(e+30,t(r)(e+300,c.value))*40+40},null,8,Ct),o("circle",{class:"mix-blend-screen",fill:`hsla(${t(r)(e*e*(t(n)/5e3),t(r)(e*e,c.value))*180},50%,50%,1)`,cx:t(r)(e+e*20,t(r)(e+3e3,c.value))*30+40,cy:t(r)(e*e+200,t(r)(e+390,c.value))*30+40,r:t(r)(e*20*(t(n)/5e3),t(r)(e+930,c.value))*10+15},null,8,St)])),64))])):T("",!0)])),[[N,V],[P,B]])],512)])}}},Mt=ge(Ft,[["__scopeId","data-v-3f3f4ab2"]]),Bt=JSON.parse('{"title":"Simplex noise playground","description":"","frontmatter":{"title":"Simplex noise playground"},"headers":[],"relativePath":"exp/simplex/index.md","filePath":"exp/simplex/index.md","lastUpdated":1669732906000}'),Dt={name:"exp/simplex/index.md"},Gt=Object.assign(Dt,{setup(u){return(l,i)=>{const s=ze("client-only");return g(),z("div",null,[_e(s,null,{default:Ce(()=>[_e(Mt)]),_:1})])}}});export{Bt as __pageData,Gt as default};
