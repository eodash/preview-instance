import{_ as f,cu as y,g as o,p as i,k as n,m as p,q as s,h as l,a3 as w,cv as h,c0 as d,x as m,v as g,b0 as x,b1 as _,bW as k}from"./index-D_D4lG6V.js";import{V as A}from"./VMain-Cm0UmKGi-CpBs5YAu.js";import"./ssrBoot-Zgc_Ttvi-CwPbACfq.js";class $ extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
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
    `}attributeChangedCallback(e,a,t){a!==t&&(this[e]=t),this.render()}}customElements.define("eox-layout",$);customElements.define("eox-layout-item",B);const E=".panel[data-v-9c8477cc]{position:relative;overflow:auto;z-index:1;pointer-events:none}.pointer[data-v-9c8477cc]{pointer-events:all}.bg-panel[data-v-9c8477cc]{z-index:0;border-radius:0!important}.fade-enter-active[data-v-9c8477cc],.fade-leave-active[data-v-9c8477cc]{transition:opacity .25s ease}.fade-enter-from[data-v-9c8477cc],.fade-leave-to[data-v-9c8477cc]{opacity:0}.bg-surface[data-v-9c8477cc],.bg-primary[data-v-9c8477cc]{backdrop-filter:blur(10px)!important;border-radius:8px;border:none;box-shadow:0 0 1px #18274b38,0 6px 12px -6px #18274b1f,0 8px 24px -4px #18274b14;max-height:100%;overflow:auto;scrollbar-color:rgba(var(--v-theme-on-surface),.2) transparent;scrollbar-width:thin}.bg-surface[data-v-9c8477cc]{background-color:rgba(var(--v-theme-surface),var(--v-surface-opacity, .8))!important}.bg-primary[data-v-9c8477cc]{background-color:rgba(var(--v-theme-primary),var(--v-primary-opacity, .8))!important}",C=["gap"],L=["id","h","w","x","y"],S={class:"bg-surface pointer"},z={__name:"DashboardLayout",setup(c){const{bgWidget:e,importedWidgets:a,gap:t}=y(),u={padding:t.value+"px",overflow:"hidden !important"};return(v,M)=>(o(),i(A,{class:"pa-0"},{default:n(()=>[p("eox-layout",{mediaBreakpoints:[0,960,1920],gap:s(t),style:u},[s(e)?.component?(o(),l("eox-layout-item",{key:s(e).id,class:"bg-panel",style:w(`margin: -${s(t)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(o(),i(h,null,{default:n(()=>[(o(),i(d(s(e)?.component),m({id:"bg-widget"},s(e)?.props),null,16))]),_:1}))],4)):g("v-if",!0),(o(!0),l(x,null,_(s(a),(r,b)=>(o(),i(k,{key:b,name:"fade"},{default:n(()=>[r.value.component?(o(),l("eox-layout-item",{id:r.value.id.toString(),key:r.value.id,class:"panel",h:r.value.layout.h,w:r.value.layout.w,x:r.value.layout.x,y:r.value.layout.y},[(o(),i(h,null,{default:n(()=>[p("div",S,[(o(),i(d(r.value.component),m({key:r.value.id},{ref_for:!0},r.value.props),null,16))])]),_:2},1024))],8,L)):g("v-if",!0)]),_:2},1024))),128))],8,C)]),_:1}))}},I=f(z,[["styles",[E]],["__scopeId","data-v-9c8477cc"]]);export{I as default};
