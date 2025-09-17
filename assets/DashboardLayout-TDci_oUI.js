import{_ as b,Z as f,a1 as i,a2 as s,a3 as n,e as c,a7 as o,a4 as l,a6 as p,n as v,a5 as d,a8 as m,m as g,F as x,a9 as _,ac as k}from"./index-COBZVAZ0.js";import{V as A}from"./VMain-a1HBq-06.js";import"./ssrBoot-DfECE3yy.js";class $ extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(e,a,t){a!==t&&(this[e]=t),this.render()}}class B extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=(a,t=0)=>a?.toString().includes("/")?a.split("/")[t]:a;this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;
        }
          ${this.parentElement?.mediaBreakpoints?.map((a,t)=>`
              @media (min-width: ${a}px) {
                :host {
                          ${this.parentElement&&this.parentElement.getAttribute("fill-grid")!==null?`
                          grid-column: span ${e(this.getAttribute("w"),t)};
                          grid-row: span ${e(this.getAttribute("h"),t)};
                          `:`            
                            grid-column: ${parseInt(e(this.getAttribute("x"),t))+1} / span ${e(this.getAttribute("w"),t)};
                            grid-row: ${parseInt(e(this.getAttribute("y"),t))+1} / span ${e(this.getAttribute("h"),t)};
                        `}
                  display: ${e(this.getAttribute("w"),t)==="0"||e(this.getAttribute("h"),t)==="0"?"none":"block"}
                }
              }
              `).join(`
`)}
      </style>
      <slot></slot>
    `}attributeChangedCallback(e,a,t){a!==t&&(this[e]=t),this.render()}}customElements.define("eox-layout",$);customElements.define("eox-layout-item",B);const E=["gap"],C=["id","h","w","x","y"],L={class:"bg-surface pointer"},S={__name:"DashboardLayout",setup(u){const{bgWidget:e,importedWidgets:a,gap:t}=f(),h={padding:t.value+"px",overflow:"hidden !important"};return(w,M)=>(s(),i(A,null,{default:n(()=>[c("eox-layout",{mediaBreakpoints:[0,960,1920],gap:o(t),class:"layout-container",style:h},[o(e)?.component?(s(),l("eox-layout-item",{key:o(e).id,class:"bg-panel",style:v(`margin: -${o(t)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(s(),i(d,null,{default:n(()=>[(s(),i(m(o(e)?.component),g({id:"bg-widget"},o(e)?.props),null,16))]),_:1}))],4)):p("v-if",!0),(s(!0),l(x,null,_(o(a),(r,y)=>(s(),i(k,{key:y,name:"fade"},{default:n(()=>[r.value.component?(s(),l("eox-layout-item",{id:r.value.id.toString(),key:r.value.id,class:"panel",h:r.value.layout.h,w:r.value.layout.w,x:r.value.layout.x,y:r.value.layout.y},[(s(),i(d,null,{default:n(()=>[c("div",L,[(s(),i(m(r.value.component),g({key:r.value.id},{ref_for:!0},r.value.props),null,16))])]),_:2},1024))],8,C)):p("v-if",!0)]),_:2},1024))),128))],8,E)]),_:1}))}},H=b(S,[["__scopeId","data-v-835b2a14"]]);export{H as default};
