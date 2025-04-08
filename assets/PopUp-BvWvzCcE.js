import{g as b,p as E,b as v,m as y,ab as w,y as F,r as M,am as O,I as R,w as V,B as q,a as T,M as H,ak as I,e as U,P as j,Q as N,ae as X,ac as Y,af as z,bA as J,bB as Q,ag as Z,n as G,q as K,ah as _,bE as ee,bF as te,ai as ae,ad as oe,t as ne,aj as se,bI as ie,bJ as re,bV as le,a1 as k,a0 as S,$ as x,Z as ce,a3 as B,a5 as ue,a4 as P,bW as de}from"./index-CyVHa_-5.js";import{m as fe,V as C}from"./VOverlay-BwaK2Eza.js";import{a as p,g as me,n as ge,c as he,d as ve,s as D,b as ye,f as pe}from"./forwardRefs-CRBmWyrI.js";import"./transition-CMt0Q_rw.js";const xe=E({target:[Object,Array]},"v-dialog-transition"),Pe=b()({name:"VDialogTransition",props:xe(),setup(e,r){let{slots:o}=r;const l={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,c){await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),t.style.visibility="";const{x:a,y:i,sx:d,sy:f,speed:n}=L(e.target,t),u=p(t,[{transform:`translate(${a}px, ${i}px) scale(${d}, ${f})`,opacity:0},{}],{duration:225*n,easing:ve});A(t)?.forEach(s=>{p(s,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*n,easing:D})}),u.finished.then(()=>c())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,c){await new Promise(s=>requestAnimationFrame(s));const{x:a,y:i,sx:d,sy:f,speed:n}=L(e.target,t);p(t,[{},{transform:`translate(${a}px, ${i}px) scale(${d}, ${f})`,opacity:0}],{duration:125*n,easing:he}).finished.then(()=>c()),A(t)?.forEach(s=>{p(s,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*n,easing:D})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>e.target?v(w,y({name:"dialog-transition"},l,{css:!1}),o):v(w,{name:"dialog-transition"},o)}});function A(e){const r=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;return r&&[...r]}function L(e,r){const o=me(e),l=ge(r),[t,c]=getComputedStyle(r).transformOrigin.split(" ").map(W=>parseFloat(W)),[a,i]=getComputedStyle(r).getPropertyValue("--v-overlay-anchor-origin").split(" ");let d=o.left+o.width/2;a==="left"||i==="left"?d-=o.width/2:(a==="right"||i==="right")&&(d+=o.width/2);let f=o.top+o.height/2;a==="top"||i==="top"?f-=o.height/2:(a==="bottom"||i==="bottom")&&(f+=o.height/2);const n=o.width/l.width,u=o.height/l.height,s=Math.max(1,n,u),m=n/s||0,h=u/s||0,g=l.width*l.height/(window.innerWidth*window.innerHeight),$=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:d-(t+l.left),y:f-(c+l.top),sx:m,sy:h,speed:$}}const be=E({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...fe({origin:"center center",scrollStrategy:"block",transition:{component:Pe},zIndex:2400})},"VDialog"),Ee=b()({name:"VDialog",props:be(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,r){let{emit:o,slots:l}=r;const t=F(e,"modelValue"),{scopeId:c}=ye(),a=M();function i(n){const u=n.relatedTarget,s=n.target;if(u!==s&&a.value?.contentEl&&a.value?.globalTop&&![document,a.value.contentEl].includes(s)&&!a.value.contentEl.contains(s)){const m=H(a.value.contentEl);if(!m.length)return;const h=m[0],g=m[m.length-1];u===h?g.focus():h.focus()}}O(()=>{document.removeEventListener("focusin",i)}),R&&V(()=>t.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0});function d(){o("afterEnter"),a.value?.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function f(){o("afterLeave")}return V(t,async n=>{n||(await q(),a.value.activatorEl?.focus({preventScroll:!0}))}),T(()=>{const n=C.filterProps(e),u=y({"aria-haspopup":"dialog"},e.activatorProps),s=y({tabindex:-1},e.contentProps);return v(C,y({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:t.value,"onUpdate:modelValue":m=>t.value=m,"aria-modal":"true",activatorProps:u,contentProps:s,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:d,onAfterLeave:f},c),{activator:l.activator,default:function(){for(var m=arguments.length,h=new Array(m),g=0;g<m;g++)h[g]=arguments[g];return v(I,{root:"VDialog"},{default:()=>[l.default?.(...h)]})}})}),pe({},a)}}),we=E({color:String,...se(),...ne(),...oe(),...ae(),...te(),...ee(),..._(),...K(),...G()},"VSheet"),Ve=b()({name:"VSheet",props:we(),setup(e,r){let{slots:o}=r;const{themeClasses:l}=U(e),{backgroundColorClasses:t,backgroundColorStyles:c}=j(N(e,"color")),{borderClasses:a}=X(e),{dimensionStyles:i}=Y(e),{elevationClasses:d}=z(e),{locationStyles:f}=J(e),{positionClasses:n}=Q(e),{roundedClasses:u}=Z(e);return T(()=>v(e.tag,{class:["v-sheet",l.value,t.value,a.value,d.value,n.value,u.value,e.class],style:[c.value,i.value,f.value,e.style]},o)),{}}}),ke={key:1},Ae={__name:"PopUp",props:ie({widget:{type:Object,default:void 0},maxWidth:{type:String,default:"500px"},maxHeight:{type:String,default:"500px"},width:{type:String,default:"500px"},height:{type:String,default:"500px"}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const r=re(e,"modelValue"),o=e,l={maxWidth:o.maxWidth,maxHeight:o.maxHeight,width:o.width,height:o.height},[t]=le([o?.widget]);return(c,a)=>(x(),k("span",null,[v(Ee,y(l,{absolute:"",scrollable:"","scroll-strategy":"block","close-on-back":"",modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=i=>r.value=i)}),{default:S(()=>[v(Ve,null,{default:S(()=>[e.widget?(x(),ce(ue(P(t).component),y({key:P(t).id},P(t).props),null,16)):B("v-if",!0),c.$slots.default?(x(),k("span",ke,[de(c.$slots,"default")])):B("v-if",!0)]),_:3})]),_:3},16,["modelValue"])]))}};export{Ae as default};
