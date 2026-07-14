import{dP as fs,dO as hs,b0 as he,eH as z,d4 as $e,aZ as C,el as It,gD as ds,fu as Mt,ft as Nt,fs as Le,dE as Mi}from"./index-DAubJ0S3.js";import{d as E}from"./dayjs.min-7BdINwRW.js";import{s as qe,u as ai}from"./static-DHsI8RHI.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import{a as et,h as kt,b as se,i as Fn,c as Et,d as Tt,l as ps}from"./index-DG2Cdpvp.js";import{a as Si,m as gs,l as Li,f as ms}from"./index-CxojoGlr.js";import"./orient2d-DArCjZZA.js";const ys=`
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
`;hs();const Hn=`
${fs}
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
  max-height: 400px;
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
`;class bs extends he{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#e(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return C`
      <style>
        ${!this.unstyled&&Hn}
      </style>

      ${z(this.filterObject.featured,()=>C`<slot name="filter"></slot>`,()=>C`<details
            @toggle="${this.#e}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||$e}
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
    `}}customElements.define("eox-itemfilter-expandcontainer",bs);function Re(e){return Array.isArray?Array.isArray(e):Ri(e)==="[object Array]"}function vs(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Sn(e){return e==null?"":vs(e)}function V(e){return typeof e=="string"}function $t(e){return typeof e=="number"}function ws(e){return e===!0||e===!1||xs(e)&&Ri(e)=="[object Boolean]"}function $i(e){return typeof e=="object"}function xs(e){return $i(e)&&e!==null}function ne(e){return e!=null}function St(e){return!e.trim().length}function Ri(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const _s="Incorrect 'index' type",Ln="Invalid doc index: must be a non-negative integer within the bounds of the docs array",As=e=>`Invalid value for key ${e}`,Cs=e=>`Pattern length exceeds max of ${e}.`,Ms=e=>`Missing ${e} property in key`,Ss=e=>`Property 'weight' in key '${e}' must be a positive integer`,Ls="Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.",li=Object.prototype.hasOwnProperty;var $s=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{const i=ki(n);this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function ki(e){let t=null,n=null,i=null,r=1,o=null;if(V(e)||Re(e))i=e,t=ci(e),n=Rt(e);else{if(!li.call(e,"name"))throw new Error(Ms("name"));const a=e.name;if(i=a,li.call(e,"weight")&&e.weight!==void 0&&(r=e.weight,r<=0))throw new Error(Ss(Rt(a)));t=ci(a),n=Rt(a),o=e.getFn??null}return{path:t,id:n,weight:r,src:i,getFn:o}}function ci(e){return Re(e)?e:e.split(".")}function Rt(e){return Re(e)?e.join("."):e}function Rs(e,t){const n=[];let i=!1;const r=(o,a,c,u)=>{if(ne(o))if(!a[c])n.push(u!==void 0?{v:o,i:u}:o);else{const f=o[a[c]];if(!ne(f))return;if(c===a.length-1&&(V(f)||$t(f)||ws(f)||typeof f=="bigint"))n.push(u!==void 0?{v:Sn(f),i:u}:Sn(f));else if(Re(f)){i=!0;for(let h=0,p=f.length;h<p;h+=1)r(f[h],a,c+1,h)}else a.length&&r(f,a,c+1,u)}};return r(e,V(t)?t.split("."):t,0),i?n:n[0]}const ks={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Es={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Ts={location:0,threshold:.6,distance:100},Ds={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:"any",getFn:Rs,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},S=Object.freeze({...Es,...ks,...Ts,...Ds});function js(e){return e>=9&&e<=13||e===32||e===160}function Os(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(r){let o=0,a=!1;for(let u=0;u<r.length;u++)js(r.charCodeAt(u))?a=!1:a||(o++,a=!0);if(o===0&&(o=1),n.has(o))return n.get(o);const c=Math.round(i/Math.pow(o,.5*e))/i;return n.set(o,c),c},clear(){n.clear()}}}var zn=class{constructor({getFn:e=S.getFn,fieldNormWeight:t=S.fieldNormWeight}={}){this.norm=Os(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;const e=this.docs.length;this.records=new Array(e);let t=0;if(V(this.docs[0]))for(let n=0;n<e;n++){const i=this._createStringRecord(this.docs[n],n);i&&(this.records[t++]=i)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw new Error(Ln);if(V(e)){const i=this._createStringRecord(e,t);return i&&this.records.push(i),i}const n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw new Error(Ln);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&(this.records[t].i-=1)}removeAll(e){const t=new Set;for(const i of e)Number.isInteger(i)&&i>=0&&t.add(i);if(t.size===0)return;this.records=this.records.filter(i=>!t.has(i.i));const n=Array.from(t).sort((i,r)=>i-r);for(const i of this.records){let r=0,o=n.length;for(;r<o;){const a=r+o>>>1;n[a]<i.i?r=a+1:o=a}i.i-=r}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!ne(e)||St(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){const n={i:t,$:{}};for(let i=0,r=this.keys.length;i<r;i++){const o=this.keys[i],a=o.getFn?o.getFn(e):this.getFn(e,o.path);if(ne(a)){if(Re(a)){const c=[];for(let u=0,f=a.length;u<f;u+=1){const h=a[u];if(ne(h)){if(V(h)){if(!St(h)){const p={v:h,i:u,n:this.norm.get(h)};c.push(p)}}else if(ne(h.v)){const p=V(h.v)?h.v:Sn(h.v);if(!St(p)){const m={v:p,i:h.i,n:this.norm.get(p)};c.push(m)}}}}n.$[i]=c}else if(V(a)&&!St(a)){const c={v:a,n:this.norm.get(a)};n.$[i]=c}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function Ei(e,t,{getFn:n=S.getFn,fieldNormWeight:i=S.fieldNormWeight}={}){const r=new zn({getFn:n,fieldNormWeight:i});return r.setKeys(e.map(ki)),r.setSources(t),r.create(),r}function Bs(e,{getFn:t=S.getFn,fieldNormWeight:n=S.fieldNormWeight}={}){const{keys:i,records:r}=e,o=new zn({getFn:t,fieldNormWeight:n});return o.setKeys(i),o.setIndexRecords(r),o}function Ps(e=[],t=S.minMatchCharLength){const n=[];let i=-1,r=-1,o=0;for(let a=e.length;o<a;o+=1){const c=e[o];c&&i===-1?i=o:!c&&i!==-1&&(r=o-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}function Is(e,t,n,{location:i=S.location,distance:r=S.distance,threshold:o=S.threshold,findAllMatches:a=S.findAllMatches,minMatchCharLength:c=S.minMatchCharLength,includeMatches:u=S.includeMatches,ignoreLocation:f=S.ignoreLocation}={}){if(t.length>32)throw new Error(Cs(32));const h=t.length,p=e.length,m=Math.max(0,Math.min(i,p));let y=o,w=m;const _=(D,P)=>{const K=D/h;if(f)return K;const de=Math.abs(m-P);return r?K+de/r:de?1:K},$=c>1||u,L=$?Array(p):[];let T;for(;(T=e.indexOf(t,w))>-1;){const D=_(0,T);if(y=Math.min(D,y),w=T+h,$){let P=0;for(;P<h;)L[T+P]=1,P+=1}}w=-1;let j=[],B=1,q=0,F=h+p;const oe=1<<h-1;for(let D=0;D<h;D+=1){let P=0,K=F;for(;P<K;)_(D,m+K)<=y?P=K:F=K,K=Math.floor((F-P)/2+P);F=K;let de=Math.max(1,m-K+1);const pe=a?p:Math.min(m+K,p)+h,X=Array(pe+2);X[pe+1]=(1<<D)-1;for(let H=pe;H>=de;H-=1){const Te=H-1,Ge=n[e[Te]];if(X[H]=(X[H+1]<<1|1)&Ge,D&&(X[H]|=(j[H+1]|j[H])<<1|1|j[H+1]),X[H]&oe&&(B=_(D,Te),B<=y)){if(y=B,w=Te,q=D,w<=m)break;de=Math.max(1,2*m-w)}}if(_(D+1,m)>y)break;j=X}if($&&w>=0){const D=Math.min(p-1,w+h-1+q);for(let P=w;P<=D;P+=1)n[e[P]]&&(L[P]=1)}const te={isMatch:w>=0,score:Math.max(.001,B)};if($){const D=Ps(L,c);D.length?u&&(te.indices=D):te.isMatch=!1}return te}function Ns(e){const t={};for(let n=0,i=e.length;n<i;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<i-n-1}return t}function qn(e){if(e.length<=1)return e;e.sort((n,i)=>n[0]-i[0]||n[1]-i[1]);const t=[e[0]];for(let n=1,i=e.length;n<i;n+=1){const r=t[t.length-1],o=e[n];o[0]<=r[1]+1?r[1]=Math.max(r[1],o[1]):t.push(o)}return t}const Ti={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Fs=new RegExp("["+Object.keys(Ti).join("")+"]","g"),tt=typeof String.prototype.normalize=="function"?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Fs,t=>Ti[t]):e=>e;var Kn=class{constructor(e,{location:t=S.location,threshold:n=S.threshold,distance:i=S.distance,includeMatches:r=S.includeMatches,findAllMatches:o=S.findAllMatches,minMatchCharLength:a=S.minMatchCharLength,isCaseSensitive:c=S.isCaseSensitive,ignoreDiacritics:u=S.ignoreDiacritics,ignoreLocation:f=S.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:f},e=c?e:e.toLowerCase(),e=u?tt(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const h=(m,y)=>{this.chunks.push({pattern:m,alphabet:Ns(m),startIndex:y})},p=this.pattern.length;if(p>32){let m=0;const y=p%32,w=p-y;for(;m<w;)h(this.pattern.substr(m,32),m),m+=32;if(y){const _=p-32;h(this.pattern.substr(_),_)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i}=this.options;if(e=t?e:e.toLowerCase(),e=n?tt(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};const w={isMatch:!0,score:0};return i&&(w.indices=[[0,e.length-1]]),w}const{location:r,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options,h=[];let p=0,m=!1;this.chunks.forEach(({pattern:w,alphabet:_,startIndex:$})=>{const{isMatch:L,score:T,indices:j}=Is(e,w,_,{location:r+$,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:f});L&&(m=!0),p+=T,L&&j&&h.push(...j)});const y={isMatch:m,score:m?p/this.chunks.length:1};return m&&i&&(y.indices=qn(h)),y}};const Hs=new Set(["fuzzy","include"]);function zs(e){return e.startsWith("inverse")}const $n=[{type:"exact",multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:"exact",search(t){const n=t===e;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"include",multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:"include",search(t){let n=0,i;const r=[],o=e.length;for(;(i=t.indexOf(e,n))>-1;)n=i+o,r.push([i,n-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}})},{type:"prefix-exact",multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:"prefix-exact",search(t){const n=t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"inverse-prefix-exact",multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:"inverse-prefix-exact",search(t){const n=!t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"inverse-suffix-exact",multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:"inverse-suffix-exact",search(t){const n=!t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"suffix-exact",multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:"suffix-exact",search(t){const n=t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[t.length-e.length,t.length-1]}}})},{type:"inverse-exact",multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:"inverse-exact",search(t){const n=t.indexOf(e)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"fuzzy",multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{const n=new Kn(e,{location:t.location??S.location,threshold:t.threshold??S.threshold,distance:t.distance??S.distance,includeMatches:t.includeMatches??S.includeMatches,findAllMatches:t.findAllMatches??S.findAllMatches,minMatchCharLength:t.minMatchCharLength??S.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??S.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??S.ignoreDiacritics,ignoreLocation:t.ignoreLocation??S.ignoreLocation});return{type:"fuzzy",search(i){return n.searchIn(i)}}}}],ui=$n.length,qs="\0",Ks="|";function Us(e){const t=[],n=e.length;let i=0;for(;i<n;){for(;i<n&&e[i]===" ";)i++;if(i>=n)break;let r=i;for(;r<n&&e[r]!==" "&&e[r]!=='"';)r++;if(r<n&&e[r]==='"'){for(r++;r<n;){if(e[r]==='"'){const o=r+1;if(o>=n||e[o]===" "){r++;break}if(e[o]==="$"&&(o+1>=n||e[o+1]===" ")){r+=2;break}}r++}t.push(e.substring(i,r)),i=r}else{for(;r<n&&e[r]!==" ";)r++;t.push(e.substring(i,r)),i=r}}return t}function fi(e,t){const n=e.match(t);return n?n[1]:null}function Ws(e,t={}){return e.replace(/\\\|/g,qs).split(Ks).map(n=>{const i=Us(n.replace(/\u0000/g,"|").trim()).filter(o=>o&&!!o.trim()),r=[];for(let o=0,a=i.length;o<a;o+=1){const c=i[o];let u=!1,f=-1;for(;!u&&++f<ui;){const h=$n[f],p=fi(c,h.multiRegex);p&&(r.push(h.create(p,t)),u=!0)}if(!u)for(f=-1;++f<ui;){const h=$n[f],p=fi(c,h.singleRegex);if(p){r.push(h.create(p,t));break}}}return r})}var Vs=class{constructor(e,{isCaseSensitive:t=S.isCaseSensitive,ignoreDiacritics:n=S.ignoreDiacritics,includeMatches:i=S.includeMatches,minMatchCharLength:r=S.minMatchCharLength,ignoreLocation:o=S.ignoreLocation,findAllMatches:a=S.findAllMatches,location:c=S.location,threshold:u=S.threshold,distance:f=S.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i,minMatchCharLength:r,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:f},e=t?e:e.toLowerCase(),e=n?tt(e):e,this.pattern=e,this.query=Ws(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i,ignoreDiacritics:r}=this.options;e=i?e:e.toLowerCase(),e=r?tt(e):e;let o=0;const a=[];let c=0,u=!1;for(let f=0,h=t.length;f<h;f+=1){const p=t[f];a.length=0,o=0,u=!1;for(let m=0,y=p.length;m<y;m+=1){const w=p[m],{isMatch:_,indices:$,score:L}=w.search(e);if(_)o+=1,c+=L,zs(w.type)&&(u=!0),n&&(Hs.has(w.type)?a.push(...$):a.push($));else{c=0,o=0,a.length=0,u=!1;break}}if(o){const m={isMatch:!0,score:c/o};return u&&(m.hasInverse=!0),n&&(m.indices=qn(a)),m}}return{isMatch:!1,score:1}}};const Rn=[];function Un(...e){Rn.push(...e)}function Dt(e,t){for(let n=0,i=Rn.length;n<i;n+=1){const r=Rn[n];if(r.condition(e,t))return new r(e,t)}return new Kn(e,t)}const jt={AND:"$and",OR:"$or"},kn={PATH:"$path",PATTERN:"$val"},En=e=>!!(e[jt.AND]||e[jt.OR]),Gs=e=>!!e[kn.PATH],Ys=e=>!Re(e)&&$i(e)&&!En(e),hi=e=>({[jt.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Di(e,t,{auto:n=!0}={}){const i=r=>{if(V(r)){const u={keyId:null,pattern:r};return n&&(u.searcher=Dt(r,t)),u}const o=Object.keys(r),a=Gs(r);if(!a&&o.length>1&&!En(r))return i(hi(r));if(Ys(r)){const u=a?r[kn.PATH]:o[0],f=a?r[kn.PATTERN]:r[u];if(!V(f))throw new Error(As(u));const h={keyId:Rt(u),pattern:f};return n&&(h.searcher=Dt(f,t)),h}const c={children:[],operator:o[0]};return o.forEach(u=>{const f=r[u];Re(f)&&f.forEach(h=>{c.children.push(i(h))})}),c};return En(e)||(e=hi(e)),i(e)}function Tn(e,{ignoreFieldNorm:t=S.ignoreFieldNorm}){let n=1;return e.forEach(({key:i,norm:r,score:o})=>{const a=i?i.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:r))}),n}function Xs(e,{ignoreFieldNorm:t=S.ignoreFieldNorm}){e.forEach(n=>{n.score=Tn(n.matches,{ignoreFieldNorm:t})})}var Zs=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){const t=this.heap;for(;e>0;){const n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;const i=t[e];t[e]=t[n],t[n]=i,e=n}}_sinkDown(e){const t=this.heap,n=t.length;let i=e;do{e=i;const r=2*e+1,o=2*e+2;if(r<n&&this.comparator(t[r],t[i])>0&&(i=r),o<n&&this.comparator(t[o],t[i])>0&&(i=o),i!==e){const a=t[e];t[e]=t[i],t[i]=a}}while(i!==e)}};function Qs(e){const t=[];return e.matches.forEach(n=>{if(!ne(n.indices)||!n.indices.length)return;const i={indices:n.indices,value:n.value};n.key&&(i.key=n.key.id),n.idx>-1&&(i.refIndex=n.idx),t.push(i)}),t}function Js(e,t,{includeMatches:n=S.includeMatches,includeScore:i=S.includeScore}={}){return e.map(r=>{const{idx:o}=r,a={item:t[o],refIndex:o};return n&&(a.matches=Qs(r)),i&&(a.score=r.score),a})}const eo=/[\p{L}\p{M}\p{N}_]+/gu,di=new WeakSet;function to(e){di.has(e)||(di.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function no(e){if(typeof e=="function"){let t=!1;return n=>{const i=e(n);if(!t&&(t=!0,!Array.isArray(i)||i.some(r=>typeof r!="string")))throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(i)?"array containing non-strings":typeof i}.`);return i}}return e instanceof RegExp?(e.global||to(e),t=>t.match(e)||[]):t=>t.match(eo)||[]}function Dn({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){const i=no(n);return{tokenize(r){return e||(r=r.toLowerCase()),t&&(r=tt(r)),i(r)}}}var io=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=Dn({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});const n=this.analyzer.tokenize(e),{df:i,fieldCount:r}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(const o of n){this.termSearchers.push(new Kn(o,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));const a=i.get(o)||0,c=Math.log(1+(r-a+.5)/(a+.5));this.idfWeights.push(c)}this.combineAll=t.tokenMatch==="all",this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const t=[];let n=0,i=0,r=0,o=0;const a=this.combineAll&&!this.useMask?new Set:null;for(let f=0;f<this.termSearchers.length;f++){const h=this.termSearchers[f].searchIn(e),p=this.idfWeights[f];i+=p,h.isMatch&&(r++,n+=p*(1-h.score),h.indices&&t.push(...h.indices),this.combineAll&&(this.useMask?o|=1<<f:a.add(f)))}if(r===0)return{isMatch:!1,score:1};const c=i>0?1-n/i:0,u={isMatch:!0,score:Math.max(.001,c)};return this.options.includeMatches&&t.length&&(u.indices=qn(t)),this.combineAll&&(this.useMask?u.matchedMask=o:u.matchedTerms=a,u.termCount=this.numTerms),u}};function xn(e,t,n,i){const r=i.tokenize(t);if(!r.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);const o=new Set(r);let a=e.docTermFieldHits.get(n);a||(a=new Map,e.docTermFieldHits.set(n,a));for(const c of o)a.set(c,(a.get(c)||0)+1),e.df.set(c,(e.df.get(c)||0)+1)}function ji(e,t,n,i){const{i:r,v:o,$:a}=t;if(o!==void 0){xn(e,o,r,i);return}if(a)for(let c=0;c<n;c++){const u=a[c];if(u)if(Array.isArray(u))for(const f of u)xn(e,f.v,r,i);else xn(e,u.v,r,i)}}function ro(e,t,n){const i={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(const r of e)ji(i,r,t,n);return i}function so(e,t,n,i){ji(e,t,n,i)}function oo(e,t){const n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);const i=e.docTermFieldHits.get(t);if(i){for(const[r,o]of i){const a=(e.df.get(r)||0)-o;a<=0?e.df.delete(r):e.df.set(r,a)}e.docTermFieldHits.delete(t)}}function pi(e,t){if(t.length===0)return;const n=Array.from(new Set(t)).sort((c,u)=>c-u);for(const c of n)oo(e,c);const i=c=>{let u=0,f=n.length;for(;u<f;){const h=u+f>>>1;n[h]<c?u=h+1:f=h}return c-u},r=n[0],o=new Map;for(const[c,u]of e.docFieldCount)o.set(c>r?i(c):c,u);e.docFieldCount=o;const a=new Map;for(const[c,u]of e.docTermFieldHits)a.set(c>r?i(c):c,u);e.docTermFieldHits=a}var ke=class{constructor(e,t,n){this.options={...S,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new $s(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const t=Dt(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof zn))throw new Error(_s);if(this._myIndex=t||Ei(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const n=Dn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=ro(this._myIndex.records,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}add(e){if(!ne(e))return;this._docs.push(e);const t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){const n=Dn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});so(this._invertedIndex,t,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}remove(e=()=>!1){const t=[],n=[];for(let i=0,r=this._docs.length;i<r;i+=1)e(this._docs[i],i)&&(t.push(this._docs[i]),n.push(i));if(n.length){this._invertedIndex&&pi(this._invertedIndex,n);const i=new Set(n);this._docs=this._docs.filter((r,o)=>!i.has(o)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw new Error(Ln);this._invertedIndex&&pi(this._invertedIndex,[e]);const t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){const{limit:n=-1}=t||{},{includeMatches:i,includeScore:r,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;if(V(e)&&!e.trim()){let m=this._docs.map((y,w)=>({item:y,refIndex:w}));return $t(n)&&n>-1&&(m=m.slice(0,n)),m}const u=o&&$t(n)&&n>0&&V(e),f=a,h=(m,y)=>f(m,y)||m.idx-y.idx;let p;if(u){const m=new Zs(n,h);V(this._docs[0])?this._searchStringList(e,{heap:m,ignoreFieldNorm:c}):this._searchObjectList(e,{heap:m,ignoreFieldNorm:c}),p=m.extractSorted()}else p=V(e)?V(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),Xs(p,{ignoreFieldNorm:c}),o&&p.sort(V(e)?h:f),$t(n)&&n>-1&&(p=p.slice(0,n));return Js(p,this._docs,{includeMatches:i,includeScore:r})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=t?null:[];return o.forEach(({v:c,i:u,n:f})=>{if(!ne(c))return;const h=i.searchIn(c);if(h.isMatch){const p={score:h.score,value:c,norm:f,indices:h.indices};r&&(p.matchedMask=h.matchedMask,p.matchedTerms=h.matchedTerms,p.termCount=h.termCount);const m=[p];if(!r||this._coversAllTokens(m)){const y={item:c,idx:u,matches:m};t?(y.score=Tn(y.matches,{ignoreFieldNorm:n}),t.insert(y)):a.push(y)}}}),a}_searchLogical(e){const t=Di(e,this.options),n=this._normalizedKeys(),i=(c,u,f)=>{if(!("children"in c)){const{keyId:y,searcher:w}=c;let _;return y===null?(_=[],n.forEach(($,L)=>{_.push(...this._findMatches({key:$,value:u[L],searcher:w}))})):_=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(u,y),searcher:w}),_&&_.length?[{idx:f,item:u,matches:_}]:[]}const{children:h,operator:p}=c,m=[];for(let y=0,w=h.length;y<w;y+=1){const _=h[y],$=i(_,u,f);if($.length)m.push(...$);else if(p===jt.AND)return[]}return m},r=this._myIndex.records,o=new Map,a=[];return r.forEach(({$:c,i:u})=>{if(ne(c)){const f=i(t,c,u);f.length&&(o.has(u)||(o.set(u,{idx:u,item:c,matches:[]}),a.push(o.get(u))),f.forEach(({matches:h})=>{o.get(u).matches.push(...h)}))}}),a}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=this._normalizedKeys(),c=t?null:[];return o.forEach(({$:u,i:f})=>{if(!ne(u))return;const h=[];let p=!1,m=!1;if(a.forEach((y,w)=>{const _=this._findMatches({key:y,value:u[w],searcher:i});_.length?(h.push(..._),_[0].hasInverse&&(m=!0)):p=!0}),!(m&&p)&&h.length&&(!r||this._coversAllTokens(h))){const y={idx:f,item:u,matches:h};t?(y.score=Tn(y.matches,{ignoreFieldNorm:n}),t.insert(y)):c.push(y)}}),c}_findMatches({key:e,value:t,searcher:n}){if(!ne(t))return[];const i=[];if(Re(t))t.forEach(({v:r,i:o,n:a})=>{if(!ne(r))return;const c=n.searchIn(r);if(c.isMatch){const u={score:c.score,key:e,value:r,idx:o,norm:a,indices:c.indices,hasInverse:c.hasInverse};c.termCount!==void 0&&(u.matchedMask=c.matchedMask,u.matchedTerms=c.matchedTerms,u.termCount=c.termCount),i.push(u)}});else{const{v:r,n:o}=t,a=n.searchIn(r);if(a.isMatch){const c={score:a.score,key:e,value:r,norm:o,indices:a.indices,hasInverse:a.hasInverse};a.termCount!==void 0&&(c.matchedMask=a.matchedMask,c.matchedTerms=a.matchedTerms,c.termCount=a.termCount),i.push(c)}}return i}_coversAllTokens(e){const t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let i=0;for(let r=0;r<e.length;r++)i|=e[r].matchedMask||0;return i===2**t-1}const n=new Set;for(let i=0;i<e.length;i++){const r=e[i].matchedTerms;if(r)for(const o of r)n.add(o)}return n.size===t}};ke.version="7.5.0";ke.createIndex=Ei;ke.parseIndex=Bs;ke.config=S;ke.match=function(e,t,n){if(n&&n.useTokenSearch)throw new Error(Ls);return Dt(e,{...S,...n}).searchIn(t)};ke.parseQuery=Di;Un(Vs);Un(io);ke.use=function(...e){e.forEach(t=>Un(t))};var Wn=ke;function Oi(e,t){const n=new Wn(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const i=e.target.value,o=n.search(i).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!i?"":"none"})}function ao(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const jn=Math.min,Ke=Math.max,Ot=Math.round,Lt=Math.floor,we=e=>({x:e,y:e});function lo(e,t){return typeof e=="function"?e(t):e}function co(e){return e.split("-")[0]}function uo(e){return e.split("-")[1]}function fo(e){return e==="x"?"y":"x"}function ho(e){return e==="y"?"height":"width"}function Bi(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function po(e){return fo(Bi(e))}function go(e){var t,n,i,r;return{top:(t=e.top)!=null?t:0,right:(n=e.right)!=null?n:0,bottom:(i=e.bottom)!=null?i:0,left:(r=e.left)!=null?r:0}}function mo(e){return typeof e!="number"?go(e):{top:e,right:e,bottom:e,left:e}}function Bt(e){const{x:t,y:n,width:i,height:r}=e;return{width:i,height:r,top:n,left:t,right:t+i,bottom:n+r,x:t,y:n}}function gi(e,t,n){let{reference:i,floating:r}=e;const o=Bi(t),a=po(t),c=ho(a),u=co(t),f=o==="y",h=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,m=i[c]/2-r[c]/2;let y;switch(u){case"top":y={x:h,y:i.y-r.height};break;case"bottom":y={x:h,y:i.y+i.height};break;case"right":y={x:i.x+i.width,y:p};break;case"left":y={x:i.x-r.width,y:p};break;default:y={x:i.x,y:i.y}}const w=uo(t);return w&&(y[a]+=m*(w==="end"?1:-1)*(n&&f?-1:1)),y}async function yo(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:o,rects:a,elements:c,strategy:u}=e,{boundary:f="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:m=!1,padding:y=0}=lo(t,e),w=mo(y),$=c[m?p==="floating"?"reference":"floating":p],L=Bt(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement($)))==null||n?$:$.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:f,rootBoundary:h,strategy:u})),T=p==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,j=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),B=await(o.isElement==null?void 0:o.isElement(j))&&await(o.getScale==null?void 0:o.getScale(j))||{x:1,y:1},q=Bt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:T,offsetParent:j,strategy:u}):T);return{top:(L.top-q.top+w.top)/B.y,bottom:(q.bottom-L.bottom+w.bottom)/B.y,left:(L.left-q.left+w.left)/B.x,right:(q.right-L.right+w.right)/B.x}}const bo=50,vo=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:a}=n,c=a.detectOverflow?a:{...a,detectOverflow:yo},u=await(a.isRTL==null?void 0:a.isRTL(t));let f=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:h,y:p}=gi(f,i,u),m=i,y=0;const w={};for(let _=0;_<o.length;_++){const $=o[_];if(!$)continue;const{name:L,fn:T}=$,{x:j,y:B,data:q,reset:F}=await T({x:h,y:p,initialPlacement:i,placement:m,strategy:r,middlewareData:w,rects:f,platform:c,elements:{reference:e,floating:t}});h=j??h,p=B??p,w[L]={...w[L],...q},F&&y<bo&&(y++,typeof F=="object"&&(F.placement&&(m=F.placement),F.rects&&(f=F.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):F.rects),{x:h,y:p}=gi(f,m,u)),_=-1)}return{x:h,y:p,placement:m,strategy:r,middlewareData:w}};function Ft(){return typeof window<"u"}function Ve(e){return Pi(e)?(e.nodeName||"").toLowerCase():"#document"}function ee(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function xe(e){var t;return(t=(Pi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Pi(e){return Ft()?e instanceof Node||e instanceof ee(e).Node:!1}function ue(e){return Ft()?e instanceof Element||e instanceof ee(e).Element:!1}function Ee(e){return Ft()?e instanceof HTMLElement||e instanceof ee(e).HTMLElement:!1}function mi(e){return!Ft()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ee(e).ShadowRoot}function Ht(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=fe(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&r!=="inline"&&r!=="contents"}function wo(e){return/^(table|td|th)$/.test(Ve(e))}function zt(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const xo=/transform|translate|scale|rotate|perspective|filter/,_o=/paint|layout|strict|content/,Pe=e=>!!e&&e!=="none";let _n;function Vn(e){const t=ue(e)?fe(e):e;return Pe(t.transform)||Pe(t.translate)||Pe(t.scale)||Pe(t.rotate)||Pe(t.perspective)||!Gn()&&(Pe(t.backdropFilter)||Pe(t.filter))||xo.test(t.willChange||"")||_o.test(t.contain||"")}function Ao(e){let t=Ie(e);for(;Ee(t)&&!nt(t);){if(Vn(t))return t;if(zt(t))return null;t=Ie(t)}return null}function Gn(){return _n==null&&(_n=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),_n}function nt(e){return/^(html|body|#document)$/.test(Ve(e))}function fe(e){return ee(e).getComputedStyle(e)}function qt(e){return ue(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ie(e){if(Ve(e)==="html")return e;const t=e.assignedSlot||e.parentNode||mi(e)&&e.host||xe(e);return mi(t)?t.host:t}function Ii(e){const t=Ie(e);return nt(t)?(e.ownerDocument||e).body:Ee(t)&&Ht(t)?t:Ii(t)}function it(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Ii(e),o=r===((i=e.ownerDocument)==null?void 0:i.body),a=ee(r);if(o){const c=On(a);return t.concat(a,a.visualViewport||[],Ht(r)?r:[],c&&n?it(c):[])}else return t.concat(r,it(r,[],n))}function On(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ni(e){const t=fe(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Ee(e),o=r?e.offsetWidth:n,a=r?e.offsetHeight:i,c=Ot(n)!==o||Ot(i)!==a;return c&&(n=o,i=a),{width:n,height:i,$:c}}function Yn(e){return ue(e)?e:e.contextElement}function Ue(e){const t=Yn(e);if(!Ee(t))return we(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=Ni(t);let a=(o?Ot(n.width):n.width)/i,c=(o?Ot(n.height):n.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Co=we(0);function Fi(e){const t=ee(e);return!Gn()||!t.visualViewport?Co:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Mo(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===ee(e)}function Ne(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=Yn(e);let a=we(1);t&&(i?ue(i)&&(a=Ue(i)):a=Ue(e));const c=Mo(o,n,i)?Fi(o):we(0);let u=(r.left+c.x)/a.x,f=(r.top+c.y)/a.y,h=r.width/a.x,p=r.height/a.y;if(o&&i){const m=ee(o),y=ue(i)?ee(i):i;let w=m,_=On(w);for(;_&&y!==w;){const $=Ue(_),L=_.getBoundingClientRect(),T=fe(_),j=L.left+(_.clientLeft+parseFloat(T.paddingLeft))*$.x,B=L.top+(_.clientTop+parseFloat(T.paddingTop))*$.y;u*=$.x,f*=$.y,h*=$.x,p*=$.y,u+=j,f+=B,w=ee(_),_=On(w)}}return Bt({width:h,height:p,x:u,y:f})}function Kt(e,t){const n=qt(e).scrollLeft;return t?t.left+n:Ne(xe(e)).left+n}function Hi(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-Kt(e,n),r=n.top+t.scrollTop;return{x:i,y:r}}function So(e){let{elements:t,rect:n,offsetParent:i,strategy:r}=e;const o=r==="fixed",a=xe(i),c=t?zt(t.floating):!1;if(i===a||c&&o)return n;let u={scrollLeft:0,scrollTop:0},f=we(1);const h=we(0),p=Ee(i);if((p||!o)&&((Ve(i)!=="body"||Ht(a))&&(u=qt(i)),p)){const y=Ne(i);f=Ue(i),h.x=y.x+i.clientLeft,h.y=y.y+i.clientTop}const m=a&&!p&&!o?Hi(a,u):we(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+m.x,y:n.y*f.y-u.scrollTop*f.y+h.y+m.y}}function Lo(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function $o(e){const t=qt(e),n=e.ownerDocument.body,i=Ke(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=Ke(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let o=-t.scrollLeft+Kt(e);const a=-t.scrollTop;return fe(n).direction==="rtl"&&(o+=Ke(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}const Ro=25;function ko(e,t,n){n===void 0&&(n="viewport");const i=n==="layoutViewport",r=ee(e),o=xe(e),a=r.visualViewport;let c=o.clientWidth,u=o.clientHeight,f=0,h=0;if(a){const m=!Gn()||t==="fixed";i?m||(f=-a.offsetLeft,h=-a.offsetTop):(c=a.width,u=a.height,m&&(f=a.offsetLeft,h=a.offsetTop))}if(Kt(o)<=0){const m=o.ownerDocument,y=m.body,w=getComputedStyle(y),_=m.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,$=Math.abs(o.clientWidth-y.clientWidth-_),L=getComputedStyle(o).scrollbarGutter==="stable both-edges"?$/2:$;L<=Ro&&(c-=L)}return{width:c,height:u,x:f,y:h}}function Eo(e,t){const n=Ne(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,o=Ue(e),a=e.clientWidth*o.x,c=e.clientHeight*o.y,u=r*o.x,f=i*o.y;return{width:a,height:c,x:u,y:f}}function yi(e,t,n){let i;if(t==="viewport"||t==="layoutViewport")i=ko(e,n,t);else if(t==="document")i=$o(xe(e));else if(ue(t))i=Eo(t,n);else{const r=Fi(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Bt(i)}function To(e,t){const n=t.get(e);if(n)return n;let i=it(e,[],!1).filter(c=>ue(c)&&Ve(c)!=="body"),r=null;const o=fe(e).position==="fixed";let a=o?Ie(e):e;for(;ue(a)&&!nt(a);){const c=fe(a),u=Vn(a),f=r?r.position:o?"fixed":"";!u&&(f==="fixed"||f==="absolute"&&c.position==="static")?i=i.filter(p=>p!==a):r=c,a=Ie(a)}return t.set(e,i),i}function Do(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const a=[...n==="clippingAncestors"?zt(t)?[]:To(t,this._c):[].concat(n),i],c=yi(t,a[0],r);let u=c.top,f=c.right,h=c.bottom,p=c.left;for(let m=1;m<a.length;m++){const y=yi(t,a[m],r);u=Ke(y.top,u),f=jn(y.right,f),h=jn(y.bottom,h),p=Ke(y.left,p)}return{width:f-p,height:h-u,x:p,y:u}}function jo(e){const{width:t,height:n}=Ni(e);return{width:t,height:n}}function Oo(e,t,n){const i=Ee(t),r=xe(t),o=n==="fixed",a=Ne(e,!0,o,t);let c={scrollLeft:0,scrollTop:0};const u=we(0);if((i||!o)&&((Ve(t)!=="body"||Ht(r))&&(c=qt(t)),i)){const m=Ne(t,!0,o,t);u.x=m.x+t.clientLeft,u.y=m.y+t.clientTop}!i&&r&&(u.x=Kt(r));const f=r&&!i&&!o?Hi(r,c):we(0),h=a.left+c.scrollLeft-u.x-f.x,p=a.top+c.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function An(e){return fe(e).position==="static"}function bi(e,t){if(!Ee(e)||fe(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return xe(e)===n&&(n=n.ownerDocument.body),n}function zi(e,t){const n=ee(e);if(zt(e))return n;if(!Ee(e)){let r=Ie(e);for(;r&&!nt(r);){if(ue(r)&&!An(r))return r;r=Ie(r)}return n}let i=bi(e,t);for(;i&&wo(i)&&An(i);)i=bi(i,t);return i&&nt(i)&&An(i)&&!Vn(i)?n:i||Ao(e)||n}const Bo=async function(e){const t=this.getOffsetParent||zi,n=this.getDimensions,i=await n(e.floating);return{reference:Oo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Po(e){return fe(e).direction==="rtl"}const Io={convertOffsetParentRelativeRectToViewportRelativeRect:So,getDocumentElement:xe,getClippingRect:Do,getOffsetParent:zi,getElementRects:Bo,getClientRects:Lo,getDimensions:jo,getScale:Ue,isElement:ue,isRTL:Po};function qi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function No(e,t,n){let i=null,r;const o=xe(e);function a(){var h;clearTimeout(r),(h=i)==null||h.disconnect(),i=null}function c(h,p){h===void 0&&(h=!1),p===void 0&&(p=1),a();const m=e.getBoundingClientRect(),{left:y,top:w,width:_,height:$}=m;if(h||t(),!_||!$)return;const L=Lt(w),T=Lt(o.clientWidth-(y+_)),j=Lt(o.clientHeight-(w+$)),B=Lt(y),F={rootMargin:-L+"px "+-T+"px "+-j+"px "+-B+"px",threshold:Ke(0,jn(1,p))||1};let oe=!0;function te(D){const P=D[0].intersectionRatio;if(!qi(m,e.getBoundingClientRect()))return c();if(P!==p){if(!oe)return c();P?c(!1,P):r=setTimeout(()=>{c(!1,1e-7)},1e3)}oe=!1}try{i=new IntersectionObserver(te,{...F,root:o.ownerDocument})}catch{i=new IntersectionObserver(te,F)}i.observe(e)}const u=ee(e),f=()=>c(n);return u.addEventListener("resize",f),c(!0),()=>{u.removeEventListener("resize",f),a()}}function Fo(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,f=Yn(e),h=r||o?[...f?it(f):[],...t?it(t):[]]:[];h.forEach(L=>{r&&L.addEventListener("scroll",n),o&&L.addEventListener("resize",n)});const p=f&&c?No(f,n,o):null;let m=-1,y=null;a&&(y=new ResizeObserver(L=>{let[T]=L;T&&T.target===f&&y&&t&&(y.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var j;(j=y)==null||j.observe(t)})),n()}),f&&!u&&y.observe(f),t&&y.observe(t));let w,_=u?Ne(e):null;u&&$();function $(){const L=Ne(e);_&&!qi(_,L)&&n(),_=L,w=requestAnimationFrame($)}return n(),()=>{var L;h.forEach(T=>{r&&T.removeEventListener("scroll",n),o&&T.removeEventListener("resize",n)}),p?.(),(L=y)==null||L.disconnect(),y=null,u&&cancelAnimationFrame(w)}}const Ho=(e,t,n)=>{const i=new Map,r=n??{},o={...Io,...r.platform,_c:i};return vo(e,t,{...r,platform:o})};function zo(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Fo(t,n,()=>{n.matches(":popover-open")&&Ho(t,n,{strategy:"fixed"}).then(({x:r,y:o})=>{Object.assign(n.style,{left:`${r}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Ki(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Oi({target:{value:""}},e)}function qo(e,t){t.inlineMode&&e.stopPropagation()}function Ko(e){e.inlineMode&&(e.showDropdown=!0)}function Uo(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Wo(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Ki(t),t.showDropdown=!1)}function Vo(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Ki(t),t.showDropdown=!1)}function Bn(e,t={}){const n=et(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return Go(n,t);case"MultiPolygon":return Yo(n,t);default:throw new Error("invalid poly")}}function Go(e,t={}){const i=et(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{};return Ui(i,r)}function Yo(e,t={}){const i=et(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return i.forEach(a=>{o.push(Ui(a,r))}),Si(o)}function Ui(e,t){return e.length>1?gs(e,t):Li(e[0],t)}function Xo(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let i=!0;return kt(e,r=>{kt(t,o=>{if(i===!1)return!1;i=Zo(r.geometry,o.geometry,n)})}),i}function Zo(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!ta(e.coordinates,t.coordinates);case"LineString":return!vi(t,e);case"Polygon":return!se(e,t)}break;case"LineString":switch(t.type){case"Point":return!vi(e,t);case"LineString":return!Qo(e,t,n);case"Polygon":return!wi(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!se(t,e);case"LineString":return!wi(e,t,n);case"Polygon":return!Jo(t,e,n)}}return!1}function vi(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(ea(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function Qo(e,t,n){return Fn(e,t,{ignoreSelfIntersections:n}).features.length>0}function wi(e,t,n){for(const r of t.coordinates)if(se(r,e))return!0;return Fn(t,Bn(e),{ignoreSelfIntersections:n}).features.length>0}function Jo(e,t,n){for(const r of e.coordinates[0])if(se(r,t))return!0;for(const r of t.coordinates[0])if(se(r,e))return!0;return Fn(Bn(e),Bn(t),{ignoreSelfIntersections:n}).features.length>0}function ea(e,t,n){const i=n[0]-e[0],r=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return i*a-r*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function ta(e,t){return e[0]===t[0]&&e[1]===t[1]}function na(e,t,{ignoreSelfIntersections:n=!0}={}){let i=!1;return kt(e,r=>{kt(t,o=>{if(i===!0)return!0;i=!Xo(r.geometry,o.geometry,{ignoreSelfIntersections:n})})}),i}var ia=na;function ra(e,t){var n=et(e),i=et(t),r=n.type,o=i.type;switch(r){case"Point":switch(o){case"MultiPoint":return sa(n,i);case"LineString":return Et(n,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return se(n,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return oa(n,i);case"LineString":return aa(n,i);case"Polygon":case"MultiPolygon":return la(n,i);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return ca(n,i);case"Polygon":case"MultiPolygon":return fa(n,i);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return ha(n,i);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+r+" geometry not supported")}}function sa(e,t){var n,i=!1;for(n=0;n<t.coordinates.length;n++)if(Vi(t.coordinates[n],e.coordinates)){i=!0;break}return i}function oa(e,t){for(var n=0;n<e.coordinates.length;n++){for(var i=!1,r=0;r<t.coordinates.length;r++)Vi(e.coordinates[n],t.coordinates[r])&&(i=!0);if(!i)return!1}return!0}function aa(e,t){for(var n=!1,i=0;i<e.coordinates.length;i++){if(!Et(e.coordinates[i],t))return!1;n||(n=Et(e.coordinates[i],t,{ignoreEndVertices:!0}))}return n}function la(e,t){for(var n=!0,i=!1,r=0;r<e.coordinates.length;r++){if(i=se(e.coordinates[r],t),!i){n=!1;break}i=se(e.coordinates[r],t,{ignoreBoundary:!0})}return n&&i}function ca(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Et(e.coordinates[n],t))return!1;return!0}function ua(e,t){const n=e.coordinates,i=[];for(let r=0;r<n.length-1;r++){const o=Li([n[r],n[r+1]]),a=ps(o,ms(t));a.features.length===0?i.push(o):i.push(...a.features)}return Si(i)}function fa(e,t){const n=Tt(t),i=Tt(e);if(!Wi(n,i))return!1;for(const a of e.coordinates)if(!se(a,t))return!1;let r=!1;const o=ua(e,t);for(const a of o.features){const c=da(a.geometry.coordinates[0],a.geometry.coordinates[1]);if(!se(c,t))return!1;!r&&se(c,t,{ignoreBoundary:!0})&&(r=!0)}return r}function ha(e,t){var n=Tt(e),i=Tt(t);if(!Wi(i,n))return!1;for(var r=0;r<e.coordinates[0].length;r++)if(!se(e.coordinates[0][r],t))return!1;return!0}function Wi(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function Vi(e,t){return e[0]===t[0]&&e[1]===t[1]}function da(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var pa=ra;const ga=(e,t)=>t?ia(e,t):!0,ma=(e,t)=>t?pa(e,t):!0;function ya(e,t="highlight",n="title"){const i=(r,o=[])=>{let a="",c=0,u=0;return o.forEach((f,h)=>{const p=f[1]+1;h&&u>f[0]||(u=f[1],a+=[r.substring(c,f[0]),`<mark class="${t}">`,r.substring(f[0],p),"</mark>"].join(""),c=p)}),a+=r.substring(c),a};return e.filter(({matches:r})=>r&&r.length).map(({item:r,matches:o})=>{const a={...r};return o.forEach(c=>{if(c.key!==n)return;const u=i(Aa(c.value),Ca(c.indices));a.highlightedText=u}),a})}let Gi;const ba=(e,t)=>{Gi=new Wn(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},va=async(e,t,n)=>{const i=Object.entries(t).filter(([,c])=>c.type==="text"||c.type==="select"||c.type==="multiselect").reduce((c,[u,f])=>{const p=[],m=(y,w)=>{const _={};f.type==="text"?_[y]=`${w}`:_[u]=`="${y}"`,p.push(_)};return Object.entries(f.state).filter(([,y])=>y).forEach(([y,w])=>m(y,w)),p.length>0&&c.push({$or:p}),c},[]);let r;if(!(i.length>0)&&n.matchAllWhenEmpty!==!1)r=e;else{const c={$and:[...i]},u=Gi.search(c);r=n.enableHighlighting?ya(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(t).filter(([,c])=>c.type==="range").reduce((c,[u,f])=>{const h=p=>f.format==="date"?E(p).valueOf():parseFloat(p);return c[u]={min:h(f.state.min),max:h(f.state.max),format:f.format},c},{});if(Object.keys(o).length>0){const c=[];for(let u=0;u<r.length;u++){const f={};for(const[h,p]of Object.entries(o)){const m=w=>p.format==="date"?E(w).valueOf():parseFloat(w),y=Y(h,r[u]);y?Array.isArray(y)?f[h]=o[h].min<=m(y[1])&&m(y[0])<=o[h].max:m(y)>=o[h].min&&m(y)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&c.push(r[u])}r=[...c]}const a=Object.entries(t).filter(([,c])=>c.type==="spatial").reduce((c,[u,f])=>(c[u]={geometry:f.state.geometry,mode:f.state.mode},c),{});if(Object.values(a).map(c=>c.geometry).filter(c=>!!c).length>0){const c=[];for(let u=0;u<r.length;u++){const f={};for(const h of Object.keys(a)){const p=Y(h,r[u]),m=a[h].mode||"within";p&&(m==="within"?ma(p,a[h].geometry):ga(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&c.push(r[u])}r=[...c]}return r};function wa(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function Ut(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function xi(e,t){return e*2+t}function xa(e){return Object.keys(e).map(t=>({title:C`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function Pn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function _a(e,t,n){const i=n.externalFilter(e,t),r=typeof i=="string"||i instanceof String?i:i.url,o=typeof i=="object"&&"fetchFn"in i?await i.fetchFn(r):await fetch(r).then(async a=>await a.json());return i.key?Y(i.key,o):o}function Yi(e,t,n){let i;if(e.detail?i=e.detail.target:i=e.target,i?.classList.contains("details-filter")){if(!i.open||t?.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const o=r.shadowRoot.querySelector(".details-filter");o&&o!==i&&o.removeAttribute("open")})}else{if(!i?.open||t?.expandMultipleResults)return;n.querySelectorAll("details").forEach(r=>{r!==i&&r.removeAttribute("open")})}}function Y(e,t){return typeof e=="function"?e(t):e?.includes(".")?e.split(".").reduce((n,i)=>n&&n[i],t):t[e]}function Aa(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Ca(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([r,o])=>r<=o?[r,o]:[o,r]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),i=[];for(const[r,o]of n){if(i.length===0){i.push([r,o]);continue}const a=i[i.length-1];(t?r<=a[1]+1:r<=a[1])?o>a[1]&&(a[1]=o):i.push([r,o])}return i}function Pt(e){return e.format==="date"}class Ma extends he{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=this.#r.bind(this),this._handleKeyDown=this.#i.bind(this)}set showDropdown(t){this.renderRoot.querySelector("[popover]").togglePopover(t)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#e(){setTimeout(()=>this._overlayCleanup=zo(this))}#t(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#e()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#t()}#n(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#n(),super.disconnectedCallback()}_overlayCleanup(){}#r(t){Vo(t,this)}#i(t){Wo(t,this)}#s(t){Uo(t,this)}#a(){Ko(this)}#o(t){qo(t,this)}#l(t){ao(t,this)}#c(t){Oi(t,this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(t){t.has("inlineMode")&&(this.inlineMode?this.#t():this.#n())}render(){return C`
      <style>
        ${!this.unstyled&&Hn}
      </style>
      ${this.inlineMode?C`
            <div
              class="inline-container-wrapper"
              @click="${this.#s}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${xa(this.filters)}
                      .controller=${{remove:t=>this.#l(t)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${z(Pn(this.filters),()=>C`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":C`
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
                  class="input-container field no-margin ${Pn(this.filters)?"dirty-filter-input":""}"
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
          `:C`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",Ma);function Sa(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",Ut(e.filterObject),e.requestUpdate()}function La(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const $a=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Cn=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"],We="YYYY-MM-DD";function Ra(e){if(Ut(e.filterObject),e.filterObject){const t=e.filterObject.min,n=e.filterObject.max,i=e.querySelector("eox-timecontrol");i&&i.dateChange([E(t).format(),E(n).format()],i);const r=e.querySelector("tc-range-slider");r&&(r.value1!==t&&(r.value1=t),r.value2!==n&&(r.value2=n))}e.requestUpdate()}function _i(e,t){const n=y=>Pt(t.filterObject)?E(y).valueOf():parseFloat(y),i=n(e.detail.values[0]),r=n(e.detail.values[1]),o=n(t.filterObject.state.min),a=n(t.filterObject.state.max),c=n(t.filterObject.min),u=n(t.filterObject.max);let f,h,p,m;Pt(t.filterObject)?(f=E(i).isSame(E(c),"day"),h=E(r).isSame(E(u),"day"),p=E(i).isSame(E(o),"day"),m=E(r).isSame(E(a),"day")):(f=i===c,h=r===u,p=i===o,m=r===a),!(p&&m)&&([t.filterObject.state.min,t.filterObject.state.max]=[i,r],f&&h?(delete t.filterObject.dirty,delete t.filterObject.stringifiedState):t.filterObject.dirty=!0,t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${E(i).format(We)} - ${E(r).format(We)}`:`${i} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),f&&h?t.reset():t.requestUpdate())}function ka(e,t,n){const i=n.filterObject.state[e],r=Pt(n.filterObject)?E(i).format(We):i;return C`<div class="range-${t}">${r}</div>`}function Ea(e){Ta(-1,e),Ut(e.filterObject),e.requestUpdate()}function Ta(e,t){t.selectedItems=[],Xn(t),Zi(t)}function Xi(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((i,r)=>r!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Xn(t),Zi(t)}function Da(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function ja(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&Xi(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Oa(e,t){(e.has("suggestions")||e.has("query"))&&Xn(t)}function Ba(e,t){const n=e.filterObject?.sort||((i,r)=>i.toString().localeCompare(r.toString(),void 0,{numeric:!0}));return t.sort(n).map(i=>i)}function Xn(e){const t=(e.filterObject?.filterKeys||e.suggestions).map(i=>`${i}`);let n=t;e.query&&(n=new Wn(t,{threshold:.4,ignoreLocation:!0}).search(e.query).map(r=>r.item)),e.filteredSuggestions=e.filterObject?.filterKeys?n:Ba(e,n),e.filterObject?.filterKeys&&(e.filterObject.state=t.reduce((i,r)=>(r in i||(i[r]=void 0),i),e.filterObject.state)),e.highlightedIndex=-1}function Zi(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function Pa(e){Ut(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function Ia(e){e.renderRoot.querySelector("#eox-map").innerHTML="",Qi(e)}function Na(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function Qi(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&Fa(e.geometry),i=wa(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=i;const r=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{r(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{r(o.features.getArray()[0])})},1e3)}function Fa(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}class Ha extends he{static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}#e=()=>{La(this)};#t=t=>{t.key==="Enter"&&t.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),t.target.value="",this.#e())};reset(){Sa(this)}debouncedInputHandler=It(this.#e,500,{leading:!0});createRenderRoot(){return this}render(){return z(this.filterObject,()=>C`
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
              @keydown=${this.#t}
            />
          </div>
        </div>
        <small
          class="error-validation"
          style="margin-left: var(--_list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `)}}customElements.define("eox-itemfilter-text",Ha);function za(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const i=n.config.aggregateResults;return t==="No category"?e.filter(r=>{const o=r[i];return Array.isArray(o)?o.filter(Boolean).length===0:!o}):e.filter(r=>{const o=r[i];if(Array.isArray(o)){if(o.filter(Boolean).length===0)return!1}else if(!o)return!1;let a;return n.filters[i]&&(a=Object.keys(n.filters[i]).filter(u=>n.filters[i].state[u])),(a?.length?a.includes(t):!0)&&Array.isArray(o)?o.includes(t):o===t})}function qa(e,t){return C`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||$e}
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
        ${Ji(t,e)}
      </div>
    </details>
  `}function Ji(e,t){const n=e.results,i=t?e.aggregateResults(n,t):n,r=e.config,o=a=>e.selectedResult?.[r.idProperty]===a[r.idProperty]?"highlighted":$e;return ai`
    ${e.resultType==="cards"?qe("<eox-layout fill-grid>"):qe('<ul id="results" class="list no-space" part="results">')}
      ${ds(i,a=>a.id,a=>ai`
        ${e.resultType==="cards"?qe("<eox-layout-item"):qe("<li")}
            class="${o(a)}"
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:a}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:a}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${z(r.subTitleProperty||r.imageProperty,()=>C`
                  ${z(e.resultType==="cards",()=>Y(r.imageProperty,a)?C`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${Y(r.imageProperty,a)}"
                            />
                          `:C`
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
                          `,()=>C`
                      <i class="small">
                        ${Y(r.imageProperty,a)?C`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${Y(r.imageProperty,a)}"
                              />
                            `:C`
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
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      >${Mt(a.highlightedText||Y(r.titleProperty,a).toString())}</span
                    >
                    ${z(!!Y(r.subTitleProperty,a),()=>C`
                        <small class="subtitle no-line truncate"
                          >${Mt(Y(r.subTitleProperty,a).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>C`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      >${Mt(a.highlightedText||a[r.titleProperty])}</span
                    >
                  </div>
                `)}
              ${z(e.enableResultAction,()=>C`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${c=>{c.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${Mt(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${e.resultType==="cards"?qe("</eox-layout>"):qe("</ul>")}
  `}class Ka extends he{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}constructor(){super(),this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}#e(t){return Ji(this,t)}#t(t){return qa(t,this)}aggregateResults(t,n){return za(t,n,this)}createRenderRoot(){return this}handleAccordion(t){Yi(t,this.config,this)}#n(){const t=this.resultAggregation.filter(i=>this.aggregateResults(this.results,i).length);return this.aggregateResults(this.results,"No category").length>0&&t.push("No category"),t}render(){return C`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${z(this.results.length<1,()=>C`<small class="no-results">No matching items</small>`,()=>$e)}
          ${z(this.config.aggregateResults,()=>Nt(this.#n(),t=>C`${z(this.aggregateResults(this.results,t).length===1&&this.config.autoSpreadSingle,()=>C`<div style="margin-left: -8px">
                        ${this.#e(t)}
                      </div>`,()=>this.#t(t))}`),()=>this.#e())}
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",Ka);class Ua extends he{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(t){t.has("filterObject")&&this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n)),Oa(t,this)}#e(t){Da(t,this)}#t(t){ja(t,this)}#n(t){Xi(t,this)}reset(){Ea(this)}debouncedInputHandler=It(this.#n,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(t=>this.filterObject.state[t]?t:null).filter(t=>!!t),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const t=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow scroll":$e;return C`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${z((this.filterObject.filterKeys||this.suggestions).length>=10,()=>C`<div class="autocomplete-container">
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
                @input=${this.#e}
                @keydown=${this.#t}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${n}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>C`
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
    `}}customElements.define("eox-itemfilter-select",Ua);class Wa extends he{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.tabIndex=0,this.inlineMode=!1,this.inputHandler=this.#e.bind(this),this.debouncedInputHandler=It(this.inputHandler,500,{leading:!1})}#e(t){_i(t,this)}#t(t,n){return ka(t,n,this)}reset(){Ra(this)}createRenderRoot(){return this}render(){return z(this.filterObject,()=>C`
        ${z(Pt(this.filterObject),()=>C`
            <eox-timecontrol
              .controlValues=${[{id:this.filterObject.key,title:this.filterObject.title||"Filter",timeControlValues:(this.filterObject.filterKeys||this.suggestions||[]).map(t=>typeof t=="object"?t:{date:t})}]}
              .initDate=${[E(this.filterObject.state.min||this.filterObject.min).format(),E(this.filterObject.state.max||this.filterObject.max).format()]}
              @select=${t=>_i(new CustomEvent("values",{detail:{values:[E(t.detail.date[0]).valueOf(),E(t.detail.date[1]).valueOf()]}}),this)}
            >
              <eox-timecontrol-date
                .format=${We}
              ></eox-timecontrol-date>
              <eox-timecontrol-picker
                style="${this.inlineMode?"margin-bottom: 1rem; display: block;":""}"
                ?popup=${!this.inlineMode}
                range
                show-dots
                .position=${["bottom","left"]}
              ></eox-timecontrol-picker>
            </eox-timecontrol>
          `,()=>C`
            <div style="display: flex; gap: .5rem; align-items: center;">
              ${this.#t("min","before")}
              <tc-range-slider
                min="${this.filterObject.min}"
                max="${this.filterObject.max}"
                value1="${this.filterObject.state.min||this.filterObject.min}"
                value2="${this.filterObject.state.max||this.filterObject.max}"
                step="${this.filterObject.step||1}"
                @change=${this.debouncedInputHandler}
              ></tc-range-slider>
              ${this.#t("max","after")}
            </div>
          `)}
      `)}}customElements.define("eox-itemfilter-range",Wa);class Va extends he{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){Pa(this)}createRenderRoot(){return this}#e(t){Na(t,this)}render(){return z(this.filterObject,()=>C`
        <div
          style="margin-left: var(--_list-padding); padding-right: var(--_padding)"
        >
          <nav class="no-margin wrap">
            ${Nt(["intersects","within"],t=>C`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===t||$e}"
                    value="${t}"
                    @click=${()=>this.#e(t)}
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
      `)}}customElements.define("eox-itemfilter-spatial",Va);class Ga extends he{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#e()}#e(){Qi(this)}reset(){Ia(this)}render(){return C`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",Ga);function Ya(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function Xa(e,t){const{code:n,target:i}=e;i instanceof HTMLElement&&i.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Za(n,e.target.value??"",t))}function Za(e,t,n){const i=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&i&&i.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){i&&(i.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(i),1));const r=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];r.classList.contains("highlighted")||r.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let r=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(r=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),r=r+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&r<0&&(r=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&r>n.renderRoot.querySelectorAll(".chip").length-1&&(r=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[r].classList.add("highlighted")}}class Qa extends he{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#e.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#e(t){Xa(t,this)}#t(t){Ya(t,this)}render(){return C`
      <span class="chip-container">
        ${Nt(this.items,t=>C`
            <span class="chip tiny-margin" @click=${this.#t.bind(this)}>
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
    `}}customElements.define("eox-itemfilter-chips",Qa);var Mn,Ai;function Ja(){if(Ai)return Mn;Ai=1;var e=200,t="__lodash_hash_undefined__",n=1/0,i="[object Function]",r="[object GeneratorFunction]",o=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,c=typeof Le=="object"&&Le&&Le.Object===Object&&Le,u=typeof self=="object"&&self&&self.Object===Object&&self,f=c||u||Function("return this")();function h(g,v){var M=g?g.length:0;return!!M&&m(g,v,0)>-1}function p(g,v,M,O){for(var U=g.length,Z=M+-1;++Z<U;)if(v(g[Z],Z,g))return Z;return-1}function m(g,v,M){if(v!==v)return p(g,y,M);for(var O=M-1,U=g.length;++O<U;)if(g[O]===v)return O;return-1}function y(g){return g!==g}function w(g,v){return g.has(v)}function _(g,v){return g?.[v]}function $(g){var v=!1;if(g!=null&&typeof g.toString!="function")try{v=!!(g+"")}catch{}return v}function L(g){var v=-1,M=Array(g.size);return g.forEach(function(O){M[++v]=O}),M}var T=Array.prototype,j=Function.prototype,B=Object.prototype,q=f["__core-js_shared__"],F=(function(){var g=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return g?"Symbol(src)_1."+g:""})(),oe=j.toString,te=B.hasOwnProperty,D=B.toString,P=RegExp("^"+oe.call(te).replace(o,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),K=T.splice,de=Ye(f,"Map"),pe=Ye(f,"Set"),X=Ye(Object,"create");function H(g){var v=-1,M=g?g.length:0;for(this.clear();++v<M;){var O=g[v];this.set(O[0],O[1])}}function Te(){this.__data__=X?X(null):{}}function Ge(g){return this.has(g)&&delete this.__data__[g]}function Wt(g){var v=this.__data__;if(X){var M=v[g];return M===t?void 0:M}return te.call(v,g)?v[g]:void 0}function Vt(g){var v=this.__data__;return X?v[g]!==void 0:te.call(v,g)}function Gt(g,v){var M=this.__data__;return M[g]=X&&v===void 0?t:v,this}H.prototype.clear=Te,H.prototype.delete=Ge,H.prototype.get=Wt,H.prototype.has=Vt,H.prototype.set=Gt;function _e(g){var v=-1,M=g?g.length:0;for(this.clear();++v<M;){var O=g[v];this.set(O[0],O[1])}}function Yt(){this.__data__=[]}function Xt(g){var v=this.__data__,M=De(v,g);if(M<0)return!1;var O=v.length-1;return M==O?v.pop():K.call(v,M,1),!0}function Zt(g){var v=this.__data__,M=De(v,g);return M<0?void 0:v[M][1]}function Qt(g){return De(this.__data__,g)>-1}function Jt(g,v){var M=this.__data__,O=De(M,g);return O<0?M.push([g,v]):M[O][1]=v,this}_e.prototype.clear=Yt,_e.prototype.delete=Xt,_e.prototype.get=Zt,_e.prototype.has=Qt,_e.prototype.set=Jt;function k(g){var v=-1,M=g?g.length:0;for(this.clear();++v<M;){var O=g[v];this.set(O[0],O[1])}}function rt(){this.__data__={hash:new H,map:new(de||_e),string:new H}}function en(g){return He(this,g).delete(g)}function le(g){return He(this,g).get(g)}function st(g){return He(this,g).has(g)}function ot(g,v){return He(this,g).set(g,v),this}k.prototype.clear=rt,k.prototype.delete=en,k.prototype.get=le,k.prototype.has=st,k.prototype.set=ot;function Fe(g){var v=-1,M=g?g.length:0;for(this.__data__=new k;++v<M;)this.add(g[v])}function at(g){return this.__data__.set(g,t),this}function lt(g){return this.__data__.has(g)}Fe.prototype.add=Fe.prototype.push=at,Fe.prototype.has=lt;function De(g,v){for(var M=g.length;M--;)if(ln(g[M][0],v))return M;return-1}function tn(g){if(!ct(g)||on(g))return!1;var v=cn(g)||$(g)?P:a;return v.test(Xe(g))}function nn(g,v,M){var O=-1,U=h,Z=g.length,ut=!0,ae=[],ce=ae;if(Z>=e){var ft=rn(g);if(ft)return L(ft);ut=!1,U=w,ce=new Fe}else ce=ae;e:for(;++O<Z;){var Ae=g[O],Ce=Ae;if(Ae=Ae!==0?Ae:0,ut&&Ce===Ce){for(var ht=ce.length;ht--;)if(ce[ht]===Ce)continue e;ae.push(Ae)}else U(ce,Ce,M)||(ce!==ae&&ce.push(Ce),ae.push(Ae))}return ae}var rn=pe&&1/L(new pe([,-0]))[1]==n?function(g){return new pe(g)}:un;function He(g,v){var M=g.__data__;return sn(v)?M[typeof v=="string"?"string":"hash"]:M.map}function Ye(g,v){var M=_(g,v);return tn(M)?M:void 0}function sn(g){var v=typeof g;return v=="string"||v=="number"||v=="symbol"||v=="boolean"?g!=="__proto__":g===null}function on(g){return!!F&&F in g}function Xe(g){if(g!=null){try{return oe.call(g)}catch{}try{return g+""}catch{}}return""}function an(g){return g&&g.length?nn(g):[]}function ln(g,v){return g===v||g!==g&&v!==v}function cn(g){var v=ct(g)?D.call(g):"";return v==i||v==r}function ct(g){var v=typeof g;return!!g&&(v=="object"||v=="function")}function un(){}return Mn=an,Mn}var el=Ja();const In=Mi(el);var Je={exports:{}};Je.exports;var Ci;function tl(){return Ci||(Ci=1,(function(e,t){var n=200,i="Expected a function",r="__lodash_hash_undefined__",o=1,a=2,c=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",m="[object Error]",y="[object Function]",w="[object GeneratorFunction]",_="[object Map]",$="[object Number]",L="[object Object]",T="[object Promise]",j="[object RegExp]",B="[object Set]",q="[object String]",F="[object Symbol]",oe="[object WeakMap]",te="[object ArrayBuffer]",D="[object DataView]",P="[object Float32Array]",K="[object Float64Array]",de="[object Int8Array]",pe="[object Int16Array]",X="[object Int32Array]",H="[object Uint8Array]",Te="[object Uint8ClampedArray]",Ge="[object Uint16Array]",Wt="[object Uint32Array]",Vt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Gt=/^\w*$/,_e=/^\./,Yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xt=/[\\^$.*+?()[\]{}|]/g,Zt=/\\(\\)?/g,Qt=/^\[object .+?Constructor\]$/,Jt=/^(?:0|[1-9]\d*)$/,k={};k[P]=k[K]=k[de]=k[pe]=k[X]=k[H]=k[Te]=k[Ge]=k[Wt]=!0,k[u]=k[f]=k[te]=k[h]=k[D]=k[p]=k[m]=k[y]=k[_]=k[$]=k[L]=k[j]=k[B]=k[q]=k[oe]=!1;var rt=typeof Le=="object"&&Le&&Le.Object===Object&&Le,en=typeof self=="object"&&self&&self.Object===Object&&self,le=rt||en||Function("return this")(),st=t&&!t.nodeType&&t,ot=st&&!0&&e&&!e.nodeType&&e,Fe=ot&&ot.exports===st,at=Fe&&rt.process,lt=(function(){try{return at&&at.binding("util")}catch{}})(),De=lt&&lt.isTypedArray;function tn(s,l){for(var d=-1,b=s?s.length:0,A=Array(b);++d<b;)A[d]=l(s[d],d,s);return A}function nn(s,l){for(var d=-1,b=l.length,A=s.length;++d<b;)s[A+d]=l[d];return s}function rn(s,l){for(var d=-1,b=s?s.length:0;++d<b;)if(l(s[d],d,s))return!0;return!1}function He(s){return function(l){return l?.[s]}}function Ye(s,l){for(var d=-1,b=Array(s);++d<s;)b[d]=l(d);return b}function sn(s){return function(l){return s(l)}}function on(s,l){return s?.[l]}function Xe(s){var l=!1;if(s!=null&&typeof s.toString!="function")try{l=!!(s+"")}catch{}return l}function an(s){var l=-1,d=Array(s.size);return s.forEach(function(b,A){d[++l]=[A,b]}),d}function ln(s,l){return function(d){return s(l(d))}}function cn(s){var l=-1,d=Array(s.size);return s.forEach(function(b){d[++l]=b}),d}var ct=Array.prototype,un=Function.prototype,g=Object.prototype,v=le["__core-js_shared__"],M=(function(){var s=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""})(),O=un.toString,U=g.hasOwnProperty,Z=g.toString,ut=RegExp("^"+O.call(U).replace(Xt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ae=le.Symbol,ce=le.Uint8Array,ft=g.propertyIsEnumerable,Ae=ct.splice,Ce=ae?ae.isConcatSpreadable:void 0,ht=ln(Object.keys,Object),fn=ze(le,"DataView"),Ze=ze(le,"Map"),hn=ze(le,"Promise"),dn=ze(le,"Set"),pn=ze(le,"WeakMap"),Qe=ze(Object,"create"),er=Oe(fn),tr=Oe(Ze),nr=Oe(hn),ir=Oe(dn),rr=Oe(pn),dt=ae?ae.prototype:void 0,gn=dt?dt.valueOf:void 0,Zn=dt?dt.toString:void 0;function je(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var b=s[l];this.set(b[0],b[1])}}function sr(){this.__data__=Qe?Qe(null):{}}function or(s){return this.has(s)&&delete this.__data__[s]}function ar(s){var l=this.__data__;if(Qe){var d=l[s];return d===r?void 0:d}return U.call(l,s)?l[s]:void 0}function lr(s){var l=this.__data__;return Qe?l[s]!==void 0:U.call(l,s)}function cr(s,l){var d=this.__data__;return d[s]=Qe&&l===void 0?r:l,this}je.prototype.clear=sr,je.prototype.delete=or,je.prototype.get=ar,je.prototype.has=lr,je.prototype.set=cr;function ge(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var b=s[l];this.set(b[0],b[1])}}function ur(){this.__data__=[]}function fr(s){var l=this.__data__,d=gt(l,s);if(d<0)return!1;var b=l.length-1;return d==b?l.pop():Ae.call(l,d,1),!0}function hr(s){var l=this.__data__,d=gt(l,s);return d<0?void 0:l[d][1]}function dr(s){return gt(this.__data__,s)>-1}function pr(s,l){var d=this.__data__,b=gt(d,s);return b<0?d.push([s,l]):d[b][1]=l,this}ge.prototype.clear=ur,ge.prototype.delete=fr,ge.prototype.get=hr,ge.prototype.has=dr,ge.prototype.set=pr;function me(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var b=s[l];this.set(b[0],b[1])}}function gr(){this.__data__={hash:new je,map:new(Ze||ge),string:new je}}function mr(s){return mt(this,s).delete(s)}function yr(s){return mt(this,s).get(s)}function br(s){return mt(this,s).has(s)}function vr(s,l){return mt(this,s).set(s,l),this}me.prototype.clear=gr,me.prototype.delete=mr,me.prototype.get=yr,me.prototype.has=br,me.prototype.set=vr;function pt(s){var l=-1,d=s?s.length:0;for(this.__data__=new me;++l<d;)this.add(s[l])}function wr(s){return this.__data__.set(s,r),this}function xr(s){return this.__data__.has(s)}pt.prototype.add=pt.prototype.push=wr,pt.prototype.has=xr;function ye(s){this.__data__=new ge(s)}function _r(){this.__data__=new ge}function Ar(s){return this.__data__.delete(s)}function Cr(s){return this.__data__.get(s)}function Mr(s){return this.__data__.has(s)}function Sr(s,l){var d=this.__data__;if(d instanceof ge){var b=d.__data__;if(!Ze||b.length<n-1)return b.push([s,l]),this;d=this.__data__=new me(b)}return d.set(s,l),this}ye.prototype.clear=_r,ye.prototype.delete=Ar,ye.prototype.get=Cr,ye.prototype.has=Mr,ye.prototype.set=Sr;function Lr(s,l){var d=be(s)||bn(s)?Ye(s.length,String):[],b=d.length,A=!!b;for(var x in s)U.call(s,x)&&!(A&&(x=="length"||ti(x,b)))&&d.push(x);return d}function gt(s,l){for(var d=s.length;d--;)if(ri(s[d][0],l))return d;return-1}var $r=Ur(Er);function Rr(s,l,d,b,A){var x=-1,R=s.length;for(d||(d=Zr),A||(A=[]);++x<R;){var I=s[x];d(I)?nn(A,I):A[A.length]=I}return A}var kr=Wr();function Er(s,l){return s&&kr(s,l,_t)}function Qn(s,l){l=yt(l,s)?[l]:Jn(l);for(var d=0,b=l.length;s!=null&&d<b;)s=s[bt(l[d++])];return d&&d==b?s:void 0}function Tr(s){return Z.call(s)}function Dr(s,l){return s!=null&&l in Object(s)}function mn(s,l,d,b,A){return s===l?!0:s==null||l==null||!wt(s)&&!xt(l)?s!==s&&l!==l:jr(s,l,mn,d,b,A)}function jr(s,l,d,b,A,x){var R=be(s),I=be(l),N=f,W=f;R||(N=Me(s),N=N==u?L:N),I||(W=Me(l),W=W==u?L:W);var Q=N==L&&!Xe(s),J=W==L&&!Xe(l),G=N==W;if(G&&!Q)return x||(x=new ye),R||ss(s)?ei(s,l,d,b,A,x):Vr(s,l,N,d,b,A,x);if(!(A&a)){var ie=Q&&U.call(s,"__wrapped__"),re=J&&U.call(l,"__wrapped__");if(ie||re){var Se=ie?s.value():s,ve=re?l.value():l;return x||(x=new ye),d(Se,ve,b,A,x)}}return G?(x||(x=new ye),Gr(s,l,d,b,A,x)):!1}function Or(s,l,d,b){var A=d.length,x=A;if(s==null)return!x;for(s=Object(s);A--;){var R=d[A];if(R[2]?R[1]!==s[R[0]]:!(R[0]in s))return!1}for(;++A<x;){R=d[A];var I=R[0],N=s[I],W=R[1];if(R[2]){if(N===void 0&&!(I in s))return!1}else{var Q=new ye,J;if(!(J===void 0?mn(W,N,b,o|a,Q):J))return!1}}return!0}function Br(s){if(!wt(s)||Jr(s))return!1;var l=si(s)||Xe(s)?ut:Qt;return l.test(Oe(s))}function Pr(s){return xt(s)&&vn(s.length)&&!!k[Z.call(s)]}function Ir(s){return typeof s=="function"?s:s==null?cs:typeof s=="object"?be(s)?zr(s[0],s[1]):Hr(s):us(s)}function Nr(s){if(!es(s))return ht(s);var l=[];for(var d in Object(s))U.call(s,d)&&d!="constructor"&&l.push(d);return l}function Fr(s,l){var d=-1,b=vt(s)?Array(s.length):[];return $r(s,function(A,x,R){b[++d]=l(A,x,R)}),b}function Hr(s){var l=Yr(s);return l.length==1&&l[0][2]?ii(l[0][0],l[0][1]):function(d){return d===s||Or(d,s,l)}}function zr(s,l){return yt(s)&&ni(l)?ii(bt(s),l):function(d){var b=as(d,s);return b===void 0&&b===l?ls(d,s):mn(l,b,void 0,o|a)}}function qr(s){return function(l){return Qn(l,s)}}function Kr(s){if(typeof s=="string")return s;if(wn(s))return Zn?Zn.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Jn(s){return be(s)?s:ts(s)}function Ur(s,l){return function(d,b){if(d==null)return d;if(!vt(d))return s(d,b);for(var A=d.length,x=-1,R=Object(d);++x<A&&b(R[x],x,R)!==!1;);return d}}function Wr(s){return function(l,d,b){for(var A=-1,x=Object(l),R=b(l),I=R.length;I--;){var N=R[++A];if(d(x[N],N,x)===!1)break}return l}}function ei(s,l,d,b,A,x){var R=A&a,I=s.length,N=l.length;if(I!=N&&!(R&&N>I))return!1;var W=x.get(s);if(W&&x.get(l))return W==l;var Q=-1,J=!0,G=A&o?new pt:void 0;for(x.set(s,l),x.set(l,s);++Q<I;){var ie=s[Q],re=l[Q];if(b)var Se=R?b(re,ie,Q,l,s,x):b(ie,re,Q,s,l,x);if(Se!==void 0){if(Se)continue;J=!1;break}if(G){if(!rn(l,function(ve,Be){if(!G.has(Be)&&(ie===ve||d(ie,ve,b,A,x)))return G.add(Be)})){J=!1;break}}else if(!(ie===re||d(ie,re,b,A,x))){J=!1;break}}return x.delete(s),x.delete(l),J}function Vr(s,l,d,b,A,x,R){switch(d){case D:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case te:return!(s.byteLength!=l.byteLength||!b(new ce(s),new ce(l)));case h:case p:case $:return ri(+s,+l);case m:return s.name==l.name&&s.message==l.message;case j:case q:return s==l+"";case _:var I=an;case B:var N=x&a;if(I||(I=cn),s.size!=l.size&&!N)return!1;var W=R.get(s);if(W)return W==l;x|=o,R.set(s,l);var Q=ei(I(s),I(l),b,A,x,R);return R.delete(s),Q;case F:if(gn)return gn.call(s)==gn.call(l)}return!1}function Gr(s,l,d,b,A,x){var R=A&a,I=_t(s),N=I.length,W=_t(l),Q=W.length;if(N!=Q&&!R)return!1;for(var J=N;J--;){var G=I[J];if(!(R?G in l:U.call(l,G)))return!1}var ie=x.get(s);if(ie&&x.get(l))return ie==l;var re=!0;x.set(s,l),x.set(l,s);for(var Se=R;++J<N;){G=I[J];var ve=s[G],Be=l[G];if(b)var oi=R?b(Be,ve,G,l,s,x):b(ve,Be,G,s,l,x);if(!(oi===void 0?ve===Be||d(ve,Be,b,A,x):oi)){re=!1;break}Se||(Se=G=="constructor")}if(re&&!Se){var At=s.constructor,Ct=l.constructor;At!=Ct&&"constructor"in s&&"constructor"in l&&!(typeof At=="function"&&At instanceof At&&typeof Ct=="function"&&Ct instanceof Ct)&&(re=!1)}return x.delete(s),x.delete(l),re}function mt(s,l){var d=s.__data__;return Qr(l)?d[typeof l=="string"?"string":"hash"]:d.map}function Yr(s){for(var l=_t(s),d=l.length;d--;){var b=l[d],A=s[b];l[d]=[b,A,ni(A)]}return l}function ze(s,l){var d=on(s,l);return Br(d)?d:void 0}var Me=Tr;(fn&&Me(new fn(new ArrayBuffer(1)))!=D||Ze&&Me(new Ze)!=_||hn&&Me(hn.resolve())!=T||dn&&Me(new dn)!=B||pn&&Me(new pn)!=oe)&&(Me=function(s){var l=Z.call(s),d=l==L?s.constructor:void 0,b=d?Oe(d):void 0;if(b)switch(b){case er:return D;case tr:return _;case nr:return T;case ir:return B;case rr:return oe}return l});function Xr(s,l,d){l=yt(l,s)?[l]:Jn(l);for(var b,A=-1,R=l.length;++A<R;){var x=bt(l[A]);if(!(b=s!=null&&d(s,x)))break;s=s[x]}if(b)return b;var R=s?s.length:0;return!!R&&vn(R)&&ti(x,R)&&(be(s)||bn(s))}function Zr(s){return be(s)||bn(s)||!!(Ce&&s&&s[Ce])}function ti(s,l){return l=l??c,!!l&&(typeof s=="number"||Jt.test(s))&&s>-1&&s%1==0&&s<l}function yt(s,l){if(be(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||wn(s)?!0:Gt.test(s)||!Vt.test(s)||l!=null&&s in Object(l)}function Qr(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Jr(s){return!!M&&M in s}function es(s){var l=s&&s.constructor,d=typeof l=="function"&&l.prototype||g;return s===d}function ni(s){return s===s&&!wt(s)}function ii(s,l){return function(d){return d==null?!1:d[s]===l&&(l!==void 0||s in Object(d))}}var ts=yn(function(s){s=os(s);var l=[];return _e.test(s)&&l.push(""),s.replace(Yt,function(d,b,A,x){l.push(A?x.replace(Zt,"$1"):b||d)}),l});function bt(s){if(typeof s=="string"||wn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Oe(s){if(s!=null){try{return O.call(s)}catch{}try{return s+""}catch{}}return""}function ns(s,l){return Rr(is(s,l))}function is(s,l){var d=be(s)?tn:Fr;return d(s,Ir(l))}function yn(s,l){if(typeof s!="function"||l&&typeof l!="function")throw new TypeError(i);var d=function(){var b=arguments,A=l?l.apply(this,b):b[0],x=d.cache;if(x.has(A))return x.get(A);var R=s.apply(this,b);return d.cache=x.set(A,R),R};return d.cache=new(yn.Cache||me),d}yn.Cache=me;function ri(s,l){return s===l||s!==s&&l!==l}function bn(s){return rs(s)&&U.call(s,"callee")&&(!ft.call(s,"callee")||Z.call(s)==u)}var be=Array.isArray;function vt(s){return s!=null&&vn(s.length)&&!si(s)}function rs(s){return xt(s)&&vt(s)}function si(s){var l=wt(s)?Z.call(s):"";return l==y||l==w}function vn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=c}function wt(s){var l=typeof s;return!!s&&(l=="object"||l=="function")}function xt(s){return!!s&&typeof s=="object"}function wn(s){return typeof s=="symbol"||xt(s)&&Z.call(s)==F}var ss=De?sn(De):Pr;function os(s){return s==null?"":Kr(s)}function as(s,l,d){var b=s==null?void 0:Qn(s,l);return b===void 0?d:b}function ls(s,l){return s!=null&&Xr(s,l,Dr)}function _t(s){return vt(s)?Lr(s):Nr(s)}function cs(s){return s}function us(s){return yt(s)?He(bt(s)):qr(s)}e.exports=ns})(Je,Je.exports)),Je.exports}var nl=tl();const Nn=Mi(nl);function il(e,t,n){let i=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},c=p=>o.format==="date"?E(p).valueOf():parseFloat(p);t.forEach(p=>{if(o.type==="range"){const m=Y(o.key,p);if(Array.isArray(m)){const y=[c(m[0]),c(m[1])];a.min=a.min!==void 0?Math.min(a.min,y[0]):y[0],a.max=a.max!==void 0?Math.max(a.max,y[1]):y[1]}else{const y=c(m);a.min=a.min!==void 0?Math.min(a.min,y):y,a.max=a.max!==void 0?Math.max(a.max,y):y}return}Array.isArray(p[o.key])?p[o.key].forEach(m=>{a[m]=void 0}):o.type==="spatial"?(a.geometry=o?.state?.geometry||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):o.key?.includes(".")?In(Nn(n.items,o.key)).filter(m=>m).forEach(m=>{a[m]=void 0}):a[p[o.key]]=void 0});const u=o.key||o.keys.join("|"),f=n.filters[u];let h;if(o.state)if(o.type==="range"){const p=$=>o.format==="date"?E($).valueOf():parseFloat($),m=p(o.state.min),y=p(o.state.max),w=p(o.min??a.min),_=p(o.max??a.max);o.format==="date"?h=!E(m).isSame(E(w),"day")||!E(y).isSame(E(_),"day")||void 0:h=m!==w||y!==_||void 0}else h=Object.values(o.state).some(p=>p)||void 0;if(n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:h||f?.dirty,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),o.type==="range"&&n.filters[u].dirty){const p=w=>o.format==="date"?E(w).valueOf():parseFloat(w),m=p(o.state?.min!==void 0?o.state.min:f?.state?.min),y=p(o.state?.max!==void 0?o.state.max:f?.state?.max);n.filters[u].stringifiedState=o.format==="date"?`${E(m).format(We)} - ${E(y).format(We)}`:`${m} - ${y}`}if(n.filters[u].state=Object.assign({},a,f?.state||{},o.state),o.type==="range"&&o.state){const p=m=>o.format==="date"?E(m).valueOf():parseFloat(m);o.state.min!==void 0&&(n.filters[u].state.min=p(o.state.min)),o.state.max!==void 0&&(n.filters[u].state.max=p(o.state.max))}}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(i=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).filter(o=>o).sort((o,a)=>o.localeCompare(a)));const r=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{r.includes(a)||r.push(a)}):(o.type==="select"||o.type==="multiselect")&&(r.includes(o.key)||r.push(o.key))}),ba(t,Object.assign({keys:r},e.fuseConfig)),i}async function rl(e,t,n){let i;n.externalFilter?i=await _a(t,n.filters,e):i=await va(t,n.filters,e),n.results=n.sortResults(i,{isExternalResult:!!n.externalFilter})}function sl(e,t,n){const i=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return C`<eox-itemfilter-text
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
      ></eox-itemfilter-text>`;case"multiselect":case"select":return C`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${i}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${In(Nn(n.items,e.key)).filter(r=>r)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return C`
        <eox-itemfilter-range
          .inlineMode=${n.inlineMode||!1}
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${In(Nn(n.items,e.key)).filter(r=>r)}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return C`
        <eox-itemfilter-spatial
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return C``}}function ol(e,t,n={}){const{resultSorting:i}=t;if(i===!1)return e;if(i===void 0)return n.isExternalResult||t.fuseConfig?.shouldSort?e:[...e].sort((a,c)=>{const u=Y(t.titleProperty,a)||"",f=Y(t.titleProperty,c)||"";return u.toString().localeCompare(f.toString())});if(typeof i=="function")return[...e].sort(i);const r=typeof i=="string"?i:i.key,o=typeof i=="object"&&i.order==="desc"?-1:1;return r?[...e].sort((a,c)=>{const u=Y(r,a)||"",f=Y(r,c)||"";return u.toString().localeCompare(f.toString())*o}):e}function al(e,t,n){return C`
    ${z(e.dirty,()=>C`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${i=>{const r=i.target.parentElement.querySelector("[slot=filter]");r&&typeof r.reset=="function"&&r.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":C`
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
  `}function ll(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}class cl extends he{static get properties(){return{items:{type:Array},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{type:Array},fuseConfig:{type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{type:Boolean},resultActionIcon:{type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}#e=[];#t=[];#n=$a;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=It(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}apply(){this.#n=Cn.reduce((t,n)=>(t[n]=this[n],t),{}),this.#e=il(this.#n,this.#t,this),this.search()}async searchHandler(){await rl(this.#n,this.#t,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(t,n){return ol(t,this.#n,n)}#r(t,n){return sl(t,n,this)}#i(t,n){return al(t,n,this)}resetFilters(){ll(this)}firstUpdated(t){let n={};Cn.map(i=>{n={...n,[i]:this[i]}}),this.#n=n,this.#t=this.items?.map((i,r)=>Object.assign({id:i[this.idProperty]||`item-${r}`},i))||[],this.apply()}updated(t){let n=!1,i=!1;Cn.forEach(r=>{t.has(r)&&(this.#n[r]=this[r],["items","filterProperties","idProperty","aggregateResults","fuseConfig","matchAllWhenEmpty","externalFilter"].includes(r)?n=!0:r==="resultSorting"&&(i=!0))}),n?(this.#t=this.items?.map((r,o)=>Object.assign({id:r[this.idProperty]||`item-${o}`},r))||[],this.apply()):i&&this.search()}updateResult(t){this.selectedResult=t.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(t){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:t.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(t){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:t.detail,bubbles:!0,composed:!0}))}emitResultAction(t){this.dispatchEvent(new CustomEvent("click:result-action",{detail:t.detail,bubbles:!0,composed:!0}))}render(){return C`
      <style>
        ${ys}
        ${!this.unstyled&&Hn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":$e}
        @submit="${t=>t.preventDefault()}"
      >
        ${z(this.filterProperties,()=>C`
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
                  ${z(!this.inlineMode,()=>C`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${z(!this.inlineMode&&this.#n.filterProperties&&!this.inlineMode&&this.#n.filterProperties&&Pn(this.filters),()=>C`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?$e:C`
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
                      ${Nt(Object.values(this.filters),(t,n)=>C` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${t}
                              @details-toggled=${i=>Yi(i,this.#n,this)}
                              data-details="${t.key}"
                            >
                              ${this.#i(t,xi(n,1))}
                              ${this.#r(t,xi(n,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${z(this.#n?.showResults&&this.results,()=>C`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${this.#n}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${this.#e}
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
    `}}customElements.define("eox-itemfilter",cl);export{cl as EOxItemFilter};
