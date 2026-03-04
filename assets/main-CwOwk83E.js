import{a as to,i as pt,E as $t,x as E}from"./addCommonStyleSheet-Yq-7s86-.js";import{o as Qe}from"./map-Bv-shLAs.js";import{n as q}from"./when-CI7b_ccM.js";import{e as eo}from"./style-DKU08UVs.js";import{d as pe}from"./dayjs.min-Cg8cDliW.js";import{_ as tn}from"./index-LlpXF5n7.js";import{s as Vt,u as _r}from"./static-CRB4TPUT.js";import{c as no}from"./repeat-CWCsuY6g.js";import{o as Ne}from"./unsafe-html-9XwyaUtW.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import{o as ro}from"./orient2d-DArCjZZA.js";import{q as Lt,v as ri}from"./templates-BBKD2u9z.js";import"./directive-CwRn8Fwj.js";import"./directive-helpers-BBe88Per.js";const io=`
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
`;to();const ar=`
${eo}
.field {
  margin-block-end: 0;
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
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --padding-vertical: 0.25rem;
  --list-padding: 2rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
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
  padding: 0 var(--padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--text-transform);
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
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--list-padding) !important;
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
  padding-left: var(--padding);
  padding-right: var(--padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
}
eox-layout {
  padding: var(--padding-vertical) var(--padding);
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
  background-color: var(--background-color);
}
nav.title-nav {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 32px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
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
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--background-color);
}
`;class so extends pt{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#t(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return E`
      <style>
        ${!this.unstyled&&ar}
      </style>

      ${q(this.filterObject.featured,()=>E`<slot name="filter"></slot>`,()=>E`<details
            @toggle="${this.#t}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||$t}
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
    `}}customElements.define("eox-itemfilter-expandcontainer",so);function xt(e){return Array.isArray?Array.isArray(e):oi(e)==="[object Array]"}function oo(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function ao(e){return e==null?"":oo(e)}function ut(e){return typeof e=="string"}function ii(e){return typeof e=="number"}function lo(e){return e===!0||e===!1||co(e)&&oi(e)=="[object Boolean]"}function si(e){return typeof e=="object"}function co(e){return si(e)&&e!==null}function Q(e){return e!=null}function Nn(e){return!e.trim().length}function oi(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const uo="Incorrect 'index' type",fo=e=>`Invalid value for key ${e}`,ho=e=>`Pattern length exceeds max of ${e}.`,po=e=>`Missing ${e} property in key`,go=e=>`Property 'weight' in key '${e}' must be a positive integer`,Cr=Object.prototype.hasOwnProperty;class yo{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=ai(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ai(e){let t=null,n=null,r=null,i=1,s=null;if(ut(e)||xt(e))r=e,t=Er(e),n=Gn(e);else{if(!Cr.call(e,"name"))throw new Error(po("name"));const o=e.name;if(r=o,Cr.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(go(o));t=Er(o),n=Gn(o),s=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:s}}function Er(e){return xt(e)?e:e.split(".")}function Gn(e){return xt(e)?e.join("."):e}function mo(e,t){let n=[],r=!1;const i=(s,o,l)=>{if(Q(s))if(!o[l])n.push(s);else{let c=o[l];const u=s[c];if(!Q(u))return;if(l===o.length-1&&(ut(u)||ii(u)||lo(u)))n.push(ao(u));else if(xt(u)){r=!0;for(let h=0,d=u.length;h<d;h+=1)i(u[h],o,l+1)}else o.length&&i(u,o,l+1)}};return i(e,ut(t)?t.split("."):t,0),r?n:n[0]}const bo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},vo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},wo={location:0,threshold:.6,distance:100},xo={useExtendedSearch:!1,getFn:mo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var L={...vo,...bo,...wo,...xo};const Mo=/[^ ]+/g;function Ao(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const s=i.match(Mo).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*e),l=parseFloat(Math.round(o*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class lr{constructor({getFn:t=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){this.norm=Ao(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ut(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();ut(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!Q(t)||Nn(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let o=i.getFn?i.getFn(t):this.getFn(t,i.path);if(Q(o)){if(xt(o)){let l=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:u,value:h}=c.pop();if(Q(h))if(ut(h)&&!Nn(h)){let d={v:h,i:u,n:this.norm.get(h)};l.push(d)}else xt(h)&&h.forEach((d,m)=>{c.push({nestedArrIndex:m,value:d})})}r.$[s]=l}else if(ut(o)&&!Nn(o)){let l={v:o,n:this.norm.get(o)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function li(e,t,{getFn:n=L.getFn,fieldNormWeight:r=L.fieldNormWeight}={}){const i=new lr({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(ai)),i.setSources(t),i.create(),i}function _o(e,{getFn:t=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){const{keys:r,records:i}=e,s=new lr({getFn:t,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function je(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=L.distance,ignoreLocation:s=L.ignoreLocation}={}){const o=t/e.length;if(s)return o;const l=Math.abs(r-n);return i?o+l/i:l?1:o}function Co(e=[],t=L.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let o=e.length;s<o;s+=1){let l=e[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[s-1]&&s-r>=t&&n.push([r,s-1]),n}const Ft=32;function Eo(e,t,n,{location:r=L.location,distance:i=L.distance,threshold:s=L.threshold,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,includeMatches:c=L.includeMatches,ignoreLocation:u=L.ignoreLocation}={}){if(t.length>Ft)throw new Error(ho(Ft));const h=t.length,d=e.length,m=Math.max(0,Math.min(r,d));let g=s,b=m;const x=l>1||c,S=x?Array(d):[];let _;for(;(_=e.indexOf(t,b))>-1;){let k=je(t,{currentLocation:_,expectedLocation:m,distance:i,ignoreLocation:u});if(g=Math.min(k,g),b=_+h,x){let X=0;for(;X<h;)S[_+X]=1,X+=1}}b=-1;let P=[],R=1,B=h+d;const T=1<<h-1;for(let k=0;k<h;k+=1){let X=0,W=B;for(;X<W;)je(t,{errors:k,currentLocation:m+W,expectedLocation:m,distance:i,ignoreLocation:u})<=g?X=W:B=W,W=Math.floor((B-X)/2+X);B=W;let Xt=Math.max(1,m-W+1),Dt=o?d:Math.min(m+W,d)+h,at=Array(Dt+2);at[Dt+1]=(1<<k)-1;for(let F=Dt;F>=Xt;F-=1){let U=F-1,zt=n[e.charAt(U)];if(x&&(S[U]=+!!zt),at[F]=(at[F+1]<<1|1)&zt,k&&(at[F]|=(P[F+1]|P[F])<<1|1|P[F+1]),at[F]&T&&(R=je(t,{errors:k,currentLocation:U,expectedLocation:m,distance:i,ignoreLocation:u}),R<=g)){if(g=R,b=U,b<=m)break;Xt=Math.max(1,2*m-b)}}if(je(t,{errors:k+1,currentLocation:m,expectedLocation:m,distance:i,ignoreLocation:u})>g)break;P=at}const j={isMatch:b>=0,score:Math.max(.001,R)};if(x){const k=Co(S,l);k.length?c&&(j.indices=k):j.isMatch=!1}return j}function So(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}const Ge=String.prototype.normalize?(e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(e=>e);class ci{constructor(t,{location:n=L.location,threshold:r=L.threshold,distance:i=L.distance,includeMatches:s=L.includeMatches,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:c=L.isCaseSensitive,ignoreDiacritics:u=L.ignoreDiacritics,ignoreLocation:h=L.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h},t=c?t:t.toLowerCase(),t=u?Ge(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const d=(g,b)=>{this.chunks.push({pattern:g,alphabet:So(g),startIndex:b})},m=this.pattern.length;if(m>Ft){let g=0;const b=m%Ft,x=m-b;for(;g<x;)d(this.pattern.substr(g,Ft),g),g+=Ft;if(b){const S=m-Ft;d(this.pattern.substr(S),S)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(t=n?t:t.toLowerCase(),t=r?Ge(t):t,this.pattern===t){let x={isMatch:!0,score:0};return i&&(x.indices=[[0,t.length-1]]),x}const{location:s,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,ignoreLocation:h}=this.options;let d=[],m=0,g=!1;this.chunks.forEach(({pattern:x,alphabet:S,startIndex:_})=>{const{isMatch:P,score:R,indices:B}=Eo(t,x,S,{location:s+_,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:h});P&&(g=!0),m+=R,P&&B&&(d=[...d,...B])});let b={isMatch:g,score:g?m/this.chunks.length:1};return g&&i&&(b.indices=d),b}}class Pt{constructor(t){this.pattern=t}static isMultiMatch(t){return Sr(t,this.multiRegex)}static isSingleMatch(t){return Sr(t,this.singleRegex)}search(){}}function Sr(e,t){const n=e.match(t);return n?n[1]:null}class Lo extends Pt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class $o extends Pt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Ro extends Pt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Po extends Pt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Bo extends Pt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Do extends Pt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class ui extends Pt{constructor(t,{location:n=L.location,threshold:r=L.threshold,distance:i=L.distance,includeMatches:s=L.includeMatches,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:c=L.isCaseSensitive,ignoreDiacritics:u=L.ignoreDiacritics,ignoreLocation:h=L.ignoreLocation}={}){super(t),this._bitapSearch=new ci(t,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class fi extends Pt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],s=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const Kn=[Lo,fi,Ro,Po,Do,Bo,$o,ui],Lr=Kn.length,To=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Oo="|";function ko(e,t={}){return e.split(Oo).map(n=>{let r=n.trim().split(To).filter(s=>s&&!!s.trim()),i=[];for(let s=0,o=r.length;s<o;s+=1){const l=r[s];let c=!1,u=-1;for(;!c&&++u<Lr;){const h=Kn[u];let d=h.isMultiMatch(l);d&&(i.push(new h(d,t)),c=!0)}if(!c)for(u=-1;++u<Lr;){const h=Kn[u];let d=h.isSingleMatch(l);if(d){i.push(new h(d,t));break}}}return i})}const Io=new Set([ui.type,fi.type]);class No{constructor(t,{isCaseSensitive:n=L.isCaseSensitive,ignoreDiacritics:r=L.ignoreDiacritics,includeMatches:i=L.includeMatches,minMatchCharLength:s=L.minMatchCharLength,ignoreLocation:o=L.ignoreLocation,findAllMatches:l=L.findAllMatches,location:c=L.location,threshold:u=L.threshold,distance:h=L.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:s,findAllMatches:l,ignoreLocation:o,location:c,threshold:u,distance:h},t=n?t:t.toLowerCase(),t=r?Ge(t):t,this.pattern=t,this.query=ko(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:s}=this.options;t=i?t:t.toLowerCase(),t=s?Ge(t):t;let o=0,l=[],c=0;for(let u=0,h=n.length;u<h;u+=1){const d=n[u];l.length=0,o=0;for(let m=0,g=d.length;m<g;m+=1){const b=d[m],{isMatch:x,indices:S,score:_}=b.search(t);if(x){if(o+=1,c+=_,r){const P=b.constructor.type;Io.has(P)?l=[...l,...S]:l.push(S)}}else{c=0,o=0,l.length=0;break}}if(o){let m={isMatch:!0,score:c/o};return r&&(m.indices=l),m}}return{isMatch:!1,score:1}}}const Vn=[];function jo(...e){Vn.push(...e)}function Jn(e,t){for(let n=0,r=Vn.length;n<r;n+=1){let i=Vn[n];if(i.condition(e,t))return new i(e,t)}return new ci(e,t)}const Ke={AND:"$and",OR:"$or"},Zn={PATH:"$path",PATTERN:"$val"},Qn=e=>!!(e[Ke.AND]||e[Ke.OR]),Fo=e=>!!e[Zn.PATH],qo=e=>!xt(e)&&si(e)&&!Qn(e),$r=e=>({[Ke.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function hi(e,t,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const o=Fo(i);if(!o&&s.length>1&&!Qn(i))return r($r(i));if(qo(i)){const c=o?i[Zn.PATH]:s[0],u=o?i[Zn.PATTERN]:i[c];if(!ut(u))throw new Error(fo(c));const h={keyId:Gn(c),pattern:u};return n&&(h.searcher=Jn(u,t)),h}let l={children:[],operator:s[0]};return s.forEach(c=>{const u=i[c];xt(u)&&u.forEach(h=>{l.children.push(r(h))})}),l};return Qn(e)||(e=$r(e)),r(e)}function Ho(e,{ignoreFieldNorm:t=L.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:o})=>{const l=i?i.weight:null;r*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(t?1:s))}),n.score=r})}function Yo(e,t){const n=e.matches;t.matches=[],Q(n)&&n.forEach(r=>{if(!Q(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let o={indices:i,value:s};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),t.matches.push(o)})}function Xo(e,t){t.score=e.score}function Wo(e,t,{includeMatches:n=L.includeMatches,includeScore:r=L.includeScore}={}){const i=[];return n&&i.push(Yo),r&&i.push(Xo),e.map(s=>{const{idx:o}=s,l={item:t[o],refIndex:o};return i.length&&i.forEach(c=>{c(s,l)}),l})}class Bt{constructor(t,n={},r){this.options={...L,...n},this.options.useExtendedSearch,this._keyStore=new yo(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof lr))throw new Error(uo);this._myIndex=n||li(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Q(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];t(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:o,ignoreFieldNorm:l}=this.options;let c=ut(t)?ut(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Ho(c,{ignoreFieldNorm:l}),s&&c.sort(o),ii(n)&&n>-1&&(c=c.slice(0,n)),Wo(c,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=Jn(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:o,n:l})=>{if(!Q(s))return;const{isMatch:c,score:u,indices:h}=n.searchIn(s);c&&i.push({item:s,idx:o,matches:[{score:u,value:s,norm:l,indices:h}]})}),i}_searchLogical(t){const n=hi(t,this.options),r=(l,c,u)=>{if(!l.children){const{keyId:d,searcher:m}=l,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:m});return g&&g.length?[{idx:u,item:c,matches:g}]:[]}const h=[];for(let d=0,m=l.children.length;d<m;d+=1){const g=l.children[d],b=r(g,c,u);if(b.length)h.push(...b);else if(l.operator===Ke.AND)return[]}return h},i=this._myIndex.records,s={},o=[];return i.forEach(({$:l,i:c})=>{if(Q(l)){let u=r(n,l,c);u.length&&(s[c]||(s[c]={idx:c,item:l,matches:[]},o.push(s[c])),u.forEach(({matches:h})=>{s[c].matches.push(...h)}))}}),o}_searchObjectList(t){const n=Jn(t,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:o,i:l})=>{if(!Q(o))return;let c=[];r.forEach((u,h)=>{c.push(...this._findMatches({key:u,value:o[h],searcher:n}))}),c.length&&s.push({idx:l,item:o,matches:c})}),s}_findMatches({key:t,value:n,searcher:r}){if(!Q(n))return[];let i=[];if(xt(n))n.forEach(({v:s,i:o,n:l})=>{if(!Q(s))return;const{isMatch:c,score:u,indices:h}=r.searchIn(s);c&&i.push({score:u,key:t,value:s,idx:o,norm:l,indices:h})});else{const{v:s,n:o}=n,{isMatch:l,score:c,indices:u}=r.searchIn(s);l&&i.push({score:c,key:t,value:s,norm:o,indices:u})}return i}}Bt.version="7.1.0";Bt.createIndex=li;Bt.parseIndex=_o;Bt.config=L;Bt.parseQuery=hi;jo(No);function di(e,t){const n=new Bt(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const r=e.target.value,s=n.search(r).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(t.filters).forEach(o=>{t.querySelector(`[data-details="${o}"]`).parentElement.style.display=s.includes(o)||!r?"":"none"})}function zo(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const tr=Math.min,Qt=Math.max,Ve=Math.round,Fe=Math.floor,ht=e=>({x:e,y:e});function Uo(e,t){return typeof e=="function"?e(t):e}function Go(e){return e.split("-")[0]}function Ko(e){return e.split("-")[1]}function Vo(e){return e==="x"?"y":"x"}function Jo(e){return e==="y"?"height":"width"}function pi(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function Zo(e){return Vo(pi(e))}function Qo(e){return{top:0,right:0,bottom:0,left:0,...e}}function ta(e){return typeof e!="number"?Qo(e):{top:e,right:e,bottom:e,left:e}}function Je(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Rr(e,t,n){let{reference:r,floating:i}=e;const s=pi(t),o=Zo(t),l=Jo(o),c=Go(t),u=s==="y",h=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,m=r[l]/2-i[l]/2;let g;switch(c){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-i.width,y:d};break;default:g={x:r.x,y:r.y}}switch(Ko(t)){case"start":g[o]-=m*(n&&u?-1:1);break;case"end":g[o]+=m*(n&&u?-1:1);break}return g}async function ea(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:o,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:m=!1,padding:g=0}=Uo(t,e),b=ta(g),S=l[m?d==="floating"?"reference":"floating":d],_=Je(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(S)))==null||n?S:S.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:c})),P=d==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),B=await(s.isElement==null?void 0:s.isElement(R))?await(s.getScale==null?void 0:s.getScale(R))||{x:1,y:1}:{x:1,y:1},T=Je(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:P,offsetParent:R,strategy:c}):P);return{top:(_.top-T.top+b.top)/B.y,bottom:(T.bottom-_.bottom+b.bottom)/B.y,left:(_.left-T.left+b.left)/B.x,right:(T.right-_.right+b.right)/B.x}}const na=50,ra=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,l=o.detectOverflow?o:{...o,detectOverflow:ea},c=await(o.isRTL==null?void 0:o.isRTL(t));let u=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Rr(u,r,c),m=r,g=0;const b={};for(let x=0;x<s.length;x++){const S=s[x];if(!S)continue;const{name:_,fn:P}=S,{x:R,y:B,data:T,reset:j}=await P({x:h,y:d,initialPlacement:r,placement:m,strategy:i,middlewareData:b,rects:u,platform:l,elements:{reference:e,floating:t}});h=R??h,d=B??d,b[_]={...b[_],...T},j&&g<na&&(g++,typeof j=="object"&&(j.placement&&(m=j.placement),j.rects&&(u=j.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):j.rects),{x:h,y:d}=Rr(u,m,c)),x=-1)}return{x:h,y:d,placement:m,strategy:i,middlewareData:b}};function en(){return typeof window<"u"}function re(e){return gi(e)?(e.nodeName||"").toLowerCase():"#document"}function tt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function gt(e){var t;return(t=(gi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function gi(e){return en()?e instanceof Node||e instanceof tt(e).Node:!1}function st(e){return en()?e instanceof Element||e instanceof tt(e).Element:!1}function Mt(e){return en()?e instanceof HTMLElement||e instanceof tt(e).HTMLElement:!1}function Pr(e){return!en()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof tt(e).ShadowRoot}function ye(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ot(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}function ia(e){return/^(table|td|th)$/.test(re(e))}function nn(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const sa=/transform|translate|scale|rotate|perspective|filter/,oa=/paint|layout|strict|content/,Nt=e=>!!e&&e!=="none";let jn;function cr(e){const t=st(e)?ot(e):e;return Nt(t.transform)||Nt(t.translate)||Nt(t.scale)||Nt(t.rotate)||Nt(t.perspective)||!ur()&&(Nt(t.backdropFilter)||Nt(t.filter))||sa.test(t.willChange||"")||oa.test(t.contain||"")}function aa(e){let t=Rt(e);for(;Mt(t)&&!ee(t);){if(cr(t))return t;if(nn(t))return null;t=Rt(t)}return null}function ur(){return jn==null&&(jn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),jn}function ee(e){return/^(html|body|#document)$/.test(re(e))}function ot(e){return tt(e).getComputedStyle(e)}function rn(e){return st(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Rt(e){if(re(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Pr(e)&&e.host||gt(e);return Pr(t)?t.host:t}function yi(e){const t=Rt(e);return ee(t)?e.ownerDocument?e.ownerDocument.body:e.body:Mt(t)&&ye(t)?t:yi(t)}function ge(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=yi(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),o=tt(i);if(s){const l=er(o);return t.concat(o,o.visualViewport||[],ye(i)?i:[],l&&n?ge(l):[])}else return t.concat(i,ge(i,[],n))}function er(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function mi(e){const t=ot(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Mt(e),s=i?e.offsetWidth:n,o=i?e.offsetHeight:r,l=Ve(n)!==s||Ve(r)!==o;return l&&(n=s,r=o),{width:n,height:r,$:l}}function fr(e){return st(e)?e:e.contextElement}function te(e){const t=fr(e);if(!Mt(t))return ht(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:s}=mi(t);let o=(s?Ve(n.width):n.width)/r,l=(s?Ve(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const la=ht(0);function bi(e){const t=tt(e);return!ur()||!t.visualViewport?la:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ca(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==tt(e)?!1:t}function Ht(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=fr(e);let o=ht(1);t&&(r?st(r)&&(o=te(r)):o=te(e));const l=ca(s,n,r)?bi(s):ht(0);let c=(i.left+l.x)/o.x,u=(i.top+l.y)/o.y,h=i.width/o.x,d=i.height/o.y;if(s){const m=tt(s),g=r&&st(r)?tt(r):r;let b=m,x=er(b);for(;x&&r&&g!==b;){const S=te(x),_=x.getBoundingClientRect(),P=ot(x),R=_.left+(x.clientLeft+parseFloat(P.paddingLeft))*S.x,B=_.top+(x.clientTop+parseFloat(P.paddingTop))*S.y;c*=S.x,u*=S.y,h*=S.x,d*=S.y,c+=R,u+=B,b=tt(x),x=er(b)}}return Je({width:h,height:d,x:c,y:u})}function sn(e,t){const n=rn(e).scrollLeft;return t?t.left+n:Ht(gt(e)).left+n}function vi(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-sn(e,n),i=n.top+t.scrollTop;return{x:r,y:i}}function ua(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const s=i==="fixed",o=gt(r),l=t?nn(t.floating):!1;if(r===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=ht(1);const h=ht(0),d=Mt(r);if((d||!d&&!s)&&((re(r)!=="body"||ye(o))&&(c=rn(r)),d)){const g=Ht(r);u=te(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const m=o&&!d&&!s?vi(o,c):ht(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+h.x+m.x,y:n.y*u.y-c.scrollTop*u.y+h.y+m.y}}function fa(e){return Array.from(e.getClientRects())}function ha(e){const t=gt(e),n=rn(e),r=e.ownerDocument.body,i=Qt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Qt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+sn(e);const l=-n.scrollTop;return ot(r).direction==="rtl"&&(o+=Qt(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:l}}const Br=25;function da(e,t){const n=tt(e),r=gt(e),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,l=0,c=0;if(i){s=i.width,o=i.height;const h=ur();(!h||h&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}const u=sn(r);if(u<=0){const h=r.ownerDocument,d=h.body,m=getComputedStyle(d),g=h.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,b=Math.abs(r.clientWidth-d.clientWidth-g);b<=Br&&(s-=b)}else u<=Br&&(s+=u);return{width:s,height:o,x:l,y:c}}function pa(e,t){const n=Ht(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,s=Mt(e)?te(e):ht(1),o=e.clientWidth*s.x,l=e.clientHeight*s.y,c=i*s.x,u=r*s.y;return{width:o,height:l,x:c,y:u}}function Dr(e,t,n){let r;if(t==="viewport")r=da(e,n);else if(t==="document")r=ha(gt(e));else if(st(t))r=pa(t,n);else{const i=bi(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Je(r)}function wi(e,t){const n=Rt(e);return n===t||!st(n)||ee(n)?!1:ot(n).position==="fixed"||wi(n,t)}function ga(e,t){const n=t.get(e);if(n)return n;let r=ge(e,[],!1).filter(l=>st(l)&&re(l)!=="body"),i=null;const s=ot(e).position==="fixed";let o=s?Rt(e):e;for(;st(o)&&!ee(o);){const l=ot(o),c=cr(o);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&(i.position==="absolute"||i.position==="fixed")||ye(o)&&!c&&wi(e,o))?r=r.filter(h=>h!==o):i=l,o=Rt(o)}return t.set(e,r),r}function ya(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?nn(t)?[]:ga(t,this._c):[].concat(n),r],l=Dr(t,o[0],i);let c=l.top,u=l.right,h=l.bottom,d=l.left;for(let m=1;m<o.length;m++){const g=Dr(t,o[m],i);c=Qt(g.top,c),u=tr(g.right,u),h=tr(g.bottom,h),d=Qt(g.left,d)}return{width:u-d,height:h-c,x:d,y:c}}function ma(e){const{width:t,height:n}=mi(e);return{width:t,height:n}}function ba(e,t,n){const r=Mt(t),i=gt(t),s=n==="fixed",o=Ht(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=ht(0);function u(){c.x=sn(i)}if(r||!r&&!s)if((re(t)!=="body"||ye(i))&&(l=rn(t)),r){const g=Ht(t,!0,s,t);c.x=g.x+t.clientLeft,c.y=g.y+t.clientTop}else i&&u();s&&!r&&i&&u();const h=i&&!r&&!s?vi(i,l):ht(0),d=o.left+l.scrollLeft-c.x-h.x,m=o.top+l.scrollTop-c.y-h.y;return{x:d,y:m,width:o.width,height:o.height}}function Fn(e){return ot(e).position==="static"}function Tr(e,t){if(!Mt(e)||ot(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return gt(e)===n&&(n=n.ownerDocument.body),n}function xi(e,t){const n=tt(e);if(nn(e))return n;if(!Mt(e)){let i=Rt(e);for(;i&&!ee(i);){if(st(i)&&!Fn(i))return i;i=Rt(i)}return n}let r=Tr(e,t);for(;r&&ia(r)&&Fn(r);)r=Tr(r,t);return r&&ee(r)&&Fn(r)&&!cr(r)?n:r||aa(e)||n}const va=async function(e){const t=this.getOffsetParent||xi,n=this.getDimensions,r=await n(e.floating);return{reference:ba(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function wa(e){return ot(e).direction==="rtl"}const xa={convertOffsetParentRelativeRectToViewportRelativeRect:ua,getDocumentElement:gt,getClippingRect:ya,getOffsetParent:xi,getElementRects:va,getClientRects:fa,getDimensions:ma,getScale:te,isElement:st,isRTL:wa};function Mi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ma(e,t){let n=null,r;const i=gt(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=e.getBoundingClientRect(),{left:h,top:d,width:m,height:g}=u;if(l||t(),!m||!g)return;const b=Fe(d),x=Fe(i.clientWidth-(h+m)),S=Fe(i.clientHeight-(d+g)),_=Fe(h),R={rootMargin:-b+"px "+-x+"px "+-S+"px "+-_+"px",threshold:Qt(0,tr(1,c))||1};let B=!0;function T(j){const k=j[0].intersectionRatio;if(k!==c){if(!B)return o();k?o(!1,k):r=setTimeout(()=>{o(!1,1e-7)},1e3)}k===1&&!Mi(u,e.getBoundingClientRect())&&o(),B=!1}try{n=new IntersectionObserver(T,{...R,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,R)}n.observe(e)}return o(!0),s}function Aa(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=fr(e),h=i||s?[...u?ge(u):[],...t?ge(t):[]]:[];h.forEach(_=>{i&&_.addEventListener("scroll",n,{passive:!0}),s&&_.addEventListener("resize",n)});const d=u&&l?Ma(u,n):null;let m=-1,g=null;o&&(g=new ResizeObserver(_=>{let[P]=_;P&&P.target===u&&g&&t&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var R;(R=g)==null||R.observe(t)})),n()}),u&&!c&&g.observe(u),t&&g.observe(t));let b,x=c?Ht(e):null;c&&S();function S(){const _=Ht(e);x&&!Mi(x,_)&&n(),x=_,b=requestAnimationFrame(S)}return n(),()=>{var _;h.forEach(P=>{i&&P.removeEventListener("scroll",n),s&&P.removeEventListener("resize",n)}),d?.(),(_=g)==null||_.disconnect(),g=null,c&&cancelAnimationFrame(b)}}const _a=(e,t,n)=>{const r=new Map,i={platform:xa,...n},s={...i.platform,_c:r};return ra(e,t,{...i,platform:s})};function Ca(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Aa(t,n,()=>{n.matches(":popover-open")&&_a(t,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Ai(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",di({target:{value:""}},e)}function Ea(e,t){t.inlineMode&&e.stopPropagation()}function Sa(e){e.inlineMode&&(e.showDropdown=!0)}function La(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function $a(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Ai(t),t.showDropdown=!1)}function Ra(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Ai(t),t.showDropdown=!1)}function Pa(e,t){var n,r,i=0,s,o,l,c,u,h,d,m=e[0],g=e[1],b=t.length;for(n=0;n<b;n++){r=0;var x=t[n],S=x.length-1;if(h=x[0],h[0]!==x[S][0]&&h[1]!==x[S][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-m,l=h[1]-g,r;r<S;r++){if(d=x[r+1],c=d[0]-m,u=d[1]-g,l===0&&u===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(s=ro(o,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&i++}h=d,l=u,o=c}}return i%2!==0}function dt(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function qt(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ne(e){return e.type==="Feature"?e.geometry:e}function Or(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}function rt(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=dt(e),i=ne(t),s=i.type,o=t.bbox;let l=i.coordinates;if(o&&Ba(r,o)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const h=Pa(r,l[u]);if(h===0)return!n.ignoreBoundary;h&&(c=!0)}return c}function Ba(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}function nr(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties={},r.geometry=e,r}function Da(e,t,n={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ir(e[0])||!Ir(e[1]))throw new Error("coordinates must contain numbers");return nr({type:"Point",coordinates:e},t,n)}function kr(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function Ir(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}class _i{constructor(t=[],n=Ta){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const s=t-1>>1,o=n[s];if(r(i,o)>=0)break;n[t]=o,t=s}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,s=n[t];for(;t<i;){let o=(t<<1)+1,l=n[o];const c=o+1;if(c<this.length&&r(n[c],l)<0&&(o=c,l=n[c]),r(l,s)>=0)break;n[t]=l,t=o}n[t]=s}}function Ta(e,t){return e<t?-1:e>t?1:0}function Ci(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function Oa(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class Nr{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function ka(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)jr(n[r],t)}else jr(e,t)}let qe=0,He=0,Ye=0;function jr(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let o=r[i][s][0],l=null;He=He+1;for(let c=0;c<r[i][s].length-1;c++){l=r[i][s][c+1];const u=new Nr(o,qe,He,Ye),h=new Nr(l,qe,He,Ye+1);u.otherEvent=h,h.otherEvent=u,Ci(u,h)>0?(h.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(u),t.push(h),o=l,Ye=Ye+1}}qe=qe+1}class Ia{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function Na(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,s=e.rightSweepEvent.p.y,o=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,c=t.rightSweepEvent.p.x,u=t.rightSweepEvent.p.y,h=(u-l)*(i-n)-(c-o)*(s-r),d=(c-o)*(r-l)-(u-l)*(n-o),m=(i-n)*(r-l)-(s-r)*(n-o);if(h===0)return!1;const g=d/h,b=m/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),S=r+g*(s-r);return[x,S]}return!1}function ja(e,t){t=t||!1;const n=[],r=new _i([],Oa);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const s=new Ia(i);for(let o=0;o<r.data.length;o++){const l=r.data[o];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const c=Na(s,l);c!==!1&&n.push(c)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function Fa(e,t){const n=new _i([],Ci);return ka(e,n),ja(n,t)}var qa=Fa;function on(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let s=[];e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(nr(e)),t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(nr(t));const o=qa(kr(s),i);let l=[];if(r){const c={};o.forEach(u=>{const h=u.join(",");c[h]||(c[h]=!0,l.push(u))})}else l=o;return kr(l.map(c=>Da(c)))}function Fr(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function hr(e,t,n){if(e!==null)for(var r,i,s,o,l,c,u,h=0,d=0,m,g=e.type,b=g==="FeatureCollection",x=g==="Feature",S=b?e.features.length:1,_=0;_<S;_++){u=b?e.features[_].geometry:x?e.geometry:e,m=u?u.type==="GeometryCollection":!1,l=m?u.geometries.length:1;for(var P=0;P<l;P++){var R=0,B=0;if(o=m?u.geometries[P]:u,o!==null){c=o.coordinates;var T=o.type;switch(h=0,T){case null:break;case"Point":if(t(c,d,_,R,B)===!1)return!1;d++,R++;break;case"LineString":case"MultiPoint":for(r=0;r<c.length;r++){if(t(c[r],d,_,R,B)===!1)return!1;d++,T==="MultiPoint"&&R++}T==="LineString"&&R++;break;case"Polygon":case"MultiLineString":for(r=0;r<c.length;r++){for(i=0;i<c[r].length-h;i++){if(t(c[r][i],d,_,R,B)===!1)return!1;d++}T==="MultiLineString"&&R++,T==="Polygon"&&B++}T==="Polygon"&&R++;break;case"MultiPolygon":for(r=0;r<c.length;r++){for(B=0,i=0;i<c[r].length;i++){for(s=0;s<c[r][i].length-h;s++){if(t(c[r][i][s],d,_,R,B)===!1)return!1;d++}B++}R++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(hr(o.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function an(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var n=0;n<e.features.length&&t(e.features[n],n)!==!1;n++);}function Ha(e,t,n){var r=n;return an(e,function(i,s){s===0&&n===void 0?r=i:r=t(r,i,s)}),r}function Ya(e,t){var n,r,i,s,o,l,c,u,h,d,m=0,g=e.type==="FeatureCollection",b=e.type==="Feature",x=g?e.features.length:1;for(n=0;n<x;n++){for(l=g?e.features[n].geometry:b?e.geometry:e,u=g?e.features[n].properties:b?e.properties:{},h=g?e.features[n].bbox:b?e.bbox:void 0,d=g?e.features[n].id:b?e.id:void 0,c=l?l.type==="GeometryCollection":!1,o=c?l.geometries.length:1,i=0;i<o;i++){if(s=c?l.geometries[i]:l,s===null){if(t(null,m,u,h,d)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(s,m,u,h,d)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(t(s.geometries[r],m,u,h,d)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}m++}}function Yt(e,t){Ya(e,function(n,r,i,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(Fr(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var h=n.coordinates[u],d={type:c,coordinates:h};if(t(Fr(d,i),r,u)===!1)return!1}})}function Ei(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function Xa(e,t,n={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return Ei({type:"LineString",coordinates:e},t,n)}function Wa(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function za(e,t,n={}){return Ei({type:"MultiLineString",coordinates:e},t,n)}function rr(e,t={}){const n=ne(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return Ua(n,t);case"MultiPolygon":return Ga(n,t);default:throw new Error("invalid poly")}}function Ua(e,t={}){const r=ne(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return Si(r,i)}function Ga(e,t={}){const r=ne(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},s=[];return r.forEach(o=>{s.push(Si(o,i))}),Wa(s)}function Si(e,t){return e.length>1?za(e,t):Xa(e[0],t)}function Ka(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Yt(e,i=>{Yt(t,s=>{if(r===!1)return!1;r=Va(i.geometry,s.geometry,n)})}),r}function Va(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!tl(e.coordinates,t.coordinates);case"LineString":return!qr(t,e);case"Polygon":return!rt(e,t)}break;case"LineString":switch(t.type){case"Point":return!qr(e,t);case"LineString":return!Ja(e,t,n);case"Polygon":return!Hr(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!rt(t,e);case"LineString":return!Hr(e,t,n);case"Polygon":return!Za(t,e,n)}}return!1}function qr(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(Qa(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function Ja(e,t,n){return on(e,t,{ignoreSelfIntersections:n}).features.length>0}function Hr(e,t,n){for(const i of t.coordinates)if(rt(i,e))return!0;return on(t,rr(e),{ignoreSelfIntersections:n}).features.length>0}function Za(e,t,n){for(const i of e.coordinates[0])if(rt(i,t))return!0;for(const i of t.coordinates[0])if(rt(i,e))return!0;return on(rr(e),rr(t),{ignoreSelfIntersections:n}).features.length>0}function Qa(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],s=t[0]-e[0],o=t[1]-e[1];return r*o-i*s!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:o>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function tl(e,t){return e[0]===t[0]&&e[1]===t[1]}function el(e,t,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Yt(e,i=>{Yt(t,s=>{if(r===!0)return!0;r=!Ka(i.geometry,s.geometry,{ignoreSelfIntersections:n})})}),r}var nl=el;function ft(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return hr(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ze(e,t,n={}){const r=dt(e),i=qt(t);for(let s=0;s<i.length-1;s++){let o=!1;if(n.ignoreEndVertices&&(s===0&&(o="start"),s===i.length-2&&(o="end"),s===0&&s+1===i.length-1&&(o="both")),rl(i[s],i[s+1],r,o,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function rl(e,t,n,r,i){const s=n[0],o=n[1],l=e[0],c=e[1],u=t[0],h=t[1],d=n[0]-l,m=n[1]-c,g=u-l,b=h-c,x=d*b-m*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===e[0]&&n[1]===e[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<s&&s<=u:u<=s&&s<l:b>0?c<o&&o<=h:h<=o&&o<c;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=s&&s<u:u<s&&s<=l:b>0?c<=o&&o<h:h<o&&o<=c;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<s&&s<u:u<s&&s<l:b>0?c<o&&o<h:h<o&&o<c}else return Math.abs(g)>=Math.abs(b)?g>0?l<=s&&s<=u:u<=s&&s<=l:b>0?c<=o&&o<=h:h<=o&&o<=c;return!1}function Li(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties={},r.geometry=e,r}function il(e,t,n={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return Li({type:"LineString",coordinates:e},t,n)}function sl(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function ol(e,t,n,r,i){$i(e,t,n||0,r||e.length-1,i||al)}function $i(e,t,n,r,i){for(;r>n;){if(r-n>600){var s=r-n+1,o=t-n+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(o-s/2<0?-1:1),h=Math.max(n,Math.floor(t-o*c/s+u)),d=Math.min(r,Math.floor(t+(s-o)*c/s+u));$i(e,t,h,d,i)}var m=e[t],g=n,b=r;for(le(e,n,t),i(e[r],m)>0&&le(e,n,r);g<b;){for(le(e,g,b),g++,b--;i(e[g],m)<0;)g++;for(;i(e[b],m)>0;)b--}i(e[n],m)===0?le(e,n,b):(b++,le(e,b,r)),b<=t&&(n=b+1),t<=b&&(r=b-1)}}function le(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function al(e,t){return e<t?-1:e>t?1:0}let ll=class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let n=this.data;const r=[];if(!We(t,n))return r;const i=this.toBBox,s=[];for(;n;){for(let o=0;o<n.children.length;o++){const l=n.children[o],c=n.leaf?i(l):l;We(t,c)&&(n.leaf?r.push(l):Hn(t,c)?this._all(l,r):s.push(l))}n=s.pop()}return r}collides(t){let n=this.data;if(!We(t,n))return!1;const r=[];for(;n;){for(let i=0;i<n.children.length;i++){const s=n.children[i],o=n.leaf?this.toBBox(s):s;if(We(t,o)){if(n.leaf||Hn(t,o))return!0;r.push(s)}}n=r.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let r=0;r<t.length;r++)this.insert(t[r]);return this}let n=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=Zt([]),this}remove(t,n){if(!t)return this;let r=this.data;const i=this.toBBox(t),s=[],o=[];let l,c,u;for(;r||s.length;){if(r||(r=s.pop(),c=s[s.length-1],l=o.pop(),u=!0),r.leaf){const h=cl(t,r.children,n);if(h!==-1)return r.children.splice(h,1),s.push(r),this._condense(s),this}!u&&!r.leaf&&Hn(r,i)?(s.push(r),o.push(l),l=0,c=r,r=r.children[0]):c?(l++,r=c.children[l],u=!1):r=null}return this}toBBox(t){return t}compareMinX(t,n){return t.minX-n.minX}compareMinY(t,n){return t.minY-n.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){const r=[];for(;t;)t.leaf?n.push(...t.children):r.push(...t.children),t=r.pop();return n}_build(t,n,r,i){const s=r-n+1;let o=this._maxEntries,l;if(s<=o)return l=Zt(t.slice(n,r+1)),Jt(l,this.toBBox),l;i||(i=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,i-1))),l=Zt([]),l.leaf=!1,l.height=i;const c=Math.ceil(s/o),u=c*Math.ceil(Math.sqrt(o));Yr(t,n,r,u,this.compareMinX);for(let h=n;h<=r;h+=u){const d=Math.min(h+u-1,r);Yr(t,h,d,c,this.compareMinY);for(let m=h;m<=d;m+=c){const g=Math.min(m+c-1,d);l.children.push(this._build(t,m,g,i-1))}}return Jt(l,this.toBBox),l}_chooseSubtree(t,n,r,i){for(;i.push(n),!(n.leaf||i.length-1===r);){let s=1/0,o=1/0,l;for(let c=0;c<n.children.length;c++){const u=n.children[c],h=qn(u),d=hl(t,u)-h;d<o?(o=d,s=h<s?h:s,l=u):d===o&&h<s&&(s=h,l=u)}n=l||n.children[0]}return n}_insert(t,n,r){const i=r?t:this.toBBox(t),s=[],o=this._chooseSubtree(i,this.data,n,s);for(o.children.push(t),fe(o,i);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(i,s,n)}_split(t,n){const r=t[n],i=r.children.length,s=this._minEntries;this._chooseSplitAxis(r,s,i);const o=this._chooseSplitIndex(r,s,i),l=Zt(r.children.splice(o,r.children.length-o));l.height=r.height,l.leaf=r.leaf,Jt(r,this.toBBox),Jt(l,this.toBBox),n?t[n-1].children.push(l):this._splitRoot(r,l)}_splitRoot(t,n){this.data=Zt([t,n]),this.data.height=t.height+1,this.data.leaf=!1,Jt(this.data,this.toBBox)}_chooseSplitIndex(t,n,r){let i,s=1/0,o=1/0;for(let l=n;l<=r-n;l++){const c=ue(t,0,l,this.toBBox),u=ue(t,l,r,this.toBBox),h=dl(c,u),d=qn(c)+qn(u);h<s?(s=h,i=l,o=d<o?d:o):h===s&&d<o&&(o=d,i=l)}return i||r-n}_chooseSplitAxis(t,n,r){const i=t.leaf?this.compareMinX:ul,s=t.leaf?this.compareMinY:fl,o=this._allDistMargin(t,n,r,i),l=this._allDistMargin(t,n,r,s);o<l&&t.children.sort(i)}_allDistMargin(t,n,r,i){t.children.sort(i);const s=this.toBBox,o=ue(t,0,n,s),l=ue(t,r-n,r,s);let c=Xe(o)+Xe(l);for(let u=n;u<r-n;u++){const h=t.children[u];fe(o,t.leaf?s(h):h),c+=Xe(o)}for(let u=r-n-1;u>=n;u--){const h=t.children[u];fe(l,t.leaf?s(h):h),c+=Xe(l)}return c}_adjustParentBBoxes(t,n,r){for(let i=r;i>=0;i--)fe(n[i],t)}_condense(t){for(let n=t.length-1,r;n>=0;n--)t[n].children.length===0?n>0?(r=t[n-1].children,r.splice(r.indexOf(t[n]),1)):this.clear():Jt(t[n],this.toBBox)}};function cl(e,t,n){if(!n)return t.indexOf(e);for(let r=0;r<t.length;r++)if(n(e,t[r]))return r;return-1}function Jt(e,t){ue(e,0,e.children.length,t,e)}function ue(e,t,n,r,i){i||(i=Zt(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s=t;s<n;s++){const o=e.children[s];fe(i,e.leaf?r(o):o)}return i}function fe(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function ul(e,t){return e.minX-t.minX}function fl(e,t){return e.minY-t.minY}function qn(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function Xe(e){return e.maxX-e.minX+(e.maxY-e.minY)}function hl(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function dl(e,t){const n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,s-r)}function Hn(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function We(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function Zt(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Yr(e,t,n,r,i){const s=[t,n];for(;s.length;){if(n=s.pop(),t=s.pop(),n-t<=r)continue;const o=t+Math.ceil((n-t)/r/2)*r;ol(e,o,t,n,i),s.push(t,o,o,n)}}function Xr(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function Yn(e){var t;if(e.bbox)t=e.bbox;else if(Array.isArray(e)&&e.length===4)t=e;else if(Array.isArray(e)&&e.length===6)t=[e[0],e[1],e[3],e[4]];else if(e.type==="Feature")t=ft(e);else if(e.type==="FeatureCollection")t=ft(e);else throw new Error("invalid geojson");return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}var pl=class{constructor(e=9){this.tree=new ll(e),this.tree.toBBox=Yn}insert(e){if(e.type!=="Feature")throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:ft(e),this.tree.insert(e),this}load(e){var t=[];return Array.isArray(e)?e.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ft(n),t.push(n)}):an(e,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ft(n),t.push(n)}),this.tree.load(t),this}remove(e,t){if(e.type!=="Feature")throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:ft(e),this.tree.remove(e,t),this}clear(){return this.tree.clear(),this}search(e){var t=this.tree.search(Yn(e));return Xr(t)}collides(e){return this.tree.collides(Yn(e))}all(){const e=this.tree.all();return Xr(e)}toJSON(){return this.tree.toJSON()}fromJSON(e){return this.tree.fromJSON(e),this}};function Ri(e){return new pl(e)}function gl(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function yl(e,t){if(t=t??{},!gl(t))throw new Error("options is invalid");var n=t.precision,r=t.coordinates,i=t.mutate;if(n=n==null||isNaN(n)?6:n,r=r==null||isNaN(r)?3:r,!e)throw new Error("<geojson> is required");if(typeof n!="number")throw new Error("<precision> must be a number");if(typeof r!="number")throw new Error("<coordinates> must be a number");(i===!1||i===void 0)&&(e=JSON.parse(JSON.stringify(e)));var s=Math.pow(10,n);return hr(e,function(o){ml(o,s,r)}),e}function ml(e,t,n){e.length>n&&e.splice(n,e.length);for(var r=0;r<e.length;r++)e[r]=Math.round(e[r]*t)/t;return e}function bl(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function vl(e,t,n={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return bl({type:"LineString",coordinates:e},t,n)}function wl(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function xl(e){if(!e)throw new Error("geojson is required");const t=[];return Yt(e,n=>{Ml(n,t)}),wl(t)}function Ml(e,t){let n=[];const r=e.geometry;if(r!==null){switch(r.type){case"Polygon":n=qt(r);break;case"LineString":n=[qt(r)]}n.forEach(i=>{Al(i,e.properties).forEach(o=>{o.id=t.length,t.push(o)})})}}function Al(e,t){const n=[];return e.reduce((r,i)=>{const s=vl([r,i],t);return s.bbox=_l(r,i),n.push(s),i}),n}function _l(e,t){const n=e[0],r=e[1],i=t[0],s=t[1],o=n<i?n:i,l=r<s?r:s,c=n>i?n:i,u=r>s?r:s;return[o,l,c,u]}var J=63710088e-1,Cl={centimeters:J*100,centimetres:J*100,degrees:360/(2*Math.PI),feet:J*3.28084,inches:J*39.37,kilometers:J/1e3,kilometres:J/1e3,meters:J,metres:J,miles:J/1609.344,millimeters:J*1e3,millimetres:J*1e3,nauticalmiles:J/1852,radians:1,yards:J*1.0936};function El(e,t="kilometers"){const n=Cl[t];if(!n)throw new Error(t+" units is invalid");return e*n}function ze(e){return e%360*Math.PI/180}function Xn(e,t,n={}){var r=dt(e),i=dt(t),s=ze(i[1]-r[1]),o=ze(i[0]-r[0]),l=ze(r[1]),c=ze(i[1]),u=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(c);return El(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),n.units)}function Sl(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function Ue(e,t,n={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Ur(e[0])||!Ur(e[1]))throw new Error("coordinates must contain numbers");return Sl({type:"Point",coordinates:e},t,n)}function Wr(e){return e%(2*Math.PI)*180/Math.PI}function zr(e){return e%360*Math.PI/180}function Ur(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}var Ll=Object.defineProperty,$l=Object.defineProperties,Rl=Object.getOwnPropertyDescriptors,Gr=Object.getOwnPropertySymbols,Pl=Object.prototype.hasOwnProperty,Bl=Object.prototype.propertyIsEnumerable,Kr=(e,t,n)=>t in e?Ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Dl=(e,t)=>{for(var n in t||(t={}))Pl.call(t,n)&&Kr(e,n,t[n]);if(Gr)for(var n of Gr(t))Bl.call(t,n)&&Kr(e,n,t[n]);return e},Tl=(e,t)=>$l(e,Rl(t));function Ol(e,t,n={}){if(!e||!t)throw new Error("lines and inputPoint are required arguments");const r=dt(t);let i=Ue([1/0,1/0],{lineStringIndex:-1,segmentIndex:-1,totalDistance:-1,lineDistance:-1,segmentDistance:-1,pointDistance:1/0,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),s=0,o=0,l=-1;return Yt(e,function(c,u,h){l!==h&&(l=h,o=0);const d=qt(c);for(let m=0;m<d.length-1;m++){const g=Ue(d[m]),b=dt(g),x=Ue(d[m+1]),S=dt(x),_=Xn(g,x,n);let P,R;S[0]===r[0]&&S[1]===r[1]?[P,R]=[S,!0]:b[0]===r[0]&&b[1]===r[1]?[P,R]=[b,!1]:[P,R]=Nl(b,S,r);const B=Xn(t,P,n);if(B<i.properties.pointDistance){const T=Xn(g,P,n);i=Ue(P,{lineStringIndex:h,segmentIndex:R?m+1:m,totalDistance:s+T,lineDistance:o+T,segmentDistance:T,pointDistance:B,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),i.properties=Tl(Dl({},i.properties),{multiFeatureIndex:i.properties.lineStringIndex,index:i.properties.segmentIndex,location:i.properties.totalDistance,dist:i.properties.pointDistance})}s+=_,o+=_}}),i}function jt(e,t){const[n,r,i]=e,[s,o,l]=t;return n*s+r*o+i*l}function ce(e,t){const[n,r,i]=e,[s,o,l]=t;return[r*l-i*o,i*s-n*l,n*o-r*s]}function kl(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2))}function Vr(e){const t=kl(e);return[e[0]/t,e[1]/t,e[2]/t]}function Wn(e){const t=zr(e[1]),n=zr(e[0]);return[Math.cos(t)*Math.cos(n),Math.cos(t)*Math.sin(n),Math.sin(t)]}function Il(e){const[t,n,r]=e,i=Math.min(Math.max(r,-1),1),s=Wr(Math.asin(i));return[Wr(Math.atan2(n,t)),s]}function Nl(e,t,n){const r=Wn(e),i=Wn(t),s=Wn(n),o=ce(r,i);if(o[0]===0&&o[1]===0&&o[2]===0)return jt(r,i)>0?[[...t],!0]:[[...n],!1];const l=ce(o,s);if(l[0]===0&&l[1]===0&&l[2]===0)return[[...t],!0];const c=ce(l,o),u=Vr(c),h=[-u[0],-u[1],-u[2]],d=jt(s,u)>jt(s,h)?u:h,m=Vr(o),g=jt(ce(r,d),m),b=jt(ce(d,i),m);return g>=0&&b>=0?[Il(d),!1]:jt(r,s)>jt(i,s)?[[...e],!1]:[[...t],!0]}function Pi(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties={},r.geometry=e,r}function Jr(e,t,n={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return Pi({type:"LineString",coordinates:e},t,n)}function de(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function jl(e,t){if(!e)throw new Error("line is required");if(!t)throw new Error("splitter is required");const n=Or(e),r=Or(t);if(n!=="LineString")throw new Error("line must be LineString");if(r==="FeatureCollection")throw new Error("splitter cannot be a FeatureCollection");if(r==="GeometryCollection")throw new Error("splitter cannot be a GeometryCollection");var i=yl(t,{precision:7});switch(e.type!=="Feature"&&(e=Pi(e)),r){case"Point":return ir(e,i);case"MultiPoint":return Zr(e,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return Zr(e,on(e,i,{ignoreSelfIntersections:!0}))}}function Zr(e,t){var n=[],r=Ri();return Yt(t,function(i){if(n.forEach(function(l,c){l.id=c}),!n.length)n=ir(e,i).features,r.load(de(n));else{var s=r.search(i);if(s.features.length){var o=Bi(i,s);n=n.filter(function(l){return l.id!==o.id}),r.remove(o),an(ir(o,i),function(l){n.push(l),r.insert(l)})}}}),de(n)}function ir(e,t){var n=[],r=qt(e)[0],i=qt(e)[e.geometry.coordinates.length-1];if(zn(r,dt(t))||zn(i,dt(t)))return de([e]);var s=Ri(),o=xl(e);s.load(o);var l=s.search(t);if(!l.features.length)return de([e]);var c=Bi(t,l),u=[r],h=Ha(o,function(d,m,g){var b=qt(m)[1],x=dt(t);return g===c.id?(d.push(x),n.push(Jr(d)),zn(x,b)?[x]:[x,b]):(d.push(b),d)},u);return h.length>1&&n.push(Jr(h)),de(n)}function Bi(e,t){if(!t.features.length)throw new Error("lines must contain features");if(t.features.length===1)return t.features[0];var n,r=1/0;return an(t,function(i){var s=Ol(i,e),o=s.properties.dist;o<r&&(n=i,r=o)}),n}function zn(e,t){return e[0]===t[0]&&e[1]===t[1]}function Fl(e,t){var n=ne(e),r=ne(t),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return ql(n,r);case"LineString":return Ze(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return rt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Hl(n,r);case"LineString":return Yl(n,r);case"Polygon":case"MultiPolygon":return Xl(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Wl(n,r);case"Polygon":case"MultiPolygon":return Ul(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Gl(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function ql(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(Ti(t.coordinates[n],e.coordinates)){r=!0;break}return r}function Hl(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)Ti(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Yl(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Ze(e.coordinates[r],t))return!1;n||(n=Ze(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function Xl(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=rt(e.coordinates[i],t),!r){n=!1;break}r=rt(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function Wl(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Ze(e.coordinates[n],t))return!1;return!0}function zl(e,t){const n=e.coordinates,r=[];for(let i=0;i<n.length-1;i++){const s=il([n[i],n[i+1]]),o=jl(s,Li(t));o.features.length===0?r.push(s):r.push(...o.features)}return sl(r)}function Ul(e,t){const n=ft(t),r=ft(e);if(!Di(n,r))return!1;for(const o of e.coordinates)if(!rt(o,t))return!1;let i=!1;const s=zl(e,t);for(const o of s.features){const l=Kl(o.geometry.coordinates[0],o.geometry.coordinates[1]);if(!rt(l,t))return!1;!i&&rt(l,t,{ignoreBoundary:!0})&&(i=!0)}return i}function Gl(e,t){var n=ft(e),r=ft(t);if(!Di(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!rt(e.coordinates[0][i],t))return!1;return!0}function Di(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function Ti(e,t){return e[0]===t[0]&&e[1]===t[1]}function Kl(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Vl=Fl;const Jl=(e,t)=>t?nl(e,t):!0,Zl=(e,t)=>t?Vl(e,t):!0;function Ql(e,t="highlight",n="title"){const r=(i,s=[])=>{let o="",l=0,c=0;return s.forEach((u,h)=>{const d=u[1]+1;h&&c>u[0]||(c=u[1],o+=[i.substring(l,u[0]),`<mark class="${t}">`,i.substring(u[0],d),"</mark>"].join(""),l=d)}),o+=i.substring(l),o};return e.filter(({matches:i})=>i&&i.length).map(({item:i,matches:s})=>{const o={...i};return s.forEach(l=>{if(l.key!==n)return;const c=r(sc(l.value),oc(l.indices));o.highlightedText=c}),o})}let Oi;const tc=(e,t)=>{Oi=new Bt(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},ec=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const d=[],m=(g,b)=>{const x={};u.type==="text"?x[g]=`${b}`:x[c]=`="${g}"`,d.push(x)};return Object.entries(u.state).filter(([,g])=>g).forEach(([g,b])=>m(g,b)),d.length>0&&l.push({$or:d}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},c=Oi.search(l);i=n.enableHighlighting?Ql(c,"highlight",n.titleProperty):c.map(u=>u.item)}const s=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>(l[c]={min:u.state.min,max:u.state.max,format:u.format},l),{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const[h,d]of Object.entries(s)){const m=b=>d.format==="date"?pe(b).unix():b,g=Z(h,i[c]);g?Array.isArray(g)?u[h]=s[h].min<=m(g[1])&&m(g[0])<=s[h].max:m(g)>=s[h].min&&m(g)<=s[h].max?u[h]=!0:u[h]=!1:u[h]=!0}Object.values(u).every(h=>!!h)&&l.push(i[c])}i=[...l]}const o=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const h of Object.keys(o)){const d=Z(h,i[c]),m=o[h].mode||"within";d&&(m==="within"?Zl(d,o[h].geometry):Jl(d,o[h].geometry))?u[h]=!0:u[h]=!1}Object.values(u).every(h=>!!h)&&l.push(i[c])}i=[...l]}return i};function nc(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function ln(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Qr(e,t){return e*2+t}function rc(e){return Object.keys(e).map(t=>({title:E`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function sr(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function ic(e,t,n){const r=n.externalFilter(e,t),i=typeof r=="string"||r instanceof String?r:r.url,s=typeof r=="object"&&"fetchFn"in r?await r.fetchFn(i):await fetch(i).then(async o=>await o.json());return r.key?Z(r.key,s):s}function ki(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r?.classList.contains("details-filter")){if(!r.open||t?.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!r?.open||t?.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Z(e,t){return typeof e=="function"?e(t):e?.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}function sc(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function oc(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([i,s])=>i<=s?[i,s]:[s,i]).sort((i,s)=>i[0]-s[0]||i[1]-s[1]),r=[];for(const[i,s]of n){if(r.length===0){r.push([i,s]);continue}const o=r[r.length-1];(t?i<=o[1]+1:i<=o[1])?s>o[1]&&(o[1]=s):r.push([i,s])}return r}class ac extends pt{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=this.#i.bind(this),this._handleKeyDown=this.#r.bind(this)}set showDropdown(t){this.renderRoot.querySelector("[popover]").togglePopover(t)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#t(){setTimeout(()=>this._overlayCleanup=Ca(this))}#e(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#t()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#e()}#n(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#n(),super.disconnectedCallback()}_overlayCleanup(){}#i(t){Ra(t,this)}#r(t){$a(t,this)}#s(t){La(t,this)}#a(){Sa(this)}#o(t){Ea(t,this)}#l(t){zo(t,this)}#c(t){di(t,this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(t){t.has("inlineMode")&&(this.inlineMode?this.#e():this.#n())}render(){return E`
      <style>
        ${!this.unstyled&&ar}
      </style>
      ${this.inlineMode?E`
            <div
              class="inline-container-wrapper"
              @click="${this.#s}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${rc(this.filters)}
                      .controller=${{remove:t=>this.#l(t)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${q(sr(this.filters),()=>E`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":E`
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
                  class="input-container field no-margin ${sr(this.filters)?"dirty-filter-input":""}"
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
                  @keydown="${this.#r}"
                  @click="${this.#o}"
                  @focus="${this.#o}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:E`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",ac);function lc(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",ln(e.filterObject),e.requestUpdate()}function cc(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const or="ddd, D MMM YYYY HH:mm:ss";function uc(e){if(e.filterObject=ln(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),n=e.filterObject.min,r=e.filterObject.max;t.value1!==n&&(t.value1=n),t.value2!==r&&(t.value2=r)}e.requestUpdate()}function fc(e,t){const[n,r]=e.detail.values;(n!==t.filterObject.state.min||r!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[n,r],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${pe.unix(n).format(or)} - ${pe.unix(r).format(or)}`:`${n} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),n===t.filterObject.min&&r===t.filterObject.max?t.reset():t.requestUpdate()}function hc(e,t,n){const r=n.filterObject.format==="date",i=n.filterObject.state[e],s=r?pe.unix(i).format(or):i;return E`<div class="range-${t}">${s}</div>`}function dc(e){pc(-1,e),ln(e.filterObject),e.requestUpdate()}function pc(e,t){t.selectedItems=[],dr(t),Ni(t)}function Ii(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),dr(t),Ni(t)}function gc(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function yc(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&Ii(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function mc(e,t){(e.has("suggestions")||e.has("query"))&&dr(t)}function bc(e,t){const n=e.filterObject?.sort||((r,i)=>r.toString().localeCompare(i.toString(),void 0,{numeric:!0}));return t.sort(n).map(r=>r)}function dr(e){const t=(e.filterObject?.filterKeys||e.suggestions).map(r=>`${r}`);let n=t;e.query&&(n=new Bt(t,{threshold:.4}).search(e.query).map(i=>i.item)),e.filteredSuggestions=e.filterObject?.filterKeys?n:bc(e,n),e.filterObject?.filterKeys&&(e.filterObject.state=t.reduce((r,i)=>(i in r||(r[i]=void 0),r),e.filterObject.state)),e.highlightedIndex=-1}function Ni(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function vc(e){ln(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function wc(e){e.renderRoot.querySelector("#eox-map").innerHTML="",ji(e)}function xc(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function ji(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&Mc(e.geometry),r=nc(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=s=>{const o=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(o)};e.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function Mc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}class Ac extends pt{static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}#t=()=>{cc(this)};#e=t=>{t.key==="Enter"&&t.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),t.target.value="",this.#t())};reset(){lc(this)}debouncedInputHandler=tn(this.#t,500,{leading:!0});createRenderRoot(){return this}render(){return q(this.filterObject,()=>E`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--list-padding)"
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
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `)}}customElements.define("eox-itemfilter-text",Ac);function _c(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const r=n.config.aggregateResults;return t==="No category"?e.filter(i=>{const s=i[r];return Array.isArray(s)?s.filter(Boolean).length===0:!s}):e.filter(i=>{const s=i[r];if(Array.isArray(s)){if(s.filter(Boolean).length===0)return!1}else if(!s)return!1;let o;return n.filters[r]&&(o=Object.keys(n.filters[r]).filter(c=>n.filters[r].state[c])),(o?.length?o.includes(t):!0)&&Array.isArray(s)?s.includes(t):s===t})}function Cc(e,t){return E`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||$t}
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
        ${Fi(t,e)}
      </div>
    </details>
  `}function Fi(e,t){const n=e.results,r=t?e.aggregateResults(n,t):n,i=e.config,s=o=>e.selectedResult?.[i.idProperty]===o[i.idProperty]?"highlighted":$t;return _r`
    ${e.resultType==="cards"?Vt("<eox-layout fill-grid>"):Vt('<ul id="results" class="list no-space" part="results">')}
      ${no(r,o=>o.id,o=>_r`
        ${e.resultType==="cards"?Vt("<eox-layout-item"):Vt("<li")}
            class="${s(o)}"
            @click=${()=>{e.selectedResult===o?e.selectedResult=null:e.selectedResult=o,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:o}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:o}))}}
          >
            <nav id="${o.id}" class="responsive tiny-space">
              ${q(i.subTitleProperty||i.imageProperty,()=>E`
                  ${q(e.resultType==="cards",()=>Z(i.imageProperty,o)?E`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${Z(i.imageProperty,o)}"
                            />
                          `:E`
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
                          `,()=>E`
                      <i class="small">
                        ${Z(i.imageProperty,o)?E`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${Z(i.imageProperty,o)}"
                              />
                            `:E`
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
                      >${Ne(o.highlightedText||Z(i.titleProperty,o).toString())}</span
                    >
                    ${q(!!Z(i.subTitleProperty,o),()=>E`
                        <small class="subtitle no-line truncate"
                          >${Ne(Z(i.subTitleProperty,o).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>E`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      >${Ne(o.highlightedText||o[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${q(e.enableResultAction,()=>E`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:o}))}}
                  >
                    <icon class="small"
                      >${Ne(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${e.resultType==="cards"?Vt("</eox-layout>"):Vt("</ul>")}
  `}class Ec extends pt{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}constructor(){super(),this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}#t(t){return Fi(this,t)}#e(t){return Cc(t,this)}aggregateResults(t,n){return _c(t,n,this)}createRenderRoot(){return this}handleAccordion(t){ki(t,this.config,this)}#n(){const t=this.resultAggregation.filter(r=>this.aggregateResults(this.results,r).length);return this.aggregateResults(this.results,"No category").length>0&&t.push("No category"),t}render(){return E`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${q(this.results.length<1,()=>E`<small class="no-results">No matching items</small>`,()=>$t)}
          ${q(this.config.aggregateResults,()=>Qe(this.#n(),t=>E`${q(this.aggregateResults(this.results,t).length===1&&this.config.autoSpreadSingle,()=>E`<div style="margin-left: -8px">
                        ${this.#t(t)}
                      </div>`,()=>this.#e(t))}`),()=>this.#t())}
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",Ec);class Sc extends pt{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(t){mc(t,this)}#t(t){gc(t,this)}#e(t){yc(t,this)}#n(t){Ii(t,this)}reset(){dc(this)}debouncedInputHandler=tn(this.#n,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(t=>this.filterObject.state[t]?t:null).filter(t=>!!t),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const t=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow scroll":$t;return E`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${q((this.filterObject.filterKeys||this.suggestions).length>=10,()=>E`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--list-padding)"
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
          ${this.filteredSuggestions.map(r=>E`
              <li
                data-identifier="${r.toString().toLowerCase()}"
                data-title="${r}"
              >
                <label class="${t} small max">
                  <input
                    type="${t}"
                    name=${r}
                    .checked=${this.selectedItems.includes(r)}
                    @change=${()=>this.debouncedInputHandler(r)}
                    @keydown=${i=>{i.key===" "&&this.inlineMode&&this.debouncedInputHandler(r)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${r}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}customElements.define("eox-itemfilter-select",Sc);class Lc extends pt{static properties={filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}};constructor(){super(),this.filterObject={},this.tabIndex=0,this.inputHandler=this.#t.bind(this),this.debouncedInputHandler=tn(this.inputHandler,500,{leading:!1})}#t(t){fc(t,this)}#e(t,n){return hc(t,n,this)}reset(){uc(this)}createRenderRoot(){return this}render(){return q(this.filterObject,()=>E`
        <div
          style="margin-left: var(--list-padding); display: flex; gap: .5rem; align-items: center;"
        >
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
      `)}}customElements.define("eox-itemfilter-range",Lc);class $c extends pt{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){vc(this)}createRenderRoot(){return this}#t(t){xc(t,this)}render(){return q(this.filterObject,()=>E`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${Qe(["intersects","within"],t=>E`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===t||$t}"
                    value="${t}"
                    @click=${()=>this.#t(t)}
                  />
                  <span>${t} filter geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${this.filterObject.state?.geometry}"
            @filter="${t=>{this.filterObject.state.geometry=t.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial>
        </div>
      `)}}customElements.define("eox-itemfilter-spatial",$c);class Rc extends pt{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#t()}#t(){ji(this)}reset(){wc(this)}render(){return E`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",Rc);function Pc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function Bc(e,t){const{code:n,target:r}=e;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Dc(n,e.target.value??"",t))}function Dc(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}class Tc extends pt{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#t.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#t(t){Bc(t,this)}#e(t){Pc(t,this)}render(){return E`
      <span class="chip-container">
        ${Qe(this.items,t=>E`
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
    `}}customElements.define("eox-itemfilter-chips",Tc);const Oc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),ti=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var Un,ei;function kc(){if(ei)return Un;ei=1;var e=200,t="__lodash_hash_undefined__",n=1/0,r="[object Function]",i="[object GeneratorFunction]",s=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,l=typeof Lt=="object"&&Lt&&Lt.Object===Object&&Lt,c=typeof self=="object"&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function h(y,w){var C=y?y.length:0;return!!C&&m(y,w,0)>-1}function d(y,w,C,O){for(var H=y.length,G=C+-1;++G<H;)if(w(y[G],G,y))return G;return-1}function m(y,w,C){if(w!==w)return d(y,g,C);for(var O=C-1,H=y.length;++O<H;)if(y[O]===w)return O;return-1}function g(y){return y!==y}function b(y,w){return y.has(w)}function x(y,w){return y?.[w]}function S(y){var w=!1;if(y!=null&&typeof y.toString!="function")try{w=!!(y+"")}catch{}return w}function _(y){var w=-1,C=Array(y.size);return y.forEach(function(O){C[++w]=O}),C}var P=Array.prototype,R=Function.prototype,B=Object.prototype,T=u["__core-js_shared__"],j=(function(){var y=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return y?"Symbol(src)_1."+y:""})(),k=R.toString,X=B.hasOwnProperty,W=B.toString,Xt=RegExp("^"+k.call(X).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Dt=P.splice,at=ie(u,"Map"),Wt=ie(u,"Set"),F=ie(Object,"create");function U(y){var w=-1,C=y?y.length:0;for(this.clear();++w<C;){var O=y[w];this.set(O[0],O[1])}}function zt(){this.__data__=F?F(null):{}}function cn(y){return this.has(y)&&delete this.__data__[y]}function un(y){var w=this.__data__;if(F){var C=w[y];return C===t?void 0:C}return X.call(w,y)?w[y]:void 0}function fn(y){var w=this.__data__;return F?w[y]!==void 0:X.call(w,y)}function hn(y,w){var C=this.__data__;return C[y]=F&&w===void 0?t:w,this}U.prototype.clear=zt,U.prototype.delete=cn,U.prototype.get=un,U.prototype.has=fn,U.prototype.set=hn;function At(y){var w=-1,C=y?y.length:0;for(this.clear();++w<C;){var O=y[w];this.set(O[0],O[1])}}function dn(){this.__data__=[]}function pn(y){var w=this.__data__,C=Tt(w,y);if(C<0)return!1;var O=w.length-1;return C==O?w.pop():Dt.call(w,C,1),!0}function gn(y){var w=this.__data__,C=Tt(w,y);return C<0?void 0:w[C][1]}function yn(y){return Tt(this.__data__,y)>-1}function mn(y,w){var C=this.__data__,O=Tt(C,y);return O<0?C.push([y,w]):C[O][1]=w,this}At.prototype.clear=dn,At.prototype.delete=pn,At.prototype.get=gn,At.prototype.has=yn,At.prototype.set=mn;function D(y){var w=-1,C=y?y.length:0;for(this.clear();++w<C;){var O=y[w];this.set(O[0],O[1])}}function me(){this.__data__={hash:new U,map:new(at||At),string:new U}}function bn(y){return Gt(this,y).delete(y)}function lt(y){return Gt(this,y).get(y)}function be(y){return Gt(this,y).has(y)}function ve(y,w){return Gt(this,y).set(y,w),this}D.prototype.clear=me,D.prototype.delete=bn,D.prototype.get=lt,D.prototype.has=be,D.prototype.set=ve;function Ut(y){var w=-1,C=y?y.length:0;for(this.__data__=new D;++w<C;)this.add(y[w])}function we(y){return this.__data__.set(y,t),this}function xe(y){return this.__data__.has(y)}Ut.prototype.add=Ut.prototype.push=we,Ut.prototype.has=xe;function Tt(y,w){for(var C=y.length;C--;)if(Cn(y[C][0],w))return C;return-1}function vn(y){if(!Me(y)||An(y))return!1;var w=En(y)||S(y)?Xt:o;return w.test(se(y))}function wn(y,w,C){var O=-1,H=h,G=y.length,Ae=!0,it=[],ct=it;if(G>=e){var _e=xn(y);if(_e)return _(_e);Ae=!1,H=b,ct=new Ut}else ct=it;t:for(;++O<G;){var _t=y[O],Ct=_t;if(_t=_t!==0?_t:0,Ae&&Ct===Ct){for(var Ce=ct.length;Ce--;)if(ct[Ce]===Ct)continue t;it.push(_t)}else H(ct,Ct,C)||(ct!==it&&ct.push(Ct),it.push(_t))}return it}var xn=Wt&&1/_(new Wt([,-0]))[1]==n?function(y){return new Wt(y)}:Sn;function Gt(y,w){var C=y.__data__;return Mn(w)?C[typeof w=="string"?"string":"hash"]:C.map}function ie(y,w){var C=x(y,w);return vn(C)?C:void 0}function Mn(y){var w=typeof y;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?y!=="__proto__":y===null}function An(y){return!!j&&j in y}function se(y){if(y!=null){try{return k.call(y)}catch{}try{return y+""}catch{}}return""}function _n(y){return y&&y.length?wn(y):[]}function Cn(y,w){return y===w||y!==y&&w!==w}function En(y){var w=Me(y)?W.call(y):"";return w==r||w==i}function Me(y){var w=typeof y;return!!y&&(w=="object"||w=="function")}function Sn(){}return Un=_n,Un}var Ic=kc();const qi=ri(Ic);var he={exports:{}};he.exports;var ni;function Nc(){return ni||(ni=1,(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,o=2,l=9007199254740991,c="[object Arguments]",u="[object Array]",h="[object Boolean]",d="[object Date]",m="[object Error]",g="[object Function]",b="[object GeneratorFunction]",x="[object Map]",S="[object Number]",_="[object Object]",P="[object Promise]",R="[object RegExp]",B="[object Set]",T="[object String]",j="[object Symbol]",k="[object WeakMap]",X="[object ArrayBuffer]",W="[object DataView]",Xt="[object Float32Array]",Dt="[object Float64Array]",at="[object Int8Array]",Wt="[object Int16Array]",F="[object Int32Array]",U="[object Uint8Array]",zt="[object Uint8ClampedArray]",cn="[object Uint16Array]",un="[object Uint32Array]",fn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hn=/^\w*$/,At=/^\./,dn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pn=/[\\^$.*+?()[\]{}|]/g,gn=/\\(\\)?/g,yn=/^\[object .+?Constructor\]$/,mn=/^(?:0|[1-9]\d*)$/,D={};D[Xt]=D[Dt]=D[at]=D[Wt]=D[F]=D[U]=D[zt]=D[cn]=D[un]=!0,D[c]=D[u]=D[X]=D[h]=D[W]=D[d]=D[m]=D[g]=D[x]=D[S]=D[_]=D[R]=D[B]=D[T]=D[k]=!1;var me=typeof Lt=="object"&&Lt&&Lt.Object===Object&&Lt,bn=typeof self=="object"&&self&&self.Object===Object&&self,lt=me||bn||Function("return this")(),be=t&&!t.nodeType&&t,ve=be&&!0&&e&&!e.nodeType&&e,Ut=ve&&ve.exports===be,we=Ut&&me.process,xe=(function(){try{return we&&we.binding("util")}catch{}})(),Tt=xe&&xe.isTypedArray;function vn(a,f){for(var p=-1,v=a?a.length:0,A=Array(v);++p<v;)A[p]=f(a[p],p,a);return A}function wn(a,f){for(var p=-1,v=f.length,A=a.length;++p<v;)a[A+p]=f[p];return a}function xn(a,f){for(var p=-1,v=a?a.length:0;++p<v;)if(f(a[p],p,a))return!0;return!1}function Gt(a){return function(f){return f?.[a]}}function ie(a,f){for(var p=-1,v=Array(a);++p<a;)v[p]=f(p);return v}function Mn(a){return function(f){return a(f)}}function An(a,f){return a?.[f]}function se(a){var f=!1;if(a!=null&&typeof a.toString!="function")try{f=!!(a+"")}catch{}return f}function _n(a){var f=-1,p=Array(a.size);return a.forEach(function(v,A){p[++f]=[A,v]}),p}function Cn(a,f){return function(p){return a(f(p))}}function En(a){var f=-1,p=Array(a.size);return a.forEach(function(v){p[++f]=v}),p}var Me=Array.prototype,Sn=Function.prototype,y=Object.prototype,w=lt["__core-js_shared__"],C=(function(){var a=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""})(),O=Sn.toString,H=y.hasOwnProperty,G=y.toString,Ae=RegExp("^"+O.call(H).replace(pn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),it=lt.Symbol,ct=lt.Uint8Array,_e=y.propertyIsEnumerable,_t=Me.splice,Ct=it?it.isConcatSpreadable:void 0,Ce=Cn(Object.keys,Object),Ln=Kt(lt,"DataView"),oe=Kt(lt,"Map"),$n=Kt(lt,"Promise"),Rn=Kt(lt,"Set"),Pn=Kt(lt,"WeakMap"),ae=Kt(Object,"create"),Yi=kt(Ln),Xi=kt(oe),Wi=kt($n),zi=kt(Rn),Ui=kt(Pn),Ee=it?it.prototype:void 0,Bn=Ee?Ee.valueOf:void 0,pr=Ee?Ee.toString:void 0;function Ot(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var v=a[f];this.set(v[0],v[1])}}function Gi(){this.__data__=ae?ae(null):{}}function Ki(a){return this.has(a)&&delete this.__data__[a]}function Vi(a){var f=this.__data__;if(ae){var p=f[a];return p===i?void 0:p}return H.call(f,a)?f[a]:void 0}function Ji(a){var f=this.__data__;return ae?f[a]!==void 0:H.call(f,a)}function Zi(a,f){var p=this.__data__;return p[a]=ae&&f===void 0?i:f,this}Ot.prototype.clear=Gi,Ot.prototype.delete=Ki,Ot.prototype.get=Vi,Ot.prototype.has=Ji,Ot.prototype.set=Zi;function yt(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var v=a[f];this.set(v[0],v[1])}}function Qi(){this.__data__=[]}function ts(a){var f=this.__data__,p=Le(f,a);if(p<0)return!1;var v=f.length-1;return p==v?f.pop():_t.call(f,p,1),!0}function es(a){var f=this.__data__,p=Le(f,a);return p<0?void 0:f[p][1]}function ns(a){return Le(this.__data__,a)>-1}function rs(a,f){var p=this.__data__,v=Le(p,a);return v<0?p.push([a,f]):p[v][1]=f,this}yt.prototype.clear=Qi,yt.prototype.delete=ts,yt.prototype.get=es,yt.prototype.has=ns,yt.prototype.set=rs;function mt(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var v=a[f];this.set(v[0],v[1])}}function is(){this.__data__={hash:new Ot,map:new(oe||yt),string:new Ot}}function ss(a){return $e(this,a).delete(a)}function os(a){return $e(this,a).get(a)}function as(a){return $e(this,a).has(a)}function ls(a,f){return $e(this,a).set(a,f),this}mt.prototype.clear=is,mt.prototype.delete=ss,mt.prototype.get=os,mt.prototype.has=as,mt.prototype.set=ls;function Se(a){var f=-1,p=a?a.length:0;for(this.__data__=new mt;++f<p;)this.add(a[f])}function cs(a){return this.__data__.set(a,i),this}function us(a){return this.__data__.has(a)}Se.prototype.add=Se.prototype.push=cs,Se.prototype.has=us;function bt(a){this.__data__=new yt(a)}function fs(){this.__data__=new yt}function hs(a){return this.__data__.delete(a)}function ds(a){return this.__data__.get(a)}function ps(a){return this.__data__.has(a)}function gs(a,f){var p=this.__data__;if(p instanceof yt){var v=p.__data__;if(!oe||v.length<n-1)return v.push([a,f]),this;p=this.__data__=new mt(v)}return p.set(a,f),this}bt.prototype.clear=fs,bt.prototype.delete=hs,bt.prototype.get=ds,bt.prototype.has=ps,bt.prototype.set=gs;function ys(a,f){var p=vt(a)||On(a)?ie(a.length,String):[],v=p.length,A=!!v;for(var M in a)H.call(a,M)&&!(A&&(M=="length"||br(M,v)))&&p.push(M);return p}function Le(a,f){for(var p=a.length;p--;)if(xr(a[p][0],f))return p;return-1}var ms=Ts(ws);function bs(a,f,p,v,A){var M=-1,$=a.length;for(p||(p=Fs),A||(A=[]);++M<$;){var I=a[M];p(I)?wn(A,I):A[A.length]=I}return A}var vs=Os();function ws(a,f){return a&&vs(a,f,Oe)}function gr(a,f){f=Re(f,a)?[f]:yr(f);for(var p=0,v=f.length;a!=null&&p<v;)a=a[Pe(f[p++])];return p&&p==v?a:void 0}function xs(a){return G.call(a)}function Ms(a,f){return a!=null&&f in Object(a)}function Dn(a,f,p,v,A){return a===f?!0:a==null||f==null||!De(a)&&!Te(f)?a!==a&&f!==f:As(a,f,Dn,p,v,A)}function As(a,f,p,v,A,M){var $=vt(a),I=vt(f),N=u,Y=u;$||(N=Et(a),N=N==c?_:N),I||(Y=Et(f),Y=Y==c?_:Y);var K=N==_&&!se(a),V=Y==_&&!se(f),z=N==Y;if(z&&!K)return M||(M=new bt),$||Gs(a)?mr(a,f,p,v,A,M):ks(a,f,N,p,v,A,M);if(!(A&o)){var et=K&&H.call(a,"__wrapped__"),nt=V&&H.call(f,"__wrapped__");if(et||nt){var St=et?a.value():a,wt=nt?f.value():f;return M||(M=new bt),p(St,wt,v,A,M)}}return z?(M||(M=new bt),Is(a,f,p,v,A,M)):!1}function _s(a,f,p,v){var A=p.length,M=A;if(a==null)return!M;for(a=Object(a);A--;){var $=p[A];if($[2]?$[1]!==a[$[0]]:!($[0]in a))return!1}for(;++A<M;){$=p[A];var I=$[0],N=a[I],Y=$[1];if($[2]){if(N===void 0&&!(I in a))return!1}else{var K=new bt,V;if(!(V===void 0?Dn(Y,N,v,s|o,K):V))return!1}}return!0}function Cs(a){if(!De(a)||Hs(a))return!1;var f=Mr(a)||se(a)?Ae:yn;return f.test(kt(a))}function Es(a){return Te(a)&&kn(a.length)&&!!D[G.call(a)]}function Ss(a){return typeof a=="function"?a:a==null?Zs:typeof a=="object"?vt(a)?Ps(a[0],a[1]):Rs(a):Qs(a)}function Ls(a){if(!Ys(a))return Ce(a);var f=[];for(var p in Object(a))H.call(a,p)&&p!="constructor"&&f.push(p);return f}function $s(a,f){var p=-1,v=Be(a)?Array(a.length):[];return ms(a,function(A,M,$){v[++p]=f(A,M,$)}),v}function Rs(a){var f=Ns(a);return f.length==1&&f[0][2]?wr(f[0][0],f[0][1]):function(p){return p===a||_s(p,a,f)}}function Ps(a,f){return Re(a)&&vr(f)?wr(Pe(a),f):function(p){var v=Vs(p,a);return v===void 0&&v===f?Js(p,a):Dn(f,v,void 0,s|o)}}function Bs(a){return function(f){return gr(f,a)}}function Ds(a){if(typeof a=="string")return a;if(In(a))return pr?pr.call(a):"";var f=a+"";return f=="0"&&1/a==-1/0?"-0":f}function yr(a){return vt(a)?a:Xs(a)}function Ts(a,f){return function(p,v){if(p==null)return p;if(!Be(p))return a(p,v);for(var A=p.length,M=-1,$=Object(p);++M<A&&v($[M],M,$)!==!1;);return p}}function Os(a){return function(f,p,v){for(var A=-1,M=Object(f),$=v(f),I=$.length;I--;){var N=$[++A];if(p(M[N],N,M)===!1)break}return f}}function mr(a,f,p,v,A,M){var $=A&o,I=a.length,N=f.length;if(I!=N&&!($&&N>I))return!1;var Y=M.get(a);if(Y&&M.get(f))return Y==f;var K=-1,V=!0,z=A&s?new Se:void 0;for(M.set(a,f),M.set(f,a);++K<I;){var et=a[K],nt=f[K];if(v)var St=$?v(nt,et,K,f,a,M):v(et,nt,K,a,f,M);if(St!==void 0){if(St)continue;V=!1;break}if(z){if(!xn(f,function(wt,It){if(!z.has(It)&&(et===wt||p(et,wt,v,A,M)))return z.add(It)})){V=!1;break}}else if(!(et===nt||p(et,nt,v,A,M))){V=!1;break}}return M.delete(a),M.delete(f),V}function ks(a,f,p,v,A,M,$){switch(p){case W:if(a.byteLength!=f.byteLength||a.byteOffset!=f.byteOffset)return!1;a=a.buffer,f=f.buffer;case X:return!(a.byteLength!=f.byteLength||!v(new ct(a),new ct(f)));case h:case d:case S:return xr(+a,+f);case m:return a.name==f.name&&a.message==f.message;case R:case T:return a==f+"";case x:var I=_n;case B:var N=M&o;if(I||(I=En),a.size!=f.size&&!N)return!1;var Y=$.get(a);if(Y)return Y==f;M|=s,$.set(a,f);var K=mr(I(a),I(f),v,A,M,$);return $.delete(a),K;case j:if(Bn)return Bn.call(a)==Bn.call(f)}return!1}function Is(a,f,p,v,A,M){var $=A&o,I=Oe(a),N=I.length,Y=Oe(f),K=Y.length;if(N!=K&&!$)return!1;for(var V=N;V--;){var z=I[V];if(!($?z in f:H.call(f,z)))return!1}var et=M.get(a);if(et&&M.get(f))return et==f;var nt=!0;M.set(a,f),M.set(f,a);for(var St=$;++V<N;){z=I[V];var wt=a[z],It=f[z];if(v)var Ar=$?v(It,wt,z,f,a,M):v(wt,It,z,a,f,M);if(!(Ar===void 0?wt===It||p(wt,It,v,A,M):Ar)){nt=!1;break}St||(St=z=="constructor")}if(nt&&!St){var ke=a.constructor,Ie=f.constructor;ke!=Ie&&"constructor"in a&&"constructor"in f&&!(typeof ke=="function"&&ke instanceof ke&&typeof Ie=="function"&&Ie instanceof Ie)&&(nt=!1)}return M.delete(a),M.delete(f),nt}function $e(a,f){var p=a.__data__;return qs(f)?p[typeof f=="string"?"string":"hash"]:p.map}function Ns(a){for(var f=Oe(a),p=f.length;p--;){var v=f[p],A=a[v];f[p]=[v,A,vr(A)]}return f}function Kt(a,f){var p=An(a,f);return Cs(p)?p:void 0}var Et=xs;(Ln&&Et(new Ln(new ArrayBuffer(1)))!=W||oe&&Et(new oe)!=x||$n&&Et($n.resolve())!=P||Rn&&Et(new Rn)!=B||Pn&&Et(new Pn)!=k)&&(Et=function(a){var f=G.call(a),p=f==_?a.constructor:void 0,v=p?kt(p):void 0;if(v)switch(v){case Yi:return W;case Xi:return x;case Wi:return P;case zi:return B;case Ui:return k}return f});function js(a,f,p){f=Re(f,a)?[f]:yr(f);for(var v,A=-1,$=f.length;++A<$;){var M=Pe(f[A]);if(!(v=a!=null&&p(a,M)))break;a=a[M]}if(v)return v;var $=a?a.length:0;return!!$&&kn($)&&br(M,$)&&(vt(a)||On(a))}function Fs(a){return vt(a)||On(a)||!!(Ct&&a&&a[Ct])}function br(a,f){return f=f??l,!!f&&(typeof a=="number"||mn.test(a))&&a>-1&&a%1==0&&a<f}function Re(a,f){if(vt(a))return!1;var p=typeof a;return p=="number"||p=="symbol"||p=="boolean"||a==null||In(a)?!0:hn.test(a)||!fn.test(a)||f!=null&&a in Object(f)}function qs(a){var f=typeof a;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?a!=="__proto__":a===null}function Hs(a){return!!C&&C in a}function Ys(a){var f=a&&a.constructor,p=typeof f=="function"&&f.prototype||y;return a===p}function vr(a){return a===a&&!De(a)}function wr(a,f){return function(p){return p==null?!1:p[a]===f&&(f!==void 0||a in Object(p))}}var Xs=Tn(function(a){a=Ks(a);var f=[];return At.test(a)&&f.push(""),a.replace(dn,function(p,v,A,M){f.push(A?M.replace(gn,"$1"):v||p)}),f});function Pe(a){if(typeof a=="string"||In(a))return a;var f=a+"";return f=="0"&&1/a==-1/0?"-0":f}function kt(a){if(a!=null){try{return O.call(a)}catch{}try{return a+""}catch{}}return""}function Ws(a,f){return bs(zs(a,f))}function zs(a,f){var p=vt(a)?vn:$s;return p(a,Ss(f))}function Tn(a,f){if(typeof a!="function"||f&&typeof f!="function")throw new TypeError(r);var p=function(){var v=arguments,A=f?f.apply(this,v):v[0],M=p.cache;if(M.has(A))return M.get(A);var $=a.apply(this,v);return p.cache=M.set(A,$),$};return p.cache=new(Tn.Cache||mt),p}Tn.Cache=mt;function xr(a,f){return a===f||a!==a&&f!==f}function On(a){return Us(a)&&H.call(a,"callee")&&(!_e.call(a,"callee")||G.call(a)==c)}var vt=Array.isArray;function Be(a){return a!=null&&kn(a.length)&&!Mr(a)}function Us(a){return Te(a)&&Be(a)}function Mr(a){var f=De(a)?G.call(a):"";return f==g||f==b}function kn(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=l}function De(a){var f=typeof a;return!!a&&(f=="object"||f=="function")}function Te(a){return!!a&&typeof a=="object"}function In(a){return typeof a=="symbol"||Te(a)&&G.call(a)==j}var Gs=Tt?Mn(Tt):Es;function Ks(a){return a==null?"":Ds(a)}function Vs(a,f,p){var v=a==null?void 0:gr(a,f);return v===void 0?p:v}function Js(a,f){return a!=null&&js(a,f,Ms)}function Oe(a){return Be(a)?ys(a):Ls(a)}function Zs(a){return a}function Qs(a){return Re(a)?Gt(Pe(a)):Bs(a)}e.exports=Ws})(he,he.exports)),he.exports}var jc=Nc();const Hi=ri(jc);function Fc(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(s=>{const o={},l=u=>s.format==="date"?pe(u).unix():parseFloat(u);t.forEach(u=>{if(s.type==="range"){const h=Z(s.key,u);if(Array.isArray(h)){const d=[l(h[0]),l(h[1])];o.min=o.min!==void 0?Math.min(o.min,d[0]):d[0],o.max=o.max!==void 0?Math.max(o.max,d[1]):d[1]}else{const d=l(h);o.min=o.min!==void 0?Math.min(o.min,d):d,o.max=o.max!==void 0?Math.max(o.max,d):d}return}Array.isArray(u[s.key])?u[s.key].forEach(h=>{o[h]=void 0}):s.type==="spatial"?(o.geometry=s?.state?.geometry||void 0,o.geometry&&(s.stringifiedState=o.geometry.type),o.mode=s.mode||"intersects"):s.key?.includes(".")?qi(Hi(n.items,s.key)).filter(h=>h).forEach(h=>{o[h]=void 0}):o[u[s.key]]=void 0});const c=s.key||s.keys.join("|");n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:s.state?Object.values(s.state).some(u=>u):void 0,key:c},s.type==="range"?{min:o.min,max:o.max,format:s.format}:{},s),n.filters[c].state=Object.assign({},o,s.state)}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((s,o)=>s.concat(o[e.aggregateResults]),[]))).filter(s=>s).sort((s,o)=>s.localeCompare(o)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(o=>{i.includes(o)||i.push(o)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),tc(t,Object.assign({keys:i},e.fuseConfig)),r}async function qc(e,t,n){let r;n.externalFilter?r=await ic(t,n.filters,e):r=await ec(t,n.filters,e),n.results=n.sortResults(r)}function Hc(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return E`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${t}
        .filterObject=${e}
        .results=${n.results}
        .unstyled=${n.unstyled}
        @result=${n.updateResult}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return E`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${qi(Hi(n.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return E`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return E`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return E``}}function Yc(e,t){return[...e].sort((n,r)=>Z(t.titleProperty,n).toString().localeCompare(Z(t.titleProperty,r)).toString())}function Xc(e,t,n){return E`
    ${q(e.dirty,()=>E`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":E`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <div class="tooltip left">Reset filter</div>
              `}
        </button>
      `)}
  `}function Wc(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}class zc extends pt{static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}#t=[];#e=[];#n=Oc;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=tn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}apply(){this.#t=Fc(this.#n,this.#e,this),this.search()}async searchHandler(){await qc(this.#n,this.#e,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(t){return Yc(t,this.#n)}#i(t,n){return Hc(t,n,this)}#r(t,n){return Xc(t,n,this)}resetFilters(){Wc(this)}firstUpdated(t){let n={};ti.map(r=>{n={...n,[r]:this[r]}}),this.#n=n,this.#e=this.items?.map((r,i)=>Object.assign({id:r[this.idProperty]||`item-${i}`},r))||[],this.apply()}updated(t){ti.map(n=>t.has(n)?(this.firstUpdated(void 0),!0):!1)}updateResult(t){this.selectedResult=t.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(t){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:t.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(t){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:t.detail,bubbles:!0,composed:!0}))}emitResultAction(t){this.dispatchEvent(new CustomEvent("click:result-action",{detail:t.detail,bubbles:!0,composed:!0}))}render(){return E`
      <style>
        ${io}
        ${!this.unstyled&&ar}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":$t}
        @submit="${t=>t.preventDefault()}"
      >
        ${q(this.filterProperties,()=>E`
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
                  ${q(!this.inlineMode,()=>E`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${q(!this.inlineMode&&this.#n.filterProperties&&!this.inlineMode&&this.#n.filterProperties&&sr(this.filters),()=>E`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?$t:E`
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
                      ${Qe(Object.values(this.filters),(t,n)=>E` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${t}
                              @details-toggled=${r=>ki(r,this.#n,this)}
                              data-details="${t.key}"
                            >
                              ${this.#r(t,Qr(n,1))}
                              ${this.#i(t,Qr(n,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${q(this.#n?.showResults&&this.results,()=>E`
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
    `}}customElements.define("eox-itemfilter",zc);export{zc as EOxItemFilter};
