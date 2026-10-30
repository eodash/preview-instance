import{fC as ls,fB as cs,bf as fe,fY as ce,bc as C,eq as $e,ep as Mi}from"./index-BvwgT-QJ.js";import{o as Bt}from"./map-Bv-shLAs.js";import{n as q}from"./directive-CCBPy0DW.js";import{d as k}from"./dayjs.min-wQpvSuzz.js";import{_ as Pt,c as us}from"./index-IdKP0dUn.js";import{s as qe,u as ai}from"./static-JnI-ehIk.js";import{o as Ct}from"./unsafe-html-Cx6IqiH0.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import{c as In,d as li,e as Je,l as Nn,b as hs}from"./index-CfoLOtGZ.js";import{f as fs,m as ds,l as ps}from"./index-Dm-aC8c8.js";import"./directive-helpers-D2MAJFYu.js";const gs=`
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
`;cs();const Hn=`
${ls}
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
  height: auto;
}
.select li label,
.multiselect li label {
  min-width: 0;
  max-width: 100%;
}
.select li label .title,
.multiselect li label .title {
  flex: 1;
  min-width: 0;
  max-width: 100%;
  width: 100%;
  overflow: visible;
}
.select li label .title .title-text,
.multiselect li label .title .title-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  max-width: 100%;
  width: 100%;
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
`;class ms extends fe{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#e(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return C`
      <style>
        ${!this.unstyled&&Hn}
      </style>

      ${q(this.filterObject.featured,()=>C`<slot name="filter"></slot>`,()=>C`<details
            @toggle="${this.#e}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||ce}
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
    `}}customElements.define("eox-itemfilter-expandcontainer",ms);function Le(e){return Array.isArray?Array.isArray(e):$i(e)==="[object Array]"}function ys(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Cn(e){return e==null?"":ys(e)}function G(e){return typeof e=="string"}function $t(e){return typeof e=="number"}function bs(e){return e===!0||e===!1||vs(e)&&$i(e)=="[object Boolean]"}function Si(e){return typeof e=="object"}function vs(e){return Si(e)&&e!==null}function ne(e){return e!=null}function Mt(e){return!e.trim().length}function $i(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const ws="Incorrect 'index' type",Mn="Invalid doc index: must be a non-negative integer within the bounds of the docs array",xs=e=>`Invalid value for key ${e}`,_s=e=>`Pattern length exceeds max of ${e}.`,As=e=>`Missing ${e} property in key`,Cs=e=>`Property 'weight' in key '${e}' must be a positive integer`,Ms="Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.",ci=Object.prototype.hasOwnProperty;var Ss=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{const i=Li(n);this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function Li(e){let t=null,n=null,i=null,r=1,o=null;if(G(e)||Le(e))i=e,t=ui(e),n=Lt(e);else{if(!ci.call(e,"name"))throw new Error(As("name"));const a=e.name;if(i=a,ci.call(e,"weight")&&e.weight!==void 0&&(r=e.weight,r<=0))throw new Error(Cs(Lt(a)));t=ui(a),n=Lt(a),o=e.getFn??null}return{path:t,id:n,weight:r,src:i,getFn:o}}function ui(e){return Le(e)?e:e.split(".")}function Lt(e){return Le(e)?e.join("."):e}function $s(e,t){const n=[];let i=!1;const r=(o,a,c,u)=>{if(ne(o))if(!a[c])n.push(u!==void 0?{v:o,i:u}:o);else{const h=o[a[c]];if(!ne(h))return;if(c===a.length-1&&(G(h)||$t(h)||bs(h)||typeof h=="bigint"))n.push(u!==void 0?{v:Cn(h),i:u}:Cn(h));else if(Le(h)){i=!0;for(let f=0,p=h.length;f<p;f+=1)r(h[f],a,c+1,f)}else a.length&&r(h,a,c+1,u)}};return r(e,G(t)?t.split("."):t,0),i?n:n[0]}const Ls={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Rs={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Ts={location:0,threshold:.6,distance:100},ks={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:"any",getFn:$s,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},S=Object.freeze({...Rs,...Ls,...Ts,...ks});function Es(e){return e>=9&&e<=13||e===32||e===160}function Ds(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(r){let o=0,a=!1;for(let u=0;u<r.length;u++)Es(r.charCodeAt(u))?a=!1:a||(o++,a=!0);if(o===0&&(o=1),n.has(o))return n.get(o);const c=Math.round(i/Math.pow(o,.5*e))/i;return n.set(o,c),c},clear(){n.clear()}}}var Fn=class{constructor({getFn:e=S.getFn,fieldNormWeight:t=S.fieldNormWeight}={}){this.norm=Ds(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;const e=this.docs.length;this.records=new Array(e);let t=0;if(G(this.docs[0]))for(let n=0;n<e;n++){const i=this._createStringRecord(this.docs[n],n);i&&(this.records[t++]=i)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw new Error(Mn);if(G(e)){const i=this._createStringRecord(e,t);return i&&this.records.push(i),i}const n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw new Error(Mn);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&(this.records[t].i-=1)}removeAll(e){const t=new Set;for(const i of e)Number.isInteger(i)&&i>=0&&t.add(i);if(t.size===0)return;this.records=this.records.filter(i=>!t.has(i.i));const n=Array.from(t).sort((i,r)=>i-r);for(const i of this.records){let r=0,o=n.length;for(;r<o;){const a=r+o>>>1;n[a]<i.i?r=a+1:o=a}i.i-=r}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!ne(e)||Mt(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){const n={i:t,$:{}};for(let i=0,r=this.keys.length;i<r;i++){const o=this.keys[i],a=o.getFn?o.getFn(e):this.getFn(e,o.path);if(ne(a)){if(Le(a)){const c=[];for(let u=0,h=a.length;u<h;u+=1){const f=a[u];if(ne(f)){if(G(f)){if(!Mt(f)){const p={v:f,i:u,n:this.norm.get(f)};c.push(p)}}else if(ne(f.v)){const p=G(f.v)?f.v:Cn(f.v);if(!Mt(p)){const m={v:p,i:f.i,n:this.norm.get(p)};c.push(m)}}}}n.$[i]=c}else if(G(a)&&!Mt(a)){const c={v:a,n:this.norm.get(a)};n.$[i]=c}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function Ri(e,t,{getFn:n=S.getFn,fieldNormWeight:i=S.fieldNormWeight}={}){const r=new Fn({getFn:n,fieldNormWeight:i});return r.setKeys(e.map(Li)),r.setSources(t),r.create(),r}function js(e,{getFn:t=S.getFn,fieldNormWeight:n=S.fieldNormWeight}={}){const{keys:i,records:r}=e,o=new Fn({getFn:t,fieldNormWeight:n});return o.setKeys(i),o.setIndexRecords(r),o}function Os(e=[],t=S.minMatchCharLength){const n=[];let i=-1,r=-1,o=0;for(let a=e.length;o<a;o+=1){const c=e[o];c&&i===-1?i=o:!c&&i!==-1&&(r=o-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}function Bs(e,t,n,{location:i=S.location,distance:r=S.distance,threshold:o=S.threshold,findAllMatches:a=S.findAllMatches,minMatchCharLength:c=S.minMatchCharLength,includeMatches:u=S.includeMatches,ignoreLocation:h=S.ignoreLocation}={}){if(t.length>32)throw new Error(_s(32));const f=t.length,p=e.length,m=Math.max(0,Math.min(i,p));let y=o,w=m;const _=(D,P)=>{const K=D/f;if(h)return K;const de=Math.abs(m-P);return r?K+de/r:de?1:K},L=c>1||u,$=L?Array(p):[];let E;for(;(E=e.indexOf(t,w))>-1;){const D=_(0,E);if(y=Math.min(D,y),w=E+f,L){let P=0;for(;P<f;)$[E+P]=1,P+=1}}w=-1;let j=[],B=1,z=0,H=f+p;const se=1<<f-1;for(let D=0;D<f;D+=1){let P=0,K=H;for(;P<K;)_(D,m+K)<=y?P=K:H=K,K=Math.floor((H-P)/2+P);H=K;let de=Math.max(1,m-K+1);const pe=a?p:Math.min(m+K,p)+f,X=Array(pe+2);X[pe+1]=(1<<D)-1;for(let F=pe;F>=de;F-=1){const ke=F-1,Ve=n[e[ke]];if(X[F]=(X[F+1]<<1|1)&Ve,D&&(X[F]|=(j[F+1]|j[F])<<1|1|j[F+1]),X[F]&se&&(B=_(D,ke),B<=y)){if(y=B,w=ke,z=D,w<=m)break;de=Math.max(1,2*m-w)}}if(_(D+1,m)>y)break;j=X}if(L&&w>=0){const D=Math.min(p-1,w+f-1+z);for(let P=w;P<=D;P+=1)n[e[P]]&&($[P]=1)}const te={isMatch:w>=0,score:Math.max(.001,B)};if(L){const D=Os($,c);D.length?u&&(te.indices=D):te.isMatch=!1}return te}function Ps(e){const t={};for(let n=0,i=e.length;n<i;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<i-n-1}return t}function qn(e){if(e.length<=1)return e;e.sort((n,i)=>n[0]-i[0]||n[1]-i[1]);const t=[e[0]];for(let n=1,i=e.length;n<i;n+=1){const r=t[t.length-1],o=e[n];o[0]<=r[1]+1?r[1]=Math.max(r[1],o[1]):t.push(o)}return t}const Ti={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Is=new RegExp("["+Object.keys(Ti).join("")+"]","g"),et=typeof String.prototype.normalize=="function"?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Is,t=>Ti[t]):e=>e;var zn=class{constructor(e,{location:t=S.location,threshold:n=S.threshold,distance:i=S.distance,includeMatches:r=S.includeMatches,findAllMatches:o=S.findAllMatches,minMatchCharLength:a=S.minMatchCharLength,isCaseSensitive:c=S.isCaseSensitive,ignoreDiacritics:u=S.ignoreDiacritics,ignoreLocation:h=S.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h},e=c?e:e.toLowerCase(),e=u?et(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const f=(m,y)=>{this.chunks.push({pattern:m,alphabet:Ps(m),startIndex:y})},p=this.pattern.length;if(p>32){let m=0;const y=p%32,w=p-y;for(;m<w;)f(this.pattern.substr(m,32),m),m+=32;if(y){const _=p-32;f(this.pattern.substr(_),_)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i}=this.options;if(e=t?e:e.toLowerCase(),e=n?et(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};const w={isMatch:!0,score:0};return i&&(w.indices=[[0,e.length-1]]),w}const{location:r,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:h}=this.options,f=[];let p=0,m=!1;this.chunks.forEach(({pattern:w,alphabet:_,startIndex:L})=>{const{isMatch:$,score:E,indices:j}=Bs(e,w,_,{location:r+L,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:h});$&&(m=!0),p+=E,$&&j&&f.push(...j)});const y={isMatch:m,score:m?p/this.chunks.length:1};return m&&i&&(y.indices=qn(f)),y}};const Ns=new Set(["fuzzy","include"]);function Hs(e){return e.startsWith("inverse")}const Sn=[{type:"exact",multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:"exact",search(t){const n=t===e;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"include",multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:"include",search(t){let n=0,i;const r=[],o=e.length;for(;(i=t.indexOf(e,n))>-1;)n=i+o,r.push([i,n-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}})},{type:"prefix-exact",multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:"prefix-exact",search(t){const n=t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"inverse-prefix-exact",multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:"inverse-prefix-exact",search(t){const n=!t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"inverse-suffix-exact",multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:"inverse-suffix-exact",search(t){const n=!t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"suffix-exact",multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:"suffix-exact",search(t){const n=t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[t.length-e.length,t.length-1]}}})},{type:"inverse-exact",multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:"inverse-exact",search(t){const n=t.indexOf(e)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"fuzzy",multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{const n=new zn(e,{location:t.location??S.location,threshold:t.threshold??S.threshold,distance:t.distance??S.distance,includeMatches:t.includeMatches??S.includeMatches,findAllMatches:t.findAllMatches??S.findAllMatches,minMatchCharLength:t.minMatchCharLength??S.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??S.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??S.ignoreDiacritics,ignoreLocation:t.ignoreLocation??S.ignoreLocation});return{type:"fuzzy",search(i){return n.searchIn(i)}}}}],hi=Sn.length,Fs="\0",qs="|";function zs(e){const t=[],n=e.length;let i=0;for(;i<n;){for(;i<n&&e[i]===" ";)i++;if(i>=n)break;let r=i;for(;r<n&&e[r]!==" "&&e[r]!=='"';)r++;if(r<n&&e[r]==='"'){for(r++;r<n;){if(e[r]==='"'){const o=r+1;if(o>=n||e[o]===" "){r++;break}if(e[o]==="$"&&(o+1>=n||e[o+1]===" ")){r+=2;break}}r++}t.push(e.substring(i,r)),i=r}else{for(;r<n&&e[r]!==" ";)r++;t.push(e.substring(i,r)),i=r}}return t}function fi(e,t){const n=e.match(t);return n?n[1]:null}function Ks(e,t={}){return e.replace(/\\\|/g,Fs).split(qs).map(n=>{const i=zs(n.replace(/\u0000/g,"|").trim()).filter(o=>o&&!!o.trim()),r=[];for(let o=0,a=i.length;o<a;o+=1){const c=i[o];let u=!1,h=-1;for(;!u&&++h<hi;){const f=Sn[h],p=fi(c,f.multiRegex);p&&(r.push(f.create(p,t)),u=!0)}if(!u)for(h=-1;++h<hi;){const f=Sn[h],p=fi(c,f.singleRegex);if(p){r.push(f.create(p,t));break}}}return r})}var Us=class{constructor(e,{isCaseSensitive:t=S.isCaseSensitive,ignoreDiacritics:n=S.ignoreDiacritics,includeMatches:i=S.includeMatches,minMatchCharLength:r=S.minMatchCharLength,ignoreLocation:o=S.ignoreLocation,findAllMatches:a=S.findAllMatches,location:c=S.location,threshold:u=S.threshold,distance:h=S.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i,minMatchCharLength:r,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:h},e=t?e:e.toLowerCase(),e=n?et(e):e,this.pattern=e,this.query=Ks(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i,ignoreDiacritics:r}=this.options;e=i?e:e.toLowerCase(),e=r?et(e):e;let o=0;const a=[];let c=0,u=!1;for(let h=0,f=t.length;h<f;h+=1){const p=t[h];a.length=0,o=0,u=!1;for(let m=0,y=p.length;m<y;m+=1){const w=p[m],{isMatch:_,indices:L,score:$}=w.search(e);if(_)o+=1,c+=$,Hs(w.type)&&(u=!0),n&&(Ns.has(w.type)?a.push(...L):a.push(L));else{c=0,o=0,a.length=0,u=!1;break}}if(o){const m={isMatch:!0,score:c/o};return u&&(m.hasInverse=!0),n&&(m.indices=qn(a)),m}}return{isMatch:!1,score:1}}};const $n=[];function Kn(...e){$n.push(...e)}function Rt(e,t){for(let n=0,i=$n.length;n<i;n+=1){const r=$n[n];if(r.condition(e,t))return new r(e,t)}return new zn(e,t)}const Tt={AND:"$and",OR:"$or"},Ln={PATH:"$path",PATTERN:"$val"},Rn=e=>!!(e[Tt.AND]||e[Tt.OR]),Ws=e=>!!e[Ln.PATH],Vs=e=>!Le(e)&&Si(e)&&!Rn(e),di=e=>({[Tt.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function ki(e,t,{auto:n=!0}={}){const i=r=>{if(G(r)){const u={keyId:null,pattern:r};return n&&(u.searcher=Rt(r,t)),u}const o=Object.keys(r),a=Ws(r);if(!a&&o.length>1&&!Rn(r))return i(di(r));if(Vs(r)){const u=a?r[Ln.PATH]:o[0],h=a?r[Ln.PATTERN]:r[u];if(!G(h))throw new Error(xs(u));const f={keyId:Lt(u),pattern:h};return n&&(f.searcher=Rt(h,t)),f}const c={children:[],operator:o[0]};return o.forEach(u=>{const h=r[u];Le(h)&&h.forEach(f=>{c.children.push(i(f))})}),c};return Rn(e)||(e=di(e)),i(e)}function Tn(e,{ignoreFieldNorm:t=S.ignoreFieldNorm}){let n=1;return e.forEach(({key:i,norm:r,score:o})=>{const a=i?i.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:r))}),n}function Gs(e,{ignoreFieldNorm:t=S.ignoreFieldNorm}){e.forEach(n=>{n.score=Tn(n.matches,{ignoreFieldNorm:t})})}var Ys=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){const t=this.heap;for(;e>0;){const n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;const i=t[e];t[e]=t[n],t[n]=i,e=n}}_sinkDown(e){const t=this.heap,n=t.length;let i=e;do{e=i;const r=2*e+1,o=2*e+2;if(r<n&&this.comparator(t[r],t[i])>0&&(i=r),o<n&&this.comparator(t[o],t[i])>0&&(i=o),i!==e){const a=t[e];t[e]=t[i],t[i]=a}}while(i!==e)}};function Xs(e){const t=[];return e.matches.forEach(n=>{if(!ne(n.indices)||!n.indices.length)return;const i={indices:n.indices,value:n.value};n.key&&(i.key=n.key.id),n.idx>-1&&(i.refIndex=n.idx),t.push(i)}),t}function Zs(e,t,{includeMatches:n=S.includeMatches,includeScore:i=S.includeScore}={}){return e.map(r=>{const{idx:o}=r,a={item:t[o],refIndex:o};return n&&(a.matches=Xs(r)),i&&(a.score=r.score),a})}const Qs=/[\p{L}\p{M}\p{N}_]+/gu,pi=new WeakSet;function Js(e){pi.has(e)||(pi.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function eo(e){if(typeof e=="function"){let t=!1;return n=>{const i=e(n);if(!t&&(t=!0,!Array.isArray(i)||i.some(r=>typeof r!="string")))throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(i)?"array containing non-strings":typeof i}.`);return i}}return e instanceof RegExp?(e.global||Js(e),t=>t.match(e)||[]):t=>t.match(Qs)||[]}function kn({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){const i=eo(n);return{tokenize(r){return e||(r=r.toLowerCase()),t&&(r=et(r)),i(r)}}}var to=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=kn({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});const n=this.analyzer.tokenize(e),{df:i,fieldCount:r}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(const o of n){this.termSearchers.push(new zn(o,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));const a=i.get(o)||0,c=Math.log(1+(r-a+.5)/(a+.5));this.idfWeights.push(c)}this.combineAll=t.tokenMatch==="all",this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const t=[];let n=0,i=0,r=0,o=0;const a=this.combineAll&&!this.useMask?new Set:null;for(let h=0;h<this.termSearchers.length;h++){const f=this.termSearchers[h].searchIn(e),p=this.idfWeights[h];i+=p,f.isMatch&&(r++,n+=p*(1-f.score),f.indices&&t.push(...f.indices),this.combineAll&&(this.useMask?o|=1<<h:a.add(h)))}if(r===0)return{isMatch:!1,score:1};const c=i>0?1-n/i:0,u={isMatch:!0,score:Math.max(.001,c)};return this.options.includeMatches&&t.length&&(u.indices=qn(t)),this.combineAll&&(this.useMask?u.matchedMask=o:u.matchedTerms=a,u.termCount=this.numTerms),u}};function vn(e,t,n,i){const r=i.tokenize(t);if(!r.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);const o=new Set(r);let a=e.docTermFieldHits.get(n);a||(a=new Map,e.docTermFieldHits.set(n,a));for(const c of o)a.set(c,(a.get(c)||0)+1),e.df.set(c,(e.df.get(c)||0)+1)}function Ei(e,t,n,i){const{i:r,v:o,$:a}=t;if(o!==void 0){vn(e,o,r,i);return}if(a)for(let c=0;c<n;c++){const u=a[c];if(u)if(Array.isArray(u))for(const h of u)vn(e,h.v,r,i);else vn(e,u.v,r,i)}}function no(e,t,n){const i={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(const r of e)Ei(i,r,t,n);return i}function io(e,t,n,i){Ei(e,t,n,i)}function ro(e,t){const n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);const i=e.docTermFieldHits.get(t);if(i){for(const[r,o]of i){const a=(e.df.get(r)||0)-o;a<=0?e.df.delete(r):e.df.set(r,a)}e.docTermFieldHits.delete(t)}}function gi(e,t){if(t.length===0)return;const n=Array.from(new Set(t)).sort((c,u)=>c-u);for(const c of n)ro(e,c);const i=c=>{let u=0,h=n.length;for(;u<h;){const f=u+h>>>1;n[f]<c?u=f+1:h=f}return c-u},r=n[0],o=new Map;for(const[c,u]of e.docFieldCount)o.set(c>r?i(c):c,u);e.docFieldCount=o;const a=new Map;for(const[c,u]of e.docTermFieldHits)a.set(c>r?i(c):c,u);e.docTermFieldHits=a}var Re=class{constructor(e,t,n){this.options={...S,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Ss(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const t=Rt(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Fn))throw new Error(ws);if(this._myIndex=t||Ri(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const n=kn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=no(this._myIndex.records,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}add(e){if(!ne(e))return;this._docs.push(e);const t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){const n=kn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});io(this._invertedIndex,t,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}remove(e=()=>!1){const t=[],n=[];for(let i=0,r=this._docs.length;i<r;i+=1)e(this._docs[i],i)&&(t.push(this._docs[i]),n.push(i));if(n.length){this._invertedIndex&&gi(this._invertedIndex,n);const i=new Set(n);this._docs=this._docs.filter((r,o)=>!i.has(o)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw new Error(Mn);this._invertedIndex&&gi(this._invertedIndex,[e]);const t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){const{limit:n=-1}=t||{},{includeMatches:i,includeScore:r,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;if(G(e)&&!e.trim()){let m=this._docs.map((y,w)=>({item:y,refIndex:w}));return $t(n)&&n>-1&&(m=m.slice(0,n)),m}const u=o&&$t(n)&&n>0&&G(e),h=a,f=(m,y)=>h(m,y)||m.idx-y.idx;let p;if(u){const m=new Ys(n,f);G(this._docs[0])?this._searchStringList(e,{heap:m,ignoreFieldNorm:c}):this._searchObjectList(e,{heap:m,ignoreFieldNorm:c}),p=m.extractSorted()}else p=G(e)?G(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),Gs(p,{ignoreFieldNorm:c}),o&&p.sort(G(e)?f:h),$t(n)&&n>-1&&(p=p.slice(0,n));return Zs(p,this._docs,{includeMatches:i,includeScore:r})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=t?null:[];return o.forEach(({v:c,i:u,n:h})=>{if(!ne(c))return;const f=i.searchIn(c);if(f.isMatch){const p={score:f.score,value:c,norm:h,indices:f.indices};r&&(p.matchedMask=f.matchedMask,p.matchedTerms=f.matchedTerms,p.termCount=f.termCount);const m=[p];if(!r||this._coversAllTokens(m)){const y={item:c,idx:u,matches:m};t?(y.score=Tn(y.matches,{ignoreFieldNorm:n}),t.insert(y)):a.push(y)}}}),a}_searchLogical(e){const t=ki(e,this.options),n=this._normalizedKeys(),i=(c,u,h)=>{if(!("children"in c)){const{keyId:y,searcher:w}=c;let _;return y===null?(_=[],n.forEach((L,$)=>{_.push(...this._findMatches({key:L,value:u[$],searcher:w}))})):_=this._findMatches({key:this._keyStore.get(y),value:this._myIndex.getValueForItemAtKeyId(u,y),searcher:w}),_&&_.length?[{idx:h,item:u,matches:_}]:[]}const{children:f,operator:p}=c,m=[];for(let y=0,w=f.length;y<w;y+=1){const _=f[y],L=i(_,u,h);if(L.length)m.push(...L);else if(p===Tt.AND)return[]}return m},r=this._myIndex.records,o=new Map,a=[];return r.forEach(({$:c,i:u})=>{if(ne(c)){const h=i(t,c,u);h.length&&(o.has(u)||(o.set(u,{idx:u,item:c,matches:[]}),a.push(o.get(u))),h.forEach(({matches:f})=>{o.get(u).matches.push(...f)}))}}),a}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=this._normalizedKeys(),c=t?null:[];return o.forEach(({$:u,i:h})=>{if(!ne(u))return;const f=[];let p=!1,m=!1;if(a.forEach((y,w)=>{const _=this._findMatches({key:y,value:u[w],searcher:i});_.length?(f.push(..._),_[0].hasInverse&&(m=!0)):p=!0}),!(m&&p)&&f.length&&(!r||this._coversAllTokens(f))){const y={idx:h,item:u,matches:f};t?(y.score=Tn(y.matches,{ignoreFieldNorm:n}),t.insert(y)):c.push(y)}}),c}_findMatches({key:e,value:t,searcher:n}){if(!ne(t))return[];const i=[];if(Le(t))t.forEach(({v:r,i:o,n:a})=>{if(!ne(r))return;const c=n.searchIn(r);if(c.isMatch){const u={score:c.score,key:e,value:r,idx:o,norm:a,indices:c.indices,hasInverse:c.hasInverse};c.termCount!==void 0&&(u.matchedMask=c.matchedMask,u.matchedTerms=c.matchedTerms,u.termCount=c.termCount),i.push(u)}});else{const{v:r,n:o}=t,a=n.searchIn(r);if(a.isMatch){const c={score:a.score,key:e,value:r,norm:o,indices:a.indices,hasInverse:a.hasInverse};a.termCount!==void 0&&(c.matchedMask=a.matchedMask,c.matchedTerms=a.matchedTerms,c.termCount=a.termCount),i.push(c)}}return i}_coversAllTokens(e){const t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let i=0;for(let r=0;r<e.length;r++)i|=e[r].matchedMask||0;return i===2**t-1}const n=new Set;for(let i=0;i<e.length;i++){const r=e[i].matchedTerms;if(r)for(const o of r)n.add(o)}return n.size===t}};Re.version="7.5.0";Re.createIndex=Ri;Re.parseIndex=js;Re.config=S;Re.match=function(e,t,n){if(n&&n.useTokenSearch)throw new Error(Ms);return Rt(e,{...S,...n}).searchIn(t)};Re.parseQuery=ki;Kn(Us);Kn(to);Re.use=function(...e){e.forEach(t=>Kn(t))};var Un=Re;const so=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),wn=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"],Ue="YYYY-MM-DD",oo=.3;function Di(e,t){const n=c=>c.inlineSearch&&c.type==="text",i=new Un(t.filterProperties,{keys:["title"],...t.filterProperties.some(n)&&{threshold:oo}});if(!(e.target instanceof HTMLInputElement))return;const r=e.target.value,a=i.search(r).map(c=>c.item.key||c.item.keys.join("|"));Object.keys(t.filters).forEach(c=>{n(t.filters[c])||(t.querySelector(`[data-details="${c}"]`).parentElement.style.display=a.includes(c)||!r?"":"none")})}function Wn(e){const t=e.renderRoot.querySelector("#eox-itemfilter-input-search");t.value="",e.inlineSearchText="",Di({target:t},e)}function ji(e){const t=e.renderRoot.querySelector("#eox-itemfilter-input-search"),n=t.value.trim(),i=Oi(e);!n||!i.length||(i.forEach(r=>{e.querySelector(`#${CSS.escape(`filter-${r.key}`.replace("|","-"))}`)?.appendText(n)}),Wn(e),t.focus(),e.showDropdown=!1)}function ao(e,t){e.key!=="Enter"||e.isComposing||ji(t)}function Oi(e){return Object.values(e.filters).filter(t=>t.inlineSearch&&t.type==="text")}function lo(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#${CSS.escape(`filter-${n}`)}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const En=Math.min,ze=Math.max,kt=Math.round,St=Math.floor,we=e=>({x:e,y:e});function co(e,t){return typeof e=="function"?e(t):e}function uo(e){return e.split("-")[0]}function ho(e){return e.split("-")[1]}function fo(e){return e==="x"?"y":"x"}function po(e){return e==="y"?"height":"width"}function Bi(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function go(e){return fo(Bi(e))}function mo(e){var t,n,i,r;return{top:(t=e.top)!=null?t:0,right:(n=e.right)!=null?n:0,bottom:(i=e.bottom)!=null?i:0,left:(r=e.left)!=null?r:0}}function yo(e){return typeof e!="number"?mo(e):{top:e,right:e,bottom:e,left:e}}function Et(e){const{x:t,y:n,width:i,height:r}=e;return{width:i,height:r,top:n,left:t,right:t+i,bottom:n+r,x:t,y:n}}function mi(e,t,n){let{reference:i,floating:r}=e;const o=Bi(t),a=go(t),c=po(a),u=uo(t),h=o==="y",f=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,m=i[c]/2-r[c]/2;let y;switch(u){case"top":y={x:f,y:i.y-r.height};break;case"bottom":y={x:f,y:i.y+i.height};break;case"right":y={x:i.x+i.width,y:p};break;case"left":y={x:i.x-r.width,y:p};break;default:y={x:i.x,y:i.y}}const w=ho(t);return w&&(y[a]+=m*(w==="end"?1:-1)*(n&&h?-1:1)),y}async function bo(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:o,rects:a,elements:c,strategy:u}=e,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:m=!1,padding:y=0}=co(t,e),w=yo(y),L=c[m?p==="floating"?"reference":"floating":p],$=Et(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(L)))==null||n?L:L.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:h,rootBoundary:f,strategy:u})),E=p==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,j=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),B=await(o.isElement==null?void 0:o.isElement(j))&&await(o.getScale==null?void 0:o.getScale(j))||{x:1,y:1},z=Et(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:E,offsetParent:j,strategy:u}):E);return{top:($.top-z.top+w.top)/B.y,bottom:(z.bottom-$.bottom+w.bottom)/B.y,left:($.left-z.left+w.left)/B.x,right:(z.right-$.right+w.right)/B.x}}const vo=50,wo=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:a}=n,c=a.detectOverflow?a:{...a,detectOverflow:bo},u=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:p}=mi(h,i,u),m=i,y=0;const w={};for(let _=0;_<o.length;_++){const L=o[_];if(!L)continue;const{name:$,fn:E}=L,{x:j,y:B,data:z,reset:H}=await E({x:f,y:p,initialPlacement:i,placement:m,strategy:r,middlewareData:w,rects:h,platform:c,elements:{reference:e,floating:t}});f=j??f,p=B??p,w[$]={...w[$],...z},H&&y<vo&&(y++,typeof H=="object"&&(H.placement&&(m=H.placement),H.rects&&(h=H.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):H.rects),{x:f,y:p}=mi(h,m,u)),_=-1)}return{x:f,y:p,placement:m,strategy:r,middlewareData:w}};function It(){return typeof window<"u"}function We(e){return Pi(e)?(e.nodeName||"").toLowerCase():"#document"}function ee(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function xe(e){var t;return(t=(Pi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Pi(e){return It()?e instanceof Node||e instanceof ee(e).Node:!1}function ue(e){return It()?e instanceof Element||e instanceof ee(e).Element:!1}function Te(e){return It()?e instanceof HTMLElement||e instanceof ee(e).HTMLElement:!1}function yi(e){return!It()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ee(e).ShadowRoot}function Nt(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=he(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&r!=="inline"&&r!=="contents"}function xo(e){return/^(table|td|th)$/.test(We(e))}function Ht(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const _o=/transform|translate|scale|rotate|perspective|filter/,Ao=/paint|layout|strict|content/,Be=e=>!!e&&e!=="none";let xn;function Vn(e){const t=ue(e)?he(e):e;return Be(t.transform)||Be(t.translate)||Be(t.scale)||Be(t.rotate)||Be(t.perspective)||!Gn()&&(Be(t.backdropFilter)||Be(t.filter))||_o.test(t.willChange||"")||Ao.test(t.contain||"")}function Co(e){let t=Pe(e);for(;Te(t)&&!tt(t);){if(Vn(t))return t;if(Ht(t))return null;t=Pe(t)}return null}function Gn(){return xn==null&&(xn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),xn}function tt(e){return/^(html|body|#document)$/.test(We(e))}function he(e){return ee(e).getComputedStyle(e)}function Ft(e){return ue(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Pe(e){if(We(e)==="html")return e;const t=e.assignedSlot||e.parentNode||yi(e)&&e.host||xe(e);return yi(t)?t.host:t}function Ii(e){const t=Pe(e);return tt(t)?(e.ownerDocument||e).body:Te(t)&&Nt(t)?t:Ii(t)}function nt(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Ii(e),o=r===((i=e.ownerDocument)==null?void 0:i.body),a=ee(r);if(o){const c=Dn(a);return t.concat(a,a.visualViewport||[],Nt(r)?r:[],c&&n?nt(c):[])}else return t.concat(r,nt(r,[],n))}function Dn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ni(e){const t=he(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Te(e),o=r?e.offsetWidth:n,a=r?e.offsetHeight:i,c=kt(n)!==o||kt(i)!==a;return c&&(n=o,i=a),{width:n,height:i,$:c}}function Yn(e){return ue(e)?e:e.contextElement}function Ke(e){const t=Yn(e);if(!Te(t))return we(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=Ni(t);let a=(o?kt(n.width):n.width)/i,c=(o?kt(n.height):n.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Mo=we(0);function Hi(e){const t=ee(e);return!Gn()||!t.visualViewport?Mo:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function So(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===ee(e)}function Ie(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=Yn(e);let a=we(1);t&&(i?ue(i)&&(a=Ke(i)):a=Ke(e));const c=So(o,n,i)?Hi(o):we(0);let u=(r.left+c.x)/a.x,h=(r.top+c.y)/a.y,f=r.width/a.x,p=r.height/a.y;if(o&&i){const m=ee(o),y=ue(i)?ee(i):i;let w=m,_=Dn(w);for(;_&&y!==w;){const L=Ke(_),$=_.getBoundingClientRect(),E=he(_),j=$.left+(_.clientLeft+parseFloat(E.paddingLeft))*L.x,B=$.top+(_.clientTop+parseFloat(E.paddingTop))*L.y;u*=L.x,h*=L.y,f*=L.x,p*=L.y,u+=j,h+=B,w=ee(_),_=Dn(w)}}return Et({width:f,height:p,x:u,y:h})}function qt(e,t){const n=Ft(e).scrollLeft;return t?t.left+n:Ie(xe(e)).left+n}function Fi(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-qt(e,n),r=n.top+t.scrollTop;return{x:i,y:r}}function $o(e){let{elements:t,rect:n,offsetParent:i,strategy:r}=e;const o=r==="fixed",a=xe(i),c=t?Ht(t.floating):!1;if(i===a||c&&o)return n;let u={scrollLeft:0,scrollTop:0},h=we(1);const f=we(0),p=Te(i);if((p||!o)&&((We(i)!=="body"||Nt(a))&&(u=Ft(i)),p)){const y=Ie(i);h=Ke(i),f.x=y.x+i.clientLeft,f.y=y.y+i.clientTop}const m=a&&!p&&!o?Fi(a,u):we(0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-u.scrollLeft*h.x+f.x+m.x,y:n.y*h.y-u.scrollTop*h.y+f.y+m.y}}function Lo(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Ro(e){const t=Ft(e),n=e.ownerDocument.body,i=ze(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=ze(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let o=-t.scrollLeft+qt(e);const a=-t.scrollTop;return he(n).direction==="rtl"&&(o+=ze(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}const To=25;function ko(e,t,n){n===void 0&&(n="viewport");const i=n==="layoutViewport",r=ee(e),o=xe(e),a=r.visualViewport;let c=o.clientWidth,u=o.clientHeight,h=0,f=0;if(a){const m=!Gn()||t==="fixed";i?m||(h=-a.offsetLeft,f=-a.offsetTop):(c=a.width,u=a.height,m&&(h=a.offsetLeft,f=a.offsetTop))}if(qt(o)<=0){const m=o.ownerDocument,y=m.body,w=getComputedStyle(y),_=m.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,L=Math.abs(o.clientWidth-y.clientWidth-_),$=getComputedStyle(o).scrollbarGutter==="stable both-edges"?L/2:L;$<=To&&(c-=$)}return{width:c,height:u,x:h,y:f}}function Eo(e,t){const n=Ie(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,o=Ke(e),a=e.clientWidth*o.x,c=e.clientHeight*o.y,u=r*o.x,h=i*o.y;return{width:a,height:c,x:u,y:h}}function bi(e,t,n){let i;if(t==="viewport"||t==="layoutViewport")i=ko(e,n,t);else if(t==="document")i=Ro(xe(e));else if(ue(t))i=Eo(t,n);else{const r=Hi(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Et(i)}function Do(e,t){const n=t.get(e);if(n)return n;let i=nt(e,[],!1).filter(c=>ue(c)&&We(c)!=="body"),r=null;const o=he(e).position==="fixed";let a=o?Pe(e):e;for(;ue(a)&&!tt(a);){const c=he(a),u=Vn(a),h=r?r.position:o?"fixed":"";!u&&(h==="fixed"||h==="absolute"&&c.position==="static")?i=i.filter(p=>p!==a):r=c,a=Pe(a)}return t.set(e,i),i}function jo(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const a=[...n==="clippingAncestors"?Ht(t)?[]:Do(t,this._c):[].concat(n),i],c=bi(t,a[0],r);let u=c.top,h=c.right,f=c.bottom,p=c.left;for(let m=1;m<a.length;m++){const y=bi(t,a[m],r);u=ze(y.top,u),h=En(y.right,h),f=En(y.bottom,f),p=ze(y.left,p)}return{width:h-p,height:f-u,x:p,y:u}}function Oo(e){const{width:t,height:n}=Ni(e);return{width:t,height:n}}function Bo(e,t,n){const i=Te(t),r=xe(t),o=n==="fixed",a=Ie(e,!0,o,t);let c={scrollLeft:0,scrollTop:0};const u=we(0);if((i||!o)&&((We(t)!=="body"||Nt(r))&&(c=Ft(t)),i)){const m=Ie(t,!0,o,t);u.x=m.x+t.clientLeft,u.y=m.y+t.clientTop}!i&&r&&(u.x=qt(r));const h=r&&!i&&!o?Fi(r,c):we(0),f=a.left+c.scrollLeft-u.x-h.x,p=a.top+c.scrollTop-u.y-h.y;return{x:f,y:p,width:a.width,height:a.height}}function _n(e){return he(e).position==="static"}function vi(e,t){if(!Te(e)||he(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return xe(e)===n&&(n=n.ownerDocument.body),n}function qi(e,t){const n=ee(e);if(Ht(e))return n;if(!Te(e)){let r=Pe(e);for(;r&&!tt(r);){if(ue(r)&&!_n(r))return r;r=Pe(r)}return n}let i=vi(e,t);for(;i&&xo(i)&&_n(i);)i=vi(i,t);return i&&tt(i)&&_n(i)&&!Vn(i)?n:i||Co(e)||n}const Po=async function(e){const t=this.getOffsetParent||qi,n=this.getDimensions,i=await n(e.floating);return{reference:Bo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Io(e){return he(e).direction==="rtl"}const No={convertOffsetParentRelativeRectToViewportRelativeRect:$o,getDocumentElement:xe,getClippingRect:jo,getOffsetParent:qi,getElementRects:Po,getClientRects:Lo,getDimensions:Oo,getScale:Ke,isElement:ue,isRTL:Io};function zi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ho(e,t,n){let i=null,r;const o=xe(e);function a(){var f;clearTimeout(r),(f=i)==null||f.disconnect(),i=null}function c(f,p){f===void 0&&(f=!1),p===void 0&&(p=1),a();const m=e.getBoundingClientRect(),{left:y,top:w,width:_,height:L}=m;if(f||t(),!_||!L)return;const $=St(w),E=St(o.clientWidth-(y+_)),j=St(o.clientHeight-(w+L)),B=St(y),H={rootMargin:-$+"px "+-E+"px "+-j+"px "+-B+"px",threshold:ze(0,En(1,p))||1};let se=!0;function te(D){const P=D[0].intersectionRatio;if(!zi(m,e.getBoundingClientRect()))return c();if(P!==p){if(!se)return c();P?c(!1,P):r=setTimeout(()=>{c(!1,1e-7)},1e3)}se=!1}try{i=new IntersectionObserver(te,{...H,root:o.ownerDocument})}catch{i=new IntersectionObserver(te,H)}i.observe(e)}const u=ee(e),h=()=>c(n);return u.addEventListener("resize",h),c(!0),()=>{u.removeEventListener("resize",h),a()}}function Fo(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,h=Yn(e),f=r||o?[...h?nt(h):[],...t?nt(t):[]]:[];f.forEach($=>{r&&$.addEventListener("scroll",n),o&&$.addEventListener("resize",n)});const p=h&&c?Ho(h,n,o):null;let m=-1,y=null;a&&(y=new ResizeObserver($=>{let[E]=$;E&&E.target===h&&y&&t&&(y.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var j;(j=y)==null||j.observe(t)})),n()}),h&&!u&&y.observe(h),t&&y.observe(t));let w,_=u?Ie(e):null;u&&L();function L(){const $=Ie(e);_&&!zi(_,$)&&n(),_=$,w=requestAnimationFrame(L)}return n(),()=>{var $;f.forEach(E=>{r&&E.removeEventListener("scroll",n),o&&E.removeEventListener("resize",n)}),p?.(),($=y)==null||$.disconnect(),y=null,u&&cancelAnimationFrame(w)}}const qo=(e,t,n)=>{const i=new Map,r=n??{},o={...No,...r.platform,_c:i};return wo(e,t,{...r,platform:o})};function zo(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Fo(t,n,()=>{n.matches(":popover-open")&&qo(t,n,{strategy:"fixed"}).then(({x:r,y:o})=>{Object.assign(n.style,{left:`${r}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Ko(e,t){t.inlineMode&&e.stopPropagation()}function Uo(e){e.inlineMode&&(e.showDropdown=!0)}function Wo(e,t){e.target instanceof HTMLInputElement&&(t.showDropdown=!0,Di(e,t),t.inlineSearchText=e.target.value.trim())}function Vo(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Go(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Wn(t),t.showDropdown=!1)}function Yo(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Wn(t),t.showDropdown=!1)}function jn(e,t={}){const n=In(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return Xo(n,t);case"MultiPolygon":return Zo(n,t);default:throw new Error("invalid poly")}}function Xo(e,t={}){const i=In(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{};return Ki(i,r)}function Zo(e,t={}){const i=In(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return i.forEach(a=>{o.push(Ki(a,r))}),fs(o)}function Ki(e,t){return e.length>1?ds(e,t):ps(e[0],t)}function Qo(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let i=!0;return li(e,r=>{li(t,o=>{if(i===!1)return!1;i=Jo(r.geometry,o.geometry,n)})}),i}function Jo(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!ia(e.coordinates,t.coordinates);case"LineString":return!Dt(t,e);case"Polygon":return!Je(e,t)}break;case"LineString":switch(t.type){case"Point":return!Dt(e,t);case"LineString":return!ea(e,t,n);case"Polygon":return!wi(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!Je(t,e);case"LineString":return!wi(e,t,n);case"Polygon":return!ta(t,e,n)}}return!1}function Dt(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(na(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function ea(e,t,n){if(Nn(e,t,{ignoreSelfIntersections:n}).features.length>0)return!0;for(const r of e.coordinates)if(Dt(t,{coordinates:r}))return!0;for(const r of t.coordinates)if(Dt(e,{coordinates:r}))return!0;return!1}function wi(e,t,n){for(const r of t.coordinates)if(Je(r,e))return!0;return Nn(t,jn(e),{ignoreSelfIntersections:n}).features.length>0}function ta(e,t,n){for(const r of e.coordinates[0])if(Je(r,t))return!0;for(const r of t.coordinates[0])if(Je(r,e))return!0;return Nn(jn(e),jn(t),{ignoreSelfIntersections:n}).features.length>0}function na(e,t,n){const i=n[0]-e[0],r=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return i*a-r*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function ia(e,t){return e[0]===t[0]&&e[1]===t[1]}function ra(e,t,{ignoreSelfIntersections:n=!0}={}){return!Qo(e,t,{ignoreSelfIntersections:n})}var sa=ra;function oa(e,t){return hs(t,e)}var aa=oa;const la=(e,t)=>t?sa(e,t):!0,ca=(e,t)=>t?aa(e,t):!0;function ua(e,t="highlight",n="title"){const i=(r,o=[])=>{let a="",c=0,u=0;return o.forEach((h,f)=>{const p=h[1]+1;f&&u>h[0]||(u=h[1],a+=[r.substring(c,h[0]),`<mark class="${t}">`,r.substring(h[0],p),"</mark>"].join(""),c=p)}),a+=r.substring(c),a};return e.filter(({matches:r})=>r&&r.length).map(({item:r,matches:o})=>{const a={...r};return o.forEach(c=>{if(c.key!==n)return;const u=i(jt(c.value),ma(c.indices));a.highlightedText=u}),a})}let Ui;const ha=(e,t)=>{Ui=new Un(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},fa=async(e,t,n)=>{const i=Object.entries(t).filter(([,c])=>c.type==="text"||c.type==="select"||c.type==="multiselect").reduce((c,[u,h])=>{const p=[],m=(y,w)=>{const _={};h.type==="text"?_[y]=`${w}`:_[u]=`="${y}"`,p.push(_)};return Object.entries(h.state).filter(([,y])=>y).forEach(([y,w])=>m(y,w)),p.length>0&&c.push({$or:p}),c},[]);let r;if(!(i.length>0)&&n.matchAllWhenEmpty!==!1)r=e;else{const c={$and:[...i]},u=Ui.search(c);r=n.enableHighlighting?ua(u,"highlight",n.titleProperty):u.map(h=>h.item)}const o=Object.entries(t).filter(([,c])=>c.type==="range").reduce((c,[u,h])=>{const f=p=>h.format==="date"?k(p).valueOf():parseFloat(p);return c[u]={min:f(h.state.min),max:f(h.state.max),format:h.format},c},{});if(Object.keys(o).length>0){const c=[];for(let u=0;u<r.length;u++){const h={};for(const[f,p]of Object.entries(o)){const m=w=>p.format==="date"?k(w).valueOf():parseFloat(w),y=V(f,r[u]);y?Array.isArray(y)?h[f]=o[f].min<=m(y[1])&&m(y[0])<=o[f].max:m(y)>=o[f].min&&m(y)<=o[f].max?h[f]=!0:h[f]=!1:h[f]=!0}Object.values(h).every(f=>!!f)&&c.push(r[u])}r=[...c]}const a=Object.entries(t).filter(([,c])=>c.type==="spatial").reduce((c,[u,h])=>(c[u]={geometry:h.state.geometry,mode:h.state.mode},c),{});if(Object.values(a).map(c=>c.geometry).filter(c=>!!c).length>0){const c=[];for(let u=0;u<r.length;u++){const h={};for(const f of Object.keys(a)){const p=V(f,r[u]),m=a[f].mode||"within";p&&(m==="within"?ca(p,a[f].geometry):la(p,a[f].geometry))?h[f]=!0:h[f]=!1}Object.values(h).every(f=>!!f)&&c.push(r[u])}r=[...c]}return r};function da(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function zt(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function xi(e,t){return e*2+t}function pa(e){return Object.keys(e).map(t=>({title:C`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function On(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function ga(e,t,n){const i=n.externalFilter(e,t),r=typeof i=="string"||i instanceof String?i:i.url,o=typeof i=="object"&&"fetchFn"in i?await i.fetchFn(r):await fetch(r).then(async a=>await a.json());return i.key?V(i.key,o):o}function Wi(e,t,n){let i;if(e.detail?i=e.detail.target:i=e.target,i?.classList.contains("details-filter")){if(!i.open||t?.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const o=r.shadowRoot.querySelector(".details-filter");o&&o!==i&&o.removeAttribute("open")})}else{if(!i?.open||t?.expandMultipleResults)return;n.querySelectorAll("details").forEach(r=>{r!==i&&r.removeAttribute("open")})}}function V(e,t){return typeof e=="function"?e(t):e?.includes(".")?e.split(".").reduce((n,i)=>n&&n[i],t):t[e]}function jt(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function ma(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([r,o])=>r<=o?[r,o]:[o,r]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),i=[];for(const[r,o]of n){if(i.length===0){i.push([r,o]);continue}const a=i[i.length-1];(t?r<=a[1]+1:r<=a[1])?o>a[1]&&(a[1]=o):i.push([r,o])}return i}function Ot(e){return e.format==="date"}class ya extends fe{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object},inlineSearchText:{state:!0,type:String}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this.inlineSearchText="",this._handleClickOutside=this.#r.bind(this),this._handleKeyDown=this.#i.bind(this)}set showDropdown(t){this.renderRoot.querySelector("[popover]").togglePopover(t)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#e(){setTimeout(()=>this._overlayCleanup=zo(this))}#t(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#e()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#t()}#n(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#n(),super.disconnectedCallback()}_overlayCleanup(){}#r(t){Yo(t,this)}#i(t){Go(t,this)}#s(t){Vo(t,this)}#a(){Uo(this)}#o(t){Ko(t,this)}#l(t){lo(t,this)}#c(t){Wo(t,this)}#u(t){ao(t,this)}#h(){ji(this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(t){t.has("inlineMode")&&(this.inlineMode?this.#t():this.#n())}render(){return C`
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
                      .items=${pa(this.filters)}
                      .controller=${{remove:t=>this.#l(t)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${q(On(this.filters),()=>C`
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
                  class="input-container field no-margin ${On(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${this.#s}"
                    @focus="${this.#a}"
                    @input="${this.#c}"
                    @keydown="${this.#u}"
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
                  ${q(this.inlineSearchText&&Oi(this).length,()=>C`
                      <button
                        type="button"
                        class="transparent responsive left-align no-margin"
                        data-cy="inline-search-action"
                        @click=${this.#h}
                      >
                        ${this.unstyled?ce:C`
                              <i class="small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <title>search</title>
                                  <path
                                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                                  />
                                </svg>
                              </i>
                            `}
                        <span class="truncate"
                          >Search for "${this.inlineSearchText}"</span
                        >
                      </button>
                    `)}
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:C`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",ya);function ba(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",zt(e.filterObject),e.requestUpdate()}function va(e,t){const n=t.renderRoot.querySelector("input[type='text']");n.value=[n.value,e].filter(Boolean).join(" "),t.debouncedInputHandler()}function wa(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}function xa(e){if(zt(e.filterObject),e.filterObject){const t=e.filterObject.min,n=e.filterObject.max,i=e.querySelector("eox-timecontrol");i&&i.dateChange([k(t).format(),k(n).format()],i);const r=e.querySelector("tc-range-slider");r&&(r.value1!==t&&(r.value1=t),r.value2!==n&&(r.value2=n))}e.requestUpdate()}function _i(e,t){const n=y=>Ot(t.filterObject)?k(y).valueOf():parseFloat(y),i=n(e.detail.values[0]),r=n(e.detail.values[1]),o=n(t.filterObject.state.min),a=n(t.filterObject.state.max),c=n(t.filterObject.min),u=n(t.filterObject.max);let h,f,p,m;Ot(t.filterObject)?(h=k(i).isSame(k(c),"day"),f=k(r).isSame(k(u),"day"),p=k(i).isSame(k(o),"day"),m=k(r).isSame(k(a),"day")):(h=i===c,f=r===u,p=i===o,m=r===a),!(p&&m)&&([t.filterObject.state.min,t.filterObject.state.max]=[i,r],h&&f?(delete t.filterObject.dirty,delete t.filterObject.stringifiedState):t.filterObject.dirty=!0,t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${k(i).format(Ue)} - ${k(r).format(Ue)}`:`${i} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),h&&f?t.reset():t.requestUpdate())}function _a(e,t,n){const i=n.filterObject.state[e],r=Ot(n.filterObject)?k(i).format(Ue):i;return C`<div class="range-${t}">${r}</div>`}function Aa(e){Ca(-1,e),zt(e.filterObject),e.requestUpdate()}function Ca(e,t){t.selectedItems=[],Xn(t),Gi(t)}function Vi(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((i,r)=>r!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Xn(t),Gi(t)}function Ma(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function Sa(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&Vi(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function $a(e,t){(e.has("suggestions")||e.has("query"))&&Xn(t)}function La(e,t){const n=e.filterObject?.sort||((i,r)=>i.toString().localeCompare(r.toString(),void 0,{numeric:!0}));return t.sort(n).map(i=>i)}function Xn(e){const t=(e.filterObject?.filterKeys||e.suggestions).map(i=>`${i}`);let n=t;e.query&&(n=new Un(t,{threshold:.4,ignoreLocation:!0}).search(e.query).map(r=>r.item)),e.filteredSuggestions=e.filterObject?.filterKeys?n:La(e,n),e.filterObject?.filterKeys&&(e.filterObject.state=t.reduce((i,r)=>(r in i||(i[r]=void 0),i),e.filterObject.state)),e.highlightedIndex=-1}function Gi(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function Ra(e){zt(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function Ta(e){e.renderRoot.querySelector("#eox-map").innerHTML="",Yi(e)}function ka(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function Yi(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&Ea(e.geometry),i=da(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=i;const r=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{r(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{r(o.features.getArray()[0])})},1e3)}function Ea(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}class Da extends fe{static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}#e=()=>{wa(this)};#t=t=>{t.key==="Enter"&&t.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),t.target.value="",this.#e())};reset(){ba(this)}appendText(t){va(t,this)}debouncedInputHandler=Pt(this.#e,500,{leading:!0});createRenderRoot(){return this}render(){return q(this.filterObject,()=>C`
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
      `)}}customElements.define("eox-itemfilter-text",Da);function ja(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const i=n.config.aggregateResults;return t==="No category"?e.filter(r=>{const o=r[i];return Array.isArray(o)?o.filter(Boolean).length===0:!o}):e.filter(r=>{const o=r[i];if(Array.isArray(o)){if(o.filter(Boolean).length===0)return!1}else if(!o)return!1;let a;return n.filters[i]&&(a=Object.keys(n.filters[i]).filter(u=>n.filters[i].state[u])),(a?.length?a.includes(t):!0)&&Array.isArray(o)?o.includes(t):o===t})}function Oa(e,t){return C`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||ce}
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
        ${Xi(t,e)}
      </div>
    </details>
  `}function Xi(e,t){const n=e.results,i=t?e.aggregateResults(n,t):n,r=e.config,o=a=>e.selectedResult?.[r.idProperty]===a[r.idProperty]?"highlighted":ce;return ai`
    ${e.resultType==="cards"?qe("<eox-layout fill-grid>"):qe('<ul id="results" class="list no-space" part="results">')}
      ${us(i,a=>a.id,a=>{const c=V(r.titleProperty,a)?.toString()||"",u=a.highlightedText?c:jt(c);return ai`
        ${e.resultType==="cards"?qe("<eox-layout-item"):qe("<li")}
            class="${o(a)}"
            title="${u}"
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:a}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:a}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${q(r.subTitleProperty||r.imageProperty,()=>C`
                  ${q(e.resultType==="cards",()=>V(r.imageProperty,a)?C`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${V(r.imageProperty,a)}"
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
                        ${V(r.imageProperty,a)?C`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${V(r.imageProperty,a)}"
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
                      title="${u}"
                      >${Ct(a.highlightedText||V(r.titleProperty,a).toString())}</span
                    >
                    ${q(!!V(r.subTitleProperty,a),()=>C`
                        <small class="subtitle no-line truncate"
                          >${Ct(V(r.subTitleProperty,a).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>C`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      title="${u}"
                      >${Ct(a.highlightedText||a[r.titleProperty])}</span
                    >
                  </div>
                `)}
              ${q(e.enableResultAction,()=>C`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${h=>{h.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${Ct(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `})}
    ${e.resultType==="cards"?qe("</eox-layout>"):qe("</ul>")}
  `}class Ba extends fe{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}constructor(){super(),this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}#e(t){return Xi(this,t)}#t(t){return Oa(t,this)}aggregateResults(t,n){return ja(t,n,this)}createRenderRoot(){return this}handleAccordion(t){Wi(t,this.config,this)}#n(){const t=this.resultAggregation.filter(i=>this.aggregateResults(this.results,i).length);return this.aggregateResults(this.results,"No category").length>0&&t.push("No category"),t}render(){return C`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${q(this.results.length<1,()=>C`<small class="no-results">No matching items</small>`,()=>ce)}
          ${q(this.config.aggregateResults,()=>Bt(this.#n(),t=>C`${q(this.aggregateResults(this.results,t).length===1&&this.config.autoSpreadSingle,()=>C`<div style="margin-left: -8px">
                        ${this.#e(t)}
                      </div>`,()=>this.#t(t))}`),()=>this.#e())}
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",Ba);class Pa extends fe{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(t){t.has("filterObject")&&this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n)),$a(t,this)}#e(t){Ma(t,this)}#t(t){Sa(t,this)}#n(t){Vi(t,this)}reset(){Aa(this)}debouncedInputHandler=Pt(this.#n,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(t=>this.filterObject.state[t]?t:null).filter(t=>!!t),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const t=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow scroll":ce;return C`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${q((this.filterObject.filterKeys||this.suggestions).length>=10,()=>C`<div class="autocomplete-container">
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
                <label
                  class="${t} small max"
                  title="${jt(i.toString())}"
                >
                  <input
                    type="${t}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${r=>{r.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span
                    class="title small-line"
                    title="${jt(i.toString())}"
                  >
                    <span class="title-text">${i}</span>
                  </span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}customElements.define("eox-itemfilter-select",Pa);class Ia extends fe{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.tabIndex=0,this.inlineMode=!1,this.inputHandler=this.#e.bind(this),this.debouncedInputHandler=Pt(this.inputHandler,500,{leading:!1})}#e(t){_i(t,this)}#t(t,n){return _a(t,n,this)}reset(){xa(this)}createRenderRoot(){return this}render(){return q(this.filterObject,()=>C`
        ${q(Ot(this.filterObject),()=>C`
            <eox-timecontrol
              .controlValues=${[{id:this.filterObject.key,title:this.filterObject.title||"Filter",timeControlValues:(this.filterObject.filterKeys||this.suggestions||[]).map(t=>typeof t=="object"?t:{date:t})}]}
              .initDate=${[k(this.filterObject.state.min||this.filterObject.min).format(),k(this.filterObject.state.max||this.filterObject.max).format()]}
              @select=${t=>_i(new CustomEvent("values",{detail:{values:[k(t.detail.date[0]).valueOf(),k(t.detail.date[1]).valueOf()]}}),this)}
            >
              <eox-timecontrol-date
                .format=${Ue}
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
      `)}}customElements.define("eox-itemfilter-range",Ia);class Na extends fe{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){Ra(this)}createRenderRoot(){return this}#e(t){ka(t,this)}render(){return q(this.filterObject,()=>C`
        <div
          style="margin-left: var(--_list-padding); padding-right: var(--_padding)"
        >
          <nav class="no-margin wrap">
            ${Bt(["intersects","within"],t=>C`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===t||ce}"
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
      `)}}customElements.define("eox-itemfilter-spatial",Na);class Ha extends fe{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#e()}#e(){Yi(this)}reset(){Ta(this)}render(){return C`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",Ha);function Fa(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function qa(e,t){const{code:n,target:i}=e;i instanceof HTMLElement&&i.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&za(n,e.target.value??"",t))}function za(e,t,n){const i=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&i&&i.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){i&&(i.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(i),1));const r=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];r.classList.contains("highlighted")||r.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let r=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(r=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),r=r+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&r<0&&(r=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&r>n.renderRoot.querySelectorAll(".chip").length-1&&(r=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[r].classList.add("highlighted")}}class Ka extends fe{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#e.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#e.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#e(t){qa(t,this)}#t(t){Fa(t,this)}render(){return C`
      <span class="chip-container">
        ${Bt(this.items,t=>C`
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
    `}}customElements.define("eox-itemfilter-chips",Ka);var An,Ai;function Ua(){if(Ai)return An;Ai=1;var e=200,t="__lodash_hash_undefined__",n=1/0,i="[object Function]",r="[object GeneratorFunction]",o=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,c=typeof $e=="object"&&$e&&$e.Object===Object&&$e,u=typeof self=="object"&&self&&self.Object===Object&&self,h=c||u||Function("return this")();function f(g,v){var M=g?g.length:0;return!!M&&m(g,v,0)>-1}function p(g,v,M,O){for(var U=g.length,Z=M+-1;++Z<U;)if(v(g[Z],Z,g))return Z;return-1}function m(g,v,M){if(v!==v)return p(g,y,M);for(var O=M-1,U=g.length;++O<U;)if(g[O]===v)return O;return-1}function y(g){return g!==g}function w(g,v){return g.has(v)}function _(g,v){return g?.[v]}function L(g){var v=!1;if(g!=null&&typeof g.toString!="function")try{v=!!(g+"")}catch{}return v}function $(g){var v=-1,M=Array(g.size);return g.forEach(function(O){M[++v]=O}),M}var E=Array.prototype,j=Function.prototype,B=Object.prototype,z=h["__core-js_shared__"],H=(function(){var g=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||"");return g?"Symbol(src)_1."+g:""})(),se=j.toString,te=B.hasOwnProperty,D=B.toString,P=RegExp("^"+se.call(te).replace(o,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),K=E.splice,de=Ge(h,"Map"),pe=Ge(h,"Set"),X=Ge(Object,"create");function F(g){var v=-1,M=g?g.length:0;for(this.clear();++v<M;){var O=g[v];this.set(O[0],O[1])}}function ke(){this.__data__=X?X(null):{}}function Ve(g){return this.has(g)&&delete this.__data__[g]}function Kt(g){var v=this.__data__;if(X){var M=v[g];return M===t?void 0:M}return te.call(v,g)?v[g]:void 0}function Ut(g){var v=this.__data__;return X?v[g]!==void 0:te.call(v,g)}function Wt(g,v){var M=this.__data__;return M[g]=X&&v===void 0?t:v,this}F.prototype.clear=ke,F.prototype.delete=Ve,F.prototype.get=Kt,F.prototype.has=Ut,F.prototype.set=Wt;function _e(g){var v=-1,M=g?g.length:0;for(this.clear();++v<M;){var O=g[v];this.set(O[0],O[1])}}function Vt(){this.__data__=[]}function Gt(g){var v=this.__data__,M=Ee(v,g);if(M<0)return!1;var O=v.length-1;return M==O?v.pop():K.call(v,M,1),!0}function Yt(g){var v=this.__data__,M=Ee(v,g);return M<0?void 0:v[M][1]}function Xt(g){return Ee(this.__data__,g)>-1}function Zt(g,v){var M=this.__data__,O=Ee(M,g);return O<0?M.push([g,v]):M[O][1]=v,this}_e.prototype.clear=Vt,_e.prototype.delete=Gt,_e.prototype.get=Yt,_e.prototype.has=Xt,_e.prototype.set=Zt;function T(g){var v=-1,M=g?g.length:0;for(this.clear();++v<M;){var O=g[v];this.set(O[0],O[1])}}function it(){this.__data__={hash:new F,map:new(de||_e),string:new F}}function Qt(g){return He(this,g).delete(g)}function ae(g){return He(this,g).get(g)}function rt(g){return He(this,g).has(g)}function st(g,v){return He(this,g).set(g,v),this}T.prototype.clear=it,T.prototype.delete=Qt,T.prototype.get=ae,T.prototype.has=rt,T.prototype.set=st;function Ne(g){var v=-1,M=g?g.length:0;for(this.__data__=new T;++v<M;)this.add(g[v])}function ot(g){return this.__data__.set(g,t),this}function at(g){return this.__data__.has(g)}Ne.prototype.add=Ne.prototype.push=ot,Ne.prototype.has=at;function Ee(g,v){for(var M=g.length;M--;)if(on(g[M][0],v))return M;return-1}function Jt(g){if(!lt(g)||rn(g))return!1;var v=an(g)||L(g)?P:a;return v.test(Ye(g))}function en(g,v,M){var O=-1,U=f,Z=g.length,ct=!0,oe=[],le=oe;if(Z>=e){var ut=tn(g);if(ut)return $(ut);ct=!1,U=w,le=new Ne}else le=oe;e:for(;++O<Z;){var Ae=g[O],Ce=Ae;if(Ae=Ae!==0?Ae:0,ct&&Ce===Ce){for(var ht=le.length;ht--;)if(le[ht]===Ce)continue e;oe.push(Ae)}else U(le,Ce,M)||(le!==oe&&le.push(Ce),oe.push(Ae))}return oe}var tn=pe&&1/$(new pe([,-0]))[1]==n?function(g){return new pe(g)}:ln;function He(g,v){var M=g.__data__;return nn(v)?M[typeof v=="string"?"string":"hash"]:M.map}function Ge(g,v){var M=_(g,v);return Jt(M)?M:void 0}function nn(g){var v=typeof g;return v=="string"||v=="number"||v=="symbol"||v=="boolean"?g!=="__proto__":g===null}function rn(g){return!!H&&H in g}function Ye(g){if(g!=null){try{return se.call(g)}catch{}try{return g+""}catch{}}return""}function sn(g){return g&&g.length?en(g):[]}function on(g,v){return g===v||g!==g&&v!==v}function an(g){var v=lt(g)?D.call(g):"";return v==i||v==r}function lt(g){var v=typeof g;return!!g&&(v=="object"||v=="function")}function ln(){}return An=sn,An}var Wa=Ua();const Bn=Mi(Wa);var Qe={exports:{}};Qe.exports;var Ci;function Va(){return Ci||(Ci=1,(function(e,t){var n=200,i="Expected a function",r="__lodash_hash_undefined__",o=1,a=2,c=9007199254740991,u="[object Arguments]",h="[object Array]",f="[object Boolean]",p="[object Date]",m="[object Error]",y="[object Function]",w="[object GeneratorFunction]",_="[object Map]",L="[object Number]",$="[object Object]",E="[object Promise]",j="[object RegExp]",B="[object Set]",z="[object String]",H="[object Symbol]",se="[object WeakMap]",te="[object ArrayBuffer]",D="[object DataView]",P="[object Float32Array]",K="[object Float64Array]",de="[object Int8Array]",pe="[object Int16Array]",X="[object Int32Array]",F="[object Uint8Array]",ke="[object Uint8ClampedArray]",Ve="[object Uint16Array]",Kt="[object Uint32Array]",Ut=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wt=/^\w*$/,_e=/^\./,Vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gt=/[\\^$.*+?()[\]{}|]/g,Yt=/\\(\\)?/g,Xt=/^\[object .+?Constructor\]$/,Zt=/^(?:0|[1-9]\d*)$/,T={};T[P]=T[K]=T[de]=T[pe]=T[X]=T[F]=T[ke]=T[Ve]=T[Kt]=!0,T[u]=T[h]=T[te]=T[f]=T[D]=T[p]=T[m]=T[y]=T[_]=T[L]=T[$]=T[j]=T[B]=T[z]=T[se]=!1;var it=typeof $e=="object"&&$e&&$e.Object===Object&&$e,Qt=typeof self=="object"&&self&&self.Object===Object&&self,ae=it||Qt||Function("return this")(),rt=t&&!t.nodeType&&t,st=rt&&!0&&e&&!e.nodeType&&e,Ne=st&&st.exports===rt,ot=Ne&&it.process,at=(function(){try{return ot&&ot.binding("util")}catch{}})(),Ee=at&&at.isTypedArray;function Jt(s,l){for(var d=-1,b=s?s.length:0,A=Array(b);++d<b;)A[d]=l(s[d],d,s);return A}function en(s,l){for(var d=-1,b=l.length,A=s.length;++d<b;)s[A+d]=l[d];return s}function tn(s,l){for(var d=-1,b=s?s.length:0;++d<b;)if(l(s[d],d,s))return!0;return!1}function He(s){return function(l){return l?.[s]}}function Ge(s,l){for(var d=-1,b=Array(s);++d<s;)b[d]=l(d);return b}function nn(s){return function(l){return s(l)}}function rn(s,l){return s?.[l]}function Ye(s){var l=!1;if(s!=null&&typeof s.toString!="function")try{l=!!(s+"")}catch{}return l}function sn(s){var l=-1,d=Array(s.size);return s.forEach(function(b,A){d[++l]=[A,b]}),d}function on(s,l){return function(d){return s(l(d))}}function an(s){var l=-1,d=Array(s.size);return s.forEach(function(b){d[++l]=b}),d}var lt=Array.prototype,ln=Function.prototype,g=Object.prototype,v=ae["__core-js_shared__"],M=(function(){var s=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""})(),O=ln.toString,U=g.hasOwnProperty,Z=g.toString,ct=RegExp("^"+O.call(U).replace(Gt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),oe=ae.Symbol,le=ae.Uint8Array,ut=g.propertyIsEnumerable,Ae=lt.splice,Ce=oe?oe.isConcatSpreadable:void 0,ht=on(Object.keys,Object),cn=Fe(ae,"DataView"),Xe=Fe(ae,"Map"),un=Fe(ae,"Promise"),hn=Fe(ae,"Set"),fn=Fe(ae,"WeakMap"),Ze=Fe(Object,"create"),Zi=je(cn),Qi=je(Xe),Ji=je(un),er=je(hn),tr=je(fn),ft=oe?oe.prototype:void 0,dn=ft?ft.valueOf:void 0,Zn=ft?ft.toString:void 0;function De(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var b=s[l];this.set(b[0],b[1])}}function nr(){this.__data__=Ze?Ze(null):{}}function ir(s){return this.has(s)&&delete this.__data__[s]}function rr(s){var l=this.__data__;if(Ze){var d=l[s];return d===r?void 0:d}return U.call(l,s)?l[s]:void 0}function sr(s){var l=this.__data__;return Ze?l[s]!==void 0:U.call(l,s)}function or(s,l){var d=this.__data__;return d[s]=Ze&&l===void 0?r:l,this}De.prototype.clear=nr,De.prototype.delete=ir,De.prototype.get=rr,De.prototype.has=sr,De.prototype.set=or;function ge(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var b=s[l];this.set(b[0],b[1])}}function ar(){this.__data__=[]}function lr(s){var l=this.__data__,d=pt(l,s);if(d<0)return!1;var b=l.length-1;return d==b?l.pop():Ae.call(l,d,1),!0}function cr(s){var l=this.__data__,d=pt(l,s);return d<0?void 0:l[d][1]}function ur(s){return pt(this.__data__,s)>-1}function hr(s,l){var d=this.__data__,b=pt(d,s);return b<0?d.push([s,l]):d[b][1]=l,this}ge.prototype.clear=ar,ge.prototype.delete=lr,ge.prototype.get=cr,ge.prototype.has=ur,ge.prototype.set=hr;function me(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var b=s[l];this.set(b[0],b[1])}}function fr(){this.__data__={hash:new De,map:new(Xe||ge),string:new De}}function dr(s){return gt(this,s).delete(s)}function pr(s){return gt(this,s).get(s)}function gr(s){return gt(this,s).has(s)}function mr(s,l){return gt(this,s).set(s,l),this}me.prototype.clear=fr,me.prototype.delete=dr,me.prototype.get=pr,me.prototype.has=gr,me.prototype.set=mr;function dt(s){var l=-1,d=s?s.length:0;for(this.__data__=new me;++l<d;)this.add(s[l])}function yr(s){return this.__data__.set(s,r),this}function br(s){return this.__data__.has(s)}dt.prototype.add=dt.prototype.push=yr,dt.prototype.has=br;function ye(s){this.__data__=new ge(s)}function vr(){this.__data__=new ge}function wr(s){return this.__data__.delete(s)}function xr(s){return this.__data__.get(s)}function _r(s){return this.__data__.has(s)}function Ar(s,l){var d=this.__data__;if(d instanceof ge){var b=d.__data__;if(!Xe||b.length<n-1)return b.push([s,l]),this;d=this.__data__=new me(b)}return d.set(s,l),this}ye.prototype.clear=vr,ye.prototype.delete=wr,ye.prototype.get=xr,ye.prototype.has=_r,ye.prototype.set=Ar;function Cr(s,l){var d=be(s)||mn(s)?Ge(s.length,String):[],b=d.length,A=!!b;for(var x in s)U.call(s,x)&&!(A&&(x=="length"||ti(x,b)))&&d.push(x);return d}function pt(s,l){for(var d=s.length;d--;)if(ri(s[d][0],l))return d;return-1}var Mr=qr(Lr);function Sr(s,l,d,b,A){var x=-1,R=s.length;for(d||(d=Gr),A||(A=[]);++x<R;){var I=s[x];d(I)?en(A,I):A[A.length]=I}return A}var $r=zr();function Lr(s,l){return s&&$r(s,l,xt)}function Qn(s,l){l=mt(l,s)?[l]:Jn(l);for(var d=0,b=l.length;s!=null&&d<b;)s=s[yt(l[d++])];return d&&d==b?s:void 0}function Rr(s){return Z.call(s)}function Tr(s,l){return s!=null&&l in Object(s)}function pn(s,l,d,b,A){return s===l?!0:s==null||l==null||!vt(s)&&!wt(l)?s!==s&&l!==l:kr(s,l,pn,d,b,A)}function kr(s,l,d,b,A,x){var R=be(s),I=be(l),N=h,W=h;R||(N=Me(s),N=N==u?$:N),I||(W=Me(l),W=W==u?$:W);var Q=N==$&&!Ye(s),J=W==$&&!Ye(l),Y=N==W;if(Y&&!Q)return x||(x=new ye),R||ns(s)?ei(s,l,d,b,A,x):Kr(s,l,N,d,b,A,x);if(!(A&a)){var ie=Q&&U.call(s,"__wrapped__"),re=J&&U.call(l,"__wrapped__");if(ie||re){var Se=ie?s.value():s,ve=re?l.value():l;return x||(x=new ye),d(Se,ve,b,A,x)}}return Y?(x||(x=new ye),Ur(s,l,d,b,A,x)):!1}function Er(s,l,d,b){var A=d.length,x=A;if(s==null)return!x;for(s=Object(s);A--;){var R=d[A];if(R[2]?R[1]!==s[R[0]]:!(R[0]in s))return!1}for(;++A<x;){R=d[A];var I=R[0],N=s[I],W=R[1];if(R[2]){if(N===void 0&&!(I in s))return!1}else{var Q=new ye,J;if(!(J===void 0?pn(W,N,b,o|a,Q):J))return!1}}return!0}function Dr(s){if(!vt(s)||Xr(s))return!1;var l=si(s)||Ye(s)?ct:Xt;return l.test(je(s))}function jr(s){return wt(s)&&yn(s.length)&&!!T[Z.call(s)]}function Or(s){return typeof s=="function"?s:s==null?os:typeof s=="object"?be(s)?Nr(s[0],s[1]):Ir(s):as(s)}function Br(s){if(!Zr(s))return ht(s);var l=[];for(var d in Object(s))U.call(s,d)&&d!="constructor"&&l.push(d);return l}function Pr(s,l){var d=-1,b=bt(s)?Array(s.length):[];return Mr(s,function(A,x,R){b[++d]=l(A,x,R)}),b}function Ir(s){var l=Wr(s);return l.length==1&&l[0][2]?ii(l[0][0],l[0][1]):function(d){return d===s||Er(d,s,l)}}function Nr(s,l){return mt(s)&&ni(l)?ii(yt(s),l):function(d){var b=rs(d,s);return b===void 0&&b===l?ss(d,s):pn(l,b,void 0,o|a)}}function Hr(s){return function(l){return Qn(l,s)}}function Fr(s){if(typeof s=="string")return s;if(bn(s))return Zn?Zn.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Jn(s){return be(s)?s:Qr(s)}function qr(s,l){return function(d,b){if(d==null)return d;if(!bt(d))return s(d,b);for(var A=d.length,x=-1,R=Object(d);++x<A&&b(R[x],x,R)!==!1;);return d}}function zr(s){return function(l,d,b){for(var A=-1,x=Object(l),R=b(l),I=R.length;I--;){var N=R[++A];if(d(x[N],N,x)===!1)break}return l}}function ei(s,l,d,b,A,x){var R=A&a,I=s.length,N=l.length;if(I!=N&&!(R&&N>I))return!1;var W=x.get(s);if(W&&x.get(l))return W==l;var Q=-1,J=!0,Y=A&o?new dt:void 0;for(x.set(s,l),x.set(l,s);++Q<I;){var ie=s[Q],re=l[Q];if(b)var Se=R?b(re,ie,Q,l,s,x):b(ie,re,Q,s,l,x);if(Se!==void 0){if(Se)continue;J=!1;break}if(Y){if(!tn(l,function(ve,Oe){if(!Y.has(Oe)&&(ie===ve||d(ie,ve,b,A,x)))return Y.add(Oe)})){J=!1;break}}else if(!(ie===re||d(ie,re,b,A,x))){J=!1;break}}return x.delete(s),x.delete(l),J}function Kr(s,l,d,b,A,x,R){switch(d){case D:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case te:return!(s.byteLength!=l.byteLength||!b(new le(s),new le(l)));case f:case p:case L:return ri(+s,+l);case m:return s.name==l.name&&s.message==l.message;case j:case z:return s==l+"";case _:var I=sn;case B:var N=x&a;if(I||(I=an),s.size!=l.size&&!N)return!1;var W=R.get(s);if(W)return W==l;x|=o,R.set(s,l);var Q=ei(I(s),I(l),b,A,x,R);return R.delete(s),Q;case H:if(dn)return dn.call(s)==dn.call(l)}return!1}function Ur(s,l,d,b,A,x){var R=A&a,I=xt(s),N=I.length,W=xt(l),Q=W.length;if(N!=Q&&!R)return!1;for(var J=N;J--;){var Y=I[J];if(!(R?Y in l:U.call(l,Y)))return!1}var ie=x.get(s);if(ie&&x.get(l))return ie==l;var re=!0;x.set(s,l),x.set(l,s);for(var Se=R;++J<N;){Y=I[J];var ve=s[Y],Oe=l[Y];if(b)var oi=R?b(Oe,ve,Y,l,s,x):b(ve,Oe,Y,s,l,x);if(!(oi===void 0?ve===Oe||d(ve,Oe,b,A,x):oi)){re=!1;break}Se||(Se=Y=="constructor")}if(re&&!Se){var _t=s.constructor,At=l.constructor;_t!=At&&"constructor"in s&&"constructor"in l&&!(typeof _t=="function"&&_t instanceof _t&&typeof At=="function"&&At instanceof At)&&(re=!1)}return x.delete(s),x.delete(l),re}function gt(s,l){var d=s.__data__;return Yr(l)?d[typeof l=="string"?"string":"hash"]:d.map}function Wr(s){for(var l=xt(s),d=l.length;d--;){var b=l[d],A=s[b];l[d]=[b,A,ni(A)]}return l}function Fe(s,l){var d=rn(s,l);return Dr(d)?d:void 0}var Me=Rr;(cn&&Me(new cn(new ArrayBuffer(1)))!=D||Xe&&Me(new Xe)!=_||un&&Me(un.resolve())!=E||hn&&Me(new hn)!=B||fn&&Me(new fn)!=se)&&(Me=function(s){var l=Z.call(s),d=l==$?s.constructor:void 0,b=d?je(d):void 0;if(b)switch(b){case Zi:return D;case Qi:return _;case Ji:return E;case er:return B;case tr:return se}return l});function Vr(s,l,d){l=mt(l,s)?[l]:Jn(l);for(var b,A=-1,R=l.length;++A<R;){var x=yt(l[A]);if(!(b=s!=null&&d(s,x)))break;s=s[x]}if(b)return b;var R=s?s.length:0;return!!R&&yn(R)&&ti(x,R)&&(be(s)||mn(s))}function Gr(s){return be(s)||mn(s)||!!(Ce&&s&&s[Ce])}function ti(s,l){return l=l??c,!!l&&(typeof s=="number"||Zt.test(s))&&s>-1&&s%1==0&&s<l}function mt(s,l){if(be(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||bn(s)?!0:Wt.test(s)||!Ut.test(s)||l!=null&&s in Object(l)}function Yr(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function Xr(s){return!!M&&M in s}function Zr(s){var l=s&&s.constructor,d=typeof l=="function"&&l.prototype||g;return s===d}function ni(s){return s===s&&!vt(s)}function ii(s,l){return function(d){return d==null?!1:d[s]===l&&(l!==void 0||s in Object(d))}}var Qr=gn(function(s){s=is(s);var l=[];return _e.test(s)&&l.push(""),s.replace(Vt,function(d,b,A,x){l.push(A?x.replace(Yt,"$1"):b||d)}),l});function yt(s){if(typeof s=="string"||bn(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function je(s){if(s!=null){try{return O.call(s)}catch{}try{return s+""}catch{}}return""}function Jr(s,l){return Sr(es(s,l))}function es(s,l){var d=be(s)?Jt:Pr;return d(s,Or(l))}function gn(s,l){if(typeof s!="function"||l&&typeof l!="function")throw new TypeError(i);var d=function(){var b=arguments,A=l?l.apply(this,b):b[0],x=d.cache;if(x.has(A))return x.get(A);var R=s.apply(this,b);return d.cache=x.set(A,R),R};return d.cache=new(gn.Cache||me),d}gn.Cache=me;function ri(s,l){return s===l||s!==s&&l!==l}function mn(s){return ts(s)&&U.call(s,"callee")&&(!ut.call(s,"callee")||Z.call(s)==u)}var be=Array.isArray;function bt(s){return s!=null&&yn(s.length)&&!si(s)}function ts(s){return wt(s)&&bt(s)}function si(s){var l=vt(s)?Z.call(s):"";return l==y||l==w}function yn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=c}function vt(s){var l=typeof s;return!!s&&(l=="object"||l=="function")}function wt(s){return!!s&&typeof s=="object"}function bn(s){return typeof s=="symbol"||wt(s)&&Z.call(s)==H}var ns=Ee?nn(Ee):jr;function is(s){return s==null?"":Fr(s)}function rs(s,l,d){var b=s==null?void 0:Qn(s,l);return b===void 0?d:b}function ss(s,l){return s!=null&&Vr(s,l,Tr)}function xt(s){return bt(s)?Cr(s):Br(s)}function os(s){return s}function as(s){return mt(s)?He(yt(s)):Hr(s)}e.exports=Jr})(Qe,Qe.exports)),Qe.exports}var Ga=Va();const Pn=Mi(Ga);function Ya(e,t,n){let i=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},c=p=>o.format==="date"?k(p).valueOf():parseFloat(p);t.forEach(p=>{if(o.type==="range"){const m=V(o.key,p);if(Array.isArray(m)){const y=[c(m[0]),c(m[1])];a.min=a.min!==void 0?Math.min(a.min,y[0]):y[0],a.max=a.max!==void 0?Math.max(a.max,y[1]):y[1]}else{const y=c(m);a.min=a.min!==void 0?Math.min(a.min,y):y,a.max=a.max!==void 0?Math.max(a.max,y):y}return}o.type!=="text"&&(Array.isArray(p[o.key])?p[o.key].forEach(m=>{a[m]=void 0}):o.type==="spatial"?(a.geometry=o?.state?.geometry||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):o.key?.includes(".")?Bn(Pn(n.items,o.key)).filter(m=>m).forEach(m=>{a[m]=void 0}):a[p[o.key]]=void 0)});const u=o.key||o.keys.join("|"),h=n.filters[u];let f;if(o.state)if(o.type==="range"){const p=L=>o.format==="date"?k(L).valueOf():parseFloat(L),m=p(o.state.min),y=p(o.state.max),w=p(o.min??a.min),_=p(o.max??a.max);o.format==="date"?f=!k(m).isSame(k(w),"day")||!k(y).isSame(k(_),"day")||void 0:f=m!==w||y!==_||void 0}else f=Object.values(o.state).some(p=>p)||void 0;if(n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:f||h?.dirty,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),o.type==="range"&&n.filters[u].dirty){const p=w=>o.format==="date"?k(w).valueOf():parseFloat(w),m=p(o.state?.min!==void 0?o.state.min:h?.state?.min),y=p(o.state?.max!==void 0?o.state.max:h?.state?.max);n.filters[u].stringifiedState=o.format==="date"?`${k(m).format(Ue)} - ${k(y).format(Ue)}`:`${m} - ${y}`}if(n.filters[u].state=Object.assign({},a,h?.state||{},o.state),o.type==="text"&&(n.filters[u].stringifiedState=Object.values(n.filters[u].state).find(Boolean)),o.type==="range"&&o.state){const p=m=>o.format==="date"?k(m).valueOf():parseFloat(m);o.state.min!==void 0&&(n.filters[u].state.min=p(o.state.min)),o.state.max!==void 0&&(n.filters[u].state.max=p(o.state.max))}}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(i=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).filter(o=>o).sort((o,a)=>o.localeCompare(a)));const r=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{r.includes(a)||r.push(a)}):(o.type==="select"||o.type==="multiselect")&&(r.includes(o.key)||r.push(o.key))}),ha(t,Object.assign({keys:r},e.fuseConfig)),i}async function Xa(e,t,n){let i;n.externalFilter?i=await ga(t,n.filters,e):i=await fa(t,n.filters,e),n.results=n.sortResults(i,{isExternalResult:!!n.externalFilter})}function Za(e,t,n){const i=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return C`<eox-itemfilter-text
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
          .suggestions="${Bn(Pn(n.items,e.key)).filter(r=>r)}"
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
          .suggestions="${Bn(Pn(n.items,e.key)).filter(r=>r)}"
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
      `;default:return C``}}function Qa(e,t,n={}){const{resultSorting:i}=t;if(i===!1)return e;if(i===void 0)return n.isExternalResult||t.fuseConfig?.shouldSort?e:[...e].sort((a,c)=>{const u=V(t.titleProperty,a)||"",h=V(t.titleProperty,c)||"";return u.toString().localeCompare(h.toString())});if(typeof i=="function")return[...e].sort(i);const r=typeof i=="string"?i:i.key,o=typeof i=="object"&&i.order==="desc"?-1:1;return r?[...e].sort((a,c)=>{const u=V(r,a)||"",h=V(r,c)||"";return u.toString().localeCompare(h.toString())*o}):e}function Ja(e,t,n){return C`
    ${q(e.dirty,()=>C`
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
  `}function el(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}class tl extends fe{static get properties(){return{items:{type:Array},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{type:Array},fuseConfig:{type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{type:Boolean},resultActionIcon:{type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}#e=[];#t=[];#n=so;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Pt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}apply(){this.#n=wn.reduce((t,n)=>(t[n]=this[n],t),{}),this.#e=Ya(this.#n,this.#t,this),this.search()}async searchHandler(){await Xa(this.#n,this.#t,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(t,n){return Qa(t,this.#n,n)}#r(t,n){return Za(t,n,this)}#i(t,n){return Ja(t,n,this)}resetFilters(){el(this)}firstUpdated(t){let n={};wn.map(i=>{n={...n,[i]:this[i]}}),this.#n=n,this.#t=this.items?.map((i,r)=>Object.assign({id:i[this.idProperty]||`item-${r}`},i))||[],this.apply()}updated(t){let n=!1,i=!1;wn.forEach(r=>{t.has(r)&&(this.#n[r]=this[r],["items","filterProperties","idProperty","aggregateResults","fuseConfig","matchAllWhenEmpty","externalFilter"].includes(r)?n=!0:r==="resultSorting"&&(i=!0))}),n?(this.#t=this.items?.map((r,o)=>Object.assign({id:r[this.idProperty]||`item-${o}`},r))||[],this.apply()):i&&this.search()}updateResult(t){this.selectedResult=t.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(t){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:t.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(t){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:t.detail,bubbles:!0,composed:!0}))}emitResultAction(t){this.dispatchEvent(new CustomEvent("click:result-action",{detail:t.detail,bubbles:!0,composed:!0}))}render(){return C`
      <style>
        ${gs}
        ${!this.unstyled&&Hn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":ce}
        @submit="${t=>t.preventDefault()}"
      >
        ${q(this.filterProperties,()=>C`
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
                  ${q(!this.inlineMode,()=>C`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${q(!this.inlineMode&&this.#n.filterProperties&&!this.inlineMode&&this.#n.filterProperties&&On(this.filters),()=>C`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?ce:C`
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
                      ${Bt(Object.values(this.filters),(t,n)=>C` <li
                            class="no-padding"
                            style=${this.inlineMode&&t.inlineSearch&&t.type==="text"?"display: none":ce}
                          >
                            <eox-itemfilter-expandcontainer
                              .filterObject=${t}
                              @details-toggled=${i=>Wi(i,this.#n,this)}
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
        ${q(this.#n?.showResults&&this.results,()=>C`
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
    `}}customElements.define("eox-itemfilter",tl);export{tl as EOxItemFilter};
