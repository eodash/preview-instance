import{_ as H,L as z,aA as N,k as h,ab as V,o as j,g7 as q,M as F,c as p,g as c,i as U,e as s,g0 as l,j as E,f as S,n as _,l as M,aS as A,O as i,g8 as J,g9 as $,g5 as K,g6 as P,ga as X,gb as G}from"./index-BvwgT-QJ.js";import{o as I}from"./handling-DC-8T0hW-4Dg5gFXU.js";import{T as Q}from"./tooltip-BbcyEw-0-D5A1c-Of.js";import"./main-Dl0D1m2i.js";import"./async-97afytvP-Bq74XAwb.js";import"./utils-BYKSO__W.js";import"./index-Dm-aC8c8.js";import"./VTooltip-CDWvPXrc-CjvtLvHu.js";import"./forwardRefs-DuxpMa3C-CuZrbjCw.js";import"./transition-kTN22ujO-C5upnXeC.js";import"./sequential-CBxapK_n.js";var Y=".bg-surface:not(:has(.eodash-process-container)):has(.eodash-chart-wrapper){flex-direction:column;height:100%;display:flex}",Z=".eodash-chart-wrapper[data-v-13b57997]{flex-direction:column;flex-grow:1;height:100%;min-height:180px;display:flex;position:relative}.eodash-chart-wrapper.fit-x-layout[data-v-13b57997]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized[data-v-13b57997]{background:#00000008;align-items:center;padding:16px 10%;overflow-y:auto}.chart-frame[data-v-13b57997]{flex-direction:column;flex-grow:1;min-height:180px;display:flex;position:relative}.chart-frame.fit-x-layout[data-v-13b57997]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized .chart-frame[data-v-13b57997]{background:#fff;border-radius:8px;width:100%;max-width:900px;box-shadow:0 4px 15px #0000001a}eox-chart[data-v-13b57997]{flex-grow:1;min-height:0}eox-chart.fit-x-layout[data-v-13b57997]{height:var(--fit-height)!important}.chart-toggle[data-v-13b57997]{z-index:2;cursor:pointer;position:absolute;top:8px;right:46px}",ee={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},te=["d"],ae=[".spec",".dataValues",".opt"],me=H({__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(m){const u=i(()=>m.enableCompare?J.value:$.value),n=i(()=>m.enableCompare?K.value:P.value);function O(e){return e?e.mark==="image"||e.mark?.type==="image"?!0:Array.isArray(e.layer)?e.layer.some(t=>t.mark==="image"||t.mark?.type==="image"):!1:!1}const B=i(()=>O(n.value)),o=i(()=>{const e=n.value;return e?(e.autosize==="fit-x"||e.autosize?.type==="fit-x")&&B.value:!1}),W=i(()=>{const e=n.value;if(!e)return!1;let t=!1;const a=r=>{if(!(t||!r||typeof r!="object")){if("bind"in r&&typeof r.bind=="object"&&r.bind!==null&&"input"in r.bind){t=!0;return}Object.values(r).forEach(a)}};return a(e),t}),d=h(null);function R(e,t){let a=C(e);return a||t&&t.data&&Array.isArray(t.data.values)&&(a=C(t.data.values),a)?a:null}function C(e){if(!Array.isArray(e)||e.length===0)return null;const t=e[0];if(!t||typeof t!="object")return null;for(const a of Object.keys(t)){const r=t[a];if(typeof r=="string"&&(r.startsWith("http")||r.startsWith("/")))return r}return null}const f=h(1.414),v=h(400);z([u,n],([e,t])=>{const a=R(e,t);if(!a)return;const r=new Image;r.onload=()=>{r.naturalWidth>0&&r.naturalHeight>0&&(f.value=r.naturalHeight/r.naturalWidth)},r.src=a},{immediate:!0});const g=i(()=>Math.round(v.value*f.value));function x(){const e=k.value;if(e){const t=e.querySelector(".chart-frame"),a=Math.round((t?t.clientWidth:e.clientWidth)||400);Math.abs(v.value-a)>2&&(v.value=a)}}z([n,f],([e])=>{if(!e){d.value=null;return}const t=JSON.parse(JSON.stringify(e));t.width="container";const a=e;o.value?t.height=g.value:typeof a.height=="number"?t.height=a.height:t.height="container",N(()=>{d.value=t,y.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const y=h(0),k=V("container");let b=null,w=null;j(()=>{const e=k.value;if(!e)return;x(),window.addEventListener("resize",x),w=window.setInterval(()=>{if(e){const a=e.querySelector("eox-chart");if(a&&a.shadowRoot&&!a.shadowRoot.querySelector("#eodash-chart-styles")){const r=document.createElement("style");r.id="eodash-chart-styles",r.innerHTML=`
            * {
              box-sizing: border-box !important;
            }
            #vis {
              min-height: 100px !important;
              flex: 1 1 auto !important;
            }
            :host, .vega-embed {
              display: flex !important;
              flex-direction: column !important;
              height: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .vega-bindings {
              flex: 0 0 auto !important;
              display: flex !important;
              flex-wrap: wrap;
              gap: 2px !important;
              background: rgba(255, 255, 255, 0.85);
              padding: 6px 12px !important;
              border-radius: 6px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.15);
              margin: 0 !important;
              margin-top: -10px !important;
              z-index: 10;
            }
            .vega-bindings:empty {
              display: none !important;
            }
            .vega-embed > canvas, .vega-embed > svg {
              height: 100% !important;
              max-width: 100% !important;
              object-fit: contain;
            }
            .vega-bind {
              display: flex;
              align-items: center;
              gap: 6px;
              margin-bottom: 0 !important;
            }
          `,a.shadowRoot.appendChild(r)}}},200);const t=q(e);t&&(b=new MutationObserver(async()=>{getComputedStyle(t).display!=="none"&&(y.value=Math.random())}),b.observe(t,{attributes:!0,attributeFilter:["style","class"]}))}),F(()=>{window.removeEventListener("resize",x),b?.disconnect(),w&&window.clearInterval(w)});const L=i(()=>o.value?{"--fit-height":`${g.value}px`,height:`${g.value}px`,width:"100%"}:{height:"100%",width:"100%"}),T=i(()=>l.value?X:G);function D(){l.value=!l.value}return(e,t)=>(p(),c("div",{ref:"container",class:_(["eodash-chart-wrapper",{"fit-x-layout":o.value,maximized:s(l),"fit-x-maximized":o.value&&s(l)}])},[u.value&&n.value?U((p(),c("button",{key:0,class:"chart-toggle",onClick:D},[(p(),c("svg",ee,[E("path",{d:T.value},null,8,te)]))])),[[Q,s(l)?"Minimize":"Maximize"]]):S("v-if",!0),E("div",{class:_(["chart-frame",{"fit-x-layout":o.value}]),style:M({paddingBottom:W.value?"25px":"0px"})},[u.value&&d.value?(p(),c("eox-chart",{key:y.value,".spec":A(d.value),".dataValues":A(u.value),style:M(L.value),class:_({"fit-x-layout":o.value}),".opt":m.vegaEmbedOptions,"onClick:item":t[0]||(t[0]=(...a)=>s(I)&&s(I)(...a))},null,46,ae)):S("v-if",!0)],6)],2))}},[["styles",[Y,Z]],["__scopeId","data-v-13b57997"]]);export{me as default};
