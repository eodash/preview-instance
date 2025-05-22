import{_ as b,W as y,Z as i,$ as s,a0 as n,a7 as f,a4 as o,a1 as l,a3 as c,aa as v,a2 as p,a5 as d,m,F as x,a6 as _,ab as $}from"./index-ofgZE0U6.js";import{V as A}from"./VMain-iLpohKoE.js";import"./ssrBoot-R1lbdBgo.js";class k extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
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
  `}attributeChangedCallback(e,a,t){a!==t&&(this[e]=t),this.render()}}class E extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=(a,t=0)=>a?.toString().includes("/")?a.split("/")[t]:a;this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(e,a,t){a!==t&&(this[e]=t),this.render()}}customElements.define("eox-layout",k);customElements.define("eox-layout-item",E);const B=["gap"],C=["id","h","w","x","y"],L={__name:"DashboardLayout",setup(u){const{bgWidget:e,importedWidgets:a,gap:t}=y(),h={padding:t.value+"px",overflow:"hidden !important"};return(g,S)=>(s(),i(A,null,{default:n(()=>[f("eox-layout",{gap:o(t),class:"layout-container",style:h},[o(e)?.component?(s(),l("eox-layout-item",{key:o(e).id,class:"bg-panel bg-surface",style:v(`margin: -${o(t)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(s(),i(p,null,{default:n(()=>[(s(),i(d(o(e)?.component),m({id:"bg-widget"},o(e)?.props),null,16))]),_:1}))],4)):c("v-if",!0),(s(!0),l(x,null,_(o(a),(r,w)=>(s(),i($,{key:w,name:"fade"},{default:n(()=>[r.value.component?(s(),l("eox-layout-item",{id:r.value.id.toString(),key:r.value.id,class:"panel bg-surface",h:r.value.layout.h,w:r.value.layout.w,x:r.value.layout.x,y:r.value.layout.y},[(s(),i(p,null,{default:n(()=>[(s(),i(d(r.value.component),m({key:r.value.id,ref_for:!0},r.value.props),null,16))]),_:2},1024))],8,C)):c("v-if",!0)]),_:2},1024))),128))],8,B)]),_:1}))}},D=b(L,[["__scopeId","data-v-77ee454d"]]);export{D as default};
