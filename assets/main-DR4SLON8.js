import{e as Qs,c as Zs,a as gt,A as Pt,b as S}from"./addCommonStyleSheet-xNxGAsM0.js";import{o as on}from"./map-Bv-shLAs.js";import{n as H}from"./when-CI7b_ccM.js";import{d as O}from"./dayjs.min-CKzvyRjS.js";import{_ as an}from"./index-C-dbsWzT.js";import{s as Qt,u as ki}from"./static-B8DuMHcj.js";import{c as to}from"./repeat-CMQfrIVb.js";import{o as Ye}from"./unsafe-html-DKRLx5lS.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import{o as eo}from"./orient2d-DArCjZZA.js";import{f as re,a as st,p as ge,m as no,l as be,i as io,d as ee,r as ro,b as Oi}from"./index-2GfG_t-c.js";import{bu as Dt,a8 as ar}from"./index-Blt6j4zJ.js";import"./directive-CwRn8Fwj.js";import"./directive-helpers-DyV73Z3p.js";const so=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  height: 100%;
  overflow: hidden;
}
details {
  width: 100%;
}
`;Zs();const pi=`
${Qs}
.field {
  margin-block-end: 0;
}
.field>:is(input,textarea,select) {
  width: 100%;
}
.field.small>:is(input,textarea,select) {
  font-size: 0.75rem;
}

:host, :root {
  --primary-color: var(--primary);
  --secondary-color: var(--secondary);
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--surface) 80%,
    transparent
  );
  --item-select-color: var(--surface-variant);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --_background-color: var(--background-color, var(--eox-background-color, transparent));
  --_padding: var(--padding, 0.5rem);
  --_padding-vertical: var(--padding-vertical, 0.25rem);
  --_list-padding: var(--list-padding, 2rem);
  --_text-transform: var(--text-transform, capitalize);
  --_form-flex-direction: var(--form-flex-direction, column);
  --_filter-display: var(--filter-display, block);
  background-color: var(--_background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--_form-flex-direction);
  margin-top: 0;
}
eox-itemfilter-container {
  min-width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  height: 100%;
}
eox-itemfilter-results {
  flex-grow: 1;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
eox-itemfilter-results button.chip {
  pointer-events: none;
}
.list li {
  padding: 0 var(--_padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--_text-transform);
}
.title.highlight-enabled {
  text-transform: inherit;
}
.subtitle {
  opacity: .7;
}
.image {
  object-fit: cover;
  overflow: hidden;
}
.title-container {
  display: flex;
  flex-direction: column;
}
eox-itemfilter-expandcontainer {
  max-height: 300px;
  width: 100%;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
}
form#itemfilter.inline eox-itemfilter-expandcontainer {
  max-height: none;
}
form#itemfilter.inline eox-itemfilter-expandcontainer > [data-type=filter] {
  height: auto;
  overflow: visible;
}
[data-type=filter] .title,
details summary {
  text-transform: var(--_text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--_padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
summary > * {
  pointer-events: all;
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--_list-padding) !important;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
#container-results {
  border-radius: none;
}
.no-results {
  padding-left: var(--_padding);
  padding-right: var(--_padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
}
eox-layout {
  padding: var(--_padding-vertical) var(--_padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
  transition: var(--card-transition);
  box-shadow: var(--card-box-shadow);
}
eox-layout-item:hover {
  transform: var(--card-hover-transform);
}
eox-layout-item > span {
  display: block;
  height: 100%;
}
eox-layout-item .image {
  width: 100%;
  height: 100%;
  transition: filter .3s ease-in-out;
  margin: 0;
}
eox-layout-item:hover .image {
  filter: brightness(.5);
}
eox-layout-item nav {
  height: 100%;
}
eox-layout-item .title-container {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    transparent
  );
  padding-top: 25px;
}
eox-layout-item .title {
  font-weight: bold;
  font-family: var(--card-title-font);
}
eox-layout-item .result-action {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ffffffbb;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
ul#results eox-layout-item.highlighted .result-action > * {
  filter: none;
}
section {
  position: relative;
  background-color: var(--_background-color);
}
nav.title-nav {
  padding-left: var(--_padding);
  padding-right: var(--_padding);
}
eox-itemfilter-range {
  display: block;
  margin-left: var(--_list-padding);
  padding-right: var(--_padding);
}
.range-wrapper {
  margin-left: var(--_list-padding);
  padding-right: var(--_padding);
}
tc-range-slider {
  width: 100%;
  --width: 100%;
}
.range-labels {
  display: flex;
  justify-content: space-between;
}
.range-before,
.range-after {
  font-size: x-small;
}

.inline-content {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 8px;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
  height: var(--inline-container-height, auto);
}
.inline-container {
  position: relative;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
-container-results::-webkit-scrollbar,
.inline-container::-webkit-scrollbar,
.inline-content::-webkit-scrollbar,
form#itemfilter > div::-webkit-scrollbar {
  inline-size: 0.4rem;
  block-size: 0.4rem;
}
-container-results::-webkit-scrollbar-thumb,
.inline-container::-webkit-scrollbar-thumb,
.inline-content::-webkit-scrollbar-thumb,
form#itemfilter > div::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 1rem;
  cursor: default;
}
.inline-container:is(:hover,:focus)::-webkit-scrollbar-thumb,
.inline-content:is(:hover,:focus)::-webkit-scrollbar-thumb,
form#itemfilter > div:is(:hover,:focus)::-webkit-scrollbar-thumb {
  background: var(--outline);
}
form#itemfilter > div::-webkit-scrollbar-thumb {
  background: transparent; 
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
}
.autocomplete-container .field input,
.text-container .field input {
  background: none !important;
  border-block-end-color: var(--outline);
  border-radius: 0 !important;
  box-shadow: none !important;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li,
.multiselect li,
eox-itemfilter-results li {
  border-radius: .5rem !important;
  display: flex;
  justify-content: space-between;
  min-block-size: 32px !important;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover,
details summary:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  background: var(--item-select-color);
}
mark.highlight {
  all: inherit;
  display: inline;
  background: yellow;
  color: black;
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
  max-width: 170px;
}
.select-overflow {
  max-height: calc(32px * var(--select-filter-max-items));
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
  align-items: center;
  height: var(--inline-container-height, auto);
}
.chip {
  white-space: nowrap;
  max-height: calc(var(--inline-container-height, auto) - .5rem);
}
.input-container.field {
  min-width: 10rem;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: #ba1a1a !important;
  font-size: x-small;
}
.row {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--_background-color);
}
`;class oo extends gt{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#t(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return S`
      <style>
        ${!this.unstyled&&pi}
      </style>

      ${H(this.filterObject.featured,()=>S`<slot name="filter"></slot>`,()=>S`<details
            @toggle="${this.#t}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||Pt}
          >
            <summary class="square">
              <nav class="responsive tiny-space">
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-right</title>
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </i>
                <span
                  class="title max"
                  style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
                >
                  ${this.filterObject.title||this.filterObject.key||"Filter"}
                </span>
                <slot name="reset-button"></slot>
              </nav>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}customElements.define("eox-itemfilter-expandcontainer",oo);function Ot(e){return Array.isArray?Array.isArray(e):cr(e)==="[object Array]"}function ao(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Zn(e){return e==null?"":ao(e)}function K(e){return typeof e=="string"}function Qe(e){return typeof e=="number"}function lo(e){return e===!0||e===!1||co(e)&&cr(e)=="[object Boolean]"}function lr(e){return typeof e=="object"}function co(e){return lr(e)&&e!==null}function tt(e){return e!=null}function Xe(e){return!e.trim().length}function cr(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const uo="Incorrect 'index' type",fo=e=>`Invalid value for key ${e}`,ho=e=>`Pattern length exceeds max of ${e}.`,po=e=>`Missing ${e} property in key`,go=e=>`Property 'weight' in key '${e}' must be a positive integer`,Ti=Object.prototype.hasOwnProperty;class mo{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(i=>{const r=ur(i);this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(i=>{i.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ur(e){let t=null,n=null,i=null,r=1,s=null;if(K(e)||Ot(e))i=e,t=Ii(e),n=ti(e);else{if(!Ti.call(e,"name"))throw new Error(po("name"));const o=e.name;if(i=o,Ti.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(go(o));t=Ii(o),n=ti(o),s=e.getFn}return{path:t,id:n,weight:r,src:i,getFn:s}}function Ii(e){return Ot(e)?e:e.split(".")}function ti(e){return Ot(e)?e.join("."):e}function yo(e,t){const n=[];let i=!1;const r=(s,o,l,c)=>{if(tt(s))if(!o[l])n.push(c!==void 0?{v:s,i:c}:s);else{const u=o[l],f=s[u];if(!tt(f))return;if(l===o.length-1&&(K(f)||Qe(f)||lo(f)||typeof f=="bigint"))n.push(c!==void 0?{v:Zn(f),i:c}:Zn(f));else if(Ot(f)){i=!0;for(let p=0,g=f.length;p<g;p+=1)r(f[p],o,l+1,p)}else o.length&&r(f,o,l+1,c)}};return r(e,K(t)?t.split("."):t,0),i?n:n[0]}const vo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},bo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},wo={location:0,threshold:.6,distance:100},xo={useExtendedSearch:!1,useTokenSearch:!1,getFn:yo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},E=Object.freeze({...bo,...vo,...wo,...xo}),_o=/[^ ]+/g;function Mo(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(r){const s=r.match(_o).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*e),l=parseFloat(Math.round(o*i)/i);return n.set(s,l),l},clear(){n.clear()}}}class gi{constructor({getFn:t=E.getFn,fieldNormWeight:n=E.fieldNormWeight}={}){this.norm=Mo(n,3),this.getFn=t,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,i)=>{this._keysMap[n.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,K(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();K(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,i=this.size();n<i;n+=1)this.records[n].i-=1}removeAll(t){for(let n=t.length-1;n>=0;n-=1)this.records.splice(t[n],1);for(let n=0,i=this.records.length;n<i;n+=1)this.records[n].i=n}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!tt(t)||Xe(t))return;const i={v:t,i:n,n:this.norm.get(t)};this.records.push(i)}_addObject(t,n){const i={i:n,$:{}};this.keys.forEach((r,s)=>{const o=r.getFn?r.getFn(t):this.getFn(t,r.path);if(tt(o)){if(Ot(o)){const l=[];for(let c=0,u=o.length;c<u;c+=1){const f=o[c];if(tt(f)){if(K(f)){if(!Xe(f)){const p={v:f,i:c,n:this.norm.get(f)};l.push(p)}}else if(tt(f.v)){const p=K(f.v)?f.v:Zn(f.v);if(!Xe(p)){const g={v:p,i:f.i,n:this.norm.get(p)};l.push(g)}}}}i.$[s]=l}else if(K(o)&&!Xe(o)){const l={v:o,n:this.norm.get(o)};i.$[s]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys.map(({getFn:t,...n})=>n),records:this.records}}}function fr(e,t,{getFn:n=E.getFn,fieldNormWeight:i=E.fieldNormWeight}={}){const r=new gi({getFn:n,fieldNormWeight:i});return r.setKeys(e.map(ur)),r.setSources(t),r.create(),r}function Ao(e,{getFn:t=E.getFn,fieldNormWeight:n=E.fieldNormWeight}={}){const{keys:i,records:r}=e,s=new gi({getFn:t,fieldNormWeight:n});return s.setKeys(i),s.setIndexRecords(r),s}function Co(e=[],t=E.minMatchCharLength){const n=[];let i=-1,r=-1,s=0;for(let o=e.length;s<o;s+=1){const l=e[s];l&&i===-1?i=s:!l&&i!==-1&&(r=s-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[s-1]&&s-i>=t&&n.push([i,s-1]),n}const Yt=32;function So(e,t,n,{location:i=E.location,distance:r=E.distance,threshold:s=E.threshold,findAllMatches:o=E.findAllMatches,minMatchCharLength:l=E.minMatchCharLength,includeMatches:c=E.includeMatches,ignoreLocation:u=E.ignoreLocation}={}){if(t.length>Yt)throw new Error(ho(Yt));const f=t.length,p=e.length,g=Math.max(0,Math.min(i,p));let d=s,v=g;const w=(N,z)=>{const Y=N/f;if(u)return Y;const vt=Math.abs(g-z);return r?Y+vt/r:vt?1:Y},_=l>1||c,C=_?Array(p):[];let B;for(;(B=e.indexOf(t,v))>-1;){const N=w(0,B);if(d=Math.min(N,d),v=B+f,_){let z=0;for(;z<f;)C[B+z]=1,z+=1}}v=-1;let $=[],D=1,P=f+p;const q=1<<f-1;for(let N=0;N<f;N+=1){let z=0,Y=P;for(;z<Y;)w(N,g+Y)<=d?z=Y:P=Y,Y=Math.floor((P-z)/2+z);P=Y;let vt=Math.max(1,g-Y+1);const It=o?p:Math.min(g+Y,p)+f,nt=Array(It+2);nt[It+1]=(1<<N)-1;for(let F=It;F>=vt;F-=1){const St=F-1,Vt=n[e[St]];if(_&&(C[St]=+!!Vt),nt[F]=(nt[F+1]<<1|1)&Vt,N&&(nt[F]|=($[F+1]|$[F])<<1|1|$[F+1]),nt[F]&q&&(D=w(N,St),D<=d)){if(d=D,v=St,v<=g)break;vt=Math.max(1,2*g-v)}}if(w(N+1,g)>d)break;$=nt}const U={isMatch:v>=0,score:Math.max(.001,D)};if(_){const N=Co(C,l);N.length?c&&(U.indices=N):U.isMatch=!1}return U}function Lo(e){const t={};for(let n=0,i=e.length;n<i;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<i-n-1}return t}function mi(e){if(e.length<=1)return e;e.sort((n,i)=>n[0]-i[0]||n[1]-i[1]);const t=[e[0]];for(let n=1,i=e.length;n<i;n+=1){const r=t[t.length-1],s=e[n];s[0]<=r[1]+1?r[1]=Math.max(r[1],s[1]):t.push(s)}return t}const hr={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Eo=new RegExp("["+Object.keys(hr).join("")+"]","g"),we=String.prototype.normalize?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Eo,t=>hr[t]):e=>e;class yi{constructor(t,{location:n=E.location,threshold:i=E.threshold,distance:r=E.distance,includeMatches:s=E.includeMatches,findAllMatches:o=E.findAllMatches,minMatchCharLength:l=E.minMatchCharLength,isCaseSensitive:c=E.isCaseSensitive,ignoreDiacritics:u=E.ignoreDiacritics,ignoreLocation:f=E.ignoreLocation}={}){if(this.options={location:n,threshold:i,distance:r,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:f},t=c?t:t.toLowerCase(),t=u?we(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const p=(d,v)=>{this.chunks.push({pattern:d,alphabet:Lo(d),startIndex:v})},g=this.pattern.length;if(g>Yt){let d=0;const v=g%Yt,w=g-v;for(;d<w;)p(this.pattern.substr(d,Yt),d),d+=Yt;if(v){const _=g-Yt;p(this.pattern.substr(_),_)}}else p(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:i,includeMatches:r}=this.options;if(t=n?t:t.toLowerCase(),t=i?we(t):t,this.pattern===t){const w={isMatch:!0,score:0};return r&&(w.indices=[[0,t.length-1]]),w}const{location:s,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options,p=[];let g=0,d=!1;this.chunks.forEach(({pattern:w,alphabet:_,startIndex:C})=>{const{isMatch:B,score:$,indices:D}=So(t,w,_,{location:s+C,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});B&&(d=!0),g+=$,B&&D&&p.push(...D)});const v={isMatch:d,score:d?g/this.chunks.length:1};return d&&r&&(v.indices=mi(p)),v}}class Tt{constructor(t){this.pattern=t}static isMultiMatch(t){return ji(t,this.multiRegex)}static isSingleMatch(t){return ji(t,this.singleRegex)}search(t){return{isMatch:!1,score:1}}}function ji(e,t){const n=e.match(t);return n?n[1]:null}class $o extends Tt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ro extends Tt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const i=t.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,t.length-1]}}}class Bo extends Tt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Do extends Tt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Po extends Tt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class ko extends Tt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class dr extends Tt{constructor(t,{location:n=E.location,threshold:i=E.threshold,distance:r=E.distance,includeMatches:s=E.includeMatches,findAllMatches:o=E.findAllMatches,minMatchCharLength:l=E.minMatchCharLength,isCaseSensitive:c=E.isCaseSensitive,ignoreDiacritics:u=E.ignoreDiacritics,ignoreLocation:f=E.ignoreLocation}={}){super(t),this._bitapSearch=new yi(t,{location:n,threshold:i,distance:r,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class pr extends Tt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,i;const r=[],s=this.pattern.length;for(;(i=t.indexOf(this.pattern,n))>-1;)n=i+s,r.push([i,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const ei=[$o,pr,Bo,Do,ko,Po,Ro,dr],Ni=ei.length,Oo="\0",To="|";function Io(e){const t=[],n=e.length;let i=0;for(;i<n;){for(;i<n&&e[i]===" ";)i++;if(i>=n)break;let r=i;for(;r<n&&e[r]!==" "&&e[r]!=='"';)r++;if(r<n&&e[r]==='"'){for(r++;r<n;){if(e[r]==='"'){const s=r+1;if(s>=n||e[s]===" "){r++;break}if(e[s]==="$"&&(s+1>=n||e[s+1]===" ")){r+=2;break}}r++}t.push(e.substring(i,r)),i=r}else{for(;r<n&&e[r]!==" ";)r++;t.push(e.substring(i,r)),i=r}}return t}function jo(e,t={}){return e.replace(/\\\|/g,Oo).split(To).map(i=>{const r=i.replace(/\u0000/g,"|"),s=Io(r.trim()).filter(l=>l&&!!l.trim()),o=[];for(let l=0,c=s.length;l<c;l+=1){const u=s[l];let f=!1,p=-1;for(;!f&&++p<Ni;){const g=ei[p],d=g.isMultiMatch(u);d&&(o.push(new g(d,t)),f=!0)}if(!f)for(p=-1;++p<Ni;){const g=ei[p],d=g.isSingleMatch(u);if(d){o.push(new g(d,t));break}}}return o})}const No=new Set([dr.type,pr.type]);class Fo{constructor(t,{isCaseSensitive:n=E.isCaseSensitive,ignoreDiacritics:i=E.ignoreDiacritics,includeMatches:r=E.includeMatches,minMatchCharLength:s=E.minMatchCharLength,ignoreLocation:o=E.ignoreLocation,findAllMatches:l=E.findAllMatches,location:c=E.location,threshold:u=E.threshold,distance:f=E.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:i,includeMatches:r,minMatchCharLength:s,findAllMatches:l,ignoreLocation:o,location:c,threshold:u,distance:f},t=n?t:t.toLowerCase(),t=i?we(t):t,this.pattern=t,this.query=jo(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:r,ignoreDiacritics:s}=this.options;t=r?t:t.toLowerCase(),t=s?we(t):t;let o=0;const l=[];let c=0,u=!1;for(let f=0,p=n.length;f<p;f+=1){const g=n[f];l.length=0,o=0,u=!1;for(let d=0,v=g.length;d<v;d+=1){const w=g[d],{isMatch:_,indices:C,score:B}=w.search(t);if(_){o+=1,c+=B;const $=w.constructor.type;$.startsWith("inverse")&&(u=!0),i&&(No.has($)?l.push(...C):l.push(C))}else{c=0,o=0,l.length=0,u=!1;break}}if(o){const d={isMatch:!0,score:c/o};return u&&(d.hasInverse=!0),i&&(d.indices=mi(l)),d}}return{isMatch:!1,score:1}}}const ni=[];function vi(...e){ni.push(...e)}function Ze(e,t){for(let n=0,i=ni.length;n<i;n+=1){const r=ni[n];if(r.condition(e,t))return new r(e,t)}return new yi(e,t)}const tn={AND:"$and",OR:"$or"},ii={PATH:"$path",PATTERN:"$val"},ri=e=>!!(e[tn.AND]||e[tn.OR]),Ho=e=>!!e[ii.PATH],qo=e=>!Ot(e)&&lr(e)&&!ri(e),Fi=e=>({[tn.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function gr(e,t,{auto:n=!0}={}){const i=r=>{if(K(r)){const c={keyId:null,pattern:r};return n&&(c.searcher=Ze(r,t)),c}const s=Object.keys(r),o=Ho(r);if(!o&&s.length>1&&!ri(r))return i(Fi(r));if(qo(r)){const c=o?r[ii.PATH]:s[0],u=o?r[ii.PATTERN]:r[c];if(!K(u))throw new Error(fo(c));const f={keyId:ti(c),pattern:u};return n&&(f.searcher=Ze(u,t)),f}const l={children:[],operator:s[0]};return s.forEach(c=>{const u=r[c];Ot(u)&&u.forEach(f=>{l.children.push(i(f))})}),l};return ri(e)||(e=Fi(e)),i(e)}function si(e,{ignoreFieldNorm:t=E.ignoreFieldNorm}){let n=1;return e.forEach(({key:i,norm:r,score:s})=>{const o=i?i.weight:null;n*=Math.pow(s===0&&o?Number.EPSILON:s,(o||1)*(t?1:r))}),n}function zo(e,{ignoreFieldNorm:t=E.ignoreFieldNorm}){e.forEach(n=>{n.score=si(n.matches,{ignoreFieldNorm:t})})}class Yo{constructor(t){this.limit=t,this.heap=[]}get size(){return this.heap.length}shouldInsert(t){return this.size<this.limit||t<this.heap[0].score}insert(t){this.size<this.limit?(this.heap.push(t),this._bubbleUp(this.size-1)):t.score<this.heap[0].score&&(this.heap[0]=t,this._sinkDown(0))}extractSorted(t){return this.heap.sort(t)}_bubbleUp(t){const n=this.heap;for(;t>0;){const i=t-1>>1;if(n[t].score<=n[i].score)break;const r=n[t];n[t]=n[i],n[i]=r,t=i}}_sinkDown(t){const n=this.heap,i=n.length;let r=t;do{t=r;const s=2*t+1,o=2*t+2;if(s<i&&n[s].score>n[r].score&&(r=s),o<i&&n[o].score>n[r].score&&(r=o),r!==t){const l=n[t];n[t]=n[r],n[r]=l}}while(r!==t)}}function Xo(e,t){const n=e.matches;t.matches=[],tt(n)&&n.forEach(i=>{if(!tt(i.indices)||!i.indices.length)return;const{indices:r,value:s}=i,o={indices:r,value:s};i.key&&(o.key=i.key.src),i.idx>-1&&(o.refIndex=i.idx),t.matches.push(o)})}function Wo(e,t){t.score=e.score}function Uo(e,t,{includeMatches:n=E.includeMatches,includeScore:i=E.includeScore}={}){const r=[];return n&&r.push(Xo),i&&r.push(Wo),e.map(s=>{const{idx:o}=s,l={item:t[o],refIndex:o};return r.length&&r.forEach(c=>{c(s,l)}),l})}const Vo=/\b\w+\b/g;function oi({isCaseSensitive:e=!1,ignoreDiacritics:t=!1}={}){return{tokenize(n){return e||(n=n.toLowerCase()),t&&(n=we(n)),n.match(Vo)||[]}}}function Go(e,t,n){const i=new Map,r=new Map;let s=0;function o(l,c,u,f){const p=n.tokenize(l);if(!p.length)return;s++;const g=new Map;for(const d of p)g.set(d,(g.get(d)||0)+1);for(const[d,v]of g){const w={docIdx:c,keyIdx:u,subIdx:f,tf:v};let _=i.get(d);_||(_=[],i.set(d,_)),_.push(w),r.set(d,(r.get(d)||0)+1)}}for(const l of e){const{i:c,v:u,$:f}=l;if(u!==void 0){o(u,c,-1,-1);continue}if(f)for(let p=0;p<t;p++){const g=f[p];if(g)if(Array.isArray(g))for(const d of g)o(d.v,c,p,d.i??-1);else o(g.v,c,p,-1)}}return{terms:i,fieldCount:s,df:r}}function Ko(e,t,n,i){const{i:r,v:s,$:o}=t;function l(c,u,f){const p=i.tokenize(c);if(!p.length)return;e.fieldCount++;const g=new Map;for(const d of p)g.set(d,(g.get(d)||0)+1);for(const[d,v]of g){const w={docIdx:r,keyIdx:u,subIdx:f,tf:v};let _=e.terms.get(d);_||(_=[],e.terms.set(d,_)),_.push(w),e.df.set(d,(e.df.get(d)||0)+1)}}if(s!==void 0){l(s,-1,-1);return}if(o)for(let c=0;c<n;c++){const u=o[c];if(u)if(Array.isArray(u))for(const f of u)l(f.v,c,f.i??-1);else l(u.v,c,-1)}}function Hi(e,t){for(const[n,i]of e.terms){const r=i.filter(o=>o.docIdx!==t),s=i.length-r.length;s>0&&(e.fieldCount-=s,e.df.set(n,(e.df.get(n)||0)-s),r.length===0?(e.terms.delete(n),e.df.delete(n)):e.terms.set(n,r))}}class mt{constructor(t,n,i){this.options={...E,...n},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new mo(this.options.keys),this._docs=t,this._myIndex=null,this._invertedIndex=null,this.setCollection(t,i),this._lastQuery=null,this._lastSearcher=null}_getSearcher(t){if(this._lastQuery===t)return this._lastSearcher;const n=this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options,i=Ze(t,n);return this._lastQuery=t,this._lastSearcher=i,i}setCollection(t,n){if(this._docs=t,n&&!(n instanceof gi))throw new Error(uo);if(this._myIndex=n||fr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const i=oi({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});this._invertedIndex=Go(this._myIndex.records,this._myIndex.keys.length,i)}}add(t){if(tt(t)&&(this._docs.push(t),this._myIndex.add(t),this._invertedIndex)){const n=this._myIndex.records[this._myIndex.records.length-1],i=oi({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});Ko(this._invertedIndex,n,this._myIndex.keys.length,i)}}remove(t=()=>!1){const n=[],i=[];for(let r=0,s=this._docs.length;r<s;r+=1)t(this._docs[r],r)&&(n.push(this._docs[r]),i.push(r));if(i.length){if(this._invertedIndex)for(const r of i)Hi(this._invertedIndex,r);for(let r=i.length-1;r>=0;r-=1)this._docs.splice(i[r],1);this._myIndex.removeAll(i)}return n}removeAt(t){this._invertedIndex&&Hi(this._invertedIndex,t);const n=this._docs.splice(t,1)[0];return this._myIndex.removeAt(t),n}getIndex(){return this._myIndex}search(t,n){const{limit:i=-1}=n||{},{includeMatches:r,includeScore:s,shouldSort:o,sortFn:l,ignoreFieldNorm:c}=this.options;if(K(t)&&!t.trim()){let p=this._docs.map((g,d)=>({item:g,refIndex:d}));return Qe(i)&&i>-1&&(p=p.slice(0,i)),p}const u=Qe(i)&&i>0&&K(t);let f;if(u){const p=new Yo(i);K(this._docs[0])?this._searchStringList(t,{heap:p,ignoreFieldNorm:c}):this._searchObjectList(t,{heap:p,ignoreFieldNorm:c}),f=p.extractSorted(l)}else f=K(t)?K(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t),zo(f,{ignoreFieldNorm:c}),o&&f.sort(l),Qe(i)&&i>-1&&(f=f.slice(0,i));return Uo(f,this._docs,{includeMatches:r,includeScore:s})}_searchStringList(t,{heap:n,ignoreFieldNorm:i}={}){const r=this._getSearcher(t),{records:s}=this._myIndex,o=n?null:[];return s.forEach(({v:l,i:c,n:u})=>{if(!tt(l))return;const{isMatch:f,score:p,indices:g}=r.searchIn(l);if(f){const d={item:l,idx:c,matches:[{score:p,value:l,norm:u,indices:g}]};n?(d.score=si(d.matches,{ignoreFieldNorm:i}),n.shouldInsert(d.score)&&n.insert(d)):o.push(d)}}),o}_searchLogical(t){const n=gr(t,this.options),i=(l,c,u)=>{if(!("children"in l)){const{keyId:d,searcher:v}=l;let w;return d===null?(w=[],this._myIndex.keys.forEach((_,C)=>{w.push(...this._findMatches({key:_,value:c[C],searcher:v}))})):w=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:v}),w&&w.length?[{idx:u,item:c,matches:w}]:[]}const{children:f,operator:p}=l,g=[];for(let d=0,v=f.length;d<v;d+=1){const w=f[d],_=i(w,c,u);if(_.length)g.push(..._);else if(p===tn.AND)return[]}return g},r=this._myIndex.records,s=new Map,o=[];return r.forEach(({$:l,i:c})=>{if(tt(l)){const u=i(n,l,c);u.length&&(s.has(c)||(s.set(c,{idx:c,item:l,matches:[]}),o.push(s.get(c))),u.forEach(({matches:f})=>{s.get(c).matches.push(...f)}))}}),o}_searchObjectList(t,{heap:n,ignoreFieldNorm:i}={}){const r=this._getSearcher(t),{keys:s,records:o}=this._myIndex,l=n?null:[];return o.forEach(({$:c,i:u})=>{if(!tt(c))return;const f=[];let p=!1,g=!1;if(s.forEach((d,v)=>{const w=this._findMatches({key:d,value:c[v],searcher:r});w.length?(f.push(...w),w[0].hasInverse&&(g=!0)):p=!0}),!(g&&p)&&f.length){const d={idx:u,item:c,matches:f};n?(d.score=si(d.matches,{ignoreFieldNorm:i}),n.shouldInsert(d.score)&&n.insert(d)):l.push(d)}}),l}_findMatches({key:t,value:n,searcher:i}){if(!tt(n))return[];const r=[];if(Ot(n))n.forEach(({v:s,i:o,n:l})=>{if(!tt(s))return;const{isMatch:c,score:u,indices:f,hasInverse:p}=i.searchIn(s);c&&r.push({score:u,key:t,value:s,idx:o,norm:l,indices:f,hasInverse:p})});else{const{v:s,n:o}=n,{isMatch:l,score:c,indices:u,hasInverse:f}=i.searchIn(s);l&&r.push({score:c,key:t,value:s,norm:o,indices:u,hasInverse:f})}return r}}class Jo{static condition(t,n){return n.useTokenSearch}constructor(t,n){this.options=n,this.analyzer=oi({isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics});const i=this.analyzer.tokenize(t),r=n._invertedIndex,{df:s,fieldCount:o}=r;this.termSearchers=[],this.idfWeights=[];for(const l of i){this.termSearchers.push(new yi(l,{location:n.location,threshold:n.threshold,distance:n.distance,includeMatches:n.includeMatches,findAllMatches:n.findAllMatches,minMatchCharLength:n.minMatchCharLength,isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics,ignoreLocation:!0}));const c=s.get(l)||0,u=Math.log(1+(o-c+.5)/(c+.5));this.idfWeights.push(u)}}searchIn(t){if(!this.termSearchers.length)return{isMatch:!1,score:1};const n=[];let i=0,r=0,s=0;for(let c=0;c<this.termSearchers.length;c++){const u=this.termSearchers[c].searchIn(t),f=this.idfWeights[c];r+=f,u.isMatch&&(s++,i+=f*(1-u.score),u.indices&&n.push(...u.indices))}if(s===0)return{isMatch:!1,score:1};const o=r>0?1-i/r:0,l={isMatch:!0,score:Math.max(.001,o)};return this.options.includeMatches&&n.length&&(l.indices=mi(n)),l}}mt.version="7.3.0";mt.createIndex=fr;mt.parseIndex=Ao;mt.config=E;mt.match=function(e,t,n){return Ze(e,{...E,...n}).searchIn(t)};mt.parseQuery=gr;vi(Fo);vi(Jo);mt.use=function(...e){e.forEach(t=>vi(t))};function mr(e,t){const n=new mt(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const i=e.target.value,s=n.search(i).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(t.filters).forEach(o=>{t.querySelector(`[data-details="${o}"]`).parentElement.style.display=s.includes(o)||!i?"":"none"})}function Qo(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const ai=Math.min,ne=Math.max,en=Math.round,We=Math.floor,dt=e=>({x:e,y:e});function Zo(e,t){return typeof e=="function"?e(t):e}function ta(e){return e.split("-")[0]}function ea(e){return e.split("-")[1]}function na(e){return e==="x"?"y":"x"}function ia(e){return e==="y"?"height":"width"}function yr(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function ra(e){return na(yr(e))}function sa(e){return{top:0,right:0,bottom:0,left:0,...e}}function oa(e){return typeof e!="number"?sa(e):{top:e,right:e,bottom:e,left:e}}function nn(e){const{x:t,y:n,width:i,height:r}=e;return{width:i,height:r,top:n,left:t,right:t+i,bottom:n+r,x:t,y:n}}function qi(e,t,n){let{reference:i,floating:r}=e;const s=yr(t),o=ra(t),l=ia(o),c=ta(t),u=s==="y",f=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[l]/2-r[l]/2;let d;switch(c){case"top":d={x:f,y:i.y-r.height};break;case"bottom":d={x:f,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:p};break;case"left":d={x:i.x-r.width,y:p};break;default:d={x:i.x,y:i.y}}switch(ea(t)){case"start":d[o]-=g*(n&&u?-1:1);break;case"end":d[o]+=g*(n&&u?-1:1);break}return d}async function aa(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:s,rects:o,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:g=!1,padding:d=0}=Zo(t,e),v=oa(d),_=l[g?p==="floating"?"reference":"floating":p],C=nn(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(_)))==null||n?_:_.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:f,strategy:c})),B=p==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),D=await(s.isElement==null?void 0:s.isElement($))?await(s.getScale==null?void 0:s.getScale($))||{x:1,y:1}:{x:1,y:1},P=nn(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:B,offsetParent:$,strategy:c}):B);return{top:(C.top-P.top+v.top)/D.y,bottom:(P.bottom-C.bottom+v.bottom)/D.y,left:(C.left-P.left+v.left)/D.x,right:(P.right-C.right+v.right)/D.x}}const la=50,ca=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,l=o.detectOverflow?o:{...o,detectOverflow:aa},c=await(o.isRTL==null?void 0:o.isRTL(t));let u=await o.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:p}=qi(u,i,c),g=i,d=0;const v={};for(let w=0;w<s.length;w++){const _=s[w];if(!_)continue;const{name:C,fn:B}=_,{x:$,y:D,data:P,reset:q}=await B({x:f,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:v,rects:u,platform:l,elements:{reference:e,floating:t}});f=$??f,p=D??p,v[C]={...v[C],...P},q&&d<la&&(d++,typeof q=="object"&&(q.placement&&(g=q.placement),q.rects&&(u=q.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:r}):q.rects),{x:f,y:p}=qi(u,g,c)),w=-1)}return{x:f,y:p,placement:g,strategy:r,middlewareData:v}};function ln(){return typeof window<"u"}function le(e){return vr(e)?(e.nodeName||"").toLowerCase():"#document"}function et(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yt(e){var t;return(t=(vr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vr(e){return ln()?e instanceof Node||e instanceof et(e).Node:!1}function lt(e){return ln()?e instanceof Element||e instanceof et(e).Element:!1}function At(e){return ln()?e instanceof HTMLElement||e instanceof et(e).HTMLElement:!1}function zi(e){return!ln()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof et(e).ShadowRoot}function _e(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=ct(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&r!=="inline"&&r!=="contents"}function ua(e){return/^(table|td|th)$/.test(le(e))}function cn(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const fa=/transform|translate|scale|rotate|perspective|filter/,ha=/paint|layout|strict|content/,qt=e=>!!e&&e!=="none";let zn;function bi(e){const t=lt(e)?ct(e):e;return qt(t.transform)||qt(t.translate)||qt(t.scale)||qt(t.rotate)||qt(t.perspective)||!wi()&&(qt(t.backdropFilter)||qt(t.filter))||fa.test(t.willChange||"")||ha.test(t.contain||"")}function da(e){let t=kt(e);for(;At(t)&&!se(t);){if(bi(t))return t;if(cn(t))return null;t=kt(t)}return null}function wi(){return zn==null&&(zn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),zn}function se(e){return/^(html|body|#document)$/.test(le(e))}function ct(e){return et(e).getComputedStyle(e)}function un(e){return lt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function kt(e){if(le(e)==="html")return e;const t=e.assignedSlot||e.parentNode||zi(e)&&e.host||yt(e);return zi(t)?t.host:t}function br(e){const t=kt(e);return se(t)?e.ownerDocument?e.ownerDocument.body:e.body:At(t)&&_e(t)?t:br(t)}function xe(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=br(e),s=r===((i=e.ownerDocument)==null?void 0:i.body),o=et(r);if(s){const l=li(o);return t.concat(o,o.visualViewport||[],_e(r)?r:[],l&&n?xe(l):[])}else return t.concat(r,xe(r,[],n))}function li(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function wr(e){const t=ct(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=At(e),s=r?e.offsetWidth:n,o=r?e.offsetHeight:i,l=en(n)!==s||en(i)!==o;return l&&(n=s,i=o),{width:n,height:i,$:l}}function xi(e){return lt(e)?e:e.contextElement}function ie(e){const t=xi(e);if(!At(t))return dt(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:s}=wr(t);let o=(s?en(n.width):n.width)/i,l=(s?en(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const pa=dt(0);function xr(e){const t=et(e);return!wi()||!t.visualViewport?pa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ga(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==et(e)?!1:t}function Wt(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),s=xi(e);let o=dt(1);t&&(i?lt(i)&&(o=ie(i)):o=ie(e));const l=ga(s,n,i)?xr(s):dt(0);let c=(r.left+l.x)/o.x,u=(r.top+l.y)/o.y,f=r.width/o.x,p=r.height/o.y;if(s){const g=et(s),d=i&&lt(i)?et(i):i;let v=g,w=li(v);for(;w&&i&&d!==v;){const _=ie(w),C=w.getBoundingClientRect(),B=ct(w),$=C.left+(w.clientLeft+parseFloat(B.paddingLeft))*_.x,D=C.top+(w.clientTop+parseFloat(B.paddingTop))*_.y;c*=_.x,u*=_.y,f*=_.x,p*=_.y,c+=$,u+=D,v=et(w),w=li(v)}}return nn({width:f,height:p,x:c,y:u})}function fn(e,t){const n=un(e).scrollLeft;return t?t.left+n:Wt(yt(e)).left+n}function _r(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-fn(e,n),r=n.top+t.scrollTop;return{x:i,y:r}}function ma(e){let{elements:t,rect:n,offsetParent:i,strategy:r}=e;const s=r==="fixed",o=yt(i),l=t?cn(t.floating):!1;if(i===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=dt(1);const f=dt(0),p=At(i);if((p||!p&&!s)&&((le(i)!=="body"||_e(o))&&(c=un(i)),p)){const d=Wt(i);u=ie(i),f.x=d.x+i.clientLeft,f.y=d.y+i.clientTop}const g=o&&!p&&!s?_r(o,c):dt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+f.x+g.x,y:n.y*u.y-c.scrollTop*u.y+f.y+g.y}}function ya(e){return Array.from(e.getClientRects())}function va(e){const t=yt(e),n=un(e),i=e.ownerDocument.body,r=ne(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=ne(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+fn(e);const l=-n.scrollTop;return ct(i).direction==="rtl"&&(o+=ne(t.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:l}}const Yi=25;function ba(e,t){const n=et(e),i=yt(e),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,l=0,c=0;if(r){s=r.width,o=r.height;const f=wi();(!f||f&&t==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}const u=fn(i);if(u<=0){const f=i.ownerDocument,p=f.body,g=getComputedStyle(p),d=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,v=Math.abs(i.clientWidth-p.clientWidth-d);v<=Yi&&(s-=v)}else u<=Yi&&(s+=u);return{width:s,height:o,x:l,y:c}}function wa(e,t){const n=Wt(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,s=At(e)?ie(e):dt(1),o=e.clientWidth*s.x,l=e.clientHeight*s.y,c=r*s.x,u=i*s.y;return{width:o,height:l,x:c,y:u}}function Xi(e,t,n){let i;if(t==="viewport")i=ba(e,n);else if(t==="document")i=va(yt(e));else if(lt(t))i=wa(t,n);else{const r=xr(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return nn(i)}function Mr(e,t){const n=kt(e);return n===t||!lt(n)||se(n)?!1:ct(n).position==="fixed"||Mr(n,t)}function xa(e,t){const n=t.get(e);if(n)return n;let i=xe(e,[],!1).filter(l=>lt(l)&&le(l)!=="body"),r=null;const s=ct(e).position==="fixed";let o=s?kt(e):e;for(;lt(o)&&!se(o);){const l=ct(o),c=bi(o);!c&&l.position==="fixed"&&(r=null),(s?!c&&!r:!c&&l.position==="static"&&!!r&&(r.position==="absolute"||r.position==="fixed")||_e(o)&&!c&&Mr(e,o))?i=i.filter(f=>f!==o):r=l,o=kt(o)}return t.set(e,i),i}function _a(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const o=[...n==="clippingAncestors"?cn(t)?[]:xa(t,this._c):[].concat(n),i],l=Xi(t,o[0],r);let c=l.top,u=l.right,f=l.bottom,p=l.left;for(let g=1;g<o.length;g++){const d=Xi(t,o[g],r);c=ne(d.top,c),u=ai(d.right,u),f=ai(d.bottom,f),p=ne(d.left,p)}return{width:u-p,height:f-c,x:p,y:c}}function Ma(e){const{width:t,height:n}=wr(e);return{width:t,height:n}}function Aa(e,t,n){const i=At(t),r=yt(t),s=n==="fixed",o=Wt(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=dt(0);function u(){c.x=fn(r)}if(i||!i&&!s)if((le(t)!=="body"||_e(r))&&(l=un(t)),i){const d=Wt(t,!0,s,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else r&&u();s&&!i&&r&&u();const f=r&&!i&&!s?_r(r,l):dt(0),p=o.left+l.scrollLeft-c.x-f.x,g=o.top+l.scrollTop-c.y-f.y;return{x:p,y:g,width:o.width,height:o.height}}function Yn(e){return ct(e).position==="static"}function Wi(e,t){if(!At(e)||ct(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return yt(e)===n&&(n=n.ownerDocument.body),n}function Ar(e,t){const n=et(e);if(cn(e))return n;if(!At(e)){let r=kt(e);for(;r&&!se(r);){if(lt(r)&&!Yn(r))return r;r=kt(r)}return n}let i=Wi(e,t);for(;i&&ua(i)&&Yn(i);)i=Wi(i,t);return i&&se(i)&&Yn(i)&&!bi(i)?n:i||da(e)||n}const Ca=async function(e){const t=this.getOffsetParent||Ar,n=this.getDimensions,i=await n(e.floating);return{reference:Aa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Sa(e){return ct(e).direction==="rtl"}const La={convertOffsetParentRelativeRectToViewportRelativeRect:ma,getDocumentElement:yt,getClippingRect:_a,getOffsetParent:Ar,getElementRects:Ca,getClientRects:ya,getDimensions:Ma,getScale:ie,isElement:lt,isRTL:Sa};function Cr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ea(e,t){let n=null,i;const r=yt(e);function s(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=e.getBoundingClientRect(),{left:f,top:p,width:g,height:d}=u;if(l||t(),!g||!d)return;const v=We(p),w=We(r.clientWidth-(f+g)),_=We(r.clientHeight-(p+d)),C=We(f),$={rootMargin:-v+"px "+-w+"px "+-_+"px "+-C+"px",threshold:ne(0,ai(1,c))||1};let D=!0;function P(q){const U=q[0].intersectionRatio;if(U!==c){if(!D)return o();U?o(!1,U):i=setTimeout(()=>{o(!1,1e-7)},1e3)}U===1&&!Cr(u,e.getBoundingClientRect())&&o(),D=!1}try{n=new IntersectionObserver(P,{...$,root:r.ownerDocument})}catch{n=new IntersectionObserver(P,$)}n.observe(e)}return o(!0),s}function $a(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,u=xi(e),f=r||s?[...u?xe(u):[],...t?xe(t):[]]:[];f.forEach(C=>{r&&C.addEventListener("scroll",n,{passive:!0}),s&&C.addEventListener("resize",n)});const p=u&&l?Ea(u,n):null;let g=-1,d=null;o&&(d=new ResizeObserver(C=>{let[B]=C;B&&B.target===u&&d&&t&&(d.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var $;($=d)==null||$.observe(t)})),n()}),u&&!c&&d.observe(u),t&&d.observe(t));let v,w=c?Wt(e):null;c&&_();function _(){const C=Wt(e);w&&!Cr(w,C)&&n(),w=C,v=requestAnimationFrame(_)}return n(),()=>{var C;f.forEach(B=>{r&&B.removeEventListener("scroll",n),s&&B.removeEventListener("resize",n)}),p?.(),(C=d)==null||C.disconnect(),d=null,c&&cancelAnimationFrame(v)}}const Ra=(e,t,n)=>{const i=new Map,r={platform:La,...n},s={...r.platform,_c:i};return ca(e,t,{...r,platform:s})};function Ba(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return $a(t,n,()=>{n.matches(":popover-open")&&Ra(t,n,{strategy:"fixed"}).then(({x:r,y:s})=>{Object.assign(n.style,{left:`${r}px`,top:`${s}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Sr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",mr({target:{value:""}},e)}function Da(e,t){t.inlineMode&&e.stopPropagation()}function Pa(e){e.inlineMode&&(e.showDropdown=!0)}function ka(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Oa(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Sr(t),t.showDropdown=!1)}function Ta(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Sr(t),t.showDropdown=!1)}function Ia(e,t){var n,i,r=0,s,o,l,c,u,f,p,g=e[0],d=e[1],v=t.length;for(n=0;n<v;n++){i=0;var w=t[n],_=w.length-1;if(f=w[0],f[0]!==w[_][0]&&f[1]!==w[_][1])throw new Error("First and last coordinates in a ring must be the same");for(o=f[0]-g,l=f[1]-d,i;i<_;i++){if(p=w[i+1],c=p[0]-g,u=p[1]-d,l===0&&u===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(s=eo(o,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&r++}f=p,l=u,o=c}}return r%2!==0}function pt(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Xt(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function oe(e){return e.type==="Feature"?e.geometry:e}function Ui(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}function ot(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const i=pt(e),r=oe(t),s=r.type,o=t.bbox;let l=r.coordinates;if(o&&ja(i,o)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const f=Ia(i,l[u]);if(f===0)return!n.ignoreBoundary;f&&(c=!0)}return c}function ja(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class Lr{constructor(t=[],n=Na){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let i=(this.length>>1)-1;i>=0;i--)this._down(i)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:i}=this,r=n[t];for(;t>0;){const s=t-1>>1,o=n[s];if(i(r,o)>=0)break;n[t]=o,t=s}n[t]=r}_down(t){const{data:n,compare:i}=this,r=this.length>>1,s=n[t];for(;t<r;){let o=(t<<1)+1,l=n[o];const c=o+1;if(c<this.length&&i(n[c],l)<0&&(o=c,l=n[c]),i(l,s)>=0)break;n[t]=l,t=o}n[t]=s}}function Na(e,t){return e<t?-1:e>t?1:0}function Er(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function Fa(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class Vi{constructor(t,n,i,r){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=i,this.eventId=r,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function Ha(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let i=0;i<n.length;i++)Gi(n[i],t)}else Gi(e,t)}let Ue=0,Ve=0,Ge=0;function Gi(e,t){const n=e.type==="Feature"?e.geometry:e;let i=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(i=[i]),n.type==="LineString"&&(i=[[i]]);for(let r=0;r<i.length;r++)for(let s=0;s<i[r].length;s++){let o=i[r][s][0],l=null;Ve=Ve+1;for(let c=0;c<i[r][s].length-1;c++){l=i[r][s][c+1];const u=new Vi(o,Ue,Ve,Ge),f=new Vi(l,Ue,Ve,Ge+1);u.otherEvent=f,f.otherEvent=u,Er(u,f)>0?(f.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,f.isLeftEndpoint=!1),t.push(u),t.push(f),o=l,Ge=Ge+1}}Ue=Ue+1}class qa{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function za(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,i=e.leftSweepEvent.p.y,r=e.rightSweepEvent.p.x,s=e.rightSweepEvent.p.y,o=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,c=t.rightSweepEvent.p.x,u=t.rightSweepEvent.p.y,f=(u-l)*(r-n)-(c-o)*(s-i),p=(c-o)*(i-l)-(u-l)*(n-o),g=(r-n)*(i-l)-(s-i)*(n-o);if(f===0)return!1;const d=p/f,v=g/f;if(d>=0&&d<=1&&v>=0&&v<=1){const w=n+d*(r-n),_=i+d*(s-i);return[w,_]}return!1}function Ya(e,t){t=t||!1;const n=[],i=new Lr([],Fa);for(;e.length;){const r=e.pop();if(r.isLeftEndpoint){const s=new qa(r);for(let o=0;o<i.data.length;o++){const l=i.data[o];if(t&&l.leftSweepEvent.featureId===r.featureId)continue;const c=za(s,l);c!==!1&&n.push(c)}i.push(s)}else r.isLeftEndpoint===!1&&i.pop()}return n}function Xa(e,t){const n=new Lr([],Er);return Ha(e,n),Ya(n,t)}var Wa=Xa;function hn(e,t,n={}){const{removeDuplicates:i=!0,ignoreSelfIntersections:r=!0}=n;let s=[];e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(re(e)),t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(re(t));const o=Wa(st(s),r);let l=[];if(i){const c={};o.forEach(u=>{const f=u.join(",");c[f]||(c[f]=!0,l.push(u))})}else l=o;return st(l.map(c=>ge(c)))}function _i(e,t,n){if(e!==null)for(var i,r,s,o,l,c,u,f=0,p=0,g,d=e.type,v=d==="FeatureCollection",w=d==="Feature",_=v?e.features.length:1,C=0;C<_;C++){u=v?e.features[C].geometry:w?e.geometry:e,g=u?u.type==="GeometryCollection":!1,l=g?u.geometries.length:1;for(var B=0;B<l;B++){var $=0,D=0;if(o=g?u.geometries[B]:u,o!==null){c=o.coordinates;var P=o.type;switch(f=0,P){case null:break;case"Point":if(t(c,p,C,$,D)===!1)return!1;p++,$++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++){if(t(c[i],p,C,$,D)===!1)return!1;p++,P==="MultiPoint"&&$++}P==="LineString"&&$++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(r=0;r<c[i].length-f;r++){if(t(c[i][r],p,C,$,D)===!1)return!1;p++}P==="MultiLineString"&&$++,P==="Polygon"&&D++}P==="Polygon"&&$++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for(D=0,r=0;r<c[i].length;r++){for(s=0;s<c[i][r].length-f;s++){if(t(c[i][r][s],p,C,$,D)===!1)return!1;p++}D++}$++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(_i(o.geometries[i],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function dn(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var n=0;n<e.features.length&&t(e.features[n],n)!==!1;n++);}function Ua(e,t,n){var i=n;return dn(e,function(r,s){s===0&&n===void 0?i=r:i=t(i,r,s)}),i}function Va(e,t){var n,i,r,s,o,l,c,u,f,p,g=0,d=e.type==="FeatureCollection",v=e.type==="Feature",w=d?e.features.length:1;for(n=0;n<w;n++){for(l=d?e.features[n].geometry:v?e.geometry:e,u=d?e.features[n].properties:v?e.properties:{},f=d?e.features[n].bbox:v?e.bbox:void 0,p=d?e.features[n].id:v?e.id:void 0,c=l?l.type==="GeometryCollection":!1,o=c?l.geometries.length:1,r=0;r<o;r++){if(s=c?l.geometries[r]:l,s===null){if(t(null,g,u,f,p)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(s,g,u,f,p)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<s.geometries.length;i++)if(t(s.geometries[i],g,u,f,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}g++}}function Ut(e,t){Va(e,function(n,i,r,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(re(n,r,{bbox:s,id:o}),i,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var f=n.coordinates[u],p={type:c,coordinates:f};if(t(re(p,r),i,u)===!1)return!1}})}function ci(e,t={}){const n=oe(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return Ga(n,t);case"MultiPolygon":return Ka(n,t);default:throw new Error("invalid poly")}}function Ga(e,t={}){const i=oe(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{};return $r(i,r)}function Ka(e,t={}){const i=oe(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{},s=[];return i.forEach(o=>{s.push($r(o,r))}),st(s)}function $r(e,t){return e.length>1?no(e,t):be(e[0],t)}function Ja(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let i=!0;return Ut(e,r=>{Ut(t,s=>{if(i===!1)return!1;i=Qa(r.geometry,s.geometry,n)})}),i}function Qa(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!nl(e.coordinates,t.coordinates);case"LineString":return!Ki(t,e);case"Polygon":return!ot(e,t)}break;case"LineString":switch(t.type){case"Point":return!Ki(e,t);case"LineString":return!Za(e,t,n);case"Polygon":return!Ji(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!ot(t,e);case"LineString":return!Ji(e,t,n);case"Polygon":return!tl(t,e,n)}}return!1}function Ki(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(el(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function Za(e,t,n){return hn(e,t,{ignoreSelfIntersections:n}).features.length>0}function Ji(e,t,n){for(const r of t.coordinates)if(ot(r,e))return!0;return hn(t,ci(e),{ignoreSelfIntersections:n}).features.length>0}function tl(e,t,n){for(const r of e.coordinates[0])if(ot(r,t))return!0;for(const r of t.coordinates[0])if(ot(r,e))return!0;return hn(ci(e),ci(t),{ignoreSelfIntersections:n}).features.length>0}function el(e,t,n){const i=n[0]-e[0],r=n[1]-e[1],s=t[0]-e[0],o=t[1]-e[1];return i*o-r*s!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:o>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function nl(e,t){return e[0]===t[0]&&e[1]===t[1]}function il(e,t,{ignoreSelfIntersections:n=!0}={}){let i=!1;return Ut(e,r=>{Ut(t,s=>{if(i===!0)return!0;i=!Ja(r.geometry,s.geometry,{ignoreSelfIntersections:n})})}),i}var rl=il;function ht(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return _i(e,i=>{n[0]>i[0]&&(n[0]=i[0]),n[1]>i[1]&&(n[1]=i[1]),n[2]<i[0]&&(n[2]=i[0]),n[3]<i[1]&&(n[3]=i[1])}),n}function rn(e,t,n={}){const i=pt(e),r=Xt(t);for(let s=0;s<r.length-1;s++){let o=!1;if(n.ignoreEndVertices&&(s===0&&(o="start"),s===r.length-2&&(o="end"),s===0&&s+1===r.length-1&&(o="both")),sl(r[s],r[s+1],i,o,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function sl(e,t,n,i,r){const s=n[0],o=n[1],l=e[0],c=e[1],u=t[0],f=t[1],p=n[0]-l,g=n[1]-c,d=u-l,v=f-c,w=p*v-g*d;if(r!==null){if(Math.abs(w)>r)return!1}else if(w!==0)return!1;if(Math.abs(d)===Math.abs(v)&&Math.abs(d)===0)return i?!1:n[0]===e[0]&&n[1]===e[1];if(i){if(i==="start")return Math.abs(d)>=Math.abs(v)?d>0?l<s&&s<=u:u<=s&&s<l:v>0?c<o&&o<=f:f<=o&&o<c;if(i==="end")return Math.abs(d)>=Math.abs(v)?d>0?l<=s&&s<u:u<s&&s<=l:v>0?c<=o&&o<f:f<o&&o<=c;if(i==="both")return Math.abs(d)>=Math.abs(v)?d>0?l<s&&s<u:u<s&&s<l:v>0?c<o&&o<f:f<o&&o<c}else return Math.abs(d)>=Math.abs(v)?d>0?l<=s&&s<=u:u<=s&&s<=l:v>0?c<=o&&o<=f:f<=o&&o<=c;return!1}function ol(e,t,n,i,r){Rr(e,t,n||0,i||e.length-1,r||al)}function Rr(e,t,n,i,r){for(;i>n;){if(i-n>600){var s=i-n+1,o=t-n+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(o-s/2<0?-1:1),f=Math.max(n,Math.floor(t-o*c/s+u)),p=Math.min(i,Math.floor(t+(s-o)*c/s+u));Rr(e,t,f,p,r)}var g=e[t],d=n,v=i;for(de(e,n,t),r(e[i],g)>0&&de(e,n,i);d<v;){for(de(e,d,v),d++,v--;r(e[d],g)<0;)d++;for(;r(e[v],g)>0;)v--}r(e[n],g)===0?de(e,n,v):(v++,de(e,v,i)),v<=t&&(n=v+1),t<=v&&(i=v-1)}}function de(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}function al(e,t){return e<t?-1:e>t?1:0}let ll=class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let n=this.data;const i=[];if(!Je(t,n))return i;const r=this.toBBox,s=[];for(;n;){for(let o=0;o<n.children.length;o++){const l=n.children[o],c=n.leaf?r(l):l;Je(t,c)&&(n.leaf?i.push(l):Wn(t,c)?this._all(l,i):s.push(l))}n=s.pop()}return i}collides(t){let n=this.data;if(!Je(t,n))return!1;const i=[];for(;n;){for(let r=0;r<n.children.length;r++){const s=n.children[r],o=n.leaf?this.toBBox(s):s;if(Je(t,o)){if(n.leaf||Wn(t,o))return!0;i.push(s)}}n=i.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let i=0;i<t.length;i++)this.insert(t[i]);return this}let n=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const i=this.data;this.data=n,n=i}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=te([]),this}remove(t,n){if(!t)return this;let i=this.data;const r=this.toBBox(t),s=[],o=[];let l,c,u;for(;i||s.length;){if(i||(i=s.pop(),c=s[s.length-1],l=o.pop(),u=!0),i.leaf){const f=cl(t,i.children,n);if(f!==-1)return i.children.splice(f,1),s.push(i),this._condense(s),this}!u&&!i.leaf&&Wn(i,r)?(s.push(i),o.push(l),l=0,c=i,i=i.children[0]):c?(l++,i=c.children[l],u=!1):i=null}return this}toBBox(t){return t}compareMinX(t,n){return t.minX-n.minX}compareMinY(t,n){return t.minY-n.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){const i=[];for(;t;)t.leaf?n.push(...t.children):i.push(...t.children),t=i.pop();return n}_build(t,n,i,r){const s=i-n+1;let o=this._maxEntries,l;if(s<=o)return l=te(t.slice(n,i+1)),Zt(l,this.toBBox),l;r||(r=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,r-1))),l=te([]),l.leaf=!1,l.height=r;const c=Math.ceil(s/o),u=c*Math.ceil(Math.sqrt(o));Qi(t,n,i,u,this.compareMinX);for(let f=n;f<=i;f+=u){const p=Math.min(f+u-1,i);Qi(t,f,p,c,this.compareMinY);for(let g=f;g<=p;g+=c){const d=Math.min(g+c-1,p);l.children.push(this._build(t,g,d,r-1))}}return Zt(l,this.toBBox),l}_chooseSubtree(t,n,i,r){for(;r.push(n),!(n.leaf||r.length-1===i);){let s=1/0,o=1/0,l;for(let c=0;c<n.children.length;c++){const u=n.children[c],f=Xn(u),p=hl(t,u)-f;p<o?(o=p,s=f<s?f:s,l=u):p===o&&f<s&&(s=f,l=u)}n=l||n.children[0]}return n}_insert(t,n,i){const r=i?t:this.toBBox(t),s=[],o=this._chooseSubtree(r,this.data,n,s);for(o.children.push(t),ye(o,r);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(r,s,n)}_split(t,n){const i=t[n],r=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,r);const o=this._chooseSplitIndex(i,s,r),l=te(i.children.splice(o,i.children.length-o));l.height=i.height,l.leaf=i.leaf,Zt(i,this.toBBox),Zt(l,this.toBBox),n?t[n-1].children.push(l):this._splitRoot(i,l)}_splitRoot(t,n){this.data=te([t,n]),this.data.height=t.height+1,this.data.leaf=!1,Zt(this.data,this.toBBox)}_chooseSplitIndex(t,n,i){let r,s=1/0,o=1/0;for(let l=n;l<=i-n;l++){const c=me(t,0,l,this.toBBox),u=me(t,l,i,this.toBBox),f=dl(c,u),p=Xn(c)+Xn(u);f<s?(s=f,r=l,o=p<o?p:o):f===s&&p<o&&(o=p,r=l)}return r||i-n}_chooseSplitAxis(t,n,i){const r=t.leaf?this.compareMinX:ul,s=t.leaf?this.compareMinY:fl,o=this._allDistMargin(t,n,i,r),l=this._allDistMargin(t,n,i,s);o<l&&t.children.sort(r)}_allDistMargin(t,n,i,r){t.children.sort(r);const s=this.toBBox,o=me(t,0,n,s),l=me(t,i-n,i,s);let c=Ke(o)+Ke(l);for(let u=n;u<i-n;u++){const f=t.children[u];ye(o,t.leaf?s(f):f),c+=Ke(o)}for(let u=i-n-1;u>=n;u--){const f=t.children[u];ye(l,t.leaf?s(f):f),c+=Ke(l)}return c}_adjustParentBBoxes(t,n,i){for(let r=i;r>=0;r--)ye(n[r],t)}_condense(t){for(let n=t.length-1,i;n>=0;n--)t[n].children.length===0?n>0?(i=t[n-1].children,i.splice(i.indexOf(t[n]),1)):this.clear():Zt(t[n],this.toBBox)}};function cl(e,t,n){if(!n)return t.indexOf(e);for(let i=0;i<t.length;i++)if(n(e,t[i]))return i;return-1}function Zt(e,t){me(e,0,e.children.length,t,e)}function me(e,t,n,i,r){r||(r=te(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s=t;s<n;s++){const o=e.children[s];ye(r,e.leaf?i(o):o)}return r}function ye(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function ul(e,t){return e.minX-t.minX}function fl(e,t){return e.minY-t.minY}function Xn(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function Ke(e){return e.maxX-e.minX+(e.maxY-e.minY)}function hl(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function dl(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),r=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,r-n)*Math.max(0,s-i)}function Wn(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function Je(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function te(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Qi(e,t,n,i,r){const s=[t,n];for(;s.length;){if(n=s.pop(),t=s.pop(),n-t<=i)continue;const o=t+Math.ceil((n-t)/i/2)*i;ol(e,o,t,n,r),s.push(t,o,o,n)}}function Un(e){var t;if(e.bbox)t=e.bbox;else if(Array.isArray(e)&&e.length===4)t=e;else if(Array.isArray(e)&&e.length===6)t=[e[0],e[1],e[3],e[4]];else if(e.type==="Feature")t=ht(e);else if(e.type==="FeatureCollection")t=ht(e);else throw new Error("invalid geojson");return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}var pl=class{constructor(e=9){this.tree=new ll(e),this.tree.toBBox=Un}insert(e){if(e.type!=="Feature")throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:ht(e),this.tree.insert(e),this}load(e){var t=[];return Array.isArray(e)?e.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ht(n),t.push(n)}):dn(e,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ht(n),t.push(n)}),this.tree.load(t),this}remove(e,t){if(e.type!=="Feature")throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:ht(e),this.tree.remove(e,t),this}clear(){return this.tree.clear(),this}search(e){var t=this.tree.search(Un(e));return st(t)}collides(e){return this.tree.collides(Un(e))}all(){const e=this.tree.all();return st(e)}toJSON(){return this.tree.toJSON()}fromJSON(e){return this.tree.fromJSON(e),this}};function Br(e){return new pl(e)}function gl(e,t){if(t=t??{},!io(t))throw new Error("options is invalid");var n=t.precision,i=t.coordinates,r=t.mutate;if(n=n==null||isNaN(n)?6:n,i=i==null||isNaN(i)?3:i,!e)throw new Error("<geojson> is required");if(typeof n!="number")throw new Error("<precision> must be a number");if(typeof i!="number")throw new Error("<coordinates> must be a number");(r===!1||r===void 0)&&(e=JSON.parse(JSON.stringify(e)));var s=Math.pow(10,n);return _i(e,function(o){ml(o,s,i)}),e}function ml(e,t,n){e.length>n&&e.splice(n,e.length);for(var i=0;i<e.length;i++)e[i]=Math.round(e[i]*t)/t;return e}function yl(e){if(!e)throw new Error("geojson is required");const t=[];return Ut(e,n=>{vl(n,t)}),st(t)}function vl(e,t){let n=[];const i=e.geometry;if(i!==null){switch(i.type){case"Polygon":n=Xt(i);break;case"LineString":n=[Xt(i)]}n.forEach(r=>{bl(r,e.properties).forEach(o=>{o.id=t.length,t.push(o)})})}}function bl(e,t){const n=[];return e.reduce((i,r)=>{const s=be([i,r],t);return s.bbox=wl(i,r),n.push(s),r}),n}function wl(e,t){const n=e[0],i=e[1],r=t[0],s=t[1],o=n<r?n:r,l=i<s?i:s,c=n>r?n:r,u=i>s?i:s;return[o,l,c,u]}function Vn(e,t,n={}){var i=pt(e),r=pt(t),s=ee(r[1]-i[1]),o=ee(r[0]-i[0]),l=ee(i[1]),c=ee(r[1]),u=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(c);return ro(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),n.units)}var xl=Object.defineProperty,_l=Object.defineProperties,Ml=Object.getOwnPropertyDescriptors,Zi=Object.getOwnPropertySymbols,Al=Object.prototype.hasOwnProperty,Cl=Object.prototype.propertyIsEnumerable,tr=(e,t,n)=>t in e?xl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Sl=(e,t)=>{for(var n in t||(t={}))Al.call(t,n)&&tr(e,n,t[n]);if(Zi)for(var n of Zi(t))Cl.call(t,n)&&tr(e,n,t[n]);return e},Ll=(e,t)=>_l(e,Ml(t));function El(e,t,n={}){if(!e||!t)throw new Error("lines and inputPoint are required arguments");const i=pt(t);let r=ge([1/0,1/0],{lineStringIndex:-1,segmentIndex:-1,totalDistance:-1,lineDistance:-1,segmentDistance:-1,pointDistance:1/0,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),s=0,o=0,l=-1;return Ut(e,function(c,u,f){l!==f&&(l=f,o=0);const p=Xt(c);for(let g=0;g<p.length-1;g++){const d=ge(p[g]),v=pt(d),w=ge(p[g+1]),_=pt(w),C=Vn(d,w,n);let B,$;_[0]===i[0]&&_[1]===i[1]?[B,$]=[_,!0]:v[0]===i[0]&&v[1]===i[1]?[B,$]=[v,!1]:[B,$]=Bl(v,_,i);const D=Vn(t,B,n);if(D<r.properties.pointDistance){const P=Vn(d,B,n);r=ge(B,{lineStringIndex:f,segmentIndex:$?g+1:g,totalDistance:s+P,lineDistance:o+P,segmentDistance:P,pointDistance:D,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),r.properties=Ll(Sl({},r.properties),{multiFeatureIndex:r.properties.lineStringIndex,index:r.properties.segmentIndex,location:r.properties.totalDistance,dist:r.properties.pointDistance})}s+=C,o+=C}}),r}function zt(e,t){const[n,i,r]=e,[s,o,l]=t;return n*s+i*o+r*l}function pe(e,t){const[n,i,r]=e,[s,o,l]=t;return[i*l-r*o,r*s-n*l,n*o-i*s]}function $l(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2))}function er(e){const t=$l(e);return[e[0]/t,e[1]/t,e[2]/t]}function Gn(e){const t=ee(e[1]),n=ee(e[0]);return[Math.cos(t)*Math.cos(n),Math.cos(t)*Math.sin(n),Math.sin(t)]}function Rl(e){const[t,n,i]=e,r=Math.min(Math.max(i,-1),1),s=Oi(Math.asin(r));return[Oi(Math.atan2(n,t)),s]}function Bl(e,t,n){const i=Gn(e),r=Gn(t),s=Gn(n),o=pe(i,r);if(o[0]===0&&o[1]===0&&o[2]===0)return zt(i,r)>0?[[...t],!0]:[[...n],!1];const l=pe(o,s);if(l[0]===0&&l[1]===0&&l[2]===0)return[[...t],!0];const c=pe(l,o),u=er(c),f=[-u[0],-u[1],-u[2]],p=zt(s,u)>zt(s,f)?u:f,g=er(o),d=zt(pe(i,p),g),v=zt(pe(p,r),g);return d>=0&&v>=0?[Rl(p),!1]:zt(i,s)>zt(r,s)?[[...e],!1]:[[...t],!0]}function Dl(e,t){if(!e)throw new Error("line is required");if(!t)throw new Error("splitter is required");const n=Ui(e),i=Ui(t);if(n!=="LineString")throw new Error("line must be LineString");if(i==="FeatureCollection")throw new Error("splitter cannot be a FeatureCollection");if(i==="GeometryCollection")throw new Error("splitter cannot be a GeometryCollection");var r=gl(t,{precision:7});switch(e.type!=="Feature"&&(e=re(e)),i){case"Point":return ui(e,r);case"MultiPoint":return nr(e,r);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return nr(e,hn(e,r,{ignoreSelfIntersections:!0}))}}function nr(e,t){var n=[],i=Br();return Ut(t,function(r){if(n.forEach(function(l,c){l.id=c}),!n.length)n=ui(e,r).features,i.load(st(n));else{var s=i.search(r);if(s.features.length){var o=Dr(r,s);n=n.filter(function(l){return l.id!==o.id}),i.remove(o),dn(ui(o,r),function(l){n.push(l),i.insert(l)})}}}),st(n)}function ui(e,t){var n=[],i=Xt(e)[0],r=Xt(e)[e.geometry.coordinates.length-1];if(Kn(i,pt(t))||Kn(r,pt(t)))return st([e]);var s=Br(),o=yl(e);s.load(o);var l=s.search(t);if(!l.features.length)return st([e]);var c=Dr(t,l),u=[i],f=Ua(o,function(p,g,d){var v=Xt(g)[1],w=pt(t);return d===c.id?(p.push(w),n.push(be(p)),Kn(w,v)?[w]:[w,v]):(p.push(v),p)},u);return f.length>1&&n.push(be(f)),st(n)}function Dr(e,t){if(!t.features.length)throw new Error("lines must contain features");if(t.features.length===1)return t.features[0];var n,i=1/0;return dn(t,function(r){var s=El(r,e),o=s.properties.pointDistance;o<i&&(n=r,i=o)}),n}function Kn(e,t){return e[0]===t[0]&&e[1]===t[1]}function Pl(e,t){var n=oe(e),i=oe(t),r=n.type,s=i.type;switch(r){case"Point":switch(s){case"MultiPoint":return kl(n,i);case"LineString":return rn(n,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return ot(n,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Ol(n,i);case"LineString":return Tl(n,i);case"Polygon":case"MultiPolygon":return Il(n,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return jl(n,i);case"Polygon":case"MultiPolygon":return Fl(n,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Hl(n,i);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+r+" geometry not supported")}}function kl(e,t){var n,i=!1;for(n=0;n<t.coordinates.length;n++)if(kr(t.coordinates[n],e.coordinates)){i=!0;break}return i}function Ol(e,t){for(var n=0;n<e.coordinates.length;n++){for(var i=!1,r=0;r<t.coordinates.length;r++)kr(e.coordinates[n],t.coordinates[r])&&(i=!0);if(!i)return!1}return!0}function Tl(e,t){for(var n=!1,i=0;i<e.coordinates.length;i++){if(!rn(e.coordinates[i],t))return!1;n||(n=rn(e.coordinates[i],t,{ignoreEndVertices:!0}))}return n}function Il(e,t){for(var n=!0,i=!1,r=0;r<e.coordinates.length;r++){if(i=ot(e.coordinates[r],t),!i){n=!1;break}i=ot(e.coordinates[r],t,{ignoreBoundary:!0})}return n&&i}function jl(e,t){for(var n=0;n<e.coordinates.length;n++)if(!rn(e.coordinates[n],t))return!1;return!0}function Nl(e,t){const n=e.coordinates,i=[];for(let r=0;r<n.length-1;r++){const s=be([n[r],n[r+1]]),o=Dl(s,re(t));o.features.length===0?i.push(s):i.push(...o.features)}return st(i)}function Fl(e,t){const n=ht(t),i=ht(e);if(!Pr(n,i))return!1;for(const o of e.coordinates)if(!ot(o,t))return!1;let r=!1;const s=Nl(e,t);for(const o of s.features){const l=ql(o.geometry.coordinates[0],o.geometry.coordinates[1]);if(!ot(l,t))return!1;!r&&ot(l,t,{ignoreBoundary:!0})&&(r=!0)}return r}function Hl(e,t){var n=ht(e),i=ht(t);if(!Pr(i,n))return!1;for(var r=0;r<e.coordinates[0].length;r++)if(!ot(e.coordinates[0][r],t))return!1;return!0}function Pr(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function kr(e,t){return e[0]===t[0]&&e[1]===t[1]}function ql(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var zl=Pl;const Yl=(e,t)=>t?rl(e,t):!0,Xl=(e,t)=>t?zl(e,t):!0;function Wl(e,t="highlight",n="title"){const i=(r,s=[])=>{let o="",l=0,c=0;return s.forEach((u,f)=>{const p=u[1]+1;f&&c>u[0]||(c=u[1],o+=[r.substring(l,u[0]),`<mark class="${t}">`,r.substring(u[0],p),"</mark>"].join(""),l=p)}),o+=r.substring(l),o};return e.filter(({matches:r})=>r&&r.length).map(({item:r,matches:s})=>{const o={...r};return s.forEach(l=>{if(l.key!==n)return;const c=i(Ql(l.value),Zl(l.indices));o.highlightedText=c}),o})}let Or;const Ul=(e,t)=>{Or=new mt(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},Vl=async(e,t,n)=>{const i=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const p=[],g=(d,v)=>{const w={};u.type==="text"?w[d]=`${v}`:w[c]=`="${d}"`,p.push(w)};return Object.entries(u.state).filter(([,d])=>d).forEach(([d,v])=>g(d,v)),p.length>0&&l.push({$or:p}),l},[]);let r;if(!(i.length>0)&&n.matchAllWhenEmpty!==!1)r=e;else{const l={$and:[...i]},c=Or.search(l);r=n.enableHighlighting?Wl(c,"highlight",n.titleProperty):c.map(u=>u.item)}const s=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>{const f=p=>u.format==="date"?O(p).valueOf():parseFloat(p);return l[c]={min:f(u.state.min),max:f(u.state.max),format:u.format},l},{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<r.length;c++){const u={};for(const[f,p]of Object.entries(s)){const g=v=>p.format==="date"?O(v).valueOf():parseFloat(v),d=G(f,r[c]);d?Array.isArray(d)?u[f]=s[f].min<=g(d[1])&&g(d[0])<=s[f].max:g(d)>=s[f].min&&g(d)<=s[f].max?u[f]=!0:u[f]=!1:u[f]=!0}Object.values(u).every(f=>!!f)&&l.push(r[c])}r=[...l]}const o=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<r.length;c++){const u={};for(const f of Object.keys(o)){const p=G(f,r[c]),g=o[f].mode||"within";p&&(g==="within"?Xl(p,o[f].geometry):Yl(p,o[f].geometry))?u[f]=!0:u[f]=!1}Object.values(u).every(f=>!!f)&&l.push(r[c])}r=[...l]}return r};function Gl(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function pn(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function ir(e,t){return e*2+t}function Kl(e){return Object.keys(e).map(t=>({title:S`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function fi(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Jl(e,t,n){const i=n.externalFilter(e,t),r=typeof i=="string"||i instanceof String?i:i.url,s=typeof i=="object"&&"fetchFn"in i?await i.fetchFn(r):await fetch(r).then(async o=>await o.json());return i.key?G(i.key,s):s}function Tr(e,t,n){let i;if(e.detail?i=e.detail.target:i=e.target,i?.classList.contains("details-filter")){if(!i.open||t?.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const s=r.shadowRoot.querySelector(".details-filter");s&&s!==i&&s.removeAttribute("open")})}else{if(!i?.open||t?.expandMultipleResults)return;n.querySelectorAll("details").forEach(r=>{r!==i&&r.removeAttribute("open")})}}function G(e,t){return typeof e=="function"?e(t):e?.includes(".")?e.split(".").reduce((n,i)=>n&&n[i],t):t[e]}function Ql(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Zl(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([r,s])=>r<=s?[r,s]:[s,r]).sort((r,s)=>r[0]-s[0]||r[1]-s[1]),i=[];for(const[r,s]of n){if(i.length===0){i.push([r,s]);continue}const o=i[i.length-1];(t?r<=o[1]+1:r<=o[1])?s>o[1]&&(o[1]=s):i.push([r,s])}return i}function sn(e){return e.format==="date"}class tc extends gt{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=this.#r.bind(this),this._handleKeyDown=this.#i.bind(this)}set showDropdown(t){this.renderRoot.querySelector("[popover]").togglePopover(t)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#t(){setTimeout(()=>this._overlayCleanup=Ba(this))}#e(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#t()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#e()}#n(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#n(),super.disconnectedCallback()}_overlayCleanup(){}#r(t){Ta(t,this)}#i(t){Oa(t,this)}#s(t){ka(t,this)}#a(){Pa(this)}#o(t){Da(t,this)}#l(t){Qo(t,this)}#c(t){mr(t,this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(t){t.has("inlineMode")&&(this.inlineMode?this.#e():this.#n())}render(){return S`
      <style>
        ${!this.unstyled&&pi}
      </style>
      ${this.inlineMode?S`
            <div
              class="inline-container-wrapper"
              @click="${this.#s}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Kl(this.filters)}
                      .controller=${{remove:t=>this.#l(t)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${H(fi(this.filters),()=>S`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":S`
                              <i class="small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <title>close</title>
                                  <path
                                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                  />
                                </svg>
                              </i>
                            `}
                      </button>
                    `)}
                </div>
                <div
                  class="input-container field no-margin ${fi(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${this.#s}"
                    @focus="${this.#a}"
                    @input="${this.#c}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div
                popover="manual"
                class="square surface-container-lowest small-elevate"
              >
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${this.#i}"
                  @click="${this.#o}"
                  @focus="${this.#o}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:S`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",tc);function ec(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",pn(e.filterObject),e.requestUpdate()}function nc(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const ic=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Jn=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"],ae="YYYY-MM-DD";function rc(e){if(pn(e.filterObject),e.filterObject){const t=e.filterObject.min,n=e.filterObject.max,i=e.querySelector("eox-timecontrol");i&&i.dateChange([O(t).format(),O(n).format()],i);const r=e.querySelector("tc-range-slider");r&&(r.value1!==t&&(r.value1=t),r.value2!==n&&(r.value2=n))}e.requestUpdate()}function rr(e,t){const n=d=>sn(t.filterObject)?O(d).valueOf():parseFloat(d),i=n(e.detail.values[0]),r=n(e.detail.values[1]),s=n(t.filterObject.state.min),o=n(t.filterObject.state.max),l=n(t.filterObject.min),c=n(t.filterObject.max);let u,f,p,g;sn(t.filterObject)?(u=O(i).isSame(O(l),"day"),f=O(r).isSame(O(c),"day"),p=O(i).isSame(O(s),"day"),g=O(r).isSame(O(o),"day")):(u=i===l,f=r===c,p=i===s,g=r===o),!(p&&g)&&([t.filterObject.state.min,t.filterObject.state.max]=[i,r],u&&f?(delete t.filterObject.dirty,delete t.filterObject.stringifiedState):t.filterObject.dirty=!0,t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${O(i).format(ae)} - ${O(r).format(ae)}`:`${i} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),u&&f?t.reset():t.requestUpdate())}function sc(e,t,n){const i=n.filterObject.state[e],r=sn(n.filterObject)?O(i).format(ae):i;return S`<div class="range-${t}">${r}</div>`}function oc(e){ac(-1,e),pn(e.filterObject),e.requestUpdate()}function ac(e,t){t.selectedItems=[],Mi(t),jr(t)}function Ir(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((i,r)=>r!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Mi(t),jr(t)}function lc(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function cc(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&Ir(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function uc(e,t){(e.has("suggestions")||e.has("query"))&&Mi(t)}function fc(e,t){const n=e.filterObject?.sort||((i,r)=>i.toString().localeCompare(r.toString(),void 0,{numeric:!0}));return t.sort(n).map(i=>i)}function Mi(e){const t=(e.filterObject?.filterKeys||e.suggestions).map(i=>`${i}`);let n=t;e.query&&(n=new mt(t,{threshold:.4}).search(e.query).map(r=>r.item)),e.filteredSuggestions=e.filterObject?.filterKeys?n:fc(e,n),e.filterObject?.filterKeys&&(e.filterObject.state=t.reduce((i,r)=>(r in i||(i[r]=void 0),i),e.filterObject.state)),e.highlightedIndex=-1}function jr(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function hc(e){pn(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function dc(e){e.renderRoot.querySelector("#eox-map").innerHTML="",Nr(e)}function pc(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function Nr(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&gc(e.geometry),i=Gl(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=i;const r=s=>{const o=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(o)};e.eoxMap.interactions.drawInteraction.on("drawend",s=>{r(s.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{r(s.features.getArray()[0])})},1e3)}function gc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}class mc extends gt{static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}#t=()=>{nc(this)};#e=t=>{t.key==="Enter"&&t.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),t.target.value="",this.#t())};reset(){ec(this)}debouncedInputHandler=an(this.#t,500,{leading:!0});createRenderRoot(){return this}render(){return H(this.filterObject,()=>S`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--_list-padding)"
          >
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${this.filterObject.validation?.pattern||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${t=>t.stopPropagation()}
              @keydown=${this.#e}
            />
          </div>
        </div>
        <small
          class="error-validation"
          style="margin-left: var(--_list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `)}}customElements.define("eox-itemfilter-text",mc);function yc(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const i=n.config.aggregateResults;return t==="No category"?e.filter(r=>{const s=r[i];return Array.isArray(s)?s.filter(Boolean).length===0:!s}):e.filter(r=>{const s=r[i];if(Array.isArray(s)){if(s.filter(Boolean).length===0)return!1}else if(!s)return!1;let o;return n.filters[i]&&(o=Object.keys(n.filters[i]).filter(c=>n.filters[i].state[c])),(o?.length?o.includes(t):!0)&&Array.isArray(s)?s.includes(t):s===t})}function vc(e,t){return S`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||Pt}
    >
      <summary class="square">
        <nav class="responsive tiny-space">
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </i>
          <span class="title"> ${e} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${t.aggregateResults(t.results,e).length}
          </button>
        </nav>
      </summary>
      <div>
        ${Fr(t,e)}
      </div>
    </details>
  `}function Fr(e,t){const n=e.results,i=t?e.aggregateResults(n,t):n,r=e.config,s=o=>e.selectedResult?.[r.idProperty]===o[r.idProperty]?"highlighted":Pt;return ki`
    ${e.resultType==="cards"?Qt("<eox-layout fill-grid>"):Qt('<ul id="results" class="list no-space" part="results">')}
      ${to(i,o=>o.id,o=>ki`
        ${e.resultType==="cards"?Qt("<eox-layout-item"):Qt("<li")}
            class="${s(o)}"
            @click=${()=>{e.selectedResult===o?e.selectedResult=null:e.selectedResult=o,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:o}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:o}))}}
          >
            <nav id="${o.id}" class="responsive tiny-space">
              ${H(r.subTitleProperty||r.imageProperty,()=>S`
                  ${H(e.resultType==="cards",()=>G(r.imageProperty,o)?S`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${G(r.imageProperty,o)}"
                            />
                          `:S`
                            <svg
                              class="image"
                              width="100%"
                              height="100%"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill="var(--primary-color)"
                              />
                            </svg>
                          `,()=>S`
                      <i class="small">
                        ${G(r.imageProperty,o)?S`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${G(r.imageProperty,o)}"
                              />
                            `:S`
                              <svg
                                class="image"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="var(--primary-color)"
                                />
                              </svg>
                            `}
                      </i>
                    `)}
                  <div class="title-container small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      >${Ye(o.highlightedText||G(r.titleProperty,o).toString())}</span
                    >
                    ${H(!!G(r.subTitleProperty,o),()=>S`
                        <small class="subtitle no-line truncate"
                          >${Ye(G(r.subTitleProperty,o).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>S`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      >${Ye(o.highlightedText||o[r.titleProperty])}</span
                    >
                  </div>
                `)}
              ${H(e.enableResultAction,()=>S`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:o}))}}
                  >
                    <icon class="small"
                      >${Ye(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${e.resultType==="cards"?Qt("</eox-layout>"):Qt("</ul>")}
  `}class bc extends gt{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}constructor(){super(),this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}#t(t){return Fr(this,t)}#e(t){return vc(t,this)}aggregateResults(t,n){return yc(t,n,this)}createRenderRoot(){return this}handleAccordion(t){Tr(t,this.config,this)}#n(){const t=this.resultAggregation.filter(i=>this.aggregateResults(this.results,i).length);return this.aggregateResults(this.results,"No category").length>0&&t.push("No category"),t}render(){return S`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${H(this.results.length<1,()=>S`<small class="no-results">No matching items</small>`,()=>Pt)}
          ${H(this.config.aggregateResults,()=>on(this.#n(),t=>S`${H(this.aggregateResults(this.results,t).length===1&&this.config.autoSpreadSingle,()=>S`<div style="margin-left: -8px">
                        ${this.#t(t)}
                      </div>`,()=>this.#e(t))}`),()=>this.#t())}
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",bc);class wc extends gt{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(t){t.has("filterObject")&&this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n)),uc(t,this)}#t(t){lc(t,this)}#e(t){cc(t,this)}#n(t){Ir(t,this)}reset(){oc(this)}debouncedInputHandler=an(this.#n,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(t=>this.filterObject.state[t]?t:null).filter(t=>!!t),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const t=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow scroll":Pt;return S`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${H((this.filterObject.filterKeys||this.suggestions).length>=10,()=>S`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--_list-padding)"
            >
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||"Find..."}"
                @input=${this.#t}
                @keydown=${this.#e}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${n}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>S`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label class="${t} small max">
                  <input
                    type="${t}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${r=>{r.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}customElements.define("eox-itemfilter-select",wc);class xc extends gt{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.tabIndex=0,this.inlineMode=!1,this.inputHandler=this.#t.bind(this),this.debouncedInputHandler=an(this.inputHandler,500,{leading:!1})}#t(t){rr(t,this)}#e(t,n){return sc(t,n,this)}reset(){rc(this)}createRenderRoot(){return this}render(){return H(this.filterObject,()=>S`
        ${H(sn(this.filterObject),()=>S`
            <eox-timecontrol
              .controlValues=${[{id:this.filterObject.key,title:this.filterObject.title||"Filter",timeControlValues:(this.filterObject.filterKeys||this.suggestions||[]).map(t=>typeof t=="object"?t:{date:t})}]}
              .initDate=${[O(this.filterObject.state.min||this.filterObject.min).format(),O(this.filterObject.state.max||this.filterObject.max).format()]}
              @select=${t=>rr(new CustomEvent("values",{detail:{values:[O(t.detail.date[0]).valueOf(),O(t.detail.date[1]).valueOf()]}}),this)}
            >
              <eox-timecontrol-date
                .format=${ae}
              ></eox-timecontrol-date>
              <eox-timecontrol-picker
                style="${this.inlineMode?"margin-bottom: 1rem; display: block;":""}"
                ?popup=${!this.inlineMode}
                range
                show-dots
                .position=${["bottom","left"]}
              ></eox-timecontrol-picker>
            </eox-timecontrol>
          `,()=>S`
            <div style="display: flex; gap: .5rem; align-items: center;">
              ${this.#e("min","before")}
              <tc-range-slider
                min="${this.filterObject.min}"
                max="${this.filterObject.max}"
                value1="${this.filterObject.state.min||this.filterObject.min}"
                value2="${this.filterObject.state.max||this.filterObject.max}"
                step="${this.filterObject.step||1}"
                @change=${this.debouncedInputHandler}
              ></tc-range-slider>
              ${this.#e("max","after")}
            </div>
          `)}
      `)}}customElements.define("eox-itemfilter-range",xc);class _c extends gt{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){hc(this)}createRenderRoot(){return this}#t(t){pc(t,this)}render(){return H(this.filterObject,()=>S`
        <div
          style="margin-left: var(--_list-padding); padding-right: var(--_padding)"
        >
          <nav class="no-margin wrap">
            ${on(["intersects","within"],t=>S`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===t||Pt}"
                    value="${t}"
                    @click=${()=>this.#t(t)}
                  />
                  <span style="font-size: x-small">${t} geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${this.filterObject.state?.geometry}"
            @filter="${t=>{this.filterObject.state.geometry=t.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial-filter>
        </div>
      `)}}customElements.define("eox-itemfilter-spatial",_c);class Mc extends gt{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#t()}#t(){Nr(this)}reset(){dc(this)}render(){return S`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",Mc);function Ac(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function Cc(e,t){const{code:n,target:i}=e;i instanceof HTMLElement&&i.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Sc(n,e.target.value??"",t))}function Sc(e,t,n){const i=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&i&&i.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){i&&(i.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(i),1));const r=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];r.classList.contains("highlighted")||r.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let r=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(r=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),r=r+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&r<0&&(r=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&r>n.renderRoot.querySelectorAll(".chip").length-1&&(r=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[r].classList.add("highlighted")}}class Lc extends gt{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#t.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#t(t){Cc(t,this)}#e(t){Ac(t,this)}render(){return S`
      <span class="chip-container">
        ${on(this.items,t=>S`
            <span class="chip tiny-margin" @click=${this.#e.bind(this)}>
              <span class="chip-title">${t.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${t.key}
                  @click=${n=>{n.stopPropagation(),this.controller.remove(n),this.requestUpdate()}}
                ></span>
              </span>
            </span>
          `)}
      </span>
    `}}customElements.define("eox-itemfilter-chips",Lc);var Qn,sr;function Ec(){if(sr)return Qn;sr=1;var e=200,t="__lodash_hash_undefined__",n=1/0,i="[object Function]",r="[object GeneratorFunction]",s=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,l=typeof Dt=="object"&&Dt&&Dt.Object===Object&&Dt,c=typeof self=="object"&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function f(y,x){var L=y?y.length:0;return!!L&&g(y,x,0)>-1}function p(y,x,L,T){for(var X=y.length,J=L+-1;++J<X;)if(x(y[J],J,y))return J;return-1}function g(y,x,L){if(x!==x)return p(y,d,L);for(var T=L-1,X=y.length;++T<X;)if(y[T]===x)return T;return-1}function d(y){return y!==y}function v(y,x){return y.has(x)}function w(y,x){return y?.[x]}function _(y){var x=!1;if(y!=null&&typeof y.toString!="function")try{x=!!(y+"")}catch{}return x}function C(y){var x=-1,L=Array(y.size);return y.forEach(function(T){L[++x]=T}),L}var B=Array.prototype,$=Function.prototype,D=Object.prototype,P=u["__core-js_shared__"],q=(function(){var y=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||"");return y?"Symbol(src)_1."+y:""})(),U=$.toString,N=D.hasOwnProperty,z=D.toString,Y=RegExp("^"+U.call(N).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vt=B.splice,It=ce(u,"Map"),nt=ce(u,"Set"),Ct=ce(Object,"create");function F(y){var x=-1,L=y?y.length:0;for(this.clear();++x<L;){var T=y[x];this.set(T[0],T[1])}}function St(){this.__data__=Ct?Ct(null):{}}function Vt(y){return this.has(y)&&delete this.__data__[y]}function gn(y){var x=this.__data__;if(Ct){var L=x[y];return L===t?void 0:L}return N.call(x,y)?x[y]:void 0}function mn(y){var x=this.__data__;return Ct?x[y]!==void 0:N.call(x,y)}function yn(y,x){var L=this.__data__;return L[y]=Ct&&x===void 0?t:x,this}F.prototype.clear=St,F.prototype.delete=Vt,F.prototype.get=gn,F.prototype.has=mn,F.prototype.set=yn;function Lt(y){var x=-1,L=y?y.length:0;for(this.clear();++x<L;){var T=y[x];this.set(T[0],T[1])}}function vn(){this.__data__=[]}function bn(y){var x=this.__data__,L=jt(x,y);if(L<0)return!1;var T=x.length-1;return L==T?x.pop():vt.call(x,L,1),!0}function wn(y){var x=this.__data__,L=jt(x,y);return L<0?void 0:x[L][1]}function xn(y){return jt(this.__data__,y)>-1}function _n(y,x){var L=this.__data__,T=jt(L,y);return T<0?L.push([y,x]):L[T][1]=x,this}Lt.prototype.clear=vn,Lt.prototype.delete=bn,Lt.prototype.get=wn,Lt.prototype.has=xn,Lt.prototype.set=_n;function k(y){var x=-1,L=y?y.length:0;for(this.clear();++x<L;){var T=y[x];this.set(T[0],T[1])}}function Me(){this.__data__={hash:new F,map:new(It||Lt),string:new F}}function Mn(y){return Kt(this,y).delete(y)}function ut(y){return Kt(this,y).get(y)}function Ae(y){return Kt(this,y).has(y)}function Ce(y,x){return Kt(this,y).set(y,x),this}k.prototype.clear=Me,k.prototype.delete=Mn,k.prototype.get=ut,k.prototype.has=Ae,k.prototype.set=Ce;function Gt(y){var x=-1,L=y?y.length:0;for(this.__data__=new k;++x<L;)this.add(y[x])}function Se(y){return this.__data__.set(y,t),this}function Le(y){return this.__data__.has(y)}Gt.prototype.add=Gt.prototype.push=Se,Gt.prototype.has=Le;function jt(y,x){for(var L=y.length;L--;)if(Rn(y[L][0],x))return L;return-1}function An(y){if(!Ee(y)||En(y))return!1;var x=Bn(y)||_(y)?Y:o;return x.test(ue(y))}function Cn(y,x,L){var T=-1,X=f,J=y.length,$e=!0,at=[],ft=at;if(J>=e){var Re=Sn(y);if(Re)return C(Re);$e=!1,X=v,ft=new Gt}else ft=at;t:for(;++T<J;){var Et=y[T],$t=Et;if(Et=Et!==0?Et:0,$e&&$t===$t){for(var Be=ft.length;Be--;)if(ft[Be]===$t)continue t;at.push(Et)}else X(ft,$t,L)||(ft!==at&&ft.push($t),at.push(Et))}return at}var Sn=nt&&1/C(new nt([,-0]))[1]==n?function(y){return new nt(y)}:Dn;function Kt(y,x){var L=y.__data__;return Ln(x)?L[typeof x=="string"?"string":"hash"]:L.map}function ce(y,x){var L=w(y,x);return An(L)?L:void 0}function Ln(y){var x=typeof y;return x=="string"||x=="number"||x=="symbol"||x=="boolean"?y!=="__proto__":y===null}function En(y){return!!q&&q in y}function ue(y){if(y!=null){try{return U.call(y)}catch{}try{return y+""}catch{}}return""}function $n(y){return y&&y.length?Cn(y):[]}function Rn(y,x){return y===x||y!==y&&x!==x}function Bn(y){var x=Ee(y)?z.call(y):"";return x==i||x==r}function Ee(y){var x=typeof y;return!!y&&(x=="object"||x=="function")}function Dn(){}return Qn=$n,Qn}var $c=Ec();const hi=ar($c);var ve={exports:{}};ve.exports;var or;function Rc(){return or||(or=1,(function(e,t){var n=200,i="Expected a function",r="__lodash_hash_undefined__",s=1,o=2,l=9007199254740991,c="[object Arguments]",u="[object Array]",f="[object Boolean]",p="[object Date]",g="[object Error]",d="[object Function]",v="[object GeneratorFunction]",w="[object Map]",_="[object Number]",C="[object Object]",B="[object Promise]",$="[object RegExp]",D="[object Set]",P="[object String]",q="[object Symbol]",U="[object WeakMap]",N="[object ArrayBuffer]",z="[object DataView]",Y="[object Float32Array]",vt="[object Float64Array]",It="[object Int8Array]",nt="[object Int16Array]",Ct="[object Int32Array]",F="[object Uint8Array]",St="[object Uint8ClampedArray]",Vt="[object Uint16Array]",gn="[object Uint32Array]",mn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yn=/^\w*$/,Lt=/^\./,vn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bn=/[\\^$.*+?()[\]{}|]/g,wn=/\\(\\)?/g,xn=/^\[object .+?Constructor\]$/,_n=/^(?:0|[1-9]\d*)$/,k={};k[Y]=k[vt]=k[It]=k[nt]=k[Ct]=k[F]=k[St]=k[Vt]=k[gn]=!0,k[c]=k[u]=k[N]=k[f]=k[z]=k[p]=k[g]=k[d]=k[w]=k[_]=k[C]=k[$]=k[D]=k[P]=k[U]=!1;var Me=typeof Dt=="object"&&Dt&&Dt.Object===Object&&Dt,Mn=typeof self=="object"&&self&&self.Object===Object&&self,ut=Me||Mn||Function("return this")(),Ae=t&&!t.nodeType&&t,Ce=Ae&&!0&&e&&!e.nodeType&&e,Gt=Ce&&Ce.exports===Ae,Se=Gt&&Me.process,Le=(function(){try{return Se&&Se.binding("util")}catch{}})(),jt=Le&&Le.isTypedArray;function An(a,h){for(var m=-1,b=a?a.length:0,A=Array(b);++m<b;)A[m]=h(a[m],m,a);return A}function Cn(a,h){for(var m=-1,b=h.length,A=a.length;++m<b;)a[A+m]=h[m];return a}function Sn(a,h){for(var m=-1,b=a?a.length:0;++m<b;)if(h(a[m],m,a))return!0;return!1}function Kt(a){return function(h){return h?.[a]}}function ce(a,h){for(var m=-1,b=Array(a);++m<a;)b[m]=h(m);return b}function Ln(a){return function(h){return a(h)}}function En(a,h){return a?.[h]}function ue(a){var h=!1;if(a!=null&&typeof a.toString!="function")try{h=!!(a+"")}catch{}return h}function $n(a){var h=-1,m=Array(a.size);return a.forEach(function(b,A){m[++h]=[A,b]}),m}function Rn(a,h){return function(m){return a(h(m))}}function Bn(a){var h=-1,m=Array(a.size);return a.forEach(function(b){m[++h]=b}),m}var Ee=Array.prototype,Dn=Function.prototype,y=Object.prototype,x=ut["__core-js_shared__"],L=(function(){var a=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""})(),T=Dn.toString,X=y.hasOwnProperty,J=y.toString,$e=RegExp("^"+T.call(X).replace(bn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),at=ut.Symbol,ft=ut.Uint8Array,Re=y.propertyIsEnumerable,Et=Ee.splice,$t=at?at.isConcatSpreadable:void 0,Be=Rn(Object.keys,Object),Pn=Jt(ut,"DataView"),fe=Jt(ut,"Map"),kn=Jt(ut,"Promise"),On=Jt(ut,"Set"),Tn=Jt(ut,"WeakMap"),he=Jt(Object,"create"),Hr=Ft(Pn),qr=Ft(fe),zr=Ft(kn),Yr=Ft(On),Xr=Ft(Tn),De=at?at.prototype:void 0,In=De?De.valueOf:void 0,Ai=De?De.toString:void 0;function Nt(a){var h=-1,m=a?a.length:0;for(this.clear();++h<m;){var b=a[h];this.set(b[0],b[1])}}function Wr(){this.__data__=he?he(null):{}}function Ur(a){return this.has(a)&&delete this.__data__[a]}function Vr(a){var h=this.__data__;if(he){var m=h[a];return m===r?void 0:m}return X.call(h,a)?h[a]:void 0}function Gr(a){var h=this.__data__;return he?h[a]!==void 0:X.call(h,a)}function Kr(a,h){var m=this.__data__;return m[a]=he&&h===void 0?r:h,this}Nt.prototype.clear=Wr,Nt.prototype.delete=Ur,Nt.prototype.get=Vr,Nt.prototype.has=Gr,Nt.prototype.set=Kr;function bt(a){var h=-1,m=a?a.length:0;for(this.clear();++h<m;){var b=a[h];this.set(b[0],b[1])}}function Jr(){this.__data__=[]}function Qr(a){var h=this.__data__,m=ke(h,a);if(m<0)return!1;var b=h.length-1;return m==b?h.pop():Et.call(h,m,1),!0}function Zr(a){var h=this.__data__,m=ke(h,a);return m<0?void 0:h[m][1]}function ts(a){return ke(this.__data__,a)>-1}function es(a,h){var m=this.__data__,b=ke(m,a);return b<0?m.push([a,h]):m[b][1]=h,this}bt.prototype.clear=Jr,bt.prototype.delete=Qr,bt.prototype.get=Zr,bt.prototype.has=ts,bt.prototype.set=es;function wt(a){var h=-1,m=a?a.length:0;for(this.clear();++h<m;){var b=a[h];this.set(b[0],b[1])}}function ns(){this.__data__={hash:new Nt,map:new(fe||bt),string:new Nt}}function is(a){return Oe(this,a).delete(a)}function rs(a){return Oe(this,a).get(a)}function ss(a){return Oe(this,a).has(a)}function os(a,h){return Oe(this,a).set(a,h),this}wt.prototype.clear=ns,wt.prototype.delete=is,wt.prototype.get=rs,wt.prototype.has=ss,wt.prototype.set=os;function Pe(a){var h=-1,m=a?a.length:0;for(this.__data__=new wt;++h<m;)this.add(a[h])}function as(a){return this.__data__.set(a,r),this}function ls(a){return this.__data__.has(a)}Pe.prototype.add=Pe.prototype.push=as,Pe.prototype.has=ls;function xt(a){this.__data__=new bt(a)}function cs(){this.__data__=new bt}function us(a){return this.__data__.delete(a)}function fs(a){return this.__data__.get(a)}function hs(a){return this.__data__.has(a)}function ds(a,h){var m=this.__data__;if(m instanceof bt){var b=m.__data__;if(!fe||b.length<n-1)return b.push([a,h]),this;m=this.__data__=new wt(b)}return m.set(a,h),this}xt.prototype.clear=cs,xt.prototype.delete=us,xt.prototype.get=fs,xt.prototype.has=hs,xt.prototype.set=ds;function ps(a,h){var m=_t(a)||Fn(a)?ce(a.length,String):[],b=m.length,A=!!b;for(var M in a)X.call(a,M)&&!(A&&(M=="length"||Ei(M,b)))&&m.push(M);return m}function ke(a,h){for(var m=a.length;m--;)if(Bi(a[m][0],h))return m;return-1}var gs=Ds(vs);function ms(a,h,m,b,A){var M=-1,R=a.length;for(m||(m=js),A||(A=[]);++M<R;){var I=a[M];m(I)?Cn(A,I):A[A.length]=I}return A}var ys=Ps();function vs(a,h){return a&&ys(a,h,He)}function Ci(a,h){h=Te(h,a)?[h]:Si(h);for(var m=0,b=h.length;a!=null&&m<b;)a=a[Ie(h[m++])];return m&&m==b?a:void 0}function bs(a){return J.call(a)}function ws(a,h){return a!=null&&h in Object(a)}function jn(a,h,m,b,A){return a===h?!0:a==null||h==null||!Ne(a)&&!Fe(h)?a!==a&&h!==h:xs(a,h,jn,m,b,A)}function xs(a,h,m,b,A,M){var R=_t(a),I=_t(h),j=u,W=u;R||(j=Rt(a),j=j==c?C:j),I||(W=Rt(h),W=W==c?C:W);var Q=j==C&&!ue(a),Z=W==C&&!ue(h),V=j==W;if(V&&!Q)return M||(M=new xt),R||Ws(a)?Li(a,h,m,b,A,M):ks(a,h,j,m,b,A,M);if(!(A&o)){var it=Q&&X.call(a,"__wrapped__"),rt=Z&&X.call(h,"__wrapped__");if(it||rt){var Bt=it?a.value():a,Mt=rt?h.value():h;return M||(M=new xt),m(Bt,Mt,b,A,M)}}return V?(M||(M=new xt),Os(a,h,m,b,A,M)):!1}function _s(a,h,m,b){var A=m.length,M=A;if(a==null)return!M;for(a=Object(a);A--;){var R=m[A];if(R[2]?R[1]!==a[R[0]]:!(R[0]in a))return!1}for(;++A<M;){R=m[A];var I=R[0],j=a[I],W=R[1];if(R[2]){if(j===void 0&&!(I in a))return!1}else{var Q=new xt,Z;if(!(Z===void 0?jn(W,j,b,s|o,Q):Z))return!1}}return!0}function Ms(a){if(!Ne(a)||Fs(a))return!1;var h=Di(a)||ue(a)?$e:xn;return h.test(Ft(a))}function As(a){return Fe(a)&&Hn(a.length)&&!!k[J.call(a)]}function Cs(a){return typeof a=="function"?a:a==null?Ks:typeof a=="object"?_t(a)?$s(a[0],a[1]):Es(a):Js(a)}function Ss(a){if(!Hs(a))return Be(a);var h=[];for(var m in Object(a))X.call(a,m)&&m!="constructor"&&h.push(m);return h}function Ls(a,h){var m=-1,b=je(a)?Array(a.length):[];return gs(a,function(A,M,R){b[++m]=h(A,M,R)}),b}function Es(a){var h=Ts(a);return h.length==1&&h[0][2]?Ri(h[0][0],h[0][1]):function(m){return m===a||_s(m,a,h)}}function $s(a,h){return Te(a)&&$i(h)?Ri(Ie(a),h):function(m){var b=Vs(m,a);return b===void 0&&b===h?Gs(m,a):jn(h,b,void 0,s|o)}}function Rs(a){return function(h){return Ci(h,a)}}function Bs(a){if(typeof a=="string")return a;if(qn(a))return Ai?Ai.call(a):"";var h=a+"";return h=="0"&&1/a==-1/0?"-0":h}function Si(a){return _t(a)?a:qs(a)}function Ds(a,h){return function(m,b){if(m==null)return m;if(!je(m))return a(m,b);for(var A=m.length,M=-1,R=Object(m);++M<A&&b(R[M],M,R)!==!1;);return m}}function Ps(a){return function(h,m,b){for(var A=-1,M=Object(h),R=b(h),I=R.length;I--;){var j=R[++A];if(m(M[j],j,M)===!1)break}return h}}function Li(a,h,m,b,A,M){var R=A&o,I=a.length,j=h.length;if(I!=j&&!(R&&j>I))return!1;var W=M.get(a);if(W&&M.get(h))return W==h;var Q=-1,Z=!0,V=A&s?new Pe:void 0;for(M.set(a,h),M.set(h,a);++Q<I;){var it=a[Q],rt=h[Q];if(b)var Bt=R?b(rt,it,Q,h,a,M):b(it,rt,Q,a,h,M);if(Bt!==void 0){if(Bt)continue;Z=!1;break}if(V){if(!Sn(h,function(Mt,Ht){if(!V.has(Ht)&&(it===Mt||m(it,Mt,b,A,M)))return V.add(Ht)})){Z=!1;break}}else if(!(it===rt||m(it,rt,b,A,M))){Z=!1;break}}return M.delete(a),M.delete(h),Z}function ks(a,h,m,b,A,M,R){switch(m){case z:if(a.byteLength!=h.byteLength||a.byteOffset!=h.byteOffset)return!1;a=a.buffer,h=h.buffer;case N:return!(a.byteLength!=h.byteLength||!b(new ft(a),new ft(h)));case f:case p:case _:return Bi(+a,+h);case g:return a.name==h.name&&a.message==h.message;case $:case P:return a==h+"";case w:var I=$n;case D:var j=M&o;if(I||(I=Bn),a.size!=h.size&&!j)return!1;var W=R.get(a);if(W)return W==h;M|=s,R.set(a,h);var Q=Li(I(a),I(h),b,A,M,R);return R.delete(a),Q;case q:if(In)return In.call(a)==In.call(h)}return!1}function Os(a,h,m,b,A,M){var R=A&o,I=He(a),j=I.length,W=He(h),Q=W.length;if(j!=Q&&!R)return!1;for(var Z=j;Z--;){var V=I[Z];if(!(R?V in h:X.call(h,V)))return!1}var it=M.get(a);if(it&&M.get(h))return it==h;var rt=!0;M.set(a,h),M.set(h,a);for(var Bt=R;++Z<j;){V=I[Z];var Mt=a[V],Ht=h[V];if(b)var Pi=R?b(Ht,Mt,V,h,a,M):b(Mt,Ht,V,a,h,M);if(!(Pi===void 0?Mt===Ht||m(Mt,Ht,b,A,M):Pi)){rt=!1;break}Bt||(Bt=V=="constructor")}if(rt&&!Bt){var qe=a.constructor,ze=h.constructor;qe!=ze&&"constructor"in a&&"constructor"in h&&!(typeof qe=="function"&&qe instanceof qe&&typeof ze=="function"&&ze instanceof ze)&&(rt=!1)}return M.delete(a),M.delete(h),rt}function Oe(a,h){var m=a.__data__;return Ns(h)?m[typeof h=="string"?"string":"hash"]:m.map}function Ts(a){for(var h=He(a),m=h.length;m--;){var b=h[m],A=a[b];h[m]=[b,A,$i(A)]}return h}function Jt(a,h){var m=En(a,h);return Ms(m)?m:void 0}var Rt=bs;(Pn&&Rt(new Pn(new ArrayBuffer(1)))!=z||fe&&Rt(new fe)!=w||kn&&Rt(kn.resolve())!=B||On&&Rt(new On)!=D||Tn&&Rt(new Tn)!=U)&&(Rt=function(a){var h=J.call(a),m=h==C?a.constructor:void 0,b=m?Ft(m):void 0;if(b)switch(b){case Hr:return z;case qr:return w;case zr:return B;case Yr:return D;case Xr:return U}return h});function Is(a,h,m){h=Te(h,a)?[h]:Si(h);for(var b,A=-1,R=h.length;++A<R;){var M=Ie(h[A]);if(!(b=a!=null&&m(a,M)))break;a=a[M]}if(b)return b;var R=a?a.length:0;return!!R&&Hn(R)&&Ei(M,R)&&(_t(a)||Fn(a))}function js(a){return _t(a)||Fn(a)||!!($t&&a&&a[$t])}function Ei(a,h){return h=h??l,!!h&&(typeof a=="number"||_n.test(a))&&a>-1&&a%1==0&&a<h}function Te(a,h){if(_t(a))return!1;var m=typeof a;return m=="number"||m=="symbol"||m=="boolean"||a==null||qn(a)?!0:yn.test(a)||!mn.test(a)||h!=null&&a in Object(h)}function Ns(a){var h=typeof a;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?a!=="__proto__":a===null}function Fs(a){return!!L&&L in a}function Hs(a){var h=a&&a.constructor,m=typeof h=="function"&&h.prototype||y;return a===m}function $i(a){return a===a&&!Ne(a)}function Ri(a,h){return function(m){return m==null?!1:m[a]===h&&(h!==void 0||a in Object(m))}}var qs=Nn(function(a){a=Us(a);var h=[];return Lt.test(a)&&h.push(""),a.replace(vn,function(m,b,A,M){h.push(A?M.replace(wn,"$1"):b||m)}),h});function Ie(a){if(typeof a=="string"||qn(a))return a;var h=a+"";return h=="0"&&1/a==-1/0?"-0":h}function Ft(a){if(a!=null){try{return T.call(a)}catch{}try{return a+""}catch{}}return""}function zs(a,h){return ms(Ys(a,h))}function Ys(a,h){var m=_t(a)?An:Ls;return m(a,Cs(h))}function Nn(a,h){if(typeof a!="function"||h&&typeof h!="function")throw new TypeError(i);var m=function(){var b=arguments,A=h?h.apply(this,b):b[0],M=m.cache;if(M.has(A))return M.get(A);var R=a.apply(this,b);return m.cache=M.set(A,R),R};return m.cache=new(Nn.Cache||wt),m}Nn.Cache=wt;function Bi(a,h){return a===h||a!==a&&h!==h}function Fn(a){return Xs(a)&&X.call(a,"callee")&&(!Re.call(a,"callee")||J.call(a)==c)}var _t=Array.isArray;function je(a){return a!=null&&Hn(a.length)&&!Di(a)}function Xs(a){return Fe(a)&&je(a)}function Di(a){var h=Ne(a)?J.call(a):"";return h==d||h==v}function Hn(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=l}function Ne(a){var h=typeof a;return!!a&&(h=="object"||h=="function")}function Fe(a){return!!a&&typeof a=="object"}function qn(a){return typeof a=="symbol"||Fe(a)&&J.call(a)==q}var Ws=jt?Ln(jt):As;function Us(a){return a==null?"":Bs(a)}function Vs(a,h,m){var b=a==null?void 0:Ci(a,h);return b===void 0?m:b}function Gs(a,h){return a!=null&&Is(a,h,ws)}function He(a){return je(a)?ps(a):Ss(a)}function Ks(a){return a}function Js(a){return Te(a)?Kt(Ie(a)):Rs(a)}e.exports=zs})(ve,ve.exports)),ve.exports}var Bc=Rc();const di=ar(Bc);function Dc(e,t,n){let i=[];e.filterProperties.length&&e.filterProperties.forEach(s=>{const o={},l=p=>s.format==="date"?O(p).valueOf():parseFloat(p);t.forEach(p=>{if(s.type==="range"){const g=G(s.key,p);if(Array.isArray(g)){const d=[l(g[0]),l(g[1])];o.min=o.min!==void 0?Math.min(o.min,d[0]):d[0],o.max=o.max!==void 0?Math.max(o.max,d[1]):d[1]}else{const d=l(g);o.min=o.min!==void 0?Math.min(o.min,d):d,o.max=o.max!==void 0?Math.max(o.max,d):d}return}Array.isArray(p[s.key])?p[s.key].forEach(g=>{o[g]=void 0}):s.type==="spatial"?(o.geometry=s?.state?.geometry||void 0,o.geometry&&(s.stringifiedState=o.geometry.type),o.mode=s.mode||"intersects"):s.key?.includes(".")?hi(di(n.items,s.key)).filter(g=>g).forEach(g=>{o[g]=void 0}):o[p[s.key]]=void 0});const c=s.key||s.keys.join("|"),u=n.filters[c];let f;if(s.state)if(s.type==="range"){const p=_=>s.format==="date"?O(_).valueOf():parseFloat(_),g=p(s.state.min),d=p(s.state.max),v=p(s.min??o.min),w=p(s.max??o.max);s.format==="date"?f=!O(g).isSame(O(v),"day")||!O(d).isSame(O(w),"day")||void 0:f=g!==v||d!==w||void 0}else f=Object.values(s.state).some(p=>p)||void 0;if(n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:f||u?.dirty,key:c},s.type==="range"?{min:o.min,max:o.max,format:s.format}:{},s),s.type==="range"&&n.filters[c].dirty){const p=v=>s.format==="date"?O(v).valueOf():parseFloat(v),g=p(s.state?.min!==void 0?s.state.min:u?.state?.min),d=p(s.state?.max!==void 0?s.state.max:u?.state?.max);n.filters[c].stringifiedState=s.format==="date"?`${O(g).format(ae)} - ${O(d).format(ae)}`:`${g} - ${d}`}if(n.filters[c].state=Object.assign({},o,u?.state||{},s.state),s.type==="range"&&s.state){const p=g=>s.format==="date"?O(g).valueOf():parseFloat(g);s.state.min!==void 0&&(n.filters[c].state.min=p(s.state.min)),s.state.max!==void 0&&(n.filters[c].state.max=p(s.state.max))}}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(i=Array.from(new Set(t.reduce((s,o)=>s.concat(o[e.aggregateResults]),[]))).filter(s=>s).sort((s,o)=>s.localeCompare(o)));const r=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(o=>{r.includes(o)||r.push(o)}):(s.type==="select"||s.type==="multiselect")&&(r.includes(s.key)||r.push(s.key))}),Ul(t,Object.assign({keys:r},e.fuseConfig)),i}async function Pc(e,t,n){let i;n.externalFilter?i=await Jl(t,n.filters,e):i=await Vl(t,n.filters,e),n.results=n.sortResults(i,{isExternalResult:!!n.externalFilter})}function kc(e,t,n){const i=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return S`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${i}"
        .tabIndex=${t}
        .filterObject=${e}
        .results=${n.results}
        .unstyled=${n.unstyled}
        @result=${n.updateResult}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return S`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${i}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${hi(di(n.items,e.key)).filter(r=>r)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return S`
        <eox-itemfilter-range
          .inlineMode=${n.inlineMode||!1}
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${hi(di(n.items,e.key)).filter(r=>r)}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return S`
        <eox-itemfilter-spatial
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return S``}}function Oc(e,t,n={}){const{resultSorting:i}=t;if(i===!1)return e;if(i===void 0)return n.isExternalResult||t.fuseConfig?.shouldSort?e:[...e].sort((o,l)=>{const c=G(t.titleProperty,o)||"",u=G(t.titleProperty,l)||"";return c.toString().localeCompare(u.toString())});if(typeof i=="function")return[...e].sort(i);const r=typeof i=="string"?i:i.key,s=typeof i=="object"&&i.order==="desc"?-1:1;return r?[...e].sort((o,l)=>{const c=G(r,o)||"",u=G(r,l)||"";return c.toString().localeCompare(u.toString())*s}):e}function Tc(e,t,n){return S`
    ${H(e.dirty,()=>S`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${i=>{const r=i.target.parentElement.querySelector("[slot=filter]");r&&typeof r.reset=="function"&&r.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":S`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <span class="tooltip left">Reset filter</span>
              `}
        </button>
      `)}
  `}function Ic(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}class jc extends gt{static get properties(){return{items:{type:Array},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{type:Array},fuseConfig:{type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{type:Boolean},resultActionIcon:{type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}#t=[];#e=[];#n=ic;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=an(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}apply(){this.#n=Jn.reduce((t,n)=>(t[n]=this[n],t),{}),this.#t=Dc(this.#n,this.#e,this),this.search()}async searchHandler(){await Pc(this.#n,this.#e,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(t,n){return Oc(t,this.#n,n)}#r(t,n){return kc(t,n,this)}#i(t,n){return Tc(t,n,this)}resetFilters(){Ic(this)}firstUpdated(t){let n={};Jn.map(i=>{n={...n,[i]:this[i]}}),this.#n=n,this.#e=this.items?.map((i,r)=>Object.assign({id:i[this.idProperty]||`item-${r}`},i))||[],this.apply()}updated(t){let n=!1,i=!1;Jn.forEach(r=>{t.has(r)&&(this.#n[r]=this[r],["items","filterProperties","idProperty","aggregateResults","fuseConfig","matchAllWhenEmpty","externalFilter"].includes(r)?n=!0:r==="resultSorting"&&(i=!0))}),n?(this.#e=this.items?.map((r,s)=>Object.assign({id:r[this.idProperty]||`item-${s}`},r))||[],this.apply()):i&&this.search()}updateResult(t){this.selectedResult=t.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(t){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:t.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(t){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:t.detail,bubbles:!0,composed:!0}))}emitResultAction(t){this.dispatchEvent(new CustomEvent("click:result-action",{detail:t.detail,bubbles:!0,composed:!0}))}render(){return S`
      <style>
        ${so}
        ${!this.unstyled&&pi}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":Pt}
        @submit="${t=>t.preventDefault()}"
      >
        ${H(this.filterProperties,()=>S`
            <div
              style="display: var(--filter-display); min-height: ${this.inlineMode?"100%":this.filterProperties.length>2?"50%":this.filterProperties.length*32+105+"px"}"
            >
              <eox-itemfilter-container
                .filters=${this.filters}
                .filterProperties=${this.filterProperties}
                .inlineMode=${this.inlineMode||!1}
                @reset=${()=>this.resetFilters()}
                @filter=${()=>this.search()}
              >
                <section
                  slot="section"
                  style="height: 100%; overflow: hidden; display: flex; flex-direction: column;"
                >
                  ${H(!this.inlineMode,()=>S`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${H(!this.inlineMode&&this.#n.filterProperties&&!this.inlineMode&&this.#n.filterProperties&&fi(this.filters),()=>S`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?Pt:S`
                                    <i class="small">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <title>close</title>
                                        <path
                                          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                        />
                                      </svg>
                                    </i>
                                  `}
                              <span class="small-text">Reset all</span>
                            </button>
                          `)}
                      </nav>
                    `)}
                  <div class="scroll" style="flex: 1; max-height: 100%">
                    <ul id="filters" class="list no-space">
                      ${on(Object.values(this.filters),(t,n)=>S` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${t}
                              @details-toggled=${i=>Tr(i,this.#n,this)}
                              data-details="${t.key}"
                            >
                              ${this.#i(t,ir(n,1))}
                              ${this.#r(t,ir(n,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${H(this.#n?.showResults&&this.results,()=>S`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${this.#n}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${this.#t}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @mouseenter:result=${this.mouseEnterResult}
              @mouseleave:result=${this.mouseLeaveResult}
              @click:result-action=${this.emitResultAction}
            >
              <nav class="title-nav">
                <slot name="resultstitle"
                  ><p><strong>Results</strong></p></slot
                >
              </nav>
            </eox-itemfilter-results>
          `)}
      </form>
    `}}customElements.define("eox-itemfilter",jc);export{jc as EOxItemFilter};
