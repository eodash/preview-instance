const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-BaVSXiCs.js","assets/index-BYyvDWfR.js","assets/index-fQbkV-Og.css","assets/directive-CCBPy0DW.js","assets/index-f2MOVmwf.js","assets/directive-helpers-DE0tm9oa.js","assets/live-CIB3kMqq.js","assets/unsafe-html-Vi48RBhn.js","assets/map-Bv-shLAs.js","assets/main-5T364o-N.js","assets/toolcool-range-slider.min-BO3Tl_nj.js","assets/utils-BYKSO__W.js","assets/index-Dm-aC8c8.js","assets/index-DW4WN_9t.js"])))=>i.map(i=>d[i]);
import{b9 as lt,ba as ct,bb as ht,bc as T,bd as v,be as dt,bf as ut,_ as ft,aH as pt,aI as P,b3 as U,af as mt,ag as gt,ap as bt,ao as yt,aJ as N,aK as z,c as C,g as j,e as S,l as vt,j as wt,t as kt,f as L,d as xt,O as q,bg as M,bh as _t,bi as Tt,bj as Ct,b1 as St,bk as H,bl as Et,bm as At,bn as jt}from"./index-BYyvDWfR.js";import Lt from"./EodashLayoutSwitcher-BIENz26N-Cr6OCahr.js";import"./main-BK5KrMxk.js";import{s as Ot,l as F,i as $,a as Dt,b as G,q as Ft,t as $t,o as Vt,p as It,f as Rt}from"./sequential-CBxapK_n.js";import{e as Bt,i as Pt,t as Ut}from"./directive-CCBPy0DW.js";import"./VTooltip-CDWvPXrc-BWOGZxG5.js";import"./forwardRefs-DuxpMa3C-BA8GJqfK.js";import"./transition-kTN22ujO-Ck_658tr.js";import"./dayjs.min-CKB9FIm_.js";import"./live-CIB3kMqq.js";import"./directive-helpers-DE0tm9oa.js";import"./index-DW4WN_9t.js";import"./map-Bv-shLAs.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";const Nt=t=>(i,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,i)}):customElements.define(t,i)};const zt={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:lt},qt=(t=zt,i,e)=>{const{kind:s,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(e.name,t),s==="accessor"){const{name:a}=e;return{set(o){const l=i.get.call(this);i.set.call(this,o),this.requestUpdate(a,l,t,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,t,o),o}}}if(s==="setter"){const{name:a}=e;return function(o){const l=this[a];i.call(this,o),this.requestUpdate(a,l,t,!0,o)}}throw Error("Unsupported decorator location: "+s)};function m(t){return(i,e)=>typeof e=="object"?qt(t,i,e):((s,n,r)=>{const a=n.hasOwnProperty(r);return n.constructor.createProperty(r,s),a?Object.getOwnPropertyDescriptor(n,r):void 0})(t,i,e)}const Mt=(t,i,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(t,i,e),e);function Wt(t,i){return(e,s,n)=>{const r=a=>a.renderRoot?.querySelector(t)??null;return Mt(e,s,{get(){return r(this)}})}}class Ht{constructor(i){this.cle=i}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:i,domain:e,range:s}=this.cle;this.colorScale=i?Ot(i).domain(e):F().range(s).domain(e).interpolate($)}setLogColorScale(){const{interpolator:i,domain:e,range:s}=this.cle;this.colorScale=i?Dt(i).domain(e):G().range(s).domain(e).interpolate($)}setDiscreteColorScale(){this.colorScale=Ft().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const i=this.cle.domain;this.colorScale=$t().domain(i.slice(1,i.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Vt().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(i){throw new Error(`invalid property scaletype: ${i}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}const O=Bt(class extends Pt{constructor(t){if(super(t),t.type!==Ut.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in i)i[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(i)}const e=t.element.classList;for(const s of this.st)s in i||(e.remove(s),this.st.delete(s));for(const s in i){const n=!!i[s];n===this.st.has(s)||this.nt?.has(s)||(n?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return ht}});class Gt{constructor(i){this.cle=i}render(){const i=this.cle.titleText?T`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},s={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return T`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${i}
      <slot name="subtitle"></slot>
      <svg
        class=${O(e)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${O(s)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:i,colorScale:e,domain:s}=this.cle,n={"legend-item":!0,line:i==="line",circle:i==="circle"};return T`${s.map(r=>T`<li
          class=${O(n)}
          style="--color:${e(r)}"
        >
          ${r}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:i,marginTop:e,marginLeft:s,marginRight:n,tickSize:r,width:a,range:o}=this.cle,l=this.cle.marginBottom+r,c=this.cle.height+r,h=i.interpolator?.()||It($,o);return v`<image
      x=${s}
      y=${e}
      width=${a-n-s}
      height=${c-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(h).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:i,marginTop:e,marginLeft:s,colorScale:n,xScale:r}=this.cle,a=this.cle.height+i,o=this.cle.marginBottom+i,l=n.range(),c=u=>n.invertExtent(u).map(r)[0]||s,h=u=>{let[f,g]=n.invertExtent(u).map(r);return f=f||0,g=g||r.range()[1],g-f};return v`${l.map(u=>v`<rect x=${c(u)} y=${e} width=${h(u)} height=${a-e-o} fill=${u}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:i,tickSize:e,tickFormat:s,tickFormatter:n,tickValues:r,xScale:a,marginTop:o}=this.cle,l=this.cle.height+e,c=this.cle.marginBottom+e,h=r?.length?r:a.ticks.apply(a,[i,s]),u=Math.max(e,0)+3,f=()=>h.map(g=>v`<g class="tick" transform='translate(${a(g)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${o+c-l}"></line>
      <text fill="currentColor" y="${u}" dy="0.71em">${n(g)}</text>
      </g>`);return v`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(i,e=256){const s=document.createElement("canvas");s.setAttribute("height","1"),s.setAttribute("width",`${e}`);const n=s.getContext("2d");for(let r=0;r<e;r++)n.fillStyle=i(r/(e-1)),n.fillRect(r,0,1,1);return s}}const Jt=325,Xt=32,Kt=6,Yt=12,Zt=16,Qt=12,V=5,te=6,J=".1f",ee=[0,1],ie=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],se="Color Legend Element",ne="circle",re="continuous",ae=["domain","range","interpolator","scaleType"],oe=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class le{constructor(i){this.cle=i}setXScale(){const{scaleType:i,marginLeft:e,width:s,marginRight:n}=this.cle;switch(i){case"continuous":this.xScale=F().domain(this.cle.domain).range([e,s-n]);break;case"log10":this.xScale=G().domain(this.cle.domain).range([e,s-n]).nice();break;case"discrete":case"threshold":this.xScale=F().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,s-n]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${i}`)}}handleAxisTicks(){if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||V);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[i,e]=this.xScale.domain();this.cle.tickValues=[i,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),e]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=Rt(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||V,this.cle.tickFormat||J))}}const ce=dt`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var p=function(t,i,e,s){var n=arguments.length,r=n<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,i,e,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(i,e,r):a(i,e))||r);return n>3&&r&&Object.defineProperty(i,e,r),r};let d=class extends ut{constructor(){super(...arguments),this.titleText=se,this.width=Jt,this.height=Xt,this.marginTop=Kt,this.marginRight=Yt,this.marginBottom=Zt,this.marginLeft=Qt,this.scaleType=re,this.domain=ee,this.range=ie,this.markType=ne,this.ticks=V,this.tickFormat=J,this.tickSize=te,this.colorScaleSetter=new Ht(this),this.axisTickSetter=new le(this),this.renderer=new Gt(this)}get interpolator(){return this._interpolator}set interpolator(i){if(typeof i=="function"){const e=this.interpolator;this._interpolator=i,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(i){if(typeof i=="function"){const e=this.tickFormatter;this._tickFormatter=i,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(i){ae.some(e=>i.has(e))&&this.colorScaleSetter.setColorScale(),oe.some(e=>i.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};d.styles=[ce];p([m({type:String})],d.prototype,"titleText",void 0);p([m({type:Number})],d.prototype,"width",void 0);p([m({type:Number})],d.prototype,"height",void 0);p([m({type:Number})],d.prototype,"marginTop",void 0);p([m({type:Number})],d.prototype,"marginRight",void 0);p([m({type:Number})],d.prototype,"marginBottom",void 0);p([m({type:Number})],d.prototype,"marginLeft",void 0);p([m({type:String})],d.prototype,"scaleType",void 0);p([m({type:Array})],d.prototype,"domain",void 0);p([m({type:Array})],d.prototype,"range",void 0);p([m({type:String})],d.prototype,"markType",void 0);p([m({type:Number})],d.prototype,"ticks",void 0);p([m({type:String})],d.prototype,"tickFormat",void 0);p([m({type:Number})],d.prototype,"tickSize",void 0);p([m({type:Array})],d.prototype,"tickValues",void 0);p([Wt("svg")],d.prototype,"svg",void 0);p([m({attribute:!1})],d.prototype,"interpolator",null);p([m({attribute:!1})],d.prototype,"tickFormatter",null);d=p([Nt("color-legend")],d);function he(t,i,e){const s=t.get("_jsonDefinition"),n=i.bands;if(!Et(s)||!n)return;const r=s.source.bands;JSON.stringify(n)!==JSON.stringify(r)&&H(e,At(e?.layers??[],t.get("id"),[{...s,source:{...s.source,bands:[...n]}}]))}function de(t,i){const[e,s]=t.split("?"),n=new URLSearchParams(s||"");for(const[a,o]of Object.entries(i))o!=null&&o!==""?n.set(a,o):n.delete(a);const r=n.toString();return r?`${e}?${r}`:e}function ue(t,i){const e=t.get("_jsonDefinition");if(!e||e.type!=="VectorTile"&&e.type!=="Vector")return!1;const s=e.properties?.layerConfig?.schema,n=jt(s,i);if(Object.keys(n).length===0)return!1;let r=t.get("originalUrl")||e.source?.url;if(!r||typeof r!="string"||r.startsWith("data:"))return!1;t.get("originalUrl")||t.set("originalUrl",r);const a=de(r,n);if(e.source?.url){if(e.source.url===a||(e.source.url=a,t.get("injectedUrl")===a))return!1;const o=t.getSource();if(t.set("injectedUrl",a),o)return"setUrl"in o?o.setUrl(a):"setUrls"in o&&o.setUrls([a]),"refresh"in o&&typeof o.refresh=="function"&&o.refresh(),!0}return!1}function X(t){return!(t===null||typeof t!="object"||t.nodeType||t===t.window||t.constructor&&!w(t.constructor.prototype,"isPrototypeOf"))}function K(t){return X(t)?E({},t):Array.isArray(t)?t.map(K):t}function E(t,...i){return i.forEach(e=>{e&&Object.keys(e).forEach(s=>{e[s]&&X(e[s])?(w(t,s)||(t[s]={}),E(t[s],e[s])):Array.isArray(e[s])?t[s]=K(e[s]):t[s]=e[s]})}),t}function w(t,i){return t&&Object.prototype.hasOwnProperty.call(t,i)}var fe=class{constructor(t,i){this.defaults=i,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=E({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,i){this.onChange(!0,!1,i)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,i,e){this.notify(),i||this.watch_listener&&this.watch_listener(),t&&this.change(e)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(i=>{let e;i.startsWith(this.jsoneditor.root.path)?e=i:(e=this.path.split("."),e[e.length-1]=i,e=e.join(".")),this.jsoneditor.watch(e,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const i=this.options.dependencies;if(!i)return;const e=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(i).forEach(n=>{let r;n.startsWith(this.jsoneditor.root.path)?r=n:(r=this.path.split("."),r[r.length-1]=n,r=r.join("."));const a=i[n];this.checkDependency(r,a)}),this.dependenciesFulfilled!==e&&this.notify();let s=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(s="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(n=>t.childNodes[n].style.display=s):t.style.display=s}checkDependency(t,i){if(this.path===t||this.jsoneditor===null)return;const e=this.jsoneditor.getEditor(t),s=e?e.getValue():void 0;!e||!e.dependenciesFulfilled||s===void 0||s===null?this.dependenciesFulfilled=!1:Array.isArray(i)?this.dependenciesFulfilled=i.some(n=>{if(JSON.stringify(s)===JSON.stringify(n))return!0}):typeof i=="object"?typeof s!="object"?this.dependenciesFulfilled=i===s:Object.keys(i).some(n=>{if(!w(i,n))return!1;if(!w(s,n)||i[n]!==s[n])return this.dependenciesFulfilled=!1,!0}):typeof i=="string"||typeof i=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&s===i:typeof i=="boolean"&&(i?this.dependenciesFulfilled=this.dependenciesFulfilled&&(s||s.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!s||s.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const i=this.jsoneditor.options.show_opt_in,e=typeof this.parent.options.show_opt_in<"u",s=e&&this.parent.options.show_opt_in===!0,n=e&&this.parent.options.show_opt_in===!1;(s||!n&&i||!e&&i)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},w(this.schema,"watch")){let t,i,e,s,n;const r=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(a=>{if(t=this.schema.watch[a],Array.isArray(t)){if(t.length<2)return;i=[t[0]].concat(t[1].split("."))}else i=t.split("."),this.theme.closest(this.container,`[data-schemaid="${i[0]}"]`)||i.unshift("#");if(e=i.shift(),e==="#"&&(e=this.jsoneditor.schema.id||this.jsoneditor.root.formname),s=this.theme.closest(this.container,`[data-schemaid="${e}"]`),!s)throw new Error(`Could not find ancestor node with id ${e}`);n=`${s.getAttribute("data-schemapath")}.${i.join(".")}`,r.startsWith(n)&&(this.watchLoop=!0),this.jsoneditor.watch(n,this.watch_listener),this.watched[a]=n})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,i,e,s=[]){const n=`json-editor-btn-${i}`;this.iconlib?i=this.iconlib.getIcon(i):i=null,t=this.translate(t,s),e=this.translate(e,s),!i&&e&&(t=e,e=null);const r=this.theme.getButton(t,i,e);return r.classList.add(n),r}setButtonText(t,i,e,s,n=[]){return this.iconlib?e=this.iconlib.getIcon(e):e=null,i=this.translate(i,n),s=this.translate(s,n),!e&&s&&(i=s,s=null),this.theme.setButtonText(t,i,e,s)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let i,e;const s=(t.mediaType||"application/javascript").split("/")[0],n=this.jsoneditor.compileTemplate(t.href,this.template_engine),r=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let a=null;if(t.download&&(a=t.download),a&&a!==!0&&(a=this.jsoneditor.compileTemplate(a,this.template_engine)),s==="image"){i=this.theme.getBlockLinkHolder(),e=document.createElement("a"),e.setAttribute("target","_blank");const o=document.createElement("img");this.theme.createImageLink(i,e,o),this.link_watchers.push(l=>{const c=n(l),h=r(l);e.setAttribute("href",c),e.setAttribute("title",h||c),o.setAttribute("src",c)})}else if(["audio","video"].includes(s)){i=this.theme.getBlockLinkHolder(),e=this.theme.getBlockLink(),e.setAttribute("target","_blank");const o=document.createElement(s);o.setAttribute("controls","controls"),this.theme.createMediaLink(i,e,o),this.link_watchers.push(l=>{const c=n(l),h=r(l);e.setAttribute("href",c),e.textContent=h||c,o.setAttribute("src",c)})}else e=i=this.theme.getBlockLink(),i.setAttribute("target","_blank"),i.textContent=t.rel,i.style.display="none",this.link_watchers.push(o=>{const l=n(o),c=r(o);l&&(i.style.display=""),i.setAttribute("href",l),i.textContent=c||l});return a&&e&&(a===!0?e.setAttribute("download",""):this.link_watchers.push(o=>{e.setAttribute("download",a(o))})),t.class&&t.class.split(" ").forEach(o=>{e.classList.add(o)}),i}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let i=!1;return this.watched&&Object.keys(this.watched).forEach(e=>{const s=this.jsoneditor.getEditor(this.watched[e]),n=s?s.getValue():null;this.watched_values[e]!==n&&(i=!0),t[e]=n}),t.self=this.getValue(),this.watched_values.self!==t.self&&(i=!0),this.watched_values=t,i}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let i=0;i<this.header.childNodes.length;i++)if(this.header.childNodes[i].nodeType===3){this.header.childNodes[i].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const i=document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=E(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(e=>{const s=this.editors[e];if(s.schema&&s.schema.enum&&s.schema.options&&s.schema.options.enum_titles){const n=s.schema.enum.indexOf(s.value);t.properties[e]={enumTitle:s.options.enum_titles[n]}}}));const i=this.header_template(t);i!==this.header_text&&(this.header_text=i,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let i=0;i<this.link_watchers.length;i++)this.link_watchers[i](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const i=[],e={};t.forEach(n=>{n.title&&(e[n.title]=e[n.title]||0,e[n.title]++),n.description&&(e[n.description]=e[n.description]||0,e[n.description]++),n.format&&(e[n.format]=e[n.format]||0,e[n.format]++),n.type&&(e[n.type]=e[n.type]||0,e[n.type]++)}),t.forEach(n=>{let r;typeof n=="string"?r=n:n.title&&e[n.title]<=1?r=n.title:n.format&&e[n.format]<=1?r=n.format:n.type&&e[n.type]<=1?r=n.type:n.description&&e[n.description]<=1?r=n.description:n.title?r=n.title:n.format?r=n.format:n.type?r=n.type:n.description?r=n.description:JSON.stringify(n).length<500?r=JSON.stringify(n):r="type",i.push(r)});const s={};return i.forEach((n,r)=>{s[n]=s[n]||0,s[n]++,e[n]>1&&(i[r]=`${n} ${s[n]}`)}),i}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,i){if(this.schema.options&&this.schema.options.inputAttributes){const e=this.schema.options.inputAttributes,s=["name","type"].concat(t),n=i||this.input;Object.keys(e).forEach(r=>{s.includes(r.toLowerCase())||n.setAttribute(r,e[r])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,i=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(e=>{i.includes(e.toLowerCase())||this.container.setAttribute(e,t[e])})}}expandCallbacks(t,i){const e=this.defaults.callbacks[t];return Object.entries(i).forEach(([s,n])=>{n===Object(n)?i[s]=this.expandCallbacks(t,n):typeof n=="string"&&typeof e=="object"&&typeof e[n]=="function"&&(i[s]=e[n].bind(null,this))}),i}showValidationErrors(t){}};function pe(t,i){const e=i==="bands"?t.items?.enum??[]:t.options?.enum??t.enum??[],s=i==="bands"?t.items?.options?.colors:t.options?.colors||[];return s&&s.length===e.length?s:e.map(n=>{let r=0;for(let a=0;a<n.length;a++)r=n.charCodeAt(a)+((r<<5)-r);return[16,8,0].map(a=>(r>>>a&255|128).toString(16)).reduce((a,o)=>a+o,"#")})}function me(t,i,e){const s=i.indexOf(t);return s!==-1?e[s]:"#000000"}function Y(t,i){const e=document.createElement("div");return e.dataset.band=t,e.textContent=i,e.draggable=!0,e.ondragstart=s=>{s.dataTransfer?.setData("band",t)},e}function Z(t,i,e){const s=document.createElement("div");s.classList.add("bands-palette"),i.forEach((n,r)=>{const a=e[r];s.appendChild(Y(n,a))}),t.control?.appendChild(s)}function Q(t,i){const e=document.createElement("style");return e.innerHTML=`
    /* Base styles for all band elements */
    [data-band] {
      display: inline-flex;
      border: 1px solid var(--outline, darkgrey);
      border-radius: 50%;
      height: 40px;
      aspect-ratio: 1/1;
      padding: 4px;
      margin: 2px;
      align-items: center;
      justify-content: center;
      cursor: move;
      font-size: 10px;
      font-weight: 500;
      transition: box-shadow 150ms ease;
    }
    [data-band]:hover {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }

    /* One card holding the palette and the slots */
    .bands-editor {
      background: var(--surface-container, #f0f0f0);
      border: 1px solid var(--outline-variant, #ccc);
      border-radius: 4px;
      padding: 12px;
      margin: 8px 0;
    }
    .bands-editor hr {
      border: none;
      border-top: 1px solid var(--outline-variant, #ccc);
      margin: 8px 0;
    }

    /* Centered palette of draggable bands */
    .bands-palette {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 4px;
      padding: 8px 0;
    }

    /* Band color styles */
    ${t.map(s=>`[data-band="${s}"] { background: ${me(s,t,i)}; color: black; }`).join(`
`)}

    /* Drop slot styles */
    [data-slot] {
      display: inline-flex;
      width: 50px;
      height: 50px;
      aspect-ratio: 1/1;
      padding: 1px;
      border: 2px solid var(--outline, #666);
      background: var(--surface-container-low, #f0f0f0);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 2px;
      position: relative;
      box-sizing: border-box;
      transition: border-color 150ms ease, background 150ms ease;
    }
    [data-slot]:hover {
      border-color: var(--primary, #333);
      background: var(--surface-container-high, #f9f9f9);
    }
    [data-slot]::before {
      content: attr(data-slot);
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: var(--on-surface-variant, #666);
      z-index: 0;
    }

    /* slots row inside the card */
    .slots-container {
      font-family: monospace;
      font-size: 18px;
      color: var(--on-surface, inherit);
      padding: 8px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4px;
    }

    .formula-text {
      font-size: 18px;
      margin: 0 2px;
    }

    /* RGB channel affordance */
    .rgb-slots [data-slot] {
      border-style: dashed;
    }
    .rgb-slots [data-slot="R"] { border-color: #e57373; }
    .rgb-slots [data-slot="G"] { border-color: #81c784; }
    .rgb-slots [data-slot="B"] { border-color: #64b5f6; }
  `,e}function tt(t,i){const e=document.createElement("div");return e.dataset.slot=t,e.ondrop=i,e.ondragover=s=>s.preventDefault(),e}function et(t,i,e){I(t),t.appendChild(Y(i,e))}function I(t){t.querySelector("[data-band]")?.remove()}function ge(t,i,e,s){const n=Q(e,i);t.control?.appendChild(n),Z(t,e,s),t.control?.appendChild(document.createElement("hr")),be(t)}function be(t){const i=document.createElement("div");i.classList.add("slots-container","rgb-slots"),t.rgbSlots=["R","G","B"].map((e,s)=>{const r=tt(e,a=>{a.preventDefault();const o=a.dataTransfer?.getData("band");if(!o)return;const l=[...t.getValue()||[]];l[s]=o,t.setValue(l),t.onChange(!0)});return i.appendChild(r),r}),t.control?.appendChild(i)}function ye(t){const i=t.getValue()||[];t.rgbSlots?.forEach((e,s)=>{const n=i[s];if(!n){I(e);return}et(e,n,t.bandTitles?.[t.bands?.indexOf(n)]||n)})}var it=/\{\{([^}]+)\}\}/g;function ve(t,i,e,s){const n=t.schema.formulaTemplate||"{{A}}",r=Q(e,i);t.control?.appendChild(r),Z(t,e,s),t.control?.appendChild(document.createElement("hr")),ke(t,n)}function we(t){const i=t.schema.formulaTemplate||"{{A}}",e=t.variableValues||{};return i.replace(it,(s,n)=>e[n.trim()]||s)}function D(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function st(t,i){const e=t.bands??[];if(!i||!e.length)return null;const s=t.schema.formulaTemplate||"{{A}}",n=[...e].sort((h,u)=>u.length-h.length).map(D).join("|"),r=[],a={},o=s.split(/(\{\{[^}]+\}\})/).map(h=>{const u=h.match(/^\{\{([^}]+)\}\}$/);if(!u)return D(h);const f=u[1].trim();return a[f]?`\\${a[f]}`:(r.push(f),a[f]=r.length,`(${n}|${D(h)})`)}).join(""),l=i.match(new RegExp(`^${o}$`));if(!l)return null;const c={};return r.forEach((h,u)=>{const f=l[u+1];f&&!f.startsWith("{{")&&(c[h]=f)}),c}function ke(t,i){const e=document.createElement("div");e.classList.add("slots-container"),t.variableSlots={},i.split(/(\{\{[^}]+\}\})/).forEach(s=>{if(!s)return;if(!s.match(it)){if(s=s.trim(),s){const a=document.createElement("span");a.classList.add("formula-text"),a.textContent=s,e.appendChild(a)}return}const n=s.replace(/[{}]/g,"").trim(),r=tt(n,a=>{a.preventDefault();const o=a.dataTransfer?.getData("band");o&&(t.variableValues[n]=o,t.setValue(we(t)),t.onChange(!0))});e.appendChild(r),t.variableSlots[n]||(t.variableSlots[n]=[]),t.variableSlots[n].push(r)}),t.control?.appendChild(e)}function xe(t){t.variableValues={...st(t,t.getValue())??t.options?.defaultVariables??{}},Object.keys(t.variableSlots??{}).forEach(i=>{const e=t.variableSlots[i],s=t.variableValues[i];if(!s){e.forEach(I);return}const n=t.bandTitles?.[t.bands?.indexOf(s)]||s;e.forEach(r=>et(r,s,n))})}var W=class nt extends fe{variableSlots={};rgbSlots=[];variableValues={};bands=[];bandTitles=[];colors=[];build(){if(super.build(),this.schema.watch)return;const i=this.schema.format||"bands";this.bands=i==="bands"?this.schema.items?.enum:this.schema.options?.enum??this.schema.enum??[],this.bandTitles=i==="bands"?this.schema.items?.options?.enum_titles:this.schema.options?.enum_titles||this.bands,this.colors=pe(this.schema,i),this.control=document.createElement("div"),this.control.classList.add("form-control","bands-editor"),i==="bands"?ge(this,this.colors,this.bands,this.bandTitles):i==="bands-arithmetic"&&ve(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",this.container?.appendChild(this.label),this.container?.appendChild(this.control)}setValue(i){super.setValue(i),(this.schema.format||"bands")==="bands"?ye(this):xe(this)}onWatchedFieldChange(){super.onWatchedFieldChange();const{watched:i,jsoneditor:e,path:s}=this,[n]=Object.values(i??{}),r=n&&e.getEditor(n);if(!(r instanceof nt))return;const a=st(r,r.getValue());if(!a)return;const o=[...new Set(Object.values(a))],l=s.slice(0,s.lastIndexOf("."));let c=JSON.stringify(o)!==JSON.stringify(this.getValue());for(const[h,u]of Object.entries(a)){const f=o.indexOf(u)+1,g=e.getEditor(`${l}.${h}`);g&&g.getValue()!==f&&(g.setValue(f),c=!0)}c&&(this.setValue(o),this.onChange(!0))}},_e=[{type:"array",format:"bands",func:W},{type:"string",format:"bands-arithmetic",func:W}],Te="eox-layercontrol[data-v-c07df6af]{overflow:auto}",Ce={class:"d-flex flex-column"},Se=["for",".tools",".colormapRegistry",".customEditorInterfaces"],Ee={slot:"layerstitle",class:"d-flex justify-space-between ma-2 pa-2 flex-shrink-0"},Ae={key:0},Me=ft({__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:[String,Boolean],default:"Layers"},cssVars:{type:Object,default:()=>({})},layoutIcon:{type:String,default:pt},layoutTarget:{type:String},datetimeDebounce:{type:Number,default:500}},async setup(t){let i,e;customElements.get("eox-layercontrol")||([i,e]=P(()=>U(()=>import("./main-BaVSXiCs.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),await i,e()),customElements.get("eox-jsonform")||([i,e]=P(()=>U(()=>import("./main-5T364o-N.js"),__vite__mapDeps([9,1,2,3,10,11,12,13]))),await i,e());const s=t,n=q(()=>!!s.layoutTarget&&!!s.layoutIcon),{selectedCompareStac:r,selectedStac:a,colormapRegistry:o}=mt(gt()),l=q(()=>s.map==="second"?N.value!==null&&r.value!==null:z.value!==null&&a.value!==null),c=s.map==="second"?bt:yt,h=s.map==="second"?N:z,u=async b=>{const{layer:y,datetime:k}=b.detail;if(y.get("layerDatetime")?.sliceMap)return;const x=M(c,y.get("id"));if(!x)return;const{layers:A,projections:ot}=await x.updateLayers(k,y.get("id"),h.value?.layers??[]);if(!A.length)return;await Ct(ot);const R=A.find(_=>_?.properties?.id===St),B=R?.type==="Group"?R.layers:void 0;B?.length&&(B.forEach(_=>{_.properties.layerControlExpand=!0,_.properties.layerControlToolsExpand=!0}),await H(h.value,A,s.map==="second"?"compareLayertime:updated":"layertime:updated"))};let f,g;const rt=b=>{clearTimeout(f),f=setTimeout(()=>{u(b)},s.datetimeDebounce)},at=b=>{he(b.detail.layer,b.detail.jsonformValue,h.value);const{layer:y,jsonformValue:k}=b.detail;clearTimeout(g),g=setTimeout(()=>{ue(y,k)},300);const x=y.get("_jsonDefinition")?.properties?.layerConfig;M(c,y.get("id"))?.persistLayerConfig(x,k),s.map==="second"?_t.value=b.detail.jsonformValue:Tt.value=b.detail.jsonformValue};return(b,y)=>(C(),j("span",Ce,[l.value?(C(),j("eox-layercontrol",{key:S(h),style:vt(t.cssVars),for:S(h),".tools":t.tools,".colormapRegistry":S(o),".showLayerZoomState":!0,".customEditorInterfaces":S(_e),toolsAsList:"true","onDatetime:updated":rt,"on:layerConfig:change":at},[wt("span",Ee,[t.title?(C(),j("h4",Ae,kt(t.title),1)):L("v-if",!0),n.value?(C(),xt(Lt,{key:1,target:t.layoutTarget,icon:t.layoutIcon},null,8,["target","icon"])):L("v-if",!0)])],44,Se)):L("v-if",!0)]))}},[["styles",[Te]],["__scopeId","data-v-c07df6af"]]);export{Me as default};
