const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DAubJ0S3.js","assets/index-BmJaLv9B.css","assets/main-CuBr9dQF.js","assets/toolcool-range-slider.min-BO3Tl_nj.js","assets/utils-CHGQ4ScM.js","assets/index-CxojoGlr.js","assets/index-DWwlV0ci.js"])))=>i.map(i=>d[i]);
import{aT as it,aU as st,aV as nt,aW as at,aX as rt,aY as ot,aZ as x,a_ as k,a$ as lt,b0 as ct,_ as ht,ak as dt,av as R,aN as B,s as ut,e as pt,F as ft,E as mt,ax as P,ay as N,g as _,h as S,x as gt,q as T,m as yt,aC as bt,v as A,p as kt,C as z,b1 as wt,b2 as vt,b3 as xt,b4 as _t,B as Tt,b5 as Ct,b6 as Et}from"./index-DAubJ0S3.js";import{s as St,l as L,i as F,a as At,b as M,q as jt,t as Lt,o as Ft,p as Dt,f as Ot}from"./sequential-DDW98mYE.js";import"./main-C62c6Vd8.js";import $t from"./EodashLayoutSwitcher-ZRlESI9O-1eRztZx1.js";import"./dayjs.min-7BdINwRW.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import"./index-DWwlV0ci.js";import"./VTooltip-ClWHUmWL--JJ2taUm.js";import"./forwardRefs-B-c1_6yo-COB0uoTM.js";import"./transition-BkyUsZh_--incWp-f.js";const It=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};const Vt={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:it},Rt=(s=Vt,t,e)=>{const{kind:i,metadata:a}=e;let n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),n.set(e.name,s),i==="accessor"){const{name:r}=e;return{set(o){const c=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,c,s,!0,o)},init(o){return o!==void 0&&this.C(r,void 0,s,o),o}}}if(i==="setter"){const{name:r}=e;return function(o){const c=this[r];t.call(this,o),this.requestUpdate(r,c,s,!0,o)}}throw Error("Unsupported decorator location: "+i)};function f(s){return(t,e)=>typeof e=="object"?Rt(s,t,e):((i,a,n)=>{const r=a.hasOwnProperty(n);return a.constructor.createProperty(n,i),r?Object.getOwnPropertyDescriptor(a,n):void 0})(s,t,e)}const Bt=(s,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(s,t,e),e);function Pt(s,t){return(e,i,a)=>{const n=r=>r.renderRoot?.querySelector(s)??null;return Bt(e,i,{get(){return n(this)}})}}class Nt{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?St(t).domain(e):L().range(i).domain(e).interpolate(F)}setLogColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?At(t).domain(e):M().range(i).domain(e).interpolate(F)}setDiscreteColorScale(){this.colorScale=jt().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=Lt().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Ft().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}const j=nt(class extends at{constructor(s){if(super(s),s.type!==rt.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=s.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||this.nt?.has(i)||(a?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return ot}});class zt{constructor(t){this.cle=t}render(){const t=this.cle.titleText?x`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},i={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return x`<div
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
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:i}=this.cle,a={"legend-item":!0,line:t==="line",circle:t==="circle"};return x`${i.map(n=>x`<li
          class=${j(a)}
          style="--color:${e(n)}"
        >
          ${n}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:i,marginRight:a,tickSize:n,width:r,range:o}=this.cle,c=this.cle.marginBottom+n,l=this.cle.height+n,d=t.interpolator?.()||Dt(F,o);return k`<image
      x=${i}
      y=${e}
      width=${r-a-i}
      height=${l-e-c}
      preserveAspectRatio="none"
      href=${this.getColorRamp(d).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:i,colorScale:a,xScale:n}=this.cle,r=this.cle.height+t,o=this.cle.marginBottom+t,c=a.range(),l=h=>a.invertExtent(h).map(n)[0]||i,d=h=>{let[m,y]=a.invertExtent(h).map(n);return m=m||0,y=y||n.range()[1],y-m};return k`${c.map(h=>k`<rect x=${l(h)} y=${e} width=${d(h)} height=${r-e-o} fill=${h}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:i,tickFormatter:a,tickValues:n,xScale:r,marginTop:o}=this.cle,c=this.cle.height+e,l=this.cle.marginBottom+e,d=n?.length?n:r.ticks.apply(r,[t,i]),h=Math.max(e,0)+3,m=()=>d.map(y=>k`<g class="tick" transform='translate(${r(y)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${o+l-c}"></line>
      <text fill="currentColor" y="${h}" dy="0.71em">${a(y)}</text>
      </g>`);return k`<g
      class="x-axis"
      transform="translate(0, ${c-l})"
      text-anchor="middle"
    >${m()}</g>`}getColorRamp(t,e=256){const i=document.createElement("canvas");i.setAttribute("height","1"),i.setAttribute("width",`${e}`);const a=i.getContext("2d");for(let n=0;n<e;n++)a.fillStyle=t(n/(e-1)),a.fillRect(n,0,1,1);return i}}const Ut=325,Mt=32,qt=6,Ht=12,Wt=16,Gt=12,D=5,Xt=6,q=".1f",Jt=[0,1],Kt=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],Zt="Color Legend Element",Yt="circle",Qt="continuous",te=["domain","range","interpolator","scaleType"],ee=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class ie{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:i,marginRight:a}=this.cle;switch(t){case"continuous":this.xScale=L().domain(this.cle.domain).range([e,i-a]);break;case"log10":this.xScale=M().domain(this.cle.domain).range([e,i-a]).nice();break;case"discrete":case"threshold":this.xScale=L().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,i-a]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||D);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[t,e]=this.xScale.domain();this.cle.tickValues=[t,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),e]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=Ot(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||D,this.cle.tickFormat||q))}}const se=lt`
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
`;var p=function(s,t,e,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(s,t,e,i);else for(var o=s.length-1;o>=0;o--)(r=s[o])&&(n=(a<3?r(n):a>3?r(t,e,n):r(t,e))||n);return a>3&&n&&Object.defineProperty(t,e,n),n};let u=class extends ct{constructor(){super(...arguments),this.titleText=Zt,this.width=Ut,this.height=Mt,this.marginTop=qt,this.marginRight=Ht,this.marginBottom=Wt,this.marginLeft=Gt,this.scaleType=Qt,this.domain=Jt,this.range=Kt,this.markType=Yt,this.ticks=D,this.tickFormat=q,this.tickSize=Xt,this.colorScaleSetter=new Nt(this),this.axisTickSetter=new ie(this),this.renderer=new zt(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){te.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),ee.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};u.styles=[se];p([f({type:String})],u.prototype,"titleText",void 0);p([f({type:Number})],u.prototype,"width",void 0);p([f({type:Number})],u.prototype,"height",void 0);p([f({type:Number})],u.prototype,"marginTop",void 0);p([f({type:Number})],u.prototype,"marginRight",void 0);p([f({type:Number})],u.prototype,"marginBottom",void 0);p([f({type:Number})],u.prototype,"marginLeft",void 0);p([f({type:String})],u.prototype,"scaleType",void 0);p([f({type:Array})],u.prototype,"domain",void 0);p([f({type:Array})],u.prototype,"range",void 0);p([f({type:String})],u.prototype,"markType",void 0);p([f({type:Number})],u.prototype,"ticks",void 0);p([f({type:String})],u.prototype,"tickFormat",void 0);p([f({type:Number})],u.prototype,"tickSize",void 0);p([f({type:Array})],u.prototype,"tickValues",void 0);p([Pt("svg")],u.prototype,"svg",void 0);p([f({attribute:!1})],u.prototype,"interpolator",null);p([f({attribute:!1})],u.prototype,"tickFormatter",null);u=p([It("color-legend")],u);function H(s){return!(s===null||typeof s!="object"||s.nodeType||s===s.window||s.constructor&&!w(s.constructor.prototype,"isPrototypeOf"))}function W(s){return H(s)?C({},s):Array.isArray(s)?s.map(W):s}function C(s,...t){return t.forEach(e=>{e&&Object.keys(e).forEach(i=>{e[i]&&H(e[i])?(w(s,i)||(s[i]={}),C(s[i],e[i])):Array.isArray(e[i])?s[i]=W(e[i]):s[i]=e[i]})}),s}function w(s,t){return s&&Object.prototype.hasOwnProperty.call(s,t)}class ne{constructor(t,e){this.defaults=e,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=C({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,e){this.onChange(!0,!1,e)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,e,i){this.notify(),e||this.watch_listener&&this.watch_listener(),t&&this.change(i)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(e=>{let i;e.startsWith(this.jsoneditor.root.path)?i=e:(i=this.path.split("."),i[i.length-1]=e,i=i.join(".")),this.jsoneditor.watch(i,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const e=this.options.dependencies;if(!e)return;const i=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(e).forEach(n=>{let r;n.startsWith(this.jsoneditor.root.path)?r=n:(r=this.path.split("."),r[r.length-1]=n,r=r.join("."));const c=e[n];this.checkDependency(r,c)}),this.dependenciesFulfilled!==i&&this.notify();let a=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(a="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(n=>t.childNodes[n].style.display=a):t.style.display=a}checkDependency(t,e){if(this.path===t||this.jsoneditor===null)return;const i=this.jsoneditor.getEditor(t),a=i?i.getValue():void 0;!i||!i.dependenciesFulfilled||a===void 0||a===null?this.dependenciesFulfilled=!1:Array.isArray(e)?this.dependenciesFulfilled=e.some(n=>{if(JSON.stringify(a)===JSON.stringify(n))return!0}):typeof e=="object"?typeof a!="object"?this.dependenciesFulfilled=e===a:Object.keys(e).some(n=>{if(!w(e,n))return!1;if(!w(a,n)||e[n]!==a[n])return this.dependenciesFulfilled=!1,!0}):typeof e=="string"||typeof e=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&a===e:typeof e=="boolean"&&(e?this.dependenciesFulfilled=this.dependenciesFulfilled&&(a||a.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!a||a.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const e=this.jsoneditor.options.show_opt_in,i=typeof this.parent.options.show_opt_in<"u",a=i&&this.parent.options.show_opt_in===!0,n=i&&this.parent.options.show_opt_in===!1;(a||!n&&e||!i&&e)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},w(this.schema,"watch")){let t,e,i,a,n;const r=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(o=>{if(t=this.schema.watch[o],Array.isArray(t)){if(t.length<2)return;e=[t[0]].concat(t[1].split("."))}else e=t.split("."),this.theme.closest(this.container,`[data-schemaid="${e[0]}"]`)||e.unshift("#");if(i=e.shift(),i==="#"&&(i=this.jsoneditor.schema.id||this.jsoneditor.root.formname),a=this.theme.closest(this.container,`[data-schemaid="${i}"]`),!a)throw new Error(`Could not find ancestor node with id ${i}`);n=`${a.getAttribute("data-schemapath")}.${e.join(".")}`,r.startsWith(n)&&(this.watchLoop=!0),this.jsoneditor.watch(n,this.watch_listener),this.watched[o]=n})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,e,i,a=[]){const n=`json-editor-btn-${e}`;this.iconlib?e=this.iconlib.getIcon(e):e=null,t=this.translate(t,a),i=this.translate(i,a),!e&&i&&(t=i,i=null);const r=this.theme.getButton(t,e,i);return r.classList.add(n),r}setButtonText(t,e,i,a,n=[]){return this.iconlib?i=this.iconlib.getIcon(i):i=null,e=this.translate(e,n),a=this.translate(a,n),!i&&a&&(e=a,a=null),this.theme.setButtonText(t,e,i,a)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let e,i;const n=(t.mediaType||"application/javascript").split("/")[0],r=this.jsoneditor.compileTemplate(t.href,this.template_engine),o=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let c=null;if(t.download&&(c=t.download),c&&c!==!0&&(c=this.jsoneditor.compileTemplate(c,this.template_engine)),n==="image"){e=this.theme.getBlockLinkHolder(),i=document.createElement("a"),i.setAttribute("target","_blank");const l=document.createElement("img");this.theme.createImageLink(e,i,l),this.link_watchers.push(d=>{const h=r(d),m=o(d);i.setAttribute("href",h),i.setAttribute("title",m||h),l.setAttribute("src",h)})}else if(["audio","video"].includes(n)){e=this.theme.getBlockLinkHolder(),i=this.theme.getBlockLink(),i.setAttribute("target","_blank");const l=document.createElement(n);l.setAttribute("controls","controls"),this.theme.createMediaLink(e,i,l),this.link_watchers.push(d=>{const h=r(d),m=o(d);i.setAttribute("href",h),i.textContent=m||h,l.setAttribute("src",h)})}else i=e=this.theme.getBlockLink(),e.setAttribute("target","_blank"),e.textContent=t.rel,e.style.display="none",this.link_watchers.push(l=>{const d=r(l),h=o(l);d&&(e.style.display=""),e.setAttribute("href",d),e.textContent=h||d});return c&&i&&(c===!0?i.setAttribute("download",""):this.link_watchers.push(l=>{i.setAttribute("download",c(l))})),t.class&&t.class.split(" ").forEach(d=>{i.classList.add(d)}),e}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let e=!1;return this.watched&&Object.keys(this.watched).forEach(i=>{const a=this.jsoneditor.getEditor(this.watched[i]),n=a?a.getValue():null;this.watched_values[i]!==n&&(e=!0),t[i]=n}),t.self=this.getValue(),this.watched_values.self!==t.self&&(e=!0),this.watched_values=t,e}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let e=0;e<this.header.childNodes.length;e++)if(this.header.childNodes[e].nodeType===3){this.header.childNodes[e].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=C(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(i=>{const a=this.editors[i];if(a.schema&&a.schema.enum&&a.schema.options&&a.schema.options.enum_titles){const n=a.schema.enum.indexOf(a.value),r=a.options.enum_titles[n];t.properties[i]={enumTitle:r}}}));const e=this.header_template(t);e!==this.header_text&&(this.header_text=e,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let e=0;e<this.link_watchers.length;e++)this.link_watchers[e](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const e=[],i={};t.forEach(n=>{n.title&&(i[n.title]=i[n.title]||0,i[n.title]++),n.description&&(i[n.description]=i[n.description]||0,i[n.description]++),n.format&&(i[n.format]=i[n.format]||0,i[n.format]++),n.type&&(i[n.type]=i[n.type]||0,i[n.type]++)}),t.forEach(n=>{let r;typeof n=="string"?r=n:n.title&&i[n.title]<=1?r=n.title:n.format&&i[n.format]<=1?r=n.format:n.type&&i[n.type]<=1?r=n.type:n.description&&i[n.description]<=1?r=n.description:n.title?r=n.title:n.format?r=n.format:n.type?r=n.type:n.description?r=n.description:JSON.stringify(n).length<500?r=JSON.stringify(n):r="type",e.push(r)});const a={};return e.forEach((n,r)=>{a[n]=a[n]||0,a[n]++,i[n]>1&&(e[r]=`${n} ${a[n]}`)}),e}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,e){if(this.schema.options&&this.schema.options.inputAttributes){const i=this.schema.options.inputAttributes,a=["name","type"].concat(t),n=e||this.input;Object.keys(i).forEach(r=>{a.includes(r.toLowerCase())||n.setAttribute(r,i[r])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,e=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(i=>{e.includes(i.toLowerCase())||this.container.setAttribute(i,t[i])})}}expandCallbacks(t,e){const i=this.defaults.callbacks[t];return Object.entries(e).forEach(([a,n])=>{n===Object(n)?e[a]=this.expandCallbacks(t,n):typeof n=="string"&&typeof i=="object"&&typeof i[n]=="function"&&(e[a]=i[n].bind(null,this))}),e}showValidationErrors(t){}}function ae(s,t){const e=t==="bands"?s.items?.enum:s.enum||[],i=t==="bands"?s.items?.options?.colors:s.options?.colors||[];return i&&i.length===e.length?i:e.map(()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"))}function re(s,t,e){const i=t.indexOf(s);return i!==-1?e[i]:"#000000"}function G(s,t){const e=document.createElement("div");return e.dataset.band=s,e.textContent=t,e.draggable=!0,e.ondragstart=i=>{i.dataTransfer?.setData("band",s)},e}function X(s,t,e){t.forEach((i,a)=>{const n=e[a],r=G(i,n);s.control?.appendChild(r)})}function J(s,t){const e=document.createElement("style");return e.innerHTML=`
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
    ${s.map(i=>`[data-band="${i}"] { background: ${re(i,s,t)}; color: black; }`).join(`
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
  `,e}function K(s,t){const e=document.createElement("div");return e.dataset.slot=s,e.ondrop=t,e.ondragover=i=>i.preventDefault(),e}function O(s,t,e){const i=s.querySelector("[data-band]");i&&i.remove();const a=G(t,e);s.appendChild(a)}function oe(s,t,e,i){const a=J(e,t);s.control?.appendChild(a),X(s,e,i),s.control?.appendChild(document.createElement("hr")),le(s,e,i)}function le(s,t,e){const i=document.createElement("div");i.classList.add("slots-container"),["R","G","B"].forEach((a,n)=>{const o=K(a,c=>{c.preventDefault();const l=c.dataTransfer?.getData("band");if(!l)return;const d=t.indexOf(l),h=e[d]||l;O(o,l,h);const m=s.getValue()||[];m[n]=l,s.setValue(m),s.onChange(!0)});ce(o),i.appendChild(o),setTimeout(()=>{const c=s.getValue();if(c?.[n]){const l=c[n],d=t.indexOf(l),h=e[d]||l;l&&O(o,l,h)}})}),s.control?.appendChild(i)}function ce(s){switch(s.style.border="2px dashed",s.dataset.slot){case"R":{s.style.borderColor="#F88",s.style.background="#FEE";break}case"G":{s.style.borderColor="#8F8",s.style.background="#EFE";break}case"B":{s.style.borderColor="#88F",s.style.background="#EEF";break}}}const Z=/\{\{([^}]+)\}\}/g;function he(s,t,e,i){const a=s.schema.formulaTemplate||"{{A}}",n=J(e,t);s.control?.appendChild(n),X(s,e,i),s.control?.appendChild(document.createElement("hr")),ue(s,a,e,i)}function de(s){const t=s.schema.formulaTemplate||"{{A}}",e=s.variableValues||{};return t.replace(Z,(i,a)=>e[a.trim()]||i)}function ue(s,t,e,i){const a=document.createElement("div");a.classList.add("slots-container"),s.variableSlots={},t.split(/(\{\{[^}]+\}\})/).forEach(r=>{if(!r)return;if(!r.match(Z)){if(r=r.trim(),r){const l=document.createElement("span");l.classList.add("formula-text"),l.textContent=r,a.appendChild(l)}return}const o=r.replace(/[{}]/g,"").trim(),c=K(o,l=>{l.preventDefault();const d=l.dataTransfer?.getData("band");if(!d)return;const h=e.indexOf(d),m=i[h]||d;s.variableValues[o]=d,Y(s,o,d,m),s.value=de(s),s.onChange(!0)});a.appendChild(c),s.variableSlots[o]||(s.variableSlots[o]=[]),s.variableSlots[o].push(c)}),s.control?.appendChild(a),setTimeout(()=>{pe(s)})}function pe(s){s.variableValues&&s.variableSlots&&Object.keys(s.variableValues).forEach(t=>{const e=s.variableValues[t],i=s.bands||s.schema.enum||[],a=s.bandTitles||s.schema.options?.enum_titles||i,n=i.indexOf(e),r=a[n]||e;Y(s,t,e,r)})}function Y(s,t,e,i){s.variableSlots&&s.variableSlots[t]&&s.variableSlots[t].forEach(a=>{O(a,e,i)})}class U extends ne{variableSlots={};variableValues={};bands=[];bandTitles=[];colors=[];build(){super.build();const t=this.schema.format||"bands";this.bands=t==="bands"?this.schema.items?.enum:this.schema.enum||[],this.bandTitles=t==="bands"?this.schema.items?.options?.enum_titles:this.schema.options.enum_titles||this.bands,this.colors=ae(this.schema,t),this.control=document.createElement("div"),this.control.classList.add("form-control"),t==="bands"?oe(this,this.colors,this.bands,this.bandTitles):t==="bands-arithmetic"&&he(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",this.container?.appendChild(this.label),this.container?.appendChild(this.control)}}const fe=[{type:"array",format:"bands",func:U},{type:"string",format:"bands-arithmetic",func:U}],me="eox-layercontrol[data-v-8c6e0291]{overflow:auto}",ge={class:"d-flex flex-column"},ye=["for",".colormapRegistry",".customEditorInterfaces"],be={slot:"layerstitle",class:"d-flex justify-space-between ma-2 pa-2 flex-shrink-0"},ke={key:0},we={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:[String,Boolean],default:"Layers"},cssVars:{type:Object,default:{}},layoutIcon:{type:String,default:dt},layoutTarget:{type:String}},async setup(s){let t,e;customElements.get("eox-layercontrol")||([t,e]=R(()=>B(()=>import("./index-DAubJ0S3.js").then(g=>g.gE),__vite__mapDeps([0,1]))),await t,e()),customElements.get("eox-jsonform")||([t,e]=R(()=>B(()=>import("./main-CuBr9dQF.js"),__vite__mapDeps([2,0,1,3,4,5,6]))),await t,e());const i=s,a={tools:i.tools,style:i.cssVars},n=z(()=>!!i.layoutTarget&&!!i.layoutIcon),{selectedCompareStac:r,selectedStac:o,colormapRegistry:c}=ut(pt()),l=z(()=>i.map==="second"?P.value!==null&&r.value!==null:N.value!==null&&o.value!==null),d=i.map==="second"?ft:mt,h=i.map==="second"?P:N,m=Tt(null),y=async g=>{const{layer:E,datetime:et}=g.detail,I=await Ct(d,E);let b=[];if(I&&(b=await I.updateLayerJson(et,E.get("id"),h.value?.layers??[])),!b?.length)return;const V=b?.find(v=>v?.properties?.id==="AnalysisGroup")?.layers;V?.length&&(V?.forEach(v=>{v.properties.layerControlExpand=!0,v.properties.layerControlToolsExpand=!0}),h.value.layers=b,await Et(i.map==="second"?"compareLayertime:updated":"layertime:updated",h.value,b))};let $;const Q=g=>{clearTimeout($),$=setTimeout(()=>{y(g)},500)},tt=g=>{wt(g.detail.layer,g.detail.jsonformValue),vt(g.detail.layer,g.detail.jsonformValue),i.map==="second"?xt.value=g.detail.jsonformValue:_t.value=g.detail.jsonformValue};return(g,E)=>(_(),S("span",ge,[l.value?(_(),S("eox-layercontrol",gt({key:T(h)},a,{for:T(h),".colormapRegistry":T(c),".showLayerZoomState":!0,".customEditorInterfaces":T(fe),"onDatetime:updated":Q,toolsAsList:"true",ref_key:"eoxLayercontrol",ref:m,"on:layerConfig:change":tt}),[yt("span",be,[s.title?(_(),S("h4",ke,bt(s.title),1)):A("v-if",!0),n.value?(_(),kt($t,{key:1,target:s.layoutTarget,icon:s.layoutIcon},null,8,["target","icon"])):A("v-if",!0)])],48,ye)):A("v-if",!0)]))}},De=ht(we,[["styles",[me]],["__scopeId","data-v-8c6e0291"]]);export{De as default};
