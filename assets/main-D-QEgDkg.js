import{ey as Yo,bb as d,ba as te,fQ as $t,en as ee,em as zo,be as ut,bd as Ie,fu as Fe,fv as Wo,ft as Go}from"./index-DrL8z8X7.js";import{n as D}from"./when-CI7b_ccM.js";import{_ as Jo,c as Ko}from"./index-_VUkhWWZ.js";import{e as Qo,i as tr,t as _t}from"./directive-CwRn8Fwj.js";import{r as er,p as or}from"./directive-helpers-CBQ1F2MM.js";import{o as rr}from"./unsafe-html-CSwoxV1u.js";import{o as se}from"./map-Bv-shLAs.js";var E=e=>e!==void 0,yo=(e,t,o)=>t in e?e[t]:e[t]=o;const zt={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class ir{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,o){return ve(t,o).join("")}}function ve(e,t){return go(e,t,[]).join("")}function go(e,t,o){if(e.nodeType===zt.CDATA_SECTION||e.nodeType===zt.TEXT)t?o.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(e.nodeValue);else{var r;for(r=e.firstChild;r;r=r.nextSibling)go(r,t,o)}return o}function nr(e,t,o,r){for(var i=ar(t);i;i=sr(i)){var n=i.namespaceURI||null,a=e[n];if(E(a)){var s=a[i.localName];E(s)&&s.call(r,i,o)}}}function ar(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==zt.ELEMENT;)t=t.nextSibling;return t}function sr(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==zt.ELEMENT;)t=t.nextSibling;return t}function F(e,t,o){return lr(e,t,o)}function lr(e,t,o){var r=E(o)?o:{},i,n;for(i=0,n=e.length;i<n;++i)r[e[i]]=t;return r}function mo(e,t){return(function(o,r){var i=e.call(E(t)?t:this,o,r);if(E(i)){var n=r[r.length-1];n.push(i)}})}function k(e,t,o,r,i){return r.push(e),nr(t,o,r,i),r.pop()}function f(e,t,o){return(function(r,i){let n=e.call(E(o)?o:this,r,i);if(E(n)){var a=i[i.length-1],s=E(t)?t:r.localName;a[s]=n}})}function G(e,t,o){return(function(r,i){var n=e.call(E(o)?o:this,r,i);if(E(n)){var a=i[i.length-1],s=E(t)?t:r.localName,l=yo(a,s,[]);l.push(n)}})}const ur=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function cr(e){return e.replace(ur,"")}function Lt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function Ot(e){return yt(ve(e,!1))}function yt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function xe(e){return he(ve(e,!1))}function he(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function C(e){return cr(ve(e,!1))}const dr="http://www.w3.org/1999/xlink";function je(e){return e.getAttributeNS(dr,"href")}function hr(e,t){return k({},Nr,e,t)}function bo(e){return[yt(e.getAttribute("minx")),yt(e.getAttribute("miny")),yt(e.getAttribute("maxx")),yt(e.getAttribute("maxy"))]}function pr(e,t){const o=bo(e),r=[yt(e.getAttribute("resx")),yt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:o,res:r}}function fr(e,t){const o=bo(e);if(!(!E(o[0])||!E(o[1])||!E(o[2])||!E(o[3])))return o}function yr(e,t){const o=parseFloat(e.getAttribute("min")),r=parseFloat(e.getAttribute("max"));return{min:o,max:r}}function gr(e,t){const o=k({},kr,e,t);if(!E(o))return;const r=o.westBoundLongitude,i=o.southBoundLatitude,n=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!E(r)||!E(i)||!E(n)||!E(a)))return[r,i,n,a]}function mr(e,t){return k({},Or,e,t)}function br(e,t){return k({},Pr,e,t)}function vr(e,t){return k({},Ir,e,t)}function wr(e,t){return k({},Hr,e,t)}function Sr(e,t){return k({},Mr,e,t)}function xr(e,t){return k([],Br,e,t)}function Er(e,t){const o=Lt(e.getAttribute("queryable"));return k({queryable:E(o)?o:!1},So,e,t)}function $r(e,t){var o=t[t.length-1];const r=k({},So,e,t);if(!E(r))return;let i=Lt(e.getAttribute("queryable"));E(i)||(i=o.queryable),r.queryable=E(i)?i:!1;let n=he(e.getAttribute("cascaded"));E(n)||(n=o.cascaded),r.cascaded=n;let a=Lt(e.getAttribute("opaque"));E(a)||(a=o.opaque),r.opaque=E(a)?a:!1;let s=Lt(e.getAttribute("noSubsets"));E(s)||(s=o.noSubsets),r.noSubsets=E(s)?s:!1;let l=yt(e.getAttribute("fixedWidth"));E(l)||(l=o.fixedWidth),r.fixedWidth=l;let u=yt(e.getAttribute("fixedHeight"));E(u)||(u=o.fixedHeight),r.fixedHeight=u;const h=["Style","CRS","AuthorityURL"];for(let b=0,x=h.length;b<x;b++){const y=h[b],w=o[y];if(E(w)){let B=yo(r,y,[]);B=B.concat(w),r[y]=B}}const p=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let b=0,x=p.length;b<x;b++){const y=p[b],w=r[y];if(!E(w)){const B=o[y];r[y]=B}}return r}function Ar(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Lt(e.getAttribute("multipleValues")),nearestValue:Lt(e.getAttribute("nearestValue")),current:Lt(e.getAttribute("current")),values:C(e)}}function mt(e,t){return k({},Xr,e,t)}function Cr(e,t){return k({},Ur,e,t)}function Tr(e,t){return k({},jr,e,t)}function Lr(e,t){return k({},qr,e,t)}function Ee(e,t){return k({},Fr,e,t)}function vo(e,t){var o=mt(e,t);if(E(o)){const r=[he(e.getAttribute("width")),he(e.getAttribute("height"))];return o.size=r,o}}function _r(e,t){var o=mt(e,t);if(E(o))return o.name=e.getAttribute("name"),o}function Dr(e,t){var o=mt(e,t);if(E(o))return o.type=e.getAttribute("type"),o}function Vr(e,t){return k({},Zr,e,t)}function wo(e,t){return k([],Yr,e,t)}const j=[null,"http://www.opengis.net/wms"],Rr=F(j,{Service:f(br),Capability:f(mr)}),Or=F(j,{Request:f(Cr),Exception:f(xr),Layer:f(Er)}),Pr=F(j,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(wo),OnlineResource:f(je),ContactInformation:f(vr),Fees:f(C),AccessConstraints:f(C),LayerLimit:f(xe),MaxWidth:f(xe),MaxHeight:f(xe)}),Ir=F(j,{ContactPersonPrimary:f(wr),ContactPosition:f(C),ContactAddress:f(Sr),ContactVoiceTelephone:f(C),ContactFacsimileTelephone:f(C),ContactElectronicMailAddress:f(C)}),Hr=F(j,{ContactPerson:f(C),ContactOrganization:f(C)}),Mr=F(j,{AddressType:f(C),Address:f(C),City:f(C),StateOrProvince:f(C),PostCode:f(C),Country:f(C)}),Br=F(j,{Format:mo(C)}),So=F(j,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(wo),CRS:G(C),SRS:G(C),EX_GeographicBoundingBox:f(gr),LatLonBoundingBox:f(fr),BoundingBox:G(pr),Dimension:G(Ar),Attribution:f(hr),AuthorityURL:G(_r),Identifier:G(C),MetadataURL:G(Dr),DataURL:G(mt),FeatureListURL:G(mt),Style:G(Vr),MinScaleDenominator:f(Ot),MaxScaleDenominator:f(Ot),ScaleHint:f(yr),Layer:G($r)}),Nr=F(j,{Title:f(C),OnlineResource:f(je),LogoURL:f(vo)}),kr=F(j,{westBoundLongitude:f(Ot),eastBoundLongitude:f(Ot),southBoundLatitude:f(Ot),northBoundLatitude:f(Ot)}),Ur=F(j,{GetCapabilities:f(Ee),GetMap:f(Ee),GetFeatureInfo:f(Ee)}),Fr=F(j,{Format:G(C),DCPType:G(Tr)}),jr=F(j,{HTTP:f(Lr)}),qr=F(j,{Get:f(mt),Post:f(mt)}),Zr=F(j,{Name:f(C),Title:f(C),Abstract:f(C),LegendURL:G(vo),StyleSheetURL:f(mt),StyleURL:f(mt)}),Xr=F(j,{Format:f(C),OnlineResource:f(je)}),Yr=F(j,{Keyword:mo(C)});class zr{constructor(t,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new ir(o),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let o=t.firstChild;o;o=o.nextSibling)if(o.nodeType==zt.ELEMENT)return this.readFromNode(o);return null}readFromNode(t){return this.version=t.getAttribute("version"),k({version:this.version},Rr,t,[])||null}}async function Wr(e){let t=new URL(e),o=t.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let r=t.toString();const i=await fetch(r);if(i.ok){const n=await i.text();return new zr(n).toJSON()}else throw new Error(`Error: ${i.status}`)}function qe(e){const t=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":o.test(e)?"XYZ":!1}function Gr(e){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),r=qe(e);return!!(e&&o&&r)}function xo(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Jr(e){try{return JSON.parse(xo(e)),!!e}catch{return!1}}function $e(e,t){const o=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):Array.isArray(s)?(o.delete(a),s.forEach(l=>{o.append(a,l)})):o.set(a,s)});const r=e.split("?")[0],i=o.toString();return`${r}?${i}`}function Kr(e,t,o){return(t=oi(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)({}).hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},bt.apply(null,arguments)}function to(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function pt(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?to(Object(o),!0).forEach(function(r){Kr(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):to(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function Qr(e,t){if(e==null)return{};var o,r,i=ti(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)===-1&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function ti(e,t){if(e==null)return{};var o={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;o[r]=e[r]}return o}function ei(e,t){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oi(e){var t=ei(e,"string");return typeof t=="symbol"?t:t+""}function He(e){"@babel/helpers - typeof";return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},He(e)}var ri="1.15.7";function gt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var vt=gt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Wt=gt(/Edge/i),eo=gt(/firefox/i),Ft=gt(/safari/i)&&!gt(/chrome/i)&&!gt(/android/i),Ze=gt(/iP(ad|od|hone)/i),Eo=gt(/chrome/i)&&gt(/android/i),$o={capture:!1,passive:!1};function A(e,t,o){e.addEventListener(t,o,!vt&&$o)}function $(e,t,o){e.removeEventListener(t,o,!vt&&$o)}function pe(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function Ao(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function lt(e,t,o,r){if(e){o=o||document;do{if(t!=null&&(t[0]===">"?e.parentNode===o&&pe(e,t):pe(e,t))||r&&e===o)return e;if(e===o)break}while(e=Ao(e))}return null}var oo=/\s+/g;function tt(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(oo," ").replace(" "+t+" "," ");e.className=(r+(o?" "+t:"")).replace(oo," ")}}function g(e,t,o){var r=e&&e.style;if(r){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),t===void 0?o:o[t];!(t in r)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),r[t]=o+(typeof o=="string"?"":"px")}}function It(e,t){var o="";if(typeof e=="string")o=e;else do{var r=g(e,"transform");r&&r!=="none"&&(o=r+" "+o)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(o)}function Co(e,t,o){if(e){var r=e.getElementsByTagName(t),i=0,n=r.length;if(o)for(;i<n;i++)o(r[i],i);return r}return[]}function ht(){var e=document.scrollingElement;return e||document.documentElement}function M(e,t,o,r,i){if(!(!e.getBoundingClientRect&&e!==window)){var n,a,s,l,u,h,p;if(e!==window&&e.parentNode&&e!==ht()?(n=e.getBoundingClientRect(),a=n.top,s=n.left,l=n.bottom,u=n.right,h=n.height,p=n.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,h=window.innerHeight,p=window.innerWidth),(t||o)&&e!==window&&(i=i||e.parentNode,!vt))do if(i&&i.getBoundingClientRect&&(g(i,"transform")!=="none"||o&&g(i,"position")!=="static")){var b=i.getBoundingClientRect();a-=b.top+parseInt(g(i,"border-top-width")),s-=b.left+parseInt(g(i,"border-left-width")),l=a+n.height,u=s+n.width;break}while(i=i.parentNode);if(r&&e!==window){var x=It(i||e),y=x&&x.a,w=x&&x.d;x&&(a/=w,s/=y,p/=y,h/=w,l=a+h,u=s+p)}return{top:a,left:s,bottom:l,right:u,width:p,height:h}}}function ro(e,t,o){for(var r=Et(e,!0),i=M(e)[t];r;){var n=M(r)[o],a=void 0;if(a=i>=n,!a)return r;if(r===ht())break;r=Et(r,!1)}return!1}function Ht(e,t,o,r){for(var i=0,n=0,a=e.children;n<a.length;){if(a[n].style.display!=="none"&&a[n]!==m.ghost&&(r||a[n]!==m.dragged)&&lt(a[n],o.draggable,e,!1)){if(i===t)return a[n];i++}n++}return null}function Xe(e,t){for(var o=e.lastElementChild;o&&(o===m.ghost||g(o,"display")==="none"||t&&!pe(o,t));)o=o.previousElementSibling;return o||null}function rt(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==m.clone&&(!t||pe(e,t))&&o++;return o}function io(e){var t=0,o=0,r=ht();if(e)do{var i=It(e),n=i.a,a=i.d;t+=e.scrollLeft*n,o+=e.scrollTop*a}while(e!==r&&(e=e.parentNode));return[t,o]}function ii(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var r in t)if(t.hasOwnProperty(r)&&t[r]===e[o][r])return Number(o)}return-1}function Et(e,t){if(!e||!e.getBoundingClientRect)return ht();var o=e,r=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var i=g(o);if(o.clientWidth<o.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return ht();if(r||t)return o;r=!0}}while(o=o.parentNode);return ht()}function ni(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function Ae(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var jt;function To(e,t){return function(){if(!jt){var o=arguments,r=this;o.length===1?e.call(r,o[0]):e.apply(r,o),jt=setTimeout(function(){jt=void 0},t)}}}function ai(){clearTimeout(jt),jt=void 0}function Lo(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function _o(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function Do(e,t,o){var r={};return Array.from(e.children).forEach(function(i){var n,a,s,l;if(!(!lt(i,t.draggable,e,!1)||i.animated||i===o)){var u=M(i);r.left=Math.min((n=r.left)!==null&&n!==void 0?n:1/0,u.left),r.top=Math.min((a=r.top)!==null&&a!==void 0?a:1/0,u.top),r.right=Math.max((s=r.right)!==null&&s!==void 0?s:-1/0,u.right),r.bottom=Math.max((l=r.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var J="Sortable"+new Date().getTime();function si(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(i){if(!(g(i,"display")==="none"||i===m.ghost)){e.push({target:i,rect:M(i)});var n=pt({},e[e.length-1].rect);if(i.thisAnimationDuration){var a=It(i,!0);a&&(n.top-=a.f,n.left-=a.e)}i.fromRect=n}})}},addAnimationState:function(r){e.push(r)},removeAnimationState:function(r){e.splice(ii(e,{target:r}),1)},animateAll:function(r){var i=this;if(!this.options.animation){clearTimeout(t),typeof r=="function"&&r();return}var n=!1,a=0;e.forEach(function(s){var l=0,u=s.target,h=u.fromRect,p=M(u),b=u.prevFromRect,x=u.prevToRect,y=s.rect,w=It(u,!0);w&&(p.top-=w.f,p.left-=w.e),u.toRect=p,u.thisAnimationDuration&&Ae(b,p)&&!Ae(h,p)&&(y.top-p.top)/(y.left-p.left)===(h.top-p.top)/(h.left-p.left)&&(l=ui(y,b,x,i.options)),Ae(p,h)||(u.prevFromRect=h,u.prevToRect=p,l||(l=i.options.animation),i.animate(u,y,p,l)),l&&(n=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),n?t=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),e=[]},animate:function(r,i,n,a){if(a){g(r,"transition",""),g(r,"transform","");var s=It(this.el),l=s&&s.a,u=s&&s.d,h=(i.left-n.left)/(l||1),p=(i.top-n.top)/(u||1);r.animatingX=!!h,r.animatingY=!!p,g(r,"transform","translate3d("+h+"px,"+p+"px,0)"),this.forRepaintDummy=li(r),g(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),g(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){g(r,"transition",""),g(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function li(e){return e.offsetWidth}function ui(e,t,o,r){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*r.animation}var Dt=[],Ce={initializeByDefault:!0},Gt={mount:function(t){for(var o in Ce)Ce.hasOwnProperty(o)&&!(o in t)&&(t[o]=Ce[o]);Dt.forEach(function(r){if(r.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Dt.push(t)},pluginEvent:function(t,o,r){var i=this;this.eventCanceled=!1,r.cancel=function(){i.eventCanceled=!0};var n=t+"Global";Dt.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][n]&&o[a.pluginName][n](pt({sortable:o},r)),o.options[a.pluginName]&&o[a.pluginName][t]&&o[a.pluginName][t](pt({sortable:o},r)))})},initializePlugins:function(t,o,r,i){Dt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,o,t.options);u.sortable=t,u.options=t.options,t[l]=u,bt(r,u.defaults)}});for(var n in t.options)if(t.options.hasOwnProperty(n)){var a=this.modifyOption(t,n,t.options[n]);typeof a<"u"&&(t.options[n]=a)}},getEventProperties:function(t,o){var r={};return Dt.forEach(function(i){typeof i.eventProperties=="function"&&bt(r,i.eventProperties.call(o[i.pluginName],t))}),r},modifyOption:function(t,o,r){var i;return Dt.forEach(function(n){t[n.pluginName]&&n.optionListeners&&typeof n.optionListeners[o]=="function"&&(i=n.optionListeners[o].call(t[n.pluginName],r))}),i}};function ci(e){var t=e.sortable,o=e.rootEl,r=e.name,i=e.targetEl,n=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,h=e.oldDraggableIndex,p=e.newDraggableIndex,b=e.originalEvent,x=e.putSortable,y=e.extraEventProperties;if(t=t||o&&o[J],!!t){var w,B=t.options,it="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!vt&&!Wt?w=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(r,!0,!0)),w.to=a||o,w.from=s||o,w.item=i||o,w.clone=n,w.oldIndex=l,w.newIndex=u,w.oldDraggableIndex=h,w.newDraggableIndex=p,w.originalEvent=b,w.pullMode=x?x.lastPutMode:void 0;var I=pt(pt({},y),Gt.getEventProperties(r,t));for(var K in I)w[K]=I[K];o&&o.dispatchEvent(w),B[it]&&B[it].call(t,w)}}var di=["evt"],W=function(t,o){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=r.evt,n=Qr(r,di);Gt.pluginEvent.bind(m)(t,o,pt({dragEl:c,parentEl:R,ghostEl:S,rootEl:_,nextEl:Tt,lastDownEl:le,cloneEl:V,cloneHidden:xt,dragStarted:Nt,putSortable:U,activeSortable:m.active,originalEvent:i,oldIndex:Pt,oldDraggableIndex:qt,newIndex:et,newDraggableIndex:St,hideGhostForTarget:Po,unhideGhostForTarget:Io,cloneNowHidden:function(){xt=!0},cloneNowShown:function(){xt=!1},dispatchSortableEvent:function(s){z({sortable:o,name:s,originalEvent:i})}},n))};function z(e){ci(pt({putSortable:U,cloneEl:V,targetEl:c,rootEl:_,oldIndex:Pt,oldDraggableIndex:qt,newIndex:et,newDraggableIndex:St},e))}var c,R,S,_,Tt,le,V,xt,Pt,et,qt,St,oe,U,Rt=!1,fe=!1,ye=[],At,st,Te,Le,no,ao,Nt,Vt,Zt,Xt=!1,re=!1,ue,q,_e=[],Me=!1,ge=[],we=typeof document<"u",ie=Ze,so=Wt||vt?"cssFloat":"float",hi=we&&!Eo&&!Ze&&"draggable"in document.createElement("div"),Vo=(function(){if(we){if(vt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),Ro=function(t,o){var r=g(t),i=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),n=Ht(t,0,o),a=Ht(t,1,o),s=n&&g(n),l=a&&g(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+M(n).width,h=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+M(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&s.float&&s.float!=="none"){var p=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===p)?"vertical":"horizontal"}return n&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=i&&r[so]==="none"||a&&r[so]==="none"&&u+h>i)?"vertical":"horizontal"},pi=function(t,o,r){var i=r?t.left:t.top,n=r?t.right:t.bottom,a=r?t.width:t.height,s=r?o.left:o.top,l=r?o.right:o.bottom,u=r?o.width:o.height;return i===s||n===l||i+a/2===s+u/2},fi=function(t,o){var r;return ye.some(function(i){var n=i[J].options.emptyInsertThreshold;if(!(!n||Xe(i))){var a=M(i),s=t>=a.left-n&&t<=a.right+n,l=o>=a.top-n&&o<=a.bottom+n;if(s&&l)return r=i}}),r},Oo=function(t){function o(n,a){return function(s,l,u,h){var p=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(n==null&&(a||p))return!0;if(n==null||n===!1)return!1;if(a&&n==="clone")return n;if(typeof n=="function")return o(n(s,l,u,h),a)(s,l,u,h);var b=(a?s:l).options.group.name;return n===!0||typeof n=="string"&&n===b||n.join&&n.indexOf(b)>-1}}var r={},i=t.group;(!i||He(i)!="object")&&(i={name:i}),r.name=i.name,r.checkPull=o(i.pull,!0),r.checkPut=o(i.put),r.revertClone=i.revertClone,t.group=r},Po=function(){!Vo&&S&&g(S,"display","none")},Io=function(){!Vo&&S&&g(S,"display","")};we&&!Eo&&document.addEventListener("click",function(e){if(fe)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),fe=!1,!1},!0);var Ct=function(t){if(c){t=t.touches?t.touches[0]:t;var o=fi(t.clientX,t.clientY);if(o){var r={};for(var i in t)t.hasOwnProperty(i)&&(r[i]=t[i]);r.target=r.rootEl=o,r.preventDefault=void 0,r.stopPropagation=void 0,o[J]._onDragOver(r)}}},yi=function(t){c&&c.parentNode[J]._isOutsideThisEl(t.target)};function m(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=bt({},t),e[J]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ro(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:m.supportPointer!==!1&&"PointerEvent"in window&&(!Ft||Ze),emptyInsertThreshold:5};Gt.initializePlugins(this,e,o);for(var r in o)!(r in t)&&(t[r]=o[r]);Oo(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:hi,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?A(e,"pointerdown",this._onTapStart):(A(e,"mousedown",this._onTapStart),A(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(A(e,"dragover",this),A(e,"dragenter",this)),ye.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),bt(this,si())}m.prototype={constructor:m,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Vt=null)},_getDirection:function(t,o){return typeof this.options.direction=="function"?this.options.direction.call(this,t,o,c):this.options.direction},_onTapStart:function(t){if(t.cancelable){var o=this,r=this.el,i=this.options,n=i.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,h=i.filter;if(Ei(r),!c&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||i.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Ft&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=lt(l,i.draggable,r,!1),!(l&&l.animated)&&le!==l)){if(Pt=rt(l),qt=rt(l,i.draggable),typeof h=="function"){if(h.call(this,t,l,this)){z({sortable:o,rootEl:u,name:"filter",targetEl:l,toEl:r,fromEl:r}),W("filter",o,{evt:t}),n&&t.preventDefault();return}}else if(h&&(h=h.split(",").some(function(p){if(p=lt(u,p.trim(),r,!1),p)return z({sortable:o,rootEl:p,name:"filter",targetEl:l,fromEl:r,toEl:r}),W("filter",o,{evt:t}),!0}),h)){n&&t.preventDefault();return}i.handle&&!lt(u,i.handle,r,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,o,r){var i=this,n=i.el,a=i.options,s=n.ownerDocument,l;if(r&&!c&&r.parentNode===n){var u=M(r);if(_=n,c=r,R=c.parentNode,Tt=c.nextSibling,le=r,oe=a.group,m.dragged=c,At={target:c,clientX:(o||t).clientX,clientY:(o||t).clientY},no=At.clientX-u.left,ao=At.clientY-u.top,this._lastX=(o||t).clientX,this._lastY=(o||t).clientY,c.style["will-change"]="all",l=function(){if(W("delayEnded",i,{evt:t}),m.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!eo&&i.nativeDraggable&&(c.draggable=!0),i._triggerDragStart(t,o),z({sortable:i,name:"choose",originalEvent:t}),tt(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(h){Co(c,h.trim(),De)}),A(s,"dragover",Ct),A(s,"mousemove",Ct),A(s,"touchmove",Ct),a.supportPointer?(A(s,"pointerup",i._onDrop),!this.nativeDraggable&&A(s,"pointercancel",i._onDrop)):(A(s,"mouseup",i._onDrop),A(s,"touchend",i._onDrop),A(s,"touchcancel",i._onDrop)),eo&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),W("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(Wt||vt))){if(m.eventCanceled){this._onDrop();return}a.supportPointer?(A(s,"pointerup",i._disableDelayedDrag),A(s,"pointercancel",i._disableDelayedDrag)):(A(s,"mouseup",i._disableDelayedDrag),A(s,"touchend",i._disableDelayedDrag),A(s,"touchcancel",i._disableDelayedDrag)),A(s,"mousemove",i._delayedDragTouchMoveHandler),A(s,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&A(s,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var o=t.touches?t.touches[0]:t;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&De(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,o){o=o||t.pointerType=="touch"&&t,!this.nativeDraggable||o?this.options.supportPointer?A(document,"pointermove",this._onTouchMove):o?A(document,"touchmove",this._onTouchMove):A(document,"mousemove",this._onTouchMove):(A(c,"dragend",this),A(_,"dragstart",this._onDragStart));try{document.selection?ce(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,o){if(Rt=!1,_&&c){W("dragStarted",this,{evt:o}),this.nativeDraggable&&A(document,"dragover",yi);var r=this.options;!t&&tt(c,r.dragClass,!1),tt(c,r.ghostClass,!0),m.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(st){this._lastX=st.clientX,this._lastY=st.clientY,Po();for(var t=document.elementFromPoint(st.clientX,st.clientY),o=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(st.clientX,st.clientY),t!==o);)o=t;if(c.parentNode[J]._isOutsideThisEl(t),o)do{if(o[J]){var r=void 0;if(r=o[J]._onDragOver({clientX:st.clientX,clientY:st.clientY,target:t,rootEl:o}),r&&!this.options.dragoverBubble)break}t=o}while(o=Ao(o));Io()}},_onTouchMove:function(t){if(At){var o=this.options,r=o.fallbackTolerance,i=o.fallbackOffset,n=t.touches?t.touches[0]:t,a=S&&It(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,u=ie&&q&&io(q),h=(n.clientX-At.clientX+i.x)/(s||1)+(u?u[0]-_e[0]:0)/(s||1),p=(n.clientY-At.clientY+i.y)/(l||1)+(u?u[1]-_e[1]:0)/(l||1);if(!m.active&&!Rt){if(r&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<r)return;this._onDragStart(t,!0)}if(S){a?(a.e+=h-(Te||0),a.f+=p-(Le||0)):a={a:1,b:0,c:0,d:1,e:h,f:p};var b="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");g(S,"webkitTransform",b),g(S,"mozTransform",b),g(S,"msTransform",b),g(S,"transform",b),Te=h,Le=p,st=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:_,o=M(c,!0,ie,!0,t),r=this.options;if(ie){for(q=t;g(q,"position")==="static"&&g(q,"transform")==="none"&&q!==document;)q=q.parentNode;q!==document.body&&q!==document.documentElement?(q===document&&(q=ht()),o.top+=q.scrollTop,o.left+=q.scrollLeft):q=ht(),_e=io(q)}S=c.cloneNode(!0),tt(S,r.ghostClass,!1),tt(S,r.fallbackClass,!0),tt(S,r.dragClass,!0),g(S,"transition",""),g(S,"transform",""),g(S,"box-sizing","border-box"),g(S,"margin",0),g(S,"top",o.top),g(S,"left",o.left),g(S,"width",o.width),g(S,"height",o.height),g(S,"opacity","0.8"),g(S,"position",ie?"absolute":"fixed"),g(S,"zIndex","100000"),g(S,"pointerEvents","none"),m.ghost=S,t.appendChild(S),g(S,"transform-origin",no/parseInt(S.style.width)*100+"% "+ao/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,o){var r=this,i=t.dataTransfer,n=r.options;if(W("dragStart",this,{evt:t}),m.eventCanceled){this._onDrop();return}W("setupClone",this),m.eventCanceled||(V=_o(c),V.removeAttribute("id"),V.draggable=!1,V.style["will-change"]="",this._hideClone(),tt(V,this.options.chosenClass,!1),m.clone=V),r.cloneId=ce(function(){W("clone",r),!m.eventCanceled&&(r.options.removeCloneOnHide||_.insertBefore(V,c),r._hideClone(),z({sortable:r,name:"clone"}))}),!o&&tt(c,n.dragClass,!0),o?(fe=!0,r._loopId=setInterval(r._emulateDragOver,50)):($(document,"mouseup",r._onDrop),$(document,"touchend",r._onDrop),$(document,"touchcancel",r._onDrop),i&&(i.effectAllowed="move",n.setData&&n.setData.call(r,i,c)),A(document,"drop",r),g(c,"transform","translateZ(0)")),Rt=!0,r._dragStartId=ce(r._dragStarted.bind(r,o,t)),A(document,"selectstart",r),Nt=!0,window.getSelection().removeAllRanges(),Ft&&g(document.body,"user-select","none")},_onDragOver:function(t){var o=this.el,r=t.target,i,n,a,s=this.options,l=s.group,u=m.active,h=oe===l,p=s.sort,b=U||u,x,y=this,w=!1;if(Me)return;function B(ft,Mt){W(ft,y,pt({evt:t,isOwner:h,axis:x?"vertical":"horizontal",revert:a,dragRect:i,targetRect:n,canSort:p,fromSortable:b,target:r,completed:I,onMove:function(Jt,Kt){return ne(_,o,c,i,Jt,M(Jt),t,Kt)},changed:K},Mt))}function it(){B("dragOverAnimationCapture"),y.captureAnimationState(),y!==b&&b.captureAnimationState()}function I(ft){return B("dragOverCompleted",{insertion:ft}),ft&&(h?u._hideClone():u._showClone(y),y!==b&&(tt(c,U?U.options.ghostClass:u.options.ghostClass,!1),tt(c,s.ghostClass,!0)),U!==y&&y!==m.active?U=y:y===m.active&&U&&(U=null),b===y&&(y._ignoreWhileAnimating=r),y.animateAll(function(){B("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==b&&(b.animateAll(),b._ignoreWhileAnimating=null)),(r===c&&!c.animated||r===o&&!r.animated)&&(Vt=null),!s.dragoverBubble&&!t.rootEl&&r!==document&&(c.parentNode[J]._isOutsideThisEl(t.target),!ft&&Ct(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function K(){et=rt(c),St=rt(c,s.draggable),z({sortable:y,name:"change",toEl:o,newIndex:et,newDraggableIndex:St,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),r=lt(r,s.draggable,o,!0),B("dragOver"),m.eventCanceled)return w;if(c.contains(t.target)||r.animated&&r.animatingX&&r.animatingY||y._ignoreWhileAnimating===r)return I(!1);if(fe=!1,u&&!s.disabled&&(h?p||(a=R!==_):U===this||(this.lastPutMode=oe.checkPull(this,u,c,t))&&l.checkPut(this,u,c,t))){if(x=this._getDirection(t,r)==="vertical",i=M(c),B("dragOverValid"),m.eventCanceled)return w;if(a)return R=_,it(),this._hideClone(),B("revert"),m.eventCanceled||(Tt?_.insertBefore(c,Tt):_.appendChild(c)),I(!0);var Z=Xe(o,s.draggable);if(!Z||vi(t,x,this)&&!Z.animated){if(Z===c)return I(!1);if(Z&&o===t.target&&(r=Z),r&&(n=M(r)),ne(_,o,c,i,r,n,t,!!r)!==!1)return it(),Z&&Z.nextSibling?o.insertBefore(c,Z.nextSibling):o.appendChild(c),R=o,K(),I(!0)}else if(Z&&bi(t,x,this)){var ct=Ht(o,0,s,!0);if(ct===c)return I(!1);if(r=ct,n=M(r),ne(_,o,c,i,r,n,t,!1)!==!1)return it(),o.insertBefore(c,ct),R=o,K(),I(!0)}else if(r.parentNode===o){n=M(r);var v=0,T,O=c.parentNode!==o,L=!pi(c.animated&&c.toRect||i,r.animated&&r.toRect||n,x),X=x?"top":"left",Q=ro(r,"top","top")||ro(c,"top","top"),ot=Q?Q.scrollTop:void 0;Vt!==r&&(T=n[X],Xt=!1,re=!L&&s.invertSwap||O),v=wi(t,r,n,x,L?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,re,Vt===r);var P;if(v!==0){var Y=rt(c);do Y-=v,P=R.children[Y];while(P&&(g(P,"display")==="none"||P===S))}if(v===0||P===r)return I(!1);Vt=r,Zt=v;var nt=r.nextElementSibling,at=!1;at=v===1;var dt=ne(_,o,c,i,r,n,t,at);if(dt!==!1)return(dt===1||dt===-1)&&(at=dt===1),Me=!0,setTimeout(mi,30),it(),at&&!nt?o.appendChild(c):r.parentNode.insertBefore(c,at?nt:r),Q&&Lo(Q,0,ot-Q.scrollTop),R=c.parentNode,T!==void 0&&!re&&(ue=Math.abs(T-M(r)[X])),K(),I(!0)}if(o.contains(c))return I(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Ct),$(document,"mousemove",Ct),$(document,"touchmove",Ct)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var o=this.el,r=this.options;if(et=rt(c),St=rt(c,r.draggable),W("drop",this,{evt:t}),R=c&&c.parentNode,et=rt(c),St=rt(c,r.draggable),m.eventCanceled){this._nulling();return}Rt=!1,re=!1,Xt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Be(this.cloneId),Be(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ft&&g(document.body,"user-select",""),g(c,"transform",""),t&&(Nt&&(t.cancelable&&t.preventDefault(),!r.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(_===R||U&&U.lastPutMode!=="clone")&&V&&V.parentNode&&V.parentNode.removeChild(V),c&&(this.nativeDraggable&&$(c,"dragend",this),De(c),c.style["will-change"]="",Nt&&!Rt&&tt(c,U?U.options.ghostClass:this.options.ghostClass,!1),tt(c,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:R,newIndex:null,newDraggableIndex:null,originalEvent:t}),_!==R?(et>=0&&(z({rootEl:R,name:"add",toEl:R,fromEl:_,originalEvent:t}),z({sortable:this,name:"remove",toEl:R,originalEvent:t}),z({rootEl:R,name:"sort",toEl:R,fromEl:_,originalEvent:t}),z({sortable:this,name:"sort",toEl:R,originalEvent:t})),U&&U.save()):et!==Pt&&et>=0&&(z({sortable:this,name:"update",toEl:R,originalEvent:t}),z({sortable:this,name:"sort",toEl:R,originalEvent:t})),m.active&&((et==null||et===-1)&&(et=Pt,St=qt),z({sortable:this,name:"end",toEl:R,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){W("nulling",this),_=c=R=S=Tt=V=le=xt=At=st=Nt=et=St=Pt=qt=Vt=Zt=U=oe=m.dragged=m.ghost=m.clone=m.active=null;var t=this.el;ge.forEach(function(o){t.contains(o)&&(o.checked=!0)}),ge.length=Te=Le=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":c&&(this._onDragOver(t),gi(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],o,r=this.el.children,i=0,n=r.length,a=this.options;i<n;i++)o=r[i],lt(o,a.draggable,this.el,!1)&&t.push(o.getAttribute(a.dataIdAttr)||xi(o));return t},sort:function(t,o){var r={},i=this.el;this.toArray().forEach(function(n,a){var s=i.children[a];lt(s,this.options.draggable,i,!1)&&(r[n]=s)},this),o&&this.captureAnimationState(),t.forEach(function(n){r[n]&&(i.removeChild(r[n]),i.appendChild(r[n]))}),o&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,o){return lt(t,o||this.options.draggable,this.el,!1)},option:function(t,o){var r=this.options;if(o===void 0)return r[t];var i=Gt.modifyOption(this,t,o);typeof i<"u"?r[t]=i:r[t]=o,t==="group"&&Oo(r)},destroy:function(){W("destroy",this);var t=this.el;t[J]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ye.splice(ye.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!xt){if(W("hideClone",this),m.eventCanceled)return;g(V,"display","none"),this.options.removeCloneOnHide&&V.parentNode&&V.parentNode.removeChild(V),xt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(xt){if(W("showClone",this),m.eventCanceled)return;c.parentNode==_&&!this.options.group.revertClone?_.insertBefore(V,c):Tt?_.insertBefore(V,Tt):_.appendChild(V),this.options.group.revertClone&&this.animate(c,V),g(V,"display",""),xt=!1}}};function gi(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ne(e,t,o,r,i,n,a,s){var l,u=e[J],h=u.options.onMove,p;return window.CustomEvent&&!vt&&!Wt?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=o,l.draggedRect=r,l.related=i||t,l.relatedRect=n||M(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),h&&(p=h.call(u,l,a)),p}function De(e){e.draggable=!1}function mi(){Me=!1}function bi(e,t,o){var r=M(Ht(o.el,0,o.options,!0)),i=Do(o.el,o.options,S),n=10;return t?e.clientX<i.left-n||e.clientY<r.top&&e.clientX<r.right:e.clientY<i.top-n||e.clientY<r.bottom&&e.clientX<r.left}function vi(e,t,o){var r=M(Xe(o.el,o.options.draggable)),i=Do(o.el,o.options,S),n=10;return t?e.clientX>i.right+n||e.clientY>r.bottom&&e.clientX>r.left:e.clientY>i.bottom+n||e.clientX>r.right&&e.clientY>r.top}function wi(e,t,o,r,i,n,a,s){var l=r?e.clientY:e.clientX,u=r?o.height:o.width,h=r?o.top:o.left,p=r?o.bottom:o.right,b=!1;if(!a){if(s&&ue<u*i){if(!Xt&&(Zt===1?l>h+u*n/2:l<p-u*n/2)&&(Xt=!0),Xt)b=!0;else if(Zt===1?l<h+ue:l>p-ue)return-Zt}else if(l>h+u*(1-i)/2&&l<p-u*(1-i)/2)return Si(t)}return b=b||a,b&&(l<h+u*n/2||l>p-u*n/2)?l>h+u/2?1:-1:0}function Si(e){return rt(c)<rt(e)?1:-1}function xi(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,r=0;o--;)r+=t.charCodeAt(o);return r.toString(36)}function Ei(e){ge.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var r=t[o];r.checked&&ge.push(r)}}function ce(e){return setTimeout(e,0)}function Be(e){return clearTimeout(e)}we&&A(document,"touchmove",function(e){(m.active||Rt)&&e.cancelable&&e.preventDefault()});m.utils={on:A,off:$,css:g,find:Co,is:function(t,o){return!!lt(t,o,t,!1)},extend:ni,throttle:To,closest:lt,toggleClass:tt,clone:_o,index:rt,nextTick:ce,cancelNextTick:Be,detectDirection:Ro,getChild:Ht,expando:J};m.get=function(e){return e[J]};m.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(m.utils=pt(pt({},m.utils),r.utils)),Gt.mount(r)})};m.create=function(e,t){return new m(e,t)};m.version=ri;var H=[],kt,Ne,ke=!1,Ve,Re,me,Ut;function $i(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(o){var r=o.originalEvent;this.sortable.nativeDraggable?A(document,"dragover",this._handleAutoScroll):this.options.supportPointer?A(document,"pointermove",this._handleFallbackAutoScroll):r.touches?A(document,"touchmove",this._handleFallbackAutoScroll):A(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var r=o.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),lo(),de(),ai()},nulling:function(){me=Ne=kt=ke=Ut=Ve=Re=null,H.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,r){var i=this,n=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(n,a);if(me=o,r||this.options.forceAutoScrollFallback||Wt||vt||Ft){Oe(o,this.options,s,r);var l=Et(s,!0);ke&&(!Ut||n!==Ve||a!==Re)&&(Ut&&lo(),Ut=setInterval(function(){var u=Et(document.elementFromPoint(n,a),!0);u!==l&&(l=u,de()),Oe(o,i.options,u,r)},10),Ve=n,Re=a)}else{if(!this.options.bubbleScroll||Et(s,!0)===ht()){de();return}Oe(o,this.options,Et(s,!1),!1)}}},bt(e,{pluginName:"scroll",initializeByDefault:!0})}function de(){H.forEach(function(e){clearInterval(e.pid)}),H=[]}function lo(){clearInterval(Ut)}var Oe=To(function(e,t,o,r){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,n=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=ht(),u=!1,h;Ne!==o&&(Ne=o,de(),kt=t.scroll,h=t.scrollFn,kt===!0&&(kt=Et(o,!0)));var p=0,b=kt;do{var x=b,y=M(x),w=y.top,B=y.bottom,it=y.left,I=y.right,K=y.width,Z=y.height,ct=void 0,v=void 0,T=x.scrollWidth,O=x.scrollHeight,L=g(x),X=x.scrollLeft,Q=x.scrollTop;x===l?(ct=K<T&&(L.overflowX==="auto"||L.overflowX==="scroll"||L.overflowX==="visible"),v=Z<O&&(L.overflowY==="auto"||L.overflowY==="scroll"||L.overflowY==="visible")):(ct=K<T&&(L.overflowX==="auto"||L.overflowX==="scroll"),v=Z<O&&(L.overflowY==="auto"||L.overflowY==="scroll"));var ot=ct&&(Math.abs(I-i)<=a&&X+K<T)-(Math.abs(it-i)<=a&&!!X),P=v&&(Math.abs(B-n)<=a&&Q+Z<O)-(Math.abs(w-n)<=a&&!!Q);if(!H[p])for(var Y=0;Y<=p;Y++)H[Y]||(H[Y]={});(H[p].vx!=ot||H[p].vy!=P||H[p].el!==x)&&(H[p].el=x,H[p].vx=ot,H[p].vy=P,clearInterval(H[p].pid),(ot!=0||P!=0)&&(u=!0,H[p].pid=setInterval((function(){r&&this.layer===0&&m.active._onTouchMove(me);var nt=H[this.layer].vy?H[this.layer].vy*s:0,at=H[this.layer].vx?H[this.layer].vx*s:0;typeof h=="function"&&h.call(m.dragged.parentNode[J],at,nt,e,me,H[this.layer].el)!=="continue"||Lo(H[this.layer].el,at,nt)}).bind({layer:p}),24))),p++}while(t.bubbleScroll&&b!==l&&(b=Et(b,!1)));ke=u}},30),Ho=function(t){var o=t.originalEvent,r=t.putSortable,i=t.dragEl,n=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(o){var u=r||n;s();var h=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,p=document.elementFromPoint(h.clientX,h.clientY);l(),u&&!u.el.contains(p)&&(a("spill"),this.onSpill({dragEl:i,putSortable:r}))}};function Ye(){}Ye.prototype={startIndex:null,dragStart:function(t){var o=t.oldDraggableIndex;this.startIndex=o},onSpill:function(t){var o=t.dragEl,r=t.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var i=Ht(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(o,i):this.sortable.el.appendChild(o),this.sortable.animateAll(),r&&r.animateAll()},drop:Ho};bt(Ye,{pluginName:"revertOnSpill"});function ze(){}ze.prototype={onSpill:function(t){var o=t.dragEl,r=t.putSortable,i=r||this.sortable;i.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),i.animateAll()},drop:Ho};bt(ze,{pluginName:"removeOnSpill"});m.mount(new $i);m.mount(ze,Ye);const Ai=e=>{const t=e.item;let o=Array.prototype.slice.call(t.parentNode.childNodes);return o=o.filter(r=>r.nodeType!=Node.ELEMENT_NODE||!r.classList.contains("sortable-fallback")),o},Ci=(e,t,o,r,i,n)=>{const s=e.item.parentNode;for(const w of o)s.appendChild(w);if(e.oldIndex==e.newIndex)return;const l=r.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(i),h=l.find(w=>w.get(i)===u),p=n.dataset.layer,b=l.find(w=>w.get(i)==p);let x,y;for(x=0;x<l.length;x++)if(l[x]==h){r.removeAt(x);break}for(y=0;y<l.length;y++)if(l[y]===b){x>y?r.insertAt(y,h):r.insertAt(y+1,h);break}t.requestUpdate()};function Ti(e,t,o,r){let i=[],n=null;e._sortable=m.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),i=Ai(a)},onMove:a=>{n=a.related},onEnd:a=>Ci(a,r,i,t,o,n)})}function Li(e,t,o,r){const i=e.getArray();let n=!1;i.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),n=!0),a.get(o)||(a.set(o,`layer ${s}`),n=!0),n&&r.requestUpdate()})}function We(e,t,o){let r=[];const i=(n,a,s)=>{r=[...r,...n.filter(u=>u.get(a)===s)];const l=n.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>i(u.getLayers().getArray(),a,s)),r};return i(e,t,o),r}function _i(e,t,o){if(!e||!t)return!1;if(!Mo(e,o))return!0;const r=e.get("minZoom"),i=e.get("maxZoom"),n=t.getView().getZoom();return n>r&&n<i}function Mo(e,t){const o=e.get("minZoom"),r=e.get("maxZoom");return!!(t&&(o!==-1/0||r!==1/0))}function uo(e,t){return!e||!t?void 0:e.getLayers?"group":t.getInteractions().getArray().filter(i=>i.freehand_!==void 0).map(i=>i.source_)?.ol_uid?.includes(e.getSource?e.getSource()?.ol_uid:void 0)?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Di=(e,t,o)=>{let r=t;const i=o.layer.getSource(),n=o.layerConfig.schema?.options?.removeProperties??[],a={...e};n.forEach(l=>delete a[l]),i.updateParams?i.updateParams(a):i.getTileUrlFunction&&i.getTileUrlFunction()&&(r||(r=i.getTileUrlFunction()),i instanceof Yo&&(i._updatedUrl=$e(i.getUrls()[0],e)),i.setTileUrlFunction((...l)=>{const u=new URL(r(...l));return n.forEach(h=>u.searchParams.delete(h)),$e(u.href,e)}),i.setKey(new Date().toISOString()));const s=document.querySelector("eox-map");if(s){const l=s.globe;if(l){const u=l.planet.layers.filter(h=>h.name==o.layer.get("id"))[0];u&&u.setUrl($e(u.url,e)),window.eoxMapGlobe.refresh()}}return r};function Vi(e,t,o){const r="updateStyleVariables"in t,i="setStyle"in t,n=r?t.style_:o.style;let a=n?.variables;if(a){const s=Ge(e);if(n.variables={...a,...s},r)t.updateStyleVariables(s);else if(i){const l=Ri(n);t.setStyle(l)}}}const Ge=e=>{const t={};for(const o in e)if(typeof e[o]=="object"&&e[o]!==null){const r=Ge(e[o]);for(const i in r)t[i]=r?.[i]}else t[o]=e?.[o];return t};function Ri(e){let t=e;if("variables"in e){let o=JSON.stringify(e);const{variables:r}=e;for(const i in r)typeof r[i]=="number"?o=o.replaceAll(`["var","${i}"]`,String(r[i])):o=o.replaceAll(`["var","${i}"]`,`"${r[i]}"`);t=JSON.parse(o)}return t}const Oi=(e,t,o)=>{if(!e)return;const r=Ge(t);let i,n;return Array.isArray(e)?n=structuredClone(e):n=[structuredClone(e)],i=n.filter(a=>{if(!("boundTo"in a))return!0;const s=a.boundTo.key,l=a.boundTo.value;return s in r&&r[s]==l}),i.length||(i=null),i?.map(a=>{if(delete a.boundTo,a.rangeProperty&&o){const s=r[a.rangeProperty];s&&o[s]?(a.range=o[s],delete a.rangeProperty):s&&(a.range=["#ffffff","#000000"])}return!("domainProperties"in a)||"domain"in a?a:Object.keys(a)?.reduce((s,l)=>(l==="domainProperties"?s.domain=a[l].map(u=>r[u]):s[l]=a[l],s),{})}).filter(Boolean)};function Pi(e,t){if(!t)return null;let o={},r="updateStyleVariables"in e?e.style_?.variables:t.style?.variables;if((t.type==="style"||t.style)&&r)o=r;else if(e.getSource()?.getParams?.())o=e.getSource().getParams();else if(e.getSource()?.getTileUrlFunction?.())try{const a=e.getSource().getTileUrlFunction()([0,0,0]);if(a){const s=new URL(a);o={};for(const[l,u]of s.searchParams.entries()){const h=s.searchParams.getAll(l);o[l]=h.length>1?h:u}}}catch(a){console.error("Error parsing start values from tile URL",a)}else return null;const i=be(t.schema),n=Bo(Object.keys(i).length?i:t.schema,o,t.schema);return Object.keys(n).length?n:null}function be(e,t=e,o=new Set){if(!e||typeof e!="object")return{};const r={};typeof e.$ref=="string"&&!o.has(e.$ref)&&(o.add(e.$ref),Object.assign(r,be(Ii(e.$ref,t),t,o)));for(const i of["anyOf","oneOf","allOf"])if(Array.isArray(e[i]))for(const n of e[i])Object.assign(r,be(n,t,o));return Object.assign(r,e.properties)}function Bo(e,t,o=e){let r={};for(const i in e){const n=e[i]?.type;if(n&&n!=="object"&&t[i]!==void 0){const a=["number","integer"].includes(n)?Number(t[i]):t[i];r[i]=Number.isNaN(a)?t[i]:a}else{const a=Bo(be(e[i],o),t,o);Object.keys(a).length>0&&(r[i]=a)}}return r}function Ii(e,t){if(e.startsWith("#/"))return e.slice(2).split("/").reduce((o,r)=>o?.[r.replace(/~1/g,"/").replace(/~0/g,"~")],t)}const No=(e,t)=>e?.filter(o=>["remove","sort"].filter(r=>t?.get("layerControlDisable")?r!=="sort":!0).includes(o)),ko=(e,t)=>e?.filter(o=>{let r=!0;return["remove","sort"].includes(o)&&(r=!1),o==="info"&&(r=t.get("description")),o==="config"&&(r=t.get("layerConfig")),o==="datetime"&&(r=t.get("layerDatetime")),o==="legend"&&(r=t.get("layerLegend")),r}),Hi=(e,t,o)=>d`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${o?e:d`<i class="small primary-text">${t}</i>`}
  </button>
`,Uo=(e,t)=>d`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:o}=e;o?.set("layerControlOptional",!0),o?.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:o,bubbles:!0}))}}
  >
    ${e.unstyled?"x":d`<i class="small red-text">${t}</i>`}
  </button>
`,Fo=(e,t,o)=>d`
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
    </svg>`}}const jo=e=>{const t=["layerControlHide","layerControlOptional"];return e?.getArray()?.filter(o=>t.every(r=>!o.get(r)))};function qo(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}const Ue=Qo(class extends tr{constructor(e){if(super(e),e.type!==_t.PROPERTY&&e.type!==_t.ATTRIBUTE&&e.type!==_t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!er(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===te||t===$t)return t;const o=e.element,r=e.name;if(e.type===_t.PROPERTY){if(t===o[r])return te}else if(e.type===_t.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(r))return te}else if(e.type===_t.ATTRIBUTE&&o.getAttribute(r)===t+"")return te;return or(e),t}});var Pe,co;function Mi(){if(co)return Pe;co=1;var e="Expected a function",t=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l=typeof ee=="object"&&ee&&ee.Object===Object&&ee,u=typeof self=="object"&&self&&self.Object===Object&&self,h=l||u||Function("return this")(),p=Object.prototype,b=p.toString,x=Math.max,y=Math.min,w=function(){return h.Date.now()};function B(v,T,O){var L,X,Q,ot,P,Y,nt=0,at=!1,dt=!1,ft=!0;if(typeof v!="function")throw new TypeError(e);T=ct(T)||0,I(O)&&(at=!!O.leading,dt="maxWait"in O,Q=dt?x(ct(O.maxWait)||0,T):Q,ft="trailing"in O?!!O.trailing:ft);function Mt(N){var wt=L,Bt=X;return L=X=void 0,nt=N,ot=v.apply(Bt,wt),ot}function Je(N){return nt=N,P=setTimeout(Qt,T),at?Mt(N):ot}function Jt(N){var wt=N-Y,Bt=N-nt,Qe=T-wt;return dt?y(Qe,Q-Bt):Qe}function Kt(N){var wt=N-Y,Bt=N-nt;return Y===void 0||wt>=T||wt<0||dt&&Bt>=Q}function Qt(){var N=w();if(Kt(N))return Ke(N);P=setTimeout(Qt,Jt(N))}function Ke(N){return P=void 0,ft&&L?Mt(N):(L=X=void 0,ot)}function Zo(){P!==void 0&&clearTimeout(P),nt=0,L=Y=X=P=void 0}function Xo(){return P===void 0?ot:Ke(w())}function Se(){var N=w(),wt=Kt(N);if(L=arguments,X=this,Y=N,wt){if(P===void 0)return Je(Y);if(dt)return P=setTimeout(Qt,T),Mt(Y)}return P===void 0&&(P=setTimeout(Qt,T)),ot}return Se.cancel=Zo,Se.flush=Xo,Se}function it(v,T,O){var L=!0,X=!0;if(typeof v!="function")throw new TypeError(e);return I(O)&&(L="leading"in O?!!O.leading:L,X="trailing"in O?!!O.trailing:X),B(v,T,{leading:L,maxWait:T,trailing:X})}function I(v){var T=typeof v;return!!v&&(T=="object"||T=="function")}function K(v){return!!v&&typeof v=="object"}function Z(v){return typeof v=="symbol"||K(v)&&b.call(v)==o}function ct(v){if(typeof v=="number")return v;if(Z(v))return t;if(I(v)){var T=typeof v.valueOf=="function"?v.valueOf():v;v=I(T)?T+"":T}if(typeof v!="string")return v===0?v:+v;v=v.replace(r,"");var O=n.test(v);return O||a.test(v)?s(v.slice(2),O?2:8):i.test(v)?t:+v}return Pe=it,Pe}var Bi=Mi();const ho=zo(Bi);const ae=e=>e??$t;class Ni extends ut{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layer=null}#t=[];get layerLegend(){return this.#t?this.#t.length>1?this.#t:this.#t[0]:null}set layerLegend(t){t?Array.isArray(t)?this.#t=t.map((o,r)=>({id:(this.layer?.get("id")??"")+r,...o})):this.#t=[{id:(this.layer?.get("id")??"")+0,...t}]:this.#t=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{this.#t=this.#t?.map(t=>(this.offsetWidth!==t.width&&(t.width=this.offsetWidth),{...t})),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),d`
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
                ${o!==r.length-1?d`<div class="separator"></div>`:$t}
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
  `;#o=""}customElements.define("eox-layercontrol-layer-legend",Ni);class ki extends ut{static properties={layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};#t={};#e=null;#o;constructor(){super(),this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=ho(this.#r,1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}updated(t){if(t.has("layerConfig")){const o=this.layerConfig?.type==="style"||this.layerConfig?.style?100:1e3;this.throttleDataChange=ho(this.#r,o),this.requestUpdate()}}#r(t){this.#t=t.detail,this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?Vi(this.#t,this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):this.#o=Di(this.#t,this.#o,this),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail,layer:this.layer}})),this.requestUpdate()}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){this.#e=Pi(this.layer,this.layerConfig),Object.keys(this.#t).length!==0&&(this.#e=this.#t),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const t={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return d`
      <style>
        ${this.#n}
        ${!this.unstyled&&this.#i}
      </style>
      ${D(this.layerConfig,()=>d`
          ${D(this.layerConfig.legend,()=>d`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Oi(this.layerConfig.legend,this.#e,this.colormapRegistry)}
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
    `}#n=Ie`
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
  `;#i=Ie`
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
  `}customElements.define("eox-layercontrol-layerconfig",ki);class Ui extends ut{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){const o=new Date(t.detail.date[0]),r=this.layerDatetime.controlValues?.some(n=>typeof n=="string"&&n.includes("T"));let i;r?i=o.toISOString():i=(a=>`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`)(o),i!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:i,layer:this.layer}})),this.layerDatetime.currentStep=i,this.requestUpdate())}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      ${D(this.layerDatetime,()=>d`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(t=>({date:t}))}]}
            @select=${this.#t}
            .showUTC=${this.layerDatetime.showUTC||!1}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation??!1}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider
              animate-onclick-interval="${this.layerDatetime.animateOnClickInterval??"0.3s"}"
            ></eox-timecontrol-slider>
          </eox-timecontrol>
        `)}
    `}#e="";#o=""}customElements.define("eox-layercontrol-layer-datetime",Ui);class Fi extends ut{static properties={actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t=t=>(this.selectedTab===t||this.toolsAsList)&&"highlighted";render(){const t=this.tabs,o=this.actions,r=o.length+t.length>1;return d`
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
                    ${se(t,(i,n)=>d`
                        <label
                          class=${this.#t(n)}
                          @click=${()=>this.selectedTab=n}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${i}-icon`}>${i}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${se(o,i=>d`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${i}-icon`}>${i}</slot>
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
          ${se(t,(i,n)=>d`
              ${D(this.toolsAsList,()=>d`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${i}-icon`}>${i}</slot>
                    <span>${i}</span>
                  </label>
                `)}
              <div class="tab ${this.#t(n)}">
                <!-- Content slot for each tab -->
                <slot name=${`${i}-content`}>${i}</slot>
              </div>
              ${D(this.toolsAsList&&n<t.length-1,()=>d`<hr class="small" />`)}
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
    ${Fe}
    figure {
      padding: var(--padding-vertical) var(--padding);
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
      border-bottom: 1px solid var(--surface-variant);
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
  `}customElements.define("eox-layercontrol-tools-items",Fi);class ji extends ut{static properties={layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{const t=this.parentElement||this.getRootNode()?.host;this.embedded=t?.tagName==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!this.layer?.getVisible():this.embedded===!1?!0:!!this.layer?.get("layerControlToolsExpand"))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updated(t){this.toolsAutoExpand&&(t.has("toolsAutoExpand")||t.has("layer"))&&(this.open=!!this.layer?.getVisible())}#t(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail.jsonformValue,layer:t.detail.layer}}))}_removeButton=t=>Uo(this,t);_sortButton=t=>Fo(this,t,this.unstyled);_button=(t,o)=>Hi(t,o,this.unstyled);_getDefaultTools=t=>d`
      <div slot="info-content">
        ${rr(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Ue(this.layer?.getOpacity())}
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
              .colormapRegistry=${this.colormapRegistry}
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
              @datetime:updated=${o=>qo(o,this)}
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
    `;render(){const t=No(this.tools,this.layer),o=ko(this.tools,this.layer),r=t?.length,i=o?.length;return d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      ${D(r+i>0,()=>d`
          ${D(!(r===1&&i===0),()=>d`
              <details
                class="tools"
                .open=${Ue(this.open)}
                @toggle=${n=>{this.open=n.target.open}}
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
                  ${se(o,n=>this._button(n,Yt()[n]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(Yt())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}#e="";#o=`
    ${this.embedded?"":Fe}
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
    :host {
      display: block;
      margin-block: var(--padding-vertical) !important;
    }
    details[open] eox-layercontrol-tools-items {
      display: block;
    }
  `}customElements.define("eox-layercontrol-layer-tools",ji);const qi=e=>{const t=()=>{const o=_i(e.layer,e.map,e.showLayerZoomState);let r=!1;!o&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,r=!0):o&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,r=!0),r&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Mo(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},Zi=(e,t)=>{const o=t.layer;if(o.setVisible(e.target.checked),t.toolsAutoExpand){const r=t.renderRoot.querySelector("eox-layercontrol-layer-tools");r&&(r.open=e.target.checked)}e.target.checked&&o.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(i=>{if(i.layer!==o&&i.layer?.get("layerControlExclusive")){if(i.layer.setVisible(!1),i.toolsAutoExpand){const n=i.renderRoot.querySelector("eox-layercontrol-layer-tools");n&&(n.open=!1)}i.requestUpdate()}}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:o})),t.requestUpdate()};class Xi extends ut{static properties={layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};currLayerVisibilityBasedOnZoom=!0;constructor(){super(),this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}#t(t){return this.layer?.get(t)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){qi(this)}#e(t){Zi(t,this)}render(){const t=this.layer.getVisible(),o=t?"visible":"",r=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",i=this.#t("layerControlDisable")?"disabled":"",n=this.#t("layerControlExclusive")?"radio":"checkbox",a=No(this.tools,this.layer)?.length>0,s=ko(this.tools,this.layer)?.length>0,l=document.querySelector("eox-layercontrol-layer-tools");return l&&Object.assign(l,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),d`
      <style>
        ${this.#o}
        ${!this.unstyled&&this.#r}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${D(this.layer,()=>d`
          <!-- Render the layer -->
          <nav
            class="layer ${i} ${o} ${r} responsive tiny-space"
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
            <div class="max truncate drag-handle ${i}">
              <span class="layertitle truncate"
                >${this.#t(this.titleProperty)}</span
              >
            </div>

            ${D(s&&!this.toolsAutoExpand,()=>d`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const u=this.renderRoot.querySelector("eox-layercontrol-layer-tools");u.open=!u.open}}
                >
                  <i class="small">
                    ${Yt()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${D(!s&&a,()=>this.tools[0]==="remove"?Uo(this,Yt()[this.tools[0]]):Fo(this,Yt()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${i} ${n} icon primary-text action visibility small"
            >
              <input
                type=${n}
                .checked=${Ue(t)}
                @click=${this.#e}
                disabled=${i||$t}
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
              <!--<span class="tooltip top" style="pointer-events: none">${t?"Hide":"Show"}</span>-->
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
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
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
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;
      transform: translateX(.3rem);
    }
    eox-layercontrol-layer > nav > .action.visibility span::after {
      border-radius: 0.25rem !important;
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
  `}customElements.define("eox-layercontrol-layer",Xi);class Yi extends ut{static properties={group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=!!this.group?.get("layerControlExpand"),o=jo(this.group.getLayers())?.length;return d`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      ${D(this.group,()=>d`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${t||$t}
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
                .toolsAutoExpand=${this.toolsAutoExpand}
                .colormapRegistry=${this.colormapRegistry}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${this.noShadow}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .toolsAutoExpand=${this.toolsAutoExpand}
              .colormapRegistry=${this.colormapRegistry}
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
  `}customElements.define("eox-layercontrol-layer-group",Yi);const zi=e=>{const{layers:t,idProperty:o,titleProperty:r,renderRoot:i}=e,n=Jo(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>n();if(t&&(t.hasListener("change:length")&&t?.un("change:length",a),t.on("change:length",a),t)){const s=i.querySelector("ul");Li(t,o,r,e),Ti(s,t,o,e)}};class Wi extends ut{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){zi(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.layers?jo(this.layers).reverse():[];return d`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      <ul class="list no-space">
        ${D(this.layers,()=>d`
            ${Ko(t,o=>o,o=>d`
                <li
                  data-layer="${o.get(this.idProperty)}"
                  data-type="${uo(o,this.map)}"
                  class="square"
                >
                  ${o.getLayers?d`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${o}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:d`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${o}
                            .layerType=${uo(o,this.map)}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
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
    .list.no-space {
      margin-block: var(--padding-inline) !important;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `}customElements.define("eox-layercontrol-layer-list",Wi);const Gi=e=>{const t=e.querySelector("select[name=optional]"),o=t?t.value:null,r=We(e.layers.getArray(),"layerControlOptional",!0).find(i=>(i.get(e.idProperty)||i.ol_uid)===o);r?.set("layerControlOptional",!1),r?.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(i=>i.requestUpdate()),e.requestUpdate()};class Ji extends ut{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}};constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(){Gi(this)}render(){const t=We(this.layers.getArray(),"layerControlOptional",!0);return d`
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
            ${t.map(o=>{const r=o.get(this.idProperty)||o.ol_uid,i=o.get(this.titleProperty),n=`layer ${o.get(this.idProperty)}`;return d` <option value="${r}">${i||n}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${this.#t}">Add</button>
      </nav>
    `}}customElements.define("eox-layercontrol-optional-list",Ji);const Ki=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},po=e=>{const t=JSON.parse(`{"data":${xo(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(o=>{e.eoxMap.addOrUpdateLayer(o)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},Qi=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function tn(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(qe(t)==="XYZ")return{Name:t};try{const o=await Wr(t);e.wmsCapabilities=o}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const en=(e,t)=>{const{Name:o}=e,r=qe(t.urlInput)||"XYZ",i={type:"Tile",properties:{id:o,title:o},source:{type:r,url:t.urlInput,params:{LAYERS:o}}};t.jsonInput=JSON.stringify(i)},on=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};class rn extends ut{static properties={eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}};urlInput=null;jsonInput=null;open=null;searchLoad=!1;wmsCapabilities=null;constructor(){super(),this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){Qi(t,this)}async#e(){const t=await tn(this);t&&this.#o(t)}#o(t){en(t,this),po(this)}#r(){po(this)}#n(t){Ki(t,this)}#i(t){on(t,this)}render(){const t={add:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      </svg>`},o=this.open?"open":"close",r=this.open==="url",i=this.open==="json",n=!Gr(this.urlInput)||this.searchLoad?!0:$t;return d`
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
              @click=${()=>this.#i("url")}
              class="${r?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>this.#i("json")}
              class="${i?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>this.#i(this.open?null:"url")}
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
                    disabled=${n}
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
                    </ul>`:$t}
              `:d`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${this.#n}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${Jr(this.jsonInput)?$t:!0}
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
  `}customElements.define("eox-layercontrol-add-layers",rn);const nn=(e,t)=>{t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"&&t.renderRoot.querySelector("eox-layercontrol-optional-list")?.requestUpdate()},fo=e=>{const t=Wo(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};Go();class an extends ut{static properties={for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}};#t;constructor(){super(),this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=fo(this)}updated(t){t.has("for")&&(this.eoxMap=fo(this))}get eoxMap(){return this.#t}set eoxMap(t){const o=this.#t;this.#t=t,this.requestUpdate("eoxMap",o)}#e(t){nn(t,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:t.detail}))}#o(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:t.detail}))}render(){const t=this.map?.getLayers().getArray(),o=t&&We(t,"layerControlOptional",!0)?.length>0;return d`
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
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${this.#e}
            @datetime:updated=${r=>qo(r,this)}
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
    ${Fe}
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
    summary > * {
      pointer-events: all !important;
    }
  `}customElements.define("eox-layercontrol",an);export{an as EOxLayerControl,Ri as updateVectorLayerStyle};
