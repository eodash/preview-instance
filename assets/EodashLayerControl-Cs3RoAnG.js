const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-CGrQ3bBX.js","assets/addCommonStyleSheet-Yq-7s86-.js","assets/when-CI7b_ccM.js","assets/repeat-CWCsuY6g.js","assets/directive-CwRn8Fwj.js","assets/directive-helpers-BBe88Per.js","assets/unsafe-html-9XwyaUtW.js","assets/map-Bv-shLAs.js","assets/style-DKU08UVs.js","assets/templates-DpRAJmv9.js","assets/index-eUEnCr0o.js","assets/getElement-CdRlZPdn.js","assets/main-DuSPapQD.js","assets/editor-CCHS57uz.js","assets/toolcool-range-slider.min-BO3Tl_nj.js","assets/utils-CHGQ4ScM.js","assets/index-CxojoGlr.js","assets/index-DJgBxPHe.js"])))=>i.map(i=>d[i]);
import{_ as QS,l as Ff,a9 as e1,n as r1,J as t1,ae as n1,ad as i1,b as ja,y as kf,g as a1,aU as o1,bL as s1,bM as u1,bN as c1,a3 as Bf,e as Fa,x as Uf}from"./main-iiQ98Tlg.js";import{f as l1,u as f1,T as d1,x as ee,c as Tn,b as v1,i as gt,a as p1,B as S_}from"./addCommonStyleSheet-Yq-7s86-.js";import{s as h1,l as sf,i as w_,q as m1,t as y1,o as g1,p as b1,f as _1}from"./sequential-w-Nnb9-P.js";import{e as S1,i as w1,t as E1}from"./directive-CwRn8Fwj.js";import{e as I1}from"./style-DKU08UVs.js";import{d as L}from"./dayjs.min-ang4_BnA.js";import{u as hr,t as mr,g as Pr,v as T1,a as x1,b as R1,d as E_,i as I_,m as T_,C as O1,T as q1,c as P1}from"./vis-timeline-graph2d--ADHnH6r.js";import{n as Ur}from"./when-CI7b_ccM.js";import{q as Br,v as x_,L as zf,z as Gf,a as A1,u as ka,c as D1}from"./templates-DpRAJmv9.js";import{o as Kf}from"./map-Bv-shLAs.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import{g as C1}from"./getElement-CdRlZPdn.js";import{i as M1}from"./index-DJgBxPHe.js";import{A as $1}from"./editor-CCHS57uz.js";const L1=e=>(r,t)=>{t!==void 0?t.addInitializer((()=>{customElements.define(e,r)})):customElements.define(e,r)};const N1={attribute:!0,type:String,converter:f1,reflect:!1,hasChanged:l1},j1=(e=N1,r,t)=>{const{kind:n,metadata:i}=t;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(t.name,e),n==="accessor"){const{name:o}=t;return{set(u){const c=r.get.call(this);r.set.call(this,u),this.requestUpdate(o,c,e)},init(u){return u!==void 0&&this.C(o,void 0,e,u),u}}}if(n==="setter"){const{name:o}=t;return function(u){const c=this[o];r.call(this,u),this.requestUpdate(o,c,e)}}throw Error("Unsupported decorator location: "+n)};function Oe(e){return(r,t)=>typeof t=="object"?j1(e,r,t):((n,i,a)=>{const o=i.hasOwnProperty(a);return i.constructor.createProperty(a,n),o?Object.getOwnPropertyDescriptor(i,a):void 0})(e,r,t)}const F1=(e,r,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(e,r,t),t);function k1(e,r){return(t,n,i)=>{const a=o=>o.renderRoot?.querySelector(e)??null;return F1(t,n,{get(){return a(this)}})}}class B1{constructor(r){this.cle=r}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:r,domain:t,range:n}=this.cle;this.colorScale=r?h1(r).domain(t):sf().range(n).domain(t).interpolate(w_)}setDiscreteColorScale(){this.colorScale=m1().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const r=this.cle.domain;this.colorScale=y1().domain(r.slice(1,r.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=g1().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(r){throw new Error(`invalid property scaletype: ${r}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}const Ba=S1(class extends w1{constructor(e){if(super(e),e.type!==E1.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((r=>e[r])).join(" ")+" "}update(e,[r]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((n=>n!==""))));for(const n in r)r[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(r)}const t=e.element.classList;for(const n of this.st)n in r||(t.remove(n),this.st.delete(n));for(const n in r){const i=!!r[n];i===this.st.has(n)||this.nt?.has(n)||(i?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return d1}});class U1{constructor(r){this.cle=r}render(){const r=this.cle.titleText?ee`<p class="legend-title">${this.cle.titleText}</p>`:"",t={hidden:this.cle.scaleType==="categorical"},n={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return ee`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${r}
      <slot name="subtitle"></slot>
      <svg
        class=${Ba(t)}
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
      <ul class=${Ba(n)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:r,colorScale:t,domain:n}=this.cle,i={"legend-item":!0,line:r==="line",circle:r==="circle"};return ee`${n.map(a=>ee`<li
          class=${Ba(i)}
          style="--color:${t(a)}"
        >
          ${a}
        </li>`)}`}renderContinuous(){if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:r,marginTop:t,marginLeft:n,marginRight:i,tickSize:a,width:o,range:u}=this.cle,c=this.cle.marginBottom+a,f=this.cle.height+a,d=r.interpolator?.()||b1(w_,u);return Tn`<image
      x=${n}
      y=${t}
      width=${o-i-n}
      height=${f-t-c}
      preserveAspectRatio="none"
      href=${this.getColorRamp(d).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:r,marginTop:t,marginLeft:n,colorScale:i,xScale:a}=this.cle,o=this.cle.height+r,u=this.cle.marginBottom+r,c=i.range(),f=p=>i.invertExtent(p).map(a)[0]||n,d=p=>{let[h,m]=i.invertExtent(p).map(a);return h=h||0,m=m||a.range()[1],m-h};return Tn`${c.map(p=>Tn`<rect x=${f(p)} y=${t} width=${d(p)} height=${o-t-u} fill=${p}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:r,tickSize:t,tickFormat:n,tickFormatter:i,tickValues:a,xScale:o,marginTop:u}=this.cle,c=this.cle.height+t,f=this.cle.marginBottom+t,d=a?.length?a:o.ticks.apply(o,[r,n]),p=Math.max(t,0)+3,h=()=>d.map(m=>Tn`<g class="tick" transform='translate(${o(m)},0)'>
      <line stroke="currentColor" y2="${t}" y1="${u+f-c}"></line>
      <text fill="currentColor" y="${p}" dy="0.71em">${i(m)}</text>
      </g>`);return Tn`<g
      class="x-axis"
      transform="translate(0, ${c-f})"
      text-anchor="middle"
    >${h()}</g>`}getColorRamp(r,t=256){const n=document.createElement("canvas");n.setAttribute("height","1"),n.setAttribute("width",`${t}`);const i=n.getContext("2d");for(let a=0;a<t;a++)i.fillStyle=r(a/(t-1)),i.fillRect(a,0,1,1);return n}}const z1=325,G1=32,K1=6,W1=12,V1=16,Y1=12,R_=5,H1=6,O_=".1f",X1=[0,1],Z1=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],J1="Color Legend Element",Q1="circle",ew="continuous",rw=["domain","range","interpolator","scaleType"],tw=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class nw{constructor(r){this.cle=r}setXScale(){const{scaleType:r,marginLeft:t,width:n,marginRight:i}=this.cle;switch(r){case"continuous":this.xScale=sf().domain(this.cle.domain).range([t,n-i]);break;case"discrete":case"threshold":this.xScale=sf().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([t,n-i]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${r}`)}}handleAxisTicks(){if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[r,t]=this.xScale.domain();this.cle.tickValues=[r,...this.cle.colorScale?.thresholds?.()||this.cle.colorScale.domain(),t]}typeof this.cle.tickFormatter!="function"&&(this.cle.tickFormat?.length?this.cle.tickFormatter=_1(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||R_,this.cle.tickFormat||O_))}}const iw=v1`
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
`;var _e=function(e,r,t,n){var i=arguments.length,a=i<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,r,t,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(r,t,a):o(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a};let fe=class extends gt{constructor(){super(...arguments),this.titleText=J1,this.width=z1,this.height=G1,this.marginTop=K1,this.marginRight=W1,this.marginBottom=V1,this.marginLeft=Y1,this.scaleType=ew,this.domain=X1,this.range=Z1,this.markType=Q1,this.ticks=R_,this.tickFormat=O_,this.tickSize=H1,this.colorScaleSetter=new B1(this),this.axisTickSetter=new nw(this),this.renderer=new U1(this)}get interpolator(){return this._interpolator}set interpolator(r){if(typeof r=="function"){const t=this.interpolator;this._interpolator=r,this.requestUpdate("interpolator",t)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(r){if(typeof r=="function"){const t=this.tickFormatter;this._tickFormatter=r,this.requestUpdate("tickFormatter",t)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(r){rw.some(t=>r.has(t))&&this.colorScaleSetter.setColorScale(),tw.some(t=>r.has(t))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};fe.styles=[iw];_e([Oe({type:String})],fe.prototype,"titleText",void 0);_e([Oe({type:Number})],fe.prototype,"width",void 0);_e([Oe({type:Number})],fe.prototype,"height",void 0);_e([Oe({type:Number})],fe.prototype,"marginTop",void 0);_e([Oe({type:Number})],fe.prototype,"marginRight",void 0);_e([Oe({type:Number})],fe.prototype,"marginBottom",void 0);_e([Oe({type:Number})],fe.prototype,"marginLeft",void 0);_e([Oe({type:String})],fe.prototype,"scaleType",void 0);_e([Oe({type:Array})],fe.prototype,"domain",void 0);_e([Oe({type:Array})],fe.prototype,"range",void 0);_e([Oe({type:String})],fe.prototype,"markType",void 0);_e([Oe({type:Number})],fe.prototype,"ticks",void 0);_e([Oe({type:String})],fe.prototype,"tickFormat",void 0);_e([Oe({type:Number})],fe.prototype,"tickSize",void 0);_e([Oe({type:Array})],fe.prototype,"tickValues",void 0);_e([k1("svg")],fe.prototype,"svg",void 0);_e([Oe({attribute:!1})],fe.prototype,"interpolator",null);_e([Oe({attribute:!1})],fe.prototype,"tickFormatter",null);fe=_e([L1("color-legend")],fe);const vt=`
:host {
  display: block;
}
`;p1();const Vt=`
${I1}

:host, :root {
  --navigation-button-display: inline-flex;
}

[part=controls] {
  display: flex;
  align-items: center;
  gap: 8px;
}

#date-container input {
  min-width: 90px;
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  font-size: small;
  background: white;
  outline: none;    
  margin: 0px 2px;
}

#date-container input.input-field {
  border: 1.5px solid #0e0e0e30;
  padding: 2px;
  border-radius: 4px;
}

#date-container input.input-field:focus-visible {
  border: 2px solid #005fcc;
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

tc-range-slider {
  display: inline-block;
  margin: 0;
}
`;var Wf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ua={exports:{}},Vf={},xn,Yf;function ve(){if(Yf)return xn;Yf=1;var e=function(r){return r&&r.Math===Math&&r};return xn=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof Wf=="object"&&Wf)||e(typeof xn=="object"&&xn)||(function(){return this})()||Function("return this")(),xn}var za,Hf;function re(){return Hf||(Hf=1,za=function(e){try{return!!e()}catch{return!0}}),za}var Ga,Xf;function kn(){if(Xf)return Ga;Xf=1;var e=re();return Ga=!e(function(){var r=(function(){}).bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Ga}var Ka,Zf;function Ii(){if(Zf)return Ka;Zf=1;var e=kn(),r=Function.prototype,t=r.apply,n=r.call;return Ka=typeof Reflect=="object"&&Reflect.apply||(e?n.bind(t):function(){return n.apply(t,arguments)}),Ka}var Wa,Jf;function ae(){if(Jf)return Wa;Jf=1;var e=kn(),r=Function.prototype,t=r.call,n=e&&r.bind.bind(t,t);return Wa=e?n:function(i){return function(){return t.apply(i,arguments)}},Wa}var Va,Qf;function $r(){if(Qf)return Va;Qf=1;var e=ae(),r=e({}.toString),t=e("".slice);return Va=function(n){return t(r(n),8,-1)},Va}var Ya,ed;function q_(){if(ed)return Ya;ed=1;var e=$r(),r=ae();return Ya=function(t){if(e(t)==="Function")return r(t)},Ya}var Ha,rd;function Ee(){if(rd)return Ha;rd=1;var e=typeof document=="object"&&document.all;return Ha=typeof e>"u"&&e!==void 0?function(r){return typeof r=="function"||r===e}:function(r){return typeof r=="function"},Ha}var Xa={},Za,td;function pe(){if(td)return Za;td=1;var e=re();return Za=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Za}var Ja,nd;function Be(){if(nd)return Ja;nd=1;var e=kn(),r=Function.prototype.call;return Ja=e?r.bind(r):function(){return r.apply(r,arguments)},Ja}var Qa={},id;function hf(){if(id)return Qa;id=1;var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,t=r&&!e.call({1:2},1);return Qa.f=t?function(i){var a=r(this,i);return!!a&&a.enumerable}:e,Qa}var eo,ad;function Bn(){return ad||(ad=1,eo=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}),eo}var ro,od;function Ti(){if(od)return ro;od=1;var e=ae(),r=re(),t=$r(),n=Object,i=e("".split);return ro=r(function(){return!n("z").propertyIsEnumerable(0)})?function(a){return t(a)==="String"?i(a,""):n(a)}:n,ro}var to,sd;function Un(){return sd||(sd=1,to=function(e){return e==null}),to}var no,ud;function bt(){if(ud)return no;ud=1;var e=Un(),r=TypeError;return no=function(t){if(e(t))throw new r("Can't call method on "+t);return t},no}var io,cd;function yr(){if(cd)return io;cd=1;var e=Ti(),r=bt();return io=function(t){return e(r(t))},io}var ao,ld;function $e(){if(ld)return ao;ld=1;var e=Ee();return ao=function(r){return typeof r=="object"?r!==null:e(r)},ao}var oo,fd;function Se(){return fd||(fd=1,oo={}),oo}var so,dd;function Ke(){if(dd)return so;dd=1;var e=Se(),r=ve(),t=Ee(),n=function(i){return t(i)?i:void 0};return so=function(i,a){return arguments.length<2?n(e[i])||n(r[i]):e[i]&&e[i][a]||r[i]&&r[i][a]},so}var uo,vd;function Ie(){if(vd)return uo;vd=1;var e=ae();return uo=e({}.isPrototypeOf),uo}var co,pd;function Zt(){if(pd)return co;pd=1;var e=ve(),r=e.navigator,t=r&&r.userAgent;return co=t?String(t):"",co}var lo,hd;function zn(){if(hd)return lo;hd=1;var e=ve(),r=Zt(),t=e.process,n=e.Deno,i=t&&t.versions||n&&n.version,a=i&&i.v8,o,u;return a&&(o=a.split("."),u=o[0]>0&&o[0]<4?1:+(o[0]+o[1])),!u&&r&&(o=r.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=r.match(/Chrome\/(\d+)/),o&&(u=+o[1]))),lo=u,lo}var fo,md;function Jt(){if(md)return fo;md=1;var e=zn(),r=re(),t=ve(),n=t.String;return fo=!!Object.getOwnPropertySymbols&&!r(function(){var i=Symbol("symbol detection");return!n(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&e&&e<41}),fo}var vo,yd;function P_(){if(yd)return vo;yd=1;var e=Jt();return vo=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",vo}var po,gd;function Gn(){if(gd)return po;gd=1;var e=Ke(),r=Ee(),t=Ie(),n=P_(),i=Object;return po=n?function(a){return typeof a=="symbol"}:function(a){var o=e("Symbol");return r(o)&&t(o.prototype,i(a))},po}var ho,bd;function Qt(){if(bd)return ho;bd=1;var e=String;return ho=function(r){try{return e(r)}catch{return"Object"}},ho}var mo,_d;function Lr(){if(_d)return mo;_d=1;var e=Ee(),r=Qt(),t=TypeError;return mo=function(n){if(e(n))return n;throw new t(r(n)+" is not a function")},mo}var yo,Sd;function mf(){if(Sd)return yo;Sd=1;var e=Lr(),r=Un();return yo=function(t,n){var i=t[n];return r(i)?void 0:e(i)},yo}var go,wd;function aw(){if(wd)return go;wd=1;var e=Be(),r=Ee(),t=$e(),n=TypeError;return go=function(i,a){var o,u;if(a==="string"&&r(o=i.toString)&&!t(u=e(o,i))||r(o=i.valueOf)&&!t(u=e(o,i))||a!=="string"&&r(o=i.toString)&&!t(u=e(o,i)))return u;throw new n("Can't convert object to primitive value")},go}var bo={exports:{}},_o,Ed;function en(){return Ed||(Ed=1,_o=!0),_o}var So,Id;function ow(){if(Id)return So;Id=1;var e=ve(),r=Object.defineProperty;return So=function(t,n){try{r(e,t,{value:n,configurable:!0,writable:!0})}catch{e[t]=n}return n},So}var Td;function yf(){if(Td)return bo.exports;Td=1;var e=en(),r=ve(),t=ow(),n="__core-js_shared__",i=bo.exports=r[n]||t(n,{});return(i.versions||(i.versions=[])).push({version:"3.44.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",source:"https://github.com/zloirock/core-js"}),bo.exports}var wo,xd;function rn(){if(xd)return wo;xd=1;var e=yf();return wo=function(r,t){return e[r]||(e[r]=t||{})},wo}var Eo,Rd;function sr(){if(Rd)return Eo;Rd=1;var e=bt(),r=Object;return Eo=function(t){return r(e(t))},Eo}var Io,Od;function Te(){if(Od)return Io;Od=1;var e=ae(),r=sr(),t=e({}.hasOwnProperty);return Io=Object.hasOwn||function(i,a){return t(r(i),a)},Io}var To,qd;function xi(){if(qd)return To;qd=1;var e=ae(),r=0,t=Math.random(),n=e(1.1.toString);return To=function(i){return"Symbol("+(i===void 0?"":i)+")_"+n(++r+t,36)},To}var xo,Pd;function xe(){if(Pd)return xo;Pd=1;var e=ve(),r=rn(),t=Te(),n=xi(),i=Jt(),a=P_(),o=e.Symbol,u=r("wks"),c=a?o.for||o:o&&o.withoutSetter||n;return xo=function(f){return t(u,f)||(u[f]=i&&t(o,f)?o[f]:c("Symbol."+f)),u[f]},xo}var Ro,Ad;function A_(){if(Ad)return Ro;Ad=1;var e=Be(),r=$e(),t=Gn(),n=mf(),i=aw(),a=xe(),o=TypeError,u=a("toPrimitive");return Ro=function(c,f){if(!r(c)||t(c))return c;var d=n(c,u),p;if(d){if(f===void 0&&(f="default"),p=e(d,c,f),!r(p)||t(p))return p;throw new o("Can't convert object to primitive value")}return f===void 0&&(f="number"),i(c,f)},Ro}var Oo,Dd;function gf(){if(Dd)return Oo;Dd=1;var e=A_(),r=Gn();return Oo=function(t){var n=e(t,"string");return r(n)?n:n+""},Oo}var qo,Cd;function D_(){if(Cd)return qo;Cd=1;var e=ve(),r=$e(),t=e.document,n=r(t)&&r(t.createElement);return qo=function(i){return n?t.createElement(i):{}},qo}var Po,Md;function C_(){if(Md)return Po;Md=1;var e=pe(),r=re(),t=D_();return Po=!e&&!r(function(){return Object.defineProperty(t("div"),"a",{get:function(){return 7}}).a!==7}),Po}var $d;function Ri(){if($d)return Xa;$d=1;var e=pe(),r=Be(),t=hf(),n=Bn(),i=yr(),a=gf(),o=Te(),u=C_(),c=Object.getOwnPropertyDescriptor;return Xa.f=e?c:function(d,p){if(d=i(d),p=a(p),u)try{return c(d,p)}catch{}if(o(d,p))return n(!r(t.f,d,p),d[p])},Xa}var Ao,Ld;function sw(){if(Ld)return Ao;Ld=1;var e=re(),r=Ee(),t=/#|\.prototype\./,n=function(c,f){var d=a[i(c)];return d===u?!0:d===o?!1:r(f)?e(f):!!f},i=n.normalize=function(c){return String(c).replace(t,".").toLowerCase()},a=n.data={},o=n.NATIVE="N",u=n.POLYFILL="P";return Ao=n,Ao}var Do,Nd;function Oi(){if(Nd)return Do;Nd=1;var e=q_(),r=Lr(),t=kn(),n=e(e.bind);return Do=function(i,a){return r(i),a===void 0?i:t?n(i,a):function(){return i.apply(a,arguments)}},Do}var Co={},Mo,jd;function M_(){if(jd)return Mo;jd=1;var e=pe(),r=re();return Mo=e&&r(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),Mo}var $o,Fd;function Nr(){if(Fd)return $o;Fd=1;var e=$e(),r=String,t=TypeError;return $o=function(n){if(e(n))return n;throw new t(r(n)+" is not an object")},$o}var kd;function Ze(){if(kd)return Co;kd=1;var e=pe(),r=C_(),t=M_(),n=Nr(),i=gf(),a=TypeError,o=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c="enumerable",f="configurable",d="writable";return Co.f=e?t?function(h,m,g){if(n(h),m=i(m),n(g),typeof h=="function"&&m==="prototype"&&"value"in g&&d in g&&!g[d]){var _=u(h,m);_&&_[d]&&(h[m]=g.value,g={configurable:f in g?g[f]:_[f],enumerable:c in g?g[c]:_[c],writable:!1})}return o(h,m,g)}:o:function(h,m,g){if(n(h),m=i(m),n(g),r)try{return o(h,m,g)}catch{}if("get"in g||"set"in g)throw new a("Accessors not supported");return"value"in g&&(h[m]=g.value),h},Co}var Lo,Bd;function tn(){if(Bd)return Lo;Bd=1;var e=pe(),r=Ze(),t=Bn();return Lo=e?function(n,i,a){return r.f(n,i,t(1,a))}:function(n,i,a){return n[i]=a,n},Lo}var No,Ud;function B(){if(Ud)return No;Ud=1;var e=ve(),r=Ii(),t=q_(),n=Ee(),i=Ri().f,a=sw(),o=Se(),u=Oi(),c=tn(),f=Te(),d=function(p){var h=function(m,g,_){if(this instanceof h){switch(arguments.length){case 0:return new p;case 1:return new p(m);case 2:return new p(m,g)}return new p(m,g,_)}return r(p,this,arguments)};return h.prototype=p.prototype,h};return No=function(p,h){var m=p.target,g=p.global,_=p.stat,T=p.proto,x=g?e:_?e[m]:e[m]&&e[m].prototype,w=g?o:o[m]||c(o,m,{})[m],A=w.prototype,E,O,P,q,I,R,D,M,N;for(q in h)E=a(g?q:m+(_?".":"#")+q,p.forced),O=!E&&x&&f(x,q),R=w[q],O&&(p.dontCallGetSet?(N=i(x,q),D=N&&N.value):D=x[q]),I=O&&D?D:h[q],!(!E&&!T&&typeof R==typeof I)&&(p.bind&&O?M=u(I,e):p.wrap&&O?M=d(I):T&&n(I)?M=t(I):M=I,(p.sham||I&&I.sham||R&&R.sham)&&c(M,"sham",!0),c(w,q,M),T&&(P=m+"Prototype",f(o,P)||c(o,P,{}),c(o[P],q,I),p.real&&A&&(E||!A[q])&&c(A,q,I)))},No}var zd;function uw(){if(zd)return Vf;zd=1;var e=B(),r=pe(),t=Ze().f;return e({target:"Object",stat:!0,forced:Object.defineProperty!==t,sham:!r},{defineProperty:t}),Vf}var Gd;function cw(){if(Gd)return Ua.exports;Gd=1,uw();var e=Se(),r=e.Object,t=Ua.exports=function(i,a,o){return r.defineProperty(i,a,o)};return r.defineProperty.sham&&(t.sham=!0),Ua.exports}var jo,Kd;function $_(){if(Kd)return jo;Kd=1;var e=cw();return jo=e,jo}var Fo,Wd;function lw(){if(Wd)return Fo;Wd=1;var e=$_();return Fo=e,Fo}var ko,Vd;function fw(){if(Vd)return ko;Vd=1;var e=lw();return ko=e,ko}var Bo,Yd;function dw(){return Yd||(Yd=1,Bo=fw()),Bo}var vw=dw(),pw=W(vw),Hd={},Uo,Xd;function _t(){if(Xd)return Uo;Xd=1;var e=$r();return Uo=Array.isArray||function(t){return e(t)==="Array"},Uo}var zo,Zd;function hw(){if(Zd)return zo;Zd=1;var e=Math.ceil,r=Math.floor;return zo=Math.trunc||function(n){var i=+n;return(i>0?r:e)(i)},zo}var Go,Jd;function nn(){if(Jd)return Go;Jd=1;var e=hw();return Go=function(r){var t=+r;return t!==t||t===0?0:e(t)},Go}var Ko,Qd;function L_(){if(Qd)return Ko;Qd=1;var e=nn(),r=Math.min;return Ko=function(t){var n=e(t);return n>0?r(n,9007199254740991):0},Ko}var Wo,ev;function Kr(){if(ev)return Wo;ev=1;var e=L_();return Wo=function(r){return e(r.length)},Wo}var Vo,rv;function N_(){if(rv)return Vo;rv=1;var e=TypeError,r=9007199254740991;return Vo=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t},Vo}var Yo,tv;function qi(){if(tv)return Yo;tv=1;var e=pe(),r=Ze(),t=Bn();return Yo=function(n,i,a){e?r.f(n,i,t(0,a)):n[i]=a},Yo}var Ho,nv;function bf(){if(nv)return Ho;nv=1;var e=xe(),r=e("toStringTag"),t={};return t[r]="z",Ho=String(t)==="[object z]",Ho}var Xo,iv;function Wr(){if(iv)return Xo;iv=1;var e=bf(),r=Ee(),t=$r(),n=xe(),i=n("toStringTag"),a=Object,o=t((function(){return arguments})())==="Arguments",u=function(c,f){try{return c[f]}catch{}};return Xo=e?t:function(c){var f,d,p;return c===void 0?"Undefined":c===null?"Null":typeof(d=u(f=a(c),i))=="string"?d:o?t(f):(p=t(f))==="Object"&&r(f.callee)?"Arguments":p},Xo}var Zo,av;function mw(){if(av)return Zo;av=1;var e=ae(),r=Ee(),t=yf(),n=e(Function.toString);return r(t.inspectSource)||(t.inspectSource=function(i){return n(i)}),Zo=t.inspectSource,Zo}var Jo,ov;function j_(){if(ov)return Jo;ov=1;var e=ae(),r=re(),t=Ee(),n=Wr(),i=Ke(),a=mw(),o=function(){},u=i("Reflect","construct"),c=/^\s*(?:class|function)\b/,f=e(c.exec),d=!c.test(o),p=function(g){if(!t(g))return!1;try{return u(o,[],g),!0}catch{return!1}},h=function(g){if(!t(g))return!1;switch(n(g)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!f(c,a(g))}catch{return!0}};return h.sham=!0,Jo=!u||r(function(){var m;return p(p.call)||!p(Object)||!p(function(){m=!0})||m})?h:p,Jo}var Qo,sv;function yw(){if(sv)return Qo;sv=1;var e=_t(),r=j_(),t=$e(),n=xe(),i=n("species"),a=Array;return Qo=function(o){var u;return e(o)&&(u=o.constructor,r(u)&&(u===a||e(u.prototype))?u=void 0:t(u)&&(u=u[i],u===null&&(u=void 0))),u===void 0?a:u},Qo}var es,uv;function _f(){if(uv)return es;uv=1;var e=yw();return es=function(r,t){return new(e(r))(t===0?0:t)},es}var rs,cv;function Kn(){if(cv)return rs;cv=1;var e=re(),r=xe(),t=zn(),n=r("species");return rs=function(i){return t>=51||!e(function(){var a=[],o=a.constructor={};return o[n]=function(){return{foo:1}},a[i](Boolean).foo!==1})},rs}var lv;function F_(){if(lv)return Hd;lv=1;var e=B(),r=re(),t=_t(),n=$e(),i=sr(),a=Kr(),o=N_(),u=qi(),c=_f(),f=Kn(),d=xe(),p=zn(),h=d("isConcatSpreadable"),m=p>=51||!r(function(){var T=[];return T[h]=!1,T.concat()[0]!==T}),g=function(T){if(!n(T))return!1;var x=T[h];return x!==void 0?!!x:t(T)},_=!m||!f("concat");return e({target:"Array",proto:!0,arity:1,forced:_},{concat:function(x){var w=i(this),A=c(w,0),E=0,O,P,q,I,R;for(O=-1,q=arguments.length;O<q;O++)if(R=O===-1?w:arguments[O],g(R))for(I=a(R),o(E+I),P=0;P<I;P++,E++)P in R&&u(A,E,R[P]);else o(E+1),u(A,E++,R);return A.length=E,A}}),Hd}var fv={},dv={},ts,vv;function Vr(){if(vv)return ts;vv=1;var e=Wr(),r=String;return ts=function(t){if(e(t)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return r(t)},ts}var ns={},is,pv;function Sf(){if(pv)return is;pv=1;var e=nn(),r=Math.max,t=Math.min;return is=function(n,i){var a=e(n);return a<0?r(a+i,0):t(a,i)},is}var as,hv;function gw(){if(hv)return as;hv=1;var e=yr(),r=Sf(),t=Kr(),n=function(i){return function(a,o,u){var c=e(a),f=t(c);if(f===0)return!i&&-1;var d=r(u,f),p;if(i&&o!==o){for(;f>d;)if(p=c[d++],p!==p)return!0}else for(;f>d;d++)if((i||d in c)&&c[d]===o)return i||d||0;return!i&&-1}};return as={includes:n(!0),indexOf:n(!1)},as}var os,mv;function Wn(){return mv||(mv=1,os={}),os}var ss,yv;function k_(){if(yv)return ss;yv=1;var e=ae(),r=Te(),t=yr(),n=gw().indexOf,i=Wn(),a=e([].push);return ss=function(o,u){var c=t(o),f=0,d=[],p;for(p in c)!r(i,p)&&r(c,p)&&a(d,p);for(;u.length>f;)r(c,p=u[f++])&&(~n(d,p)||a(d,p));return d},ss}var us,gv;function wf(){return gv||(gv=1,us=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),us}var cs,bv;function Pi(){if(bv)return cs;bv=1;var e=k_(),r=wf();return cs=Object.keys||function(n){return e(n,r)},cs}var _v;function Ef(){if(_v)return ns;_v=1;var e=pe(),r=M_(),t=Ze(),n=Nr(),i=yr(),a=Pi();return ns.f=e&&!r?Object.defineProperties:function(u,c){n(u);for(var f=i(c),d=a(c),p=d.length,h=0,m;p>h;)t.f(u,m=d[h++],f[m]);return u},ns}var ls,Sv;function bw(){if(Sv)return ls;Sv=1;var e=Ke();return ls=e("document","documentElement"),ls}var fs,wv;function Ai(){if(wv)return fs;wv=1;var e=rn(),r=xi(),t=e("keys");return fs=function(n){return t[n]||(t[n]=r(n))},fs}var ds,Ev;function Vn(){if(Ev)return ds;Ev=1;var e=Nr(),r=Ef(),t=wf(),n=Wn(),i=bw(),a=D_(),o=Ai(),u=">",c="<",f="prototype",d="script",p=o("IE_PROTO"),h=function(){},m=function(w){return c+d+u+w+c+"/"+d+u},g=function(w){w.write(m("")),w.close();var A=w.parentWindow.Object;return w=null,A},_=function(){var w=a("iframe"),A="java"+d+":",E;return w.style.display="none",i.appendChild(w),w.src=String(A),E=w.contentWindow.document,E.open(),E.write(m("document.F=Object")),E.close(),E.F},T,x=function(){try{T=new ActiveXObject("htmlfile")}catch{}x=typeof document<"u"?document.domain&&T?g(T):_():g(T);for(var w=t.length;w--;)delete x[f][t[w]];return x()};return n[p]=!0,ds=Object.create||function(A,E){var O;return A!==null?(h[f]=e(A),O=new h,h[f]=null,O[p]=A):O=x(),E===void 0?O:r.f(O,E)},ds}var vs={},Iv;function Di(){if(Iv)return vs;Iv=1;var e=k_(),r=wf(),t=r.concat("length","prototype");return vs.f=Object.getOwnPropertyNames||function(i){return e(i,t)},vs}var ps={},hs,Tv;function an(){if(Tv)return hs;Tv=1;var e=ae();return hs=e([].slice),hs}var xv;function B_(){if(xv)return ps;xv=1;var e=$r(),r=yr(),t=Di().f,n=an(),i=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(o){try{return t(o)}catch{return n(i)}};return ps.f=function(u){return i&&e(u)==="Window"?a(u):t(r(u))},ps}var ms={},Rv;function Ci(){return Rv||(Rv=1,ms.f=Object.getOwnPropertySymbols),ms}var ys,Ov;function Yn(){if(Ov)return ys;Ov=1;var e=tn();return ys=function(r,t,n,i){return i&&i.enumerable?r[t]=n:e(r,t,n),r},ys}var gs,qv;function If(){if(qv)return gs;qv=1;var e=Ze();return gs=function(r,t,n){return e.f(r,t,n)},gs}var bs={},Pv;function Mi(){if(Pv)return bs;Pv=1;var e=xe();return bs.f=e,bs}var _s,Av;function ue(){if(Av)return _s;Av=1;var e=Se(),r=Te(),t=Mi(),n=Ze().f;return _s=function(i){var a=e.Symbol||(e.Symbol={});r(a,i)||n(a,i,{value:t.f(i)})},_s}var Ss,Dv;function U_(){if(Dv)return Ss;Dv=1;var e=Be(),r=Ke(),t=xe(),n=Yn();return Ss=function(){var i=r("Symbol"),a=i&&i.prototype,o=a&&a.valueOf,u=t("toPrimitive");a&&!a[u]&&n(a,u,function(c){return e(o,this)},{arity:1})},Ss}var ws,Cv;function _w(){if(Cv)return ws;Cv=1;var e=bf(),r=Wr();return ws=e?{}.toString:function(){return"[object "+r(this)+"]"},ws}var Es,Mv;function St(){if(Mv)return Es;Mv=1;var e=bf(),r=Ze().f,t=tn(),n=Te(),i=_w(),a=xe(),o=a("toStringTag");return Es=function(u,c,f,d){var p=f?u:u&&u.prototype;p&&(n(p,o)||r(p,o,{configurable:!0,value:c}),d&&!e&&t(p,"toString",i))},Es}var Is,$v;function Sw(){if($v)return Is;$v=1;var e=ve(),r=Ee(),t=e.WeakMap;return Is=r(t)&&/native code/.test(String(t)),Is}var Ts,Lv;function Hn(){if(Lv)return Ts;Lv=1;var e=Sw(),r=ve(),t=$e(),n=tn(),i=Te(),a=yf(),o=Ai(),u=Wn(),c="Object already initialized",f=r.TypeError,d=r.WeakMap,p,h,m,g=function(w){return m(w)?h(w):p(w,{})},_=function(w){return function(A){var E;if(!t(A)||(E=h(A)).type!==w)throw new f("Incompatible receiver, "+w+" required");return E}};if(e||a.state){var T=a.state||(a.state=new d);T.get=T.get,T.has=T.has,T.set=T.set,p=function(w,A){if(T.has(w))throw new f(c);return A.facade=w,T.set(w,A),A},h=function(w){return T.get(w)||{}},m=function(w){return T.has(w)}}else{var x=o("state");u[x]=!0,p=function(w,A){if(i(w,x))throw new f(c);return A.facade=w,n(w,x,A),A},h=function(w){return i(w,x)?w[x]:{}},m=function(w){return i(w,x)}}return Ts={set:p,get:h,has:m,enforce:g,getterFor:_},Ts}var xs,Nv;function on(){if(Nv)return xs;Nv=1;var e=Oi(),r=ae(),t=Ti(),n=sr(),i=Kr(),a=_f(),o=r([].push),u=function(c){var f=c===1,d=c===2,p=c===3,h=c===4,m=c===6,g=c===7,_=c===5||m;return function(T,x,w,A){for(var E=n(T),O=t(E),P=i(O),q=e(x,w),I=0,R=A||a,D=f?R(T,P):d||g?R(T,0):void 0,M,N;P>I;I++)if((_||I in O)&&(M=O[I],N=q(M,I,E),c))if(f)D[I]=N;else if(N)switch(c){case 3:return!0;case 5:return M;case 6:return I;case 2:o(D,M)}else switch(c){case 4:return!1;case 7:o(D,M)}return m?-1:p||h?h:D}};return xs={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)},xs}var jv;function ww(){if(jv)return dv;jv=1;var e=B(),r=ve(),t=Be(),n=ae(),i=en(),a=pe(),o=Jt(),u=re(),c=Te(),f=Ie(),d=Nr(),p=yr(),h=gf(),m=Vr(),g=Bn(),_=Vn(),T=Pi(),x=Di(),w=B_(),A=Ci(),E=Ri(),O=Ze(),P=Ef(),q=hf(),I=Yn(),R=If(),D=rn(),M=Ai(),N=Wn(),k=xi(),H=xe(),oe=Mi(),Qe=ue(),he=U_(),Le=St(),Ne=Hn(),er=on().forEach,ne=M("hidden"),je="Symbol",Fe="prototype",Ae=Ne.set,gr=Ne.getterFor(je),qe=Object[Fe],rr=r.Symbol,br=rr&&rr[Fe],cn=r.RangeError,ln=r.TypeError,Xr=r.QObject,Ot=E.f,tr=O.f,F=w.f,fn=q.f,jr=n([].push),ze=D("symbols"),se=D("op-symbols"),Zr=D("wks"),_r=!Xr||!Xr[Fe]||!Xr[Fe].findChild,qt=function(Y,U,z){var G=Ot(qe,U);G&&delete qe[U],tr(Y,U,z),G&&Y!==qe&&tr(qe,U,G)},Sr=a&&u(function(){return _(tr({},"a",{get:function(){return tr(this,"a",{value:7}).a}})).a!==7})?qt:tr,wr=function(Y,U){var z=ze[Y]=_(br);return Ae(z,{type:je,tag:Y,description:U}),a||(z.description=U),z},ur=function(U,z,G){U===qe&&ur(se,z,G),d(U);var J=h(z);return d(G),c(ze,J)?(G.enumerable?(c(U,ne)&&U[ne][J]&&(U[ne][J]=!1),G=_(G,{enumerable:g(0,!1)})):(c(U,ne)||tr(U,ne,g(1,_(null))),U[ne][J]=!0),Sr(U,J,G)):tr(U,J,G)},Jr=function(U,z){d(U);var G=p(z),J=T(G).concat(Dt(G));return er(J,function(we){(!a||t(Qr,G,we))&&ur(U,we,G[we])}),U},dn=function(U,z){return z===void 0?_(U):Jr(_(U),z)},Qr=function(U){var z=h(U),G=t(fn,this,z);return this===qe&&c(ze,z)&&!c(se,z)?!1:G||!c(this,z)||!c(ze,z)||c(this,ne)&&this[ne][z]?G:!0},Pt=function(U,z){var G=p(U),J=h(z);if(!(G===qe&&c(ze,J)&&!c(se,J))){var we=Ot(G,J);return we&&c(ze,J)&&!(c(G,ne)&&G[ne][J])&&(we.enumerable=!0),we}},At=function(U){var z=F(p(U)),G=[];return er(z,function(J){!c(ze,J)&&!c(N,J)&&jr(G,J)}),G},Dt=function(Y){var U=Y===qe,z=F(U?se:p(Y)),G=[];return er(z,function(J){c(ze,J)&&(!U||c(qe,J))&&jr(G,ze[J])}),G};return o||(rr=function(){if(f(br,this))throw new ln("Symbol is not a constructor");var U=!arguments.length||arguments[0]===void 0?void 0:m(arguments[0]),z=k(U),G=function(J){var we=this===void 0?r:this;we===qe&&t(G,se,J),c(we,ne)&&c(we[ne],z)&&(we[ne][z]=!1);var We=g(1,J);try{Sr(we,z,We)}catch(cr){if(!(cr instanceof cn))throw cr;qt(we,z,We)}};return a&&_r&&Sr(qe,z,{configurable:!0,set:G}),wr(z,U)},br=rr[Fe],I(br,"toString",function(){return gr(this).tag}),I(rr,"withoutSetter",function(Y){return wr(k(Y),Y)}),q.f=Qr,O.f=ur,P.f=Jr,E.f=Pt,x.f=w.f=At,A.f=Dt,oe.f=function(Y){return wr(H(Y),Y)},a&&(R(br,"description",{configurable:!0,get:function(){return gr(this).description}}),i||I(qe,"propertyIsEnumerable",Qr,{unsafe:!0}))),e({global:!0,constructor:!0,wrap:!0,forced:!o,sham:!o},{Symbol:rr}),er(T(Zr),function(Y){Qe(Y)}),e({target:je,stat:!0,forced:!o},{useSetter:function(){_r=!0},useSimple:function(){_r=!1}}),e({target:"Object",stat:!0,forced:!o,sham:!a},{create:dn,defineProperty:ur,defineProperties:Jr,getOwnPropertyDescriptor:Pt}),e({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:At}),he(),Le(rr,je),N[ne]=!0,dv}var Fv={},Rs,kv;function z_(){if(kv)return Rs;kv=1;var e=Jt();return Rs=e&&!!Symbol.for&&!!Symbol.keyFor,Rs}var Bv;function Ew(){if(Bv)return Fv;Bv=1;var e=B(),r=Ke(),t=Te(),n=Vr(),i=rn(),a=z_(),o=i("string-to-symbol-registry"),u=i("symbol-to-string-registry");return e({target:"Symbol",stat:!0,forced:!a},{for:function(c){var f=n(c);if(t(o,f))return o[f];var d=r("Symbol")(f);return o[f]=d,u[d]=f,d}}),Fv}var Uv={},zv;function Iw(){if(zv)return Uv;zv=1;var e=B(),r=Te(),t=Gn(),n=Qt(),i=rn(),a=z_(),o=i("symbol-to-string-registry");return e({target:"Symbol",stat:!0,forced:!a},{keyFor:function(c){if(!t(c))throw new TypeError(n(c)+" is not a symbol");if(r(o,c))return o[c]}}),Uv}var Gv={},Os,Kv;function Tw(){if(Kv)return Os;Kv=1;var e=ae(),r=_t(),t=Ee(),n=$r(),i=Vr(),a=e([].push);return Os=function(o){if(t(o))return o;if(r(o)){for(var u=o.length,c=[],f=0;f<u;f++){var d=o[f];typeof d=="string"?a(c,d):(typeof d=="number"||n(d)==="Number"||n(d)==="String")&&a(c,i(d))}var p=c.length,h=!0;return function(m,g){if(h)return h=!1,g;if(r(this))return g;for(var _=0;_<p;_++)if(c[_]===m)return g}}},Os}var Wv;function G_(){if(Wv)return Gv;Wv=1;var e=B(),r=Ke(),t=Ii(),n=Be(),i=ae(),a=re(),o=Ee(),u=Gn(),c=an(),f=Tw(),d=Jt(),p=String,h=r("JSON","stringify"),m=i(/./.exec),g=i("".charAt),_=i("".charCodeAt),T=i("".replace),x=i(1.1.toString),w=/[\uD800-\uDFFF]/g,A=/^[\uD800-\uDBFF]$/,E=/^[\uDC00-\uDFFF]$/,O=!d||a(function(){var R=r("Symbol")("stringify detection");return h([R])!=="[null]"||h({a:R})!=="{}"||h(Object(R))!=="{}"}),P=a(function(){return h("\uDF06\uD834")!=='"\\udf06\\ud834"'||h("\uDEAD")!=='"\\udead"'}),q=function(R,D){var M=c(arguments),N=f(D);if(!(!o(N)&&(R===void 0||u(R))))return M[1]=function(k,H){if(o(N)&&(H=n(N,this,p(k),H)),!u(H))return H},t(h,null,M)},I=function(R,D,M){var N=g(M,D-1),k=g(M,D+1);return m(A,R)&&!m(E,k)||m(E,R)&&!m(A,N)?"\\u"+x(_(R,0),16):R};return h&&e({target:"JSON",stat:!0,arity:3,forced:O||P},{stringify:function(D,M,N){var k=c(arguments),H=t(O?q:h,null,k);return P&&typeof H=="string"?T(H,w,I):H}}),Gv}var Vv={},Yv;function xw(){if(Yv)return Vv;Yv=1;var e=B(),r=Jt(),t=re(),n=Ci(),i=sr(),a=!r||t(function(){n.f(1)});return e({target:"Object",stat:!0,forced:a},{getOwnPropertySymbols:function(u){var c=n.f;return c?c(i(u)):[]}}),Vv}var Hv;function K_(){return Hv||(Hv=1,ww(),Ew(),Iw(),G_(),xw()),fv}var Xv={},Zv;function W_(){if(Zv)return Xv;Zv=1;var e=ue();return e("asyncDispose"),Xv}var Jv={},Qv;function Rw(){if(Qv)return Jv;Qv=1;var e=ue();return e("asyncIterator"),Jv}var ep={},rp;function V_(){if(rp)return ep;rp=1;var e=ue();return e("dispose"),ep}var tp={},np;function Ow(){if(np)return tp;np=1;var e=ue();return e("hasInstance"),tp}var ip={},ap;function qw(){if(ap)return ip;ap=1;var e=ue();return e("isConcatSpreadable"),ip}var op={},sp;function Y_(){if(sp)return op;sp=1;var e=ue();return e("iterator"),op}var up={},cp;function Pw(){if(cp)return up;cp=1;var e=ue();return e("match"),up}var lp={},fp;function Aw(){if(fp)return lp;fp=1;var e=ue();return e("matchAll"),lp}var dp={},vp;function Dw(){if(vp)return dp;vp=1;var e=ue();return e("replace"),dp}var pp={},hp;function Cw(){if(hp)return pp;hp=1;var e=ue();return e("search"),pp}var mp={},yp;function Mw(){if(yp)return mp;yp=1;var e=ue();return e("species"),mp}var gp={},bp;function $w(){if(bp)return gp;bp=1;var e=ue();return e("split"),gp}var _p={},Sp;function H_(){if(Sp)return _p;Sp=1;var e=ue(),r=U_();return e("toPrimitive"),r(),_p}var wp={},Ep;function Lw(){if(Ep)return wp;Ep=1;var e=Ke(),r=ue(),t=St();return r("toStringTag"),t(e("Symbol"),"Symbol"),wp}var Ip={},Tp;function Nw(){if(Tp)return Ip;Tp=1;var e=ue();return e("unscopables"),Ip}var xp={},Rp;function jw(){if(Rp)return xp;Rp=1;var e=ve(),r=St();return r(e.JSON,"JSON",!0),xp}var qs,Op;function Fw(){if(Op)return qs;Op=1,F_(),K_(),W_(),Rw(),V_(),Ow(),qw(),Y_(),Pw(),Aw(),Dw(),Cw(),Mw(),$w(),H_(),Lw(),Nw(),jw();var e=Se();return qs=e.Symbol,qs}var qp={},Ps,Pp;function kw(){return Pp||(Pp=1,Ps=function(){}),Ps}var As,Ap;function sn(){return Ap||(Ap=1,As={}),As}var Ds,Dp;function Bw(){if(Dp)return Ds;Dp=1;var e=pe(),r=Te(),t=Function.prototype,n=e&&Object.getOwnPropertyDescriptor,i=r(t,"name"),a=i&&(function(){}).name==="something",o=i&&(!e||e&&n(t,"name").configurable);return Ds={EXISTS:i,PROPER:a,CONFIGURABLE:o},Ds}var Cs,Cp;function Uw(){if(Cp)return Cs;Cp=1;var e=re();return Cs=!e(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),Cs}var Ms,Mp;function X_(){if(Mp)return Ms;Mp=1;var e=Te(),r=Ee(),t=sr(),n=Ai(),i=Uw(),a=n("IE_PROTO"),o=Object,u=o.prototype;return Ms=i?o.getPrototypeOf:function(c){var f=t(c);if(e(f,a))return f[a];var d=f.constructor;return r(d)&&f instanceof d?d.prototype:f instanceof o?u:null},Ms}var $s,$p;function Z_(){if($p)return $s;$p=1;var e=re(),r=Ee(),t=$e(),n=Vn(),i=X_(),a=Yn(),o=xe(),u=en(),c=o("iterator"),f=!1,d,p,h;[].keys&&(h=[].keys(),"next"in h?(p=i(i(h)),p!==Object.prototype&&(d=p)):f=!0);var m=!t(d)||e(function(){var g={};return d[c].call(g)!==g});return m?d={}:u&&(d=n(d)),r(d[c])||a(d,c,function(){return this}),$s={IteratorPrototype:d,BUGGY_SAFARI_ITERATORS:f},$s}var Ls,Lp;function zw(){if(Lp)return Ls;Lp=1;var e=Z_().IteratorPrototype,r=Vn(),t=Bn(),n=St(),i=sn(),a=function(){return this};return Ls=function(o,u,c,f){var d=u+" Iterator";return o.prototype=r(e,{next:t(+!f,c)}),n(o,d,!1,!0),i[d]=a,o},Ls}var Ns,Np;function Gw(){if(Np)return Ns;Np=1;var e=ae(),r=Lr();return Ns=function(t,n,i){try{return e(r(Object.getOwnPropertyDescriptor(t,n)[i]))}catch{}},Ns}var js,jp;function Kw(){if(jp)return js;jp=1;var e=$e();return js=function(r){return e(r)||r===null},js}var Fs,Fp;function Ww(){if(Fp)return Fs;Fp=1;var e=Kw(),r=String,t=TypeError;return Fs=function(n){if(e(n))return n;throw new t("Can't set "+r(n)+" as a prototype")},Fs}var ks,kp;function Vw(){if(kp)return ks;kp=1;var e=Gw(),r=$e(),t=bt(),n=Ww();return ks=Object.setPrototypeOf||("__proto__"in{}?(function(){var i=!1,a={},o;try{o=e(Object.prototype,"__proto__","set"),o(a,[]),i=a instanceof Array}catch{}return function(c,f){return t(c),n(f),r(c)&&(i?o(c,f):c.__proto__=f),c}})():void 0),ks}var Bs,Bp;function Tf(){if(Bp)return Bs;Bp=1;var e=B(),r=Be(),t=en(),n=Bw(),i=Ee(),a=zw(),o=X_(),u=Vw(),c=St(),f=tn(),d=Yn(),p=xe(),h=sn(),m=Z_(),g=n.PROPER,_=n.CONFIGURABLE,T=m.IteratorPrototype,x=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),A="keys",E="values",O="entries",P=function(){return this};return Bs=function(q,I,R,D,M,N,k){a(R,I,D);var H=function(Ae){if(Ae===M&&Ne)return Ne;if(!x&&Ae&&Ae in he)return he[Ae];switch(Ae){case A:return function(){return new R(this,Ae)};case E:return function(){return new R(this,Ae)};case O:return function(){return new R(this,Ae)}}return function(){return new R(this)}},oe=I+" Iterator",Qe=!1,he=q.prototype,Le=he[w]||he["@@iterator"]||M&&he[M],Ne=!x&&Le||H(M),er=I==="Array"&&he.entries||Le,ne,je,Fe;if(er&&(ne=o(er.call(new q)),ne!==Object.prototype&&ne.next&&(!t&&o(ne)!==T&&(u?u(ne,T):i(ne[w])||d(ne,w,P)),c(ne,oe,!0,!0),t&&(h[oe]=P))),g&&M===E&&Le&&Le.name!==E&&(!t&&_?f(he,"name",E):(Qe=!0,Ne=function(){return r(Le,this)})),M)if(je={values:H(E),keys:N?Ne:H(A),entries:H(O)},k)for(Fe in je)(x||Qe||!(Fe in he))&&d(he,Fe,je[Fe]);else e({target:I,proto:!0,forced:x||Qe},je);return(!t||k)&&he[w]!==Ne&&d(he,w,Ne,{name:M}),h[I]=Ne,je},Bs}var Us,Up;function xf(){return Up||(Up=1,Us=function(e,r){return{value:e,done:r}}),Us}var zs,zp;function Yr(){if(zp)return zs;zp=1;var e=yr(),r=kw(),t=sn(),n=Hn(),i=Ze().f,a=Tf(),o=xf(),u=en(),c=pe(),f="Array Iterator",d=n.set,p=n.getterFor(f);zs=a(Array,"Array",function(m,g){d(this,{type:f,target:e(m),index:0,kind:g})},function(){var m=p(this),g=m.target,_=m.index++;if(!g||_>=g.length)return m.target=null,o(void 0,!0);switch(m.kind){case"keys":return o(_,!1);case"values":return o(g[_],!1)}return o([_,g[_]],!1)},"values");var h=t.Arguments=t.Array;if(r("keys"),r("values"),r("entries"),!u&&c&&h.name!=="values")try{i(h,"name",{value:"values"})}catch{}return zs}var Gs,Gp;function Yw(){return Gp||(Gp=1,Gs={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}),Gs}var Kp;function Hr(){if(Kp)return qp;Kp=1,Yr();var e=Yw(),r=ve(),t=St(),n=sn();for(var i in e)t(r[i],i),n[i]=n.Array;return qp}var Ks,Wp;function J_(){if(Wp)return Ks;Wp=1;var e=Fw();return Hr(),Ks=e,Ks}var Vp={},Yp;function Hw(){if(Yp)return Vp;Yp=1;var e=xe(),r=Ze().f,t=e("metadata"),n=Function.prototype;return n[t]===void 0&&r(n,t,{value:null}),Vp}var Hp={},Xp;function Xw(){return Xp||(Xp=1,W_()),Hp}var Zp={},Jp;function Zw(){return Jp||(Jp=1,V_()),Zp}var Qp={},eh;function Jw(){if(eh)return Qp;eh=1;var e=ue();return e("metadata"),Qp}var Ws,rh;function Qw(){if(rh)return Ws;rh=1;var e=J_();return Hw(),Xw(),Zw(),Jw(),Ws=e,Ws}var th={},Vs,nh;function Q_(){if(nh)return Vs;nh=1;var e=Ke(),r=ae(),t=e("Symbol"),n=t.keyFor,i=r(t.prototype.valueOf);return Vs=t.isRegisteredSymbol||function(o){try{return n(i(o))!==void 0}catch{return!1}},Vs}var ih;function eE(){if(ih)return th;ih=1;var e=B(),r=Q_();return e({target:"Symbol",stat:!0},{isRegisteredSymbol:r}),th}var ah={},Ys,oh;function eS(){if(oh)return Ys;oh=1;for(var e=rn(),r=Ke(),t=ae(),n=Gn(),i=xe(),a=r("Symbol"),o=a.isWellKnownSymbol,u=r("Object","getOwnPropertyNames"),c=t(a.prototype.valueOf),f=e("wks"),d=0,p=u(a),h=p.length;d<h;d++)try{var m=p[d];n(a[m])&&i(m)}catch{}return Ys=function(_){if(o&&o(_))return!0;try{for(var T=c(_),x=0,w=u(f),A=w.length;x<A;x++)if(f[w[x]]==T)return!0}catch{}return!1},Ys}var sh;function rE(){if(sh)return ah;sh=1;var e=B(),r=eS();return e({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:r}),ah}var uh={},ch;function tE(){if(ch)return uh;ch=1;var e=ue();return e("customMatcher"),uh}var lh={},fh;function nE(){if(fh)return lh;fh=1;var e=ue();return e("observable"),lh}var dh={},vh;function iE(){if(vh)return dh;vh=1;var e=B(),r=Q_();return e({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:r}),dh}var ph={},hh;function aE(){if(hh)return ph;hh=1;var e=B(),r=eS();return e({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:r}),ph}var mh={},yh;function oE(){if(yh)return mh;yh=1;var e=ue();return e("matcher"),mh}var gh={},bh;function sE(){if(bh)return gh;bh=1;var e=ue();return e("metadataKey"),gh}var _h={},Sh;function uE(){if(Sh)return _h;Sh=1;var e=ue();return e("patternMatch"),_h}var wh={},Eh;function cE(){if(Eh)return wh;Eh=1;var e=ue();return e("replaceAll"),wh}var Hs,Ih;function lE(){if(Ih)return Hs;Ih=1;var e=Qw();return eE(),rE(),tE(),nE(),iE(),aE(),oE(),sE(),uE(),cE(),Hs=e,Hs}var Xs,Th;function fE(){return Th||(Th=1,Xs=lE()),Xs}var dE=fE(),di=W(dE),xh={},Zs,Rh;function vE(){if(Rh)return Zs;Rh=1;var e=ae(),r=nn(),t=Vr(),n=bt(),i=e("".charAt),a=e("".charCodeAt),o=e("".slice),u=function(c){return function(f,d){var p=t(n(f)),h=r(d),m=p.length,g,_;return h<0||h>=m?c?"":void 0:(g=a(p,h),g<55296||g>56319||h+1===m||(_=a(p,h+1))<56320||_>57343?c?i(p,h):g:c?o(p,h,h+2):(g-55296<<10)+(_-56320)+65536)}};return Zs={codeAt:u(!1),charAt:u(!0)},Zs}var Oh;function $i(){if(Oh)return xh;Oh=1;var e=vE().charAt,r=Vr(),t=Hn(),n=Tf(),i=xf(),a="String Iterator",o=t.set,u=t.getterFor(a);return n(String,"String",function(c){o(this,{type:a,string:r(c),index:0})},function(){var f=u(this),d=f.string,p=f.index,h;return p>=d.length?i(void 0,!0):(h=e(d,p),f.index+=h.length,i(h,!1))}),xh}var Js,qh;function pE(){if(qh)return Js;qh=1,Yr(),$i(),Y_();var e=Mi();return Js=e.f("iterator"),Js}var Qs,Ph;function rS(){if(Ph)return Qs;Ph=1;var e=pE();return Hr(),Qs=e,Qs}var eu,Ah;function hE(){if(Ah)return eu;Ah=1;var e=rS();return eu=e,eu}var ru,Dh;function mE(){if(Dh)return ru;Dh=1;var e=hE();return ru=e,ru}var tu,Ch;function yE(){return Ch||(Ch=1,tu=mE()),tu}var gE=yE(),bE=W(gE);function Cn(e){"@babel/helpers - typeof";return Cn=typeof di=="function"&&typeof bE=="symbol"?function(r){return typeof r}:function(r){return r&&typeof di=="function"&&r.constructor===di&&r!==di.prototype?"symbol":typeof r},Cn(e)}var nu,Mh;function _E(){if(Mh)return nu;Mh=1,H_();var e=Mi();return nu=e.f("toPrimitive"),nu}var iu,$h;function SE(){if($h)return iu;$h=1;var e=_E();return iu=e,iu}var au,Lh;function wE(){if(Lh)return au;Lh=1;var e=SE();return au=e,au}var ou,Nh;function EE(){if(Nh)return ou;Nh=1;var e=wE();return ou=e,ou}var su,jh;function IE(){return jh||(jh=1,su=EE()),su}var TE=IE(),xE=W(TE);function RE(e,r){if(Cn(e)!="object"||!e)return e;var t=e[xE];if(t!==void 0){var n=t.call(e,r);if(Cn(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function OE(e){var r=RE(e,"string");return Cn(r)=="symbol"?r:r+""}function zr(e,r,t){return(r=OE(r))in e?pw(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Fh={},uu,kh;function qE(){if(kh)return uu;kh=1;var e=ae(),r=Lr(),t=$e(),n=Te(),i=an(),a=kn(),o=Function,u=e([].concat),c=e([].join),f={},d=function(p,h,m){if(!n(f,h)){for(var g=[],_=0;_<h;_++)g[_]="a["+_+"]";f[h]=o("C,a","return new C("+c(g,",")+")")}return f[h](p,m)};return uu=a?o.bind:function(h){var m=r(this),g=m.prototype,_=i(arguments,1),T=function(){var w=u(_,i(arguments));return this instanceof T?d(m,w.length,w):m.apply(h,w)};return t(g)&&(T.prototype=g),T},uu}var Bh;function PE(){if(Bh)return Fh;Bh=1;var e=B(),r=qE();return e({target:"Function",proto:!0,forced:Function.bind!==r},{bind:r}),Fh}var cu,Uh;function Ue(){if(Uh)return cu;Uh=1;var e=ve(),r=Se();return cu=function(t,n){var i=r[t+"Prototype"],a=i&&i[n];if(a)return a;var o=e[t],u=o&&o.prototype;return u&&u[n]},cu}var lu,zh;function AE(){if(zh)return lu;zh=1,PE();var e=Ue();return lu=e("Function","bind"),lu}var fu,Gh;function DE(){if(Gh)return fu;Gh=1;var e=Ie(),r=AE(),t=Function.prototype;return fu=function(n){var i=n.bind;return n===t||e(t,n)&&i===t.bind?r:i},fu}var du,Kh;function CE(){if(Kh)return du;Kh=1;var e=DE();return du=e,du}var vu,Wh;function ME(){return Wh||(Wh=1,vu=CE()),vu}var $E=ME(),tS=W($E),Vh={},pu,Yh;function LE(){if(Yh)return pu;Yh=1;var e=Lr(),r=sr(),t=Ti(),n=Kr(),i=TypeError,a="Reduce of empty array with no initial value",o=function(u){return function(c,f,d,p){var h=r(c),m=t(h),g=n(h);if(e(f),g===0&&d<2)throw new i(a);var _=u?g-1:0,T=u?-1:1;if(d<2)for(;;){if(_ in m){p=m[_],_+=T;break}if(_+=T,u?_<0:g<=_)throw new i(a)}for(;u?_>=0:g>_;_+=T)_ in m&&(p=f(p,m[_],_,h));return p}};return pu={left:o(!1),right:o(!0)},pu}var hu,Hh;function Li(){if(Hh)return hu;Hh=1;var e=re();return hu=function(r,t){var n=[][r];return!!n&&e(function(){n.call(null,t||function(){return 1},1)})},hu}var mu,Xh;function nS(){if(Xh)return mu;Xh=1;var e=ve(),r=Zt(),t=$r(),n=function(i){return r.slice(0,i.length)===i};return mu=(function(){return n("Bun/")?"BUN":n("Cloudflare-Workers")?"CLOUDFLARE":n("Deno/")?"DENO":n("Node.js/")?"NODE":e.Bun&&typeof Bun.version=="string"?"BUN":e.Deno&&typeof Deno.version=="object"?"DENO":t(e.process)==="process"?"NODE":e.window&&e.document?"BROWSER":"REST"})(),mu}var yu,Zh;function NE(){if(Zh)return yu;Zh=1;var e=nS();return yu=e==="NODE",yu}var Jh;function jE(){if(Jh)return Vh;Jh=1;var e=B(),r=LE().left,t=Li(),n=zn(),i=NE(),a=!i&&n>79&&n<83,o=a||!t("reduce");return e({target:"Array",proto:!0,forced:o},{reduce:function(c){var f=arguments.length;return r(this,c,f,f>1?arguments[1]:void 0)}}),Vh}var gu,Qh;function FE(){if(Qh)return gu;Qh=1,jE();var e=Ue();return gu=e("Array","reduce"),gu}var bu,em;function kE(){if(em)return bu;em=1;var e=Ie(),r=FE(),t=Array.prototype;return bu=function(n){var i=n.reduce;return n===t||e(t,n)&&i===t.reduce?r:i},bu}var _u,rm;function BE(){if(rm)return _u;rm=1;var e=kE();return _u=e,_u}var Su,tm;function UE(){return tm||(tm=1,Su=BE()),Su}var zE=UE(),GE=W(zE),nm={},im;function KE(){if(im)return nm;im=1;var e=B(),r=on().filter,t=Kn(),n=t("filter");return e({target:"Array",proto:!0,forced:!n},{filter:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),nm}var wu,am;function WE(){if(am)return wu;am=1,KE();var e=Ue();return wu=e("Array","filter"),wu}var Eu,om;function VE(){if(om)return Eu;om=1;var e=Ie(),r=WE(),t=Array.prototype;return Eu=function(n){var i=n.filter;return n===t||e(t,n)&&i===t.filter?r:i},Eu}var Iu,sm;function YE(){if(sm)return Iu;sm=1;var e=VE();return Iu=e,Iu}var Tu,um;function HE(){return um||(um=1,Tu=YE()),Tu}var XE=HE(),zt=W(XE),cm={},lm;function ZE(){if(lm)return cm;lm=1;var e=B(),r=on().map,t=Kn(),n=t("map");return e({target:"Array",proto:!0,forced:!n},{map:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),cm}var xu,fm;function JE(){if(fm)return xu;fm=1,ZE();var e=Ue();return xu=e("Array","map"),xu}var Ru,dm;function QE(){if(dm)return Ru;dm=1;var e=Ie(),r=JE(),t=Array.prototype;return Ru=function(n){var i=n.map;return n===t||e(t,n)&&i===t.map?r:i},Ru}var Ou,vm;function eI(){if(vm)return Ou;vm=1;var e=QE();return Ou=e,Ou}var qu,pm;function rI(){return pm||(pm=1,qu=eI()),qu}var tI=rI(),qr=W(tI),Pu,hm;function nI(){return hm||(hm=1,Pu=J_()),Pu}var iI=nI(),aI=W(iI),mm={},ym;function oI(){if(ym)return mm;ym=1;var e=B(),r=_t(),t=j_(),n=$e(),i=Sf(),a=Kr(),o=yr(),u=qi(),c=xe(),f=Kn(),d=an(),p=f("slice"),h=c("species"),m=Array,g=Math.max;return e({target:"Array",proto:!0,forced:!p},{slice:function(T,x){var w=o(this),A=a(w),E=i(T,A),O=i(x===void 0?A:x,A),P,q,I;if(r(w)&&(P=w.constructor,t(P)&&(P===m||r(P.prototype))?P=void 0:n(P)&&(P=P[h],P===null&&(P=void 0)),P===m||P===void 0))return d(w,E,O);for(q=new(P===void 0?m:P)(g(O-E,0)),I=0;E<O;E++,I++)E in w&&u(q,I,w[E]);return q.length=I,q}}),mm}var Au,gm;function sI(){if(gm)return Au;gm=1,oI();var e=Ue();return Au=e("Array","slice"),Au}var Du,bm;function uI(){if(bm)return Du;bm=1;var e=Ie(),r=sI(),t=Array.prototype;return Du=function(n){var i=n.slice;return n===t||e(t,n)&&i===t.slice?r:i},Du}var Cu,_m;function cI(){if(_m)return Cu;_m=1;var e=uI();return Cu=e,Cu}var Mu,Sm;function lI(){return Sm||(Sm=1,Mu=cI()),Mu}var fI=lI(),dI=W(fI),wm={},$u,Em;function iS(){if(Em)return $u;Em=1;var e=Ke(),r=ae(),t=Di(),n=Ci(),i=Nr(),a=r([].concat);return $u=e("Reflect","ownKeys")||function(u){var c=t.f(i(u)),f=n.f;return f?a(c,f(u)):c},$u}var Im;function vI(){if(Im)return wm;Im=1;var e=B(),r=iS();return e({target:"Reflect",stat:!0},{ownKeys:r}),wm}var Lu,Tm;function pI(){if(Tm)return Lu;Tm=1,vI();var e=Se();return Lu=e.Reflect.ownKeys,Lu}var Nu,xm;function hI(){if(xm)return Nu;xm=1;var e=pI();return Nu=e,Nu}var ju,Rm;function mI(){return Rm||(Rm=1,ju=hI()),ju}var yI=mI(),gI=W(yI),Om={},qm;function bI(){if(qm)return Om;qm=1;var e=B(),r=_t();return e({target:"Array",stat:!0},{isArray:r}),Om}var Fu,Pm;function _I(){if(Pm)return Fu;Pm=1,bI();var e=Se();return Fu=e.Array.isArray,Fu}var ku,Am;function SI(){if(Am)return ku;Am=1;var e=_I();return ku=e,ku}var Bu,Dm;function wI(){return Dm||(Dm=1,Bu=SI()),Bu}var EI=wI(),dr=W(EI),Cm={},Mm;function II(){if(Mm)return Cm;Mm=1;var e=B(),r=sr(),t=Pi(),n=re(),i=n(function(){t(1)});return e({target:"Object",stat:!0,forced:i},{keys:function(o){return t(r(o))}}),Cm}var Uu,$m;function TI(){if($m)return Uu;$m=1,II();var e=Se();return Uu=e.Object.keys,Uu}var zu,Lm;function xI(){if(Lm)return zu;Lm=1;var e=TI();return zu=e,zu}var Gu,Nm;function RI(){return Nm||(Nm=1,Gu=xI()),Gu}var OI=RI(),Rf=W(OI),jm={},Ku,Fm;function qI(){if(Fm)return Ku;Fm=1;var e=on().forEach,r=Li(),t=r("forEach");return Ku=t?[].forEach:function(i){return e(this,i,arguments.length>1?arguments[1]:void 0)},Ku}var km;function PI(){if(km)return jm;km=1;var e=B(),r=qI();return e({target:"Array",proto:!0,forced:[].forEach!==r},{forEach:r}),jm}var Wu,Bm;function AI(){if(Bm)return Wu;Bm=1,PI();var e=Ue();return Wu=e("Array","forEach"),Wu}var Vu,Um;function DI(){if(Um)return Vu;Um=1;var e=AI();return Vu=e,Vu}var Yu,zm;function CI(){if(zm)return Yu;zm=1;var e=Wr(),r=Te(),t=Ie(),n=DI(),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};return Yu=function(o){var u=o.forEach;return o===i||t(i,o)&&u===i.forEach||r(a,e(o))?n:u},Yu}var Hu,Gm;function MI(){return Gm||(Gm=1,Hu=CI()),Hu}var $I=MI(),Mn=W($I),Km={},Wm;function LI(){if(Wm)return Km;Wm=1;var e=B(),r=ae(),t=_t(),n=r([].reverse),i=[1,2];return e({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return t(this)&&(this.length=this.length),n(this)}}),Km}var Xu,Vm;function NI(){if(Vm)return Xu;Vm=1,LI();var e=Ue();return Xu=e("Array","reverse"),Xu}var Zu,Ym;function jI(){if(Ym)return Zu;Ym=1;var e=Ie(),r=NI(),t=Array.prototype;return Zu=function(n){var i=n.reverse;return n===t||e(t,n)&&i===t.reverse?r:i},Zu}var Ju,Hm;function FI(){if(Hm)return Ju;Hm=1;var e=jI();return Ju=e,Ju}var Qu,Xm;function kI(){return Xm||(Xm=1,Qu=FI()),Qu}var BI=kI(),UI=W(BI),Zm={},ec,Jm;function zI(){if(Jm)return ec;Jm=1;var e=pe(),r=_t(),t=TypeError,n=Object.getOwnPropertyDescriptor,i=e&&!(function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(a){return a instanceof TypeError}})();return ec=i?function(a,o){if(r(a)&&!n(a,"length").writable)throw new t("Cannot set read only .length");return a.length=o}:function(a,o){return a.length=o},ec}var rc,Qm;function aS(){if(Qm)return rc;Qm=1;var e=Qt(),r=TypeError;return rc=function(t,n){if(!delete t[n])throw new r("Cannot delete property "+e(n)+" of "+e(t))},rc}var ey;function GI(){if(ey)return Zm;ey=1;var e=B(),r=sr(),t=Sf(),n=nn(),i=Kr(),a=zI(),o=N_(),u=_f(),c=qi(),f=aS(),d=Kn(),p=d("splice"),h=Math.max,m=Math.min;return e({target:"Array",proto:!0,forced:!p},{splice:function(_,T){var x=r(this),w=i(x),A=t(_,w),E=arguments.length,O,P,q,I,R,D;for(E===0?O=P=0:E===1?(O=0,P=w-A):(O=E-2,P=m(h(n(T),0),w-A)),o(w+O-P),q=u(x,P),I=0;I<P;I++)R=A+I,R in x&&c(q,I,x[R]);if(q.length=P,O<P){for(I=A;I<w-P;I++)R=I+P,D=I+O,R in x?x[D]=x[R]:f(x,D);for(I=w;I>w-P+O;I--)f(x,I-1)}else if(O>P)for(I=w-P;I>A;I--)R=I+P-1,D=I+O-1,R in x?x[D]=x[R]:f(x,D);for(I=0;I<O;I++)x[I+A]=arguments[I+2];return a(x,w-P+O),q}}),Zm}var tc,ry;function KI(){if(ry)return tc;ry=1,GI();var e=Ue();return tc=e("Array","splice"),tc}var nc,ty;function WI(){if(ty)return nc;ty=1;var e=Ie(),r=KI(),t=Array.prototype;return nc=function(n){var i=n.splice;return n===t||e(t,n)&&i===t.splice?r:i},nc}var ic,ny;function VI(){if(ny)return ic;ny=1;var e=WI();return ic=e,ic}var ac,iy;function YI(){return iy||(iy=1,ac=VI()),ac}var HI=YI(),oS=W(HI),ay={},oc,oy;function XI(){if(oy)return oc;oy=1;var e=pe(),r=ae(),t=Be(),n=re(),i=Pi(),a=Ci(),o=hf(),u=sr(),c=Ti(),f=Object.assign,d=Object.defineProperty,p=r([].concat);return oc=!f||n(function(){if(e&&f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var h={},m={},g=Symbol("assign detection"),_="abcdefghijklmnopqrst";return h[g]=7,_.split("").forEach(function(T){m[T]=T}),f({},h)[g]!==7||i(f({},m)).join("")!==_})?function(m,g){for(var _=u(m),T=arguments.length,x=1,w=a.f,A=o.f;T>x;)for(var E=c(arguments[x++]),O=w?p(i(E),w(E)):i(E),P=O.length,q=0,I;P>q;)I=O[q++],(!e||t(A,E,I))&&(_[I]=E[I]);return _}:f,oc}var sy;function ZI(){if(sy)return ay;sy=1;var e=B(),r=XI();return e({target:"Object",stat:!0,arity:2,forced:Object.assign!==r},{assign:r}),ay}var sc,uy;function JI(){if(uy)return sc;uy=1,ZI();var e=Se();return sc=e.Object.assign,sc}var uc,cy;function QI(){if(cy)return uc;cy=1;var e=JI();return uc=e,uc}var cc,ly;function eT(){return ly||(ly=1,cc=QI()),cc}var rT=eT(),tT=W(rT),lc,fy;function nT(){if(fy)return lc;fy=1,F_();var e=Ue();return lc=e("Array","concat"),lc}var fc,dy;function iT(){if(dy)return fc;dy=1;var e=Ie(),r=nT(),t=Array.prototype;return fc=function(n){var i=n.concat;return n===t||e(t,n)&&i===t.concat?r:i},fc}var dc,vy;function aT(){if(vy)return dc;vy=1;var e=iT();return dc=e,dc}var vc,py;function oT(){return py||(py=1,vc=aT()),vc}var sT=oT(),uT=W(sT),hy={},my;function cT(){if(my)return hy;my=1;var e=B(),r=pe(),t=Vn();return e({target:"Object",stat:!0,sham:!r},{create:t}),hy}var pc,yy;function lT(){if(yy)return pc;yy=1,cT();var e=Se(),r=e.Object;return pc=function(n,i){return r.create(n,i)},pc}var hc,gy;function fT(){if(gy)return hc;gy=1;var e=lT();return hc=e,hc}var mc,by;function dT(){return by||(by=1,mc=fT()),mc}var vT=dT(),pT=W(vT),_y={},yc,Sy;function hT(){if(Sy)return yc;Sy=1;var e=nn(),r=Vr(),t=bt(),n=RangeError;return yc=function(a){var o=r(t(this)),u="",c=e(a);if(c<0||c===1/0)throw new n("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(o+=o))c&1&&(u+=o);return u},yc}var gc,wy;function mT(){if(wy)return gc;wy=1;var e=ae(),r=L_(),t=Vr(),n=hT(),i=bt(),a=e(n),o=e("".slice),u=Math.ceil,c=function(f){return function(d,p,h){var m=t(i(d)),g=r(p),_=m.length,T=h===void 0?" ":t(h),x,w;return g<=_||T===""?m:(x=g-_,w=a(T,u(x/T.length)),w.length>x&&(w=o(w,0,x)),f?m+w:w+m)}};return gc={start:c(!1),end:c(!0)},gc}var bc,Ey;function yT(){if(Ey)return bc;Ey=1;var e=ae(),r=re(),t=mT().start,n=RangeError,i=isFinite,a=Math.abs,o=Date.prototype,u=o.toISOString,c=e(o.getTime),f=e(o.getUTCDate),d=e(o.getUTCFullYear),p=e(o.getUTCHours),h=e(o.getUTCMilliseconds),m=e(o.getUTCMinutes),g=e(o.getUTCMonth),_=e(o.getUTCSeconds);return bc=r(function(){return u.call(new Date(-5e13-1))!=="0385-07-25T07:06:39.999Z"})||!r(function(){u.call(new Date(NaN))})?function(){if(!i(c(this)))throw new n("Invalid time value");var x=this,w=d(x),A=h(x),E=w<0?"-":w>9999?"+":"";return E+t(a(w),E?6:4,0)+"-"+t(g(x)+1,2,0)+"-"+t(f(x),2,0)+"T"+t(p(x),2,0)+":"+t(m(x),2,0)+":"+t(_(x),2,0)+"."+t(A,3,0)+"Z"}:u,bc}var Iy;function gT(){if(Iy)return _y;Iy=1;var e=B(),r=Be(),t=sr(),n=A_(),i=yT(),a=$r(),o=re(),u=o(function(){return new Date(NaN).toJSON()!==null||r(Date.prototype.toJSON,{toISOString:function(){return 1}})!==1});return e({target:"Date",proto:!0,forced:u},{toJSON:function(f){var d=t(this),p=n(d,"number");return typeof p=="number"&&!isFinite(p)?null:!("toISOString"in d)&&a(d)==="Date"?r(i,d):d.toISOString()}}),_y}var _c,Ty;function bT(){if(Ty)return _c;Ty=1,gT(),G_();var e=Se(),r=Ii();return e.JSON||(e.JSON={stringify:JSON.stringify}),_c=function(n,i,a){return r(e.JSON.stringify,null,arguments)},_c}var Sc,xy;function _T(){if(xy)return Sc;xy=1;var e=bT();return Sc=e,Sc}var wc,Ry;function ST(){return Ry||(Ry=1,wc=_T()),wc}var wT=ST(),ET=W(wT),Oy={},qy={},Ec,Py;function IT(){if(Py)return Ec;Py=1;var e=TypeError;return Ec=function(r,t){if(r<t)throw new e("Not enough arguments");return r},Ec}var Ic,Ay;function sS(){if(Ay)return Ic;Ay=1;var e=ve(),r=Ii(),t=Ee(),n=nS(),i=Zt(),a=an(),o=IT(),u=e.Function,c=/MSIE .\./.test(i)||n==="BUN"&&(function(){var f=e.Bun.version.split(".");return f.length<3||f[0]==="0"&&(f[1]<3||f[1]==="3"&&f[2]==="0")})();return Ic=function(f,d){var p=d?2:1;return c?function(h,m){var g=o(arguments.length,1)>p,_=t(h)?h:u(h),T=g?a(arguments,p):[],x=g?function(){r(_,this,T)}:_;return d?f(x,m):f(x)}:f},Ic}var Dy;function TT(){if(Dy)return qy;Dy=1;var e=B(),r=ve(),t=sS(),n=t(r.setInterval,!0);return e({global:!0,bind:!0,forced:r.setInterval!==n},{setInterval:n}),qy}var Cy={},My;function xT(){if(My)return Cy;My=1;var e=B(),r=ve(),t=sS(),n=t(r.setTimeout,!0);return e({global:!0,bind:!0,forced:r.setTimeout!==n},{setTimeout:n}),Cy}var $y;function RT(){return $y||($y=1,TT(),xT()),Oy}var Tc,Ly;function OT(){if(Ly)return Tc;Ly=1,RT();var e=Se();return Tc=e.setTimeout,Tc}var xc,Ny;function qT(){return Ny||(Ny=1,xc=OT()),xc}var PT=qT(),AT=W(PT),Rc={exports:{}},jy;function DT(){return jy||(jy=1,(function(e){function r(n){if(n)return t(n);this._callbacks=new Map}function t(n){return Object.assign(n,r.prototype),n._callbacks=new Map,n}r.prototype.on=function(n,i){const a=this._callbacks.get(n)??[];return a.push(i),this._callbacks.set(n,a),this},r.prototype.once=function(n,i){const a=(...o)=>{this.off(n,a),i.apply(this,o)};return a.fn=i,this.on(n,a),this},r.prototype.off=function(n,i){if(n===void 0&&i===void 0)return this._callbacks.clear(),this;if(i===void 0)return this._callbacks.delete(n),this;const a=this._callbacks.get(n);if(a){for(const[o,u]of a.entries())if(u===i||u.fn===i){a.splice(o,1);break}a.length===0?this._callbacks.delete(n):this._callbacks.set(n,a)}return this},r.prototype.emit=function(n,...i){const a=this._callbacks.get(n);if(a){const o=[...a];for(const u of o)u.apply(this,i)}return this},r.prototype.listeners=function(n){return this._callbacks.get(n)??[]},r.prototype.listenerCount=function(n){if(n)return this.listeners(n).length;let i=0;for(const a of this._callbacks.values())i+=a.length;return i},r.prototype.hasListeners=function(n){return this.listenerCount(n)>0},r.prototype.addEventListener=r.prototype.on,r.prototype.removeListener=r.prototype.off,r.prototype.removeEventListener=r.prototype.off,r.prototype.removeAllListeners=r.prototype.off,e.exports=r})(Rc)),Rc.exports}var CT=DT(),MT=W(CT);function or(){return or=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},or.apply(this,arguments)}function Je(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function vi(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var uf;typeof Object.assign!="function"?uf=function(r){if(r==null)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(r),n=1;n<arguments.length;n++){var i=arguments[n];if(i!=null)for(var a in i)i.hasOwnProperty(a)&&(t[a]=i[a])}return t}:uf=Object.assign;var pt=uf,Fy=["","webkit","Moz","MS","ms","o"],$T=typeof document>"u"?{style:{}}:document.createElement("div"),LT="function",Gt=Math.round,ht=Math.abs,Of=Date.now;function Ni(e,r){for(var t,n,i=r[0].toUpperCase()+r.slice(1),a=0;a<Fy.length;){if(t=Fy[a],n=t?t+i:r,n in e)return n;a++}}var Dr;typeof window>"u"?Dr={}:Dr=window;var uS=Ni($T.style,"touchAction"),cS=uS!==void 0;function NT(){if(!cS)return!1;var e={},r=Dr.CSS&&Dr.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(t){return e[t]=r?Dr.CSS.supports("touch-action",t):!0}),e}var lS="compute",fS="auto",cf="manipulation",ft="none",$n="pan-x",Ln="pan-y",pi=NT(),jT=/mobile|tablet|ip(ad|hone|od)|android/i,dS="ontouchstart"in Dr,FT=Ni(Dr,"PointerEvent")!==void 0,kT=dS&&jT.test(navigator.userAgent),Xn="touch",BT="pen",qf="mouse",UT="kinect",zT=25,Me=1,wt=2,de=4,ke=8,gi=1,Zn=2,Jn=4,Qn=8,Yt=16,pr=Zn|Jn,dt=Qn|Yt,vS=pr|dt,pS=["x","y"],bi=["clientX","clientY"];function Cr(e,r,t){var n;if(e)if(e.forEach)e.forEach(r,t);else if(e.length!==void 0)for(n=0;n<e.length;)r.call(t,e[n],n,e),n++;else for(n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n,e)}function ji(e,r){return typeof e===LT?e.apply(r&&r[0]||void 0,r):e}function ct(e,r){return e.indexOf(r)>-1}function GT(e){if(ct(e,ft))return ft;var r=ct(e,$n),t=ct(e,Ln);return r&&t?ft:r||t?r?$n:Ln:ct(e,cf)?cf:fS}var hS=(function(){function e(t,n){this.manager=t,this.set(n)}var r=e.prototype;return r.set=function(n){n===lS&&(n=this.compute()),cS&&this.manager.element.style&&pi[n]&&(this.manager.element.style[uS]=n),this.actions=n.toLowerCase().trim()},r.update=function(){this.set(this.manager.options.touchAction)},r.compute=function(){var n=[];return Cr(this.manager.recognizers,function(i){ji(i.options.enable,[i])&&(n=n.concat(i.getTouchAction()))}),GT(n.join(" "))},r.preventDefaults=function(n){var i=n.srcEvent,a=n.offsetDirection;if(this.manager.session.prevented){i.preventDefault();return}var o=this.actions,u=ct(o,ft)&&!pi[ft],c=ct(o,Ln)&&!pi[Ln],f=ct(o,$n)&&!pi[$n];if(u){var d=n.pointers.length===1,p=n.distance<2,h=n.deltaTime<250;if(d&&p&&h)return}if(!(f&&c)&&(u||c&&a&pr||f&&a&dt))return this.preventSrc(i)},r.preventSrc=function(n){this.manager.session.prevented=!0,n.preventDefault()},e})();function Pf(e,r){for(;e;){if(e===r)return!0;e=e.parentNode}return!1}function mS(e){var r=e.length;if(r===1)return{x:Gt(e[0].clientX),y:Gt(e[0].clientY)};for(var t=0,n=0,i=0;i<r;)t+=e[i].clientX,n+=e[i].clientY,i++;return{x:Gt(t/r),y:Gt(n/r)}}function ky(e){for(var r=[],t=0;t<e.pointers.length;)r[t]={clientX:Gt(e.pointers[t].clientX),clientY:Gt(e.pointers[t].clientY)},t++;return{timeStamp:Of(),pointers:r,center:mS(r),deltaX:e.deltaX,deltaY:e.deltaY}}function _i(e,r,t){t||(t=pS);var n=r[t[0]]-e[t[0]],i=r[t[1]]-e[t[1]];return Math.sqrt(n*n+i*i)}function lf(e,r,t){t||(t=pS);var n=r[t[0]]-e[t[0]],i=r[t[1]]-e[t[1]];return Math.atan2(i,n)*180/Math.PI}function yS(e,r){return e===r?gi:ht(e)>=ht(r)?e<0?Zn:Jn:r<0?Qn:Yt}function KT(e,r){var t=r.center,n=e.offsetDelta||{},i=e.prevDelta||{},a=e.prevInput||{};(r.eventType===Me||a.eventType===de)&&(i=e.prevDelta={x:a.deltaX||0,y:a.deltaY||0},n=e.offsetDelta={x:t.x,y:t.y}),r.deltaX=i.x+(t.x-n.x),r.deltaY=i.y+(t.y-n.y)}function gS(e,r,t){return{x:r/e||0,y:t/e||0}}function WT(e,r){return _i(r[0],r[1],bi)/_i(e[0],e[1],bi)}function VT(e,r){return lf(r[1],r[0],bi)+lf(e[1],e[0],bi)}function YT(e,r){var t=e.lastInterval||r,n=r.timeStamp-t.timeStamp,i,a,o,u;if(r.eventType!==ke&&(n>zT||t.velocity===void 0)){var c=r.deltaX-t.deltaX,f=r.deltaY-t.deltaY,d=gS(n,c,f);a=d.x,o=d.y,i=ht(d.x)>ht(d.y)?d.x:d.y,u=yS(c,f),e.lastInterval=r}else i=t.velocity,a=t.velocityX,o=t.velocityY,u=t.direction;r.velocity=i,r.velocityX=a,r.velocityY=o,r.direction=u}function HT(e,r){var t=e.session,n=r.pointers,i=n.length;t.firstInput||(t.firstInput=ky(r)),i>1&&!t.firstMultiple?t.firstMultiple=ky(r):i===1&&(t.firstMultiple=!1);var a=t.firstInput,o=t.firstMultiple,u=o?o.center:a.center,c=r.center=mS(n);r.timeStamp=Of(),r.deltaTime=r.timeStamp-a.timeStamp,r.angle=lf(u,c),r.distance=_i(u,c),KT(t,r),r.offsetDirection=yS(r.deltaX,r.deltaY);var f=gS(r.deltaTime,r.deltaX,r.deltaY);r.overallVelocityX=f.x,r.overallVelocityY=f.y,r.overallVelocity=ht(f.x)>ht(f.y)?f.x:f.y,r.scale=o?WT(o.pointers,n):1,r.rotation=o?VT(o.pointers,n):0,r.maxPointers=t.prevInput?r.pointers.length>t.prevInput.maxPointers?r.pointers.length:t.prevInput.maxPointers:r.pointers.length,YT(t,r);var d=e.element,p=r.srcEvent,h;p.composedPath?h=p.composedPath()[0]:p.path?h=p.path[0]:h=p.target,Pf(h,d)&&(d=h),r.target=d}function XT(e,r,t){var n=t.pointers.length,i=t.changedPointers.length,a=r&Me&&n-i===0,o=r&(de|ke)&&n-i===0;t.isFirst=!!a,t.isFinal=!!o,a&&(e.session={}),t.eventType=r,HT(e,t),e.emit("hammer.input",t),e.recognize(t),e.session.prevInput=t}function Nn(e){return e.trim().split(/\s+/g)}function Pn(e,r,t){Cr(Nn(r),function(n){e.addEventListener(n,t,!1)})}function An(e,r,t){Cr(Nn(r),function(n){e.removeEventListener(n,t,!1)})}function By(e){var r=e.ownerDocument||e;return r.defaultView||r.parentWindow||window}var un=(function(){function e(t,n){var i=this;this.manager=t,this.callback=n,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(a){ji(t.options.enable,[t])&&i.handler(a)},this.init()}var r=e.prototype;return r.handler=function(){},r.init=function(){this.evEl&&Pn(this.element,this.evEl,this.domHandler),this.evTarget&&Pn(this.target,this.evTarget,this.domHandler),this.evWin&&Pn(By(this.element),this.evWin,this.domHandler)},r.destroy=function(){this.evEl&&An(this.element,this.evEl,this.domHandler),this.evTarget&&An(this.target,this.evTarget,this.domHandler),this.evWin&&An(By(this.element),this.evWin,this.domHandler)},e})();function mt(e,r,t){if(e.indexOf&&!t)return e.indexOf(r);for(var n=0;n<e.length;){if(t&&e[n][t]==r||!t&&e[n]===r)return n;n++}return-1}var ZT={pointerdown:Me,pointermove:wt,pointerup:de,pointercancel:ke,pointerout:ke},JT={2:Xn,3:BT,4:qf,5:UT},bS="pointerdown",_S="pointermove pointerup pointercancel";Dr.MSPointerEvent&&!Dr.PointerEvent&&(bS="MSPointerDown",_S="MSPointerMove MSPointerUp MSPointerCancel");var SS=(function(e){Je(r,e);function r(){var n,i=r.prototype;return i.evEl=bS,i.evWin=_S,n=e.apply(this,arguments)||this,n.store=n.manager.session.pointerEvents=[],n}var t=r.prototype;return t.handler=function(i){var a=this.store,o=!1,u=i.type.toLowerCase().replace("ms",""),c=ZT[u],f=JT[i.pointerType]||i.pointerType,d=f===Xn,p=mt(a,i.pointerId,"pointerId");c&Me&&(i.button===0||d)?p<0&&(a.push(i),p=a.length-1):c&(de|ke)&&(o=!0),!(p<0)&&(a[p]=i,this.callback(this.manager,c,{pointers:a,changedPointers:[i],pointerType:f,srcEvent:i}),o&&a.splice(p,1))},r})(un);function jn(e){return Array.prototype.slice.call(e,0)}function Af(e,r,t){for(var n=[],i=[],a=0;a<e.length;){var o=r?e[a][r]:e[a];mt(i,o)<0&&n.push(e[a]),i[a]=o,a++}return t&&(r?n=n.sort(function(u,c){return u[r]>c[r]}):n=n.sort()),n}var QT={touchstart:Me,touchmove:wt,touchend:de,touchcancel:ke},e0="touchstart touchmove touchend touchcancel",Df=(function(e){Je(r,e);function r(){var n;return r.prototype.evTarget=e0,n=e.apply(this,arguments)||this,n.targetIds={},n}var t=r.prototype;return t.handler=function(i){var a=QT[i.type],o=r0.call(this,i,a);o&&this.callback(this.manager,a,{pointers:o[0],changedPointers:o[1],pointerType:Xn,srcEvent:i})},r})(un);function r0(e,r){var t=jn(e.touches),n=this.targetIds;if(r&(Me|wt)&&t.length===1)return n[t[0].identifier]=!0,[t,t];var i,a,o=jn(e.changedTouches),u=[],c=this.target;if(a=t.filter(function(f){return Pf(f.target,c)}),r===Me)for(i=0;i<a.length;)n[a[i].identifier]=!0,i++;for(i=0;i<o.length;)n[o[i].identifier]&&u.push(o[i]),r&(de|ke)&&delete n[o[i].identifier],i++;if(u.length)return[Af(a.concat(u),"identifier",!0),u]}var t0={mousedown:Me,mousemove:wt,mouseup:de},n0="mousedown",i0="mousemove mouseup",Cf=(function(e){Je(r,e);function r(){var n,i=r.prototype;return i.evEl=n0,i.evWin=i0,n=e.apply(this,arguments)||this,n.pressed=!1,n}var t=r.prototype;return t.handler=function(i){var a=t0[i.type];a&Me&&i.button===0&&(this.pressed=!0),a&wt&&i.which!==1&&(a=de),this.pressed&&(a&de&&(this.pressed=!1),this.callback(this.manager,a,{pointers:[i],changedPointers:[i],pointerType:qf,srcEvent:i}))},r})(un),a0=2500,Uy=25;function zy(e){var r=e.changedPointers,t=r[0];if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY},i=this.lastTouches;this.lastTouches.push(n);var a=function(){var u=i.indexOf(n);u>-1&&i.splice(u,1)};setTimeout(a,a0)}}function o0(e,r){e&Me?(this.primaryTouch=r.changedPointers[0].identifier,zy.call(this,r)):e&(de|ke)&&zy.call(this,r)}function s0(e){for(var r=e.srcEvent.clientX,t=e.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var i=this.lastTouches[n],a=Math.abs(r-i.x),o=Math.abs(t-i.y);if(a<=Uy&&o<=Uy)return!0}return!1}var wS=(function(){var e=(function(r){Je(t,r);function t(i,a){var o;return o=r.call(this,i,a)||this,o.handler=function(u,c,f){var d=f.pointerType===Xn,p=f.pointerType===qf;if(!(p&&f.sourceCapabilities&&f.sourceCapabilities.firesTouchEvents)){if(d)o0.call(vi(vi(o)),c,f);else if(p&&s0.call(vi(vi(o)),f))return;o.callback(u,c,f)}},o.touch=new Df(o.manager,o.handler),o.mouse=new Cf(o.manager,o.handler),o.primaryTouch=null,o.lastTouches=[],o}var n=t.prototype;return n.destroy=function(){this.touch.destroy(),this.mouse.destroy()},t})(un);return e})();function u0(e){var r,t=e.options.inputClass;return t?r=t:FT?r=SS:kT?r=Df:dS?r=wS:r=Cf,new r(e,XT)}function Kt(e,r,t){return Array.isArray(e)?(Cr(e,t[r],t),!0):!1}var yi=1,Xe=2,Ht=4,Gr=8,Mr=Gr,Fn=16,vr=32,c0=1;function l0(){return c0++}function hi(e,r){var t=r.manager;return t?t.get(e):e}function Gy(e){return e&Fn?"cancel":e&Gr?"end":e&Ht?"move":e&Xe?"start":""}var ei=(function(){function e(t){t===void 0&&(t={}),this.options=or({enable:!0},t),this.id=l0(),this.manager=null,this.state=yi,this.simultaneous={},this.requireFail=[]}var r=e.prototype;return r.set=function(n){return pt(this.options,n),this.manager&&this.manager.touchAction.update(),this},r.recognizeWith=function(n){if(Kt(n,"recognizeWith",this))return this;var i=this.simultaneous;return n=hi(n,this),i[n.id]||(i[n.id]=n,n.recognizeWith(this)),this},r.dropRecognizeWith=function(n){return Kt(n,"dropRecognizeWith",this)?this:(n=hi(n,this),delete this.simultaneous[n.id],this)},r.requireFailure=function(n){if(Kt(n,"requireFailure",this))return this;var i=this.requireFail;return n=hi(n,this),mt(i,n)===-1&&(i.push(n),n.requireFailure(this)),this},r.dropRequireFailure=function(n){if(Kt(n,"dropRequireFailure",this))return this;n=hi(n,this);var i=mt(this.requireFail,n);return i>-1&&this.requireFail.splice(i,1),this},r.hasRequireFailures=function(){return this.requireFail.length>0},r.canRecognizeWith=function(n){return!!this.simultaneous[n.id]},r.emit=function(n){var i=this,a=this.state;function o(u){i.manager.emit(u,n)}a<Gr&&o(i.options.event+Gy(a)),o(i.options.event),n.additionalEvent&&o(n.additionalEvent),a>=Gr&&o(i.options.event+Gy(a))},r.tryEmit=function(n){if(this.canEmit())return this.emit(n);this.state=vr},r.canEmit=function(){for(var n=0;n<this.requireFail.length;){if(!(this.requireFail[n].state&(vr|yi)))return!1;n++}return!0},r.recognize=function(n){var i=pt({},n);if(!ji(this.options.enable,[this,i])){this.reset(),this.state=vr;return}this.state&(Mr|Fn|vr)&&(this.state=yi),this.state=this.process(i),this.state&(Xe|Ht|Gr|Fn)&&this.tryEmit(i)},r.process=function(n){},r.getTouchAction=function(){},r.reset=function(){},e})(),ff=(function(e){Je(r,e);function r(n){var i;return n===void 0&&(n={}),i=e.call(this,or({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},n))||this,i.pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}var t=r.prototype;return t.getTouchAction=function(){return[cf]},t.process=function(i){var a=this,o=this.options,u=i.pointers.length===o.pointers,c=i.distance<o.threshold,f=i.deltaTime<o.time;if(this.reset(),i.eventType&Me&&this.count===0)return this.failTimeout();if(c&&f&&u){if(i.eventType!==de)return this.failTimeout();var d=this.pTime?i.timeStamp-this.pTime<o.interval:!0,p=!this.pCenter||_i(this.pCenter,i.center)<o.posThreshold;this.pTime=i.timeStamp,this.pCenter=i.center,!p||!d?this.count=1:this.count+=1,this._input=i;var h=this.count%o.taps;if(h===0)return this.hasRequireFailures()?(this._timer=setTimeout(function(){a.state=Mr,a.tryEmit()},o.interval),Xe):Mr}return vr},t.failTimeout=function(){var i=this;return this._timer=setTimeout(function(){i.state=vr},this.options.interval),vr},t.reset=function(){clearTimeout(this._timer)},t.emit=function(){this.state===Mr&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},r})(ei),Xt=(function(e){Je(r,e);function r(n){return n===void 0&&(n={}),e.call(this,or({pointers:1},n))||this}var t=r.prototype;return t.attrTest=function(i){var a=this.options.pointers;return a===0||i.pointers.length===a},t.process=function(i){var a=this.state,o=i.eventType,u=a&(Xe|Ht),c=this.attrTest(i);return u&&(o&ke||!c)?a|Fn:u||c?o&de?a|Gr:a&Xe?a|Ht:Xe:vr},r})(ei);function ES(e){return e===Yt?"down":e===Qn?"up":e===Zn?"left":e===Jn?"right":""}var Mf=(function(e){Je(r,e);function r(n){var i;return n===void 0&&(n={}),i=e.call(this,or({event:"pan",threshold:10,pointers:1,direction:vS},n))||this,i.pX=null,i.pY=null,i}var t=r.prototype;return t.getTouchAction=function(){var i=this.options.direction,a=[];return i&pr&&a.push(Ln),i&dt&&a.push($n),a},t.directionTest=function(i){var a=this.options,o=!0,u=i.distance,c=i.direction,f=i.deltaX,d=i.deltaY;return c&a.direction||(a.direction&pr?(c=f===0?gi:f<0?Zn:Jn,o=f!==this.pX,u=Math.abs(i.deltaX)):(c=d===0?gi:d<0?Qn:Yt,o=d!==this.pY,u=Math.abs(i.deltaY))),i.direction=c,o&&u>a.threshold&&c&a.direction},t.attrTest=function(i){return Xt.prototype.attrTest.call(this,i)&&(this.state&Xe||!(this.state&Xe)&&this.directionTest(i))},t.emit=function(i){this.pX=i.deltaX,this.pY=i.deltaY;var a=ES(i.direction);a&&(i.additionalEvent=this.options.event+a),e.prototype.emit.call(this,i)},r})(Xt),IS=(function(e){Je(r,e);function r(n){return n===void 0&&(n={}),e.call(this,or({event:"swipe",threshold:10,velocity:.3,direction:pr|dt,pointers:1},n))||this}var t=r.prototype;return t.getTouchAction=function(){return Mf.prototype.getTouchAction.call(this)},t.attrTest=function(i){var a=this.options.direction,o;return a&(pr|dt)?o=i.overallVelocity:a&pr?o=i.overallVelocityX:a&dt&&(o=i.overallVelocityY),e.prototype.attrTest.call(this,i)&&a&i.offsetDirection&&i.distance>this.options.threshold&&i.maxPointers===this.options.pointers&&ht(o)>this.options.velocity&&i.eventType&de},t.emit=function(i){var a=ES(i.offsetDirection);a&&this.manager.emit(this.options.event+a,i),this.manager.emit(this.options.event,i)},r})(Xt),TS=(function(e){Je(r,e);function r(n){return n===void 0&&(n={}),e.call(this,or({event:"pinch",threshold:0,pointers:2},n))||this}var t=r.prototype;return t.getTouchAction=function(){return[ft]},t.attrTest=function(i){return e.prototype.attrTest.call(this,i)&&(Math.abs(i.scale-1)>this.options.threshold||this.state&Xe)},t.emit=function(i){if(i.scale!==1){var a=i.scale<1?"in":"out";i.additionalEvent=this.options.event+a}e.prototype.emit.call(this,i)},r})(Xt),xS=(function(e){Je(r,e);function r(n){return n===void 0&&(n={}),e.call(this,or({event:"rotate",threshold:0,pointers:2},n))||this}var t=r.prototype;return t.getTouchAction=function(){return[ft]},t.attrTest=function(i){return e.prototype.attrTest.call(this,i)&&(Math.abs(i.rotation)>this.options.threshold||this.state&Xe)},r})(Xt),RS=(function(e){Je(r,e);function r(n){var i;return n===void 0&&(n={}),i=e.call(this,or({event:"press",pointers:1,time:251,threshold:9},n))||this,i._timer=null,i._input=null,i}var t=r.prototype;return t.getTouchAction=function(){return[fS]},t.process=function(i){var a=this,o=this.options,u=i.pointers.length===o.pointers,c=i.distance<o.threshold,f=i.deltaTime>o.time;if(this._input=i,!c||!u||i.eventType&(de|ke)&&!f)this.reset();else if(i.eventType&Me)this.reset(),this._timer=setTimeout(function(){a.state=Mr,a.tryEmit()},o.time);else if(i.eventType&de)return Mr;return vr},t.reset=function(){clearTimeout(this._timer)},t.emit=function(i){this.state===Mr&&(i&&i.eventType&de?this.manager.emit(this.options.event+"up",i):(this._input.timeStamp=Of(),this.manager.emit(this.options.event,this._input)))},r})(ei),OS={domEvents:!1,touchAction:lS,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Ky=[[xS,{enable:!1}],[TS,{enable:!1},["rotate"]],[IS,{direction:pr}],[Mf,{direction:pr},["swipe"]],[ff],[ff,{event:"doubletap",taps:2},["tap"]],[RS]],f0=1,Wy=2;function Vy(e,r){var t=e.element;if(t.style){var n;Cr(e.options.cssProps,function(i,a){n=Ni(t.style,a),r?(e.oldCssProps[n]=t.style[n],t.style[n]=i):t.style[n]=e.oldCssProps[n]||""}),r||(e.oldCssProps={})}}function d0(e,r){var t=document.createEvent("Event");t.initEvent(e,!0,!0),t.gesture=r,r.target.dispatchEvent(t)}var Yy=(function(){function e(t,n){var i=this;this.options=pt({},OS,n||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=u0(this),this.touchAction=new hS(this,this.options.touchAction),Vy(this,!0),Cr(this.options.recognizers,function(a){var o=i.add(new a[0](a[1]));a[2]&&o.recognizeWith(a[2]),a[3]&&o.requireFailure(a[3])},this)}var r=e.prototype;return r.set=function(n){return pt(this.options,n),n.touchAction&&this.touchAction.update(),n.inputTarget&&(this.input.destroy(),this.input.target=n.inputTarget,this.input.init()),this},r.stop=function(n){this.session.stopped=n?Wy:f0},r.recognize=function(n){var i=this.session;if(!i.stopped){this.touchAction.preventDefaults(n);var a,o=this.recognizers,u=i.curRecognizer;(!u||u&&u.state&Mr)&&(i.curRecognizer=null,u=null);for(var c=0;c<o.length;)a=o[c],i.stopped!==Wy&&(!u||a===u||a.canRecognizeWith(u))?a.recognize(n):a.reset(),!u&&a.state&(Xe|Ht|Gr)&&(i.curRecognizer=a,u=a),c++}},r.get=function(n){if(n instanceof ei)return n;for(var i=this.recognizers,a=0;a<i.length;a++)if(i[a].options.event===n)return i[a];return null},r.add=function(n){if(Kt(n,"add",this))return this;var i=this.get(n.options.event);return i&&this.remove(i),this.recognizers.push(n),n.manager=this,this.touchAction.update(),n},r.remove=function(n){if(Kt(n,"remove",this))return this;var i=this.get(n);if(n){var a=this.recognizers,o=mt(a,i);o!==-1&&(a.splice(o,1),this.touchAction.update())}return this},r.on=function(n,i){if(n===void 0||i===void 0)return this;var a=this.handlers;return Cr(Nn(n),function(o){a[o]=a[o]||[],a[o].push(i)}),this},r.off=function(n,i){if(n===void 0)return this;var a=this.handlers;return Cr(Nn(n),function(o){i?a[o]&&a[o].splice(mt(a[o],i),1):delete a[o]}),this},r.emit=function(n,i){this.options.domEvents&&d0(n,i);var a=this.handlers[n]&&this.handlers[n].slice();if(!(!a||!a.length)){i.type=n,i.preventDefault=function(){i.srcEvent.preventDefault()};for(var o=0;o<a.length;)a[o](i),o++}},r.destroy=function(){this.element&&Vy(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},e})(),v0={touchstart:Me,touchmove:wt,touchend:de,touchcancel:ke},p0="touchstart",h0="touchstart touchmove touchend touchcancel",m0=(function(e){Je(r,e);function r(){var n,i=r.prototype;return i.evTarget=p0,i.evWin=h0,n=e.apply(this,arguments)||this,n.started=!1,n}var t=r.prototype;return t.handler=function(i){var a=v0[i.type];if(a===Me&&(this.started=!0),!!this.started){var o=y0.call(this,i,a);a&(de|ke)&&o[0].length-o[1].length===0&&(this.started=!1),this.callback(this.manager,a,{pointers:o[0],changedPointers:o[1],pointerType:Xn,srcEvent:i})}},r})(un);function y0(e,r){var t=jn(e.touches),n=jn(e.changedTouches);return r&(de|ke)&&(t=Af(t.concat(n),"identifier",!0)),[t,n]}function qS(e,r,t){var n="DEPRECATED METHOD: "+r+`
`+t+` AT 
`;return function(){var i=new Error("get-stack-trace"),a=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=window.console&&(window.console.warn||window.console.log);return o&&o.call(window.console,n,a),e.apply(this,arguments)}}var PS=qS(function(e,r,t){for(var n=Object.keys(r),i=0;i<n.length;)(!t||t&&e[n[i]]===void 0)&&(e[n[i]]=r[n[i]]),i++;return e},"extend","Use `assign`."),g0=qS(function(e,r){return PS(e,r,!0)},"merge","Use `assign`.");function b0(e,r,t){var n=r.prototype,i;i=e.prototype=Object.create(n),i.constructor=e,i._super=n,t&&pt(i,t)}function Hy(e,r){return function(){return e.apply(r,arguments)}}var _0=(function(){var e=function(t,n){return n===void 0&&(n={}),new Yy(t,or({recognizers:Ky.concat()},n))};return e.VERSION="2.0.17-rc",e.DIRECTION_ALL=vS,e.DIRECTION_DOWN=Yt,e.DIRECTION_LEFT=Zn,e.DIRECTION_RIGHT=Jn,e.DIRECTION_UP=Qn,e.DIRECTION_HORIZONTAL=pr,e.DIRECTION_VERTICAL=dt,e.DIRECTION_NONE=gi,e.DIRECTION_DOWN=Yt,e.INPUT_START=Me,e.INPUT_MOVE=wt,e.INPUT_END=de,e.INPUT_CANCEL=ke,e.STATE_POSSIBLE=yi,e.STATE_BEGAN=Xe,e.STATE_CHANGED=Ht,e.STATE_ENDED=Gr,e.STATE_RECOGNIZED=Mr,e.STATE_CANCELLED=Fn,e.STATE_FAILED=vr,e.Manager=Yy,e.Input=un,e.TouchAction=hS,e.TouchInput=Df,e.MouseInput=Cf,e.PointerEventInput=SS,e.TouchMouseInput=wS,e.SingleTouchInput=m0,e.Recognizer=ei,e.AttrRecognizer=Xt,e.Tap=ff,e.Pan=Mf,e.Swipe=IS,e.Pinch=TS,e.Rotate=xS,e.Press=RS,e.on=Pn,e.off=An,e.each=Cr,e.merge=g0,e.extend=PS,e.bindFn=Hy,e.assign=pt,e.inherit=b0,e.bindFn=Hy,e.prefixed=Ni,e.toArray=jn,e.inArray=mt,e.uniqueArray=Af,e.splitStr=Nn,e.boolOrFn=ji,e.hasParent=Pf,e.addEventListeners=Pn,e.removeEventListeners=An,e.defaults=pt({},OS,{preset:Ky}),e})();const AS=aI("DELETE");function S0(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return DS({},e,...t)}function DS(){const e=Si(...arguments);return MS(e),e}function Si(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length<2)return r[0];if(r.length>2)return Si(DS(r[0],r[1]),...dI(r).call(r,2));const n=r[0],i=r[1];if(n instanceof Date&&i instanceof Date)return n.setTime(i.getTime()),n;for(const a of gI(i))Object.prototype.propertyIsEnumerable.call(i,a)&&(i[a]===AS?delete n[a]:n[a]!==null&&i[a]!==null&&typeof n[a]=="object"&&typeof i[a]=="object"&&!dr(n[a])&&!dr(i[a])?n[a]=Si(n[a],i[a]):n[a]=CS(i[a]));return n}function CS(e){return dr(e)?qr(e).call(e,r=>CS(r)):typeof e=="object"&&e!==null?e instanceof Date?new Date(e.getTime()):Si({},e):e}function MS(e){for(const r of Rf(e))e[r]===AS?delete e[r]:typeof e[r]=="object"&&e[r]!==null&&MS(e[r])}function w0(){const e=()=>{};return{on:e,off:e,destroy:e,emit:e,get(){return{set:e}}}}const E0=typeof window<"u"?window.Hammer||_0:function(){return w0()};function Ar(e){var r;this._cleanupQueue=[],this.active=!1,this._dom={container:e,overlay:document.createElement("div")},this._dom.overlay.classList.add("vis-overlay"),this._dom.container.appendChild(this._dom.overlay),this._cleanupQueue.push(()=>{this._dom.overlay.parentNode.removeChild(this._dom.overlay)});const t=E0(this._dom.overlay);t.on("tap",tS(r=this._onTapOverlay).call(r,this)),this._cleanupQueue.push(()=>{t.destroy()});const n=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"];Mn(n).call(n,i=>{t.on(i,a=>{a.srcEvent.stopPropagation()})}),document&&document.body&&(this._onClick=i=>{I0(i.target,e)||this.deactivate()},document.body.addEventListener("click",this._onClick),this._cleanupQueue.push(()=>{document.body.removeEventListener("click",this._onClick)})),this._escListener=i=>{("key"in i?i.key==="Escape":i.keyCode===27)&&this.deactivate()}}MT(Ar.prototype);Ar.current=null;Ar.prototype.destroy=function(){this.deactivate();for(const t of UI(e=oS(r=this._cleanupQueue).call(r,0)).call(e)){var e,r;t()}};Ar.prototype.activate=function(){Ar.current&&Ar.current.deactivate(),Ar.current=this,this.active=!0,this._dom.overlay.style.display="none",this._dom.container.classList.add("vis-active"),this.emit("change"),this.emit("activate"),document.body.addEventListener("keydown",this._escListener)};Ar.prototype.deactivate=function(){this.active=!1,this._dom.overlay.style.display="block",this._dom.container.classList.remove("vis-active"),document.body.removeEventListener("keydown",this._escListener),this.emit("change"),this.emit("deactivate")};Ar.prototype._onTapOverlay=function(e){this.activate(),e.srcEvent.stopPropagation()};function I0(e,r){for(;e;){if(e===r)return!0;e=e.parentNode}return!1}var Oc,Xy;function T0(){if(Xy)return Oc;Xy=1,K_();var e=Se();return Oc=e.Object.getOwnPropertySymbols,Oc}var qc,Zy;function x0(){if(Zy)return qc;Zy=1;var e=T0();return qc=e,qc}var Pc,Jy;function R0(){return Jy||(Jy=1,Pc=x0()),Pc}var O0=R0(),Qy=W(O0),Ac={exports:{}},eg={},rg;function q0(){if(rg)return eg;rg=1;var e=B(),r=re(),t=yr(),n=Ri().f,i=pe(),a=!i||r(function(){n(1)});return e({target:"Object",stat:!0,forced:a,sham:!i},{getOwnPropertyDescriptor:function(u,c){return n(t(u),c)}}),eg}var tg;function P0(){if(tg)return Ac.exports;tg=1,q0();var e=Se(),r=e.Object,t=Ac.exports=function(i,a){return r.getOwnPropertyDescriptor(i,a)};return r.getOwnPropertyDescriptor.sham&&(t.sham=!0),Ac.exports}var Dc,ng;function A0(){if(ng)return Dc;ng=1;var e=P0();return Dc=e,Dc}var Cc,ig;function D0(){return ig||(ig=1,Cc=A0()),Cc}var C0=D0(),$S=W(C0),ag={},og;function M0(){if(og)return ag;og=1;var e=B(),r=pe(),t=iS(),n=yr(),i=Ri(),a=qi();return e({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(u){for(var c=n(u),f=i.f,d=t(c),p={},h=0,m,g;d.length>h;)g=f(c,m=d[h++]),g!==void 0&&a(p,m,g);return p}}),ag}var Mc,sg;function $0(){if(sg)return Mc;sg=1,M0();var e=Se();return Mc=e.Object.getOwnPropertyDescriptors,Mc}var $c,ug;function L0(){if(ug)return $c;ug=1;var e=$0();return $c=e,$c}var Lc,cg;function N0(){return cg||(cg=1,Lc=L0()),Lc}var j0=N0(),lg=W(j0),Nc={exports:{}},fg={},dg;function F0(){if(dg)return fg;dg=1;var e=B(),r=pe(),t=Ef().f;return e({target:"Object",stat:!0,forced:Object.defineProperties!==t,sham:!r},{defineProperties:t}),fg}var vg;function k0(){if(vg)return Nc.exports;vg=1,F0();var e=Se(),r=e.Object,t=Nc.exports=function(i,a){return r.defineProperties(i,a)};return r.defineProperties.sham&&(t.sham=!0),Nc.exports}var jc,pg;function B0(){if(pg)return jc;pg=1;var e=k0();return jc=e,jc}var Fc,hg;function U0(){return hg||(hg=1,Fc=B0()),Fc}var z0=U0(),G0=W(z0),kc,mg;function K0(){return mg||(mg=1,kc=$_()),kc}var W0=K0(),V0=W(W0),yg={},gg={},Bc={exports:{}},Uc,bg;function Y0(){if(bg)return Uc;bg=1;var e=re();return Uc=e(function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}}),Uc}var zc,_g;function H0(){if(_g)return zc;_g=1;var e=re(),r=$e(),t=$r(),n=Y0(),i=Object.isExtensible,a=e(function(){});return zc=a||n?function(u){return!r(u)||n&&t(u)==="ArrayBuffer"?!1:i?i(u):!0}:i,zc}var Gc,Sg;function X0(){if(Sg)return Gc;Sg=1;var e=re();return Gc=!e(function(){return Object.isExtensible(Object.preventExtensions({}))}),Gc}var wg;function LS(){if(wg)return Bc.exports;wg=1;var e=B(),r=ae(),t=Wn(),n=$e(),i=Te(),a=Ze().f,o=Di(),u=B_(),c=H0(),f=xi(),d=X0(),p=!1,h=f("meta"),m=0,g=function(E){a(E,h,{value:{objectID:"O"+m++,weakData:{}}})},_=function(E,O){if(!n(E))return typeof E=="symbol"?E:(typeof E=="string"?"S":"P")+E;if(!i(E,h)){if(!c(E))return"F";if(!O)return"E";g(E)}return E[h].objectID},T=function(E,O){if(!i(E,h)){if(!c(E))return!0;if(!O)return!1;g(E)}return E[h].weakData},x=function(E){return d&&p&&c(E)&&!i(E,h)&&g(E),E},w=function(){A.enable=function(){},p=!0;var E=o.f,O=r([].splice),P={};P[h]=1,E(P).length&&(o.f=function(q){for(var I=E(q),R=0,D=I.length;R<D;R++)if(I[R]===h){O(I,R,1);break}return I},e({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},A=Bc.exports={enable:w,fastKey:_,getWeakData:T,onFreeze:x};return t[h]=!0,Bc.exports}var Kc,Eg;function Z0(){if(Eg)return Kc;Eg=1;var e=xe(),r=sn(),t=e("iterator"),n=Array.prototype;return Kc=function(i){return i!==void 0&&(r.Array===i||n[t]===i)},Kc}var Wc,Ig;function NS(){if(Ig)return Wc;Ig=1;var e=Wr(),r=mf(),t=Un(),n=sn(),i=xe(),a=i("iterator");return Wc=function(o){if(!t(o))return r(o,a)||r(o,"@@iterator")||n[e(o)]},Wc}var Vc,Tg;function jS(){if(Tg)return Vc;Tg=1;var e=Be(),r=Lr(),t=Nr(),n=Qt(),i=NS(),a=TypeError;return Vc=function(o,u){var c=arguments.length<2?i(o):u;if(r(c))return t(e(c,o));throw new a(n(o)+" is not iterable")},Vc}var Yc,xg;function $f(){if(xg)return Yc;xg=1;var e=Be(),r=Nr(),t=mf();return Yc=function(n,i,a){var o,u;r(n);try{if(o=t(n,"return"),!o){if(i==="throw")throw a;return a}o=e(o,n)}catch(c){u=!0,o=c}if(i==="throw")throw a;if(u)throw o;return r(o),a},Yc}var Hc,Rg;function Lf(){if(Rg)return Hc;Rg=1;var e=Oi(),r=Be(),t=Nr(),n=Qt(),i=Z0(),a=Kr(),o=Ie(),u=jS(),c=NS(),f=$f(),d=TypeError,p=function(m,g){this.stopped=m,this.result=g},h=p.prototype;return Hc=function(m,g,_){var T=_&&_.that,x=!!(_&&_.AS_ENTRIES),w=!!(_&&_.IS_RECORD),A=!!(_&&_.IS_ITERATOR),E=!!(_&&_.INTERRUPTED),O=e(g,T),P,q,I,R,D,M,N,k=function(oe){return P&&f(P,"normal"),new p(!0,oe)},H=function(oe){return x?(t(oe),E?O(oe[0],oe[1],k):O(oe[0],oe[1])):E?O(oe,k):O(oe)};if(w)P=m.iterator;else if(A)P=m;else{if(q=c(m),!q)throw new d(n(m)+" is not iterable");if(i(q)){for(I=0,R=a(m);R>I;I++)if(D=H(m[I]),D&&o(h,D))return D;return new p(!1)}P=u(m,q)}for(M=w?m.next:P.next;!(N=r(M,P)).done;){try{D=H(N.value)}catch(oe){f(P,"throw",oe)}if(typeof D=="object"&&D&&o(h,D))return D}return new p(!1)},Hc}var Xc,Og;function FS(){if(Og)return Xc;Og=1;var e=Ie(),r=TypeError;return Xc=function(t,n){if(e(n,t))return t;throw new r("Incorrect invocation")},Xc}var Zc,qg;function kS(){if(qg)return Zc;qg=1;var e=B(),r=ve(),t=LS(),n=re(),i=tn(),a=Lf(),o=FS(),u=Ee(),c=$e(),f=Un(),d=St(),p=Ze().f,h=on().forEach,m=pe(),g=Hn(),_=g.set,T=g.getterFor;return Zc=function(x,w,A){var E=x.indexOf("Map")!==-1,O=x.indexOf("Weak")!==-1,P=E?"set":"add",q=r[x],I=q&&q.prototype,R={},D;if(!m||!u(q)||!(O||I.forEach&&!n(function(){new q().entries().next()})))D=A.getConstructor(w,x,E,P),t.enable();else{D=w(function(k,H){_(o(k,M),{type:x,collection:new q}),f(H)||a(H,k[P],{that:k,AS_ENTRIES:E})});var M=D.prototype,N=T(x);h(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(k){var H=k==="add"||k==="set";k in I&&!(O&&k==="clear")&&i(M,k,function(oe,Qe){var he=N(this).collection;if(!H&&O&&!c(oe))return k==="get"?void 0:!1;var Le=he[k](oe===0?0:oe,Qe);return H?this:Le})}),O||p(M,"size",{configurable:!0,get:function(){return N(this).collection.size}})}return d(D,x,!1,!0),R[x]=D,e({global:!0,forced:!0},R),O||A.setStrong(D,x,E),D},Zc}var Jc,Pg;function J0(){if(Pg)return Jc;Pg=1;var e=Yn();return Jc=function(r,t,n){for(var i in t)n&&n.unsafe&&r[i]?r[i]=t[i]:e(r,i,t[i],n);return r},Jc}var Qc,Ag;function Q0(){if(Ag)return Qc;Ag=1;var e=Ke(),r=If(),t=xe(),n=pe(),i=t("species");return Qc=function(a){var o=e(a);n&&o&&!o[i]&&r(o,i,{configurable:!0,get:function(){return this}})},Qc}var el,Dg;function BS(){if(Dg)return el;Dg=1;var e=Vn(),r=If(),t=J0(),n=Oi(),i=FS(),a=Un(),o=Lf(),u=Tf(),c=xf(),f=Q0(),d=pe(),p=LS().fastKey,h=Hn(),m=h.set,g=h.getterFor;return el={getConstructor:function(_,T,x,w){var A=_(function(I,R){i(I,E),m(I,{type:T,index:e(null),first:null,last:null,size:0}),d||(I.size=0),a(R)||o(R,I[w],{that:I,AS_ENTRIES:x})}),E=A.prototype,O=g(T),P=function(I,R,D){var M=O(I),N=q(I,R),k,H;return N?N.value=D:(M.last=N={index:H=p(R,!0),key:R,value:D,previous:k=M.last,next:null,removed:!1},M.first||(M.first=N),k&&(k.next=N),d?M.size++:I.size++,H!=="F"&&(M.index[H]=N)),I},q=function(I,R){var D=O(I),M=p(R),N;if(M!=="F")return D.index[M];for(N=D.first;N;N=N.next)if(N.key===R)return N};return t(E,{clear:function(){for(var R=this,D=O(R),M=D.first;M;)M.removed=!0,M.previous&&(M.previous=M.previous.next=null),M=M.next;D.first=D.last=null,D.index=e(null),d?D.size=0:R.size=0},delete:function(I){var R=this,D=O(R),M=q(R,I);if(M){var N=M.next,k=M.previous;delete D.index[M.index],M.removed=!0,k&&(k.next=N),N&&(N.previous=k),D.first===M&&(D.first=N),D.last===M&&(D.last=k),d?D.size--:R.size--}return!!M},forEach:function(R){for(var D=O(this),M=n(R,arguments.length>1?arguments[1]:void 0),N;N=N?N.next:D.first;)for(M(N.value,N.key,this);N&&N.removed;)N=N.previous},has:function(R){return!!q(this,R)}}),t(E,x?{get:function(R){var D=q(this,R);return D&&D.value},set:function(R,D){return P(this,R===0?0:R,D)}}:{add:function(R){return P(this,R=R===0?0:R,R)}}),d&&r(E,"size",{configurable:!0,get:function(){return O(this).size}}),A},setStrong:function(_,T,x){var w=T+" Iterator",A=g(T),E=g(w);u(_,T,function(O,P){m(this,{type:w,target:O,state:A(O),kind:P,last:null})},function(){for(var O=E(this),P=O.kind,q=O.last;q&&q.removed;)q=q.previous;return!O.target||!(O.last=q=q?q.next:O.state.first)?(O.target=null,c(void 0,!0)):c(P==="keys"?q.key:P==="values"?q.value:[q.key,q.value],!1)},x?"entries":"values",!x,!0),f(T)}},el}var Cg;function ex(){if(Cg)return gg;Cg=1;var e=kS(),r=BS();return e("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},r),gg}var Mg;function rx(){return Mg||(Mg=1,ex()),yg}var $g={},rl,Lg;function US(){return Lg||(Lg=1,rl=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}),rl}var tl,Ng;function tx(){if(Ng)return tl;Ng=1;var e=Ke(),r=US(),t=e("Map");return tl={Map:t,set:r("set",2),get:r("get",1),has:r("has",1),remove:r("delete",1),proto:t.prototype},tl}var jg;function nx(){if(jg)return $g;jg=1;var e=B(),r=ae(),t=Lr(),n=bt(),i=Lf(),a=tx(),o=en(),u=re(),c=a.Map,f=a.has,d=a.get,p=a.set,h=r([].push),m=o||u(function(){return c.groupBy("ab",function(g){return g}).get("a").length!==1});return e({target:"Map",stat:!0,forced:o||m},{groupBy:function(_,T){n(_),t(T);var x=new c,w=0;return i(_,function(A){var E=T(A,w++);f(x,E)?h(d(x,E),A):p(x,E,[A])}),x}}),$g}var nl,Fg;function ix(){if(Fg)return nl;Fg=1,Yr(),rx(),nx(),$i();var e=Se();return nl=e.Map,nl}var il,kg;function ax(){if(kg)return il;kg=1;var e=ix();return Hr(),il=e,il}var al,Bg;function ox(){return Bg||(Bg=1,al=ax()),al}var sx=ox(),zS=W(sx),Ug={},zg;function ux(){if(zg)return Ug;zg=1;var e=B(),r=on().some,t=Li(),n=t("some");return e({target:"Array",proto:!0,forced:!n},{some:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),Ug}var ol,Gg;function cx(){if(Gg)return ol;Gg=1,ux();var e=Ue();return ol=e("Array","some"),ol}var sl,Kg;function lx(){if(Kg)return sl;Kg=1;var e=Ie(),r=cx(),t=Array.prototype;return sl=function(n){var i=n.some;return n===t||e(t,n)&&i===t.some?r:i},sl}var ul,Wg;function fx(){if(Wg)return ul;Wg=1;var e=lx();return ul=e,ul}var cl,Vg;function dx(){return Vg||(Vg=1,cl=fx()),cl}var vx=dx(),px=W(vx),ll,Yg;function hx(){if(Yg)return ll;Yg=1,Yr();var e=Ue();return ll=e("Array","keys"),ll}var fl,Hg;function mx(){if(Hg)return fl;Hg=1;var e=hx();return fl=e,fl}var dl,Xg;function yx(){if(Xg)return dl;Xg=1,Hr();var e=Wr(),r=Te(),t=Ie(),n=mx(),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};return dl=function(o){var u=o.keys;return o===i||t(i,o)&&u===i.keys||r(a,e(o))?n:u},dl}var vl,Zg;function gx(){return Zg||(Zg=1,vl=yx()),vl}var bx=gx(),Ut=W(bx),Jg={},pl,Qg;function _x(){if(Qg)return pl;Qg=1;var e=an(),r=Math.floor,t=function(n,i){var a=n.length;if(a<8)for(var o=1,u,c;o<a;){for(c=o,u=n[o];c&&i(n[c-1],u)>0;)n[c]=n[--c];c!==o++&&(n[c]=u)}else for(var f=r(a/2),d=t(e(n,0,f),i),p=t(e(n,f),i),h=d.length,m=p.length,g=0,_=0;g<h||_<m;)n[g+_]=g<h&&_<m?i(d[g],p[_])<=0?d[g++]:p[_++]:g<h?d[g++]:p[_++];return n};return pl=t,pl}var hl,eb;function Sx(){if(eb)return hl;eb=1;var e=Zt(),r=e.match(/firefox\/(\d+)/i);return hl=!!r&&+r[1],hl}var ml,rb;function wx(){if(rb)return ml;rb=1;var e=Zt();return ml=/MSIE|Trident/.test(e),ml}var yl,tb;function Ex(){if(tb)return yl;tb=1;var e=Zt(),r=e.match(/AppleWebKit\/(\d+)\./);return yl=!!r&&+r[1],yl}var nb;function Ix(){if(nb)return Jg;nb=1;var e=B(),r=ae(),t=Lr(),n=sr(),i=Kr(),a=aS(),o=Vr(),u=re(),c=_x(),f=Li(),d=Sx(),p=wx(),h=zn(),m=Ex(),g=[],_=r(g.sort),T=r(g.push),x=u(function(){g.sort(void 0)}),w=u(function(){g.sort(null)}),A=f("sort"),E=!u(function(){if(h)return h<70;if(!(d&&d>3)){if(p)return!0;if(m)return m<603;var q="",I,R,D,M;for(I=65;I<76;I++){switch(R=String.fromCharCode(I),I){case 66:case 69:case 70:case 72:D=3;break;case 68:case 71:D=4;break;default:D=2}for(M=0;M<47;M++)g.push({k:R+M,v:D})}for(g.sort(function(N,k){return k.v-N.v}),M=0;M<g.length;M++)R=g[M].k.charAt(0),q.charAt(q.length-1)!==R&&(q+=R);return q!=="DGBEFHACIJK"}}),O=x||!w||!A||!E,P=function(q){return function(I,R){return R===void 0?-1:I===void 0?1:q!==void 0?+q(I,R)||0:o(I)>o(R)?1:-1}};return e({target:"Array",proto:!0,forced:O},{sort:function(I){I!==void 0&&t(I);var R=n(this);if(E)return I===void 0?_(R):_(R,I);var D=[],M=i(R),N,k;for(k=0;k<M;k++)k in R&&T(D,R[k]);for(c(D,P(I)),N=i(D),k=0;k<N;)R[k]=D[k++];for(;k<M;)a(R,k++);return R}}),Jg}var gl,ib;function Tx(){if(ib)return gl;ib=1,Ix();var e=Ue();return gl=e("Array","sort"),gl}var bl,ab;function xx(){if(ab)return bl;ab=1;var e=Ie(),r=Tx(),t=Array.prototype;return bl=function(n){var i=n.sort;return n===t||e(t,n)&&i===t.sort?r:i},bl}var _l,ob;function Rx(){if(ob)return _l;ob=1;var e=xx();return _l=e,_l}var Sl,sb;function Ox(){return sb||(sb=1,Sl=Rx()),Sl}var qx=Ox(),df=W(qx),wl,ub;function Px(){if(ub)return wl;ub=1,Yr();var e=Ue();return wl=e("Array","values"),wl}var El,cb;function Ax(){if(cb)return El;cb=1;var e=Px();return El=e,El}var Il,lb;function Dx(){if(lb)return Il;lb=1,Hr();var e=Wr(),r=Te(),t=Ie(),n=Ax(),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};return Il=function(o){var u=o.values;return o===i||t(i,o)&&u===i.values||r(a,e(o))?n:u},Il}var Tl,fb;function Cx(){return fb||(fb=1,Tl=Dx()),Tl}var Mx=Cx(),db=W(Mx),xl,vb;function $x(){return vb||(vb=1,xl=rS()),xl}var Lx=$x(),Wt=W(Lx),Rl,pb;function Nx(){if(pb)return Rl;pb=1,Yr();var e=Ue();return Rl=e("Array","entries"),Rl}var Ol,hb;function jx(){if(hb)return Ol;hb=1;var e=Nx();return Ol=e,Ol}var ql,mb;function Fx(){if(mb)return ql;mb=1,Hr();var e=Wr(),r=Te(),t=Ie(),n=jx(),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};return ql=function(o){var u=o.entries;return o===i||t(i,o)&&u===i.entries||r(a,e(o))?n:u},ql}var Pl,yb;function kx(){return yb||(yb=1,Pl=Fx()),Pl}var Bx=kx(),Ux=W(Bx);const Re=[];for(let e=0;e<256;++e)Re.push((e+256).toString(16).slice(1));function zx(e,r=0){return(Re[e[r+0]]+Re[e[r+1]]+Re[e[r+2]]+Re[e[r+3]]+"-"+Re[e[r+4]]+Re[e[r+5]]+"-"+Re[e[r+6]]+Re[e[r+7]]+"-"+Re[e[r+8]]+Re[e[r+9]]+"-"+Re[e[r+10]]+Re[e[r+11]]+Re[e[r+12]]+Re[e[r+13]]+Re[e[r+14]]+Re[e[r+15]]).toLowerCase()}let Al;const Gx=new Uint8Array(16);function Kx(){if(!Al){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Al=crypto.getRandomValues.bind(crypto)}return Al(Gx)}const Wx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var gb={randomUUID:Wx};function Vx(e,r,t){e=e||{};const n=e.random??e.rng?.()??Kx();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,zx(n)}function Yx(e,r,t){return gb.randomUUID&&!e?gb.randomUUID():Vx(e)}function bb(e){return typeof e=="string"||typeof e=="number"}class Nf{constructor(r){zr(this,"_queue",[]),zr(this,"_timeout",null),zr(this,"_extended",null),this.delay=null,this.max=1/0,this.setOptions(r)}setOptions(r){r&&typeof r.delay<"u"&&(this.delay=r.delay),r&&typeof r.max<"u"&&(this.max=r.max),this._flushIfNeeded()}static extend(r,t){const n=new Nf(t);if(r.flush!==void 0)throw new Error("Target object already has a property flush");r.flush=()=>{n.flush()};const i=[{name:"flush",original:void 0}];if(t&&t.replace)for(let a=0;a<t.replace.length;a++){const o=t.replace[a];i.push({name:o,original:r[o]}),n.replace(r,o)}return n._extended={object:r,methods:i},n}destroy(){if(this.flush(),this._extended){const r=this._extended.object,t=this._extended.methods;for(let n=0;n<t.length;n++){const i=t[n];i.original?r[i.name]=i.original:delete r[i.name]}this._extended=null}}replace(r,t){const n=this,i=r[t];if(!i)throw new Error("Method "+t+" undefined");r[t]=function(){for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];n.queue({args:o,fn:i,context:this})}}queue(r){typeof r=="function"?this._queue.push({fn:r}):this._queue.push(r),this._flushIfNeeded()}_flushIfNeeded(){this._queue.length>this.max&&this.flush(),this._timeout!=null&&(clearTimeout(this._timeout),this._timeout=null),this.queue.length>0&&typeof this.delay=="number"&&(this._timeout=AT(()=>{this.flush()},this.delay))}flush(){var r,t;Mn(r=oS(t=this._queue).call(t,0)).call(r,n=>{n.fn.apply(n.context||n.fn,n.args||[])})}}class wi{constructor(){zr(this,"_subscribers",{"*":[],add:[],remove:[],update:[]}),zr(this,"subscribe",wi.prototype.on),zr(this,"unsubscribe",wi.prototype.off)}_trigger(r,t,n){var i;if(r==="*")throw new Error("Cannot trigger event *");Mn(i=[...this._subscribers[r],...this._subscribers["*"]]).call(i,a=>{a(r,t,n??null)})}on(r,t){typeof t=="function"&&this._subscribers[r].push(t)}off(r,t){var n;this._subscribers[r]=zt(n=this._subscribers[r]).call(n,i=>i!==t)}}var _b={},Sb={},wb;function Hx(){if(wb)return Sb;wb=1;var e=kS(),r=BS();return e("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},r),Sb}var Eb;function Xx(){return Eb||(Eb=1,Hx()),_b}var Ib={},Dl,Tb;function Et(){if(Tb)return Dl;Tb=1;var e=Qt(),r=TypeError;return Dl=function(t){if(typeof t=="object"&&"size"in t&&"has"in t&&"add"in t&&"delete"in t&&"keys"in t)return t;throw new r(e(t)+" is not a set")},Dl}var Cl,xb;function It(){if(xb)return Cl;xb=1;var e=Ke(),r=US(),t=e("Set"),n=t.prototype;return Cl={Set:t,add:r("add",1),has:r("has",1),remove:r("delete",1),proto:n},Cl}var Ml,Rb;function Tt(){if(Rb)return Ml;Rb=1;var e=Be();return Ml=function(r,t,n){for(var i=n?r:r.iterator,a=r.next,o,u;!(o=e(a,i)).done;)if(u=t(o.value),u!==void 0)return u},Ml}var $l,Ob;function ri(){if(Ob)return $l;Ob=1;var e=Tt();return $l=function(r,t,n){return n?e(r.keys(),t,!0):r.forEach(t)},$l}var Ll,qb;function jf(){if(qb)return Ll;qb=1;var e=It(),r=ri(),t=e.Set,n=e.add;return Ll=function(i){var a=new t;return r(i,function(o){n(a,o)}),a},Ll}var Nl,Pb;function ti(){return Pb||(Pb=1,Nl=function(e){return e.size}),Nl}var jl,Ab;function Zx(){return Ab||(Ab=1,jl=function(e){return{iterator:e,next:e.next,done:!1}}),jl}var Fl,Db;function xt(){if(Db)return Fl;Db=1;var e=Lr(),r=Nr(),t=Be(),n=nn(),i=Zx(),a="Invalid size",o=RangeError,u=TypeError,c=Math.max,f=function(d,p){this.set=d,this.size=c(p,0),this.has=e(d.has),this.keys=e(d.keys)};return f.prototype={getIterator:function(){return i(r(t(this.keys,this.set)))},includes:function(d){return t(this.has,this.set,d)}},Fl=function(d){r(d);var p=+d.size;if(p!==p)throw new u(a);var h=n(p);if(h<0)throw new o(a);return new f(d,h)},Fl}var kl,Cb;function Jx(){if(Cb)return kl;Cb=1;var e=Et(),r=It(),t=jf(),n=ti(),i=xt(),a=ri(),o=Tt(),u=r.has,c=r.remove;return kl=function(d){var p=e(this),h=i(d),m=t(p);return n(p)<=h.size?a(p,function(g){h.includes(g)&&c(m,g)}):o(h.getIterator(),function(g){u(m,g)&&c(m,g)}),m},kl}var Bl,Mb;function Rt(){return Mb||(Mb=1,Bl=function(){return!1}),Bl}var $b;function Qx(){if($b)return Ib;$b=1;var e=B(),r=Jx(),t=re(),n=Rt(),i=!n("difference",function(o){return o.size===0}),a=i||t(function(){var o={size:1,has:function(){return!0},keys:function(){var c=0;return{next:function(){var f=c++>1;return u.has(1)&&u.clear(),{done:f,value:2}}}}},u=new Set([1,2,3,4]);return u.difference(o).size!==3});return e({target:"Set",proto:!0,real:!0,forced:a},{difference:r}),Ib}var Lb={},Ul,Nb;function eR(){if(Nb)return Ul;Nb=1;var e=Et(),r=It(),t=ti(),n=xt(),i=ri(),a=Tt(),o=r.Set,u=r.add,c=r.has;return Ul=function(d){var p=e(this),h=n(d),m=new o;return t(p)>h.size?a(h.getIterator(),function(g){c(p,g)&&u(m,g)}):i(p,function(g){h.includes(g)&&u(m,g)}),m},Ul}var jb;function rR(){if(jb)return Lb;jb=1;var e=B(),r=re(),t=eR(),n=Rt(),i=!n("intersection",function(a){return a.size===2&&a.has(1)&&a.has(2)})||r(function(){return String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))!=="3,2"});return e({target:"Set",proto:!0,real:!0,forced:i},{intersection:t}),Lb}var Fb={},zl,kb;function tR(){if(kb)return zl;kb=1;var e=Et(),r=It().has,t=ti(),n=xt(),i=ri(),a=Tt(),o=$f();return zl=function(c){var f=e(this),d=n(c);if(t(f)<=d.size)return i(f,function(h){if(d.includes(h))return!1},!0)!==!1;var p=d.getIterator();return a(p,function(h){if(r(f,h))return o(p,"normal",!1)})!==!1},zl}var Bb;function nR(){if(Bb)return Fb;Bb=1;var e=B(),r=tR(),t=Rt(),n=!t("isDisjointFrom",function(i){return!i});return e({target:"Set",proto:!0,real:!0,forced:n},{isDisjointFrom:r}),Fb}var Ub={},Gl,zb;function iR(){if(zb)return Gl;zb=1;var e=Et(),r=ti(),t=ri(),n=xt();return Gl=function(a){var o=e(this),u=n(a);return r(o)>u.size?!1:t(o,function(c){if(!u.includes(c))return!1},!0)!==!1},Gl}var Gb;function aR(){if(Gb)return Ub;Gb=1;var e=B(),r=iR(),t=Rt(),n=!t("isSubsetOf",function(i){return i});return e({target:"Set",proto:!0,real:!0,forced:n},{isSubsetOf:r}),Ub}var Kb={},Kl,Wb;function oR(){if(Wb)return Kl;Wb=1;var e=Et(),r=It().has,t=ti(),n=xt(),i=Tt(),a=$f();return Kl=function(u){var c=e(this),f=n(u);if(t(c)<f.size)return!1;var d=f.getIterator();return i(d,function(p){if(!r(c,p))return a(d,"normal",!1)})!==!1},Kl}var Vb;function sR(){if(Vb)return Kb;Vb=1;var e=B(),r=oR(),t=Rt(),n=!t("isSupersetOf",function(i){return!i});return e({target:"Set",proto:!0,real:!0,forced:n},{isSupersetOf:r}),Kb}var Yb={},Wl,Hb;function uR(){if(Hb)return Wl;Hb=1;var e=Et(),r=It(),t=jf(),n=xt(),i=Tt(),a=r.add,o=r.has,u=r.remove;return Wl=function(f){var d=e(this),p=n(f).getIterator(),h=t(d);return i(p,function(m){o(d,m)?u(h,m):a(h,m)}),h},Wl}var Vl,Xb;function GS(){return Xb||(Xb=1,Vl=function(e){try{var r=new Set,t={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return r.clear(),r.add(4),function(){return{done:!0}}}})}},n=r[e](t);return n.size===1&&n.values().next().value===4}catch{return!1}}),Vl}var Zb;function cR(){if(Zb)return Yb;Zb=1;var e=B(),r=uR(),t=GS(),n=Rt(),i=!n("symmetricDifference")||!t("symmetricDifference");return e({target:"Set",proto:!0,real:!0,forced:i},{symmetricDifference:r}),Yb}var Jb={},Yl,Qb;function lR(){if(Qb)return Yl;Qb=1;var e=Et(),r=It().add,t=jf(),n=xt(),i=Tt();return Yl=function(o){var u=e(this),c=n(o).getIterator(),f=t(u);return i(c,function(d){r(f,d)}),f},Yl}var e_;function fR(){if(e_)return Jb;e_=1;var e=B(),r=lR(),t=GS(),n=Rt(),i=!n("union")||!t("union");return e({target:"Set",proto:!0,real:!0,forced:i},{union:r}),Jb}var Hl,r_;function dR(){if(r_)return Hl;r_=1,Yr(),Xx(),Qx(),rR(),nR(),aR(),sR(),cR(),fR(),$i();var e=Se();return Hl=e.Set,Hl}var Xl,t_;function vR(){if(t_)return Xl;t_=1;var e=dR();return Hr(),Xl=e,Xl}var Zl,n_;function pR(){return n_||(n_=1,Zl=vR()),Zl}var hR=pR(),Jl=W(hR),Ql,i_;function mR(){if(i_)return Ql;i_=1,Yr(),$i();var e=jS();return Ql=e,Ql}var ef,a_;function yR(){if(a_)return ef;a_=1;var e=mR();return Hr(),ef=e,ef}var rf,o_;function gR(){if(o_)return rf;o_=1;var e=yR();return rf=e,rf}var tf,s_;function bR(){if(s_)return tf;s_=1;var e=gR();return tf=e,tf}var nf,u_;function _R(){return u_||(u_=1,nf=bR()),nf}var af,c_;function SR(){return c_||(c_=1,af=_R()),af}var wR=SR(),of=W(wR);class lt{constructor(r){this._pairs=r}*[Wt](){for(const[r,t]of this._pairs)yield[r,t]}*entries(){for(const[r,t]of this._pairs)yield[r,t]}*keys(){for(const[r]of this._pairs)yield r}*values(){for(const[,r]of this._pairs)yield r}toIdArray(){var r;return qr(r=[...this._pairs]).call(r,t=>t[0])}toItemArray(){var r;return qr(r=[...this._pairs]).call(r,t=>t[1])}toEntryArray(){return[...this._pairs]}toObjectMap(){const r=pT(null);for(const[t,n]of this._pairs)r[t]=n;return r}toMap(){return new zS(this._pairs)}toIdSet(){return new Jl(this.toIdArray())}toItemSet(){return new Jl(this.toItemArray())}cache(){return new lt([...this._pairs])}distinct(r){const t=new Jl;for(const[n,i]of this._pairs)t.add(r(i,n));return t}filter(r){const t=this._pairs;return new lt({*[Wt](){for(const[n,i]of t)r(i,n)&&(yield[n,i])}})}forEach(r){for(const[t,n]of this._pairs)r(n,t)}map(r){const t=this._pairs;return new lt({*[Wt](){for(const[n,i]of t)yield[n,r(i,n)]}})}max(r){const t=of(this._pairs);let n=t.next();if(n.done)return null;let i=n.value[1],a=r(n.value[1],n.value[0]);for(;!(n=t.next()).done;){const[o,u]=n.value,c=r(u,o);c>a&&(a=c,i=u)}return i}min(r){const t=of(this._pairs);let n=t.next();if(n.done)return null;let i=n.value[1],a=r(n.value[1],n.value[0]);for(;!(n=t.next()).done;){const[o,u]=n.value,c=r(u,o);c<a&&(a=c,i=u)}return i}reduce(r,t){for(const[n,i]of this._pairs)t=r(t,i,n);return t}sort(r){return new lt({[Wt]:()=>{var t;return of(df(t=[...this._pairs]).call(t,(n,i)=>{let[a,o]=n,[u,c]=i;return r(o,c,a,u)}))}})}}function l_(e,r){var t=Rf(e);if(Qy){var n=Qy(e);r&&(n=zt(n).call(n,function(i){return $S(e,i).enumerable})),t.push.apply(t,n)}return t}function f_(e){for(var r=1;r<arguments.length;r++){var t,n,i=arguments[r]!=null?arguments[r]:{};r%2?Mn(t=l_(Object(i),!0)).call(t,function(a){zr(e,a,i[a])}):lg?G0(e,lg(i)):Mn(n=l_(Object(i))).call(n,function(a){V0(e,a,$S(i,a))})}return e}function ER(e,r){return e[r]==null&&(e[r]=Yx()),e}class Ei extends wi{get idProp(){return this._idProp}constructor(r,t){super(),zr(this,"_queue",null),r&&!dr(r)&&(t=r,r=[]),this._options=t||{},this._data=new zS,this.length=0,this._idProp=this._options.fieldId||"id",r&&r.length&&this.add(r),this.setOptions(t)}setOptions(r){r&&r.queue!==void 0&&(r.queue===!1?this._queue&&(this._queue.destroy(),this._queue=null):(this._queue||(this._queue=Nf.extend(this,{replace:["add","update","remove"]})),r.queue&&typeof r.queue=="object"&&this._queue.setOptions(r.queue)))}add(r,t){const n=[];let i;if(dr(r)){const a=qr(r).call(r,o=>o[this._idProp]);if(px(a).call(a,o=>this._data.has(o)))throw new Error("A duplicate id was found in the parameter array.");for(let o=0,u=r.length;o<u;o++)i=this._addItem(r[o]),n.push(i)}else if(r&&typeof r=="object")i=this._addItem(r),n.push(i);else throw new Error("Unknown dataType");return n.length&&this._trigger("add",{items:n},t),n}update(r,t){const n=[],i=[],a=[],o=[],u=this._idProp,c=f=>{const d=f[u];if(d!=null&&this._data.has(d)){const p=f,h=tT({},this._data.get(d)),m=this._updateItem(p);i.push(m),o.push(p),a.push(h)}else{const p=this._addItem(f);n.push(p)}};if(dr(r))for(let f=0,d=r.length;f<d;f++)r[f]&&typeof r[f]=="object"?c(r[f]):console.warn("Ignoring input item, which is not an object at index "+f);else if(r&&typeof r=="object")c(r);else throw new Error("Unknown dataType");if(n.length&&this._trigger("add",{items:n},t),i.length){const f={items:i,oldData:a,data:o};this._trigger("update",f,t)}return uT(n).call(n,i)}updateOnly(r,t){var n;dr(r)||(r=[r]);const i=qr(n=qr(r).call(r,a=>{const o=this._data.get(a[this._idProp]);if(o==null)throw new Error("Updating non-existent items is not allowed.");return{oldData:o,update:a}})).call(n,a=>{let{oldData:o,update:u}=a;const c=o[this._idProp],f=S0(o,u);return this._data.set(c,f),{id:c,oldData:o,updatedData:f}});if(i.length){const a={items:qr(i).call(i,o=>o.id),oldData:qr(i).call(i,o=>o.oldData),data:qr(i).call(i,o=>o.updatedData)};return this._trigger("update",a,t),a.items}else return[]}get(r,t){let n,i,a;bb(r)?(n=r,a=t):dr(r)?(i=r,a=t):a=r;const o=a&&a.returnType==="Object"?"Object":"Array",u=a&&zt(a),c=[];let f,d,p;if(n!=null)f=this._data.get(n),f&&u&&!u(f)&&(f=void 0);else if(i!=null)for(let m=0,g=i.length;m<g;m++)f=this._data.get(i[m]),f!=null&&(!u||u(f))&&c.push(f);else{var h;d=[...Ut(h=this._data).call(h)];for(let m=0,g=d.length;m<g;m++)p=d[m],f=this._data.get(p),f!=null&&(!u||u(f))&&c.push(f)}if(a&&a.order&&n==null&&this._sort(c,a.order),a&&a.fields){const m=a.fields;if(n!=null&&f!=null)f=this._filterFields(f,m);else for(let g=0,_=c.length;g<_;g++)c[g]=this._filterFields(c[g],m)}if(o=="Object"){const m={};for(let g=0,_=c.length;g<_;g++){const T=c[g],x=T[this._idProp];m[x]=T}return m}else return n!=null?f??null:c}getIds(r){const t=this._data,n=r&&zt(r),i=r&&r.order,a=[...Ut(t).call(t)],o=[];if(n)if(i){const u=[];for(let c=0,f=a.length;c<f;c++){const d=a[c],p=this._data.get(d);p!=null&&n(p)&&u.push(p)}this._sort(u,i);for(let c=0,f=u.length;c<f;c++)o.push(u[c][this._idProp])}else for(let u=0,c=a.length;u<c;u++){const f=a[u],d=this._data.get(f);d!=null&&n(d)&&o.push(d[this._idProp])}else if(i){const u=[];for(let c=0,f=a.length;c<f;c++){const d=a[c];u.push(t.get(d))}this._sort(u,i);for(let c=0,f=u.length;c<f;c++)o.push(u[c][this._idProp])}else for(let u=0,c=a.length;u<c;u++){const f=a[u],d=t.get(f);d!=null&&o.push(d[this._idProp])}return o}getDataSet(){return this}forEach(r,t){const n=t&&zt(t),i=this._data,a=[...Ut(i).call(i)];if(t&&t.order){const o=this.get(t);for(let u=0,c=o.length;u<c;u++){const f=o[u],d=f[this._idProp];r(f,d)}}else for(let o=0,u=a.length;o<u;o++){const c=a[o],f=this._data.get(c);f!=null&&(!n||n(f))&&r(f,c)}}map(r,t){const n=t&&zt(t),i=[],a=this._data,o=[...Ut(a).call(a)];for(let u=0,c=o.length;u<c;u++){const f=o[u],d=this._data.get(f);d!=null&&(!n||n(d))&&i.push(r(d,f))}return t&&t.order&&this._sort(i,t.order),i}_filterFields(r,t){var n;return r&&GE(n=dr(t)?t:Rf(t)).call(n,(i,a)=>(i[a]=r[a],i),{})}_sort(r,t){if(typeof t=="string"){const n=t;df(r).call(r,(i,a)=>{const o=i[n],u=a[n];return o>u?1:o<u?-1:0})}else if(typeof t=="function")df(r).call(r,t);else throw new TypeError("Order must be a function or a string")}remove(r,t){const n=[],i=[],a=dr(r)?r:[r];for(let o=0,u=a.length;o<u;o++){const c=this._remove(a[o]);if(c){const f=c[this._idProp];f!=null&&(n.push(f),i.push(c))}}return n.length&&this._trigger("remove",{items:n,oldData:i},t),n}_remove(r){let t;if(bb(r)?t=r:r&&typeof r=="object"&&(t=r[this._idProp]),t!=null&&this._data.has(t)){const n=this._data.get(t)||null;return this._data.delete(t),--this.length,n}return null}clear(r){var t;const n=[...Ut(t=this._data).call(t)],i=[];for(let a=0,o=n.length;a<o;a++)i.push(this._data.get(n[a]));return this._data.clear(),this.length=0,this._trigger("remove",{items:n,oldData:i},r),n}max(r){let t=null,n=null;for(const a of db(i=this._data).call(i)){var i;const o=a[r];typeof o=="number"&&(n==null||o>n)&&(t=a,n=o)}return t||null}min(r){let t=null,n=null;for(const a of db(i=this._data).call(i)){var i;const o=a[r];typeof o=="number"&&(n==null||o<n)&&(t=a,n=o)}return t||null}distinct(r){const t=this._data,n=[...Ut(t).call(t)],i=[];let a=0;for(let o=0,u=n.length;o<u;o++){const c=n[o],d=t.get(c)[r];let p=!1;for(let h=0;h<a;h++)if(i[h]==d){p=!0;break}!p&&d!==void 0&&(i[a]=d,a++)}return i}_addItem(r){const t=ER(r,this._idProp),n=t[this._idProp];if(this._data.has(n))throw new Error("Cannot add item: item with id "+n+" already exists");return this._data.set(n,t),++this.length,n}_updateItem(r){const t=r[this._idProp];if(t==null)throw new Error("Cannot update item: item has no id (item: "+ET(r)+")");const n=this._data.get(t);if(!n)throw new Error("Cannot update item: no item with id "+t+" found");return this._data.set(t,f_(f_({},n),r)),t}stream(r){if(r){const n=this._data;return new lt({*[Wt](){for(const i of r){const a=n.get(i);a!=null&&(yield[i,a])}}})}else{var t;return new lt({[Wt]:tS(t=Ux(this._data)).call(t,this._data)})}}}const yt="YYYY-MM-DD",IR={stack:!1,selectable:!0,zoomable:!0,moveable:!0,margin:{item:40,axis:20},showCurrentTime:!0,timeAxis:{scale:"day",step:5},showTooltips:!0,orientation:{axis:"top"}},TR={minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"DD",week:"w",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMM YYYY",day:"MMM YYYY",week:"MMM YYYY",month:"YYYY",year:""}};var On={exports:{}};On.exports;var d_;function xR(){return d_||(d_=1,(function(e,r){var t=200,n="Expected a function",i="__lodash_hash_undefined__",a=1,o=2,u=1/0,c=9007199254740991,f=17976931348623157e292,d=NaN,p="[object Arguments]",h="[object Array]",m="[object Boolean]",g="[object Date]",_="[object Error]",T="[object Function]",x="[object GeneratorFunction]",w="[object Map]",A="[object Number]",E="[object Object]",O="[object Promise]",P="[object RegExp]",q="[object Set]",I="[object String]",R="[object Symbol]",D="[object WeakMap]",M="[object ArrayBuffer]",N="[object DataView]",k="[object Float32Array]",H="[object Float64Array]",oe="[object Int8Array]",Qe="[object Int16Array]",he="[object Int32Array]",Le="[object Uint8Array]",Ne="[object Uint8ClampedArray]",er="[object Uint16Array]",ne="[object Uint32Array]",je=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fe=/^\w*$/,Ae=/^\./,gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qe=/[\\^$.*+?()[\]{}|]/g,rr=/^\s+|\s+$/g,br=/\\(\\)?/g,cn=/^[-+]0x[0-9a-f]+$/i,ln=/^0b[01]+$/i,Xr=/^\[object .+?Constructor\]$/,Ot=/^0o[0-7]+$/i,tr=/^(?:0|[1-9]\d*)$/,F={};F[k]=F[H]=F[oe]=F[Qe]=F[he]=F[Le]=F[Ne]=F[er]=F[ne]=!0,F[p]=F[h]=F[M]=F[m]=F[N]=F[g]=F[_]=F[T]=F[w]=F[A]=F[E]=F[P]=F[q]=F[I]=F[D]=!1;var fn=parseInt,jr=typeof Br=="object"&&Br&&Br.Object===Object&&Br,ze=typeof self=="object"&&self&&self.Object===Object&&self,se=jr||ze||Function("return this")(),Zr=r&&!r.nodeType&&r,_r=Zr&&!0&&e&&!e.nodeType&&e,qt=_r&&_r.exports===Zr,Sr=qt&&jr.process,wr=(function(){try{return Sr&&Sr.binding("util")}catch{}})(),ur=wr&&wr.isTypedArray;function Jr(l,y){for(var s=-1,v=l?l.length:0;++s<v;)if(y(l[s],s,l))return!0;return!1}function dn(l,y,s,v){for(var b=l.length,S=s+-1;++S<b;)if(y(l[S],S,l))return S;return-1}function Qr(l){return function(y){return y?.[l]}}function Pt(l,y){for(var s=-1,v=Array(l);++s<l;)v[s]=y(s);return v}function At(l){return function(y){return l(y)}}function Dt(l,y){return l?.[y]}function Y(l){var y=!1;if(l!=null&&typeof l.toString!="function")try{y=!!(l+"")}catch{}return y}function U(l){var y=-1,s=Array(l.size);return l.forEach(function(v,b){s[++y]=[b,v]}),s}function z(l,y){return function(s){return l(y(s))}}function G(l){var y=-1,s=Array(l.size);return l.forEach(function(v){s[++y]=v}),s}var J=Array.prototype,we=Function.prototype,We=Object.prototype,cr=se["__core-js_shared__"],vn=(function(){var l=/[^.]+$/.exec(cr&&cr.keys&&cr.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""})(),pn=we.toString,me=We.hasOwnProperty,Ge=We.toString,Fi=RegExp("^"+pn.call(me).replace(qe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hn=se.Symbol,mn=se.Uint8Array,ki=We.propertyIsEnumerable,Bi=J.splice,Ui=z(Object.keys,Object),zi=Math.max,et=Fr(se,"DataView"),nr=Fr(se,"Map"),rt=Fr(se,"Promise"),tt=Fr(se,"Set"),nt=Fr(se,"WeakMap"),ir=Fr(Object,"create"),Gi=Ve(et),Ki=Ve(nr),Wi=Ve(rt),Vi=Ve(tt),Yi=Ve(nt),Er=hn?hn.prototype:void 0,it=Er?Er.valueOf:void 0,yn=Er?Er.toString:void 0;function De(l){var y=-1,s=l?l.length:0;for(this.clear();++y<s;){var v=l[y];this.set(v[0],v[1])}}function Hi(){this.__data__=ir?ir(null):{}}function Xi(l){return this.has(l)&&delete this.__data__[l]}function Zi(l){var y=this.__data__;if(ir){var s=y[l];return s===i?void 0:s}return me.call(y,l)?y[l]:void 0}function Ji(l){var y=this.__data__;return ir?y[l]!==void 0:me.call(y,l)}function Qi(l,y){var s=this.__data__;return s[l]=ir&&y===void 0?i:y,this}De.prototype.clear=Hi,De.prototype.delete=Xi,De.prototype.get=Zi,De.prototype.has=Ji,De.prototype.set=Qi;function ye(l){var y=-1,s=l?l.length:0;for(this.clear();++y<s;){var v=l[y];this.set(v[0],v[1])}}function ea(){this.__data__=[]}function ra(l){var y=this.__data__,s=Tr(y,l);if(s<0)return!1;var v=y.length-1;return s==v?y.pop():Bi.call(y,s,1),!0}function ta(l){var y=this.__data__,s=Tr(y,l);return s<0?void 0:y[s][1]}function na(l){return Tr(this.__data__,l)>-1}function ia(l,y){var s=this.__data__,v=Tr(s,l);return v<0?s.push([l,y]):s[v][1]=y,this}ye.prototype.clear=ea,ye.prototype.delete=ra,ye.prototype.get=ta,ye.prototype.has=na,ye.prototype.set=ia;function ge(l){var y=-1,s=l?l.length:0;for(this.clear();++y<s;){var v=l[y];this.set(v[0],v[1])}}function aa(){this.__data__={hash:new De,map:new(nr||ye),string:new De}}function oa(l){return Ct(this,l).delete(l)}function sa(l){return Ct(this,l).get(l)}function ua(l){return Ct(this,l).has(l)}function ca(l,y){return Ct(this,l).set(l,y),this}ge.prototype.clear=aa,ge.prototype.delete=oa,ge.prototype.get=sa,ge.prototype.has=ua,ge.prototype.set=ca;function Ir(l){var y=-1,s=l?l.length:0;for(this.__data__=new ge;++y<s;)this.add(l[y])}function la(l){return this.__data__.set(l,i),this}function fa(l){return this.__data__.has(l)}Ir.prototype.add=Ir.prototype.push=la,Ir.prototype.has=fa;function be(l){this.__data__=new ye(l)}function da(){this.__data__=new ye}function va(l){return this.__data__.delete(l)}function pa(l){return this.__data__.get(l)}function ha(l){return this.__data__.has(l)}function ma(l,y){var s=this.__data__;if(s instanceof ye){var v=s.__data__;if(!nr||v.length<t-1)return v.push([l,y]),this;s=this.__data__=new ge(v)}return s.set(l,y),this}be.prototype.clear=da,be.prototype.delete=va,be.prototype.get=pa,be.prototype.has=ha,be.prototype.set=ma;function ya(l,y){var s=fr(l)||Nt(l)?Pt(l.length,String):[],v=s.length,b=!!v;for(var S in l)me.call(l,S)&&!(b&&(S=="length"||oi(S,v)))&&s.push(S);return s}function Tr(l,y){for(var s=l.length;s--;)if(ci(l[s][0],y))return s;return-1}function gn(l,y){y=ot(y,l)?[y]:bn(y);for(var s=0,v=y.length;l!=null&&s<v;)l=l[Lt(y[s++])];return s&&s==v?l:void 0}function ga(l){return Ge.call(l)}function ba(l,y){return l!=null&&y in Object(l)}function at(l,y,s,v,b){return l===y?!0:l==null||y==null||!Or(l)&&!kr(y)?l!==l&&y!==y:_a(l,y,at,s,v,b)}function _a(l,y,s,v,b,S){var C=fr(l),$=fr(y),j=h,K=h;C||(j=Ce(l),j=j==p?E:j),$||(K=Ce(y),K=K==p?E:K);var V=j==E&&!Y(l),X=K==E&&!Y(y),Z=j==K;if(Z&&!V)return S||(S=new be),C||Ft(l)?ii(l,y,s,v,b,S):ai(l,y,j,s,v,b,S);if(!(b&o)){var ie=V&&me.call(l,"__wrapped__"),te=X&&me.call(y,"__wrapped__");if(ie||te){var le=ie?l.value():l,ce=te?y.value():y;return S||(S=new be),s(le,ce,v,b,S)}}return Z?(S||(S=new be),qa(l,y,s,v,b,S)):!1}function Sa(l,y,s,v){var b=s.length,S=b;if(l==null)return!S;for(l=Object(l);b--;){var C=s[b];if(C[2]?C[1]!==l[C[0]]:!(C[0]in l))return!1}for(;++b<S;){C=s[b];var $=C[0],j=l[$],K=C[1];if(C[2]){if(j===void 0&&!($ in l))return!1}else{var V=new be,X;if(!(X===void 0?at(K,j,v,a|o,V):X))return!1}}return!0}function wa(l){if(!Or(l)||Pa(l))return!1;var y=jt(l)||Y(l)?Fi:Xr;return y.test(Ve(l))}function Ea(l){return kr(l)&&En(l.length)&&!!F[Ge.call(l)]}function ni(l){return typeof l=="function"?l:l==null?Na:typeof l=="object"?fr(l)?xa(l[0],l[1]):Ta(l):Bt(l)}function Ia(l){if(!Aa(l))return Ui(l);var y=[];for(var s in Object(l))me.call(l,s)&&s!="constructor"&&y.push(s);return y}function Ta(l){var y=Mt(l);return y.length==1&&y[0][2]?_n(y[0][0],y[0][1]):function(s){return s===l||Sa(s,l,y)}}function xa(l,y){return ot(l)&&si(y)?_n(Lt(l),y):function(s){var v=$a(s,l);return v===void 0&&v===y?La(s,l):at(y,v,void 0,a|o)}}function Ra(l){return function(y){return gn(y,l)}}function Oa(l){if(typeof l=="string")return l;if(ar(l))return yn?yn.call(l):"";var y=l+"";return y=="0"&&1/l==-u?"-0":y}function bn(l){return fr(l)?l:ui(l)}function ii(l,y,s,v,b,S){var C=b&o,$=l.length,j=y.length;if($!=j&&!(C&&j>$))return!1;var K=S.get(l);if(K&&S.get(y))return K==y;var V=-1,X=!0,Z=b&a?new Ir:void 0;for(S.set(l,y),S.set(y,l);++V<$;){var ie=l[V],te=y[V];if(v)var le=C?v(te,ie,V,y,l,S):v(ie,te,V,l,y,S);if(le!==void 0){if(le)continue;X=!1;break}if(Z){if(!Jr(y,function(ce,Pe){if(!Z.has(Pe)&&(ie===ce||s(ie,ce,v,b,S)))return Z.add(Pe)})){X=!1;break}}else if(!(ie===te||s(ie,te,v,b,S))){X=!1;break}}return S.delete(l),S.delete(y),X}function ai(l,y,s,v,b,S,C){switch(s){case N:if(l.byteLength!=y.byteLength||l.byteOffset!=y.byteOffset)return!1;l=l.buffer,y=y.buffer;case M:return!(l.byteLength!=y.byteLength||!v(new mn(l),new mn(y)));case m:case g:case A:return ci(+l,+y);case _:return l.name==y.name&&l.message==y.message;case P:case I:return l==y+"";case w:var $=U;case q:var j=S&o;if($||($=G),l.size!=y.size&&!j)return!1;var K=C.get(l);if(K)return K==y;S|=a,C.set(l,y);var V=ii($(l),$(y),v,b,S,C);return C.delete(l),V;case R:if(it)return it.call(l)==it.call(y)}return!1}function qa(l,y,s,v,b,S){var C=b&o,$=In(l),j=$.length,K=In(y),V=K.length;if(j!=V&&!C)return!1;for(var X=j;X--;){var Z=$[X];if(!(C?Z in y:me.call(y,Z)))return!1}var ie=S.get(l);if(ie&&S.get(y))return ie==y;var te=!0;S.set(l,y),S.set(y,l);for(var le=C;++X<j;){Z=$[X];var ce=l[Z],Pe=y[Z];if(v)var Ye=C?v(Pe,ce,Z,y,l,S):v(ce,Pe,Z,l,y,S);if(!(Ye===void 0?ce===Pe||s(ce,Pe,v,b,S):Ye)){te=!1;break}le||(le=Z=="constructor")}if(te&&!le){var He=l.constructor,st=y.constructor;He!=st&&"constructor"in l&&"constructor"in y&&!(typeof He=="function"&&He instanceof He&&typeof st=="function"&&st instanceof st)&&(te=!1)}return S.delete(l),S.delete(y),te}function Ct(l,y){var s=l.__data__;return $t(y)?s[typeof y=="string"?"string":"hash"]:s.map}function Mt(l){for(var y=In(l),s=y.length;s--;){var v=y[s],b=l[v];y[s]=[v,b,si(b)]}return y}function Fr(l,y){var s=Dt(l,y);return wa(s)?s:void 0}var Ce=ga;(et&&Ce(new et(new ArrayBuffer(1)))!=N||nr&&Ce(new nr)!=w||rt&&Ce(rt.resolve())!=O||tt&&Ce(new tt)!=q||nt&&Ce(new nt)!=D)&&(Ce=function(l){var y=Ge.call(l),s=y==E?l.constructor:void 0,v=s?Ve(s):void 0;if(v)switch(v){case Gi:return N;case Ki:return w;case Wi:return O;case Vi:return q;case Yi:return D}return y});function lr(l,y,s){y=ot(y,l)?[y]:bn(y);for(var v,b=-1,C=y.length;++b<C;){var S=Lt(y[b]);if(!(v=l!=null&&s(l,S)))break;l=l[S]}if(v)return v;var C=l?l.length:0;return!!C&&En(C)&&oi(S,C)&&(fr(l)||Nt(l))}function oi(l,y){return y=y??c,!!y&&(typeof l=="number"||tr.test(l))&&l>-1&&l%1==0&&l<y}function ot(l,y){if(fr(l))return!1;var s=typeof l;return s=="number"||s=="symbol"||s=="boolean"||l==null||ar(l)?!0:Fe.test(l)||!je.test(l)||y!=null&&l in Object(y)}function $t(l){var y=typeof l;return y=="string"||y=="number"||y=="symbol"||y=="boolean"?l!=="__proto__":l===null}function Pa(l){return!!vn&&vn in l}function Aa(l){var y=l&&l.constructor,s=typeof y=="function"&&y.prototype||We;return l===s}function si(l){return l===l&&!Or(l)}function _n(l,y){return function(s){return s==null?!1:s[l]===y&&(y!==void 0||l in Object(s))}}var ui=Sn(function(l){l=Ma(l);var y=[];return Ae.test(l)&&y.push(""),l.replace(gr,function(s,v,b,S){y.push(b?S.replace(br,"$1"):v||s)}),y});function Lt(l){if(typeof l=="string"||ar(l))return l;var y=l+"";return y=="0"&&1/l==-u?"-0":y}function Ve(l){if(l!=null){try{return pn.call(l)}catch{}try{return l+""}catch{}}return""}function xr(l,y,s){var v=l?l.length:0;if(!v)return-1;var b=s==null?0:Da(s);return b<0&&(b=zi(v+b,0)),dn(l,ni(y),b)}function Sn(l,y){if(typeof l!="function"||y&&typeof y!="function")throw new TypeError(n);var s=function(){var v=arguments,b=y?y.apply(this,v):v[0],S=s.cache;if(S.has(b))return S.get(b);var C=l.apply(this,v);return s.cache=S.set(b,C),C};return s.cache=new(Sn.Cache||ge),s}Sn.Cache=ge;function ci(l,y){return l===y||l!==l&&y!==y}function Nt(l){return Rr(l)&&me.call(l,"callee")&&(!ki.call(l,"callee")||Ge.call(l)==p)}var fr=Array.isArray;function wn(l){return l!=null&&En(l.length)&&!jt(l)}function Rr(l){return kr(l)&&wn(l)}function jt(l){var y=Or(l)?Ge.call(l):"";return y==T||y==x}function En(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=c}function Or(l){var y=typeof l;return!!l&&(y=="object"||y=="function")}function kr(l){return!!l&&typeof l=="object"}function ar(l){return typeof l=="symbol"||kr(l)&&Ge.call(l)==R}var Ft=ur?At(ur):Ea;function kt(l){if(!l)return l===0?l:0;if(l=Ca(l),l===u||l===-u){var y=l<0?-1:1;return y*f}return l===l?l:0}function Da(l){var y=kt(l),s=y%1;return y===y?s?y-s:y:0}function Ca(l){if(typeof l=="number")return l;if(ar(l))return d;if(Or(l)){var y=typeof l.valueOf=="function"?l.valueOf():l;l=Or(y)?y+"":y}if(typeof l!="string")return l===0?l:+l;l=l.replace(rr,"");var s=ln.test(l);return s||Ot.test(l)?fn(l.slice(2),s?2:8):cn.test(l)?d:+l}function Ma(l){return l==null?"":Oa(l)}function $a(l,y,s){var v=l==null?void 0:gn(l,y);return v===void 0?s:v}function La(l,y){return l!=null&&lr(l,y,ba)}function In(l){return wn(l)?ya(l):Ia(l)}function Na(l){return l}function Bt(l){return ot(l)?Qr(Lt(l)):Ra(l)}e.exports=xr})(On,On.exports)),On.exports}var RR=xR();const OR=x_(RR);L.extend(hr);L.extend(mr);class qR extends gt{static get properties(){return{format:{type:String,attribute:"format"},navigation:{type:Boolean,attribute:"navigation"},unstyled:{type:Boolean,attribute:"unstyled"}}}#e=!1;#r=null;constructor(){super(),this.format=yt,this.navigation=!1,this.unstyled=!1}getEOxTimeControl(){return this.closest("eox-timecontrol")}updateStep(r=1){const t=this.getEOxTimeControl(),n=Object.keys(Pr(t.items.get(),"date")).sort((c,f)=>new Date(c).getTime()-new Date(f).getTime());let a=OR(n,c=>c===L(t.selectedDateRange[0]).format(yt))+r;a>n.length-1&&(a=0),a<0&&(a=n.length-1);const o=n[a],u=[L(o).startOf("day").utc().format(),L(o).endOf("day").utc().format()];t.dateChange(u,t)}setDateRange(r){this.#r=r,this.requestUpdate()}firstUpdated(){const t=this.getEOxTimeControl().querySelector("eox-timecontrol-picker");t&&t.popup&&(this.#e=!0,this.requestUpdate())}#t(r,t){const n=L(r[0]),i=L(r[1]);return i.diff(n,"day")===0?n.format(t):n.format(t)+" - "+i.format(t)}render(){return ee`
      <style>
        ${vt}
        ${!this.unstyled&&Vt}
      </style>
      ${Ur(this.navigation&&this.#r,()=>ee`
          <button
            part="previous"
            class="icon previous small circle transparent no-margin"
            @click=${()=>this.updateStep(-1)}
          >
            ${this.unstyled?"<":ee`
                  <i class="primary-text small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>chevron-left-circle</title>
                      <path
                        d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"
                      />
                    </svg>
                  </i>
                `}
          </button>
        `)}
      <span id="date-container">
        ${Ur(this.#r,()=>ee`
            <input
              readonly
              class=${this.#e?"input-field":""}
              value=${this.#t(this.#r,this.format)}
              type="text"
              style="width: ${this.#t(this.#r,this.format).length+1}ch"
            />
          `)}
      </span>
      ${Ur(this.navigation&&this.#r,()=>ee`
          <button
            part="next"
            class="icon next small circle transparent no-margin"
            @click=${()=>this.updateStep(1)}
          >
            ${this.unstyled?">":ee`
                  <i class="primary-text small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>chevron-right-circle</title>
                      <path
                        d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z"
                      />
                    </svg>
                  </i>
                `}
          </button>
        `)}
    `}}customElements.define("eox-timecontrol-date",qR);function KS(e,r,t){const n=e.visTimeline,i=n.dom.leftContainer.querySelectorAll(".vis-label")[t],a=n.dom.centerContainer.querySelectorAll(".vis-foreground .vis-group")[t];r?(i.classList.remove("vis-label-hide"),a.classList.remove("vis-group-hide")):(i.classList.add("vis-label-hide"),a.classList.add("vis-group-hide"))}function PR(e,r,t,n){r.clear(),t.clear();for(let i=0;i<e.length;i++){const a=e[i],o=u=>{if(n){const c=u.target.getVisible();KS(n,c,i)}};a.layerInstance?.un("change:visible",o),a.layerInstance?.on("change:visible",o),r.add({id:a.layer,content:a.name});for(const u of a.values){const c={data:a.layer+u.date},f=T1(c);t.add({...u,id:f,group:a.layer,className:`milestone item-${f}`,start:u.date,originalDate:u.originalDate,type:"point",property:a.property})}}}L.extend(hr);L.extend(mr);function AR(e,r,t){t.selectedDateRange=e,$R(t,["eox-timecontrol-date","eox-timecontrol-picker","eox-timecontrol-slider","eox-timecontrol-timeline","eox-timecontrol-timelapse"],e,t.items.get());const n=L(e[0]);if(Number.isNaN(n.unix()))return;const i=r?r.getFlatLayersArray(r.map.getLayers().getArray()):[];let a=[];const o=[L(e[0]),L(e[1])],[u,c]=o[0].isBefore(o[1])?[o[0],o[1]]:[o[1],o[0]];a=t.items.get().filter(p=>{const h=p.utc;if(!h)return!1;const m=L(h);return(m.isSame(u,"day")||m.isAfter(u,"day"))&&(m.isSame(c,"day")||m.isBefore(c,"day"))});let f={};a.forEach(p=>{if(p.group&&r){const h=i.find(g=>g.get("id")===p.group),m=h?.getLayers?null:h?.getSource();f={...f,[p.group]:{layer:h,source:m||null}},t.externalMapRendering||m.updateParams({[p.property]:p.originalDate})}});const d=t.renderRoot.querySelector("#timecontrol-filter");t.dispatchEvent(new CustomEvent("select",{detail:{selectedItems:Pr(a,"group"),date:[L(e[0]).utc().toDate(),L(e[1]).utc().toDate()],filters:d?.filters||[],instances:f}})),t.requestUpdate()}const WS=`
  ${x1}
  :root, :host, body {
    --dot-color-1: var(--primary);
    --dot-color-2: #F5365C;
    --dot-color-3: #43CC8B;
    --dot-color-4: #FFBE4F;
    --dot-color-5: #00F6FF;
    --dot-color-6: #FF4AB1;
    --dot-color-7: #FFE600;
    --dot-color-8: #36FF72;
    --dot-color-9: #00F0FF;
    --dot-color-10: #FF6B00;
    --dot-color-11: #E100FF;
  }
  .vc {
    z-index: 9999;
  }
  .vc * {
    font-family: var(--eox-body-font-family);
  }
  .vc-day__dots {
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    pointer-events: none;
  }
  .vc-day__dot {
    width: 4px;
    height: 4px;
    border-radius: 9999px;
    opacity: 0.9;
  }
  .vc-day__plus {
    width: 6px;
    height: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .vc-day__plus::before, .vc-day__plus::after {
    content: "";
    position: absolute;
    background: var(--primary);
    border-radius: 1px;
  }
  .vc-day__plus::before {
    width: 1.5px;
    height: 6px;
    background: var(--primary);
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .vc-day__plus::after {
    height: 1.5px;
    width: 6px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .vc-date[data-vc-date-selected] .vc-day__dot,
  .vc-date[data-vc-date-selected] .vc-day__plus::after,
  .vc-date[data-vc-date-selected] .vc-day__plus::before {
    background: var(--on-primary) !important;
  }
  [data-vc-theme=light] .vc-date.vc-data-available .vc-date__btn {
    --tw-bg-opacity: 1;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  }
  [data-vc-theme=dark] .vc-date.vc-data-available .vc-date__btn {
    --tw-bg-opacity: 1;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity));
  }
  [data-vc-theme=light] .vc-date.vc-data-unavailable .vc-date__btn {
    --tw-bg-opacity: 0;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity));
    border: 3px solid rgb(241 245 249);
  }
  [data-vc-theme=dark] .vc-date.vc-data-unavailable .vc-date__btn {
    --tw-bg-opacity: 0;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity));
    border: 3px solid rgb(30 41 59);
  }
  .vc-date[data-vc-date-selected] .vc-date__btn {
    background-color: var(--primary) !important;
    border: none !important;
  }
  .vc-date.vc-data-available:hover .vc-date__popup {
    opacity: 1 !important;
  }
  .vc-item-popup {
    padding: 8px;
    // max-width: 300px;
    background-color: #fff;
    border-radius: 4px;
  }
  .v-date_popup {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  [data-vc-theme=dark] .vc-item-popup {
    background-color: #1e293b;
    color: #fff;
  }
  .vc-date__popup {
    max-width: 300px !important;
    left: 0px !important;
    padding: 0.5rem !important;
  }
  .vc-item-popup__item {
    margin-bottom: 12px;
  }
  .vc-item-popup__item:last-of-type {
    margin-bottom: 0;
  }
  .vc-item-popup__item-content {
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;
  }
  .vc-item-popup__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-color, var(--primary, #007bff));
    margin-right: 8px;
    margin-top: 4px;
    flex-shrink: 0;
  }
  .vc-item-popup__text-container {
    flex: 1;
  }
  .vc-item-popup__id {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .vc-item-popup__meta {
    margin-top: 2px;
    color: #333;
    font-size: 0.9em;
  }
  [data-vc-theme=dark] .vc-item-popup__meta {
    color: #cbd5e1;
  }
  .vc-item-popup__more {
    margin-top: 4px;
    color: #999;
    font-size: 0.9em;
  }
  [data-vc-theme=dark] .vc-item-popup__more {
    color: #94a3b8;
  }
`;function DR(){if(document.querySelector("#vanilla-calendar-styles"))return;const e=document.createElement("style");e.id="vanilla-calendar-styles",e.textContent=WS,document.head.appendChild(e)}function CR(){if(document.querySelectorAll("eox-timeslider").length<=1){const t=document.querySelector("#vanilla-calendar-styles");t&&t.remove()}document.querySelectorAll(".vc").forEach(t=>t.remove())}function MR(e){return e.getAttribute("data-calendar-date")||e.dataset?.calendarDate||Object.values(e.dataset||{}).find(r=>/^\d{4}-\d{2}-\d{2}$/.test(r))||null}function $R(e,r,t,n){r.forEach(i=>{const a=e.querySelector(i);a&&a.setDateRange(t,n)})}var Q;(function(e){e.LOAD="LOAD",e.EXEC="EXEC",e.FFPROBE="FFPROBE",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.DELETE_FILE="DELETE_FILE",e.RENAME="RENAME",e.CREATE_DIR="CREATE_DIR",e.LIST_DIR="LIST_DIR",e.DELETE_DIR="DELETE_DIR",e.ERROR="ERROR",e.DOWNLOAD="DOWNLOAD",e.PROGRESS="PROGRESS",e.LOG="LOG",e.MOUNT="MOUNT",e.UNMOUNT="UNMOUNT"})(Q||(Q={}));const LR=(()=>{let e=0;return()=>e++})(),NR=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),jR=new Error("called FFmpeg.terminate()");class FR{#e=null;#r={};#t={};#n=[];#a=[];loaded=!1;#o=()=>{this.#e&&(this.#e.onmessage=({data:{id:r,type:t,data:n}})=>{switch(t){case Q.LOAD:this.loaded=!0,this.#r[r](n);break;case Q.MOUNT:case Q.UNMOUNT:case Q.EXEC:case Q.FFPROBE:case Q.WRITE_FILE:case Q.READ_FILE:case Q.DELETE_FILE:case Q.RENAME:case Q.CREATE_DIR:case Q.LIST_DIR:case Q.DELETE_DIR:this.#r[r](n);break;case Q.LOG:this.#n.forEach(i=>i(n));break;case Q.PROGRESS:this.#a.forEach(i=>i(n));break;case Q.ERROR:this.#t[r](n);break}delete this.#r[r],delete this.#t[r]})};#i=({type:r,data:t},n=[],i)=>this.#e?new Promise((a,o)=>{const u=LR();this.#e&&this.#e.postMessage({id:u,type:r,data:t},n),this.#r[u]=a,this.#t[u]=o,i?.addEventListener("abort",()=>{o(new DOMException(`Message # ${u} was aborted`,"AbortError"))},{once:!0})}):Promise.reject(NR);on(r,t){r==="log"?this.#n.push(t):r==="progress"&&this.#a.push(t)}off(r,t){r==="log"?this.#n=this.#n.filter(n=>n!==t):r==="progress"&&(this.#a=this.#a.filter(n=>n!==t))}load=({classWorkerURL:r,...t}={},{signal:n}={})=>(this.#e||(this.#e=r?new Worker(new URL(r,import.meta.url),{type:"module"}):new Worker(new URL("/preview-instance/assets/worker-BAOIWoxA.js",import.meta.url),{type:"module"}),this.#o()),this.#i({type:Q.LOAD,data:t},void 0,n));exec=(r,t=-1,{signal:n}={})=>this.#i({type:Q.EXEC,data:{args:r,timeout:t}},void 0,n);ffprobe=(r,t=-1,{signal:n}={})=>this.#i({type:Q.FFPROBE,data:{args:r,timeout:t}},void 0,n);terminate=()=>{const r=Object.keys(this.#t);for(const t of r)this.#t[t](jR),delete this.#t[t],delete this.#r[t];this.#e&&(this.#e.terminate(),this.#e=null,this.loaded=!1)};writeFile=(r,t,{signal:n}={})=>{const i=[];return t instanceof Uint8Array&&i.push(t.buffer),this.#i({type:Q.WRITE_FILE,data:{path:r,data:t}},i,n)};mount=(r,t,n)=>{const i=[];return this.#i({type:Q.MOUNT,data:{fsType:r,options:t,mountPoint:n}},i)};unmount=r=>{const t=[];return this.#i({type:Q.UNMOUNT,data:{mountPoint:r}},t)};readFile=(r,t="binary",{signal:n}={})=>this.#i({type:Q.READ_FILE,data:{path:r,encoding:t}},void 0,n);deleteFile=(r,{signal:t}={})=>this.#i({type:Q.DELETE_FILE,data:{path:r}},void 0,t);rename=(r,t,{signal:n}={})=>this.#i({type:Q.RENAME,data:{oldPath:r,newPath:t}},void 0,n);createDir=(r,{signal:t}={})=>this.#i({type:Q.CREATE_DIR,data:{path:r}},void 0,t);listDir=(r,{signal:t}={})=>this.#i({type:Q.LIST_DIR,data:{path:r}},void 0,t);deleteDir=(r,{signal:t}={})=>this.#i({type:Q.DELETE_DIR,data:{path:r}},void 0,t)}var v_;(function(e){e.MEMFS="MEMFS",e.NODEFS="NODEFS",e.NODERAWFS="NODERAWFS",e.IDBFS="IDBFS",e.WORKERFS="WORKERFS",e.PROXYFS="PROXYFS"})(v_||(v_={}));const kR=new Error("failed to get response body reader"),BR=new Error("failed to complete download"),UR="Content-Length",zR=async(e,r)=>{const t=await fetch(e);let n;try{const i=parseInt(t.headers.get(UR)||"-1"),a=t.body?.getReader();if(!a)throw kR;const o=[];let u=0;for(;;){const{done:d,value:p}=await a.read(),h=p?p.length:0;if(d){if(i!=-1&&i!==u)throw BR;r&&r({url:e,total:i,received:u,delta:h,done:d});break}o.push(p),u+=h,r&&r({url:e,total:i,received:u,delta:h,done:d})}const c=new Uint8Array(u);let f=0;for(const d of o)c.set(d,f),f+=d.length;n=c.buffer}catch(i){console.log("failed to send download progress event: ",i),n=await t.arrayBuffer()}return n},p_=async(e,r,t=!1,n)=>{const i=t?await zR(e,n):await(await fetch(e)).arrayBuffer(),a=new Blob([i],{type:r});return URL.createObjectURL(a)};async function GR(e,r,t,n,i){const a=e.map(o=>o.img).filter(o=>o);if(a.length===0){console.error("No images available for export");return}if(r==="mp4")try{const o=await WR(a,{fps:t,preset:"ultrafast"}),u=URL.createObjectURL(o),c=document.createElement("a");c.href=u,c.download="timeslider.mp4",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u),n()}catch(o){n(),console.error("MP4 conversion error:",o),alert("Failed to convert to MP4: "+(o instanceof Error?o.message:String(o)))}else KR(a,i,t,n)}function KR(e,r,t,n){const a=r.timelapseComponent.querySelector(".map-view-item").getBoundingClientRect(),o=a.width,u=a.height;R1.createGIF({gifWidth:o,gifHeight:u,images:[...e],interval:1,numFrames:e.length,frameDuration:t,fontWeight:"normal",fontSize:"16px",fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",sampleInterval:10,numWorkers:2},function(c){if(c.error)console.error("GIF generation error:",c.error),n();else{const f=document.createElement("a");f.href=c.image,f.download="timeslider.gif",document.body.appendChild(f),f.click(),document.body.removeChild(f),n()}})}async function WR(e,{fps:r=1,crf:t=1,preset:n="veryfast"}={}){if(!e||e.length===0)throw new Error("No frames provided");const i="https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm",a=new FR;await a.load({coreURL:await p_(`${i}/ffmpeg-core.js`,"text/javascript"),wasmURL:await p_(`${i}/ffmpeg-core.wasm`,"application/wasm")});const o=Math.max(3,String(e.length-1).length+1),u=d=>`frame${String(d).padStart(o,"0")}.png`;for(let d=0;d<e.length;d++){const p=e[d];let h;try{if(p.startsWith("data:")){const m=p.split(",")[1];if(!m)throw new Error(`Invalid data URL format at index ${d}`);const g=atob(m),_=new Uint8Array(g.length);for(let T=0;T<g.length;T++)_[T]=g.charCodeAt(T);h=_}else{const m=await fetch(p);if(!m.ok)throw new Error(`Failed to fetch image ${d}: ${m.status} ${m.statusText}`);h=new Uint8Array(await m.arrayBuffer())}if(h.length===0)throw new Error(`Empty image data at index ${d}`);await a.writeFile(u(d),h)}catch(m){throw new Error(`Failed to process image ${d}: ${m instanceof Error?m.message:String(m)}`)}}const c=`frame%0${o}d.png`,f="output.mp4";try{await a.exec(["-framerate",String(r),"-i",c,"-movflags","faststart","-pix_fmt","yuv420p","-vf","scale=trunc(iw/2)*2:trunc(ih/2)*2","-c:v","libx264","-preset",n,"-crf",String(t),"-r",String(r),f]);const d=await a.readFile(f);if(!d||d.length===0)throw new Error("FFmpeg produced no output");try{for(let p=0;p<e.length;p++)await a.deleteFile(u(p));await a.deleteFile(f)}catch(p){console.warn("Failed to clean up temporary files:",p)}return new Blob([d.buffer],{type:"video/mp4"})}catch(d){try{for(let p=0;p<e.length;p++)await a.deleteFile(u(p));await a.deleteFile(f)}catch{}throw new Error(`FFmpeg encoding failed: ${d instanceof Error?d.message:String(d)}`)}}L.extend(E_);L.extend(I_);L.extend(T_);function VR(e){const r=e.getEOxTimeControl().querySelector(".eox-timecontrol-date"),t=Array.from(e.timelapseComponent.querySelectorAll(".map-view-item")).map(i=>i),n=e.timelapseComponent.querySelector(".export-images");t.forEach(i=>{const a=i.map,o=i.getAttribute("data-index"),u=()=>{const c=document.createElement("canvas"),f=a.getSize();c.width=f[0],c.height=f[1];const d=c.getContext("2d");if(Array.prototype.forEach.call(a.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),function(p){if(p.width>0){const h=p.parentNode.style.opacity||p.style.opacity;d.globalAlpha=h===""?1:Number(h);let m;const g=p.style.transform;g?m=g.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number):m=[parseFloat(p.style.width)/p.width,0,0,parseFloat(p.style.height)/p.height,0,0],CanvasRenderingContext2D.prototype.setTransform.apply(d,m);const _=p.parentNode.style.backgroundColor;_&&(d.fillStyle=_,d.fillRect(0,0,p.width,p.height)),d.drawImage(p,0,0)}}),d.globalAlpha=1,d.setTransform(1,0,0,1,0,0),e&&e.exportConfig&&Array.isArray(e.exportConfig.mapLayers)&&typeof o<"u"){const p=Number(o);if(!isNaN(p)&&e.exportConfig.mapLayers[p]){const h=e.exportConfig.mapLayers[p];e.exportConfig.mapLayers[p].img=c.toDataURL();const m=n.children[p];for(m.classList.remove("loader-image"),e.exportConfig.selectedPreview===p&&m.classList.add("selected-preview"),m.addEventListener("click",()=>e.handleSelectedPreview(p));m.firstChild;)m.removeChild(m.firstChild);S_(ee`<img src=${h.img} alt="Exported map ${o+1}" />
              ${Ur(h.date,()=>ee`<span
                    >${L(h.date).format(r?.format||yt)}</span
                  >`)}`,m),e.requestUpdate()}}};a.once("rendercomplete",u),a.renderSync()})}function h_(e,r,t){r.forEach(n=>{const i=e.querySelector(n);i&&Object.keys(t).forEach(a=>{i[a]!==void 0&&(i[a]=t[a])})})}L.extend(hr);L.extend(mr);function YR(e){if(!Array.isArray(e)||!e.length)return null;let r,t;return e.length<2?r=t=e[0]:[r,t]=e,r=L(r).startOf("day").utc().format(),t=L(t).endOf("day").utc().format(),[r,t]}function HR(){DR()}L.extend(hr);L.extend(mr);function m_(e,r){if(!e)return null;const t=L(e[0]),n=L(e[1]),i=t.format(yt),a=n.format(yt);return{dates:r?[i,a]:[i],year:t.year(),month:t.month()}}var qn={exports:{}};qn.exports;var y_;function XR(){return y_||(y_=1,(function(e,r){var t=200,n="Expected a function",i="__lodash_hash_undefined__",a=1,o=2,u=1/0,c=9007199254740991,f=17976931348623157e292,d=NaN,p="[object Arguments]",h="[object Array]",m="[object Boolean]",g="[object Date]",_="[object Error]",T="[object Function]",x="[object GeneratorFunction]",w="[object Map]",A="[object Number]",E="[object Object]",O="[object Promise]",P="[object RegExp]",q="[object Set]",I="[object String]",R="[object Symbol]",D="[object WeakMap]",M="[object ArrayBuffer]",N="[object DataView]",k="[object Float32Array]",H="[object Float64Array]",oe="[object Int8Array]",Qe="[object Int16Array]",he="[object Int32Array]",Le="[object Uint8Array]",Ne="[object Uint8ClampedArray]",er="[object Uint16Array]",ne="[object Uint32Array]",je=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fe=/^\w*$/,Ae=/^\./,gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qe=/[\\^$.*+?()[\]{}|]/g,rr=/^\s+|\s+$/g,br=/\\(\\)?/g,cn=/^[-+]0x[0-9a-f]+$/i,ln=/^0b[01]+$/i,Xr=/^\[object .+?Constructor\]$/,Ot=/^0o[0-7]+$/i,tr=/^(?:0|[1-9]\d*)$/,F={};F[k]=F[H]=F[oe]=F[Qe]=F[he]=F[Le]=F[Ne]=F[er]=F[ne]=!0,F[p]=F[h]=F[M]=F[m]=F[N]=F[g]=F[_]=F[T]=F[w]=F[A]=F[E]=F[P]=F[q]=F[I]=F[D]=!1;var fn=parseInt,jr=typeof Br=="object"&&Br&&Br.Object===Object&&Br,ze=typeof self=="object"&&self&&self.Object===Object&&self,se=jr||ze||Function("return this")(),Zr=r&&!r.nodeType&&r,_r=Zr&&!0&&e&&!e.nodeType&&e,qt=_r&&_r.exports===Zr,Sr=qt&&jr.process,wr=(function(){try{return Sr&&Sr.binding("util")}catch{}})(),ur=wr&&wr.isTypedArray;function Jr(s,v){for(var b=-1,S=s?s.length:0;++b<S;)if(v(s[b],b,s))return!0;return!1}function dn(s,v,b,S){for(var C=s.length,$=b+-1;++$<C;)if(v(s[$],$,s))return $;return-1}function Qr(s){return function(v){return v?.[s]}}function Pt(s,v){for(var b=-1,S=Array(s);++b<s;)S[b]=v(b);return S}function At(s){return function(v){return s(v)}}function Dt(s,v){return s?.[v]}function Y(s){var v=!1;if(s!=null&&typeof s.toString!="function")try{v=!!(s+"")}catch{}return v}function U(s){var v=-1,b=Array(s.size);return s.forEach(function(S,C){b[++v]=[C,S]}),b}function z(s,v){return function(b){return s(v(b))}}function G(s){var v=-1,b=Array(s.size);return s.forEach(function(S){b[++v]=S}),b}var J=Array.prototype,we=Function.prototype,We=Object.prototype,cr=se["__core-js_shared__"],vn=(function(){var s=/[^.]+$/.exec(cr&&cr.keys&&cr.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""})(),pn=we.toString,me=We.hasOwnProperty,Ge=We.toString,Fi=RegExp("^"+pn.call(me).replace(qe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hn=se.Symbol,mn=se.Uint8Array,ki=We.propertyIsEnumerable,Bi=J.splice,Ui=z(Object.keys,Object),zi=Math.max,et=Ce(se,"DataView"),nr=Ce(se,"Map"),rt=Ce(se,"Promise"),tt=Ce(se,"Set"),nt=Ce(se,"WeakMap"),ir=Ce(Object,"create"),Gi=xr(et),Ki=xr(nr),Wi=xr(rt),Vi=xr(tt),Yi=xr(nt),Er=hn?hn.prototype:void 0,it=Er?Er.valueOf:void 0,yn=Er?Er.toString:void 0;function De(s){var v=-1,b=s?s.length:0;for(this.clear();++v<b;){var S=s[v];this.set(S[0],S[1])}}function Hi(){this.__data__=ir?ir(null):{}}function Xi(s){return this.has(s)&&delete this.__data__[s]}function Zi(s){var v=this.__data__;if(ir){var b=v[s];return b===i?void 0:b}return me.call(v,s)?v[s]:void 0}function Ji(s){var v=this.__data__;return ir?v[s]!==void 0:me.call(v,s)}function Qi(s,v){var b=this.__data__;return b[s]=ir&&v===void 0?i:v,this}De.prototype.clear=Hi,De.prototype.delete=Xi,De.prototype.get=Zi,De.prototype.has=Ji,De.prototype.set=Qi;function ye(s){var v=-1,b=s?s.length:0;for(this.clear();++v<b;){var S=s[v];this.set(S[0],S[1])}}function ea(){this.__data__=[]}function ra(s){var v=this.__data__,b=Tr(v,s);if(b<0)return!1;var S=v.length-1;return b==S?v.pop():Bi.call(v,b,1),!0}function ta(s){var v=this.__data__,b=Tr(v,s);return b<0?void 0:v[b][1]}function na(s){return Tr(this.__data__,s)>-1}function ia(s,v){var b=this.__data__,S=Tr(b,s);return S<0?b.push([s,v]):b[S][1]=v,this}ye.prototype.clear=ea,ye.prototype.delete=ra,ye.prototype.get=ta,ye.prototype.has=na,ye.prototype.set=ia;function ge(s){var v=-1,b=s?s.length:0;for(this.clear();++v<b;){var S=s[v];this.set(S[0],S[1])}}function aa(){this.__data__={hash:new De,map:new(nr||ye),string:new De}}function oa(s){return Mt(this,s).delete(s)}function sa(s){return Mt(this,s).get(s)}function ua(s){return Mt(this,s).has(s)}function ca(s,v){return Mt(this,s).set(s,v),this}ge.prototype.clear=aa,ge.prototype.delete=oa,ge.prototype.get=sa,ge.prototype.has=ua,ge.prototype.set=ca;function Ir(s){var v=-1,b=s?s.length:0;for(this.__data__=new ge;++v<b;)this.add(s[v])}function la(s){return this.__data__.set(s,i),this}function fa(s){return this.__data__.has(s)}Ir.prototype.add=Ir.prototype.push=la,Ir.prototype.has=fa;function be(s){this.__data__=new ye(s)}function da(){this.__data__=new ye}function va(s){return this.__data__.delete(s)}function pa(s){return this.__data__.get(s)}function ha(s){return this.__data__.has(s)}function ma(s,v){var b=this.__data__;if(b instanceof ye){var S=b.__data__;if(!nr||S.length<t-1)return S.push([s,v]),this;b=this.__data__=new ge(S)}return b.set(s,v),this}be.prototype.clear=da,be.prototype.delete=va,be.prototype.get=pa,be.prototype.has=ha,be.prototype.set=ma;function ya(s,v){var b=Rr(s)||wn(s)?Pt(s.length,String):[],S=b.length,C=!!S;for(var $ in s)me.call(s,$)&&!(C&&($=="length"||ot($,S)))&&b.push($);return b}function Tr(s,v){for(var b=s.length;b--;)if(fr(s[b][0],v))return b;return-1}function gn(s,v){v=$t(v,s)?[v]:bn(v);for(var b=0,S=v.length;s!=null&&b<S;)s=s[Ve(v[b++])];return b&&b==S?s:void 0}function ga(s){return Ge.call(s)}function ba(s,v){return s!=null&&v in Object(s)}function at(s,v,b,S,C){return s===v?!0:s==null||v==null||!ar(s)&&!Ft(v)?s!==s&&v!==v:_a(s,v,at,b,S,C)}function _a(s,v,b,S,C,$){var j=Rr(s),K=Rr(v),V=h,X=h;j||(V=lr(s),V=V==p?E:V),K||(X=lr(v),X=X==p?E:X);var Z=V==E&&!Y(s),ie=X==E&&!Y(v),te=V==X;if(te&&!Z)return $||($=new be),j||Da(s)?ai(s,v,b,S,C,$):qa(s,v,V,b,S,C,$);if(!(C&o)){var le=Z&&me.call(s,"__wrapped__"),ce=ie&&me.call(v,"__wrapped__");if(le||ce){var Pe=le?s.value():s,Ye=ce?v.value():v;return $||($=new be),b(Pe,Ye,S,C,$)}}return te?($||($=new be),Ct(s,v,b,S,C,$)):!1}function Sa(s,v,b,S){var C=b.length,$=C;if(s==null)return!$;for(s=Object(s);C--;){var j=b[C];if(j[2]?j[1]!==s[j[0]]:!(j[0]in s))return!1}for(;++C<$;){j=b[C];var K=j[0],V=s[K],X=j[1];if(j[2]){if(V===void 0&&!(K in s))return!1}else{var Z=new be,ie;if(!(ie===void 0?at(X,V,S,a|o,Z):ie))return!1}}return!0}function wa(s){if(!ar(s)||Aa(s))return!1;var v=Or(s)||Y(s)?Fi:Xr;return v.test(xr(s))}function Ea(s){return Ft(s)&&kr(s.length)&&!!F[Ge.call(s)]}function ni(s){return typeof s=="function"?s:s==null?l:typeof s=="object"?Rr(s)?xa(s[0],s[1]):Ta(s):y(s)}function Ia(s){if(!si(s))return Ui(s);var v=[];for(var b in Object(s))me.call(s,b)&&b!="constructor"&&v.push(b);return v}function Ta(s){var v=Fr(s);return v.length==1&&v[0][2]?ui(v[0][0],v[0][1]):function(b){return b===s||Sa(b,s,v)}}function xa(s,v){return $t(s)&&_n(v)?ui(Ve(s),v):function(b){var S=In(b,s);return S===void 0&&S===v?Na(b,s):at(v,S,void 0,a|o)}}function Ra(s){return function(v){return gn(v,s)}}function Oa(s){if(typeof s=="string")return s;if(kt(s))return yn?yn.call(s):"";var v=s+"";return v=="0"&&1/s==-u?"-0":v}function bn(s){return Rr(s)?s:Lt(s)}function ii(s){return function(v,b,S){var C=Object(v);if(!jt(v)){var $=ni(b);v=Bt(v),b=function(K){return $(C[K],K,C)}}var j=s(v,b,S);return j>-1?C[$?v[j]:j]:void 0}}function ai(s,v,b,S,C,$){var j=C&o,K=s.length,V=v.length;if(K!=V&&!(j&&V>K))return!1;var X=$.get(s);if(X&&$.get(v))return X==v;var Z=-1,ie=!0,te=C&a?new Ir:void 0;for($.set(s,v),$.set(v,s);++Z<K;){var le=s[Z],ce=v[Z];if(S)var Pe=j?S(ce,le,Z,v,s,$):S(le,ce,Z,s,v,$);if(Pe!==void 0){if(Pe)continue;ie=!1;break}if(te){if(!Jr(v,function(Ye,He){if(!te.has(He)&&(le===Ye||b(le,Ye,S,C,$)))return te.add(He)})){ie=!1;break}}else if(!(le===ce||b(le,ce,S,C,$))){ie=!1;break}}return $.delete(s),$.delete(v),ie}function qa(s,v,b,S,C,$,j){switch(b){case N:if(s.byteLength!=v.byteLength||s.byteOffset!=v.byteOffset)return!1;s=s.buffer,v=v.buffer;case M:return!(s.byteLength!=v.byteLength||!S(new mn(s),new mn(v)));case m:case g:case A:return fr(+s,+v);case _:return s.name==v.name&&s.message==v.message;case P:case I:return s==v+"";case w:var K=U;case q:var V=$&o;if(K||(K=G),s.size!=v.size&&!V)return!1;var X=j.get(s);if(X)return X==v;$|=a,j.set(s,v);var Z=ai(K(s),K(v),S,C,$,j);return j.delete(s),Z;case R:if(it)return it.call(s)==it.call(v)}return!1}function Ct(s,v,b,S,C,$){var j=C&o,K=Bt(s),V=K.length,X=Bt(v),Z=X.length;if(V!=Z&&!j)return!1;for(var ie=V;ie--;){var te=K[ie];if(!(j?te in v:me.call(v,te)))return!1}var le=$.get(s);if(le&&$.get(v))return le==v;var ce=!0;$.set(s,v),$.set(v,s);for(var Pe=j;++ie<V;){te=K[ie];var Ye=s[te],He=v[te];if(S)var st=j?S(He,Ye,te,v,s,$):S(Ye,He,te,s,v,$);if(!(st===void 0?Ye===He||b(Ye,He,S,C,$):st)){ce=!1;break}Pe||(Pe=te=="constructor")}if(ce&&!Pe){var li=s.constructor,fi=v.constructor;li!=fi&&"constructor"in s&&"constructor"in v&&!(typeof li=="function"&&li instanceof li&&typeof fi=="function"&&fi instanceof fi)&&(ce=!1)}return $.delete(s),$.delete(v),ce}function Mt(s,v){var b=s.__data__;return Pa(v)?b[typeof v=="string"?"string":"hash"]:b.map}function Fr(s){for(var v=Bt(s),b=v.length;b--;){var S=v[b],C=s[S];v[b]=[S,C,_n(C)]}return v}function Ce(s,v){var b=Dt(s,v);return wa(b)?b:void 0}var lr=ga;(et&&lr(new et(new ArrayBuffer(1)))!=N||nr&&lr(new nr)!=w||rt&&lr(rt.resolve())!=O||tt&&lr(new tt)!=q||nt&&lr(new nt)!=D)&&(lr=function(s){var v=Ge.call(s),b=v==E?s.constructor:void 0,S=b?xr(b):void 0;if(S)switch(S){case Gi:return N;case Ki:return w;case Wi:return O;case Vi:return q;case Yi:return D}return v});function oi(s,v,b){v=$t(v,s)?[v]:bn(v);for(var S,C=-1,j=v.length;++C<j;){var $=Ve(v[C]);if(!(S=s!=null&&b(s,$)))break;s=s[$]}if(S)return S;var j=s?s.length:0;return!!j&&kr(j)&&ot($,j)&&(Rr(s)||wn(s))}function ot(s,v){return v=v??c,!!v&&(typeof s=="number"||tr.test(s))&&s>-1&&s%1==0&&s<v}function $t(s,v){if(Rr(s))return!1;var b=typeof s;return b=="number"||b=="symbol"||b=="boolean"||s==null||kt(s)?!0:Fe.test(s)||!je.test(s)||v!=null&&s in Object(v)}function Pa(s){var v=typeof s;return v=="string"||v=="number"||v=="symbol"||v=="boolean"?s!=="__proto__":s===null}function Aa(s){return!!vn&&vn in s}function si(s){var v=s&&s.constructor,b=typeof v=="function"&&v.prototype||We;return s===b}function _n(s){return s===s&&!ar(s)}function ui(s,v){return function(b){return b==null?!1:b[s]===v&&(v!==void 0||s in Object(b))}}var Lt=Nt(function(s){s=La(s);var v=[];return Ae.test(s)&&v.push(""),s.replace(gr,function(b,S,C,$){v.push(C?$.replace(br,"$1"):S||b)}),v});function Ve(s){if(typeof s=="string"||kt(s))return s;var v=s+"";return v=="0"&&1/s==-u?"-0":v}function xr(s){if(s!=null){try{return pn.call(s)}catch{}try{return s+""}catch{}}return""}function Sn(s,v,b){var S=s?s.length:0;if(!S)return-1;var C=b==null?0:Ma(b);return C<0&&(C=zi(S+C,0)),dn(s,ni(v),C)}var ci=ii(Sn);function Nt(s,v){if(typeof s!="function"||v&&typeof v!="function")throw new TypeError(n);var b=function(){var S=arguments,C=v?v.apply(this,S):S[0],$=b.cache;if($.has(C))return $.get(C);var j=s.apply(this,S);return b.cache=$.set(C,j),j};return b.cache=new(Nt.Cache||ge),b}Nt.Cache=ge;function fr(s,v){return s===v||s!==s&&v!==v}function wn(s){return En(s)&&me.call(s,"callee")&&(!ki.call(s,"callee")||Ge.call(s)==p)}var Rr=Array.isArray;function jt(s){return s!=null&&kr(s.length)&&!Or(s)}function En(s){return Ft(s)&&jt(s)}function Or(s){var v=ar(s)?Ge.call(s):"";return v==T||v==x}function kr(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=c}function ar(s){var v=typeof s;return!!s&&(v=="object"||v=="function")}function Ft(s){return!!s&&typeof s=="object"}function kt(s){return typeof s=="symbol"||Ft(s)&&Ge.call(s)==R}var Da=ur?At(ur):Ea;function Ca(s){if(!s)return s===0?s:0;if(s=$a(s),s===u||s===-u){var v=s<0?-1:1;return v*f}return s===s?s:0}function Ma(s){var v=Ca(s),b=v%1;return v===v?b?v-b:v:0}function $a(s){if(typeof s=="number")return s;if(kt(s))return d;if(ar(s)){var v=typeof s.valueOf=="function"?s.valueOf():s;s=ar(v)?v+"":v}if(typeof s!="string")return s===0?s:+s;s=s.replace(rr,"");var b=ln.test(s);return b||Ot.test(s)?fn(s.slice(2),b?2:8):cn.test(s)?d:+s}function La(s){return s==null?"":Oa(s)}function In(s,v,b){var S=s==null?void 0:gn(s,v);return S===void 0?b:S}function Na(s,v){return s!=null&&oi(s,v,ba)}function Bt(s){return jt(s)?ya(s):Ia(s)}function l(s){return s}function y(s){return $t(s)?Qr(Ve(s)):Ra(s)}e.exports=ci})(qn,qn.exports)),qn.exports}var ZR=XR();const JR=x_(ZR);L.extend(hr);L.extend(mr);let mi=null;class QR extends gt{static get properties(){return{cal:{attribute:!1,state:!0},popup:{type:Boolean,attribute:"popup"},unstyled:{type:Boolean,attribute:"unstyled"},range:{type:Boolean,attribute:"range"},showItems:{type:Boolean,attribute:"show-items"},showDots:{type:Boolean,attribute:"show-dots"},position:{type:Array,attribute:!1}}}#e=!1;#r=null;constructor(){super(),this.cal=null,this.popup=!1,this.unstyled=!1,this.range=!1,this.showDots=!1,this.showItems=!1,this.position=["top","left"]}firstUpdated(){HR(),this.#e||this.initCalendar()}disconnectedCallback(){super.disconnectedCallback(),CR()}setDateRange(r){if(this.#r=r,this.cal){const t=m_(this.#r,this.range);this.cal.set({selectedDates:t.dates,selectedYear:t.year,selectedMonth:t.month})}}#t(){const r=this.getViewRange();setTimeout(()=>{this.dispatchEvent(new CustomEvent("update:view",{detail:{start:r.start,end:r.end},composed:!0}))})}getViewRange(){const r=this.cal.context.mainElement.querySelector(".vc-month"),t=this.cal.context.mainElement.querySelector(".vc-year"),n=r?Number(r.getAttribute("data-vc-month")):this.cal.selectedMonth,i=t?Number(t.getAttribute("data-vc-year")):this.cal.selectedYear,a=L(`${i}-${String(n+1).padStart(2,"0")}-01`).startOf("month"),o=L(a).endOf("month");return{start:a.toDate(),end:o.toDate()}}initCalendar(r={}){this.#e=!0;const t=this.closest("eox-timecontrol");setTimeout(()=>{const n=this.renderRoot.querySelector("#cal"),i=t.querySelector("eox-timecontrol-date")?.shadowRoot?.querySelector("span"),a=this.popup&&i||n;if(a){n.innerHTML="",this.#r=r.selectedDateRange;const o=m_(this.#r,this.range),u=t.items.get(),c=Pr(u,"date");let f={};if(this.showItems)for(const d of Object.keys(c)){const p=c[d],h=p.slice(0,3),m=p.length-3;let g="";h.forEach(_=>{const T=_.id||"",x=_.utc?L(_.utc).format("HH:mm"):"",w=_.group||"",A=Object.keys(Pr(u,"group")),E=T.length>30?T.substring(0,30)+"...":T;g+=`
                <div class="vc-item-popup__item">
                  <div class="vc-item-popup__item-content">
                    <div class="vc-item-popup__dot" style="background-color: var(--dot-color-${A.indexOf(w)+1}, var(--primary))"></div>
                    <div class="vc-item-popup__text-container">
                      <div class="vc-item-popup__id">
                        ID: ${E}
                      </div>
                      <div class="vc-item-popup__meta">
                        ${x} ${w}
                      </div>
                    </div>
                  </div>
                </div>
              `}),m>0&&(g+=`
                <div class="vc-item-popup__more">
                  + ${m} more
                </div>
              `),f={...f,[d]:{modifier:"vc-item-popup",html:g}}}this.cal=new O1(a||"#cal",{selectedTheme:"light",dateMin:r.min,dateMax:r.max,displayDateMin:r.min,disableToday:!0,displayDateMax:r.max,displayDatesOutside:!1,type:"default",selectionDatesMode:this.range?"multiple-ranged":"single",...o?{selectedDates:o.dates,selectedYear:o.year,selectedMonth:o.month}:{},enableEdgeDatesOnly:!1,inputMode:!!this.popup,positionToInput:this.position,selectedWeekends:[],popups:f,onClickArrow:()=>this.#t(),onClickMonth:()=>this.#t(),onClickYear:()=>this.#t(),onClickDate:d=>{const p=d.context.selectedDates.length-1,h=d.context.selectedDates[0]||mi,m=this.range&&d.context.selectedDates[p];if(h){const g=L(h).startOf("day").utc().format(),_=L(m||h).endOf("day").utc().format();this.range?p||mi===h?(t.dateChange([g,_],t),mi=null):mi=h:t.dateChange([g,_],t)}},onCreateDateEls:(d,p)=>{const h=MR(p),m=t.items.get(),g=Pr(m,"date"),_=p.querySelector(".vc-day__dots");_&&_.remove();const T=g[h],x=Object.keys(Pr(m,"group"));if(T&&p.children.length){const w=document.createElement("div");w.className="vc-day__dots";const A=t.querySelector("eox-itemfilter");if(A){const P=A.results;JR(P,I=>I.start===h)||p.classList.add("vc-data-unavailable")}const E=T.length,O=E<=3?E:3;for(let P=0;P<O;P++)if(p.classList.add("vc-data-available"),p.hasAttribute("data-vc-date-today")&&p.removeAttribute("data-vc-date-today"),this.showDots)if(P<2||P===2&&E===3){const q=document.createElement("div");q.className="vc-day__dot",q.style.backgroundColor=`var(--dot-color-${x.indexOf(T[P].group)+1}, var(--primary))`,w.appendChild(q)}else{const q=document.createElement("div");q.className="vc-day__plus",w.appendChild(q)}p.appendChild(w)}}}),this.cal.init()}})}render(){return ee`
      <style>
        ${vt}
        ${WS}
      </style>
      <div id="cal" class="timecontrol-calendar-input" readonly />
    `}}customElements.define("eox-timecontrol-picker",QR);const eO=`
[class*=round] {
  border-radius: 0px !important;
}
.vis-timeline * {
  border-radius: 0px;
}
.timeline-wrapper {
  position: relative;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vis-labelset .vis-label .vis-inner {
  font-size: 12px;
}
.vis-label-hide {
  opacity: 0.4;
}
.vis-item.task {
  background: var(--primary);
  border: none;
  border-radius: 0px !important;
  height: 14px;
}
.vis-labelset .vis-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vis-labelset .vis-label .vis-inner {
  font-weight: 700;
  padding: 15px;
}
.vis-custom-time-selected-label {
  padding: 5px;
  border-radius: 0px !important;
  background:rgba(0, 12, 20, 0.8);
  color: white;
  font-weight: 700;
  font-size: 12px;
  width: 120px !important;
  height: auto !important;
  left: -60px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vis-foreground .vis-group {
  border-radius: 0px;
}
.vis-item.task:hover {
  background: var(--primary-container);
}
.vis-item.milestone.vis-dot {
  display: none;
}
.vis-item.milestone.vis-point {
  background: var(--primary) !important;
  border: none;
  width: 14px;
  height: 14px;
  border-radius: 0px !important;
}
.vis-item.milestone.vis-point.vis-selected-item {
  background: #ffc200 !important;
}
.vis-item.milestone.vis-point.vis-not-filtered {
  background: var(--primary-container) !important;
  /*opacity: 0.4;*/
}
.vis-item.milestone.vis-point:hover {
  background: #ffc200 !important;
  cursor: pointer;
}
.vis-group.vis-group-hide .vis-item.milestone.vis-point,
.vis-group.vis-group-hide .vis-item.milestone.vis-point:hover {
  background: var(--primary) !important;
  opacity: 0.4 !important;
}
.vis-custom-time.multi-select-start {
  background: rgb(var(--eox-theme-light-primary), 0.4) !important;
  // border-left: 1px solid var(--primary) !important;
  // border-right: 1px solid var(--primary) !important;
}
.vis-custom-time.multi-select-end {
  // display: none;
  background: none;
}
.vis-custom-time.multi-select-start div, 
.vis-custom-time.multi-select-end div {
  width: 3px !important;
  left: 0px !important;
  background-color: var(--primary);
}
.vis-custom-time.multi-select-start div {
  cursor: w-resize;
}
.vis-custom-time.multi-select-end div {
  cursor: e-resize;
}
.vis-custom-time.multi-select-start tag, 
.vis-custom-time.multi-select-end tag {
  position: absolute;
  top: 0;
  font-size: 10px;
  width: 140px;
  text-align: center;
  background: rgba(0, 12, 20, 0.8);
  color: white;
  padding: 0 10px;
  display: none;
}
.vis-custom-time.multi-select-start tag {
  left: -140px;
} 
.vis-custom-time.multi-select-end tag {
  left: 0;
}
.vis-custom-time.multi-select-end div:hover + tag,
.vis-custom-time.multi-select-start div:hover + tag {
  display: block;
}
.vis-custom-time.multi-select-start:hover tag,
.vis-custom-time.multi-select-end:hover tag, 
.vis-custom-time.multi-select-start:hover + .vis-custom-time.multi-select-end tag,
.vis-custom-time.multi-select-end:hover + .vis-custom-time.multi-select-start tag {
  display: block;
}
.vis-text {
  font-size: 13px;
  text-transform: uppercase;
}
.vis-text.vis-major {
  color: #96938A !important;
  padding-left: 10px;
  margin-left: -8px;
  background: white;
}
.vis-text.vis-minor {
  margin-left: -8px;
  background: white;
}
.vis-item .vis-item-content {
  display: none;
}
.vis-current-time {
  background-color: var(--now) !important;
  width: 2px;
}
.vis-custom-time.selected {
  background-color: #202427 !important;
  width: 2px;
  z-index: 9;
}
.vis-custom-time-selected {
  background: #111 !important;
  width: 2px;
}
.load-wrapper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.load-wrapper,
.loader-image {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(211,211,211);
  z-index: 44;
  overflow: hidden;
}
.shimmer,
.shimmer-image {
  position: absolute;
  left: -45%;
  height: 100%;
  width: 45%;
  background-image: linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -moz-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -webkit-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  animation: loading 1s infinite;
  z-index: 45;
}
.loader-image {
  width: 200px;
  height: 100px;
}
@keyframes loading {
  0%{
    left: -45%;
  }
  100%{
    left: 100%;
  }
}
`;L.extend(hr);L.extend(mr);let vf=!1,ut=null;function Dn(e){const r=e.getContainer(),t=r.querySelector(".vis-custom-time.multi-select-start"),n=r.querySelector(".vis-custom-time.multi-select-end");let i,a=null,o,u=null;try{o=L(e.visTimeline.getCustomTime("multi-select-start")),i=o.format("DD MMM YYYY HH:mm:ss")}catch{}try{u=L(e.visTimeline.getCustomTime("multi-select-end")),a=u.format("DD MMM YYYY HH:mm:ss")}catch{}if(i&&o||a&&u){if(t){t.title="";const c=t.querySelector("tag"),f=c||document.createElement("tag");f.textContent=i,c||t.appendChild(f)}if(n){n.title="";const c=n.querySelector("tag"),f=c||document.createElement("tag");f.textContent=a,c||n.appendChild(f)}if(t&&n){const c=Number(n.style.left.replace("px","")),f=Number(t.style.left.replace("px",""));t.style.width=o.isAfter(u)?`${f-c}px`:`${c-f}px`,o.isAfter(u)&&(t.style.left=`${c}px`)}}}function rO(e,r,t){const n=e.getContainer(),i=r.querySelector("eox-itemfilter"),a=n.querySelector(".vis-text.vis-minor.vis-even"),u=Number(a.style.width.replace("px",""))/t.timeAxis.step+.1;n.querySelectorAll(".vis-item.milestone").forEach(f=>{f.style.width=`${u}px`});for(let f=0;f<r.sliderValues.length;f++)KS(e,r.sliderValues[f].layerInstance?.getVisible()||!0,f);i&&r.filter(void 0,r)}function tO(e,r){if(e.id=="multi-select-start"||e.id=="multi-select-end"){const t=e.id.includes("start"),n=L(e.time).utc().format(),a=[...t?[n,r.selectedDateRange[1]]:[r.selectedDateRange[0],n]].sort((o,u)=>L(o).isAfter(L(u))?1:-1);r.dateChange(a,r)}}function nO(e,r){if(e&&e.time&&e.what&&e.what!=="group-label"&&!vf&&!e.event.shiftKey){const t=L(e.time).startOf("day").utc().format(),n=L(e.time).endOf("day").utc().format();r.dateChange([t,n],r)}}function iO(e,r){e.byUser&&(vf=!0,setTimeout(()=>vf=!1),Dn(r));const t=r.visTimeline.getWindow();r.dispatchEvent(new CustomEvent("update:view",{detail:{start:t.start,end:t.end},composed:!0}))}function aO(e){const r=e.closest("eox-timecontrol");if(r){const t=r.items.get(),n=r.groups.get(),i=t.map(d=>L(d.start)),a=L.min(i).subtract(50,"day").format("YYYY-MM-DD"),o=L.max(i).add(50,"day").format("YYYY-MM-DD"),u=e.getContainer();u.innerHTML="";const c={...IR,start:a,end:o,min:a,max:o,format:TR},f=new q1(u,t,n,c);e.visTimeline=f,e.requestUpdate(),ut&&(clearInterval(ut),ut=null),ut===null&&(ut=setInterval(()=>{const d=e.visTimeline;d&&d.initialRangeChangeDone&&d.initialFitDone&&!d.initialDrawDone?(d.redraw(),clearInterval(ut)):d&&d.initialRangeChangeDone&&d.initialFitDone&&d.initialDrawDone&&clearInterval(ut)},50)),f.on("changed",()=>{Dn(e),rO(e,r,c)}),f.on("timechange",()=>Dn(e)),f.on("timechanged",d=>tO(d,r)),f.on("click",d=>nO(d,r)),f.on("rangechange",d=>d.byUser&&Dn(e)),f.on("rangechanged",d=>iO(d,e))}}L.extend(hr);L.extend(mr);function oO(e,r){try{r.visTimeline.removeCustomTime("multi-select-start")}catch{}try{r.visTimeline.removeCustomTime("multi-select-end")}catch{}try{r.visTimeline.addCustomTime(L(e[0]).toDate(),"multi-select-start")}catch{}try{r.visTimeline.addCustomTime(L(e[1]).toDate(),"multi-select-end")}catch{}setTimeout(()=>{Dn(r)})}class sO extends gt{static get properties(){return{unstyled:{type:Boolean,attribute:"unstyled"}}}#e=null;#r=!1;constructor(){super(),this.unstyled=!1}get visTimeline(){return this.#e}set visTimeline(r){this.#e=r}set loading(r){this.#r=r,this.requestUpdate()}get loading(){return this.#r}getContainer(){return this.renderRoot.querySelector("#timeline")}getViewRange(){return this.#e.getWindow()}setDateRange(r){oO(r,this)}initTimeline(){setTimeout(()=>aO(this))}render(){return ee`
      <style>
        ${vt}
        ${P1}
        ${!this.unstyled&&Vt}
        ${eO}
      </style>
      <div class="timeline-wrapper">
        <div id="timeline"></div>
        ${Ur(this.loading,()=>ee`
            <div class="load-wrapper-container">
              <div class="load-wrapper">
                <div class="shimmer"></div>
              </div>
            </div>
          `)}
      </div>
    `}}customElements.define("eox-timecontrol-timeline",sO);const g_=`
.timelapse-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
}
.timelapse-component i.icon,
.export-btn i.icon {
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
}
.setting-menu-content-value .field.border {
  margin: 0;
  padding: 0;
  margin-block-start: 0 !important;
}
.setting-menu-header {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.setting-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}
.setting-btn-container {
  position: relative;
}
.setting-menu-content {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.setting-menu-content-value {
  flex-grow: 1;
  justify-content: end;
  align-items: center;
  display: flex;
  gap: 10px;
}
.setting-menu-content-value .field.border {
  margin: 0;
  padding: 0;
}
.setting-menu-content-value input {
  width: 50px;
  text-align: center;
  padding: 0 5px !important;
}
.setting-menu-content-value input#setting-date-range {
  width: 210px;
}
.setting-menu-content span {
  font-weight: 300;
}
.timecontrol-export {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  border-radius: 6px;
}
.timecontrol-export-overlay {
  background: #00000091;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
}
.timecontrol-export-container {
  width: 90%;
  background: white;
  margin: 0 auto;
  border-radius: 6px;
}

@media (min-width: 1300px) and (max-width: 1440px) {
  .timecontrol-export-container {
    width: 1280px;
  }
}
@media (min-width: 1441px) and (max-width: 1600px) {
  .timecontrol-export-container {
    width: 1350px;
  }
}
@media (min-width: 1601px) and (max-width: 1900px) {
  .timecontrol-export-container {
    width: 1500px;
  }
}
@media (min-width: 1901px) {
  .timecontrol-export-container {
    width: 1650px;
  }
}
.timecontrol-export-content {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.map-view {
  position: relative;
  width: 100%;
  border-radius: 6px;
  flex-grow: 1;
}
.map-view-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 6px;
  aspect-ratio: 16 / 9;
}
.export-images {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 10px;
  align-items: center;
  padding: 0px 2rem;
  aspect-ratio: 1;
}
.export-images img {
  width: 200px;
  height: 100px;
  object-fit: cover;
}
.export-images div {
  cursor: pointer;
}
.export-images span {
  position: absolute;
  top: 2px;
  right: 2px;
  padding: 0px 4px;
  background: white;
  font-weight: 500;
  font-size: 0.75rem;
  z-index: 9;
  border-radius: 2px;
}
.timecontrol-export-play-pause {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: white;
  font-size: 3rem;
  font-weight: 800;
  width: 100%;
  cursor: pointer;
  background: #0000001a;
  aspect-ratio: 16 / 9;
}
.timecontrol-export-play-pause span {
  padding: 1.5rem;
  background: #02020287;
  border-radius: 50%;
  font-size: 0px;
}
.timecontrol-export-play-pause span  i {
  width: 2.5rem !important;
  height: 2.5rem !important;  
}
.export-images div.selected-preview img {
  border: 3px solid var(--primary);
}
.export-images div.selected-preview {
  position: relative;
}
.export-images div.selected-preview::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  opacity: 0.5;
  border-radius: 6px;
}
.timecontrol-wrapper {
  position: relative;
}
.selected-map {
  z-index: 1;
}
.timecontrol-export-footer {
  padding: 1rem;
  background: var(--inverse-on-surface);
  display: flex;
  align-items: center;
  width: 100%;
}
.load-wrapper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.load-wrapper,
.loader-image {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(211,211,211);
  z-index: 44;
  overflow: hidden;
}
.shimmer,
.shimmer-image {
  position: absolute;
  left: -45%;
  height: 100%;
  width: 45%;
  background-image: linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -moz-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -webkit-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  animation: loading 1s infinite;
  z-index: 45;
}
.loader-image {
  width: 200px;
  height: 100px;
}

@keyframes loading {
  0%{
    left: -45%;
  }
  100%{
    left: 100%;
  }
}
.export-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk5OTggMTAuMDAwMVYxMi4wMDAxSDMuOTk5ODRWMTAuMDAwMUgyLjY2NjVWMTIuMDAwMUMyLjY2NjUgMTIuNzMzNCAzLjI2NjUgMTMuMzMzNCAzLjk5OTg0IDEzLjMzMzRIMTEuOTk5OEMxMi43MzMyIDEzLjMzMzQgMTMuMzMzMiAxMi43MzM0IDEzLjMzMzIgMTIuMDAwMVYxMC4wMDAxSDExLjk5OThaTTExLjMzMzIgNy4zMzM0MUwxMC4zOTMyIDYuMzkzNDFMOC42NjY1IDguMTEzNDFWMi42NjY3NUg3LjMzMzE3VjguMTEzNDFMNS42MDY1IDYuMzkzNDFMNC42NjY1IDcuMzMzNDFMNy45OTk4NCAxMC42NjY3TDExLjMzMzIgNy4zMzM0MVoiIGZpbGw9IiMwMDA2MEEiLz4KPC9zdmc+Cg==);
}
.export-icon-loading {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: none;
  position: relative;
  display: flex;
}
.export-icon-loading::after {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  margin: 1px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: var(--primary);
  border-left-color: var(--primary);
  animation: export-spin 0.9s linear infinite;
  box-sizing: border-box;
}
@keyframes export-spin {
  100% {
    transform: rotate(360deg);
  }
}
.calendar-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgMi4wMDAwOEgxMi42NjY2VjAuNjY2NzQ4SDExLjMzMzNWMi4wMDAwOEg0LjY2NjU5VjAuNjY2NzQ4SDMuMzMzMjVWMi4wMDAwOEgyLjY2NjU5QzEuOTMzMjUgMi4wMDAwOCAxLjMzMzI1IDIuNjAwMDggMS4zMzMyNSAzLjMzMzQxVjE0LjAwMDFDMS4zMzMyNSAxNC43MzM0IDEuOTMzMjUgMTUuMzMzNCAyLjY2NjU5IDE1LjMzMzRIMTMuMzMzM0MxNC4wNjY2IDE1LjMzMzQgMTQuNjY2NiAxNC43MzM0IDE0LjY2NjYgMTQuMDAwMVYzLjMzMzQxQzE0LjY2NjYgMi42MDAwOCAxNC4wNjY2IDIuMDAwMDggMTMuMzMzMyAyLjAwMDA4Wk0xMy4zMzMzIDE0LjAwMDFIMi42NjY1OVY2LjY2Njc1SDEzLjMzMzNWMTQuMDAwMVpNMTMuMzMzMyA1LjMzMzQxSDIuNjY2NTlWMy4zMzM0MUgxMy4zMzMzVjUuMzMzNDFaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K);
  padding-right: 10px;
}
.play-icon {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBNSVQuIE1hZGUgYnkgdm13YXJlOiBodHRwczovL2dpdGh1Yi5jb20vdm13YXJlL2NsYXJpdHktYXNzZXRzIC0tPgo8c3ZnIGZpbGw9IiNmZmZmIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPnBsYXktc29saWQ8L3RpdGxlPgogICAgPHBhdGggY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMSIgZD0iTTMyLjE2LDE2LjA4LDguOTQsNC40N0EyLjA3LDIuMDcsMCwwLDAsNiw2LjMyVjI5LjUzYTIuMDYsMi4wNiwwLDAsMCwzLDEuODVMMzIuMTYsMTkuNzdhMi4wNywyLjA3LDAsMCwwLDAtMy43WiI+PC9wYXRoPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsLW9wYWNpdHk9IjAiLz4KPC9zdmc+)
}
.pause-icon {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBQRC4gTWFkZSBieSBNYXJ5IEFrdmVvOiBodHRwczovL21hcnlha3Zlby5jb20vIC0tPgo8c3ZnIGZpbGw9IiNmZmZmZmYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9InBhdXNlIiBkYXRhLW5hbWU9IkZsYXQgQ29sb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9Imljb24gZmxhdC1jb2xvciI+PHBhdGggaWQ9InByaW1hcnkiIGQ9Ik0xOSw0VjIwYTIsMiwwLDAsMS0yLDJIMTVhMiwyLDAsMCwxLTItMlY0YTIsMiwwLDAsMSwyLTJoMkEyLDIsMCwwLDEsMTksNFpNOSwySDdBMiwyLDAsMCwwLDUsNFYyMGEyLDIsMCwwLDAsMiwySDlhMiwyLDAsMCwwLDItMlY0QTIsMiwwLDAsMCw5LDJaIj48L3BhdGg+PC9zdmc+)
}
`;L.extend(hr);L.extend(mr);function uO(e){const r=L(e[0]),t=L(e[1]);return r.isBefore(t)?[r,t]:[t,r]}function cO(e){return e.date||e.start||null}function lO(e,r){const n=e.getLayers().getArray().find(a=>a.get("id")===r),i=n&&typeof n.getLayers=="function"?null:n?.getSource?.();return{layer:n,source:i}}function fO(e){const r=e.getEOxTimeControl(),t=r.selectedDateRange;if(!t||t.length<2)return null;const[n,i]=uO(t),o=r.items.get().filter(d=>{const p=cO(d);if(!p)return!1;const h=L(p);return(h.isSame(n,"day")||h.isAfter(n,"day"))&&(h.isSame(i,"day")||h.isBefore(i,"day"))}),u=Pr(o,"group"),c=Object.keys(u).reduce((d,p)=>{const{layer:h,source:m}=lO(r.eoxMap.map,p);return{...d,[p]:{layer:h,source:m}}},{}),f=r.querySelector("eox-itemfilter");return o.length>0?{selectedRangeItems:Pr(o,"date"),filters:f?.filters??[],instances:c,eoxMapConfig:{layers:r.eoxMap.layers,center:r.eoxMap.map.getView().getCenter(),zoom:r.eoxMap.map.getView().getZoom()}}:null}L.extend(E_);L.extend(I_);L.extend(T_);class dO extends gt{static get properties(){return{unstyled:{type:Boolean,attribute:"unstyled"},speed:{type:Number,attribute:"speed"},format:{type:String,attribute:"format"}}}#e=null;#r=null;#t=null;#n=!1;constructor(){super(),this.unstyled=!1,this.visTimeline=null,this.speed=1,this.format="gif"}get exportConfig(){return this.#e}set exportConfig(r){this.#e=r}get timelapseComponent(){return this.#t}setDateRange(r){this.#r=r,this.requestUpdate()}getContainer(){return this.renderRoot.querySelector("#timeline")}handleExportClose(){this.exportConfig=null,this.#n=!1,this.#t&&(this.#t.remove(),this.#t=null),this.requestUpdate()}export(){this.#n=!0,this.timelapseComponent.querySelector(".export-btn i").classList.remove("export-icon"),this.timelapseComponent.querySelector(".export-btn i").classList.add("export-icon-loading");const r=()=>{this.#n=!1,this.timelapseComponent.querySelector(".export-btn i").classList.add("export-icon"),this.timelapseComponent.querySelector(".export-btn i").classList.remove("export-icon-loading"),this.requestUpdate()};GR(this.exportConfig.mapLayers,this.format,this.speed,r,this)}handleSelectedPreview(r){this.exportConfig.selectedPreview=r;const t=this.timelapseComponent.querySelectorAll(".map-view-item");t.forEach(i=>{i.classList.remove("selected-map")}),t[r]?.classList.add("selected-map");const n=this.timelapseComponent.querySelector(".export-images").children;Array.from(n).forEach(i=>{i.classList.remove("selected-preview")}),n[r]?.classList.add("selected-preview"),this.requestUpdate()}getEOxTimeControl(){return this.closest("eox-timecontrol")}async generateExport(r){r&&r.mapLayers&&r.mapLayers.length&&(this.exportConfig={...r,selectedPreview:0},this.#t=document.createElement("div"),this.#t.classList.add("timelapse-component"),S_(ee`
          <style>
            ${vt}
            ${!this.unstyled&&Vt}
            ${g_}
          </style>
          <div class="timecontrol-export">
            <div
              @click=${()=>this.handleExportClose()}
              class="timecontrol-export-overlay"
            ></div>
            <div class="timecontrol-export-container">
              <div class="timecontrol-export-content">
                ${Ur(this.exportConfig&&this.exportConfig.mapLayers?.length,()=>ee`
                    <div class="export-images">
                      ${Kf(this.exportConfig.mapLayers,(t,n)=>t.img?ee`<div
                              @click=${()=>this.handleSelectedPreview(n)}
                              class=${this.exportConfig.selectedPreview===n?"selected-preview":""}
                            >
                              <img
                                src=${t.img}
                                alt="Exported map ${n+1}"
                              />
                              ${Ur(t.date,()=>ee`<span
                                    >${L(t.date).format("MMM DD, 'YY")}</span
                                  >`)}
                            </div>`:ee`<div class="loader-image">
                              <div class="shimmer-image"></div>
                            </div>`)}
                    </div>
                  `)}
                <div class="map-view">
                  <div
                    @click=${()=>this.handlePlayPause()}
                    class="timecontrol-export-play-pause"
                  >
                    <span>
                      <i
                        class="icon ${this.exportConfig.play?"pause":"play"}-icon"
                      ></i>
                    </span>
                  </div>
                  ${Ur(this.exportConfig&&this.exportConfig.mapLayers?.length,()=>ee`
                      ${Kf(this.exportConfig.mapLayers,(t,n)=>ee`
                          <eox-map
                            class="map-view-item ${this.exportConfig.selectedPreview===n?"selected-map":""}"
                            data-index=${n}
                            .layers=${t.layers}
                            .center=${t.center||this.getEOxTimeControl().eoxMap.map.getView().getCenter()}
                            .zoom=${t.zoom||this.getEOxTimeControl().eoxMap.map.getView().getZoom()}
                            prevent-scroll
                          ></eox-map>
                        `)}
                    `)}
                </div>
              </div>
              <div class="timecontrol-export-footer flex-center">
                <div class="setting-menu">
                  <div class="setting-menu-content">
                    <span>Speed</span>
                    <div class="setting-menu-content-value">
                      <span>(frames/sec)</span>
                      <div class="field border small fill">
                        <input
                          value=${this.speed}
                          min="1"
                          max="5"
                          @change=${t=>this.speed=t.target.value}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="setting-menu-content">
                    <span>Format</span>
                    <div class="setting-menu-content-value">
                      <div class="field border fill small">
                        <select
                          value=${this.format}
                          @change=${t=>this.format=t.target.value}
                        >
                          <option value="gif">GIF</option>
                          <option value="mp4">MP4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  @click=${()=>this.export()}
                  class="export-btn border small flex-center"
                >
                  <i class="icon export-icon"></i><span>Export</span>
                </button>
              </div>
            </div>
          </div>
        `,this.#t),document.body.appendChild(this.#t),setTimeout(()=>{VR(this)})),this.#n=!1,this.requestUpdate()}handlePlayPause(){const r=this.timelapseComponent.querySelector(".timecontrol-export-play-pause span i");if(this.exportConfig.play)r.classList.add("play-icon"),r.classList.remove("pause-icon"),this.exportConfig.play=!1;else{r.classList.add("pause-icon"),r.classList.remove("play-icon"),this.exportConfig.play=!0;const t=n=>{this.exportConfig.play&&(n||(this.exportConfig.selectedPreview+1!==this.exportConfig.mapLayers?.length?this.handleSelectedPreview(this.exportConfig.selectedPreview+1):this.handleSelectedPreview(0)),setTimeout(t,1e3/this.speed))};t(!0)}this.requestUpdate()}handleExport(){const r=fO(this);if(r){if(this.getEOxTimeControl().externalMapRendering)this.dispatchEvent(new CustomEvent("export",{detail:{...r,generate:async t=>await this.generateExport(t)}}));else{const t=[];for(const n in r.selectedRangeItems){const i=r.selectedRangeItems[n],a=[];for(const o in i){let u=r.eoxMapConfig.layers.find(c=>c.properties.id===i[o].group);u.source.params[i[o].property]=i[o].date,a.push(u)}a.push(r.eoxMapConfig.layers[0]),t.push({layers:a,center:r.eoxMapConfig.center,zoom:r.eoxMapConfig.zoom})}this.generateExport({mapLayers:t})}this.#n=!0,this.requestUpdate()}}disconnectedCallback(){super.disconnectedCallback(),this.#t&&(this.#t.remove(),this.#t=null)}render(){return ee`
      <style>
        ${vt}
        ${!this.unstyled&&Vt}
        ${g_}
      </style>
      <button
        ?disabled=${this.#r?.length!==2}
        @click=${()=>this.handleExport()}
        class="export-btn border small flex-center"
      >
        <i
          class="icon ${this.#n?"export-icon-loading":"export-icon"}"
        ></i
        ><span>Timelapse</span>
      </button>
    `}}customElements.define("eox-timecontrol-timelapse",dO);const vO=`
  .date-range-slider-wrapper {
    margin: 16px 0px 0px 0px;
    position: relative;
  }

  .custom-marks-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 8px;
    pointer-events: none;
  }

  :host {
    --track-bg: #cfd4dd;
  }

  /* Base track */
  tc-range-slider {
    --slider-bg: var(--track-bg);
    --slider-height: 8px;
    --slider-radius: 999px;
    --range-bg: var(--primary);
    --pointer-width: 18px;
    --pointer-height: 18px;
    --pointer-bg: var(--primary);
    --pointer-border: none;
    --pointer-shadow: none;
    --pointer-radius: 50%;
    display: block;
    width: 100%;
    position: relative;
    padding-bottom: 40px;
  }

  /* Custom marks */
  .custom-mark {
    position: absolute;
    pointer-events: none;
    transform: translateX(-50%);
  }

  .custom-mark-year {
    height: 12px;
    width: 2px;
    background-color: var(--mark-color, #666);
    top: 0;
  }

  .custom-mark-empty {
    height: 4px;
    width: 1px;
    background-color: var(--mark-color, #ccc);
    top: 10px;
  }

  .custom-mark-label {
    position: absolute;
    font-size: 11px;
    white-space: nowrap;
    pointer-events: none;
    left: 50%;
    transform: translateX(-50%);
    /* Prevent text cut off at edges */
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Show full first/last label within slider bounds */
  .custom-mark:first-child .custom-mark-label {
    left: 0;
    transform: translateX(0);
    text-align: left;
    max-width: 70px;
  }
  .custom-mark:last-child .custom-mark-label {
    left: 100%;
    transform: translateX(-100%);
    text-align: right;
    max-width: 70px;
  }

  .custom-mark-year-label {
    color: var(--mark-text-color, #666);
    top: 16px;
  }

  /* Custom tooltips */
  .custom-tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
  }

  .custom-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.8);
  }
`;L.extend(hr);L.extend(mr);class pO extends gt{static get properties(){return{unstyled:{type:Boolean,attribute:"unstyled"}}}#e=null;#r=null;#t=null;#n=[];#a=null;constructor(){super(),this.unstyled=!1}getSliderInstance(){return this.renderRoot.querySelector("tc-range-slider")}getEOxTimeControl(){return this.closest("eox-timecontrol")}#o(){if(!this.#e||this.#e.length===0)return[];const r=[],t=new Set,n=[];this.#e.forEach((i,a)=>{const u=L(i).year(),c=this.#e.length===1?0:a/(this.#e.length-1)*100;t.has(u)||(t.add(u),n.push({type:"year",position:c,label:u.toString(),date:i}))}),n.sort((i,a)=>i.position-a.position);for(let i=0;i<n.length;i++){r.push(n[i]);let a=i===n.length-1,o=n[i],u=100,c=null;a||(c=n[i+1],u=c.position);const f=u-o.position;if(f>4){const d=Math.max(1,Math.floor(f/3)),p=.8,h=f/(d+1);for(let m=1;m<=d;m++){const g=o.position+h*m,_=g-o.position,T=u-g;_>p&&T>p&&r.push({type:"empty",position:g})}}}return r.sort((i,a)=>i.position-a.position)}setDateRange(r,t){this.#r=r;const n=this.getSliderInstance();if(t&&t.length&&(this.#e=Object.keys(Pr(t,"utc")).sort((i,a)=>L(i).diff(L(a),"day"))),this.#e&&this.#r){const i=L(this.#r[0]),a=L(this.#r[1]),o=this.#e.filter(u=>{const c=L(u);return(c.isAfter(i)||c.isSame(i,"day"))&&(c.isBefore(a)||c.isSame(a,"day"))});this.#t=o}n&&(n.setAttribute("data",this.#e.join(",")),n.setAttribute("value1",this.#t[0])),this.#n=this.#o(),this.requestUpdate()}firstUpdated(){const r=this.getSliderInstance();r&&window.ResizeObserver&&(this.#a=new ResizeObserver(()=>{this.#e&&this.#e.length>0&&(this.#n=this.#o(),this.requestUpdate())}),this.#a.observe(r))}disconnectedCallback(){this.#a&&(this.#a.disconnect(),this.#a=null),super.disconnectedCallback()}handleChange(r){const t=this.getEOxTimeControl(),n=L(r.detail.value1).format(),i=L(r.detail.value1).endOf("day").format();t.dateChange([n,i],t)}#i(){return!this.#n||this.#n.length===0?ee``:ee`
      <div class="custom-marks-container">
        ${this.#n.map(r=>ee`
            <div
              class="custom-mark custom-mark-${r.type}"
              style="left: ${r.position}%"
            >
              ${r.type==="year"&&r.label?ee`
                    <div
                      class="custom-mark-label custom-mark-${r.type}-label"
                    >
                      ${r.label}
                    </div>
                  `:""}
            </div>
          `)}
      </div>
    `}render(){return ee`
      <style>
        ${vt}
        ${!this.unstyled&&Vt}
        ${vO}
      </style>
      <div class="date-range-slider-wrapper">
        <tc-range-slider
          @change="${r=>this.handleChange(r)}"
        ></tc-range-slider>
        ${this.#i()}
      </div>
    `}}customElements.define("eox-timecontrol-slider",pO);L.extend(hr);L.extend(mr);let b_=!1;function hO(e,r){const t=typeof e.for=="object"?e.for:C1(e.for),n=e.getTimeControlTimeline(),i=e.getTimeControlPicker();if(n&&n.addEventListener("update:view",()=>r(e)),i&&i.addEventListener("update:view",()=>r(e)),t||(e.externalMapRendering=!0),t||e.controlValues.length){const a=t;e.eoxMap=a;const o=a?a.getFlatLayersArray(a.map.getLayers().getArray()):[];let u=!e.initDate;const c=()=>{const f=a?a.getFlatLayersArray(a.map.getLayers().getArray()):[],d=[];if(f.length||e.controlValues.length){const p=e.controlValues.length?e.controlValues:f;for(const h of p){const m=e.controlValues.length?h:h.getProperties();if(m&&m.timeControlValues&&Array.isArray(m.timeControlValues)){const g=m.timeControlValues.map(_=>({..._,date:L(_.date).format().split("T")[0],utc:L(_.date).utc().format(),local:L(_.date).format(),originalDate:_.date})).sort((_,T)=>new Date(_.date)-new Date(T.date));d.push({layer:m[e.layerIdKey],name:m[e.titleKey],property:m.timeControlProperty||"dummy",values:g,layerInstance:e.eoxMap?h:null}),e.eoxMap&&h.on("change:timeControlValues",()=>c())}}}if(!M1(e.sliderValues,d)&&(e.sliderValues=d,e.sliderValues.length)){h_(e,["eox-timecontrol-timeline"],{loading:!0});const p=new Ei([]),h=new Ei([]),m=e.querySelector("eox-timecontrol-timeline");PR(e.sliderValues,p,h,m),e.groups=p,e.items=h,m&&m.initTimeline(),h_(e,["eox-timecontrol-timeline"],{loading:!1});const g=YR(e.initDate),_=e.items.get();if(_&&_.length){const T=L(_[_.length-1].utc),x=g||[T.startOf("day").utc().format(),T.endOf("day").utc().format()],w=e.querySelector("eox-timecontrol-picker");setTimeout(()=>{m&&m.visTimeline.setOptions({...m.visTimeline.setOptions,start:L(x[0]).subtract(30,"day").format(yt),end:L(x[0]).add(30,"day").format(yt)}),e.dateChange(x,e);const A=e.querySelector("eox-itemfilter");if(A){A.items=e.items.get().map(O=>({key:O.id,title:O.name||O.title||String(O.id),...O}));const E=O=>{e.filter(O,e)};b_||(A.addEventListener("filter",E),b_=!0)}}),w&&w.initCalendar({selectedDateRange:x})}else u||e.dateChange(g,e);u=!0}e.requestUpdate()};(o.length>0||e.controlValues.length)&&c(),a&&(a.map.getLayers().on("add",()=>c()),a.map.getLayers().on("remove",()=>c()),a.map.on("change",()=>{c()}))}}function mO(e,r){AR(e,r.eoxMap,r)}function yO(e,r){const t=r.querySelector("eox-itemfilter");if(!t)return;const n=r.querySelector("eox-timecontrol-timeline");if(n&&n.visTimeline){n.renderRoot.querySelectorAll(".vis-item.milestone.vis-point").forEach(o=>{o.classList.remove("vis-filtered"),o.classList.remove("vis-not-filtered")});const a=e?.detail?.results||t.results;if(r.items.get().length!=a.length){for(const u of a){const c=n.renderRoot.querySelector(`.vis-item.milestone.vis-point.item-${u.id}`);c&&c.classList.add("vis-filtered")}n.renderRoot.querySelectorAll(".vis-item.milestone.vis-point:not(.vis-filtered)").forEach(u=>{u.classList.add("vis-not-filtered")})}}}function Rn(e,r){return e.querySelector(r)}class gO extends gt{static get properties(){return{for:{type:String},unstyled:{type:Boolean},titleKey:{type:String,attribute:"title-key"},layerIdKey:{type:String,attribute:"layer-id-key"},externalMapRendering:{type:Boolean,attribute:"external-map-rendering"},selectedDateRange:{type:Array,attribute:void 0},controlValues:{type:Array,attribute:!1},initDate:{type:Array,attribute:!1}}}#e=null;#r=new Ei([]);#t=new Ei([]);#n=[];constructor(){super(),this.unstyled=!1,this.selectedDateRange=null,this.titleKey="name",this.layerIdKey="id",this.externalMapRendering=!1,this.for=void 0,this.controlValues=[],this.initDate=null}get sliderValues(){return this.#n}set sliderValues(r){this.#n=r}get eoxMap(){return this.#e}set eoxMap(r){this.#e=r}get groups(){return this.#r}set groups(r){this.#r=r}get items(){return this.#t}set items(r){this.#t=r}getContainer(){return this.renderRoot.querySelector("#timeslider")}dateChange=mO;getTimeControlDate(){return Rn(this,"eox-timecontrol-date")}getTimeControlSlider(){return Rn(this,"eox-timecontrol-slider")}getTimeControlTimeline(){return Rn(this,"eox-timecontrol-timeline")}getTimeControlTimelapse(){return Rn(this,"eox-timecontrol-timelapse")}getTimeControlPicker(){return Rn(this,"eox-timecontrol-picker")}#a(r){const t=r.getTimeControlTimeline(),n=r.getTimeControlPicker();r.dispatchEvent(new CustomEvent("update:view",{detail:{...t?{timeline:[t.getViewRange().start,t.getViewRange().end]}:{},...n?{picker:[n.getViewRange().start,n.getViewRange().end]}:{}},bubbles:!0,composed:!0}))}firstUpdated(){hO(this,this.#a),this.requestUpdate()}filter=yO;render(){return ee`
      <style>
        ${vt}
        ${!this.unstyled&&Vt}
      </style>
      <main>
        <slot></slot>
      </main>
    `}}customElements.define("eox-timecontrol",gO);function bO(e,r){const t=r==="bands"?e.items?.enum:e.enum||[],n=r==="bands"?e.items?.options?.colors:e.options?.colors||[];return n&&n.length===t.length?n:t.map(()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"))}function _O(e,r,t){const n=r.indexOf(e);return n!==-1?t[n]:"#000000"}function VS(e,r){const t=document.createElement("div");return t.dataset.band=e,t.textContent=r,t.draggable=!0,t.ondragstart=n=>{n.dataTransfer?.setData("band",e)},t}function YS(e,r,t){r.forEach((n,i)=>{const a=t[i],o=VS(n,a);e.control?.appendChild(o)})}function HS(e,r){const t=document.createElement("style");return t.innerHTML=`
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
    ${e.map(n=>`[data-band="${n}"] { background: ${_O(n,e,r)}; color: black; }`).join(`
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
  `,t}function XS(e,r){const t=document.createElement("div");return t.dataset.slot=e,t.ondrop=r,t.ondragover=n=>n.preventDefault(),t}function pf(e,r,t){const n=e.querySelector("[data-band]");n&&n.remove();const i=VS(r,t);e.appendChild(i)}function SO(e,r,t,n){const i=HS(t,r);e.control?.appendChild(i),YS(e,t,n),e.control?.appendChild(document.createElement("hr")),wO(e,t,n)}function wO(e,r,t){const n=document.createElement("div");n.classList.add("slots-container"),["R","G","B"].forEach((i,a)=>{const u=XS(i,c=>{c.preventDefault();const f=c.dataTransfer?.getData("band");if(!f)return;const d=r.indexOf(f),p=t[d]||f;pf(u,f,p);const h=e.getValue()||[];h[a]=f,e.setValue(h),e.onChange(!0)});EO(u),n.appendChild(u),setTimeout(()=>{const c=e.getValue();if(c?.[a]){const f=c[a],d=r.indexOf(f),p=t[d]||f;f&&pf(u,f,p)}})}),e.control?.appendChild(n)}function EO(e){switch(e.style.border="2px dashed",e.dataset.slot){case"R":{e.style.borderColor="#F88",e.style.background="#FEE";break}case"G":{e.style.borderColor="#8F8",e.style.background="#EFE";break}case"B":{e.style.borderColor="#88F",e.style.background="#EEF";break}}}const ZS=/\{\{([^}]+)\}\}/g;function IO(e,r,t,n){const i=e.schema.formulaTemplate||"{{A}}",a=HS(t,r);e.control?.appendChild(a),YS(e,t,n),e.control?.appendChild(document.createElement("hr")),xO(e,i,t,n)}function TO(e){const r=e.schema.formulaTemplate||"{{A}}",t=e.variableValues||{};return r.replace(ZS,(n,i)=>t[i.trim()]||n)}function xO(e,r,t,n){const i=document.createElement("div");i.classList.add("slots-container"),e.variableSlots={},r.split(/(\{\{[^}]+\}\})/).forEach(o=>{if(!o)return;if(!o.match(ZS)){if(o=o.trim(),o){const f=document.createElement("span");f.classList.add("formula-text"),f.textContent=o,i.appendChild(f)}return}const u=o.replace(/[{}]/g,"").trim(),c=XS(u,f=>{f.preventDefault();const d=f.dataTransfer?.getData("band");if(!d)return;const p=t.indexOf(d),h=n[p]||d;e.variableValues[u]=d,JS(e,u,d,h),e.value=TO(e),e.onChange(!0)});i.appendChild(c),e.variableSlots[u]||(e.variableSlots[u]=[]),e.variableSlots[u].push(c)}),e.control?.appendChild(i),setTimeout(()=>{RO(e)})}function RO(e){e.variableValues&&e.variableSlots&&Object.keys(e.variableValues).forEach(r=>{const t=e.variableValues[r],n=e.bands||e.schema.enum||[],i=e.bandTitles||e.schema.options?.enum_titles||n,a=n.indexOf(t),o=i[a]||t;JS(e,r,t,o)})}function JS(e,r,t,n){e.variableSlots&&e.variableSlots[r]&&e.variableSlots[r].forEach(i=>{pf(i,t,n)})}class __ extends $1{variableSlots={};variableValues={};bands=[];bandTitles=[];colors=[];build(){super.build();const r=this.schema.format||"bands";this.bands=r==="bands"?this.schema.items?.enum:this.schema.enum||[],this.bandTitles=r==="bands"?this.schema.items?.options?.enum_titles:this.schema.options.enum_titles||this.bands,this.colors=bO(this.schema,r),this.control=document.createElement("div"),this.control.classList.add("form-control"),r==="bands"?SO(this,this.colors,this.bands,this.bandTitles):r==="bands-arithmetic"&&IO(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",this.container?.appendChild(this.label),this.container?.appendChild(this.control)}}const OO=[{type:"array",format:"bands",func:__},{type:"string",format:"bands-arithmetic",func:__}],qO={class:"d-flex flex-column"},PO=["for",".customEditorInterfaces"],AO={key:0,class:"mt-2 mb-2"},DO={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:String||Boolean,default:"Layers"},cssVars:{type:Object}},async setup(e){let r,t;customElements.get("eox-layercontrol")||([r,t]=Ff(()=>Bf(()=>import("./main-CGrQ3bBX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),await r,t()),customElements.get("eox-jsonform")||([r,t]=Ff(()=>Bf(()=>import("./main-DuSPapQD.js"),__vite__mapDeps([12,1,2,13,9,14,15,16,8,17]))),await r,t());const n=e,i={tools:n.tools,style:n.cssVars},{selectedCompareStac:a,selectedStac:o}=e1(r1()),u=t1(()=>n.map==="second"?zf.value!==null&&a.value!==null:Gf.value!==null&&o.value!==null),c=n.map==="second"?n1:i1,f=n.map==="second"?zf:Gf,d=A1(null),p=async _=>{const{layer:T,datetime:x}=_.detail,w=await c1(c,T);let A=[];w&&(A=await w.updateLayerJson(x,T.get("id"),n.map));const E=A?.find(O=>O?.properties?.id==="AnalysisGroup")?.layers;E?.length&&(E?.forEach(O=>{O.properties.layerControlExpand=!0,O.properties.layerControlToolsExpand=!0}),f.value.layers=A)};let h;const m=_=>{clearTimeout(h),h=setTimeout(()=>{p(_)},500)},g=_=>{n.map==="second"?s1.value=_.detail.jsonformValue:u1.value=_.detail.jsonformValue};return(_,T)=>(Fa(),ja("span",qO,[u.value?(Fa(),ja("eox-layercontrol",a1({key:ka(f)},i,{for:ka(f),".customEditorInterfaces":ka(OO),"onDatetime:updated":m,toolsAsList:"true",ref_key:"eoxLayercontrol",ref:d,"on:layerConfig:change":g}),[o1(_.$slots,"layerstitle",{},()=>[Uf("div",null,[e.title?(Fa(),ja("p",AO,[Uf("strong",null,D1(e.title),1)])):kf("v-if",!0)])],!0)],48,PO)):kf("v-if",!0)]))}},YO=QS(DO,[["__scopeId","data-v-219e33f9"]]);export{YO as default};
