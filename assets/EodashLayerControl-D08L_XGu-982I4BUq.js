const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-D-QEgDkg.js","assets/index-DrL8z8X7.js","assets/index-BmJaLv9B.css","assets/when-CI7b_ccM.js","assets/index-_VUkhWWZ.js","assets/directive-CwRn8Fwj.js","assets/directive-helpers-CBQ1F2MM.js","assets/unsafe-html-CSwoxV1u.js","assets/map-Bv-shLAs.js","assets/main-CGwuIZ9J.js","assets/toolcool-range-slider.min-BO3Tl_nj.js","assets/utils-BYKSO__W.js","assets/index-Dm-aC8c8.js","assets/index-CbwLqlzm.js"])))=>i.map(i=>d[i]);
import{b8 as at,b9 as ot,ba as lt,bb as x,bc as v,bd as ct,be as ht,_ as dt,aH as ut,aI as P,b2 as U,af as pt,ag as ft,ap as mt,ao as gt,aJ as N,aK as z,c as T,g as j,m as bt,e as C,j as yt,t as vt,f as L,d as wt,O as q,bf as M,bg as kt,bh as _t,bi as xt,b0 as Tt,bj as W,bk as Ct,bl as St,bm as Et}from"./index-DrL8z8X7.js";import At from"./EodashLayoutSwitcher-DxBN1ulD-CV2TynLA.js";import"./main-BYv-Tmr9.js";import{s as jt,l as F,i as $,a as Lt,b as G,q as Ot,t as Dt,o as Ft,p as $t,f as Vt}from"./sequential-DDW98mYE.js";import{e as It,i as Rt,t as Bt}from"./directive-CwRn8Fwj.js";import"./VTooltip-DUnrzfN9-GyZlbqTx.js";import"./forwardRefs-COX7gqhL-DbJYFmqM.js";import"./transition-QErrbuqk-CM8ayyeE.js";import"./dayjs.min-B1rUanBW.js";import"./when-CI7b_ccM.js";import"./map-Bv-shLAs.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import"./index-CbwLqlzm.js";const Pt=t=>(i,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,i)}):customElements.define(t,i)};const Ut={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:at},Nt=(t=Ut,i,e)=>{const{kind:s,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(e.name,t),s==="accessor"){const{name:a}=e;return{set(o){const l=i.get.call(this);i.set.call(this,o),this.requestUpdate(a,l,t,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,t,o),o}}}if(s==="setter"){const{name:a}=e;return function(o){const l=this[a];i.call(this,o),this.requestUpdate(a,l,t,!0,o)}}throw Error("Unsupported decorator location: "+s)};function f(t){return(i,e)=>typeof e=="object"?Nt(t,i,e):((s,r,n)=>{const a=r.hasOwnProperty(n);return r.constructor.createProperty(n,s),a?Object.getOwnPropertyDescriptor(r,n):void 0})(t,i,e)}const zt=(t,i,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(t,i,e),e);function qt(t,i){return(e,s,r)=>{const n=a=>a.renderRoot?.querySelector(t)??null;return zt(e,s,{get(){return n(this)}})}}class Mt{constructor(i){this.cle=i}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:i,domain:e,range:s}=this.cle;this.colorScale=i?jt(i).domain(e):F().range(s).domain(e).interpolate($)}setLogColorScale(){const{interpolator:i,domain:e,range:s}=this.cle;this.colorScale=i?Lt(i).domain(e):G().range(s).domain(e).interpolate($)}setDiscreteColorScale(){this.colorScale=Ot().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const i=this.cle.domain;this.colorScale=Dt().domain(i.slice(1,i.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Ft().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(i){throw new Error(`invalid property scaletype: ${i}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}const O=It(class extends Rt{constructor(t){if(super(t),t.type!==Bt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in i)i[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(i)}const e=t.element.classList;for(const s of this.st)s in i||(e.remove(s),this.st.delete(s));for(const s in i){const r=!!i[s];r===this.st.has(s)||this.nt?.has(s)||(r?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return lt}});class Ht{constructor(i){this.cle=i}render(){const i=this.cle.titleText?x`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},s={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return x`<div
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
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:i,colorScale:e,domain:s}=this.cle,r={"legend-item":!0,line:i==="line",circle:i==="circle"};return x`${s.map(n=>x`<li
          class=${O(r)}
          style="--color:${e(n)}"
        >
          ${n}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:i,marginTop:e,marginLeft:s,marginRight:r,tickSize:n,width:a,range:o}=this.cle,l=this.cle.marginBottom+n,c=this.cle.height+n,u=i.interpolator?.()||$t($,o);return v`<image
      x=${s}
      y=${e}
      width=${a-r-s}
      height=${c-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:i,marginTop:e,marginLeft:s,colorScale:r,xScale:n}=this.cle,a=this.cle.height+i,o=this.cle.marginBottom+i,l=r.range(),c=h=>r.invertExtent(h).map(n)[0]||s,u=h=>{let[m,b]=r.invertExtent(h).map(n);return m=m||0,b=b||n.range()[1],b-m};return v`${l.map(h=>v`<rect x=${c(h)} y=${e} width=${u(h)} height=${a-e-o} fill=${h}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:i,tickSize:e,tickFormat:s,tickFormatter:r,tickValues:n,xScale:a,marginTop:o}=this.cle,l=this.cle.height+e,c=this.cle.marginBottom+e,u=n?.length?n:a.ticks.apply(a,[i,s]),h=Math.max(e,0)+3,m=()=>u.map(b=>v`<g class="tick" transform='translate(${a(b)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${o+c-l}"></line>
      <text fill="currentColor" y="${h}" dy="0.71em">${r(b)}</text>
      </g>`);return v`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${m()}</g>`}getColorRamp(i,e=256){const s=document.createElement("canvas");s.setAttribute("height","1"),s.setAttribute("width",`${e}`);const r=s.getContext("2d");for(let n=0;n<e;n++)r.fillStyle=i(n/(e-1)),r.fillRect(n,0,1,1);return s}}const Wt=325,Gt=32,Jt=6,Kt=12,Xt=16,Yt=12,V=5,Zt=6,J=".1f",Qt=[0,1],te=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],ee="Color Legend Element",ie="circle",se="continuous",re=["domain","range","interpolator","scaleType"],ne=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class ae{constructor(i){this.cle=i}setXScale(){const{scaleType:i,marginLeft:e,width:s,marginRight:r}=this.cle;switch(i){case"continuous":this.xScale=F().domain(this.cle.domain).range([e,s-r]);break;case"log10":this.xScale=G().domain(this.cle.domain).range([e,s-r]).nice();break;case"discrete":case"threshold":this.xScale=F().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,s-r]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${i}`)}}handleAxisTicks(){if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||V);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[i,e]=this.xScale.domain();this.cle.tickValues=[i,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),e]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=Vt(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||V,this.cle.tickFormat||J))}}const oe=ct`
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
`;var p=function(t,i,e,s){var r=arguments.length,n=r<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,i,e,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(r<3?a(n):r>3?a(i,e,n):a(i,e))||n);return r>3&&n&&Object.defineProperty(i,e,n),n};let d=class extends ht{constructor(){super(...arguments),this.titleText=ee,this.width=Wt,this.height=Gt,this.marginTop=Jt,this.marginRight=Kt,this.marginBottom=Xt,this.marginLeft=Yt,this.scaleType=se,this.domain=Qt,this.range=te,this.markType=ie,this.ticks=V,this.tickFormat=J,this.tickSize=Zt,this.colorScaleSetter=new Mt(this),this.axisTickSetter=new ae(this),this.renderer=new Ht(this)}get interpolator(){return this._interpolator}set interpolator(i){if(typeof i=="function"){const e=this.interpolator;this._interpolator=i,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(i){if(typeof i=="function"){const e=this.tickFormatter;this._tickFormatter=i,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(i){re.some(e=>i.has(e))&&this.colorScaleSetter.setColorScale(),ne.some(e=>i.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};d.styles=[oe];p([f({type:String})],d.prototype,"titleText",void 0);p([f({type:Number})],d.prototype,"width",void 0);p([f({type:Number})],d.prototype,"height",void 0);p([f({type:Number})],d.prototype,"marginTop",void 0);p([f({type:Number})],d.prototype,"marginRight",void 0);p([f({type:Number})],d.prototype,"marginBottom",void 0);p([f({type:Number})],d.prototype,"marginLeft",void 0);p([f({type:String})],d.prototype,"scaleType",void 0);p([f({type:Array})],d.prototype,"domain",void 0);p([f({type:Array})],d.prototype,"range",void 0);p([f({type:String})],d.prototype,"markType",void 0);p([f({type:Number})],d.prototype,"ticks",void 0);p([f({type:String})],d.prototype,"tickFormat",void 0);p([f({type:Number})],d.prototype,"tickSize",void 0);p([f({type:Array})],d.prototype,"tickValues",void 0);p([qt("svg")],d.prototype,"svg",void 0);p([f({attribute:!1})],d.prototype,"interpolator",null);p([f({attribute:!1})],d.prototype,"tickFormatter",null);d=p([Pt("color-legend")],d);function le(t,i,e){const s=t.get("_jsonDefinition"),r=i.bands;if(!Ct(s)||!r)return;const n=s.source.bands;JSON.stringify(r)!==JSON.stringify(n)&&W(e,St(e?.layers??[],t.get("id"),[{...s,source:{...s.source,bands:[...r]}}]))}function ce(t,i){const[e,s]=t.split("?"),r=new URLSearchParams(s||"");for(const[a,o]of Object.entries(i))o!=null&&o!==""?r.set(a,o):r.delete(a);const n=r.toString();return n?`${e}?${n}`:e}function he(t,i){const e=t.get("_jsonDefinition");if(!e||e.type!=="VectorTile")return!1;const s=e.properties?.layerConfig?.schema,r=Et(s);if(Object.keys(r).length===0)return!1;let n=t.get("originalUrl")||e.source?.url;if(!n||typeof n!="string")return!1;t.get("originalUrl")||t.set("originalUrl",n);const a={};for(const[l,c]of Object.entries(r))a[c]=i[l];const o=ce(n,a);if(e.source?.url){if(e.source.url===o||(e.source.url=o,t.get("injectedUrl")===o))return!1;const l=t.getSource();if(t.set("injectedUrl",o),l&&"setUrl"in l)return l.setUrl(o),!0;if(l&&"setUrls"in l)return l.setUrls([o]),!0}return!1}function K(t){return!(t===null||typeof t!="object"||t.nodeType||t===t.window||t.constructor&&!w(t.constructor.prototype,"isPrototypeOf"))}function X(t){return K(t)?S({},t):Array.isArray(t)?t.map(X):t}function S(t,...i){return i.forEach(e=>{e&&Object.keys(e).forEach(s=>{e[s]&&K(e[s])?(w(t,s)||(t[s]={}),S(t[s],e[s])):Array.isArray(e[s])?t[s]=X(e[s]):t[s]=e[s]})}),t}function w(t,i){return t&&Object.prototype.hasOwnProperty.call(t,i)}var de=class{constructor(t,i){this.defaults=i,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=S({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,i){this.onChange(!0,!1,i)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,i,e){this.notify(),i||this.watch_listener&&this.watch_listener(),t&&this.change(e)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(i=>{let e;i.startsWith(this.jsoneditor.root.path)?e=i:(e=this.path.split("."),e[e.length-1]=i,e=e.join(".")),this.jsoneditor.watch(e,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const i=this.options.dependencies;if(!i)return;const e=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(i).forEach(r=>{let n;r.startsWith(this.jsoneditor.root.path)?n=r:(n=this.path.split("."),n[n.length-1]=r,n=n.join("."));const a=i[r];this.checkDependency(n,a)}),this.dependenciesFulfilled!==e&&this.notify();let s=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(s="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(r=>t.childNodes[r].style.display=s):t.style.display=s}checkDependency(t,i){if(this.path===t||this.jsoneditor===null)return;const e=this.jsoneditor.getEditor(t),s=e?e.getValue():void 0;!e||!e.dependenciesFulfilled||s===void 0||s===null?this.dependenciesFulfilled=!1:Array.isArray(i)?this.dependenciesFulfilled=i.some(r=>{if(JSON.stringify(s)===JSON.stringify(r))return!0}):typeof i=="object"?typeof s!="object"?this.dependenciesFulfilled=i===s:Object.keys(i).some(r=>{if(!w(i,r))return!1;if(!w(s,r)||i[r]!==s[r])return this.dependenciesFulfilled=!1,!0}):typeof i=="string"||typeof i=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&s===i:typeof i=="boolean"&&(i?this.dependenciesFulfilled=this.dependenciesFulfilled&&(s||s.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!s||s.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const i=this.jsoneditor.options.show_opt_in,e=typeof this.parent.options.show_opt_in<"u",s=e&&this.parent.options.show_opt_in===!0,r=e&&this.parent.options.show_opt_in===!1;(s||!r&&i||!e&&i)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},w(this.schema,"watch")){let t,i,e,s,r;const n=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(a=>{if(t=this.schema.watch[a],Array.isArray(t)){if(t.length<2)return;i=[t[0]].concat(t[1].split("."))}else i=t.split("."),this.theme.closest(this.container,`[data-schemaid="${i[0]}"]`)||i.unshift("#");if(e=i.shift(),e==="#"&&(e=this.jsoneditor.schema.id||this.jsoneditor.root.formname),s=this.theme.closest(this.container,`[data-schemaid="${e}"]`),!s)throw new Error(`Could not find ancestor node with id ${e}`);r=`${s.getAttribute("data-schemapath")}.${i.join(".")}`,n.startsWith(r)&&(this.watchLoop=!0),this.jsoneditor.watch(r,this.watch_listener),this.watched[a]=r})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,i,e,s=[]){const r=`json-editor-btn-${i}`;this.iconlib?i=this.iconlib.getIcon(i):i=null,t=this.translate(t,s),e=this.translate(e,s),!i&&e&&(t=e,e=null);const n=this.theme.getButton(t,i,e);return n.classList.add(r),n}setButtonText(t,i,e,s,r=[]){return this.iconlib?e=this.iconlib.getIcon(e):e=null,i=this.translate(i,r),s=this.translate(s,r),!e&&s&&(i=s,s=null),this.theme.setButtonText(t,i,e,s)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let i,e;const s=(t.mediaType||"application/javascript").split("/")[0],r=this.jsoneditor.compileTemplate(t.href,this.template_engine),n=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let a=null;if(t.download&&(a=t.download),a&&a!==!0&&(a=this.jsoneditor.compileTemplate(a,this.template_engine)),s==="image"){i=this.theme.getBlockLinkHolder(),e=document.createElement("a"),e.setAttribute("target","_blank");const o=document.createElement("img");this.theme.createImageLink(i,e,o),this.link_watchers.push(l=>{const c=r(l),u=n(l);e.setAttribute("href",c),e.setAttribute("title",u||c),o.setAttribute("src",c)})}else if(["audio","video"].includes(s)){i=this.theme.getBlockLinkHolder(),e=this.theme.getBlockLink(),e.setAttribute("target","_blank");const o=document.createElement(s);o.setAttribute("controls","controls"),this.theme.createMediaLink(i,e,o),this.link_watchers.push(l=>{const c=r(l),u=n(l);e.setAttribute("href",c),e.textContent=u||c,o.setAttribute("src",c)})}else e=i=this.theme.getBlockLink(),i.setAttribute("target","_blank"),i.textContent=t.rel,i.style.display="none",this.link_watchers.push(o=>{const l=r(o),c=n(o);l&&(i.style.display=""),i.setAttribute("href",l),i.textContent=c||l});return a&&e&&(a===!0?e.setAttribute("download",""):this.link_watchers.push(o=>{e.setAttribute("download",a(o))})),t.class&&t.class.split(" ").forEach(o=>{e.classList.add(o)}),i}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let i=!1;return this.watched&&Object.keys(this.watched).forEach(e=>{const s=this.jsoneditor.getEditor(this.watched[e]),r=s?s.getValue():null;this.watched_values[e]!==r&&(i=!0),t[e]=r}),t.self=this.getValue(),this.watched_values.self!==t.self&&(i=!0),this.watched_values=t,i}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let i=0;i<this.header.childNodes.length;i++)if(this.header.childNodes[i].nodeType===3){this.header.childNodes[i].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const i=document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=S(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(e=>{const s=this.editors[e];if(s.schema&&s.schema.enum&&s.schema.options&&s.schema.options.enum_titles){const r=s.schema.enum.indexOf(s.value);t.properties[e]={enumTitle:s.options.enum_titles[r]}}}));const i=this.header_template(t);i!==this.header_text&&(this.header_text=i,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let i=0;i<this.link_watchers.length;i++)this.link_watchers[i](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const i=[],e={};t.forEach(r=>{r.title&&(e[r.title]=e[r.title]||0,e[r.title]++),r.description&&(e[r.description]=e[r.description]||0,e[r.description]++),r.format&&(e[r.format]=e[r.format]||0,e[r.format]++),r.type&&(e[r.type]=e[r.type]||0,e[r.type]++)}),t.forEach(r=>{let n;typeof r=="string"?n=r:r.title&&e[r.title]<=1?n=r.title:r.format&&e[r.format]<=1?n=r.format:r.type&&e[r.type]<=1?n=r.type:r.description&&e[r.description]<=1?n=r.description:r.title?n=r.title:r.format?n=r.format:r.type?n=r.type:r.description?n=r.description:JSON.stringify(r).length<500?n=JSON.stringify(r):n="type",i.push(n)});const s={};return i.forEach((r,n)=>{s[r]=s[r]||0,s[r]++,e[r]>1&&(i[n]=`${r} ${s[r]}`)}),i}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,i){if(this.schema.options&&this.schema.options.inputAttributes){const e=this.schema.options.inputAttributes,s=["name","type"].concat(t),r=i||this.input;Object.keys(e).forEach(n=>{s.includes(n.toLowerCase())||r.setAttribute(n,e[n])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,i=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(e=>{i.includes(e.toLowerCase())||this.container.setAttribute(e,t[e])})}}expandCallbacks(t,i){const e=this.defaults.callbacks[t];return Object.entries(i).forEach(([s,r])=>{r===Object(r)?i[s]=this.expandCallbacks(t,r):typeof r=="string"&&typeof e=="object"&&typeof e[r]=="function"&&(i[s]=e[r].bind(null,this))}),i}showValidationErrors(t){}};function ue(t,i){const e=i==="bands"?t.items?.enum??[]:t.options?.enum??t.enum??[],s=i==="bands"?t.items?.options?.colors:t.options?.colors||[];return s&&s.length===e.length?s:e.map(r=>{let n=0;for(let a=0;a<r.length;a++)n=r.charCodeAt(a)+((n<<5)-n);return[16,8,0].map(a=>(n>>>a&255|128).toString(16)).reduce((a,o)=>a+o,"#")})}function pe(t,i,e){const s=i.indexOf(t);return s!==-1?e[s]:"#000000"}function Y(t,i){const e=document.createElement("div");return e.dataset.band=t,e.textContent=i,e.draggable=!0,e.ondragstart=s=>{s.dataTransfer?.setData("band",t)},e}function Z(t,i,e){const s=document.createElement("div");s.classList.add("bands-palette"),i.forEach((r,n)=>{const a=e[n];s.appendChild(Y(r,a))}),t.control?.appendChild(s)}function Q(t,i){const e=document.createElement("style");return e.innerHTML=`
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
    ${t.map(s=>`[data-band="${s}"] { background: ${pe(s,t,i)}; color: black; }`).join(`
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
  `,e}function tt(t,i){const e=document.createElement("div");return e.dataset.slot=t,e.ondrop=i,e.ondragover=s=>s.preventDefault(),e}function et(t,i,e){I(t),t.appendChild(Y(i,e))}function I(t){t.querySelector("[data-band]")?.remove()}function fe(t,i,e,s){const r=Q(e,i);t.control?.appendChild(r),Z(t,e,s),t.control?.appendChild(document.createElement("hr")),me(t)}function me(t){const i=document.createElement("div");i.classList.add("slots-container","rgb-slots"),t.rgbSlots=["R","G","B"].map((e,s)=>{const n=tt(e,a=>{a.preventDefault();const o=a.dataTransfer?.getData("band");if(!o)return;const l=[...t.getValue()||[]];l[s]=o,t.setValue(l),t.onChange(!0)});return i.appendChild(n),n}),t.control?.appendChild(i)}function ge(t){const i=t.getValue()||[];t.rgbSlots?.forEach((e,s)=>{const r=i[s];if(!r){I(e);return}et(e,r,t.bandTitles?.[t.bands?.indexOf(r)]||r)})}var it=/\{\{([^}]+)\}\}/g;function be(t,i,e,s){const r=t.schema.formulaTemplate||"{{A}}",n=Q(e,i);t.control?.appendChild(n),Z(t,e,s),t.control?.appendChild(document.createElement("hr")),we(t,r)}function ye(t){const i=t.schema.formulaTemplate||"{{A}}",e=t.variableValues||{};return i.replace(it,(s,r)=>e[r.trim()]||s)}function D(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ve(t,i){const e=t.bands??[];if(!i||!e.length)return null;const s=t.schema.formulaTemplate||"{{A}}",r=[...e].sort((u,h)=>h.length-u.length).map(D).join("|"),n=[],a={},o=s.split(/(\{\{[^}]+\}\})/).map(u=>{const h=u.match(/^\{\{([^}]+)\}\}$/);if(!h)return D(u);const m=h[1].trim();return a[m]?`\\${a[m]}`:(n.push(m),a[m]=n.length,`(${r}|${D(u)})`)}).join(""),l=i.match(new RegExp(`^${o}$`));if(!l)return null;const c={};return n.forEach((u,h)=>{const m=l[h+1];m&&!m.startsWith("{{")&&(c[u]=m)}),c}function we(t,i){const e=document.createElement("div");e.classList.add("slots-container"),t.variableSlots={},i.split(/(\{\{[^}]+\}\})/).forEach(s=>{if(!s)return;if(!s.match(it)){if(s=s.trim(),s){const a=document.createElement("span");a.classList.add("formula-text"),a.textContent=s,e.appendChild(a)}return}const r=s.replace(/[{}]/g,"").trim(),n=tt(r,a=>{a.preventDefault();const o=a.dataTransfer?.getData("band");o&&(t.variableValues[r]=o,t.setValue(ye(t)),t.onChange(!0))});e.appendChild(n),t.variableSlots[r]||(t.variableSlots[r]=[]),t.variableSlots[r].push(n)}),t.control?.appendChild(e)}function ke(t){t.variableValues={...ve(t,t.getValue())??t.options?.defaultVariables??{}},Object.keys(t.variableSlots??{}).forEach(i=>{const e=t.variableSlots[i],s=t.variableValues[i];if(!s){e.forEach(I);return}const r=t.bandTitles?.[t.bands?.indexOf(s)]||s;e.forEach(n=>et(n,s,r))})}var H=class extends de{variableSlots={};rgbSlots=[];variableValues={};bands=[];bandTitles=[];colors=[];build(){super.build();const t=this.schema.format||"bands";this.bands=t==="bands"?this.schema.items?.enum:this.schema.options?.enum??this.schema.enum??[],this.bandTitles=t==="bands"?this.schema.items?.options?.enum_titles:this.schema.options?.enum_titles||this.bands,this.colors=ue(this.schema,t),this.control=document.createElement("div"),this.control.classList.add("form-control","bands-editor"),t==="bands"?fe(this,this.colors,this.bands,this.bandTitles):t==="bands-arithmetic"&&be(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",this.container?.appendChild(this.label),this.container?.appendChild(this.control)}setValue(t){super.setValue(t),(this.schema.format||"bands")==="bands"?ge(this):ke(this)}},_e=[{type:"array",format:"bands",func:H},{type:"string",format:"bands-arithmetic",func:H}],xe="eox-layercontrol[data-v-570eac89]{overflow:auto}",Te={class:"d-flex flex-column"},Ce=["for",".colormapRegistry",".customEditorInterfaces"],Se={slot:"layerstitle",class:"d-flex justify-space-between ma-2 pa-2 flex-shrink-0"},Ee={key:0},ze=dt({__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:[String,Boolean],default:"Layers"},cssVars:{type:Object,default:()=>({})},layoutIcon:{type:String,default:ut},layoutTarget:{type:String},datetimeDebounce:{type:Number,default:500}},async setup(t){let i,e;customElements.get("eox-layercontrol")||([i,e]=P(()=>U(()=>import("./main-D-QEgDkg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),await i,e()),customElements.get("eox-jsonform")||([i,e]=P(()=>U(()=>import("./main-CGwuIZ9J.js"),__vite__mapDeps([9,1,2,3,10,11,12,13]))),await i,e());const s=t,r={tools:s.tools,style:s.cssVars},n=q(()=>!!s.layoutTarget&&!!s.layoutIcon),{selectedCompareStac:a,selectedStac:o,colormapRegistry:l}=pt(ft()),c=q(()=>s.map==="second"?N.value!==null&&a.value!==null:z.value!==null&&o.value!==null),u=s.map==="second"?mt:gt,h=s.map==="second"?N:z,m=async g=>{const{layer:y,datetime:E}=g.detail,k=M(u,y.get("id"));if(!k)return;const{layers:A,projections:nt}=await k.updateLayers(E,y.get("id"),h.value?.layers??[]);if(!A.length)return;await xt(nt);const R=A.find(_=>_?.properties?.id===Tt),B=R?.type==="Group"?R.layers:void 0;B?.length&&(B.forEach(_=>{_.properties.layerControlExpand=!0,_.properties.layerControlToolsExpand=!0}),await W(h.value,A,s.map==="second"?"compareLayertime:updated":"layertime:updated"))};let b;const st=g=>{clearTimeout(b),b=setTimeout(()=>{m(g)},s.datetimeDebounce)},rt=g=>{le(g.detail.layer,g.detail.jsonformValue,h.value),he(g.detail.layer,g.detail.jsonformValue);const{layer:y,jsonformValue:E}=g.detail,k=y.get("_jsonDefinition")?.properties?.layerConfig;M(u,y.get("id"))?.persistLayerConfig(k,E),s.map==="second"?kt.value=g.detail.jsonformValue:_t.value=g.detail.jsonformValue};return(g,y)=>(T(),j("span",Te,[c.value?(T(),j("eox-layercontrol",bt({key:C(h)},r,{for:C(h),".colormapRegistry":C(l),".showLayerZoomState":!0,".customEditorInterfaces":C(_e),toolsAsList:"true","onDatetime:updated":st,"on:layerConfig:change":rt}),[yt("span",Se,[t.title?(T(),j("h4",Ee,vt(t.title),1)):L("v-if",!0),n.value?(T(),wt(At,{key:1,target:t.layoutTarget,icon:t.layoutIcon},null,8,["target","icon"])):L("v-if",!0)])],48,Ce)):L("v-if",!0)]))}},[["styles",[xe]],["__scopeId","data-v-570eac89"]]);export{ze as default};
