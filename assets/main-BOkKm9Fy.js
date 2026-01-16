import{a as Ys,i as gt,E as $t,x as S}from"./addCommonStyleSheet-Yq-7s86-.js";import{o as Ze}from"./map-Bv-shLAs.js";import{n as F}from"./when-CI7b_ccM.js";import{e as Xs}from"./style-DKU08UVs.js";import{d as ge}from"./dayjs.min-ang4_BnA.js";import{_ as Qe}from"./index-eUEnCr0o.js";import{s as Kt,u as xr}from"./static-CRB4TPUT.js";import{c as zs}from"./repeat-CWCsuY6g.js";import{o as Fe}from"./unsafe-html-9XwyaUtW.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import{o as Us}from"./orient2d-DArCjZZA.js";import{f as ee,a as nt,b as fe,m as Ws,l as ye,i as Gs,d as Zt,r as Ks,c as Mr}from"./index-CxojoGlr.js";import{q as Et,v as Wr}from"./templates-DpRAJmv9.js";import"./directive-CwRn8Fwj.js";import"./directive-helpers-BBe88Per.js";const Vs=`
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
`;Ys();const ir=`
${Xs}
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
`;class Js extends gt{static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}constructor(){super(),this.filterObject={},this.unstyled=!1}#t(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))}render(){return S`
      <style>
        ${!this.unstyled&&ir}
      </style>

      ${F(this.filterObject.featured,()=>S`<slot name="filter"></slot>`,()=>S`<details
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
    `}}customElements.define("eox-itemfilter-expandcontainer",Js);function Mt(e){return Array.isArray?Array.isArray(e):Vr(e)==="[object Array]"}function Zs(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Qs(e){return e==null?"":Zs(e)}function ut(e){return typeof e=="string"}function Gr(e){return typeof e=="number"}function to(e){return e===!0||e===!1||eo(e)&&Vr(e)=="[object Boolean]"}function Kr(e){return typeof e=="object"}function eo(e){return Kr(e)&&e!==null}function Z(e){return e!=null}function In(e){return!e.trim().length}function Vr(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const no="Incorrect 'index' type",ro=e=>`Invalid value for key ${e}`,io=e=>`Pattern length exceeds max of ${e}.`,so=e=>`Missing ${e} property in key`,oo=e=>`Property 'weight' in key '${e}' must be a positive integer`,Ar=Object.prototype.hasOwnProperty;class ao{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=Jr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Jr(e){let t=null,n=null,r=null,i=1,s=null;if(ut(e)||Mt(e))r=e,t=_r(e),n=Un(e);else{if(!Ar.call(e,"name"))throw new Error(so("name"));const o=e.name;if(r=o,Ar.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(oo(o));t=_r(o),n=Un(o),s=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:s}}function _r(e){return Mt(e)?e:e.split(".")}function Un(e){return Mt(e)?e.join("."):e}function lo(e,t){let n=[],r=!1;const i=(s,o,l)=>{if(Z(s))if(!o[l])n.push(s);else{let u=o[l];const c=s[u];if(!Z(c))return;if(l===o.length-1&&(ut(c)||Gr(c)||to(c)))n.push(Qs(c));else if(Mt(c)){r=!0;for(let h=0,d=c.length;h<d;h+=1)i(c[h],o,l+1)}else o.length&&i(c,o,l+1)}};return i(e,ut(t)?t.split("."):t,0),r?n:n[0]}const co={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},uo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},fo={location:0,threshold:.6,distance:100},ho={useExtendedSearch:!1,getFn:lo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var L={...uo,...co,...fo,...ho};const po=/[^ ]+/g;function go(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const s=i.match(po).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*e),l=parseFloat(Math.round(o*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class sr{constructor({getFn:t=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){this.norm=go(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ut(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();ut(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!Z(t)||In(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let o=i.getFn?i.getFn(t):this.getFn(t,i.path);if(Z(o)){if(Mt(o)){let l=[];const u=[{nestedArrIndex:-1,value:o}];for(;u.length;){const{nestedArrIndex:c,value:h}=u.pop();if(Z(h))if(ut(h)&&!In(h)){let d={v:h,i:c,n:this.norm.get(h)};l.push(d)}else Mt(h)&&h.forEach((d,m)=>{u.push({nestedArrIndex:m,value:d})})}r.$[s]=l}else if(ut(o)&&!In(o)){let l={v:o,n:this.norm.get(o)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Zr(e,t,{getFn:n=L.getFn,fieldNormWeight:r=L.fieldNormWeight}={}){const i=new sr({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(Jr)),i.setSources(t),i.create(),i}function yo(e,{getFn:t=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){const{keys:r,records:i}=e,s=new sr({getFn:t,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function qe(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=L.distance,ignoreLocation:s=L.ignoreLocation}={}){const o=t/e.length;if(s)return o;const l=Math.abs(r-n);return i?o+l/i:l?1:o}function mo(e=[],t=L.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let o=e.length;s<o;s+=1){let l=e[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[s-1]&&s-r>=t&&n.push([r,s-1]),n}const jt=32;function bo(e,t,n,{location:r=L.location,distance:i=L.distance,threshold:s=L.threshold,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,includeMatches:u=L.includeMatches,ignoreLocation:c=L.ignoreLocation}={}){if(t.length>jt)throw new Error(io(jt));const h=t.length,d=e.length,m=Math.max(0,Math.min(r,d));let g=s,b=m;const x=l>1||u,$=x?Array(d):[];let _;for(;(_=e.indexOf(t,b))>-1;){let O=qe(t,{currentLocation:_,expectedLocation:m,distance:i,ignoreLocation:c});if(g=Math.min(O,g),b=_+h,x){let X=0;for(;X<h;)$[_+X]=1,X+=1}}b=-1;let R=[],B=1,P=h+d;const T=1<<h-1;for(let O=0;O<h;O+=1){let X=0,z=P;for(;X<z;)qe(t,{errors:O,currentLocation:m+z,expectedLocation:m,distance:i,ignoreLocation:c})<=g?X=z:P=z,z=Math.floor((P-X)/2+X);P=z;let Yt=Math.max(1,m-z+1),Dt=o?d:Math.min(m+z,d)+h,at=Array(Dt+2);at[Dt+1]=(1<<O)-1;for(let j=Dt;j>=Yt;j-=1){let W=j-1,zt=n[e.charAt(W)];if(x&&($[W]=+!!zt),at[j]=(at[j+1]<<1|1)&zt,O&&(at[j]|=(R[j+1]|R[j])<<1|1|R[j+1]),at[j]&T&&(B=qe(t,{errors:O,currentLocation:W,expectedLocation:m,distance:i,ignoreLocation:c}),B<=g)){if(g=B,b=W,b<=m)break;Yt=Math.max(1,2*m-b)}}if(qe(t,{errors:O+1,currentLocation:m,expectedLocation:m,distance:i,ignoreLocation:c})>g)break;R=at}const q={isMatch:b>=0,score:Math.max(.001,B)};if(x){const O=mo($,l);O.length?u&&(q.indices=O):q.isMatch=!1}return q}function vo(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}const Ge=String.prototype.normalize?(e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(e=>e);class Qr{constructor(t,{location:n=L.location,threshold:r=L.threshold,distance:i=L.distance,includeMatches:s=L.includeMatches,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:u=L.isCaseSensitive,ignoreDiacritics:c=L.ignoreDiacritics,ignoreLocation:h=L.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:c,ignoreLocation:h},t=u?t:t.toLowerCase(),t=c?Ge(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const d=(g,b)=>{this.chunks.push({pattern:g,alphabet:vo(g),startIndex:b})},m=this.pattern.length;if(m>jt){let g=0;const b=m%jt,x=m-b;for(;g<x;)d(this.pattern.substr(g,jt),g),g+=jt;if(b){const $=m-jt;d(this.pattern.substr($),$)}}else d(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(t=n?t:t.toLowerCase(),t=r?Ge(t):t,this.pattern===t){let x={isMatch:!0,score:0};return i&&(x.indices=[[0,t.length-1]]),x}const{location:s,distance:o,threshold:l,findAllMatches:u,minMatchCharLength:c,ignoreLocation:h}=this.options;let d=[],m=0,g=!1;this.chunks.forEach(({pattern:x,alphabet:$,startIndex:_})=>{const{isMatch:R,score:B,indices:P}=bo(t,x,$,{location:s+_,distance:o,threshold:l,findAllMatches:u,minMatchCharLength:c,includeMatches:i,ignoreLocation:h});R&&(g=!0),m+=B,R&&P&&(d=[...d,...P])});let b={isMatch:g,score:g?m/this.chunks.length:1};return g&&i&&(b.indices=d),b}}class Pt{constructor(t){this.pattern=t}static isMultiMatch(t){return Cr(t,this.multiRegex)}static isSingleMatch(t){return Cr(t,this.singleRegex)}search(){}}function Cr(e,t){const n=e.match(t);return n?n[1]:null}class wo extends Pt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class xo extends Pt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class Mo extends Pt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ao extends Pt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class _o extends Pt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Co extends Pt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class ti extends Pt{constructor(t,{location:n=L.location,threshold:r=L.threshold,distance:i=L.distance,includeMatches:s=L.includeMatches,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:u=L.isCaseSensitive,ignoreDiacritics:c=L.ignoreDiacritics,ignoreLocation:h=L.ignoreLocation}={}){super(t),this._bitapSearch=new Qr(t,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:c,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class ei extends Pt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],s=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const Wn=[wo,ei,Mo,Ao,Co,_o,xo,ti],Sr=Wn.length,So=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Lo="|";function Eo(e,t={}){return e.split(Lo).map(n=>{let r=n.trim().split(So).filter(s=>s&&!!s.trim()),i=[];for(let s=0,o=r.length;s<o;s+=1){const l=r[s];let u=!1,c=-1;for(;!u&&++c<Sr;){const h=Wn[c];let d=h.isMultiMatch(l);d&&(i.push(new h(d,t)),u=!0)}if(!u)for(c=-1;++c<Sr;){const h=Wn[c];let d=h.isSingleMatch(l);if(d){i.push(new h(d,t));break}}}return i})}const $o=new Set([ti.type,ei.type]);class Bo{constructor(t,{isCaseSensitive:n=L.isCaseSensitive,ignoreDiacritics:r=L.ignoreDiacritics,includeMatches:i=L.includeMatches,minMatchCharLength:s=L.minMatchCharLength,ignoreLocation:o=L.ignoreLocation,findAllMatches:l=L.findAllMatches,location:u=L.location,threshold:c=L.threshold,distance:h=L.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:s,findAllMatches:l,ignoreLocation:o,location:u,threshold:c,distance:h},t=n?t:t.toLowerCase(),t=r?Ge(t):t,this.pattern=t,this.query=Eo(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:s}=this.options;t=i?t:t.toLowerCase(),t=s?Ge(t):t;let o=0,l=[],u=0;for(let c=0,h=n.length;c<h;c+=1){const d=n[c];l.length=0,o=0;for(let m=0,g=d.length;m<g;m+=1){const b=d[m],{isMatch:x,indices:$,score:_}=b.search(t);if(x){if(o+=1,u+=_,r){const R=b.constructor.type;$o.has(R)?l=[...l,...$]:l.push($)}}else{u=0,o=0,l.length=0;break}}if(o){let m={isMatch:!0,score:u/o};return r&&(m.indices=l),m}}return{isMatch:!1,score:1}}}const Gn=[];function Po(...e){Gn.push(...e)}function Kn(e,t){for(let n=0,r=Gn.length;n<r;n+=1){let i=Gn[n];if(i.condition(e,t))return new i(e,t)}return new Qr(e,t)}const Ke={AND:"$and",OR:"$or"},Vn={PATH:"$path",PATTERN:"$val"},Jn=e=>!!(e[Ke.AND]||e[Ke.OR]),Ro=e=>!!e[Vn.PATH],Do=e=>!Mt(e)&&Kr(e)&&!Jn(e),Lr=e=>({[Ke.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function ni(e,t,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const o=Ro(i);if(!o&&s.length>1&&!Jn(i))return r(Lr(i));if(Do(i)){const u=o?i[Vn.PATH]:s[0],c=o?i[Vn.PATTERN]:i[u];if(!ut(c))throw new Error(ro(u));const h={keyId:Un(u),pattern:c};return n&&(h.searcher=Kn(c,t)),h}let l={children:[],operator:s[0]};return s.forEach(u=>{const c=i[u];Mt(c)&&c.forEach(h=>{l.children.push(r(h))})}),l};return Jn(e)||(e=Lr(e)),r(e)}function To(e,{ignoreFieldNorm:t=L.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:o})=>{const l=i?i.weight:null;r*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(t?1:s))}),n.score=r})}function ko(e,t){const n=e.matches;t.matches=[],Z(n)&&n.forEach(r=>{if(!Z(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let o={indices:i,value:s};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),t.matches.push(o)})}function Oo(e,t){t.score=e.score}function Io(e,t,{includeMatches:n=L.includeMatches,includeScore:r=L.includeScore}={}){const i=[];return n&&i.push(ko),r&&i.push(Oo),e.map(s=>{const{idx:o}=s,l={item:t[o],refIndex:o};return i.length&&i.forEach(u=>{u(s,l)}),l})}class Rt{constructor(t,n={},r){this.options={...L,...n},this.options.useExtendedSearch,this._keyStore=new ao(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof sr))throw new Error(no);this._myIndex=n||Zr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Z(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];t(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:o,ignoreFieldNorm:l}=this.options;let u=ut(t)?ut(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return To(u,{ignoreFieldNorm:l}),s&&u.sort(o),Gr(n)&&n>-1&&(u=u.slice(0,n)),Io(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=Kn(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:o,n:l})=>{if(!Z(s))return;const{isMatch:u,score:c,indices:h}=n.searchIn(s);u&&i.push({item:s,idx:o,matches:[{score:c,value:s,norm:l,indices:h}]})}),i}_searchLogical(t){const n=ni(t,this.options),r=(l,u,c)=>{if(!l.children){const{keyId:d,searcher:m}=l,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(u,d),searcher:m});return g&&g.length?[{idx:c,item:u,matches:g}]:[]}const h=[];for(let d=0,m=l.children.length;d<m;d+=1){const g=l.children[d],b=r(g,u,c);if(b.length)h.push(...b);else if(l.operator===Ke.AND)return[]}return h},i=this._myIndex.records,s={},o=[];return i.forEach(({$:l,i:u})=>{if(Z(l)){let c=r(n,l,u);c.length&&(s[u]||(s[u]={idx:u,item:l,matches:[]},o.push(s[u])),c.forEach(({matches:h})=>{s[u].matches.push(...h)}))}}),o}_searchObjectList(t){const n=Kn(t,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:o,i:l})=>{if(!Z(o))return;let u=[];r.forEach((c,h)=>{u.push(...this._findMatches({key:c,value:o[h],searcher:n}))}),u.length&&s.push({idx:l,item:o,matches:u})}),s}_findMatches({key:t,value:n,searcher:r}){if(!Z(n))return[];let i=[];if(Mt(n))n.forEach(({v:s,i:o,n:l})=>{if(!Z(s))return;const{isMatch:u,score:c,indices:h}=r.searchIn(s);u&&i.push({score:c,key:t,value:s,idx:o,norm:l,indices:h})});else{const{v:s,n:o}=n,{isMatch:l,score:u,indices:c}=r.searchIn(s);l&&i.push({score:u,key:t,value:s,norm:o,indices:c})}return i}}Rt.version="7.1.0";Rt.createIndex=Zr;Rt.parseIndex=yo;Rt.config=L;Rt.parseQuery=ni;Po(Bo);function ri(e,t){const n=new Rt(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const r=e.target.value,s=n.search(r).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(t.filters).forEach(o=>{t.querySelector(`[data-details="${o}"]`).parentElement.style.display=s.includes(o)||!r?"":"none"})}function No(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const Zn=Math.min,Qt=Math.max,Ve=Math.round,He=Math.floor,ht=e=>({x:e,y:e});function ii(e){return e.split("-")[0]}function jo(e){return e.split("-")[1]}function Fo(e){return e==="x"?"y":"x"}function qo(e){return e==="y"?"height":"width"}const Ho=new Set(["top","bottom"]);function si(e){return Ho.has(ii(e))?"y":"x"}function Yo(e){return Fo(si(e))}function oi(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Er(e,t,n){let{reference:r,floating:i}=e;const s=si(t),o=Yo(t),l=qo(o),u=ii(t),c=s==="y",h=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,m=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-i.width,y:d};break;default:g={x:r.x,y:r.y}}switch(jo(t)){case"start":g[o]-=m*(n&&c?-1:1);break;case"end":g[o]+=m*(n&&c?-1:1);break}return g}const Xo=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,l=s.filter(Boolean),u=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Er(c,r,u),m=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:$,fn:_}=l[x],{x:R,y:B,data:P,reset:T}=await _({x:h,y:d,initialPlacement:r,placement:m,strategy:i,middlewareData:g,rects:c,platform:o,elements:{reference:e,floating:t}});h=R??h,d=B??d,g={...g,[$]:{...g[$],...P}},T&&b<=50&&(b++,typeof T=="object"&&(T.placement&&(m=T.placement),T.rects&&(c=T.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):T.rects),{x:h,y:d}=Er(c,m,u)),x=-1)}return{x:h,y:d,placement:m,strategy:i,middlewareData:g}};function tn(){return typeof window<"u"}function ie(e){return ai(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yt(e){var t;return(t=(ai(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ai(e){return tn()?e instanceof Node||e instanceof Q(e).Node:!1}function st(e){return tn()?e instanceof Element||e instanceof Q(e).Element:!1}function pt(e){return tn()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function $r(e){return!tn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}const zo=new Set(["inline","contents"]);function be(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ot(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!zo.has(i)}const Uo=new Set(["table","td","th"]);function Wo(e){return Uo.has(ie(e))}const Go=[":popover-open",":modal"];function en(e){return Go.some(t=>{try{return e.matches(t)}catch{return!1}})}const Ko=["transform","translate","scale","rotate","perspective"],Vo=["transform","translate","scale","rotate","perspective","filter"],Jo=["paint","layout","strict","content"];function or(e){const t=ar(),n=st(e)?ot(e):e;return Ko.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Vo.some(r=>(n.willChange||"").includes(r))||Jo.some(r=>(n.contain||"").includes(r))}function Zo(e){let t=Bt(e);for(;pt(t)&&!ne(t);){if(or(t))return t;if(en(t))return null;t=Bt(t)}return null}function ar(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Qo=new Set(["html","body","#document"]);function ne(e){return Qo.has(ie(e))}function ot(e){return Q(e).getComputedStyle(e)}function nn(e){return st(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Bt(e){if(ie(e)==="html")return e;const t=e.assignedSlot||e.parentNode||$r(e)&&e.host||yt(e);return $r(t)?t.host:t}function li(e){const t=Bt(e);return ne(t)?e.ownerDocument?e.ownerDocument.body:e.body:pt(t)&&be(t)?t:li(t)}function me(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=li(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),o=Q(i);if(s){const l=Qn(o);return t.concat(o,o.visualViewport||[],be(i)?i:[],l&&n?me(l):[])}return t.concat(i,me(i,[],n))}function Qn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ci(e){const t=ot(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=pt(e),s=i?e.offsetWidth:n,o=i?e.offsetHeight:r,l=Ve(n)!==s||Ve(r)!==o;return l&&(n=s,r=o),{width:n,height:r,$:l}}function lr(e){return st(e)?e:e.contextElement}function te(e){const t=lr(e);if(!pt(t))return ht(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:s}=ci(t);let o=(s?Ve(n.width):n.width)/r,l=(s?Ve(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const ta=ht(0);function ui(e){const t=Q(e);return!ar()||!t.visualViewport?ta:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ea(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Q(e)?!1:t}function qt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=lr(e);let o=ht(1);t&&(r?st(r)&&(o=te(r)):o=te(e));const l=ea(s,n,r)?ui(s):ht(0);let u=(i.left+l.x)/o.x,c=(i.top+l.y)/o.y,h=i.width/o.x,d=i.height/o.y;if(s){const m=Q(s),g=r&&st(r)?Q(r):r;let b=m,x=Qn(b);for(;x&&r&&g!==b;){const $=te(x),_=x.getBoundingClientRect(),R=ot(x),B=_.left+(x.clientLeft+parseFloat(R.paddingLeft))*$.x,P=_.top+(x.clientTop+parseFloat(R.paddingTop))*$.y;u*=$.x,c*=$.y,h*=$.x,d*=$.y,u+=B,c+=P,b=Q(x),x=Qn(b)}}return oi({width:h,height:d,x:u,y:c})}function rn(e,t){const n=nn(e).scrollLeft;return t?t.left+n:qt(yt(e)).left+n}function fi(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-rn(e,n),i=n.top+t.scrollTop;return{x:r,y:i}}function na(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const s=i==="fixed",o=yt(r),l=t?en(t.floating):!1;if(r===o||l&&s)return n;let u={scrollLeft:0,scrollTop:0},c=ht(1);const h=ht(0),d=pt(r);if((d||!d&&!s)&&((ie(r)!=="body"||be(o))&&(u=nn(r)),pt(r))){const g=qt(r);c=te(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const m=o&&!d&&!s?fi(o,u):ht(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+h.x+m.x,y:n.y*c.y-u.scrollTop*c.y+h.y+m.y}}function ra(e){return Array.from(e.getClientRects())}function ia(e){const t=yt(e),n=nn(e),r=e.ownerDocument.body,i=Qt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Qt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+rn(e);const l=-n.scrollTop;return ot(r).direction==="rtl"&&(o+=Qt(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:l}}const Br=25;function sa(e,t){const n=Q(e),r=yt(e),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,l=0,u=0;if(i){s=i.width,o=i.height;const h=ar();(!h||h&&t==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}const c=rn(r);if(c<=0){const h=r.ownerDocument,d=h.body,m=getComputedStyle(d),g=h.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,b=Math.abs(r.clientWidth-d.clientWidth-g);b<=Br&&(s-=b)}else c<=Br&&(s+=c);return{width:s,height:o,x:l,y:u}}const oa=new Set(["absolute","fixed"]);function aa(e,t){const n=qt(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,s=pt(e)?te(e):ht(1),o=e.clientWidth*s.x,l=e.clientHeight*s.y,u=i*s.x,c=r*s.y;return{width:o,height:l,x:u,y:c}}function Pr(e,t,n){let r;if(t==="viewport")r=sa(e,n);else if(t==="document")r=ia(yt(e));else if(st(t))r=aa(t,n);else{const i=ui(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return oi(r)}function hi(e,t){const n=Bt(e);return n===t||!st(n)||ne(n)?!1:ot(n).position==="fixed"||hi(n,t)}function la(e,t){const n=t.get(e);if(n)return n;let r=me(e,[],!1).filter(l=>st(l)&&ie(l)!=="body"),i=null;const s=ot(e).position==="fixed";let o=s?Bt(e):e;for(;st(o)&&!ne(o);){const l=ot(o),u=or(o);!u&&l.position==="fixed"&&(i=null),(s?!u&&!i:!u&&l.position==="static"&&!!i&&oa.has(i.position)||be(o)&&!u&&hi(e,o))?r=r.filter(h=>h!==o):i=l,o=Bt(o)}return t.set(e,r),r}function ca(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?en(t)?[]:la(t,this._c):[].concat(n),r],l=o[0],u=o.reduce((c,h)=>{const d=Pr(t,h,i);return c.top=Qt(d.top,c.top),c.right=Zn(d.right,c.right),c.bottom=Zn(d.bottom,c.bottom),c.left=Qt(d.left,c.left),c},Pr(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function ua(e){const{width:t,height:n}=ci(e);return{width:t,height:n}}function fa(e,t,n){const r=pt(t),i=yt(t),s=n==="fixed",o=qt(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const u=ht(0);function c(){u.x=rn(i)}if(r||!r&&!s)if((ie(t)!=="body"||be(i))&&(l=nn(t)),r){const g=qt(t,!0,s,t);u.x=g.x+t.clientLeft,u.y=g.y+t.clientTop}else i&&c();s&&!r&&i&&c();const h=i&&!r&&!s?fi(i,l):ht(0),d=o.left+l.scrollLeft-u.x-h.x,m=o.top+l.scrollTop-u.y-h.y;return{x:d,y:m,width:o.width,height:o.height}}function Nn(e){return ot(e).position==="static"}function Rr(e,t){if(!pt(e)||ot(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return yt(e)===n&&(n=n.ownerDocument.body),n}function di(e,t){const n=Q(e);if(en(e))return n;if(!pt(e)){let i=Bt(e);for(;i&&!ne(i);){if(st(i)&&!Nn(i))return i;i=Bt(i)}return n}let r=Rr(e,t);for(;r&&Wo(r)&&Nn(r);)r=Rr(r,t);return r&&ne(r)&&Nn(r)&&!or(r)?n:r||Zo(e)||n}const ha=async function(e){const t=this.getOffsetParent||di,n=this.getDimensions,r=await n(e.floating);return{reference:fa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function da(e){return ot(e).direction==="rtl"}const pa={convertOffsetParentRelativeRectToViewportRelativeRect:na,getDocumentElement:yt,getClippingRect:ca,getOffsetParent:di,getElementRects:ha,getClientRects:ra,getDimensions:ua,getScale:te,isElement:st,isRTL:da};function pi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ga(e,t){let n=null,r;const i=yt(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function o(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),s();const c=e.getBoundingClientRect(),{left:h,top:d,width:m,height:g}=c;if(l||t(),!m||!g)return;const b=He(d),x=He(i.clientWidth-(h+m)),$=He(i.clientHeight-(d+g)),_=He(h),B={rootMargin:-b+"px "+-x+"px "+-$+"px "+-_+"px",threshold:Qt(0,Zn(1,u))||1};let P=!0;function T(q){const O=q[0].intersectionRatio;if(O!==u){if(!P)return o();O?o(!1,O):r=setTimeout(()=>{o(!1,1e-7)},1e3)}O===1&&!pi(c,e.getBoundingClientRect())&&o(),P=!1}try{n=new IntersectionObserver(T,{...B,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,B)}n.observe(e)}return o(!0),s}function ya(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,c=lr(e),h=i||s?[...c?me(c):[],...me(t)]:[];h.forEach(_=>{i&&_.addEventListener("scroll",n,{passive:!0}),s&&_.addEventListener("resize",n)});const d=c&&l?ga(c,n):null;let m=-1,g=null;o&&(g=new ResizeObserver(_=>{let[R]=_;R&&R.target===c&&g&&(g.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var B;(B=g)==null||B.observe(t)})),n()}),c&&!u&&g.observe(c),g.observe(t));let b,x=u?qt(e):null;u&&$();function $(){const _=qt(e);x&&!pi(x,_)&&n(),x=_,b=requestAnimationFrame($)}return n(),()=>{var _;h.forEach(R=>{i&&R.removeEventListener("scroll",n),s&&R.removeEventListener("resize",n)}),d?.(),(_=g)==null||_.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const ma=(e,t,n)=>{const r=new Map,i={platform:pa,...n},s={...i.platform,_c:r};return Xo(e,t,{...i,platform:s})};function ba(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return ya(t,n,()=>{n.matches(":popover-open")&&ma(t,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function gi(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",ri({target:{value:""}},e)}function va(e,t){t.inlineMode&&e.stopPropagation()}function wa(e){e.inlineMode&&(e.showDropdown=!0)}function xa(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Ma(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(gi(t),t.showDropdown=!1)}function Aa(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(gi(t),t.showDropdown=!1)}function _a(e,t){var n,r,i=0,s,o,l,u,c,h,d,m=e[0],g=e[1],b=t.length;for(n=0;n<b;n++){r=0;var x=t[n],$=x.length-1;if(h=x[0],h[0]!==x[$][0]&&h[1]!==x[$][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-m,l=h[1]-g,r;r<$;r++){if(d=x[r+1],u=d[0]-m,c=d[1]-g,l===0&&c===0){if(u<=0&&o>=0||o<=0&&u>=0)return 0}else if(c>=0&&l<=0||c<=0&&l>=0){if(s=Us(o,u,l,c,0,0),s===0)return 0;(s>0&&c>0&&l<=0||s<0&&c<=0&&l>0)&&i++}h=d,l=c,o=u}}return i%2!==0}function dt(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Ft(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function re(e){return e.type==="Feature"?e.geometry:e}function Dr(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}function rt(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=dt(e),i=re(t),s=i.type,o=t.bbox;let l=i.coordinates;if(o&&Ca(r,o)===!1)return!1;s==="Polygon"&&(l=[l]);let u=!1;for(var c=0;c<l.length;++c){const h=_a(r,l[c]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function Ca(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class yi{constructor(t=[],n=Sa){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const s=t-1>>1,o=n[s];if(r(i,o)>=0)break;n[t]=o,t=s}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,s=n[t];for(;t<i;){let o=(t<<1)+1,l=n[o];const u=o+1;if(u<this.length&&r(n[u],l)<0&&(o=u,l=n[u]),r(l,s)>=0)break;n[t]=l,t=o}n[t]=s}}function Sa(e,t){return e<t?-1:e>t?1:0}function mi(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function La(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class Tr{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function Ea(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)kr(n[r],t)}else kr(e,t)}let Ye=0,Xe=0,ze=0;function kr(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let o=r[i][s][0],l=null;Xe=Xe+1;for(let u=0;u<r[i][s].length-1;u++){l=r[i][s][u+1];const c=new Tr(o,Ye,Xe,ze),h=new Tr(l,Ye,Xe,ze+1);c.otherEvent=h,h.otherEvent=c,mi(c,h)>0?(h.isLeftEndpoint=!0,c.isLeftEndpoint=!1):(c.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(c),t.push(h),o=l,ze=ze+1}}Ye=Ye+1}class $a{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function Ba(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,s=e.rightSweepEvent.p.y,o=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,u=t.rightSweepEvent.p.x,c=t.rightSweepEvent.p.y,h=(c-l)*(i-n)-(u-o)*(s-r),d=(u-o)*(r-l)-(c-l)*(n-o),m=(i-n)*(r-l)-(s-r)*(n-o);if(h===0)return!1;const g=d/h,b=m/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),$=r+g*(s-r);return[x,$]}return!1}function Pa(e,t){t=t||!1;const n=[],r=new yi([],La);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const s=new $a(i);for(let o=0;o<r.data.length;o++){const l=r.data[o];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const u=Ba(s,l);u!==!1&&n.push(u)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function Ra(e,t){const n=new yi([],mi);return Ea(e,n),Pa(n,t)}var Da=Ra;function sn(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let s=[];e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(ee(e)),t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(ee(t));const o=Da(nt(s),i);let l=[];if(r){const u={};o.forEach(c=>{const h=c.join(",");u[h]||(u[h]=!0,l.push(c))})}else l=o;return nt(l.map(u=>fe(u)))}function cr(e,t,n){if(e!==null)for(var r,i,s,o,l,u,c,h=0,d=0,m,g=e.type,b=g==="FeatureCollection",x=g==="Feature",$=b?e.features.length:1,_=0;_<$;_++){c=b?e.features[_].geometry:x?e.geometry:e,m=c?c.type==="GeometryCollection":!1,l=m?c.geometries.length:1;for(var R=0;R<l;R++){var B=0,P=0;if(o=m?c.geometries[R]:c,o!==null){u=o.coordinates;var T=o.type;switch(h=0,T){case null:break;case"Point":if(t(u,d,_,B,P)===!1)return!1;d++,B++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(t(u[r],d,_,B,P)===!1)return!1;d++,T==="MultiPoint"&&B++}T==="LineString"&&B++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(t(u[r][i],d,_,B,P)===!1)return!1;d++}T==="MultiLineString"&&B++,T==="Polygon"&&P++}T==="Polygon"&&B++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(P=0,i=0;i<u[r].length;i++){for(s=0;s<u[r][i].length-h;s++){if(t(u[r][i][s],d,_,B,P)===!1)return!1;d++}P++}B++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(cr(o.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function on(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var n=0;n<e.features.length&&t(e.features[n],n)!==!1;n++);}function Ta(e,t,n){var r=n;return on(e,function(i,s){s===0&&n===void 0?r=i:r=t(r,i,s)}),r}function ka(e,t){var n,r,i,s,o,l,u,c,h,d,m=0,g=e.type==="FeatureCollection",b=e.type==="Feature",x=g?e.features.length:1;for(n=0;n<x;n++){for(l=g?e.features[n].geometry:b?e.geometry:e,c=g?e.features[n].properties:b?e.properties:{},h=g?e.features[n].bbox:b?e.bbox:void 0,d=g?e.features[n].id:b?e.id:void 0,u=l?l.type==="GeometryCollection":!1,o=u?l.geometries.length:1,i=0;i<o;i++){if(s=u?l.geometries[i]:l,s===null){if(t(null,m,c,h,d)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(s,m,c,h,d)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(t(s.geometries[r],m,c,h,d)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}m++}}function Ht(e,t){ka(e,function(n,r,i,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(ee(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var c=0;c<n.coordinates.length;c++){var h=n.coordinates[c],d={type:u,coordinates:h};if(t(ee(d,i),r,c)===!1)return!1}})}function tr(e,t={}){const n=re(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return Oa(n,t);case"MultiPolygon":return Ia(n,t);default:throw new Error("invalid poly")}}function Oa(e,t={}){const r=re(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return bi(r,i)}function Ia(e,t={}){const r=re(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},s=[];return r.forEach(o=>{s.push(bi(o,i))}),nt(s)}function bi(e,t){return e.length>1?Ws(e,t):ye(e[0],t)}function Na(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Ht(e,i=>{Ht(t,s=>{if(r===!1)return!1;r=ja(i.geometry,s.geometry,n)})}),r}function ja(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!Ya(e.coordinates,t.coordinates);case"LineString":return!Or(t,e);case"Polygon":return!rt(e,t)}break;case"LineString":switch(t.type){case"Point":return!Or(e,t);case"LineString":return!Fa(e,t,n);case"Polygon":return!Ir(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!rt(t,e);case"LineString":return!Ir(e,t,n);case"Polygon":return!qa(t,e,n)}}return!1}function Or(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(Ha(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function Fa(e,t,n){return sn(e,t,{ignoreSelfIntersections:n}).features.length>0}function Ir(e,t,n){for(const i of t.coordinates)if(rt(i,e))return!0;return sn(t,tr(e),{ignoreSelfIntersections:n}).features.length>0}function qa(e,t,n){for(const i of e.coordinates[0])if(rt(i,t))return!0;for(const i of t.coordinates[0])if(rt(i,e))return!0;return sn(tr(e),tr(t),{ignoreSelfIntersections:n}).features.length>0}function Ha(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],s=t[0]-e[0],o=t[1]-e[1];return r*o-i*s!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:o>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function Ya(e,t){return e[0]===t[0]&&e[1]===t[1]}function Xa(e,t,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Ht(e,i=>{Ht(t,s=>{if(r===!0)return!0;r=!Na(i.geometry,s.geometry,{ignoreSelfIntersections:n})})}),r}var za=Xa;function ft(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return cr(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Je(e,t,n={}){const r=dt(e),i=Ft(t);for(let s=0;s<i.length-1;s++){let o=!1;if(n.ignoreEndVertices&&(s===0&&(o="start"),s===i.length-2&&(o="end"),s===0&&s+1===i.length-1&&(o="both")),Ua(i[s],i[s+1],r,o,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Ua(e,t,n,r,i){const s=n[0],o=n[1],l=e[0],u=e[1],c=t[0],h=t[1],d=n[0]-l,m=n[1]-u,g=c-l,b=h-u,x=d*b-m*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===e[0]&&n[1]===e[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<s&&s<=c:c<=s&&s<l:b>0?u<o&&o<=h:h<=o&&o<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=s&&s<c:c<s&&s<=l:b>0?u<=o&&o<h:h<o&&o<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<s&&s<c:c<s&&s<l:b>0?u<o&&o<h:h<o&&o<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=s&&s<=c:c<=s&&s<=l:b>0?u<=o&&o<=h:h<=o&&o<=u;return!1}function Wa(e,t,n,r,i){vi(e,t,n||0,r||e.length-1,i||Ga)}function vi(e,t,n,r,i){for(;r>n;){if(r-n>600){var s=r-n+1,o=t-n+1,l=Math.log(s),u=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*u*(s-u)/s)*(o-s/2<0?-1:1),h=Math.max(n,Math.floor(t-o*u/s+c)),d=Math.min(r,Math.floor(t+(s-o)*u/s+c));vi(e,t,h,d,i)}var m=e[t],g=n,b=r;for(ce(e,n,t),i(e[r],m)>0&&ce(e,n,r);g<b;){for(ce(e,g,b),g++,b--;i(e[g],m)<0;)g++;for(;i(e[b],m)>0;)b--}i(e[n],m)===0?ce(e,n,b):(b++,ce(e,b,r)),b<=t&&(n=b+1),t<=b&&(r=b-1)}}function ce(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function Ga(e,t){return e<t?-1:e>t?1:0}let Ka=class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(t){let n=this.data;const r=[];if(!We(t,n))return r;const i=this.toBBox,s=[];for(;n;){for(let o=0;o<n.children.length;o++){const l=n.children[o],u=n.leaf?i(l):l;We(t,u)&&(n.leaf?r.push(l):Fn(t,u)?this._all(l,r):s.push(l))}n=s.pop()}return r}collides(t){let n=this.data;if(!We(t,n))return!1;const r=[];for(;n;){for(let i=0;i<n.children.length;i++){const s=n.children[i],o=n.leaf?this.toBBox(s):s;if(We(t,o)){if(n.leaf||Fn(t,o))return!0;r.push(s)}}n=r.pop()}return!1}load(t){if(!(t&&t.length))return this;if(t.length<this._minEntries){for(let r=0;r<t.length;r++)this.insert(t[r]);return this}let n=this._build(t.slice(),0,t.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=Jt([]),this}remove(t,n){if(!t)return this;let r=this.data;const i=this.toBBox(t),s=[],o=[];let l,u,c;for(;r||s.length;){if(r||(r=s.pop(),u=s[s.length-1],l=o.pop(),c=!0),r.leaf){const h=Va(t,r.children,n);if(h!==-1)return r.children.splice(h,1),s.push(r),this._condense(s),this}!c&&!r.leaf&&Fn(r,i)?(s.push(r),o.push(l),l=0,u=r,r=r.children[0]):u?(l++,r=u.children[l],c=!1):r=null}return this}toBBox(t){return t}compareMinX(t,n){return t.minX-n.minX}compareMinY(t,n){return t.minY-n.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){const r=[];for(;t;)t.leaf?n.push(...t.children):r.push(...t.children),t=r.pop();return n}_build(t,n,r,i){const s=r-n+1;let o=this._maxEntries,l;if(s<=o)return l=Jt(t.slice(n,r+1)),Vt(l,this.toBBox),l;i||(i=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,i-1))),l=Jt([]),l.leaf=!1,l.height=i;const u=Math.ceil(s/o),c=u*Math.ceil(Math.sqrt(o));Nr(t,n,r,c,this.compareMinX);for(let h=n;h<=r;h+=c){const d=Math.min(h+c-1,r);Nr(t,h,d,u,this.compareMinY);for(let m=h;m<=d;m+=u){const g=Math.min(m+u-1,d);l.children.push(this._build(t,m,g,i-1))}}return Vt(l,this.toBBox),l}_chooseSubtree(t,n,r,i){for(;i.push(n),!(n.leaf||i.length-1===r);){let s=1/0,o=1/0,l;for(let u=0;u<n.children.length;u++){const c=n.children[u],h=jn(c),d=Qa(t,c)-h;d<o?(o=d,s=h<s?h:s,l=c):d===o&&h<s&&(s=h,l=c)}n=l||n.children[0]}return n}_insert(t,n,r){const i=r?t:this.toBBox(t),s=[],o=this._chooseSubtree(i,this.data,n,s);for(o.children.push(t),de(o,i);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(i,s,n)}_split(t,n){const r=t[n],i=r.children.length,s=this._minEntries;this._chooseSplitAxis(r,s,i);const o=this._chooseSplitIndex(r,s,i),l=Jt(r.children.splice(o,r.children.length-o));l.height=r.height,l.leaf=r.leaf,Vt(r,this.toBBox),Vt(l,this.toBBox),n?t[n-1].children.push(l):this._splitRoot(r,l)}_splitRoot(t,n){this.data=Jt([t,n]),this.data.height=t.height+1,this.data.leaf=!1,Vt(this.data,this.toBBox)}_chooseSplitIndex(t,n,r){let i,s=1/0,o=1/0;for(let l=n;l<=r-n;l++){const u=he(t,0,l,this.toBBox),c=he(t,l,r,this.toBBox),h=tl(u,c),d=jn(u)+jn(c);h<s?(s=h,i=l,o=d<o?d:o):h===s&&d<o&&(o=d,i=l)}return i||r-n}_chooseSplitAxis(t,n,r){const i=t.leaf?this.compareMinX:Ja,s=t.leaf?this.compareMinY:Za,o=this._allDistMargin(t,n,r,i),l=this._allDistMargin(t,n,r,s);o<l&&t.children.sort(i)}_allDistMargin(t,n,r,i){t.children.sort(i);const s=this.toBBox,o=he(t,0,n,s),l=he(t,r-n,r,s);let u=Ue(o)+Ue(l);for(let c=n;c<r-n;c++){const h=t.children[c];de(o,t.leaf?s(h):h),u+=Ue(o)}for(let c=r-n-1;c>=n;c--){const h=t.children[c];de(l,t.leaf?s(h):h),u+=Ue(l)}return u}_adjustParentBBoxes(t,n,r){for(let i=r;i>=0;i--)de(n[i],t)}_condense(t){for(let n=t.length-1,r;n>=0;n--)t[n].children.length===0?n>0?(r=t[n-1].children,r.splice(r.indexOf(t[n]),1)):this.clear():Vt(t[n],this.toBBox)}};function Va(e,t,n){if(!n)return t.indexOf(e);for(let r=0;r<t.length;r++)if(n(e,t[r]))return r;return-1}function Vt(e,t){he(e,0,e.children.length,t,e)}function he(e,t,n,r,i){i||(i=Jt(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s=t;s<n;s++){const o=e.children[s];de(i,e.leaf?r(o):o)}return i}function de(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function Ja(e,t){return e.minX-t.minX}function Za(e,t){return e.minY-t.minY}function jn(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function Ue(e){return e.maxX-e.minX+(e.maxY-e.minY)}function Qa(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function tl(e,t){const n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,s-r)}function Fn(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function We(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function Jt(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Nr(e,t,n,r,i){const s=[t,n];for(;s.length;){if(n=s.pop(),t=s.pop(),n-t<=r)continue;const o=t+Math.ceil((n-t)/r/2)*r;Wa(e,o,t,n,i),s.push(t,o,o,n)}}function qn(e){var t;if(e.bbox)t=e.bbox;else if(Array.isArray(e)&&e.length===4)t=e;else if(Array.isArray(e)&&e.length===6)t=[e[0],e[1],e[3],e[4]];else if(e.type==="Feature")t=ft(e);else if(e.type==="FeatureCollection")t=ft(e);else throw new Error("invalid geojson");return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}var el=class{constructor(e=9){this.tree=new Ka(e),this.tree.toBBox=qn}insert(e){if(e.type!=="Feature")throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:ft(e),this.tree.insert(e),this}load(e){var t=[];return Array.isArray(e)?e.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ft(n),t.push(n)}):on(e,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ft(n),t.push(n)}),this.tree.load(t),this}remove(e,t){if(e.type!=="Feature")throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:ft(e),this.tree.remove(e,t),this}clear(){return this.tree.clear(),this}search(e){var t=this.tree.search(qn(e));return nt(t)}collides(e){return this.tree.collides(qn(e))}all(){const e=this.tree.all();return nt(e)}toJSON(){return this.tree.toJSON()}fromJSON(e){return this.tree.fromJSON(e),this}};function wi(e){return new el(e)}function nl(e,t){if(t=t??{},!Gs(t))throw new Error("options is invalid");var n=t.precision,r=t.coordinates,i=t.mutate;if(n=n==null||isNaN(n)?6:n,r=r==null||isNaN(r)?3:r,!e)throw new Error("<geojson> is required");if(typeof n!="number")throw new Error("<precision> must be a number");if(typeof r!="number")throw new Error("<coordinates> must be a number");(i===!1||i===void 0)&&(e=JSON.parse(JSON.stringify(e)));var s=Math.pow(10,n);return cr(e,function(o){rl(o,s,r)}),e}function rl(e,t,n){e.length>n&&e.splice(n,e.length);for(var r=0;r<e.length;r++)e[r]=Math.round(e[r]*t)/t;return e}function il(e){if(!e)throw new Error("geojson is required");const t=[];return Ht(e,n=>{sl(n,t)}),nt(t)}function sl(e,t){let n=[];const r=e.geometry;if(r!==null){switch(r.type){case"Polygon":n=Ft(r);break;case"LineString":n=[Ft(r)]}n.forEach(i=>{ol(i,e.properties).forEach(o=>{o.id=t.length,t.push(o)})})}}function ol(e,t){const n=[];return e.reduce((r,i)=>{const s=ye([r,i],t);return s.bbox=al(r,i),n.push(s),i}),n}function al(e,t){const n=e[0],r=e[1],i=t[0],s=t[1],o=n<i?n:i,l=r<s?r:s,u=n>i?n:i,c=r>s?r:s;return[o,l,u,c]}function Hn(e,t,n={}){var r=dt(e),i=dt(t),s=Zt(i[1]-r[1]),o=Zt(i[0]-r[0]),l=Zt(r[1]),u=Zt(i[1]),c=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(u);return Ks(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)),n.units)}var ll=Object.defineProperty,cl=Object.defineProperties,ul=Object.getOwnPropertyDescriptors,jr=Object.getOwnPropertySymbols,fl=Object.prototype.hasOwnProperty,hl=Object.prototype.propertyIsEnumerable,Fr=(e,t,n)=>t in e?ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dl=(e,t)=>{for(var n in t||(t={}))fl.call(t,n)&&Fr(e,n,t[n]);if(jr)for(var n of jr(t))hl.call(t,n)&&Fr(e,n,t[n]);return e},pl=(e,t)=>cl(e,ul(t));function gl(e,t,n={}){if(!e||!t)throw new Error("lines and inputPoint are required arguments");const r=dt(t);let i=fe([1/0,1/0],{lineStringIndex:-1,segmentIndex:-1,totalDistance:-1,lineDistance:-1,segmentDistance:-1,pointDistance:1/0,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),s=0,o=0,l=-1;return Ht(e,function(u,c,h){l!==h&&(l=h,o=0);const d=Ft(u),m=d.length-2;for(let g=0;g<d.length-1;g++){const b=fe(d[g]),x=dt(b),$=fe(d[g+1]),_=dt($),R=Hn(b,$,n);let B,P;_[0]===r[0]&&_[1]===r[1]?[B,P]=[_,!0]:x[0]===r[0]&&x[1]===r[1]?[B,P]=[x,!1]:[B,P]=bl(x,_,r);const T=Hn(t,B,n);if(T<i.properties.pointDistance){const q=Hn(b,B,n);i=fe(B,{lineStringIndex:h,segmentIndex:P&&g+1<=m?g+1:g,totalDistance:s+q,lineDistance:o+q,segmentDistance:q,pointDistance:T,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),i.properties=pl(dl({},i.properties),{multiFeatureIndex:i.properties.lineStringIndex,index:i.properties.segmentIndex,location:i.properties.totalDistance,dist:i.properties.pointDistance})}s+=R,o+=R}}),i}function Nt(e,t){const[n,r,i]=e,[s,o,l]=t;return n*s+r*o+i*l}function ue(e,t){const[n,r,i]=e,[s,o,l]=t;return[r*l-i*o,i*s-n*l,n*o-r*s]}function yl(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2))}function qr(e){const t=yl(e);return[e[0]/t,e[1]/t,e[2]/t]}function Yn(e){const t=Zt(e[1]),n=Zt(e[0]);return[Math.cos(t)*Math.cos(n),Math.cos(t)*Math.sin(n),Math.sin(t)]}function ml(e){const[t,n,r]=e,i=Math.min(Math.max(r,-1),1),s=Mr(Math.asin(i));return[Mr(Math.atan2(n,t)),s]}function bl(e,t,n){const r=Yn(e),i=Yn(t),s=Yn(n),o=ue(r,i);if(o[0]===0&&o[1]===0&&o[2]===0)return Nt(r,i)>0?[[...t],!0]:[[...n],!1];const l=ue(o,s);if(l[0]===0&&l[1]===0&&l[2]===0)return[[...t],!0];const u=ue(l,o),c=qr(u),h=[-c[0],-c[1],-c[2]],d=Nt(s,c)>Nt(s,h)?c:h,m=qr(o),g=Nt(ue(r,d),m),b=Nt(ue(d,i),m);return g>=0&&b>=0?[ml(d),!1]:Nt(r,s)>Nt(i,s)?[[...e],!1]:[[...t],!0]}function vl(e,t){if(!e)throw new Error("line is required");if(!t)throw new Error("splitter is required");const n=Dr(e),r=Dr(t);if(n!=="LineString")throw new Error("line must be LineString");if(r==="FeatureCollection")throw new Error("splitter cannot be a FeatureCollection");if(r==="GeometryCollection")throw new Error("splitter cannot be a GeometryCollection");var i=nl(t,{precision:7});switch(e.type!=="Feature"&&(e=ee(e)),r){case"Point":return er(e,i);case"MultiPoint":return Hr(e,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return Hr(e,sn(e,i,{ignoreSelfIntersections:!0}))}}function Hr(e,t){var n=[],r=wi();return Ht(t,function(i){if(n.forEach(function(l,u){l.id=u}),!n.length)n=er(e,i).features,r.load(nt(n));else{var s=r.search(i);if(s.features.length){var o=xi(i,s);n=n.filter(function(l){return l.id!==o.id}),r.remove(o),on(er(o,i),function(l){n.push(l),r.insert(l)})}}}),nt(n)}function er(e,t){var n=[],r=Ft(e)[0],i=Ft(e)[e.geometry.coordinates.length-1];if(Xn(r,dt(t))||Xn(i,dt(t)))return nt([e]);var s=wi(),o=il(e);s.load(o);var l=s.search(t);if(!l.features.length)return nt([e]);var u=xi(t,l),c=[r],h=Ta(o,function(d,m,g){var b=Ft(m)[1],x=dt(t);return g===u.id?(d.push(x),n.push(ye(d)),Xn(x,b)?[x]:[x,b]):(d.push(b),d)},c);return h.length>1&&n.push(ye(h)),nt(n)}function xi(e,t){if(!t.features.length)throw new Error("lines must contain features");if(t.features.length===1)return t.features[0];var n,r=1/0;return on(t,function(i){var s=gl(i,e),o=s.properties.dist;o<r&&(n=i,r=o)}),n}function Xn(e,t){return e[0]===t[0]&&e[1]===t[1]}function wl(e,t){var n=re(e),r=re(t),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return xl(n,r);case"LineString":return Je(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return rt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Ml(n,r);case"LineString":return Al(n,r);case"Polygon":case"MultiPolygon":return _l(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Cl(n,r);case"Polygon":case"MultiPolygon":return Ll(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return El(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function xl(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(Ai(t.coordinates[n],e.coordinates)){r=!0;break}return r}function Ml(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)Ai(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Al(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Je(e.coordinates[r],t))return!1;n||(n=Je(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function _l(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=rt(e.coordinates[i],t),!r){n=!1;break}r=rt(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function Cl(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Je(e.coordinates[n],t))return!1;return!0}function Sl(e,t){const n=e.coordinates,r=[];for(let i=0;i<n.length-1;i++){const s=ye([n[i],n[i+1]]),o=vl(s,ee(t));o.features.length===0?r.push(s):r.push(...o.features)}return nt(r)}function Ll(e,t){const n=ft(t),r=ft(e);if(!Mi(n,r))return!1;for(const o of e.coordinates)if(!rt(o,t))return!1;let i=!1;const s=Sl(e,t);for(const o of s.features){const l=$l(o.geometry.coordinates[0],o.geometry.coordinates[1]);if(!rt(l,t))return!1;!i&&rt(l,t,{ignoreBoundary:!0})&&(i=!0)}return i}function El(e,t){var n=ft(e),r=ft(t);if(!Mi(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!rt(e.coordinates[0][i],t))return!1;return!0}function Mi(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function Ai(e,t){return e[0]===t[0]&&e[1]===t[1]}function $l(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Bl=wl;const Pl=(e,t)=>t?za(e,t):!0,Rl=(e,t)=>t?Bl(e,t):!0;function Dl(e,t="highlight",n="title"){const r=(i,s=[])=>{let o="",l=0,u=0;return s.forEach((c,h)=>{const d=c[1]+1;h&&u>c[0]||(u=c[1],o+=[i.substring(l,c[0]),`<mark class="${t}">`,i.substring(c[0],d),"</mark>"].join(""),l=d)}),o+=i.substring(l),o};return e.filter(({matches:i})=>i&&i.length).map(({item:i,matches:s})=>{const o={...i};return s.forEach(l=>{if(l.key!==n)return;const u=r(jl(l.value),Fl(l.indices));o.highlightedText=u}),o})}let _i;const Tl=(e,t)=>{_i=new Rt(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},kl=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,c])=>{const d=[],m=(g,b)=>{const x={};c.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,d.push(x)};return Object.entries(c.state).filter(([,g])=>g).forEach(([g,b])=>m(g,b)),d.length>0&&l.push({$or:d}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},u=_i.search(l);i=n.enableHighlighting?Dl(u,"highlight",n.titleProperty):u.map(c=>c.item)}const s=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,c])=>(l[u]={min:c.state.min,max:c.state.max,format:c.format},l),{});if(Object.keys(s).length>0){const l=[];for(let u=0;u<i.length;u++){const c={};for(const[h,d]of Object.entries(s)){const m=b=>d.format==="date"?ge(b).unix():b,g=J(h,i[u]);g?Array.isArray(g)?c[h]=s[h].min<=m(g[1])&&m(g[0])<=s[h].max:m(g)>=s[h].min&&m(g)<=s[h].max?c[h]=!0:c[h]=!1:c[h]=!0}Object.values(c).every(h=>!!h)&&l.push(i[u])}i=[...l]}const o=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,c])=>(l[u]={geometry:c.state.geometry,mode:c.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const c={};for(const h of Object.keys(o)){const d=J(h,i[u]),m=o[h].mode||"within";d&&(m==="within"?Rl(d,o[h].geometry):Pl(d,o[h].geometry))?c[h]=!0:c[h]=!1}Object.values(c).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Ol(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function an(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Yr(e,t){return e*2+t}function Il(e){return Object.keys(e).map(t=>({title:S`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function nr(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Nl(e,t,n){const r=n.externalFilter(e,t),i=typeof r=="string"||r instanceof String?r:r.url,o=await(await fetch(i)).json();return r.key?J(r.key,o):o}function Ci(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r?.classList.contains("details-filter")){if(!r.open||t?.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!r?.open||t?.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function J(e,t){return typeof e=="function"?e(t):e?.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}function jl(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Fl(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([i,s])=>i<=s?[i,s]:[s,i]).sort((i,s)=>i[0]-s[0]||i[1]-s[1]),r=[];for(const[i,s]of n){if(r.length===0){r.push([i,s]);continue}const o=r[r.length-1];(t?i<=o[1]+1:i<=o[1])?s>o[1]&&(o[1]=s):r.push([i,s])}return r}class ql extends gt{static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}constructor(){super(),this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=this.#i.bind(this),this._handleKeyDown=this.#r.bind(this)}set showDropdown(t){this.renderRoot.querySelector("[popover]").togglePopover(t)}get showDropdown(){return this.renderRoot.querySelector("[popover]")?.matches(":popover-open")}#t(){setTimeout(()=>this._overlayCleanup=ba(this))}#e(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),this.#t()}connectedCallback(){super.connectedCallback(),this.inlineMode&&this.#e()}#n(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()}disconnectedCallback(){this.inlineMode&&this.#n(),super.disconnectedCallback()}_overlayCleanup(){}#i(t){Aa(t,this)}#r(t){Ma(t,this)}#s(t){xa(t,this)}#a(){wa(this)}#o(t){va(t,this)}#l(t){No(t,this)}#c(t){ri(t,this)}updateInline(){this.inlineMode&&this.requestUpdate()}updated(t){t.has("inlineMode")&&(this.inlineMode?this.#e():this.#n())}render(){return S`
      <style>
        ${!this.unstyled&&ir}
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
                      .items=${Il(this.filters)}
                      .controller=${{remove:t=>this.#l(t)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${F(nr(this.filters),()=>S`
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
                  class="input-container field no-margin ${nr(this.filters)?"dirty-filter-input":""}"
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
          `:S`<slot name="section"></slot>`}
    `}}customElements.define("eox-itemfilter-container",ql);function Hl(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",an(e.filterObject),e.requestUpdate()}function Yl(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const rr="ddd, D MMM YYYY HH:mm:ss";function Xl(e){if(e.filterObject=an(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),n=e.filterObject.min,r=e.filterObject.max;t.value1!==n&&(t.value1=n),t.value2!==r&&(t.value2=r)}e.requestUpdate()}function zl(e,t){const[n,r]=e.detail.values;(n!==t.filterObject.state.min||r!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[n,r],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${ge.unix(n).format(rr)} - ${ge.unix(r).format(rr)}`:`${n} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),n===t.filterObject.min&&r===t.filterObject.max?t.reset():t.requestUpdate()}function Ul(e,t,n){const r=n.filterObject.format==="date",i=n.filterObject.state[e],s=r?ge.unix(i).format(rr):i;return S`<div class="range-${t}">${s}</div>`}function Wl(e){Gl(-1,e),an(e.filterObject),e.requestUpdate()}function Gl(e,t){t.selectedItems=[],ur(t),Li(t)}function Si(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),ur(t),Li(t)}function Kl(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function Vl(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&Si(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Jl(e,t){(e.has("suggestions")||e.has("query"))&&ur(t)}function Zl(e,t){const n=e.filterObject?.sort||((r,i)=>r.toString().localeCompare(i.toString(),void 0,{numeric:!0}));return t.sort(n).map(r=>r)}function ur(e){const t=(e.filterObject?.filterKeys||e.suggestions).map(r=>`${r}`);let n=t;e.query&&(n=new Rt(t,{threshold:.4}).search(e.query).map(i=>i.item)),e.filteredSuggestions=e.filterObject?.filterKeys?n:Zl(e,n),e.filterObject?.filterKeys&&(e.filterObject.state=t.reduce((r,i)=>(i in r||(r[i]=void 0),r),e.filterObject.state)),e.highlightedIndex=-1}function Li(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function Ql(e){an(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function tc(e){e.renderRoot.querySelector("#eox-map").innerHTML="",Ei(e)}function ec(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function Ei(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&nc(e.geometry),r=Ol(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=s=>{const o=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(o)};e.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function nc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}class rc extends gt{static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}constructor(){super(),this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}#t=()=>{Yl(this)};#e=t=>{t.key==="Enter"&&t.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),t.target.value="",this.#t())};reset(){Hl(this)}debouncedInputHandler=Qe(this.#t,500,{leading:!0});createRenderRoot(){return this}render(){return F(this.filterObject,()=>S`
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
      `)}}customElements.define("eox-itemfilter-text",rc);function ic(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const r=n.config.aggregateResults;return t==="No category"?e.filter(i=>{const s=i[r];return Array.isArray(s)?s.filter(Boolean).length===0:!s}):e.filter(i=>{const s=i[r];if(Array.isArray(s)){if(s.filter(Boolean).length===0)return!1}else if(!s)return!1;let o;return n.filters[r]&&(o=Object.keys(n.filters[r]).filter(u=>n.filters[r].state[u])),(o?.length?o.includes(t):!0)&&Array.isArray(s)?s.includes(t):s===t})}function sc(e,t){return S`
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
        ${$i(t,e)}
      </div>
    </details>
  `}function $i(e,t){const n=e.results,r=t?e.aggregateResults(n,t):n,i=e.config,s=o=>e.selectedResult?.[i.idProperty]===o[i.idProperty]?"highlighted":$t;return xr`
    ${e.resultType==="cards"?Kt("<eox-layout fill-grid>"):Kt('<ul id="results" class="list no-space" part="results">')}
      ${zs(r,o=>o.id,o=>xr`
        ${e.resultType==="cards"?Kt("<eox-layout-item"):Kt("<li")}
            class="${s(o)}"
            @click=${()=>{e.selectedResult===o?e.selectedResult=null:e.selectedResult=o,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:o}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:o}))}}
          >
            <nav id="${o.id}" class="responsive tiny-space">
              ${F(i.subTitleProperty||i.imageProperty,()=>S`
                  ${F(e.resultType==="cards",()=>J(i.imageProperty,o)?S`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${J(i.imageProperty,o)}"
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
                        ${J(i.imageProperty,o)?S`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${J(i.imageProperty,o)}"
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
                      >${Fe(o.highlightedText||J(i.titleProperty,o).toString())}</span
                    >
                    ${F(!!J(i.subTitleProperty,o),()=>S`
                        <small class="subtitle no-line truncate"
                          >${Fe(J(i.subTitleProperty,o).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>S`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      >${Fe(o.highlightedText||o[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${F(e.enableResultAction,()=>S`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:o}))}}
                  >
                    <icon class="small"
                      >${Fe(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${e.resultType==="cards"?Kt("</eox-layout>"):Kt("</ul>")}
  `}class oc extends gt{static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}constructor(){super(),this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}#t(t){return $i(this,t)}#e(t){return sc(t,this)}aggregateResults(t,n){return ic(t,n,this)}createRenderRoot(){return this}handleAccordion(t){Ci(t,this.config,this)}#n(){const t=this.resultAggregation.filter(r=>this.aggregateResults(this.results,r).length);return this.aggregateResults(this.results,"No category").length>0&&t.push("No category"),t}render(){return S`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${F(this.results.length<1,()=>S`<small class="no-results">No matching items</small>`,()=>$t)}
          ${F(this.config.aggregateResults,()=>Ze(this.#n(),t=>S`${F(this.aggregateResults(this.results,t).length===1&&this.config.autoSpreadSingle,()=>S`<div style="margin-left: -8px">
                        ${this.#t(t)}
                      </div>`,()=>this.#e(t))}`),()=>this.#t())}
        </div>
      </section>
    `}}customElements.define("eox-itemfilter-results",oc);class ac extends gt{static properties={filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}};constructor(){super(),this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(t){Jl(t,this)}#t(t){Kl(t,this)}#e(t){Vl(t,this)}#n(t){Si(t,this)}reset(){Wl(this)}debouncedInputHandler=Qe(this.#n,500,{leading:!0});firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(t=>this.filterObject.state[t]?t:null).filter(t=>!!t),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const t=this.type.includes("multi")?"checkbox":"radio",n=this.filteredSuggestions.length>5?"select-overflow scroll":$t;return S`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${F((this.filterObject.filterKeys||this.suggestions).length>=10,()=>S`<div class="autocomplete-container">
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
          ${this.filteredSuggestions.map(r=>S`
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
    `}}customElements.define("eox-itemfilter-select",ac);class lc extends gt{static properties={filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}};constructor(){super(),this.filterObject={},this.tabIndex=0,this.inputHandler=this.#t.bind(this),this.debouncedInputHandler=Qe(this.inputHandler,500,{leading:!1})}#t(t){zl(t,this)}#e(t,n){return Ul(t,n,this)}reset(){Xl(this)}createRenderRoot(){return this}render(){return F(this.filterObject,()=>S`
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
      `)}}customElements.define("eox-itemfilter-range",lc);class cc extends gt{static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}constructor(){super(),this.filterObject={},this.tabIndex=0}reset(){Ql(this)}createRenderRoot(){return this}#t(t){ec(t,this)}render(){return F(this.filterObject,()=>S`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${Ze(["intersects","within"],t=>S`
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
      `)}}customElements.define("eox-itemfilter-spatial",cc);class uc extends gt{static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}constructor(){super(),this.geometry=null,this.eoxMap=null}firstUpdated(){this.#t()}#t(){Ei(this)}reset(){tc(this)}render(){return S`<div id="eox-map"></div>`}}customElements.define("eox-itemfilter-spatial-filter",uc);function fc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function hc(e,t){const{code:n,target:r}=e;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&dc(n,e.target.value??"",t))}function dc(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}class pc extends gt{static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}constructor(){super(),this.items={},this.controller={}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",this.#t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",this.#t.bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}#t(t){hc(t,this)}#e(t){fc(t,this)}render(){return S`
      <span class="chip-container">
        ${Ze(this.items,t=>S`
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
    `}}customElements.define("eox-itemfilter-chips",pc);const gc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Xr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var zn,zr;function yc(){if(zr)return zn;zr=1;var e=200,t="__lodash_hash_undefined__",n=1/0,r="[object Function]",i="[object GeneratorFunction]",s=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,l=typeof Et=="object"&&Et&&Et.Object===Object&&Et,u=typeof self=="object"&&self&&self.Object===Object&&self,c=l||u||Function("return this")();function h(y,w){var C=y?y.length:0;return!!C&&m(y,w,0)>-1}function d(y,w,C,k){for(var H=y.length,G=C+-1;++G<H;)if(w(y[G],G,y))return G;return-1}function m(y,w,C){if(w!==w)return d(y,g,C);for(var k=C-1,H=y.length;++k<H;)if(y[k]===w)return k;return-1}function g(y){return y!==y}function b(y,w){return y.has(w)}function x(y,w){return y?.[w]}function $(y){var w=!1;if(y!=null&&typeof y.toString!="function")try{w=!!(y+"")}catch{}return w}function _(y){var w=-1,C=Array(y.size);return y.forEach(function(k){C[++w]=k}),C}var R=Array.prototype,B=Function.prototype,P=Object.prototype,T=c["__core-js_shared__"],q=(function(){var y=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return y?"Symbol(src)_1."+y:""})(),O=B.toString,X=P.hasOwnProperty,z=P.toString,Yt=RegExp("^"+O.call(X).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Dt=R.splice,at=se(c,"Map"),Xt=se(c,"Set"),j=se(Object,"create");function W(y){var w=-1,C=y?y.length:0;for(this.clear();++w<C;){var k=y[w];this.set(k[0],k[1])}}function zt(){this.__data__=j?j(null):{}}function ln(y){return this.has(y)&&delete this.__data__[y]}function cn(y){var w=this.__data__;if(j){var C=w[y];return C===t?void 0:C}return X.call(w,y)?w[y]:void 0}function un(y){var w=this.__data__;return j?w[y]!==void 0:X.call(w,y)}function fn(y,w){var C=this.__data__;return C[y]=j&&w===void 0?t:w,this}W.prototype.clear=zt,W.prototype.delete=ln,W.prototype.get=cn,W.prototype.has=un,W.prototype.set=fn;function At(y){var w=-1,C=y?y.length:0;for(this.clear();++w<C;){var k=y[w];this.set(k[0],k[1])}}function hn(){this.__data__=[]}function dn(y){var w=this.__data__,C=Tt(w,y);if(C<0)return!1;var k=w.length-1;return C==k?w.pop():Dt.call(w,C,1),!0}function pn(y){var w=this.__data__,C=Tt(w,y);return C<0?void 0:w[C][1]}function gn(y){return Tt(this.__data__,y)>-1}function yn(y,w){var C=this.__data__,k=Tt(C,y);return k<0?C.push([y,w]):C[k][1]=w,this}At.prototype.clear=hn,At.prototype.delete=dn,At.prototype.get=pn,At.prototype.has=gn,At.prototype.set=yn;function D(y){var w=-1,C=y?y.length:0;for(this.clear();++w<C;){var k=y[w];this.set(k[0],k[1])}}function ve(){this.__data__={hash:new W,map:new(at||At),string:new W}}function mn(y){return Wt(this,y).delete(y)}function lt(y){return Wt(this,y).get(y)}function we(y){return Wt(this,y).has(y)}function xe(y,w){return Wt(this,y).set(y,w),this}D.prototype.clear=ve,D.prototype.delete=mn,D.prototype.get=lt,D.prototype.has=we,D.prototype.set=xe;function Ut(y){var w=-1,C=y?y.length:0;for(this.__data__=new D;++w<C;)this.add(y[w])}function Me(y){return this.__data__.set(y,t),this}function Ae(y){return this.__data__.has(y)}Ut.prototype.add=Ut.prototype.push=Me,Ut.prototype.has=Ae;function Tt(y,w){for(var C=y.length;C--;)if(_n(y[C][0],w))return C;return-1}function bn(y){if(!_e(y)||Mn(y))return!1;var w=Cn(y)||$(y)?Yt:o;return w.test(oe(y))}function vn(y,w,C){var k=-1,H=h,G=y.length,Ce=!0,it=[],ct=it;if(G>=e){var Se=wn(y);if(Se)return _(Se);Ce=!1,H=b,ct=new Ut}else ct=it;t:for(;++k<G;){var _t=y[k],Ct=_t;if(_t=_t!==0?_t:0,Ce&&Ct===Ct){for(var Le=ct.length;Le--;)if(ct[Le]===Ct)continue t;it.push(_t)}else H(ct,Ct,C)||(ct!==it&&ct.push(Ct),it.push(_t))}return it}var wn=Xt&&1/_(new Xt([,-0]))[1]==n?function(y){return new Xt(y)}:Sn;function Wt(y,w){var C=y.__data__;return xn(w)?C[typeof w=="string"?"string":"hash"]:C.map}function se(y,w){var C=x(y,w);return bn(C)?C:void 0}function xn(y){var w=typeof y;return w=="string"||w=="number"||w=="symbol"||w=="boolean"?y!=="__proto__":y===null}function Mn(y){return!!q&&q in y}function oe(y){if(y!=null){try{return O.call(y)}catch{}try{return y+""}catch{}}return""}function An(y){return y&&y.length?vn(y):[]}function _n(y,w){return y===w||y!==y&&w!==w}function Cn(y){var w=_e(y)?z.call(y):"";return w==r||w==i}function _e(y){var w=typeof y;return!!y&&(w=="object"||w=="function")}function Sn(){}return zn=An,zn}var mc=yc();const Bi=Wr(mc);var pe={exports:{}};pe.exports;var Ur;function bc(){return Ur||(Ur=1,(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,o=2,l=9007199254740991,u="[object Arguments]",c="[object Array]",h="[object Boolean]",d="[object Date]",m="[object Error]",g="[object Function]",b="[object GeneratorFunction]",x="[object Map]",$="[object Number]",_="[object Object]",R="[object Promise]",B="[object RegExp]",P="[object Set]",T="[object String]",q="[object Symbol]",O="[object WeakMap]",X="[object ArrayBuffer]",z="[object DataView]",Yt="[object Float32Array]",Dt="[object Float64Array]",at="[object Int8Array]",Xt="[object Int16Array]",j="[object Int32Array]",W="[object Uint8Array]",zt="[object Uint8ClampedArray]",ln="[object Uint16Array]",cn="[object Uint32Array]",un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fn=/^\w*$/,At=/^\./,hn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dn=/[\\^$.*+?()[\]{}|]/g,pn=/\\(\\)?/g,gn=/^\[object .+?Constructor\]$/,yn=/^(?:0|[1-9]\d*)$/,D={};D[Yt]=D[Dt]=D[at]=D[Xt]=D[j]=D[W]=D[zt]=D[ln]=D[cn]=!0,D[u]=D[c]=D[X]=D[h]=D[z]=D[d]=D[m]=D[g]=D[x]=D[$]=D[_]=D[B]=D[P]=D[T]=D[O]=!1;var ve=typeof Et=="object"&&Et&&Et.Object===Object&&Et,mn=typeof self=="object"&&self&&self.Object===Object&&self,lt=ve||mn||Function("return this")(),we=t&&!t.nodeType&&t,xe=we&&!0&&e&&!e.nodeType&&e,Ut=xe&&xe.exports===we,Me=Ut&&ve.process,Ae=(function(){try{return Me&&Me.binding("util")}catch{}})(),Tt=Ae&&Ae.isTypedArray;function bn(a,f){for(var p=-1,v=a?a.length:0,A=Array(v);++p<v;)A[p]=f(a[p],p,a);return A}function vn(a,f){for(var p=-1,v=f.length,A=a.length;++p<v;)a[A+p]=f[p];return a}function wn(a,f){for(var p=-1,v=a?a.length:0;++p<v;)if(f(a[p],p,a))return!0;return!1}function Wt(a){return function(f){return f?.[a]}}function se(a,f){for(var p=-1,v=Array(a);++p<a;)v[p]=f(p);return v}function xn(a){return function(f){return a(f)}}function Mn(a,f){return a?.[f]}function oe(a){var f=!1;if(a!=null&&typeof a.toString!="function")try{f=!!(a+"")}catch{}return f}function An(a){var f=-1,p=Array(a.size);return a.forEach(function(v,A){p[++f]=[A,v]}),p}function _n(a,f){return function(p){return a(f(p))}}function Cn(a){var f=-1,p=Array(a.size);return a.forEach(function(v){p[++f]=v}),p}var _e=Array.prototype,Sn=Function.prototype,y=Object.prototype,w=lt["__core-js_shared__"],C=(function(){var a=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""})(),k=Sn.toString,H=y.hasOwnProperty,G=y.toString,Ce=RegExp("^"+k.call(H).replace(dn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),it=lt.Symbol,ct=lt.Uint8Array,Se=y.propertyIsEnumerable,_t=_e.splice,Ct=it?it.isConcatSpreadable:void 0,Le=_n(Object.keys,Object),Ln=Gt(lt,"DataView"),ae=Gt(lt,"Map"),En=Gt(lt,"Promise"),$n=Gt(lt,"Set"),Bn=Gt(lt,"WeakMap"),le=Gt(Object,"create"),Ri=Ot(Ln),Di=Ot(ae),Ti=Ot(En),ki=Ot($n),Oi=Ot(Bn),Ee=it?it.prototype:void 0,Pn=Ee?Ee.valueOf:void 0,fr=Ee?Ee.toString:void 0;function kt(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var v=a[f];this.set(v[0],v[1])}}function Ii(){this.__data__=le?le(null):{}}function Ni(a){return this.has(a)&&delete this.__data__[a]}function ji(a){var f=this.__data__;if(le){var p=f[a];return p===i?void 0:p}return H.call(f,a)?f[a]:void 0}function Fi(a){var f=this.__data__;return le?f[a]!==void 0:H.call(f,a)}function qi(a,f){var p=this.__data__;return p[a]=le&&f===void 0?i:f,this}kt.prototype.clear=Ii,kt.prototype.delete=Ni,kt.prototype.get=ji,kt.prototype.has=Fi,kt.prototype.set=qi;function mt(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var v=a[f];this.set(v[0],v[1])}}function Hi(){this.__data__=[]}function Yi(a){var f=this.__data__,p=Be(f,a);if(p<0)return!1;var v=f.length-1;return p==v?f.pop():_t.call(f,p,1),!0}function Xi(a){var f=this.__data__,p=Be(f,a);return p<0?void 0:f[p][1]}function zi(a){return Be(this.__data__,a)>-1}function Ui(a,f){var p=this.__data__,v=Be(p,a);return v<0?p.push([a,f]):p[v][1]=f,this}mt.prototype.clear=Hi,mt.prototype.delete=Yi,mt.prototype.get=Xi,mt.prototype.has=zi,mt.prototype.set=Ui;function bt(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var v=a[f];this.set(v[0],v[1])}}function Wi(){this.__data__={hash:new kt,map:new(ae||mt),string:new kt}}function Gi(a){return Pe(this,a).delete(a)}function Ki(a){return Pe(this,a).get(a)}function Vi(a){return Pe(this,a).has(a)}function Ji(a,f){return Pe(this,a).set(a,f),this}bt.prototype.clear=Wi,bt.prototype.delete=Gi,bt.prototype.get=Ki,bt.prototype.has=Vi,bt.prototype.set=Ji;function $e(a){var f=-1,p=a?a.length:0;for(this.__data__=new bt;++f<p;)this.add(a[f])}function Zi(a){return this.__data__.set(a,i),this}function Qi(a){return this.__data__.has(a)}$e.prototype.add=$e.prototype.push=Zi,$e.prototype.has=Qi;function vt(a){this.__data__=new mt(a)}function ts(){this.__data__=new mt}function es(a){return this.__data__.delete(a)}function ns(a){return this.__data__.get(a)}function rs(a){return this.__data__.has(a)}function is(a,f){var p=this.__data__;if(p instanceof mt){var v=p.__data__;if(!ae||v.length<n-1)return v.push([a,f]),this;p=this.__data__=new bt(v)}return p.set(a,f),this}vt.prototype.clear=ts,vt.prototype.delete=es,vt.prototype.get=ns,vt.prototype.has=rs,vt.prototype.set=is;function ss(a,f){var p=wt(a)||Tn(a)?se(a.length,String):[],v=p.length,A=!!v;for(var M in a)H.call(a,M)&&!(A&&(M=="length"||gr(M,v)))&&p.push(M);return p}function Be(a,f){for(var p=a.length;p--;)if(br(a[p][0],f))return p;return-1}var os=As(cs);function as(a,f,p,v,A){var M=-1,E=a.length;for(p||(p=$s),A||(A=[]);++M<E;){var I=a[M];p(I)?vn(A,I):A[A.length]=I}return A}var ls=_s();function cs(a,f){return a&&ls(a,f,Ie)}function hr(a,f){f=Re(f,a)?[f]:dr(f);for(var p=0,v=f.length;a!=null&&p<v;)a=a[De(f[p++])];return p&&p==v?a:void 0}function us(a){return G.call(a)}function fs(a,f){return a!=null&&f in Object(a)}function Rn(a,f,p,v,A){return a===f?!0:a==null||f==null||!ke(a)&&!Oe(f)?a!==a&&f!==f:hs(a,f,Rn,p,v,A)}function hs(a,f,p,v,A,M){var E=wt(a),I=wt(f),N=c,Y=c;E||(N=St(a),N=N==u?_:N),I||(Y=St(f),Y=Y==u?_:Y);var K=N==_&&!oe(a),V=Y==_&&!oe(f),U=N==Y;if(U&&!K)return M||(M=new vt),E||Is(a)?pr(a,f,p,v,A,M):Cs(a,f,N,p,v,A,M);if(!(A&o)){var tt=K&&H.call(a,"__wrapped__"),et=V&&H.call(f,"__wrapped__");if(tt||et){var Lt=tt?a.value():a,xt=et?f.value():f;return M||(M=new vt),p(Lt,xt,v,A,M)}}return U?(M||(M=new vt),Ss(a,f,p,v,A,M)):!1}function ds(a,f,p,v){var A=p.length,M=A;if(a==null)return!M;for(a=Object(a);A--;){var E=p[A];if(E[2]?E[1]!==a[E[0]]:!(E[0]in a))return!1}for(;++A<M;){E=p[A];var I=E[0],N=a[I],Y=E[1];if(E[2]){if(N===void 0&&!(I in a))return!1}else{var K=new vt,V;if(!(V===void 0?Rn(Y,N,v,s|o,K):V))return!1}}return!0}function ps(a){if(!ke(a)||Ps(a))return!1;var f=vr(a)||oe(a)?Ce:gn;return f.test(Ot(a))}function gs(a){return Oe(a)&&kn(a.length)&&!!D[G.call(a)]}function ys(a){return typeof a=="function"?a:a==null?qs:typeof a=="object"?wt(a)?ws(a[0],a[1]):vs(a):Hs(a)}function ms(a){if(!Rs(a))return Le(a);var f=[];for(var p in Object(a))H.call(a,p)&&p!="constructor"&&f.push(p);return f}function bs(a,f){var p=-1,v=Te(a)?Array(a.length):[];return os(a,function(A,M,E){v[++p]=f(A,M,E)}),v}function vs(a){var f=Ls(a);return f.length==1&&f[0][2]?mr(f[0][0],f[0][1]):function(p){return p===a||ds(p,a,f)}}function ws(a,f){return Re(a)&&yr(f)?mr(De(a),f):function(p){var v=js(p,a);return v===void 0&&v===f?Fs(p,a):Rn(f,v,void 0,s|o)}}function xs(a){return function(f){return hr(f,a)}}function Ms(a){if(typeof a=="string")return a;if(On(a))return fr?fr.call(a):"";var f=a+"";return f=="0"&&1/a==-1/0?"-0":f}function dr(a){return wt(a)?a:Ds(a)}function As(a,f){return function(p,v){if(p==null)return p;if(!Te(p))return a(p,v);for(var A=p.length,M=-1,E=Object(p);++M<A&&v(E[M],M,E)!==!1;);return p}}function _s(a){return function(f,p,v){for(var A=-1,M=Object(f),E=v(f),I=E.length;I--;){var N=E[++A];if(p(M[N],N,M)===!1)break}return f}}function pr(a,f,p,v,A,M){var E=A&o,I=a.length,N=f.length;if(I!=N&&!(E&&N>I))return!1;var Y=M.get(a);if(Y&&M.get(f))return Y==f;var K=-1,V=!0,U=A&s?new $e:void 0;for(M.set(a,f),M.set(f,a);++K<I;){var tt=a[K],et=f[K];if(v)var Lt=E?v(et,tt,K,f,a,M):v(tt,et,K,a,f,M);if(Lt!==void 0){if(Lt)continue;V=!1;break}if(U){if(!wn(f,function(xt,It){if(!U.has(It)&&(tt===xt||p(tt,xt,v,A,M)))return U.add(It)})){V=!1;break}}else if(!(tt===et||p(tt,et,v,A,M))){V=!1;break}}return M.delete(a),M.delete(f),V}function Cs(a,f,p,v,A,M,E){switch(p){case z:if(a.byteLength!=f.byteLength||a.byteOffset!=f.byteOffset)return!1;a=a.buffer,f=f.buffer;case X:return!(a.byteLength!=f.byteLength||!v(new ct(a),new ct(f)));case h:case d:case $:return br(+a,+f);case m:return a.name==f.name&&a.message==f.message;case B:case T:return a==f+"";case x:var I=An;case P:var N=M&o;if(I||(I=Cn),a.size!=f.size&&!N)return!1;var Y=E.get(a);if(Y)return Y==f;M|=s,E.set(a,f);var K=pr(I(a),I(f),v,A,M,E);return E.delete(a),K;case q:if(Pn)return Pn.call(a)==Pn.call(f)}return!1}function Ss(a,f,p,v,A,M){var E=A&o,I=Ie(a),N=I.length,Y=Ie(f),K=Y.length;if(N!=K&&!E)return!1;for(var V=N;V--;){var U=I[V];if(!(E?U in f:H.call(f,U)))return!1}var tt=M.get(a);if(tt&&M.get(f))return tt==f;var et=!0;M.set(a,f),M.set(f,a);for(var Lt=E;++V<N;){U=I[V];var xt=a[U],It=f[U];if(v)var wr=E?v(It,xt,U,f,a,M):v(xt,It,U,a,f,M);if(!(wr===void 0?xt===It||p(xt,It,v,A,M):wr)){et=!1;break}Lt||(Lt=U=="constructor")}if(et&&!Lt){var Ne=a.constructor,je=f.constructor;Ne!=je&&"constructor"in a&&"constructor"in f&&!(typeof Ne=="function"&&Ne instanceof Ne&&typeof je=="function"&&je instanceof je)&&(et=!1)}return M.delete(a),M.delete(f),et}function Pe(a,f){var p=a.__data__;return Bs(f)?p[typeof f=="string"?"string":"hash"]:p.map}function Ls(a){for(var f=Ie(a),p=f.length;p--;){var v=f[p],A=a[v];f[p]=[v,A,yr(A)]}return f}function Gt(a,f){var p=Mn(a,f);return ps(p)?p:void 0}var St=us;(Ln&&St(new Ln(new ArrayBuffer(1)))!=z||ae&&St(new ae)!=x||En&&St(En.resolve())!=R||$n&&St(new $n)!=P||Bn&&St(new Bn)!=O)&&(St=function(a){var f=G.call(a),p=f==_?a.constructor:void 0,v=p?Ot(p):void 0;if(v)switch(v){case Ri:return z;case Di:return x;case Ti:return R;case ki:return P;case Oi:return O}return f});function Es(a,f,p){f=Re(f,a)?[f]:dr(f);for(var v,A=-1,E=f.length;++A<E;){var M=De(f[A]);if(!(v=a!=null&&p(a,M)))break;a=a[M]}if(v)return v;var E=a?a.length:0;return!!E&&kn(E)&&gr(M,E)&&(wt(a)||Tn(a))}function $s(a){return wt(a)||Tn(a)||!!(Ct&&a&&a[Ct])}function gr(a,f){return f=f??l,!!f&&(typeof a=="number"||yn.test(a))&&a>-1&&a%1==0&&a<f}function Re(a,f){if(wt(a))return!1;var p=typeof a;return p=="number"||p=="symbol"||p=="boolean"||a==null||On(a)?!0:fn.test(a)||!un.test(a)||f!=null&&a in Object(f)}function Bs(a){var f=typeof a;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?a!=="__proto__":a===null}function Ps(a){return!!C&&C in a}function Rs(a){var f=a&&a.constructor,p=typeof f=="function"&&f.prototype||y;return a===p}function yr(a){return a===a&&!ke(a)}function mr(a,f){return function(p){return p==null?!1:p[a]===f&&(f!==void 0||a in Object(p))}}var Ds=Dn(function(a){a=Ns(a);var f=[];return At.test(a)&&f.push(""),a.replace(hn,function(p,v,A,M){f.push(A?M.replace(pn,"$1"):v||p)}),f});function De(a){if(typeof a=="string"||On(a))return a;var f=a+"";return f=="0"&&1/a==-1/0?"-0":f}function Ot(a){if(a!=null){try{return k.call(a)}catch{}try{return a+""}catch{}}return""}function Ts(a,f){return as(ks(a,f))}function ks(a,f){var p=wt(a)?bn:bs;return p(a,ys(f))}function Dn(a,f){if(typeof a!="function"||f&&typeof f!="function")throw new TypeError(r);var p=function(){var v=arguments,A=f?f.apply(this,v):v[0],M=p.cache;if(M.has(A))return M.get(A);var E=a.apply(this,v);return p.cache=M.set(A,E),E};return p.cache=new(Dn.Cache||bt),p}Dn.Cache=bt;function br(a,f){return a===f||a!==a&&f!==f}function Tn(a){return Os(a)&&H.call(a,"callee")&&(!Se.call(a,"callee")||G.call(a)==u)}var wt=Array.isArray;function Te(a){return a!=null&&kn(a.length)&&!vr(a)}function Os(a){return Oe(a)&&Te(a)}function vr(a){var f=ke(a)?G.call(a):"";return f==g||f==b}function kn(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=l}function ke(a){var f=typeof a;return!!a&&(f=="object"||f=="function")}function Oe(a){return!!a&&typeof a=="object"}function On(a){return typeof a=="symbol"||Oe(a)&&G.call(a)==q}var Is=Tt?xn(Tt):gs;function Ns(a){return a==null?"":Ms(a)}function js(a,f,p){var v=a==null?void 0:hr(a,f);return v===void 0?p:v}function Fs(a,f){return a!=null&&Es(a,f,fs)}function Ie(a){return Te(a)?ss(a):ms(a)}function qs(a){return a}function Hs(a){return Re(a)?Wt(De(a)):xs(a)}e.exports=Ts})(pe,pe.exports)),pe.exports}var vc=bc();const Pi=Wr(vc);function wc(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(s=>{const o={},l=c=>s.format==="date"?ge(c).unix():parseFloat(c);t.forEach(c=>{if(s.type==="range"){const h=J(s.key,c);if(Array.isArray(h)){const d=[l(h[0]),l(h[1])];o.min=o.min!==void 0?Math.min(o.min,d[0]):d[0],o.max=o.max!==void 0?Math.max(o.max,d[1]):d[1]}else{const d=l(h);o.min=o.min!==void 0?Math.min(o.min,d):d,o.max=o.max!==void 0?Math.max(o.max,d):d}return}Array.isArray(c[s.key])?c[s.key].forEach(h=>{o[h]=void 0}):s.type==="spatial"?(o.geometry=s?.state?.geometry||void 0,o.geometry&&(s.stringifiedState=o.geometry.type),o.mode=s.mode||"intersects"):s.key?.includes(".")?Bi(Pi(n.items,s.key)).filter(h=>h).forEach(h=>{o[h]=void 0}):o[c[s.key]]=void 0});const u=s.key||s.keys.join("|");n.filters[u]=Object.assign({type:s.type||"multiselect",dirty:s.state?Object.values(s.state).some(c=>c):void 0,key:u},s.type==="range"?{min:o.min,max:o.max,format:s.format}:{},s),n.filters[u].state=Object.assign({},o,s.state)}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((s,o)=>s.concat(o[e.aggregateResults]),[]))).filter(s=>s).sort((s,o)=>s.localeCompare(o)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(o=>{i.includes(o)||i.push(o)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),Tl(t,Object.assign({keys:i},e.fuseConfig)),r}async function xc(e,t,n){let r;n.externalFilter?r=await Nl(t,n.filters,e):r=await kl(t,n.filters,e),n.results=n.sortResults(r)}function Mc(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return S`<eox-itemfilter-text
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
      ></eox-itemfilter-text>`;case"multiselect":case"select":return S`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Bi(Pi(n.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return S`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return S`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return S``}}function Ac(e,t){return[...e].sort((n,r)=>J(t.titleProperty,n).toString().localeCompare(J(t.titleProperty,r)).toString())}function _c(e,t,n){return S`
    ${F(e.dirty,()=>S`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
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
                <div class="tooltip left">Reset filter</div>
              `}
        </button>
      `)}
  `}function Cc(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}class Sc extends gt{static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}#t=[];#e=[];#n=gc;constructor(){super(),this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Qe(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}apply(){this.#t=wc(this.#n,this.#e,this),this.search()}async searchHandler(){await xc(this.#n,this.#e,this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(t){return Ac(t,this.#n)}#i(t,n){return Mc(t,n,this)}#r(t,n){return _c(t,n,this)}resetFilters(){Cc(this)}firstUpdated(t){let n={};Xr.map(r=>{n={...n,[r]:this[r]}}),this.#n=n,this.#e=this.items?.map((r,i)=>Object.assign({id:r[this.idProperty]||`item-${i}`},r))||[],this.apply()}updated(t){Xr.map(n=>t.has(n)?(this.firstUpdated(void 0),!0):!1)}updateResult(t){this.selectedResult=t.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(t){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:t.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(t){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:t.detail,bubbles:!0,composed:!0}))}emitResultAction(t){this.dispatchEvent(new CustomEvent("click:result-action",{detail:t.detail,bubbles:!0,composed:!0}))}render(){return S`
      <style>
        ${Vs}
        ${!this.unstyled&&ir}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":$t}
        @submit="${t=>t.preventDefault()}"
      >
        ${F(this.filterProperties,()=>S`
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
                  ${F(!this.inlineMode,()=>S`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${F(!this.inlineMode&&this.#n.filterProperties&&!this.inlineMode&&this.#n.filterProperties&&nr(this.filters),()=>S`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?$t:S`
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
                      ${Ze(Object.values(this.filters),(t,n)=>S` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${t}
                              @details-toggled=${r=>Ci(r,this.#n,this)}
                              data-details="${t.key}"
                            >
                              ${this.#r(t,Yr(n,1))}
                              ${this.#i(t,Yr(n,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${F(this.#n?.showResults&&this.results,()=>S`
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
    `}}customElements.define("eox-itemfilter",Sc);export{Sc as EOxItemFilter};
