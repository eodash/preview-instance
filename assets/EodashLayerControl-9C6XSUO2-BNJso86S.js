const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DzSNfyRU.js","assets/index-BmJaLv9B.css","assets/main-BjnMUtfW.js","assets/toolcool-range-slider.min-BO3Tl_nj.js","assets/utils-BYKSO__W.js","assets/index-Dm-aC8c8.js","assets/index-Dyjk7YG9.js"])))=>i.map(i=>d[i]);
import{b4 as st,b5 as at,b6 as nt,b7 as rt,b8 as ot,b9 as lt,ba as x,bb as v,bc as ct,bd as ht,_ as dt,aG as ut,aH as B,a_ as P,af as pt,ag as ft,ao as mt,an as gt,aJ as N,aK as z,c as _,g as S,m as bt,e as T,j as yt,t as vt,f as A,d as wt,O as U,k as kt,be as xt,bf as _t,bg as Tt,bh as Ct,bi as Et,bj as St,aV as At,bk as jt}from"./index-DzSNfyRU.js";import Lt from"./EodashLayoutSwitcher-CFT3gTJE-BdxDlYAz.js";import"./main-Biwdn4NK.js";import{s as Ft,l as F,i as D,a as Dt,b as q,q as Ot,t as $t,o as Vt,p as Rt,f as It}from"./sequential-DDW98mYE.js";import"./VTooltip-Bp5OQWRx-B2S_ZvhG.js";import"./forwardRefs-CiCrugIF-BGsmAMT8.js";import"./transition-CalG0CWZ-B3uJjFlf.js";import"./dayjs.min-Bqq0LmC6.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import"./index-Dyjk7YG9.js";const Bt=t=>(i,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,i)}):customElements.define(t,i)};const Pt={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:st},Nt=(t=Pt,i,e)=>{const{kind:s,metadata:a}=e;let n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(e.name,t),s==="accessor"){const{name:r}=e;return{set(o){const l=i.get.call(this);i.set.call(this,o),this.requestUpdate(r,l,t,!0,o)},init(o){return o!==void 0&&this.C(r,void 0,t,o),o}}}if(s==="setter"){const{name:r}=e;return function(o){const l=this[r];i.call(this,o),this.requestUpdate(r,l,t,!0,o)}}throw Error("Unsupported decorator location: "+s)};function f(t){return(i,e)=>typeof e=="object"?Nt(t,i,e):((s,a,n)=>{const r=a.hasOwnProperty(n);return a.constructor.createProperty(n,s),r?Object.getOwnPropertyDescriptor(a,n):void 0})(t,i,e)}const zt=(t,i,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(t,i,e),e);function Ut(t,i){return(e,s,a)=>{const n=r=>r.renderRoot?.querySelector(t)??null;return zt(e,s,{get(){return n(this)}})}}class Mt{constructor(i){this.cle=i}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:i,domain:e,range:s}=this.cle;this.colorScale=i?Ft(i).domain(e):F().range(s).domain(e).interpolate(D)}setLogColorScale(){const{interpolator:i,domain:e,range:s}=this.cle;this.colorScale=i?Dt(i).domain(e):q().range(s).domain(e).interpolate(D)}setDiscreteColorScale(){this.colorScale=Ot().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const i=this.cle.domain;this.colorScale=$t().domain(i.slice(1,i.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Vt().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(i){throw new Error(`invalid property scaletype: ${i}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}const j=nt(class extends rt{constructor(t){if(super(t),t.type!==ot.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in i)i[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(i)}const e=t.element.classList;for(const s of this.st)s in i||(e.remove(s),this.st.delete(s));for(const s in i){const a=!!i[s];a===this.st.has(s)||this.nt?.has(s)||(a?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return lt}});class qt{constructor(i){this.cle=i}render(){const i=this.cle.titleText?x`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},s={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return x`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${i}
      <slot name="subtitle"></slot>
      <svg
        class=${j(e)}
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
      <ul class=${j(s)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:i,colorScale:e,domain:s}=this.cle,a={"legend-item":!0,line:i==="line",circle:i==="circle"};return x`${s.map(n=>x`<li
          class=${j(a)}
          style="--color:${e(n)}"
        >
          ${n}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:i,marginTop:e,marginLeft:s,marginRight:a,tickSize:n,width:r,range:o}=this.cle,l=this.cle.marginBottom+n,h=this.cle.height+n,u=i.interpolator?.()||Rt(D,o);return v`<image
      x=${s}
      y=${e}
      width=${r-a-s}
      height=${h-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:i,marginTop:e,marginLeft:s,colorScale:a,xScale:n}=this.cle,r=this.cle.height+i,o=this.cle.marginBottom+i,l=a.range(),h=c=>a.invertExtent(c).map(n)[0]||s,u=c=>{let[m,b]=a.invertExtent(c).map(n);return m=m||0,b=b||n.range()[1],b-m};return v`${l.map(c=>v`<rect x=${h(c)} y=${e} width=${u(c)} height=${r-e-o} fill=${c}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:i,tickSize:e,tickFormat:s,tickFormatter:a,tickValues:n,xScale:r,marginTop:o}=this.cle,l=this.cle.height+e,h=this.cle.marginBottom+e,u=n?.length?n:r.ticks.apply(r,[i,s]),c=Math.max(e,0)+3,m=()=>u.map(b=>v`<g class="tick" transform='translate(${r(b)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${o+h-l}"></line>
      <text fill="currentColor" y="${c}" dy="0.71em">${a(b)}</text>
      </g>`);return v`<g
      class="x-axis"
      transform="translate(0, ${l-h})"
      text-anchor="middle"
    >${m()}</g>`}getColorRamp(i,e=256){const s=document.createElement("canvas");s.setAttribute("height","1"),s.setAttribute("width",`${e}`);const a=s.getContext("2d");for(let n=0;n<e;n++)a.fillStyle=i(n/(e-1)),a.fillRect(n,0,1,1);return s}}const Ht=325,Wt=32,Gt=6,Xt=12,Jt=16,Kt=12,O=5,Zt=6,H=".1f",Yt=[0,1],Qt=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],te="Color Legend Element",ee="circle",ie="continuous",se=["domain","range","interpolator","scaleType"],ae=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class ne{constructor(i){this.cle=i}setXScale(){const{scaleType:i,marginLeft:e,width:s,marginRight:a}=this.cle;switch(i){case"continuous":this.xScale=F().domain(this.cle.domain).range([e,s-a]);break;case"log10":this.xScale=q().domain(this.cle.domain).range([e,s-a]).nice();break;case"discrete":case"threshold":this.xScale=F().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,s-a]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${i}`)}}handleAxisTicks(){if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||O);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[i,e]=this.xScale.domain();this.cle.tickValues=[i,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),e]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=It(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||O,this.cle.tickFormat||H))}}const re=ct`
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
`;var p=function(t,i,e,s){var a=arguments.length,n=a<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,i,e,s);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(n=(a<3?r(n):a>3?r(i,e,n):r(i,e))||n);return a>3&&n&&Object.defineProperty(i,e,n),n};let d=class extends ht{constructor(){super(...arguments),this.titleText=te,this.width=Ht,this.height=Wt,this.marginTop=Gt,this.marginRight=Xt,this.marginBottom=Jt,this.marginLeft=Kt,this.scaleType=ie,this.domain=Yt,this.range=Qt,this.markType=ee,this.ticks=O,this.tickFormat=H,this.tickSize=Zt,this.colorScaleSetter=new Mt(this),this.axisTickSetter=new ne(this),this.renderer=new qt(this)}get interpolator(){return this._interpolator}set interpolator(i){if(typeof i=="function"){const e=this.interpolator;this._interpolator=i,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(i){if(typeof i=="function"){const e=this.tickFormatter;this._tickFormatter=i,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(i){se.some(e=>i.has(e))&&this.colorScaleSetter.setColorScale(),ae.some(e=>i.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};d.styles=[re];p([f({type:String})],d.prototype,"titleText",void 0);p([f({type:Number})],d.prototype,"width",void 0);p([f({type:Number})],d.prototype,"height",void 0);p([f({type:Number})],d.prototype,"marginTop",void 0);p([f({type:Number})],d.prototype,"marginRight",void 0);p([f({type:Number})],d.prototype,"marginBottom",void 0);p([f({type:Number})],d.prototype,"marginLeft",void 0);p([f({type:String})],d.prototype,"scaleType",void 0);p([f({type:Array})],d.prototype,"domain",void 0);p([f({type:Array})],d.prototype,"range",void 0);p([f({type:String})],d.prototype,"markType",void 0);p([f({type:Number})],d.prototype,"ticks",void 0);p([f({type:String})],d.prototype,"tickFormat",void 0);p([f({type:Number})],d.prototype,"tickSize",void 0);p([f({type:Array})],d.prototype,"tickValues",void 0);p([Ut("svg")],d.prototype,"svg",void 0);p([f({attribute:!1})],d.prototype,"interpolator",null);p([f({attribute:!1})],d.prototype,"tickFormatter",null);d=p([Bt("color-legend")],d);function W(t){return!(t===null||typeof t!="object"||t.nodeType||t===t.window||t.constructor&&!w(t.constructor.prototype,"isPrototypeOf"))}function G(t){return W(t)?C({},t):Array.isArray(t)?t.map(G):t}function C(t,...i){return i.forEach(e=>{e&&Object.keys(e).forEach(s=>{e[s]&&W(e[s])?(w(t,s)||(t[s]={}),C(t[s],e[s])):Array.isArray(e[s])?t[s]=G(e[s]):t[s]=e[s]})}),t}function w(t,i){return t&&Object.prototype.hasOwnProperty.call(t,i)}var oe=class{constructor(t,i){this.defaults=i,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=C({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,i){this.onChange(!0,!1,i)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,i,e){this.notify(),i||this.watch_listener&&this.watch_listener(),t&&this.change(e)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(i=>{let e;i.startsWith(this.jsoneditor.root.path)?e=i:(e=this.path.split("."),e[e.length-1]=i,e=e.join(".")),this.jsoneditor.watch(e,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const i=this.options.dependencies;if(!i)return;const e=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(i).forEach(a=>{let n;a.startsWith(this.jsoneditor.root.path)?n=a:(n=this.path.split("."),n[n.length-1]=a,n=n.join("."));const r=i[a];this.checkDependency(n,r)}),this.dependenciesFulfilled!==e&&this.notify();let s=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(s="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(a=>t.childNodes[a].style.display=s):t.style.display=s}checkDependency(t,i){if(this.path===t||this.jsoneditor===null)return;const e=this.jsoneditor.getEditor(t),s=e?e.getValue():void 0;!e||!e.dependenciesFulfilled||s===void 0||s===null?this.dependenciesFulfilled=!1:Array.isArray(i)?this.dependenciesFulfilled=i.some(a=>{if(JSON.stringify(s)===JSON.stringify(a))return!0}):typeof i=="object"?typeof s!="object"?this.dependenciesFulfilled=i===s:Object.keys(i).some(a=>{if(!w(i,a))return!1;if(!w(s,a)||i[a]!==s[a])return this.dependenciesFulfilled=!1,!0}):typeof i=="string"||typeof i=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&s===i:typeof i=="boolean"&&(i?this.dependenciesFulfilled=this.dependenciesFulfilled&&(s||s.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!s||s.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const i=this.jsoneditor.options.show_opt_in,e=typeof this.parent.options.show_opt_in<"u",s=e&&this.parent.options.show_opt_in===!0,a=e&&this.parent.options.show_opt_in===!1;(s||!a&&i||!e&&i)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},w(this.schema,"watch")){let t,i,e,s,a;const n=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(r=>{if(t=this.schema.watch[r],Array.isArray(t)){if(t.length<2)return;i=[t[0]].concat(t[1].split("."))}else i=t.split("."),this.theme.closest(this.container,`[data-schemaid="${i[0]}"]`)||i.unshift("#");if(e=i.shift(),e==="#"&&(e=this.jsoneditor.schema.id||this.jsoneditor.root.formname),s=this.theme.closest(this.container,`[data-schemaid="${e}"]`),!s)throw new Error(`Could not find ancestor node with id ${e}`);a=`${s.getAttribute("data-schemapath")}.${i.join(".")}`,n.startsWith(a)&&(this.watchLoop=!0),this.jsoneditor.watch(a,this.watch_listener),this.watched[r]=a})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,i,e,s=[]){const a=`json-editor-btn-${i}`;this.iconlib?i=this.iconlib.getIcon(i):i=null,t=this.translate(t,s),e=this.translate(e,s),!i&&e&&(t=e,e=null);const n=this.theme.getButton(t,i,e);return n.classList.add(a),n}setButtonText(t,i,e,s,a=[]){return this.iconlib?e=this.iconlib.getIcon(e):e=null,i=this.translate(i,a),s=this.translate(s,a),!e&&s&&(i=s,s=null),this.theme.setButtonText(t,i,e,s)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let i,e;const s=(t.mediaType||"application/javascript").split("/")[0],a=this.jsoneditor.compileTemplate(t.href,this.template_engine),n=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let r=null;if(t.download&&(r=t.download),r&&r!==!0&&(r=this.jsoneditor.compileTemplate(r,this.template_engine)),s==="image"){i=this.theme.getBlockLinkHolder(),e=document.createElement("a"),e.setAttribute("target","_blank");const o=document.createElement("img");this.theme.createImageLink(i,e,o),this.link_watchers.push(l=>{const h=a(l),u=n(l);e.setAttribute("href",h),e.setAttribute("title",u||h),o.setAttribute("src",h)})}else if(["audio","video"].includes(s)){i=this.theme.getBlockLinkHolder(),e=this.theme.getBlockLink(),e.setAttribute("target","_blank");const o=document.createElement(s);o.setAttribute("controls","controls"),this.theme.createMediaLink(i,e,o),this.link_watchers.push(l=>{const h=a(l),u=n(l);e.setAttribute("href",h),e.textContent=u||h,o.setAttribute("src",h)})}else e=i=this.theme.getBlockLink(),i.setAttribute("target","_blank"),i.textContent=t.rel,i.style.display="none",this.link_watchers.push(o=>{const l=a(o),h=n(o);l&&(i.style.display=""),i.setAttribute("href",l),i.textContent=h||l});return r&&e&&(r===!0?e.setAttribute("download",""):this.link_watchers.push(o=>{e.setAttribute("download",r(o))})),t.class&&t.class.split(" ").forEach(o=>{e.classList.add(o)}),i}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let i=!1;return this.watched&&Object.keys(this.watched).forEach(e=>{const s=this.jsoneditor.getEditor(this.watched[e]),a=s?s.getValue():null;this.watched_values[e]!==a&&(i=!0),t[e]=a}),t.self=this.getValue(),this.watched_values.self!==t.self&&(i=!0),this.watched_values=t,i}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let i=0;i<this.header.childNodes.length;i++)if(this.header.childNodes[i].nodeType===3){this.header.childNodes[i].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const i=document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=C(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(e=>{const s=this.editors[e];if(s.schema&&s.schema.enum&&s.schema.options&&s.schema.options.enum_titles){const a=s.schema.enum.indexOf(s.value);t.properties[e]={enumTitle:s.options.enum_titles[a]}}}));const i=this.header_template(t);i!==this.header_text&&(this.header_text=i,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let i=0;i<this.link_watchers.length;i++)this.link_watchers[i](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const i=[],e={};t.forEach(a=>{a.title&&(e[a.title]=e[a.title]||0,e[a.title]++),a.description&&(e[a.description]=e[a.description]||0,e[a.description]++),a.format&&(e[a.format]=e[a.format]||0,e[a.format]++),a.type&&(e[a.type]=e[a.type]||0,e[a.type]++)}),t.forEach(a=>{let n;typeof a=="string"?n=a:a.title&&e[a.title]<=1?n=a.title:a.format&&e[a.format]<=1?n=a.format:a.type&&e[a.type]<=1?n=a.type:a.description&&e[a.description]<=1?n=a.description:a.title?n=a.title:a.format?n=a.format:a.type?n=a.type:a.description?n=a.description:JSON.stringify(a).length<500?n=JSON.stringify(a):n="type",i.push(n)});const s={};return i.forEach((a,n)=>{s[a]=s[a]||0,s[a]++,e[a]>1&&(i[n]=`${a} ${s[a]}`)}),i}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,i){if(this.schema.options&&this.schema.options.inputAttributes){const e=this.schema.options.inputAttributes,s=["name","type"].concat(t),a=i||this.input;Object.keys(e).forEach(n=>{s.includes(n.toLowerCase())||a.setAttribute(n,e[n])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,i=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(e=>{i.includes(e.toLowerCase())||this.container.setAttribute(e,t[e])})}}expandCallbacks(t,i){const e=this.defaults.callbacks[t];return Object.entries(i).forEach(([s,a])=>{a===Object(a)?i[s]=this.expandCallbacks(t,a):typeof a=="string"&&typeof e=="object"&&typeof e[a]=="function"&&(i[s]=e[a].bind(null,this))}),i}showValidationErrors(t){}};function le(t,i){const e=i==="bands"?t.items?.enum??[]:t.options?.enum??t.enum??[],s=i==="bands"?t.items?.options?.colors:t.options?.colors||[];return s&&s.length===e.length?s:e.map(a=>{let n=0;for(let r=0;r<a.length;r++)n=a.charCodeAt(r)+((n<<5)-n);return[16,8,0].map(r=>(n>>>r&255|128).toString(16)).reduce((r,o)=>r+o,"#")})}function ce(t,i,e){const s=i.indexOf(t);return s!==-1?e[s]:"#000000"}function X(t,i){const e=document.createElement("div");return e.dataset.band=t,e.textContent=i,e.draggable=!0,e.ondragstart=s=>{s.dataTransfer?.setData("band",t)},e}function J(t,i,e){const s=document.createElement("div");s.classList.add("bands-palette"),i.forEach((a,n)=>{const r=e[n];s.appendChild(X(a,r))}),t.control?.appendChild(s)}function K(t,i){const e=document.createElement("style");return e.innerHTML=`
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
    ${t.map(s=>`[data-band="${s}"] { background: ${ce(s,t,i)}; color: black; }`).join(`
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
  `,e}function Z(t,i){const e=document.createElement("div");return e.dataset.slot=t,e.ondrop=i,e.ondragover=s=>s.preventDefault(),e}function Y(t,i,e){$(t),t.appendChild(X(i,e))}function $(t){t.querySelector("[data-band]")?.remove()}function he(t,i,e,s){const a=K(e,i);t.control?.appendChild(a),J(t,e,s),t.control?.appendChild(document.createElement("hr")),de(t)}function de(t){const i=document.createElement("div");i.classList.add("slots-container","rgb-slots"),t.rgbSlots=["R","G","B"].map((e,s)=>{const n=Z(e,r=>{r.preventDefault();const o=r.dataTransfer?.getData("band");if(!o)return;const l=[...t.getValue()||[]];l[s]=o,t.setValue(l),t.onChange(!0)});return i.appendChild(n),n}),t.control?.appendChild(i)}function ue(t){const i=t.getValue()||[];t.rgbSlots?.forEach((e,s)=>{const a=i[s];if(!a){$(e);return}Y(e,a,t.bandTitles?.[t.bands?.indexOf(a)]||a)})}var Q=/\{\{([^}]+)\}\}/g;function pe(t,i,e,s){const a=t.schema.formulaTemplate||"{{A}}",n=K(e,i);t.control?.appendChild(n),J(t,e,s),t.control?.appendChild(document.createElement("hr")),ge(t,a)}function fe(t){const i=t.schema.formulaTemplate||"{{A}}",e=t.variableValues||{};return i.replace(Q,(s,a)=>e[a.trim()]||s)}function L(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function me(t,i){const e=t.bands??[];if(!i||!e.length)return null;const s=t.schema.formulaTemplate||"{{A}}",a=[...e].sort((u,c)=>c.length-u.length).map(L).join("|"),n=[],r={},o=s.split(/(\{\{[^}]+\}\})/).map(u=>{const c=u.match(/^\{\{([^}]+)\}\}$/);if(!c)return L(u);const m=c[1].trim();return r[m]?`\\${r[m]}`:(n.push(m),r[m]=n.length,`(${a}|${L(u)})`)}).join(""),l=i.match(new RegExp(`^${o}$`));if(!l)return null;const h={};return n.forEach((u,c)=>{const m=l[c+1];m&&!m.startsWith("{{")&&(h[u]=m)}),h}function ge(t,i){const e=document.createElement("div");e.classList.add("slots-container"),t.variableSlots={},i.split(/(\{\{[^}]+\}\})/).forEach(s=>{if(!s)return;if(!s.match(Q)){if(s=s.trim(),s){const r=document.createElement("span");r.classList.add("formula-text"),r.textContent=s,e.appendChild(r)}return}const a=s.replace(/[{}]/g,"").trim(),n=Z(a,r=>{r.preventDefault();const o=r.dataTransfer?.getData("band");o&&(t.variableValues[a]=o,t.setValue(fe(t)),t.onChange(!0))});e.appendChild(n),t.variableSlots[a]||(t.variableSlots[a]=[]),t.variableSlots[a].push(n)}),t.control?.appendChild(e)}function be(t){t.variableValues={...me(t,t.getValue())??t.options?.defaultVariables??{}},Object.keys(t.variableSlots??{}).forEach(i=>{const e=t.variableSlots[i],s=t.variableValues[i];if(!s){e.forEach($);return}const a=t.bandTitles?.[t.bands?.indexOf(s)]||s;e.forEach(n=>Y(n,s,a))})}var M=class extends oe{variableSlots={};rgbSlots=[];variableValues={};bands=[];bandTitles=[];colors=[];build(){super.build();const t=this.schema.format||"bands";this.bands=t==="bands"?this.schema.items?.enum:this.schema.options?.enum??this.schema.enum??[],this.bandTitles=t==="bands"?this.schema.items?.options?.enum_titles:this.schema.options?.enum_titles||this.bands,this.colors=le(this.schema,t),this.control=document.createElement("div"),this.control.classList.add("form-control","bands-editor"),t==="bands"?he(this,this.colors,this.bands,this.bandTitles):t==="bands-arithmetic"&&pe(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",this.container?.appendChild(this.label),this.container?.appendChild(this.control)}setValue(t){super.setValue(t),(this.schema.format||"bands")==="bands"?ue(this):be(this)}},ye=[{type:"array",format:"bands",func:M},{type:"string",format:"bands-arithmetic",func:M}],ve="eox-layercontrol[data-v-569df673]{overflow:auto}",we={class:"d-flex flex-column"},ke=["for",".colormapRegistry",".customEditorInterfaces"],xe={slot:"layerstitle",class:"d-flex justify-space-between ma-2 pa-2 flex-shrink-0"},_e={key:0},Ve=dt({__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:[String,Boolean],default:"Layers"},cssVars:{type:Object,default:()=>({})},layoutIcon:{type:String,default:ut},layoutTarget:{type:String}},async setup(t){let i,e;customElements.get("eox-layercontrol")||([i,e]=B(()=>P(()=>import("./index-DzSNfyRU.js").then(g=>g.gM),__vite__mapDeps([0,1]))),await i,e()),customElements.get("eox-jsonform")||([i,e]=B(()=>P(()=>import("./main-BjnMUtfW.js"),__vite__mapDeps([2,0,1,3,4,5,6]))),await i,e());const s=t,a={tools:s.tools,style:s.cssVars},n=U(()=>!!s.layoutTarget&&!!s.layoutIcon),{selectedCompareStac:r,selectedStac:o,colormapRegistry:l}=pt(ft()),h=U(()=>s.map==="second"?N.value!==null&&r.value!==null:z.value!==null&&o.value!==null),u=s.map==="second"?mt:gt,c=s.map==="second"?N:z,m=kt(null),b=async g=>{const{layer:E,datetime:it}=g.detail,R=await St(u,E);let y=[];if(R&&(y=await R.updateLayerJson(it,E.get("id"),c.value?.layers??[])),!y?.length)return;const I=y?.find(k=>k?.properties?.id==="AnalysisGroup")?.layers;I?.length&&(I?.forEach(k=>{k.properties.layerControlExpand=!0,k.properties.layerControlToolsExpand=!0}),At(c.value,y),await jt(s.map==="second"?"compareLayertime:updated":"layertime:updated",c.value,y))};let V;const tt=g=>{clearTimeout(V),V=setTimeout(()=>{b(g)},500)},et=g=>{xt(g.detail.layer,g.detail.jsonformValue),_t(g.detail.layer,g.detail.jsonformValue),Tt(g.detail.layer,g.detail.jsonformValue,s.map==="second"?"compare":"main"),s.map==="second"?Ct.value=g.detail.jsonformValue:Et.value=g.detail.jsonformValue};return(g,E)=>(_(),S("span",we,[h.value?(_(),S("eox-layercontrol",bt({key:T(c)},a,{ref_key:"eoxLayercontrol",ref:m,for:T(c),".colormapRegistry":T(l),".showLayerZoomState":!0,".customEditorInterfaces":T(ye),toolsAsList:"true","onDatetime:updated":tt,"on:layerConfig:change":et}),[yt("span",xe,[t.title?(_(),S("h4",_e,vt(t.title),1)):A("v-if",!0),n.value?(_(),wt(Lt,{key:1,target:t.layoutTarget,icon:t.layoutIcon},null,8,["target","icon"])):A("v-if",!0)])],48,ke)):A("v-if",!0)]))}},[["styles",[ve]],["__scopeId","data-v-569df673"]]);export{Ve as default};
