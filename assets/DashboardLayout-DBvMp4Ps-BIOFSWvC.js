import{_ as v,a as x,c as l,d,w as p,j as m,e as n,g as c,l as w,S as b,r as g,m as y,f,F as _,h as k,T as A}from"./index-BvwgT-QJ.js";import{V as S}from"./VMain-3taqsrfO-DDg5FEgS.js";import"./ssrBoot-B1enSyG_-BONlfeqL.js";class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._observer=new MutationObserver(()=>this._setupSlots())}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
          flex: 1 1 100%;
          overflow: hidden;
        }
        ::slotted([slot="map"]) {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 0 !important;
          display: block !important;
        }
        .sidebar, .sidebar-left {
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 400px;
          max-width: calc(100% - 2rem);
          max-height: calc(100% - 2rem);
          z-index: 10;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 4px;
        }
        .sidebar-right {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 400px;
          max-width: calc(100% - 2rem);
          max-height: calc(100% - 2rem);
          z-index: 10;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 4px;
        }
        @media (max-width: 900px) {
          .sidebar, .sidebar-left, .sidebar-right {
            width: min(320px, calc(50% - 1.5rem));
            max-width: calc(50% - 1.5rem);
          }
        }
        .sidebar::-webkit-scrollbar, .sidebar-left::-webkit-scrollbar, .sidebar-right::-webkit-scrollbar {
          width: 6px;
        }
        .sidebar::-webkit-scrollbar-thumb, .sidebar-left::-webkit-scrollbar-thumb, .sidebar-right::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.2);
          border-radius: 4px;
        }
        ::slotted([slot="sidebar"]),
        ::slotted([slot="sidebar-left"]),
        ::slotted([slot="sidebar-right"]),
        ::slotted([slot="right"]) {
          pointer-events: auto !important;
          width: 100% !important;
          height: auto !important;
          box-sizing: border-box !important;
        }
      </style>
      <slot name="map"></slot>
      <div class="sidebar sidebar-left">
        <slot name="sidebar"></slot>
        <slot name="sidebar-left"></slot>
      </div>
      <div class="sidebar-right">
        <slot name="sidebar-right"></slot>
        <slot name="right"></slot>
      </div>
      <slot></slot>
    `,this._setupSlots(),this._observer.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect()}_setupSlots(){const a=Array.from(this.children);if(a.length===0)return;const e=a[0];if(e){e.hasAttribute("slot")||e.setAttribute("slot","map"),e.style.width="100%",e.style.height="100%",e.style.display="flex",e.style.flexDirection="row",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.zIndex="0";const o=Array.from(e.children||[]);o.length>=2&&o.forEach(t=>{t.style.flex="1 1 50%",t.style.width="50%",t.style.height="100%",t.style.position="relative",t.style.display="block",(t.querySelectorAll?Array.from(t.querySelectorAll("eox-map")):[]).forEach(r=>{r.style.width="100%",r.style.height="100%",r.style.display="block",r.map&&r.map.updateSize()})})}let i=!1;for(let o=1;o<a.length;o++){const t=a[o];t.id==="right_col"||t.getAttribute("slot")==="sidebar-right"||t.getAttribute("slot")==="right"||a.length>=3&&o>=2&&t.id!=="left_col"?(i=!0,(!t.hasAttribute("slot")||t.getAttribute("slot")!=="sidebar-right")&&t.setAttribute("slot","sidebar-right")):(!t.hasAttribute("slot")||t.getAttribute("slot")!=="sidebar")&&t.setAttribute("slot","sidebar"),t.style.width="100%",t.style.height="auto",t.style.boxSizing="border-box",(t.querySelectorAll?Array.from(t.querySelectorAll("a2ui-card, a2ui-basic-card")):[]).forEach(s=>{s.style.margin="0",s.style.width="100%",s.style.maxWidth="100%",s.style.height="auto",s.style.boxSizing="border-box",s.style.wordBreak="break-word",s.style.overflowWrap="break-word"})}if(this.shadowRoot){const o=this.shadowRoot.querySelector(".sidebar-right");o&&(o.style.display=i?"flex":"none")}}}customElements.define("eox-map-workspace",E);class $ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .container {
          display: flex !important;
          flex-direction: row !important;
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }
        ::slotted(*) {
          flex: 1 1 50% !important;
          width: 50% !important;
          height: 100% !important;
          position: relative !important;
          display: block !important;
          box-sizing: border-box !important;
        }
      </style>
      <div class="container">
        <slot></slot>
      </div>
    `}}customElements.get("eox-map-side-by-side")||customElements.define("eox-map-side-by-side",$);class z extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        --row-height: ${this.getAttribute("row-height")||"1fr"};
        --column-width: ${this.getAttribute("column-width")||"1fr"};
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        ${this.getAttribute("fill-grid")!==null?`
          grid-template-columns: repeat(auto-fill, minmax(var(--column-width, 300px), 1fr));
          grid-template-rows: repeat(auto-fill, minmax(0, var(--row-height, 300px)));
          grid-auto-columns: var(--column-width, 300px);
          grid-auto-rows: var(--row-height, 300px);
          `:`
          grid-template-columns: repeat(12, ${this.getAttribute("column-width")?"var(--column-width)":"minmax(0, var(--column-width))"});
          grid-template-rows: repeat(12, ${this.getAttribute("row-height")?"var(--row-height)":"minmax(0, var(--row-height))"});
          `}
        overflow: auto;
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(a,e,i){e!==i&&(this[a]=i),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const a=(e,i=0)=>e?.toString().includes("/")?e.split("/")[i]:e;this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;
        }
          ${this.parentElement?.mediaBreakpoints?.map((e,i)=>`
              @media (min-width: ${e}px) {
                :host {
                          ${this.parentElement&&this.parentElement.getAttribute("fill-grid")!==null?`
                          grid-column: span ${a(this.getAttribute("w"),i)};
                          grid-row: span ${a(this.getAttribute("h"),i)};
                          `:`            
                            grid-column: ${parseInt(a(this.getAttribute("x"),i))+1} / span ${a(this.getAttribute("w"),i)};
                            grid-row: ${parseInt(a(this.getAttribute("y"),i))+1} / span ${a(this.getAttribute("h"),i)};
                        `}
                  display: ${a(this.getAttribute("w"),i)==="0"||a(this.getAttribute("h"),i)==="0"?"none":"block"}
                }
              }
              `).join(`
`)}
      </style>
      <slot></slot>
    `}attributeChangedCallback(a,e,i){e!==i&&(this[a]=i),this.render()}}customElements.define("eox-layout",z);customElements.define("eox-layout-item",C);var L=".panel[data-v-83adaac9]{z-index:1;pointer-events:none;position:relative;overflow:auto}.pointer[data-v-83adaac9]{pointer-events:all}.bg-panel[data-v-83adaac9]{z-index:0;border-radius:0!important}.fade-enter-active[data-v-83adaac9],.fade-leave-active[data-v-83adaac9]{transition:opacity .25s}.fade-enter-from[data-v-83adaac9],.fade-leave-to[data-v-83adaac9]{opacity:0}.bg-surface[data-v-83adaac9],.bg-primary[data-v-83adaac9]{scrollbar-color:rgba(var(--v-theme-on-surface), .2) transparent;scrollbar-width:thin;border:none;border-radius:8px;max-height:100%;overflow:auto;box-shadow:0 0 1px #18274b38,0 6px 12px -6px #18274b1f,0 8px 24px -4px #18274b14;backdrop-filter:blur(10px)!important}.bg-surface[data-v-83adaac9]{background-color:rgba(var(--v-theme-surface), var(--v-surface-opacity,.8))!important}.bg-primary[data-v-83adaac9]{background-color:rgba(var(--v-theme-primary), var(--v-primary-opacity,.8))!important}",M=["gap"],B=["id","h","w","x","y"],T={class:"bg-surface pointer"},q=v({__name:"DashboardLayout",setup(h){const{bgWidget:a,importedWidgets:e,gap:i}=x(),o={padding:i.value+"px",overflow:"hidden !important"};return(t,u)=>(l(),d(S,null,{default:p(()=>[m("eox-layout",{mediaBreakpoints:[0,960,1921],gap:n(i),style:o},[n(a)?.component?(l(),c("eox-layout-item",{key:n(a).id,class:"bg-panel",style:w(`margin: -${n(i)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(l(),d(b,null,{default:p(()=>[(l(),d(g(n(a)?.component),y({id:"bg-widget"},n(a)?.props),null,16))]),_:1}))],4)):f("v-if",!0),(l(!0),c(_,null,k(n(e),(r,s)=>(l(),d(A,{key:s,name:"fade"},{default:p(()=>[r.value.component?(l(),c("eox-layout-item",{id:r.value.id.toString(),key:r.value.id,class:"panel",h:r.value.layout.h,w:r.value.layout.w,x:r.value.layout.x,y:r.value.layout.y},[(l(),d(b,null,{default:p(()=>[m("div",T,[(l(),d(g(r.value.component),y({key:r.value.id},{ref_for:!0},r.value.props),null,16))])]),_:2},1024))],8,B)):f("v-if",!0)]),_:2},1024))),128))],8,M)]),_:1}))}},[["styles",[L]],["__scopeId","data-v-83adaac9"]]);export{q as default};
