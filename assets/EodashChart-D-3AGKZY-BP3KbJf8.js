import"./main-CaklldYq.js";import{o as f}from"./handling-NvY8Csry-BSku6Hxe.js";import{_ as O,w as k,b as M,o as z,eO as I,ai as R,g as i,h as s,m as g,n as T,q as v,eI as l,v as x,O as y,aI as b,B as w,C as r,eP as N,eQ as D,eM as V,eN as q,a3 as L,eR as A,eS as J}from"./index-DAubJ0S3.js";import{T as P}from"./index-KGxz5Egv-CbHWXHu4.js";import"./sequential-DDW98mYE.js";import"./orient2d-DArCjZZA.js";import"./async-CiNIOBVz-DVY8WuJa.js";import"./utils-CHGQ4ScM.js";import"./index-CxojoGlr.js";import"./VTooltip-ClWHUmWL--JJ2taUm.js";import"./forwardRefs-B-c1_6yo-COB0uoTM.js";import"./transition-BkyUsZh_--incWp-f.js";const F=".bg-surface:has(.eodash-chart-wrapper){height:100%;display:flex;flex-direction:column}",H=".eodash-chart-wrapper[data-v-29f0a1a6]{height:100%;flex-grow:1;min-height:180px;display:flex;flex-direction:column}.chart-frame[data-v-29f0a1a6]{position:relative;flex-grow:1;min-height:180px;display:flex;flex-direction:column}eox-chart[data-v-29f0a1a6]{flex-grow:1;min-height:0}.chart-toggle[data-v-29f0a1a6]{position:absolute;top:8px;right:46px;z-index:2;cursor:pointer}",K={ref:"container",class:"eodash-chart-wrapper"},Q={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},U=["d"],j=[".spec",".dataValues",".opt"],G={__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(p){const c=r(()=>p.enableCompare?N.value:D.value),d=r(()=>p.enableCompare?V.value:q.value),C=r(()=>{const a=d.value;if(!a)return!1;let e=!1;const o=t=>{if(!(e||!t||typeof t!="object")){if("bind"in t&&typeof t.bind=="object"&&t.bind!==null&&"input"in t.bind){e=!0;return}Object.values(t).forEach(o)}};return o(a),e}),n=w(null);k(d,a=>{if(!a){n.value=null;return}const e=JSON.parse(JSON.stringify(a));e.height="container",e.width="container",L(()=>{n.value=e,u.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const u=w(0),_=M("container");let m=null,h=null;z(()=>{const a=_.value;if(!a)return;h=window.setInterval(()=>{if(a){const o=a.querySelector("eox-chart");if(o&&o.shadowRoot&&!o.shadowRoot.querySelector("#eodash-chart-styles")){const t=document.createElement("style");t.id="eodash-chart-styles",t.innerHTML=`
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
          `,o.shadowRoot.appendChild(t)}}},200);const e=I(a);e&&(m=new MutationObserver(async()=>{getComputedStyle(e).display!=="none"&&(u.value=Math.random())}),m.observe(e,{attributes:!0,attributeFilter:["style","class"]}))}),R(()=>{m?.disconnect(),h&&window.clearInterval(h)});const S=r(()=>({height:"100%",width:"100%"})),E=r(()=>l.value?A:J);function B(){l.value=!l.value}return(a,e)=>(i(),s("div",K,[g("div",{class:"chart-frame",style:y({paddingBottom:C.value?"25px":"0px"})},[c.value&&d.value?T((i(),s("button",{key:0,class:"chart-toggle",onClick:B},[(i(),s("svg",Q,[g("path",{d:E.value},null,8,U)]))])),[[P,v(l)?"Minimize":"Maximize"]]):x("v-if",!0),c.value&&n.value?(i(),s("eox-chart",{".spec":b(n.value),key:u.value,".dataValues":b(c.value),"onClick:item":e[0]||(e[0]=(...o)=>v(f)&&v(f)(...o)),style:y(S.value),".opt":p.vegaEmbedOptions},null,44,j)):x("v-if",!0)],4)],512))}},se=O(G,[["styles",[F,H]],["__scopeId","data-v-29f0a1a6"]]);export{se as default};
