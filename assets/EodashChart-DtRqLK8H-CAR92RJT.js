import{_ as B,L as O,aA as M,k as f,ab as z,o as R,f$ as T,M as I,c as n,g as s,j as g,i as D,e as v,fU as l,f as x,l as b,aR as y,O as o,g0 as L,g1 as N,fZ as V,f_ as A,g2 as q,g3 as J}from"./index-DrL8z8X7.js";import{o as _}from"./handling-CAk8jxUB-1f7N8EEH.js";import{T as U}from"./tooltip-Cwc0eFcn-CMkEryLP.js";import"./main-C4gNeGAc.js";import"./async-DJESYoQN-8U1lzF52.js";import"./utils-BYKSO__W.js";import"./index-Dm-aC8c8.js";import"./VTooltip-DUnrzfN9-GyZlbqTx.js";import"./forwardRefs-COX7gqhL-DbJYFmqM.js";import"./transition-QErrbuqk-CM8ayyeE.js";import"./sequential-DDW98mYE.js";import"./orient2d-DArCjZZA.js";var j=".bg-surface:has(.eodash-chart-wrapper){flex-direction:column;height:100%;display:flex}",F=".eodash-chart-wrapper[data-v-c14bc6fb]{flex-direction:column;flex-grow:1;height:100%;min-height:180px;display:flex}.chart-frame[data-v-c14bc6fb]{flex-direction:column;flex-grow:1;min-height:180px;display:flex;position:relative}eox-chart[data-v-c14bc6fb]{flex-grow:1;min-height:0}.chart-toggle[data-v-c14bc6fb]{z-index:2;cursor:pointer;position:absolute;top:8px;right:46px}",H={ref:"container",class:"eodash-chart-wrapper"},K={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},P=["d"],Z=[".spec",".dataValues",".opt"],ne=B({__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(p){const d=o(()=>p.enableCompare?L.value:N.value),c=o(()=>p.enableCompare?V.value:A.value),w=o(()=>{const t=c.value;if(!t)return!1;let e=!1;const r=a=>{if(!(e||!a||typeof a!="object")){if("bind"in a&&typeof a.bind=="object"&&a.bind!==null&&"input"in a.bind){e=!0;return}Object.values(a).forEach(r)}};return r(t),e}),i=f(null);O(c,t=>{if(!t){i.value=null;return}const e=JSON.parse(JSON.stringify(t));e.height="container",e.width="container",M(()=>{i.value=e,u.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const u=f(0),C=z("container");let h=null,m=null;R(()=>{const t=C.value;if(!t)return;m=window.setInterval(()=>{if(t){const r=t.querySelector("eox-chart");if(r&&r.shadowRoot&&!r.shadowRoot.querySelector("#eodash-chart-styles")){const a=document.createElement("style");a.id="eodash-chart-styles",a.innerHTML=`
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
          `,r.shadowRoot.appendChild(a)}}},200);const e=T(t);e&&(h=new MutationObserver(async()=>{getComputedStyle(e).display!=="none"&&(u.value=Math.random())}),h.observe(e,{attributes:!0,attributeFilter:["style","class"]}))}),I(()=>{h?.disconnect(),m&&window.clearInterval(m)});const E=o(()=>({height:"100%",width:"100%"})),S=o(()=>l.value?q:J);function k(){l.value=!l.value}return(t,e)=>(n(),s("div",H,[g("div",{class:"chart-frame",style:b({paddingBottom:w.value?"25px":"0px"})},[d.value&&c.value?D((n(),s("button",{key:0,class:"chart-toggle",onClick:k},[(n(),s("svg",K,[g("path",{d:S.value},null,8,P)]))])),[[U,v(l)?"Minimize":"Maximize"]]):x("v-if",!0),d.value&&i.value?(n(),s("eox-chart",{key:u.value,".spec":y(i.value),".dataValues":y(d.value),style:b(E.value),".opt":p.vegaEmbedOptions,"onClick:item":e[0]||(e[0]=(...r)=>v(_)&&v(_)(...r))},null,44,Z)):x("v-if",!0)],4)],512))}},[["styles",[j,F]],["__scopeId","data-v-c14bc6fb"]]);export{ne as default};
