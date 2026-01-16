import{x as d,T as te,E as yt,i as ut,b as Ie,a as Zo}from"./addCommonStyleSheet-Yq-7s86-.js";import{n as D}from"./when-CI7b_ccM.js";import{c as Xo}from"./repeat-CWCsuY6g.js";import{e as Yo,i as zo,t as _t}from"./directive-CwRn8Fwj.js";import{f as Wo,m as Go}from"./directive-helpers-BBe88Per.js";import{o as Jo}from"./unsafe-html-9XwyaUtW.js";import{o as se}from"./map-Bv-shLAs.js";import{e as Ne}from"./style-DKU08UVs.js";import{q as ee,v as Ko}from"./templates-DpRAJmv9.js";import{_ as Qo}from"./index-eUEnCr0o.js";import{g as tr}from"./getElement-CdRlZPdn.js";var E=e=>e!==void 0,ho=(e,t,o)=>t in e?e[t]:e[t]=o;const zt={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class er{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,o){return be(t,o).join("")}}function be(e,t){return fo(e,t,[]).join("")}function fo(e,t,o){if(e.nodeType===zt.CDATA_SECTION||e.nodeType===zt.TEXT)t?o.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(e.nodeValue);else{var r;for(r=e.firstChild;r;r=r.nextSibling)fo(r,t,o)}return o}function or(e,t,o,r){for(var n=rr(t);n;n=nr(n)){var i=n.namespaceURI||null,a=e[i];if(E(a)){var s=a[n.localName];E(s)&&s.call(r,n,o)}}}function rr(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==zt.ELEMENT;)t=t.nextSibling;return t}function nr(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==zt.ELEMENT;)t=t.nextSibling;return t}function F(e,t,o){return ir(e,t,o)}function ir(e,t,o){var r=E(o)?o:{},n,i;for(n=0,i=e.length;n<i;++n)r[e[n]]=t;return r}function po(e,t){return(function(o,r){var n=e.call(E(t)?t:this,o,r);if(E(n)){var i=r[r.length-1];i.push(n)}})}function k(e,t,o,r,n){return r.push(e),or(t,o,r,n),r.pop()}function p(e,t,o){return(function(r,n){let i=e.call(E(o)?o:this,r,n);if(E(i)){var a=n[n.length-1],s=E(t)?t:r.localName;a[s]=i}})}function G(e,t,o){return(function(r,n){var i=e.call(E(o)?o:this,r,n);if(E(i)){var a=n[n.length-1],s=E(t)?t:r.localName,l=ho(a,s,[]);l.push(i)}})}const ar=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function sr(e){return e.replace(ar,"")}function Lt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function Rt(e){return gt(be(e,!1))}function gt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function xe(e){return fe(be(e,!1))}function fe(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function A(e){return sr(be(e,!1))}const lr="http://www.w3.org/1999/xlink";function ke(e){return e.getAttributeNS(lr,"href")}function ur(e,t){return k({},Pr,e,t)}function go(e){return[gt(e.getAttribute("minx")),gt(e.getAttribute("miny")),gt(e.getAttribute("maxx")),gt(e.getAttribute("maxy"))]}function cr(e,t){const o=go(e),r=[gt(e.getAttribute("resx")),gt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:o,res:r}}function dr(e,t){const o=go(e);if(!(!E(o[0])||!E(o[1])||!E(o[2])||!E(o[3])))return o}function hr(e,t){const o=parseFloat(e.getAttribute("min")),r=parseFloat(e.getAttribute("max"));return{min:o,max:r}}function fr(e,t){const o=k({},Mr,e,t);if(!E(o))return;const r=o.westBoundLongitude,n=o.southBoundLatitude,i=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!E(r)||!E(n)||!E(i)||!E(a)))return[r,n,i,a]}function pr(e,t){return k({},Dr,e,t)}function gr(e,t){return k({},Vr,e,t)}function yr(e,t){return k({},Or,e,t)}function mr(e,t){return k({},Rr,e,t)}function vr(e,t){return k({},Ir,e,t)}function br(e,t){return k([],Hr,e,t)}function wr(e,t){const o=Lt(e.getAttribute("queryable"));return k({queryable:E(o)?o:!1},vo,e,t)}function Sr(e,t){var o=t[t.length-1];const r=k({},vo,e,t);if(!E(r))return;let n=Lt(e.getAttribute("queryable"));E(n)||(n=o.queryable),r.queryable=E(n)?n:!1;let i=fe(e.getAttribute("cascaded"));E(i)||(i=o.cascaded),r.cascaded=i;let a=Lt(e.getAttribute("opaque"));E(a)||(a=o.opaque),r.opaque=E(a)?a:!1;let s=Lt(e.getAttribute("noSubsets"));E(s)||(s=o.noSubsets),r.noSubsets=E(s)?s:!1;let l=gt(e.getAttribute("fixedWidth"));E(l)||(l=o.fixedWidth),r.fixedWidth=l;let u=gt(e.getAttribute("fixedHeight"));E(u)||(u=o.fixedHeight),r.fixedHeight=u;const f=["Style","CRS","AuthorityURL"];for(let v=0,x=f.length;v<x;v++){const g=f[v],w=o[g];if(E(w)){let B=ho(r,g,[]);B=B.concat(w),r[g]=B}}const h=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let v=0,x=h.length;v<x;v++){const g=h[v],w=r[g];if(!E(w)){const B=o[g];r[g]=B}}return r}function xr(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Lt(e.getAttribute("multipleValues")),nearestValue:Lt(e.getAttribute("nearestValue")),current:Lt(e.getAttribute("current")),values:A(e)}}function vt(e,t){return k({},qr,e,t)}function Er(e,t){return k({},Br,e,t)}function $r(e,t){return k({},kr,e,t)}function Cr(e,t){return k({},Ur,e,t)}function Ee(e,t){return k({},Nr,e,t)}function yo(e,t){var o=vt(e,t);if(E(o)){const r=[fe(e.getAttribute("width")),fe(e.getAttribute("height"))];return o.size=r,o}}function Ar(e,t){var o=vt(e,t);if(E(o))return o.name=e.getAttribute("name"),o}function Tr(e,t){var o=vt(e,t);if(E(o))return o.type=e.getAttribute("type"),o}function Lr(e,t){return k({},Fr,e,t)}function mo(e,t){return k([],jr,e,t)}const q=[null,"http://www.opengis.net/wms"],_r=F(q,{Service:p(gr),Capability:p(pr)}),Dr=F(q,{Request:p(Er),Exception:p(br),Layer:p(wr)}),Vr=F(q,{Name:p(A),Title:p(A),Abstract:p(A),KeywordList:p(mo),OnlineResource:p(ke),ContactInformation:p(yr),Fees:p(A),AccessConstraints:p(A),LayerLimit:p(xe),MaxWidth:p(xe),MaxHeight:p(xe)}),Or=F(q,{ContactPersonPrimary:p(mr),ContactPosition:p(A),ContactAddress:p(vr),ContactVoiceTelephone:p(A),ContactFacsimileTelephone:p(A),ContactElectronicMailAddress:p(A)}),Rr=F(q,{ContactPerson:p(A),ContactOrganization:p(A)}),Ir=F(q,{AddressType:p(A),Address:p(A),City:p(A),StateOrProvince:p(A),PostCode:p(A),Country:p(A)}),Hr=F(q,{Format:po(A)}),vo=F(q,{Name:p(A),Title:p(A),Abstract:p(A),KeywordList:p(mo),CRS:G(A),SRS:G(A),EX_GeographicBoundingBox:p(fr),LatLonBoundingBox:p(dr),BoundingBox:G(cr),Dimension:G(xr),Attribution:p(ur),AuthorityURL:G(Ar),Identifier:G(A),MetadataURL:G(Tr),DataURL:G(vt),FeatureListURL:G(vt),Style:G(Lr),MinScaleDenominator:p(Rt),MaxScaleDenominator:p(Rt),ScaleHint:p(hr),Layer:G(Sr)}),Pr=F(q,{Title:p(A),OnlineResource:p(ke),LogoURL:p(yo)}),Mr=F(q,{westBoundLongitude:p(Rt),eastBoundLongitude:p(Rt),southBoundLatitude:p(Rt),northBoundLatitude:p(Rt)}),Br=F(q,{GetCapabilities:p(Ee),GetMap:p(Ee),GetFeatureInfo:p(Ee)}),Nr=F(q,{Format:G(A),DCPType:G($r)}),kr=F(q,{HTTP:p(Cr)}),Ur=F(q,{Get:p(vt),Post:p(vt)}),Fr=F(q,{Name:p(A),Title:p(A),Abstract:p(A),LegendURL:G(yo),StyleSheetURL:p(vt),StyleURL:p(vt)}),qr=F(q,{Format:p(A),OnlineResource:p(ke)}),jr=F(q,{Keyword:po(A)});class Zr{constructor(t,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new er(o),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let o=t.firstChild;o;o=o.nextSibling)if(o.nodeType==zt.ELEMENT)return this.readFromNode(o);return null}readFromNode(t){return this.version=t.getAttribute("version"),k({version:this.version},_r,t,[])||null}}async function Xr(e){let t=new URL(e),o=t.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let r=t.toString();const n=await fetch(r);if(n.ok){const i=await n.text();return new Zr(i).toJSON()}else throw new Error(`Error: ${n.status}`)}function Ue(e){const t=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":o.test(e)?"XYZ":!1}function Yr(e){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),r=Ue(e);return!!(e&&o&&r)}function bo(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function zr(e){try{return JSON.parse(bo(e)),!!e}catch{return!1}}function Wr(e,t){const o=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):Array.isArray(s)?(o.delete(a),s.forEach(l=>{o.append(a,l)})):o.set(a,s)});const r=e.split("?")[0],n=o.toString();return`${r}?${n}`}function Je(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function ft(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Je(Object(o),!0).forEach(function(r){Gr(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Je(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function le(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?le=function(t){return typeof t}:le=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},le(e)}function Gr(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function bt(){return bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},bt.apply(this,arguments)}function Jr(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}function Kr(e,t){if(e==null)return{};var o=Jr(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var Qr="1.15.6";function mt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var wt=mt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Wt=mt(/Edge/i),Ke=mt(/firefox/i),Ft=mt(/safari/i)&&!mt(/chrome/i)&&!mt(/android/i),Fe=mt(/iP(ad|od|hone)/i),wo=mt(/chrome/i)&&mt(/android/i),So={capture:!1,passive:!1};function C(e,t,o){e.addEventListener(t,o,!wt&&So)}function $(e,t,o){e.removeEventListener(t,o,!wt&&So)}function pe(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function xo(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function lt(e,t,o,r){if(e){o=o||document;do{if(t!=null&&(t[0]===">"?e.parentNode===o&&pe(e,t):pe(e,t))||r&&e===o)return e;if(e===o)break}while(e=xo(e))}return null}var Qe=/\s+/g;function tt(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(Qe," ").replace(" "+t+" "," ");e.className=(r+(o?" "+t:"")).replace(Qe," ")}}function y(e,t,o){var r=e&&e.style;if(r){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),t===void 0?o:o[t];!(t in r)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),r[t]=o+(typeof o=="string"?"":"px")}}function Ht(e,t){var o="";if(typeof e=="string")o=e;else do{var r=y(e,"transform");r&&r!=="none"&&(o=r+" "+o)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function Eo(e,t,o){if(e){var r=e.getElementsByTagName(t),n=0,i=r.length;if(o)for(;n<i;n++)o(r[n],n);return r}return[]}function ht(){var e=document.scrollingElement;return e||document.documentElement}function M(e,t,o,r,n){if(!(!e.getBoundingClientRect&&e!==window)){var i,a,s,l,u,f,h;if(e!==window&&e.parentNode&&e!==ht()?(i=e.getBoundingClientRect(),a=i.top,s=i.left,l=i.bottom,u=i.right,f=i.height,h=i.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,f=window.innerHeight,h=window.innerWidth),(t||o)&&e!==window&&(n=n||e.parentNode,!wt))do if(n&&n.getBoundingClientRect&&(y(n,"transform")!=="none"||o&&y(n,"position")!=="static")){var v=n.getBoundingClientRect();a-=v.top+parseInt(y(n,"border-top-width")),s-=v.left+parseInt(y(n,"border-left-width")),l=a+i.height,u=s+i.width;break}while(n=n.parentNode);if(r&&e!==window){var x=Ht(n||e),g=x&&x.a,w=x&&x.d;x&&(a/=w,s/=g,h/=g,f/=w,l=a+f,u=s+h)}return{top:a,left:s,bottom:l,right:u,width:h,height:f}}}function to(e,t,o){for(var r=$t(e,!0),n=M(e)[t];r;){var i=M(r)[o],a=void 0;if(a=n>=i,!a)return r;if(r===ht())break;r=$t(r,!1)}return!1}function Pt(e,t,o,r){for(var n=0,i=0,a=e.children;i<a.length;){if(a[i].style.display!=="none"&&a[i]!==m.ghost&&(r||a[i]!==m.dragged)&&lt(a[i],o.draggable,e,!1)){if(n===t)return a[i];n++}i++}return null}function qe(e,t){for(var o=e.lastElementChild;o&&(o===m.ghost||y(o,"display")==="none"||t&&!pe(o,t));)o=o.previousElementSibling;return o||null}function rt(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==m.clone&&(!t||pe(e,t))&&o++;return o}function eo(e){var t=0,o=0,r=ht();if(e)do{var n=Ht(e),i=n.a,a=n.d;t+=e.scrollLeft*i,o+=e.scrollTop*a}while(e!==r&&(e=e.parentNode));return[t,o]}function tn(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var r in t)if(t.hasOwnProperty(r)&&t[r]===e[o][r])return Number(o)}return-1}function $t(e,t){if(!e||!e.getBoundingClientRect)return ht();var o=e,r=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=y(o);if(o.clientWidth<o.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return ht();if(r||t)return o;r=!0}}while(o=o.parentNode);return ht()}function en(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function $e(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var qt;function $o(e,t){return function(){if(!qt){var o=arguments,r=this;o.length===1?e.call(r,o[0]):e.apply(r,o),qt=setTimeout(function(){qt=void 0},t)}}}function on(){clearTimeout(qt),qt=void 0}function Co(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function Ao(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function To(e,t,o){var r={};return Array.from(e.children).forEach(function(n){var i,a,s,l;if(!(!lt(n,t.draggable,e,!1)||n.animated||n===o)){var u=M(n);r.left=Math.min((i=r.left)!==null&&i!==void 0?i:1/0,u.left),r.top=Math.min((a=r.top)!==null&&a!==void 0?a:1/0,u.top),r.right=Math.max((s=r.right)!==null&&s!==void 0?s:-1/0,u.right),r.bottom=Math.max((l=r.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var J="Sortable"+new Date().getTime();function rn(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(n){if(!(y(n,"display")==="none"||n===m.ghost)){e.push({target:n,rect:M(n)});var i=ft({},e[e.length-1].rect);if(n.thisAnimationDuration){var a=Ht(n,!0);a&&(i.top-=a.f,i.left-=a.e)}n.fromRect=i}})}},addAnimationState:function(r){e.push(r)},removeAnimationState:function(r){e.splice(tn(e,{target:r}),1)},animateAll:function(r){var n=this;if(!this.options.animation){clearTimeout(t),typeof r=="function"&&r();return}var i=!1,a=0;e.forEach(function(s){var l=0,u=s.target,f=u.fromRect,h=M(u),v=u.prevFromRect,x=u.prevToRect,g=s.rect,w=Ht(u,!0);w&&(h.top-=w.f,h.left-=w.e),u.toRect=h,u.thisAnimationDuration&&$e(v,h)&&!$e(f,h)&&(g.top-h.top)/(g.left-h.left)===(f.top-h.top)/(f.left-h.left)&&(l=an(g,v,x,n.options)),$e(h,f)||(u.prevFromRect=f,u.prevToRect=h,l||(l=n.options.animation),n.animate(u,g,h,l)),l&&(i=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),i?t=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),e=[]},animate:function(r,n,i,a){if(a){y(r,"transition",""),y(r,"transform","");var s=Ht(this.el),l=s&&s.a,u=s&&s.d,f=(n.left-i.left)/(l||1),h=(n.top-i.top)/(u||1);r.animatingX=!!f,r.animatingY=!!h,y(r,"transform","translate3d("+f+"px,"+h+"px,0)"),this.forRepaintDummy=nn(r),y(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),y(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){y(r,"transition",""),y(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function nn(e){return e.offsetWidth}function an(e,t,o,r){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*r.animation}var Dt=[],Ce={initializeByDefault:!0},Gt={mount:function(t){for(var o in Ce)Ce.hasOwnProperty(o)&&!(o in t)&&(t[o]=Ce[o]);Dt.forEach(function(r){if(r.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Dt.push(t)},pluginEvent:function(t,o,r){var n=this;this.eventCanceled=!1,r.cancel=function(){n.eventCanceled=!0};var i=t+"Global";Dt.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][i]&&o[a.pluginName][i](ft({sortable:o},r)),o.options[a.pluginName]&&o[a.pluginName][t]&&o[a.pluginName][t](ft({sortable:o},r)))})},initializePlugins:function(t,o,r,n){Dt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,o,t.options);u.sortable=t,u.options=t.options,t[l]=u,bt(r,u.defaults)}});for(var i in t.options)if(t.options.hasOwnProperty(i)){var a=this.modifyOption(t,i,t.options[i]);typeof a<"u"&&(t.options[i]=a)}},getEventProperties:function(t,o){var r={};return Dt.forEach(function(n){typeof n.eventProperties=="function"&&bt(r,n.eventProperties.call(o[n.pluginName],t))}),r},modifyOption:function(t,o,r){var n;return Dt.forEach(function(i){t[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[o]=="function"&&(n=i.optionListeners[o].call(t[i.pluginName],r))}),n}};function sn(e){var t=e.sortable,o=e.rootEl,r=e.name,n=e.targetEl,i=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,f=e.oldDraggableIndex,h=e.newDraggableIndex,v=e.originalEvent,x=e.putSortable,g=e.extraEventProperties;if(t=t||o&&o[J],!!t){var w,B=t.options,nt="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!wt&&!Wt?w=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(r,!0,!0)),w.to=a||o,w.from=s||o,w.item=n||o,w.clone=i,w.oldIndex=l,w.newIndex=u,w.oldDraggableIndex=f,w.newDraggableIndex=h,w.originalEvent=v,w.pullMode=x?x.lastPutMode:void 0;var H=ft(ft({},g),Gt.getEventProperties(r,t));for(var K in H)w[K]=H[K];o&&o.dispatchEvent(w),B[nt]&&B[nt].call(t,w)}}var ln=["evt"],W=function(t,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.evt,i=Kr(r,ln);Gt.pluginEvent.bind(m)(t,o,ft({dragEl:c,parentEl:O,ghostEl:S,rootEl:_,nextEl:Tt,lastDownEl:ue,cloneEl:V,cloneHidden:Et,dragStarted:Nt,putSortable:U,activeSortable:m.active,originalEvent:n,oldIndex:It,oldDraggableIndex:jt,newIndex:et,newDraggableIndex:xt,hideGhostForTarget:Vo,unhideGhostForTarget:Oo,cloneNowHidden:function(){Et=!0},cloneNowShown:function(){Et=!1},dispatchSortableEvent:function(s){z({sortable:o,name:s,originalEvent:n})}},i))};function z(e){sn(ft({putSortable:U,cloneEl:V,targetEl:c,rootEl:_,oldIndex:It,oldDraggableIndex:jt,newIndex:et,newDraggableIndex:xt},e))}var c,O,S,_,Tt,ue,V,Et,It,et,jt,xt,oe,U,Ot=!1,ge=!1,ye=[],Ct,st,Ae,Te,oo,ro,Nt,Vt,Zt,Xt=!1,re=!1,ce,j,Le=[],He=!1,me=[],we=typeof document<"u",ne=Fe,no=Wt||wt?"cssFloat":"float",un=we&&!wo&&!Fe&&"draggable"in document.createElement("div"),Lo=(function(){if(we){if(wt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),_o=function(t,o){var r=y(t),n=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),i=Pt(t,0,o),a=Pt(t,1,o),s=i&&y(i),l=a&&y(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+M(i).width,f=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+M(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&s.float&&s.float!=="none"){var h=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===h)?"vertical":"horizontal"}return i&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=n&&r[no]==="none"||a&&r[no]==="none"&&u+f>n)?"vertical":"horizontal"},cn=function(t,o,r){var n=r?t.left:t.top,i=r?t.right:t.bottom,a=r?t.width:t.height,s=r?o.left:o.top,l=r?o.right:o.bottom,u=r?o.width:o.height;return n===s||i===l||n+a/2===s+u/2},dn=function(t,o){var r;return ye.some(function(n){var i=n[J].options.emptyInsertThreshold;if(!(!i||qe(n))){var a=M(n),s=t>=a.left-i&&t<=a.right+i,l=o>=a.top-i&&o<=a.bottom+i;if(s&&l)return r=n}}),r},Do=function(t){function o(i,a){return function(s,l,u,f){var h=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(i==null&&(a||h))return!0;if(i==null||i===!1)return!1;if(a&&i==="clone")return i;if(typeof i=="function")return o(i(s,l,u,f),a)(s,l,u,f);var v=(a?s:l).options.group.name;return i===!0||typeof i=="string"&&i===v||i.join&&i.indexOf(v)>-1}}var r={},n=t.group;(!n||le(n)!="object")&&(n={name:n}),r.name=n.name,r.checkPull=o(n.pull,!0),r.checkPut=o(n.put),r.revertClone=n.revertClone,t.group=r},Vo=function(){!Lo&&S&&y(S,"display","none")},Oo=function(){!Lo&&S&&y(S,"display","")};we&&!wo&&document.addEventListener("click",function(e){if(ge)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),ge=!1,!1},!0);var At=function(t){if(c){t=t.touches?t.touches[0]:t;var o=dn(t.clientX,t.clientY);if(o){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);r.target=r.rootEl=o,r.preventDefault=void 0,r.stopPropagation=void 0,o[J]._onDragOver(r)}}},hn=function(t){c&&c.parentNode[J]._isOutsideThisEl(t.target)};function m(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=bt({},t),e[J]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return _o(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:m.supportPointer!==!1&&"PointerEvent"in window&&(!Ft||Fe),emptyInsertThreshold:5};Gt.initializePlugins(this,e,o);for(var r in o)!(r in t)&&(t[r]=o[r]);Do(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:un,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?C(e,"pointerdown",this._onTapStart):(C(e,"mousedown",this._onTapStart),C(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(C(e,"dragover",this),C(e,"dragenter",this)),ye.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),bt(this,rn())}m.prototype={constructor:m,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Vt=null)},_getDirection:function(t,o){return typeof this.options.direction=="function"?this.options.direction.call(this,t,o,c):this.options.direction},_onTapStart:function(t){if(t.cancelable){var o=this,r=this.el,n=this.options,i=n.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,f=n.filter;if(wn(r),!c&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||n.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Ft&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=lt(l,n.draggable,r,!1),!(l&&l.animated)&&ue!==l)){if(It=rt(l),jt=rt(l,n.draggable),typeof f=="function"){if(f.call(this,t,l,this)){z({sortable:o,rootEl:u,name:"filter",targetEl:l,toEl:r,fromEl:r}),W("filter",o,{evt:t}),i&&t.preventDefault();return}}else if(f&&(f=f.split(",").some(function(h){if(h=lt(u,h.trim(),r,!1),h)return z({sortable:o,rootEl:h,name:"filter",targetEl:l,fromEl:r,toEl:r}),W("filter",o,{evt:t}),!0}),f)){i&&t.preventDefault();return}n.handle&&!lt(u,n.handle,r,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,o,r){var n=this,i=n.el,a=n.options,s=i.ownerDocument,l;if(r&&!c&&r.parentNode===i){var u=M(r);if(_=i,c=r,O=c.parentNode,Tt=c.nextSibling,ue=r,oe=a.group,m.dragged=c,Ct={target:c,clientX:(o||t).clientX,clientY:(o||t).clientY},oo=Ct.clientX-u.left,ro=Ct.clientY-u.top,this._lastX=(o||t).clientX,this._lastY=(o||t).clientY,c.style["will-change"]="all",l=function(){if(W("delayEnded",n,{evt:t}),m.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Ke&&n.nativeDraggable&&(c.draggable=!0),n._triggerDragStart(t,o),z({sortable:n,name:"choose",originalEvent:t}),tt(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(f){Eo(c,f.trim(),_e)}),C(s,"dragover",At),C(s,"mousemove",At),C(s,"touchmove",At),a.supportPointer?(C(s,"pointerup",n._onDrop),!this.nativeDraggable&&C(s,"pointercancel",n._onDrop)):(C(s,"mouseup",n._onDrop),C(s,"touchend",n._onDrop),C(s,"touchcancel",n._onDrop)),Ke&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),W("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(Wt||wt))){if(m.eventCanceled){this._onDrop();return}a.supportPointer?(C(s,"pointerup",n._disableDelayedDrag),C(s,"pointercancel",n._disableDelayedDrag)):(C(s,"mouseup",n._disableDelayedDrag),C(s,"touchend",n._disableDelayedDrag),C(s,"touchcancel",n._disableDelayedDrag)),C(s,"mousemove",n._delayedDragTouchMoveHandler),C(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&C(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var o=t.touches?t.touches[0]:t;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&_e(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,o){o=o||t.pointerType=="touch"&&t,!this.nativeDraggable||o?this.options.supportPointer?C(document,"pointermove",this._onTouchMove):o?C(document,"touchmove",this._onTouchMove):C(document,"mousemove",this._onTouchMove):(C(c,"dragend",this),C(_,"dragstart",this._onDragStart));try{document.selection?de(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,o){if(Ot=!1,_&&c){W("dragStarted",this,{evt:o}),this.nativeDraggable&&C(document,"dragover",hn);var r=this.options;!t&&tt(c,r.dragClass,!1),tt(c,r.ghostClass,!0),m.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(st){this._lastX=st.clientX,this._lastY=st.clientY,Vo();for(var t=document.elementFromPoint(st.clientX,st.clientY),o=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(st.clientX,st.clientY),t!==o);)o=t;if(c.parentNode[J]._isOutsideThisEl(t),o)do{if(o[J]){var r=void 0;if(r=o[J]._onDragOver({clientX:st.clientX,clientY:st.clientY,target:t,rootEl:o}),r&&!this.options.dragoverBubble)break}t=o}while(o=xo(o));Oo()}},_onTouchMove:function(t){if(Ct){var o=this.options,r=o.fallbackTolerance,n=o.fallbackOffset,i=t.touches?t.touches[0]:t,a=S&&Ht(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,u=ne&&j&&eo(j),f=(i.clientX-Ct.clientX+n.x)/(s||1)+(u?u[0]-Le[0]:0)/(s||1),h=(i.clientY-Ct.clientY+n.y)/(l||1)+(u?u[1]-Le[1]:0)/(l||1);if(!m.active&&!Ot){if(r&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<r)return;this._onDragStart(t,!0)}if(S){a?(a.e+=f-(Ae||0),a.f+=h-(Te||0)):a={a:1,b:0,c:0,d:1,e:f,f:h};var v="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");y(S,"webkitTransform",v),y(S,"mozTransform",v),y(S,"msTransform",v),y(S,"transform",v),Ae=f,Te=h,st=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:_,o=M(c,!0,ne,!0,t),r=this.options;if(ne){for(j=t;y(j,"position")==="static"&&y(j,"transform")==="none"&&j!==document;)j=j.parentNode;j!==document.body&&j!==document.documentElement?(j===document&&(j=ht()),o.top+=j.scrollTop,o.left+=j.scrollLeft):j=ht(),Le=eo(j)}S=c.cloneNode(!0),tt(S,r.ghostClass,!1),tt(S,r.fallbackClass,!0),tt(S,r.dragClass,!0),y(S,"transition",""),y(S,"transform",""),y(S,"box-sizing","border-box"),y(S,"margin",0),y(S,"top",o.top),y(S,"left",o.left),y(S,"width",o.width),y(S,"height",o.height),y(S,"opacity","0.8"),y(S,"position",ne?"absolute":"fixed"),y(S,"zIndex","100000"),y(S,"pointerEvents","none"),m.ghost=S,t.appendChild(S),y(S,"transform-origin",oo/parseInt(S.style.width)*100+"% "+ro/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,o){var r=this,n=t.dataTransfer,i=r.options;if(W("dragStart",this,{evt:t}),m.eventCanceled){this._onDrop();return}W("setupClone",this),m.eventCanceled||(V=Ao(c),V.removeAttribute("id"),V.draggable=!1,V.style["will-change"]="",this._hideClone(),tt(V,this.options.chosenClass,!1),m.clone=V),r.cloneId=de(function(){W("clone",r),!m.eventCanceled&&(r.options.removeCloneOnHide||_.insertBefore(V,c),r._hideClone(),z({sortable:r,name:"clone"}))}),!o&&tt(c,i.dragClass,!0),o?(ge=!0,r._loopId=setInterval(r._emulateDragOver,50)):($(document,"mouseup",r._onDrop),$(document,"touchend",r._onDrop),$(document,"touchcancel",r._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(r,n,c)),C(document,"drop",r),y(c,"transform","translateZ(0)")),Ot=!0,r._dragStartId=de(r._dragStarted.bind(r,o,t)),C(document,"selectstart",r),Nt=!0,window.getSelection().removeAllRanges(),Ft&&y(document.body,"user-select","none")},_onDragOver:function(t){var o=this.el,r=t.target,n,i,a,s=this.options,l=s.group,u=m.active,f=oe===l,h=s.sort,v=U||u,x,g=this,w=!1;if(He)return;function B(pt,Mt){W(pt,g,ft({evt:t,isOwner:f,axis:x?"vertical":"horizontal",revert:a,dragRect:n,targetRect:i,canSort:h,fromSortable:v,target:r,completed:H,onMove:function(Jt,Kt){return ie(_,o,c,n,Jt,M(Jt),t,Kt)},changed:K},Mt))}function nt(){B("dragOverAnimationCapture"),g.captureAnimationState(),g!==v&&v.captureAnimationState()}function H(pt){return B("dragOverCompleted",{insertion:pt}),pt&&(f?u._hideClone():u._showClone(g),g!==v&&(tt(c,U?U.options.ghostClass:u.options.ghostClass,!1),tt(c,s.ghostClass,!0)),U!==g&&g!==m.active?U=g:g===m.active&&U&&(U=null),v===g&&(g._ignoreWhileAnimating=r),g.animateAll(function(){B("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==v&&(v.animateAll(),v._ignoreWhileAnimating=null)),(r===c&&!c.animated||r===o&&!r.animated)&&(Vt=null),!s.dragoverBubble&&!t.rootEl&&r!==document&&(c.parentNode[J]._isOutsideThisEl(t.target),!pt&&At(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function K(){et=rt(c),xt=rt(c,s.draggable),z({sortable:g,name:"change",toEl:o,newIndex:et,newDraggableIndex:xt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),r=lt(r,s.draggable,o,!0),B("dragOver"),m.eventCanceled)return w;if(c.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||g._ignoreWhileAnimating===r)return H(!1);if(ge=!1,u&&!s.disabled&&(f?h||(a=O!==_):U===this||(this.lastPutMode=oe.checkPull(this,u,c,t))&&l.checkPut(this,u,c,t))){if(x=this._getDirection(t,r)==="vertical",n=M(c),B("dragOverValid"),m.eventCanceled)return w;if(a)return O=_,nt(),this._hideClone(),B("revert"),m.eventCanceled||(Tt?_.insertBefore(c,Tt):_.appendChild(c)),H(!0);var Z=qe(o,s.draggable);if(!Z||yn(t,x,this)&&!Z.animated){if(Z===c)return H(!1);if(Z&&o===t.target&&(r=Z),r&&(i=M(r)),ie(_,o,c,n,r,i,t,!!r)!==!1)return nt(),Z&&Z.nextSibling?o.insertBefore(c,Z.nextSibling):o.appendChild(c),O=o,K(),H(!0)}else if(Z&&gn(t,x,this)){var ct=Pt(o,0,s,!0);if(ct===c)return H(!1);if(r=ct,i=M(r),ie(_,o,c,n,r,i,t,!1)!==!1)return nt(),o.insertBefore(c,ct),O=o,K(),H(!0)}else if(r.parentNode===o){i=M(r);var b=0,T,R=c.parentNode!==o,L=!cn(c.animated&&c.toRect||n,r.animated&&r.toRect||i,x),X=x?"top":"left",Q=to(r,"top","top")||to(c,"top","top"),ot=Q?Q.scrollTop:void 0;Vt!==r&&(T=i[X],Xt=!1,re=!L&&s.invertSwap||R),b=mn(t,r,i,x,L?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,re,Vt===r);var I;if(b!==0){var Y=rt(c);do Y-=b,I=O.children[Y];while(I&&(y(I,"display")==="none"||I===S))}if(b===0||I===r)return H(!1);Vt=r,Zt=b;var it=r.nextElementSibling,at=!1;at=b===1;var dt=ie(_,o,c,n,r,i,t,at);if(dt!==!1)return(dt===1||dt===-1)&&(at=dt===1),He=!0,setTimeout(pn,30),nt(),at&&!it?o.appendChild(c):r.parentNode.insertBefore(c,at?it:r),Q&&Co(Q,0,ot-Q.scrollTop),O=c.parentNode,T!==void 0&&!re&&(ce=Math.abs(T-M(r)[X])),K(),H(!0)}if(o.contains(c))return H(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",At),$(document,"mousemove",At),$(document,"touchmove",At)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var o=this.el,r=this.options;if(et=rt(c),xt=rt(c,r.draggable),W("drop",this,{evt:t}),O=c&&c.parentNode,et=rt(c),xt=rt(c,r.draggable),m.eventCanceled){this._nulling();return}Ot=!1,re=!1,Xt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Pe(this.cloneId),Pe(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ft&&y(document.body,"user-select",""),y(c,"transform",""),t&&(Nt&&(t.cancelable&&t.preventDefault(),!r.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(_===O||U&&U.lastPutMode!=="clone")&&V&&V.parentNode&&V.parentNode.removeChild(V),c&&(this.nativeDraggable&&$(c,"dragend",this),_e(c),c.style["will-change"]="",Nt&&!Ot&&tt(c,U?U.options.ghostClass:this.options.ghostClass,!1),tt(c,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:O,newIndex:null,newDraggableIndex:null,originalEvent:t}),_!==O?(et>=0&&(z({rootEl:O,name:"add",toEl:O,fromEl:_,originalEvent:t}),z({sortable:this,name:"remove",toEl:O,originalEvent:t}),z({rootEl:O,name:"sort",toEl:O,fromEl:_,originalEvent:t}),z({sortable:this,name:"sort",toEl:O,originalEvent:t})),U&&U.save()):et!==It&&et>=0&&(z({sortable:this,name:"update",toEl:O,originalEvent:t}),z({sortable:this,name:"sort",toEl:O,originalEvent:t})),m.active&&((et==null||et===-1)&&(et=It,xt=jt),z({sortable:this,name:"end",toEl:O,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){W("nulling",this),_=c=O=S=Tt=V=ue=Et=Ct=st=Nt=et=xt=It=jt=Vt=Zt=U=oe=m.dragged=m.ghost=m.clone=m.active=null,me.forEach(function(t){t.checked=!0}),me.length=Ae=Te=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":c&&(this._onDragOver(t),fn(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],o,r=this.el.children,n=0,i=r.length,a=this.options;n<i;n++)o=r[n],lt(o,a.draggable,this.el,!1)&&t.push(o.getAttribute(a.dataIdAttr)||bn(o));return t},sort:function(t,o){var r={},n=this.el;this.toArray().forEach(function(i,a){var s=n.children[a];lt(s,this.options.draggable,n,!1)&&(r[i]=s)},this),o&&this.captureAnimationState(),t.forEach(function(i){r[i]&&(n.removeChild(r[i]),n.appendChild(r[i]))}),o&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,o){return lt(t,o||this.options.draggable,this.el,!1)},option:function(t,o){var r=this.options;if(o===void 0)return r[t];var n=Gt.modifyOption(this,t,o);typeof n<"u"?r[t]=n:r[t]=o,t==="group"&&Do(r)},destroy:function(){W("destroy",this);var t=this.el;t[J]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ye.splice(ye.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Et){if(W("hideClone",this),m.eventCanceled)return;y(V,"display","none"),this.options.removeCloneOnHide&&V.parentNode&&V.parentNode.removeChild(V),Et=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(Et){if(W("showClone",this),m.eventCanceled)return;c.parentNode==_&&!this.options.group.revertClone?_.insertBefore(V,c):Tt?_.insertBefore(V,Tt):_.appendChild(V),this.options.group.revertClone&&this.animate(c,V),y(V,"display",""),Et=!1}}};function fn(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ie(e,t,o,r,n,i,a,s){var l,u=e[J],f=u.options.onMove,h;return window.CustomEvent&&!wt&&!Wt?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=o,l.draggedRect=r,l.related=n||t,l.relatedRect=i||M(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),f&&(h=f.call(u,l,a)),h}function _e(e){e.draggable=!1}function pn(){He=!1}function gn(e,t,o){var r=M(Pt(o.el,0,o.options,!0)),n=To(o.el,o.options,S),i=10;return t?e.clientX<n.left-i||e.clientY<r.top&&e.clientX<r.right:e.clientY<n.top-i||e.clientY<r.bottom&&e.clientX<r.left}function yn(e,t,o){var r=M(qe(o.el,o.options.draggable)),n=To(o.el,o.options,S),i=10;return t?e.clientX>n.right+i||e.clientY>r.bottom&&e.clientX>r.left:e.clientY>n.bottom+i||e.clientX>r.right&&e.clientY>r.top}function mn(e,t,o,r,n,i,a,s){var l=r?e.clientY:e.clientX,u=r?o.height:o.width,f=r?o.top:o.left,h=r?o.bottom:o.right,v=!1;if(!a){if(s&&ce<u*n){if(!Xt&&(Zt===1?l>f+u*i/2:l<h-u*i/2)&&(Xt=!0),Xt)v=!0;else if(Zt===1?l<f+ce:l>h-ce)return-Zt}else if(l>f+u*(1-n)/2&&l<h-u*(1-n)/2)return vn(t)}return v=v||a,v&&(l<f+u*i/2||l>h-u*i/2)?l>f+u/2?1:-1:0}function vn(e){return rt(c)<rt(e)?1:-1}function bn(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,r=0;o--;)r+=t.charCodeAt(o);return r.toString(36)}function wn(e){me.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var r=t[o];r.checked&&me.push(r)}}function de(e){return setTimeout(e,0)}function Pe(e){return clearTimeout(e)}we&&C(document,"touchmove",function(e){(m.active||Ot)&&e.cancelable&&e.preventDefault()});m.utils={on:C,off:$,css:y,find:Eo,is:function(t,o){return!!lt(t,o,t,!1)},extend:en,throttle:$o,closest:lt,toggleClass:tt,clone:Ao,index:rt,nextTick:de,cancelNextTick:Pe,detectDirection:_o,getChild:Pt,expando:J};m.get=function(e){return e[J]};m.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(m.utils=ft(ft({},m.utils),r.utils)),Gt.mount(r)})};m.create=function(e,t){return new m(e,t)};m.version=Qr;var P=[],kt,Me,Be=!1,De,Ve,ve,Ut;function Sn(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(o){var r=o.originalEvent;this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):this.options.supportPointer?C(document,"pointermove",this._handleFallbackAutoScroll):r.touches?C(document,"touchmove",this._handleFallbackAutoScroll):C(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var r=o.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),io(),he(),on()},nulling:function(){ve=Me=kt=Be=Ut=De=Ve=null,P.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,r){var n=this,i=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(i,a);if(ve=o,r||this.options.forceAutoScrollFallback||Wt||wt||Ft){Oe(o,this.options,s,r);var l=$t(s,!0);Be&&(!Ut||i!==De||a!==Ve)&&(Ut&&io(),Ut=setInterval(function(){var u=$t(document.elementFromPoint(i,a),!0);u!==l&&(l=u,he()),Oe(o,n.options,u,r)},10),De=i,Ve=a)}else{if(!this.options.bubbleScroll||$t(s,!0)===ht()){he();return}Oe(o,this.options,$t(s,!1),!1)}}},bt(e,{pluginName:"scroll",initializeByDefault:!0})}function he(){P.forEach(function(e){clearInterval(e.pid)}),P=[]}function io(){clearInterval(Ut)}var Oe=$o(function(e,t,o,r){if(t.scroll){var n=(e.touches?e.touches[0]:e).clientX,i=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=ht(),u=!1,f;Me!==o&&(Me=o,he(),kt=t.scroll,f=t.scrollFn,kt===!0&&(kt=$t(o,!0)));var h=0,v=kt;do{var x=v,g=M(x),w=g.top,B=g.bottom,nt=g.left,H=g.right,K=g.width,Z=g.height,ct=void 0,b=void 0,T=x.scrollWidth,R=x.scrollHeight,L=y(x),X=x.scrollLeft,Q=x.scrollTop;x===l?(ct=K<T&&(L.overflowX==="auto"||L.overflowX==="scroll"||L.overflowX==="visible"),b=Z<R&&(L.overflowY==="auto"||L.overflowY==="scroll"||L.overflowY==="visible")):(ct=K<T&&(L.overflowX==="auto"||L.overflowX==="scroll"),b=Z<R&&(L.overflowY==="auto"||L.overflowY==="scroll"));var ot=ct&&(Math.abs(H-n)<=a&&X+K<T)-(Math.abs(nt-n)<=a&&!!X),I=b&&(Math.abs(B-i)<=a&&Q+Z<R)-(Math.abs(w-i)<=a&&!!Q);if(!P[h])for(var Y=0;Y<=h;Y++)P[Y]||(P[Y]={});(P[h].vx!=ot||P[h].vy!=I||P[h].el!==x)&&(P[h].el=x,P[h].vx=ot,P[h].vy=I,clearInterval(P[h].pid),(ot!=0||I!=0)&&(u=!0,P[h].pid=setInterval(function(){r&&this.layer===0&&m.active._onTouchMove(ve);var it=P[this.layer].vy?P[this.layer].vy*s:0,at=P[this.layer].vx?P[this.layer].vx*s:0;typeof f=="function"&&f.call(m.dragged.parentNode[J],at,it,e,ve,P[this.layer].el)!=="continue"||Co(P[this.layer].el,at,it)}.bind({layer:h}),24))),h++}while(t.bubbleScroll&&v!==l&&(v=$t(v,!1)));Be=u}},30),Ro=function(t){var o=t.originalEvent,r=t.putSortable,n=t.dragEl,i=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(o){var u=r||i;s();var f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,h=document.elementFromPoint(f.clientX,f.clientY);l(),u&&!u.el.contains(h)&&(a("spill"),this.onSpill({dragEl:n,putSortable:r}))}};function je(){}je.prototype={startIndex:null,dragStart:function(t){var o=t.oldDraggableIndex;this.startIndex=o},onSpill:function(t){var o=t.dragEl,r=t.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var n=Pt(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(o,n):this.sortable.el.appendChild(o),this.sortable.animateAll(),r&&r.animateAll()},drop:Ro};bt(je,{pluginName:"revertOnSpill"});function Ze(){}Ze.prototype={onSpill:function(t){var o=t.dragEl,r=t.putSortable,n=r||this.sortable;n.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),n.animateAll()},drop:Ro};bt(Ze,{pluginName:"removeOnSpill"});m.mount(new Sn);m.mount(Ze,je);const xn=e=>{const t=e.item;let o=Array.prototype.slice.call(t.parentNode.childNodes);return o=o.filter(r=>r.nodeType!=Node.ELEMENT_NODE||!r.classList.contains("sortable-fallback")),o},En=(e,t,o,r,n,i)=>{const s=e.item.parentNode;for(const w of o)s.appendChild(w);if(e.oldIndex==e.newIndex)return;const l=r.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(n),f=l.find(w=>w.get(n)===u),h=i.dataset.layer,v=l.find(w=>w.get(n)==h);let x,g;for(x=0;x<l.length;x++)if(l[x]==f){r.removeAt(x);break}for(g=0;g<l.length;g++)if(l[g]===v){x>g?r.insertAt(g,f):r.insertAt(g+1,f);break}t.requestUpdate()};function $n(e,t,o,r){let n=[],i=null;e._sortable=m.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),n=xn(a)},onMove:a=>{i=a.related},onEnd:a=>En(a,r,n,t,o,i)})}function Cn(e,t,o,r){const n=e.getArray();let i=!1;n.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),i=!0),a.get(o)||(a.set(o,`layer ${s}`),i=!0),i&&r.requestUpdate()})}function Xe(e,t,o){let r=[];const n=(i,a,s)=>{r=[...r,...i.filter(u=>u.get(a)===s)];const l=i.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>n(u.getLayers().getArray(),a,s)),r};return n(e,t,o),r}function An(e,t,o){if(!e||!t)return!1;if(!Io(e,o))return!0;const r=e.get("minZoom"),n=e.get("maxZoom"),i=t.getView().getZoom();return i>r&&i<n}function Io(e,t){const o=e.get("minZoom"),r=e.get("maxZoom");return!!(t&&(o!==-1/0||r!==1/0))}function ao(e,t){return!e||!t?void 0:e.getLayers?"group":t.getInteractions().getArray().filter(n=>n.freehand_!==void 0).map(n=>n.source_)?.ol_uid?.includes(e.getSource?e.getSource()?.ol_uid:void 0)?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Tn=(e,t,o)=>{let r=t;return o.layer.getSource().getTileUrlFunction()&&(r||(r=o.layer.getSource().getTileUrlFunction()),o.layer.getSource().setTileUrlFunction((...n)=>Wr(r(...n),e)),o.layer.getSource().setKey(new Date)),r};function Ln(e,t,o){const r="updateStyleVariables"in t,n="setStyle"in t,i=r?t.style_:o.style;let a=i?.variables;if(a){const s=Ye(e);if(i.variables={...a,...s},r)t.updateStyleVariables(s);else if(n){const l=_n(i);t.setStyle(l)}}}const Ye=e=>{const t={};for(const o in e)if(typeof e[o]=="object"&&e[o]!==null){const r=Ye(e[o]);for(const n in r)t[n]=r?.[n]}else t[o]=e?.[o];return t};function _n(e){let t=e;if("variables"in e){let o=JSON.stringify(e);const{variables:r}=e;for(const n in r)typeof r[n]=="number"?o=o.replaceAll(`["var","${n}"]`,String(r[n])):o=o.replaceAll(`["var","${n}"]`,`"${r[n]}"`);t=JSON.parse(o)}return t}const Dn=(e,t)=>{if(!e)return;const o=Ye(t);let r,n;return Array.isArray(e)?n=structuredClone(e):n=[structuredClone(e)],r=n.filter(i=>{if(!("boundTo"in i))return!0;const a=i.boundTo.key,s=i.boundTo.value;return a in o&&o[a]==s}),r.length||(r=null),r?.map(i=>(delete i.boundTo,!("domainProperties"in i)||"domain"in i?i:Object.keys(i)?.reduce((a,s)=>(s==="domainProperties"?a.domain=i[s].map(l=>o[l]):a[s]=i[s],a),{})))};function Ho(e,t){let o={};for(const r in e){const n=e[r].type;if(n&&n!=="object"&&t[r]!==void 0)o[r]=n==="number"?Number(t[r]):t[r];else if(typeof e[r]=="object"&&e[r]?.properties){const i=Ho(e[r].properties,t);Object.keys(i).length>0&&(o[r]=i)}}return o}function Vn(e,t){if(!t)return null;let o={},r="updateStyleVariables"in e?e.style_?.variables:t.style?.variables;if((t.type==="style"||t.style)&&r)o=r;else if(e.getSource()?.getTileUrlFunction?.()){const i=new URL(e.getSource().getTileUrlFunction()([0,0,0]));(t.schema?.options?.removeProperties??[]).forEach(s=>i.searchParams.delete(s)),o={};for(const[s,l]of i.searchParams.entries()){const u=i.searchParams.getAll(s);o[s]=u.length>1?u:l}}else return null;const n=Ho(t.schema?.properties||t.schema,o);return Object.keys(n).length?n:null}const Po=(e,t)=>e?.filter(o=>["remove","sort"].filter(r=>t?.get("layerControlDisable")?r!=="sort":!0).includes(o)),Mo=(e,t)=>e?.filter(o=>{let r=!0;return["remove","sort"].includes(o)&&(r=!1),o==="info"&&(r=t.get("description")),o==="config"&&(r=t.get("layerConfig")),o==="datetime"&&(r=t.get("layerDatetime")),o==="legend"&&(r=t.get("layerLegend")),r}),On=(e,t,o)=>d`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${o?e:d`<i class="small primary-text">${t}</i>`}
  </button>
`,Bo=(e,t)=>d`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:o}=e;o?.set("layerControlOptional",!0),o?.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:o,bubbles:!0}))}}
  >
    ${e.unstyled?"x":d`<i class="small red-text">${t}</i>`}
  </button>
`,No=(e,t,o)=>d`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${o?"═":d`<i class="small primary-text">${t}</i>`}
  </button>
`;function Yt(){return{dots:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const ko=e=>{const t=["layerControlHide","layerControlOptional"];return e?.getArray()?.filter(o=>t.every(r=>!o.get(r)))};function Uo(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}const Fo=Yo(class extends zo{constructor(e){if(super(e),e.type!==_t.PROPERTY&&e.type!==_t.ATTRIBUTE&&e.type!==_t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Wo(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===te||t===yt)return t;const o=e.element,r=e.name;if(e.type===_t.PROPERTY){if(t===o[r])return te}else if(e.type===_t.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return te}else if(e.type===_t.ATTRIBUTE&&o.getAttribute(r)===t+"")return te;return Go(e),t}});var Re,so;function Rn(){if(so)return Re;so=1;var e="Expected a function",t=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l=typeof ee=="object"&&ee&&ee.Object===Object&&ee,u=typeof self=="object"&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),h=Object.prototype,v=h.toString,x=Math.max,g=Math.min,w=function(){return f.Date.now()};function B(b,T,R){var L,X,Q,ot,I,Y,it=0,at=!1,dt=!1,pt=!0;if(typeof b!="function")throw new TypeError(e);T=ct(T)||0,H(R)&&(at=!!R.leading,dt="maxWait"in R,Q=dt?x(ct(R.maxWait)||0,T):Q,pt="trailing"in R?!!R.trailing:pt);function Mt(N){var St=L,Bt=X;return L=X=void 0,it=N,ot=b.apply(Bt,St),ot}function ze(N){return it=N,I=setTimeout(Qt,T),at?Mt(N):ot}function Jt(N){var St=N-Y,Bt=N-it,Ge=T-St;return dt?g(Ge,Q-Bt):Ge}function Kt(N){var St=N-Y,Bt=N-it;return Y===void 0||St>=T||St<0||dt&&Bt>=Q}function Qt(){var N=w();if(Kt(N))return We(N);I=setTimeout(Qt,Jt(N))}function We(N){return I=void 0,pt&&L?Mt(N):(L=X=void 0,ot)}function qo(){I!==void 0&&clearTimeout(I),it=0,L=Y=X=I=void 0}function jo(){return I===void 0?ot:We(w())}function Se(){var N=w(),St=Kt(N);if(L=arguments,X=this,Y=N,St){if(I===void 0)return ze(Y);if(dt)return I=setTimeout(Qt,T),Mt(Y)}return I===void 0&&(I=setTimeout(Qt,T)),ot}return Se.cancel=qo,Se.flush=jo,Se}function nt(b,T,R){var L=!0,X=!0;if(typeof b!="function")throw new TypeError(e);return H(R)&&(L="leading"in R?!!R.leading:L,X="trailing"in R?!!R.trailing:X),B(b,T,{leading:L,maxWait:T,trailing:X})}function H(b){var T=typeof b;return!!b&&(T=="object"||T=="function")}function K(b){return!!b&&typeof b=="object"}function Z(b){return typeof b=="symbol"||K(b)&&v.call(b)==o}function ct(b){if(typeof b=="number")return b;if(Z(b))return t;if(H(b)){var T=typeof b.valueOf=="function"?b.valueOf():b;b=H(T)?T+"":T}if(typeof b!="string")return b===0?b:+b;b=b.replace(r,"");var R=i.test(b);return R||a.test(b)?s(b.slice(2),R?2:8):n.test(b)?t:+b}return Re=nt,Re}var In=Rn();const lo=Ko(In);const ae=e=>e??yt;class Hn extends ut{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layer=null}#t=[];get layerLegend(){return this.#t?this.#t.length>1?this.#t:this.#t[0]:null}set layerLegend(t){t?Array.isArray(t)?this.#t=t.map((o,r)=>({id:(this.layer?.get("id")??"")+r,...o})):this.#t=[{id:(this.layer?.get("id")??"")+0,...t}]:this.#t=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{this.#t=this.#t?.map(t=>(this.offsetWidth!==t.width&&(t.width=this.offsetWidth),{...t})),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      ${D(this.layerLegend,()=>d`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${this.#t.map((t,o,r)=>d`
                <color-legend
                  id="${t.id}"
                  width=${t.width??325}
                  scaleType="${ae(t.scaleType)}"
                  markType="${ae(t.markType)}"
                  titleText="${ae(t.title)}"
                  .range=${t.range}
                  .domain=${t.domain}
                  tickFormat="${ae(t.tickFormat)}"
                  .ticks=${t.ticks??5}
                  .tickValues=${t.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${o!==r.length-1?d`<div class="separator"></div>`:yt}
              `)}
          </div>
        `)}
    `}#e=Ie`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `;#o=""}customElements.define("eox-layercontrol-layer-legend",Hn);class Pn extends ut{static properties={layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},customEditorInterfaces:{attribute:!1,type:Array}};#t={};#e=null;#o;constructor(){super(),this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=lo(this.#r,1e3),this.customEditorInterfaces=[]}updated(t){if(t.has("layerConfig")){const o=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=lo(this.#r,o),this.requestUpdate()}}#r(t){this.#t=t.detail,this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?Ln(this.#t,this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):this.#o=Tn(this.#t,this.#o,this),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail,layer:this.layer}})),this.requestUpdate()}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){this.#e=Vn(this.layer,this.layerConfig),Object.keys(this.#t).length!==0&&(this.#e=this.#t),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const t={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return d`
      <style>
        ${this.#i}
        ${!this.unstyled&&this.#n}
      </style>
      ${D(this.layerConfig,()=>d`
          ${D(this.layerConfig.legend,()=>d`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Dn(this.layerConfig.legend,this.#t)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${this.#e}
            .options=${t}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}#i=Ie`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `;#n=Ie`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `}customElements.define("eox-layercontrol-layerconfig",Pn);class Mn extends ut{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){const r=(n=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`)(new Date(t.detail.date[0]));this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:r,layer:this.layer}})),this.layerDatetime.currentStep=r,this.requestUpdate()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      ${D(this.layerDatetime,()=>d`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(t=>({date:t}))}]}
            @select=${this.#t}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation??!1}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider></eox-timecontrol-slider>
          </eox-timecontrol>
        `)}
    `}#e="";#o=""}customElements.define("eox-layercontrol-layer-datetime",Mn);class Bn extends ut{static properties={actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t=t=>(this.selectedTab===t||this.toolsAsList)&&"highlighted";render(){const t=this.tabs,o=this.actions,r=o.length+t.length>1;return d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${D(r,()=>d`
            <nav>
              ${D(!this.toolsAsList,()=>d`
                  <div>
                    <!-- Labels for tabs -->
                    ${se(t,(n,i)=>d`
                        <label
                          class=${this.#t(i)}
                          @click=${()=>this.selectedTab=i}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${n}-icon`}>${n}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${se(o,n=>d`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${n}-icon`}>${n}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${se(t,(n,i)=>d`
              ${D(this.toolsAsList,()=>d`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${n}-icon`}>${n}</slot>
                    <span>${n}</span>
                  </label>
                `)}
              <div class="tab ${this.#t(i)}">
                <!-- Content slot for each tab -->
                <slot name=${`${n}-content`}>${n}</slot>
              </div>
              ${D(this.toolsAsList&&i<t.length-1,()=>d`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}#e=`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
    .listed .tab {
      margin-bottom: .5rem;
    }
  `;#o=`
    ${Ne}
    figure {
      padding: var(--padding-vertical) var(--padding);
      background-color: var(--surface); /* fallback */
      background-color: var(--item-hover-color);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `}customElements.define("eox-layercontrol-tools-items",Bn);class Nn extends ut{static properties={layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},embedded:{state:!0},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,setTimeout(()=>{this.embedded=this.parentElement?.tagName==="EOX-LAYERCONTROL-LAYER"}),this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail.jsonformValue,layer:t.detail.layer}}))}_removeButton=t=>Bo(this,t);_sortButton=t=>No(this,t,this.unstyled);_button=(t,o)=>On(t,o,this.unstyled);_getDefaultTools=t=>d`
      <div slot="info-content">
        ${Jo(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Fo(this.layer?.getOpacity())}
            class="tiny max"
            @input=${o=>{this.layer.setOpacity(parseFloat(o.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(this.layer?.getOpacity()*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${D(this.layer.get("layerConfig"),()=>d`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${this.#t}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${D(this.layer.get("layerDatetime"),()=>d`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${o=>Uo(o,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${D(this.layer.get("layerLegend"),()=>d`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton(t.remove)}</div>
      <div slot="sort-icon">${this._sortButton(t.sort)}</div>
    `;render(){const t=Po(this.tools,this.layer),o=Mo(this.tools,this.layer),r=t?.length,n=o?.length;return d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      ${D(r+n>0,()=>d`
          ${D(!(r===1&&n===0),()=>d`
              <details
                class="tools"
                open=${this.embedded===!1?!0:this.layer.get("layerControlToolsExpand")||yt}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${t}
                  .tabs=${o}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${se(o,i=>this._button(i,Yt()[i]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(Yt())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}#e="";#o=`
    ${this.embedded?"":Ne}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
  `}customElements.define("eox-layercontrol-layer-tools",Nn);const kn=e=>{const t=()=>{const o=An(e.layer,e.map,e.showLayerZoomState);let r=!1;!o&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,r=!0):o&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Io(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},Un=(e,t)=>{const o=t.layer;o.setVisible(e.target.checked),e.target.checked&&o.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(n=>{n.layer!==o&&n.layer?.get("layerControlExclusive")&&(n.layer.setVisible(!1),n.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:o})),t.requestUpdate()};class Fn extends ut{static properties={layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}};currLayerVisibilityBasedOnZoom=!0;constructor(){super(),this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}#t(t){return this.layer?.get(t)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){kn(this)}#e(t){Un(t,this)}render(){const t=this.layer.getVisible(),o=t?"visible":"",r=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",n=this.#t("layerControlDisable")?"disabled":"",i=this.#t("layerControlExclusive")?"radio":"checkbox",a=Po(this.tools,this.layer)?.length>0,s=Mo(this.tools,this.layer)?.length>0,l=document.querySelector("eox-layercontrol-layer-tools");return l&&Object.assign(l,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),d`
      <style>
        ${this.#o}
        ${!this.unstyled&&this.#r}
      </style>
      ${D(this.layer,()=>d`
          <!-- Render the layer -->
          <nav
            class="layer ${n} ${o} ${r} responsive tiny-space"
          >
            ${D(!this.unstyled,()=>{if(this.#t("color"))return d`
                  <i class="small" style="color: ${this.#t("color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return d` <i class="small"> </i> `;case"draw":return d`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case"vector":return d`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case"raster":return d`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return d` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${n}">
              <span class="layertitle truncate"
                >${this.#t(this.titleProperty)}</span
              >
            </div>

            ${D(s,()=>d`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const u=this.renderRoot.querySelector("eox-layercontrol-layer-tools")?.shadowRoot?.querySelector("details")||this.renderRoot.querySelector("eox-layercontrol-layer-tools")?.querySelector("details");u.open=!u.open}}
                >
                  <i class="small">
                    ${Yt()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<div class="tooltip top" style="pointer-events: none">Tools</div>-->
                </button>
              `)}
            ${D(!s&&a,()=>this.tools[0]==="remove"?Bo(this,Yt()[this.tools[0]]):No(this,Yt()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${n} ${i} icon square primary-text action visibility small"
            >
              <input
                type=${i}
                .checked=${Fo(t)}
                @click=${this.#e}
                disabled=${n||yt}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<div class="tooltip top" style="pointer-events: none">${t?"Hide":"Show"}</div>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${D(s&&!l,()=>d`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}#o="";#r=`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools > details[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;  
      transform: translateX(.3rem);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `}customElements.define("eox-layercontrol-layer",Fn);class qn extends ut{static properties={group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=!!this.group?.get("layerControlExpand"),o=ko(this.group.getLayers())?.length;return d`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      ${D(this.group,()=>d`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${t||yt}
            data-children-length=${o}
          >
            <summary class="square">
              ${D(o>0,()=>d`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}#t="";#e=`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `}customElements.define("eox-layercontrol-layer-group",qn);const jn=e=>{const{layers:t,idProperty:o,titleProperty:r,renderRoot:n}=e,i=Qo(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>i();if(t&&(t.hasListener("change:length")&&t?.un("change:length",a),t.on("change:length",a),t)){const s=n.querySelector("ul");Cn(t,o,r,e),$n(s,t,o,e)}};class Zn extends ut{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){jn(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.layers?ko(this.layers).reverse():[];return d`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      <ul class="list no-space">
        ${D(this.layers,()=>d`
            ${Xo(t,o=>o,o=>d`
                <li
                  data-layer="${o.get(this.idProperty)}"
                  data-type="${ao(o,this.map)}"
                  class="square"
                >
                  ${o.getLayers?d`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${o}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:d`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${o}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .layerType=${ao(o,this.map)}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}#t="";#e=`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list li ul.list > li:has(details[open]) eox-layercontrol-tools-items {
      display: block;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `}customElements.define("eox-layercontrol-layer-list",Zn);const Xn=e=>{const t=e.querySelector("select[name=optional]"),o=t?t.value:null,r=Xe(e.layers.getArray(),"layerControlOptional",!0).find(n=>(n.get(e.idProperty)||n.ol_uid)===o);r?.set("layerControlOptional",!1),r?.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(n=>n.requestUpdate()),e.requestUpdate()};class Yn extends ut{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}};constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(){Xn(this)}render(){const t=Xe(this.layers.getArray(),"layerControlOptional",!0);return d`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${t.map(o=>{const r=o.get(this.idProperty)||o.ol_uid,n=o.get(this.titleProperty),i=`layer ${o.get(this.idProperty)}`;return d` <option value="${r}">${n||i}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${this.#t}">Add</button>
      </nav>
    `}}customElements.define("eox-layercontrol-optional-list",Yn);const zn=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},uo=e=>{const t=JSON.parse(`{"data":${bo(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(o=>{e.eoxMap.addOrUpdateLayer(o)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},Wn=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function Gn(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(Ue(t)==="XYZ")return{Name:t};try{const o=await Xr(t);e.wmsCapabilities=o}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const Jn=(e,t)=>{const{Name:o}=e,r=Ue(t.urlInput)||"XYZ",n={type:"Tile",properties:{id:o,title:o},source:{type:r,url:t.urlInput,params:{LAYERS:o}}};t.jsonInput=JSON.stringify(n)},Kn=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};class Qn extends ut{static properties={eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}};urlInput=null;jsonInput=null;open=null;searchLoad=!1;wmsCapabilities=null;constructor(){super(),this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){Wn(t,this)}async#e(){const t=await Gn(this);t&&this.#o(t)}#o(t){Jn(t,this),uo(this)}#r(){uo(this)}#i(t){zn(t,this)}#n(t){Kn(t,this)}render(){const t={add:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},o=this.open?"open":"close",r=this.open==="url",n=this.open==="json",i=!Yr(this.urlInput)||this.searchLoad?!0:yt;return d`
      <style>
        ${this.#a}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${o}"
          >
            <a
              @click=${()=>this.#n("url")}
              class="${r?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>this.#n("json")}
              class="${n?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>this.#n(this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":d`<i class="small primary-text">${t.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${o}" style="padding: 15px 0">
          ${r?d`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${this.#t}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${i}
                    @click=${this.#e}
                  >
                    ${this.unstyled?"Search":d`<i class="small">${t.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?d`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(a=>{const s=a.Name;return d`
                            <li class="search-list">
                              ${s}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>this.#o(a)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:yt}
              `:d`
                <!-- Textarea for JSON input -->
                <div class="field textarea small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${this.#i}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${zr(this.jsonInput)?yt:!0}
                  @click=${this.#r}
                >
                  ${this.unstyled?"Add JSON":d`<i class="small">${t.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}#a=`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `}customElements.define("eox-layercontrol-add-layers",Qn);const ti=(e,t)=>{t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"&&t.renderRoot.querySelector("eox-layercontrol-optional-list")?.requestUpdate()},co=e=>{const t=tr(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};Zo();class ei extends ut{static properties={for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}};#t;constructor(){super(),this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){this.eoxMap=co(this)}updated(t){t.has("for")&&(this.eoxMap=co(this))}get eoxMap(){return this.#t}set eoxMap(t){const o=this.#t;this.#t=t,this.requestUpdate("eoxMap",o)}#e(t){ti(t,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:t.detail}))}#o(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:t.detail}))}render(){const t=this.map?.getLayers().getArray(),o=t&&Xe(t,"layerControlOptional",!0)?.length>0;return d`
      <style>
        ${!this.unstyled&&this.#r}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${D(this.addExternalLayers&&this.#t?.addOrUpdateLayer,()=>d`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${this.#t}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${D(this.map,()=>d`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${this.#e}
            @datetime:updated=${r=>Uo(r,this)}
            @layerConfig:change=${this.#o}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${D(o,()=>d`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}#r=`
    ${Ne}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

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

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
  `}customElements.define("eox-layercontrol",ei);export{ei as EOxLayerControl};
