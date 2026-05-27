const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-DzwAiU5D.js","assets/addCommonStyleSheet-xNxGAsM0.js","assets/when-CI7b_ccM.js","assets/repeat-CMQfrIVb.js","assets/directive-CwRn8Fwj.js","assets/directive-helpers-DyV73Z3p.js","assets/unsafe-html-DKRLx5lS.js","assets/map-Bv-shLAs.js","assets/XYZ-BMz7GYxa.js","assets/intersectsextent-D03KA33t.js","assets/index-Blt6j4zJ.js","assets/index-BmJaLv9B.css","assets/index-C-dbsWzT.js","assets/getElement-CdRlZPdn.js","assets/main-BDiAP4q1.js","assets/toolcool-range-slider.min-BO3Tl_nj.js","assets/utils-CJZBDejC.js","assets/index-2GfG_t-c.js","assets/index-DrCSUysz.js"])))=>i.map(i=>d[i]);
import{_ as st,H as R,P as B,s as nt,e as rt,F as at,E as ot,R as P,N,w as lt,g as S,h as A,x as ct,q as F,S as ht,m as z,K as dt,v as M,C as ut,T as pt,U as ft,B as mt,W as gt,X as yt}from"./index-Blt6j4zJ.js";import{f as bt,u as kt,E as vt,b as _,w as v,i as wt,a as xt}from"./addCommonStyleSheet-xNxGAsM0.js";import{s as _t,l as L,i as D,a as Tt,b as q,q as Ct,t as Et,o as St,p as At,f as Ft}from"./sequential-DDW98mYE.js";import{e as jt,i as Lt,t as Dt}from"./directive-CwRn8Fwj.js";import"./main-f6ca_8yE.js";import"./dayjs.min-CKzvyRjS.js";import"./when-CI7b_ccM.js";import"./map-Bv-shLAs.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import"./getElement-CdRlZPdn.js";import"./index-DrCSUysz.js";const Ot=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};const $t={attribute:!0,type:String,converter:kt,reflect:!1,hasChanged:bt},It=(n=$t,t,e)=>{const{kind:i,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(e.name,n),i==="accessor"){const{name:a}=e;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,c,n,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,n,l),l}}}if(i==="setter"){const{name:a}=e;return function(l){const c=this[a];t.call(this,l),this.requestUpdate(a,c,n,!0,l)}}throw Error("Unsupported decorator location: "+i)};function f(n){return(t,e)=>typeof e=="object"?It(n,t,e):((i,r,s)=>{const a=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),a?Object.getOwnPropertyDescriptor(r,s):void 0})(n,t,e)}const Vt=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);function Rt(n,t){return(e,i,r)=>{const s=a=>a.renderRoot?.querySelector(n)??null;return Vt(e,i,{get(){return s(this)}})}}class Bt{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?_t(t).domain(e):L().range(i).domain(e).interpolate(D)}setLogColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?Tt(t).domain(e):q().range(i).domain(e).interpolate(D)}setDiscreteColorScale(){this.colorScale=Ct().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=Et().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=St().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}const j=jt(class extends Lt{constructor(n){if(super(n),n.type!==Dt.ATTRIBUTE||n.name!=="class"||n.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=n.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const r=!!t[i];r===this.st.has(i)||this.nt?.has(i)||(r?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return vt}});class Pt{constructor(t){this.cle=t}render(){const t=this.cle.titleText?_`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},i={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return _`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
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
      <ul class=${j(i)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:i}=this.cle,r={"legend-item":!0,line:t==="line",circle:t==="circle"};return _`${i.map(s=>_`<li
          class=${j(r)}
          style="--color:${e(s)}"
        >
          ${s}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:i,marginRight:r,tickSize:s,width:a,range:l}=this.cle,c=this.cle.marginBottom+s,o=this.cle.height+s,d=t.interpolator?.()||At(D,l);return v`<image
      x=${i}
      y=${e}
      width=${a-r-i}
      height=${o-e-c}
      preserveAspectRatio="none"
      href=${this.getColorRamp(d).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:i,colorScale:r,xScale:s}=this.cle,a=this.cle.height+t,l=this.cle.marginBottom+t,c=r.range(),o=h=>r.invertExtent(h).map(s)[0]||i,d=h=>{let[m,g]=r.invertExtent(h).map(s);return m=m||0,g=g||s.range()[1],g-m};return v`${c.map(h=>v`<rect x=${o(h)} y=${e} width=${d(h)} height=${a-e-l} fill=${h}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:i,tickFormatter:r,tickValues:s,xScale:a,marginTop:l}=this.cle,c=this.cle.height+e,o=this.cle.marginBottom+e,d=s?.length?s:a.ticks.apply(a,[t,i]),h=Math.max(e,0)+3,m=()=>d.map(g=>v`<g class="tick" transform='translate(${a(g)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${l+o-c}"></line>
      <text fill="currentColor" y="${h}" dy="0.71em">${r(g)}</text>
      </g>`);return v`<g
      class="x-axis"
      transform="translate(0, ${c-o})"
      text-anchor="middle"
    >${m()}</g>`}getColorRamp(t,e=256){const i=document.createElement("canvas");i.setAttribute("height","1"),i.setAttribute("width",`${e}`);const r=i.getContext("2d");for(let s=0;s<e;s++)r.fillStyle=t(s/(e-1)),r.fillRect(s,0,1,1);return i}}const Nt=325,zt=32,Mt=6,Ut=12,qt=16,Ht=12,O=5,Wt=6,H=".1f",Gt=[0,1],Xt=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],Jt="Color Legend Element",Kt="circle",Yt="continuous",Zt=["domain","range","interpolator","scaleType"],Qt=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class te{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:i,marginRight:r}=this.cle;switch(t){case"continuous":this.xScale=L().domain(this.cle.domain).range([e,i-r]);break;case"log10":this.xScale=q().domain(this.cle.domain).range([e,i-r]).nice();break;case"discrete":case"threshold":this.xScale=L().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,i-r]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||O);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[t,e]=this.xScale.domain();this.cle.tickValues=[t,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),e]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=Ft(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||O,this.cle.tickFormat||H))}}const ee=wt`
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
`;var p=function(n,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,e,i);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(s=(r<3?a(s):r>3?a(t,e,s):a(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s};let u=class extends xt{constructor(){super(...arguments),this.titleText=Jt,this.width=Nt,this.height=zt,this.marginTop=Mt,this.marginRight=Ut,this.marginBottom=qt,this.marginLeft=Ht,this.scaleType=Yt,this.domain=Gt,this.range=Xt,this.markType=Kt,this.ticks=O,this.tickFormat=H,this.tickSize=Wt,this.colorScaleSetter=new Bt(this),this.axisTickSetter=new te(this),this.renderer=new Pt(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){Zt.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),Qt.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};u.styles=[ee];p([f({type:String})],u.prototype,"titleText",void 0);p([f({type:Number})],u.prototype,"width",void 0);p([f({type:Number})],u.prototype,"height",void 0);p([f({type:Number})],u.prototype,"marginTop",void 0);p([f({type:Number})],u.prototype,"marginRight",void 0);p([f({type:Number})],u.prototype,"marginBottom",void 0);p([f({type:Number})],u.prototype,"marginLeft",void 0);p([f({type:String})],u.prototype,"scaleType",void 0);p([f({type:Array})],u.prototype,"domain",void 0);p([f({type:Array})],u.prototype,"range",void 0);p([f({type:String})],u.prototype,"markType",void 0);p([f({type:Number})],u.prototype,"ticks",void 0);p([f({type:String})],u.prototype,"tickFormat",void 0);p([f({type:Number})],u.prototype,"tickSize",void 0);p([f({type:Array})],u.prototype,"tickValues",void 0);p([Rt("svg")],u.prototype,"svg",void 0);p([f({attribute:!1})],u.prototype,"interpolator",null);p([f({attribute:!1})],u.prototype,"tickFormatter",null);u=p([Ot("color-legend")],u);function W(n){return!(n===null||typeof n!="object"||n.nodeType||n===n.window||n.constructor&&!w(n.constructor.prototype,"isPrototypeOf"))}function G(n){return W(n)?T({},n):Array.isArray(n)?n.map(G):n}function T(n,...t){return t.forEach(e=>{e&&Object.keys(e).forEach(i=>{e[i]&&W(e[i])?(w(n,i)||(n[i]={}),T(n[i],e[i])):Array.isArray(e[i])?n[i]=G(e[i]):n[i]=e[i]})}),n}function w(n,t){return n&&Object.prototype.hasOwnProperty.call(n,t)}class ie{constructor(t,e){this.defaults=e,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=T({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,e){this.onChange(!0,!1,e)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,e,i){this.notify(),e||this.watch_listener&&this.watch_listener(),t&&this.change(i)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(e=>{let i;e.startsWith(this.jsoneditor.root.path)?i=e:(i=this.path.split("."),i[i.length-1]=e,i=i.join(".")),this.jsoneditor.watch(i,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const e=this.options.dependencies;if(!e)return;const i=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(e).forEach(s=>{let a;s.startsWith(this.jsoneditor.root.path)?a=s:(a=this.path.split("."),a[a.length-1]=s,a=a.join("."));const c=e[s];this.checkDependency(a,c)}),this.dependenciesFulfilled!==i&&this.notify();let r=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(r="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(s=>t.childNodes[s].style.display=r):t.style.display=r}checkDependency(t,e){if(this.path===t||this.jsoneditor===null)return;const i=this.jsoneditor.getEditor(t),r=i?i.getValue():void 0;!i||!i.dependenciesFulfilled||r===void 0||r===null?this.dependenciesFulfilled=!1:Array.isArray(e)?this.dependenciesFulfilled=e.some(s=>{if(JSON.stringify(r)===JSON.stringify(s))return!0}):typeof e=="object"?typeof r!="object"?this.dependenciesFulfilled=e===r:Object.keys(e).some(s=>{if(!w(e,s))return!1;if(!w(r,s)||e[s]!==r[s])return this.dependenciesFulfilled=!1,!0}):typeof e=="string"||typeof e=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&r===e:typeof e=="boolean"&&(e?this.dependenciesFulfilled=this.dependenciesFulfilled&&(r||r.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!r||r.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const e=this.jsoneditor.options.show_opt_in,i=typeof this.parent.options.show_opt_in<"u",r=i&&this.parent.options.show_opt_in===!0,s=i&&this.parent.options.show_opt_in===!1;(r||!s&&e||!i&&e)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},w(this.schema,"watch")){let t,e,i,r,s;const a=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(l=>{if(t=this.schema.watch[l],Array.isArray(t)){if(t.length<2)return;e=[t[0]].concat(t[1].split("."))}else e=t.split("."),this.theme.closest(this.container,`[data-schemaid="${e[0]}"]`)||e.unshift("#");if(i=e.shift(),i==="#"&&(i=this.jsoneditor.schema.id||this.jsoneditor.root.formname),r=this.theme.closest(this.container,`[data-schemaid="${i}"]`),!r)throw new Error(`Could not find ancestor node with id ${i}`);s=`${r.getAttribute("data-schemapath")}.${e.join(".")}`,a.startsWith(s)&&(this.watchLoop=!0),this.jsoneditor.watch(s,this.watch_listener),this.watched[l]=s})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,e,i,r=[]){const s=`json-editor-btn-${e}`;this.iconlib?e=this.iconlib.getIcon(e):e=null,t=this.translate(t,r),i=this.translate(i,r),!e&&i&&(t=i,i=null);const a=this.theme.getButton(t,e,i);return a.classList.add(s),a}setButtonText(t,e,i,r,s=[]){return this.iconlib?i=this.iconlib.getIcon(i):i=null,e=this.translate(e,s),r=this.translate(r,s),!i&&r&&(e=r,r=null),this.theme.setButtonText(t,e,i,r)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let e,i;const s=(t.mediaType||"application/javascript").split("/")[0],a=this.jsoneditor.compileTemplate(t.href,this.template_engine),l=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let c=null;if(t.download&&(c=t.download),c&&c!==!0&&(c=this.jsoneditor.compileTemplate(c,this.template_engine)),s==="image"){e=this.theme.getBlockLinkHolder(),i=document.createElement("a"),i.setAttribute("target","_blank");const o=document.createElement("img");this.theme.createImageLink(e,i,o),this.link_watchers.push(d=>{const h=a(d),m=l(d);i.setAttribute("href",h),i.setAttribute("title",m||h),o.setAttribute("src",h)})}else if(["audio","video"].includes(s)){e=this.theme.getBlockLinkHolder(),i=this.theme.getBlockLink(),i.setAttribute("target","_blank");const o=document.createElement(s);o.setAttribute("controls","controls"),this.theme.createMediaLink(e,i,o),this.link_watchers.push(d=>{const h=a(d),m=l(d);i.setAttribute("href",h),i.textContent=m||h,o.setAttribute("src",h)})}else i=e=this.theme.getBlockLink(),e.setAttribute("target","_blank"),e.textContent=t.rel,e.style.display="none",this.link_watchers.push(o=>{const d=a(o),h=l(o);d&&(e.style.display=""),e.setAttribute("href",d),e.textContent=h||d});return c&&i&&(c===!0?i.setAttribute("download",""):this.link_watchers.push(o=>{i.setAttribute("download",c(o))})),t.class&&t.class.split(" ").forEach(d=>{i.classList.add(d)}),e}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let e=!1;return this.watched&&Object.keys(this.watched).forEach(i=>{const r=this.jsoneditor.getEditor(this.watched[i]),s=r?r.getValue():null;this.watched_values[i]!==s&&(e=!0),t[i]=s}),t.self=this.getValue(),this.watched_values.self!==t.self&&(e=!0),this.watched_values=t,e}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let e=0;e<this.header.childNodes.length;e++)if(this.header.childNodes[e].nodeType===3){this.header.childNodes[e].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=T(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(i=>{const r=this.editors[i];if(r.schema&&r.schema.enum&&r.schema.options&&r.schema.options.enum_titles){const s=r.schema.enum.indexOf(r.value),a=r.options.enum_titles[s];t.properties[i]={enumTitle:a}}}));const e=this.header_template(t);e!==this.header_text&&(this.header_text=e,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let e=0;e<this.link_watchers.length;e++)this.link_watchers[e](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const e=[],i={};t.forEach(s=>{s.title&&(i[s.title]=i[s.title]||0,i[s.title]++),s.description&&(i[s.description]=i[s.description]||0,i[s.description]++),s.format&&(i[s.format]=i[s.format]||0,i[s.format]++),s.type&&(i[s.type]=i[s.type]||0,i[s.type]++)}),t.forEach(s=>{let a;typeof s=="string"?a=s:s.title&&i[s.title]<=1?a=s.title:s.format&&i[s.format]<=1?a=s.format:s.type&&i[s.type]<=1?a=s.type:s.description&&i[s.description]<=1?a=s.description:s.title?a=s.title:s.format?a=s.format:s.type?a=s.type:s.description?a=s.description:JSON.stringify(s).length<500?a=JSON.stringify(s):a="type",e.push(a)});const r={};return e.forEach((s,a)=>{r[s]=r[s]||0,r[s]++,i[s]>1&&(e[a]=`${s} ${r[s]}`)}),e}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,e){if(this.schema.options&&this.schema.options.inputAttributes){const i=this.schema.options.inputAttributes,r=["name","type"].concat(t),s=e||this.input;Object.keys(i).forEach(a=>{r.includes(a.toLowerCase())||s.setAttribute(a,i[a])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,e=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(i=>{e.includes(i.toLowerCase())||this.container.setAttribute(i,t[i])})}}expandCallbacks(t,e){const i=this.defaults.callbacks[t];return Object.entries(e).forEach(([r,s])=>{s===Object(s)?e[r]=this.expandCallbacks(t,s):typeof s=="string"&&typeof i=="object"&&typeof i[s]=="function"&&(e[r]=i[s].bind(null,this))}),e}showValidationErrors(t){}}function se(n,t){const e=t==="bands"?n.items?.enum:n.enum||[],i=t==="bands"?n.items?.options?.colors:n.options?.colors||[];return i&&i.length===e.length?i:e.map(()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"))}function ne(n,t,e){const i=t.indexOf(n);return i!==-1?e[i]:"#000000"}function X(n,t){const e=document.createElement("div");return e.dataset.band=n,e.textContent=t,e.draggable=!0,e.ondragstart=i=>{i.dataTransfer?.setData("band",n)},e}function J(n,t,e){t.forEach((i,r)=>{const s=e[r],a=X(i,s);n.control?.appendChild(a)})}function K(n,t){const e=document.createElement("style");return e.innerHTML=`
    /* Base styles for all band elements */
    [data-band] {
      display: inline-flex;
      border: 1px solid darkgrey;
      border-radius: 50%;
      height: 40px;
      aspect-ratio: 1/1;
      padding: 4px;
      margin: 2px;
      align-items: center;
      justify-content: center;
      cursor: move;
      font-size: 10px;
    }

    /* Band color styles */
    ${n.map(i=>`[data-band="${i}"] { background: ${ne(i,n,t)}; color: black; }`).join(`
`)}

    /* RGB slot styles */
    [data-slot] {
      display: inline-flex;
      width: 50px;
      height: 50px;
      aspect-ratio: 1/1;
      padding: 1px;
      border: 2px solid #666;
      background: #f0f0f0;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 2px;
      position: relative;
      box-sizing: border-box;
    }
    [data-slot]:hover {
      border-color: #333;
      background: #f9f9f9;
    }
    [data-slot]::before {
      content: attr(data-slot);
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: #666;
      z-index: 0;
    }

    /* container */
    .slots-container {
      font-family: monospace;
      font-size: 18px;
      padding: 16px;
      background: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 8px 0;
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
  `,e}function Y(n,t){const e=document.createElement("div");return e.dataset.slot=n,e.ondrop=t,e.ondragover=i=>i.preventDefault(),e}function $(n,t,e){const i=n.querySelector("[data-band]");i&&i.remove();const r=X(t,e);n.appendChild(r)}function re(n,t,e,i){const r=K(e,t);n.control?.appendChild(r),J(n,e,i),n.control?.appendChild(document.createElement("hr")),ae(n,e,i)}function ae(n,t,e){const i=document.createElement("div");i.classList.add("slots-container"),["R","G","B"].forEach((r,s)=>{const l=Y(r,c=>{c.preventDefault();const o=c.dataTransfer?.getData("band");if(!o)return;const d=t.indexOf(o),h=e[d]||o;$(l,o,h);const m=n.getValue()||[];m[s]=o,n.setValue(m),n.onChange(!0)});oe(l),i.appendChild(l),setTimeout(()=>{const c=n.getValue();if(c?.[s]){const o=c[s],d=t.indexOf(o),h=e[d]||o;o&&$(l,o,h)}})}),n.control?.appendChild(i)}function oe(n){switch(n.style.border="2px dashed",n.dataset.slot){case"R":{n.style.borderColor="#F88",n.style.background="#FEE";break}case"G":{n.style.borderColor="#8F8",n.style.background="#EFE";break}case"B":{n.style.borderColor="#88F",n.style.background="#EEF";break}}}const Z=/\{\{([^}]+)\}\}/g;function le(n,t,e,i){const r=n.schema.formulaTemplate||"{{A}}",s=K(e,t);n.control?.appendChild(s),J(n,e,i),n.control?.appendChild(document.createElement("hr")),he(n,r,e,i)}function ce(n){const t=n.schema.formulaTemplate||"{{A}}",e=n.variableValues||{};return t.replace(Z,(i,r)=>e[r.trim()]||i)}function he(n,t,e,i){const r=document.createElement("div");r.classList.add("slots-container"),n.variableSlots={},t.split(/(\{\{[^}]+\}\})/).forEach(a=>{if(!a)return;if(!a.match(Z)){if(a=a.trim(),a){const o=document.createElement("span");o.classList.add("formula-text"),o.textContent=a,r.appendChild(o)}return}const l=a.replace(/[{}]/g,"").trim(),c=Y(l,o=>{o.preventDefault();const d=o.dataTransfer?.getData("band");if(!d)return;const h=e.indexOf(d),m=i[h]||d;n.variableValues[l]=d,Q(n,l,d,m),n.value=ce(n),n.onChange(!0)});r.appendChild(c),n.variableSlots[l]||(n.variableSlots[l]=[]),n.variableSlots[l].push(c)}),n.control?.appendChild(r),setTimeout(()=>{de(n)})}function de(n){n.variableValues&&n.variableSlots&&Object.keys(n.variableValues).forEach(t=>{const e=n.variableValues[t],i=n.bands||n.schema.enum||[],r=n.bandTitles||n.schema.options?.enum_titles||i,s=i.indexOf(e),a=r[s]||e;Q(n,t,e,a)})}function Q(n,t,e,i){n.variableSlots&&n.variableSlots[t]&&n.variableSlots[t].forEach(r=>{$(r,e,i)})}class U extends ie{variableSlots={};variableValues={};bands=[];bandTitles=[];colors=[];build(){super.build();const t=this.schema.format||"bands";this.bands=t==="bands"?this.schema.items?.enum:this.schema.enum||[],this.bandTitles=t==="bands"?this.schema.items?.options?.enum_titles:this.schema.options.enum_titles||this.bands,this.colors=se(this.schema,t),this.control=document.createElement("div"),this.control.classList.add("form-control"),t==="bands"?re(this,this.colors,this.bands,this.bandTitles):t==="bands-arithmetic"&&le(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",this.container?.appendChild(this.label),this.container?.appendChild(this.control)}}const ue=[{type:"array",format:"bands",func:U},{type:"string",format:"bands-arithmetic",func:U}],pe="eox-layercontrol[data-v-cd4de44c]{overflow:auto}",fe={class:"d-flex flex-column"},me=["for",".customEditorInterfaces"],ge={key:0,class:"mt-2 mb-2"},ye={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:String||Boolean,default:"Layers"},cssVars:{type:Object}},async setup(n){let t,e;customElements.get("eox-layercontrol")||([t,e]=R(()=>B(()=>import("./main-DzwAiU5D.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]))),await t,e()),customElements.get("eox-jsonform")||([t,e]=R(()=>B(()=>import("./main-BDiAP4q1.js"),__vite__mapDeps([14,1,2,10,11,15,16,17,18]))),await t,e());const i=n,r={tools:i.tools,style:i.cssVars},{selectedCompareStac:s,selectedStac:a}=nt(rt()),l=ut(()=>i.map==="second"?P.value!==null&&s.value!==null:N.value!==null&&a.value!==null),c=i.map==="second"?at:ot,o=i.map==="second"?P:N,d=mt(null),h=new Map;lt([a,s],()=>h.clear());const m=async y=>{const{layer:b,datetime:C}=y.detail,E=b.get("id")?.split(";:;")[0]??b.get("id");if(h.get(E)===C)return;const it=!h.has(E);if(h.set(E,C),it)return;const I=await gt(c,b);let k=[];if(I&&(k=await I.updateLayerJson(C,b.get("id"),o.value?.layers??[])),!k?.length)return;const V=k?.find(x=>x?.properties?.id==="AnalysisGroup")?.layers;V?.length&&(V?.forEach(x=>{x.properties.layerControlExpand=!0,x.properties.layerControlToolsExpand=!0}),o.value.layers=k,await yt(i.map==="second"?"compareLayertime:updated":"layertime:updated",o.value,k))};let g;const tt=y=>{clearTimeout(g),g=setTimeout(()=>{m(y)},500)},et=y=>{i.map==="second"?pt.value=y.detail.jsonformValue:ft.value=y.detail.jsonformValue};return(y,b)=>(S(),A("span",fe,[l.value?(S(),A("eox-layercontrol",ct({key:F(o)},r,{for:F(o),".customEditorInterfaces":F(ue),"onDatetime:updated":tt,toolsAsList:"true",ref_key:"eoxLayercontrol",ref:d,"on:layerConfig:change":et}),[ht(y.$slots,"layerstitle",{},()=>[z("div",null,[n.title?(S(),A("p",ge,[z("strong",null,dt(n.title),1)])):M("v-if",!0)])],!0)],48,me)):M("v-if",!0)]))}},je=st(ye,[["styles",[pe]],["__scopeId","data-v-cd4de44c"]]);export{je as default};
