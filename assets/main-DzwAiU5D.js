import{b as d,E as te,A as $t,a as ut,i as Oe,e as Ue,c as Xo}from"./addCommonStyleSheet-xNxGAsM0.js";import{n as D}from"./when-CI7b_ccM.js";import{c as Yo}from"./repeat-CMQfrIVb.js";import{e as zo,i as Wo,t as _t}from"./directive-CwRn8Fwj.js";import{r as Go,p as Jo}from"./directive-helpers-DyV73Z3p.js";import{o as Ko}from"./unsafe-html-DKRLx5lS.js";import{o as se}from"./map-Bv-shLAs.js";import{X as Qo}from"./XYZ-BMz7GYxa.js";import{bu as ee,a8 as tn}from"./index-Blt6j4zJ.js";import{_ as en}from"./index-C-dbsWzT.js";import{g as on}from"./getElement-CdRlZPdn.js";import"./intersectsextent-D03KA33t.js";var E=e=>e!==void 0,fo=(e,t,o)=>t in e?e[t]:e[t]=o;const zt={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class nn{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,o){return ve(t,o).join("")}}function ve(e,t){return yo(e,t,[]).join("")}function yo(e,t,o){if(e.nodeType===zt.CDATA_SECTION||e.nodeType===zt.TEXT)t?o.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(e.nodeValue);else{var n;for(n=e.firstChild;n;n=n.nextSibling)yo(n,t,o)}return o}function rn(e,t,o,n){for(var i=an(t);i;i=sn(i)){var r=i.namespaceURI||null,a=e[r];if(E(a)){var s=a[i.localName];E(s)&&s.call(n,i,o)}}}function an(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==zt.ELEMENT;)t=t.nextSibling;return t}function sn(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==zt.ELEMENT;)t=t.nextSibling;return t}function F(e,t,o){return ln(e,t,o)}function ln(e,t,o){var n=E(o)?o:{},i,r;for(i=0,r=e.length;i<r;++i)n[e[i]]=t;return n}function go(e,t){return(function(o,n){var i=e.call(E(t)?t:this,o,n);if(E(i)){var r=n[n.length-1];r.push(i)}})}function k(e,t,o,n,i){return n.push(e),rn(t,o,n,i),n.pop()}function f(e,t,o){return(function(n,i){let r=e.call(E(o)?o:this,n,i);if(E(r)){var a=i[i.length-1],s=E(t)?t:n.localName;a[s]=r}})}function G(e,t,o){return(function(n,i){var r=e.call(E(o)?o:this,n,i);if(E(r)){var a=i[i.length-1],s=E(t)?t:n.localName,l=fo(a,s,[]);l.push(r)}})}const un=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function cn(e){return e.replace(un,"")}function Lt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function It(e){return yt(ve(e,!1))}function yt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function Se(e){return he(ve(e,!1))}function he(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function C(e){return cn(ve(e,!1))}const dn="http://www.w3.org/1999/xlink";function Fe(e){return e.getAttributeNS(dn,"href")}function hn(e,t){return k({},Nn,e,t)}function mo(e){return[yt(e.getAttribute("minx")),yt(e.getAttribute("miny")),yt(e.getAttribute("maxx")),yt(e.getAttribute("maxy"))]}function pn(e,t){const o=mo(e),n=[yt(e.getAttribute("resx")),yt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:o,res:n}}function fn(e,t){const o=mo(e);if(!(!E(o[0])||!E(o[1])||!E(o[2])||!E(o[3])))return o}function yn(e,t){const o=parseFloat(e.getAttribute("min")),n=parseFloat(e.getAttribute("max"));return{min:o,max:n}}function gn(e,t){const o=k({},kn,e,t);if(!E(o))return;const n=o.westBoundLongitude,i=o.southBoundLatitude,r=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!E(n)||!E(i)||!E(r)||!E(a)))return[n,i,r,a]}function mn(e,t){return k({},In,e,t)}function vn(e,t){return k({},On,e,t)}function bn(e,t){return k({},Pn,e,t)}function wn(e,t){return k({},Hn,e,t)}function Sn(e,t){return k({},Mn,e,t)}function xn(e,t){return k([],Bn,e,t)}function En(e,t){const o=Lt(e.getAttribute("queryable"));return k({queryable:E(o)?o:!1},wo,e,t)}function $n(e,t){var o=t[t.length-1];const n=k({},wo,e,t);if(!E(n))return;let i=Lt(e.getAttribute("queryable"));E(i)||(i=o.queryable),n.queryable=E(i)?i:!1;let r=he(e.getAttribute("cascaded"));E(r)||(r=o.cascaded),n.cascaded=r;let a=Lt(e.getAttribute("opaque"));E(a)||(a=o.opaque),n.opaque=E(a)?a:!1;let s=Lt(e.getAttribute("noSubsets"));E(s)||(s=o.noSubsets),n.noSubsets=E(s)?s:!1;let l=yt(e.getAttribute("fixedWidth"));E(l)||(l=o.fixedWidth),n.fixedWidth=l;let u=yt(e.getAttribute("fixedHeight"));E(u)||(u=o.fixedHeight),n.fixedHeight=u;const p=["Style","CRS","AuthorityURL"];for(let v=0,x=p.length;v<x;v++){const y=p[v],w=o[y];if(E(w)){let B=fo(n,y,[]);B=B.concat(w),n[y]=B}}const h=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let v=0,x=h.length;v<x;v++){const y=h[v],w=n[y];if(!E(w)){const B=o[y];n[y]=B}}return n}function An(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Lt(e.getAttribute("multipleValues")),nearestValue:Lt(e.getAttribute("nearestValue")),current:Lt(e.getAttribute("current")),values:C(e)}}function mt(e,t){return k({},Xn,e,t)}function Cn(e,t){return k({},Un,e,t)}function Tn(e,t){return k({},qn,e,t)}function Ln(e,t){return k({},jn,e,t)}function xe(e,t){return k({},Fn,e,t)}function vo(e,t){var o=mt(e,t);if(E(o)){const n=[he(e.getAttribute("width")),he(e.getAttribute("height"))];return o.size=n,o}}function _n(e,t){var o=mt(e,t);if(E(o))return o.name=e.getAttribute("name"),o}function Dn(e,t){var o=mt(e,t);if(E(o))return o.type=e.getAttribute("type"),o}function Vn(e,t){return k({},Zn,e,t)}function bo(e,t){return k([],Yn,e,t)}const q=[null,"http://www.opengis.net/wms"],Rn=F(q,{Service:f(vn),Capability:f(mn)}),In=F(q,{Request:f(Cn),Exception:f(xn),Layer:f(En)}),On=F(q,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(bo),OnlineResource:f(Fe),ContactInformation:f(bn),Fees:f(C),AccessConstraints:f(C),LayerLimit:f(Se),MaxWidth:f(Se),MaxHeight:f(Se)}),Pn=F(q,{ContactPersonPrimary:f(wn),ContactPosition:f(C),ContactAddress:f(Sn),ContactVoiceTelephone:f(C),ContactFacsimileTelephone:f(C),ContactElectronicMailAddress:f(C)}),Hn=F(q,{ContactPerson:f(C),ContactOrganization:f(C)}),Mn=F(q,{AddressType:f(C),Address:f(C),City:f(C),StateOrProvince:f(C),PostCode:f(C),Country:f(C)}),Bn=F(q,{Format:go(C)}),wo=F(q,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(bo),CRS:G(C),SRS:G(C),EX_GeographicBoundingBox:f(gn),LatLonBoundingBox:f(fn),BoundingBox:G(pn),Dimension:G(An),Attribution:f(hn),AuthorityURL:G(_n),Identifier:G(C),MetadataURL:G(Dn),DataURL:G(mt),FeatureListURL:G(mt),Style:G(Vn),MinScaleDenominator:f(It),MaxScaleDenominator:f(It),ScaleHint:f(yn),Layer:G($n)}),Nn=F(q,{Title:f(C),OnlineResource:f(Fe),LogoURL:f(vo)}),kn=F(q,{westBoundLongitude:f(It),eastBoundLongitude:f(It),southBoundLatitude:f(It),northBoundLatitude:f(It)}),Un=F(q,{GetCapabilities:f(xe),GetMap:f(xe),GetFeatureInfo:f(xe)}),Fn=F(q,{Format:G(C),DCPType:G(Tn)}),qn=F(q,{HTTP:f(Ln)}),jn=F(q,{Get:f(mt),Post:f(mt)}),Zn=F(q,{Name:f(C),Title:f(C),Abstract:f(C),LegendURL:G(vo),StyleSheetURL:f(mt),StyleURL:f(mt)}),Xn=F(q,{Format:f(C),OnlineResource:f(Fe)}),Yn=F(q,{Keyword:go(C)});class zn{constructor(t,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new nn(o),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let o=t.firstChild;o;o=o.nextSibling)if(o.nodeType==zt.ELEMENT)return this.readFromNode(o);return null}readFromNode(t){return this.version=t.getAttribute("version"),k({version:this.version},Rn,t,[])||null}}async function Wn(e){let t=new URL(e),o=t.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let n=t.toString();const i=await fetch(n);if(i.ok){const r=await i.text();return new zn(r).toJSON()}else throw new Error(`Error: ${i.status}`)}function qe(e){const t=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":o.test(e)?"XYZ":!1}function Gn(e){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),n=qe(e);return!!(e&&o&&n)}function So(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Jn(e){try{return JSON.parse(So(e)),!!e}catch{return!1}}function Ee(e,t){const o=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):Array.isArray(s)?(o.delete(a),s.forEach(l=>{o.append(a,l)})):o.set(a,s)});const n=e.split("?")[0],i=o.toString();return`${n}?${i}`}function Kn(e,t,o){return(t=oi(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function vt(){return vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)({}).hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},vt.apply(null,arguments)}function Qe(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function pt(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Qe(Object(o),!0).forEach(function(n){Kn(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Qe(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function Qn(e,t){if(e==null)return{};var o,n,i=ti(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)===-1&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function ti(e,t){if(e==null)return{};var o={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;o[n]=e[n]}return o}function ei(e,t){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function oi(e){var t=ei(e,"string");return typeof t=="symbol"?t:t+""}function Pe(e){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe(e)}var ni="1.15.7";function gt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var bt=gt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Wt=gt(/Edge/i),to=gt(/firefox/i),Ft=gt(/safari/i)&&!gt(/chrome/i)&&!gt(/android/i),je=gt(/iP(ad|od|hone)/i),xo=gt(/chrome/i)&&gt(/android/i),Eo={capture:!1,passive:!1};function A(e,t,o){e.addEventListener(t,o,!bt&&Eo)}function $(e,t,o){e.removeEventListener(t,o,!bt&&Eo)}function pe(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function $o(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function lt(e,t,o,n){if(e){o=o||document;do{if(t!=null&&(t[0]===">"?e.parentNode===o&&pe(e,t):pe(e,t))||n&&e===o)return e;if(e===o)break}while(e=$o(e))}return null}var eo=/\s+/g;function tt(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(eo," ").replace(" "+t+" "," ");e.className=(n+(o?" "+t:"")).replace(eo," ")}}function g(e,t,o){var n=e&&e.style;if(n){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),t===void 0?o:o[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=o+(typeof o=="string"?"":"px")}}function Pt(e,t){var o="";if(typeof e=="string")o=e;else do{var n=g(e,"transform");n&&n!=="none"&&(o=n+" "+o)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(o)}function Ao(e,t,o){if(e){var n=e.getElementsByTagName(t),i=0,r=n.length;if(o)for(;i<r;i++)o(n[i],i);return n}return[]}function ht(){var e=document.scrollingElement;return e||document.documentElement}function M(e,t,o,n,i){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,s,l,u,p,h;if(e!==window&&e.parentNode&&e!==ht()?(r=e.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,u=r.right,p=r.height,h=r.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,p=window.innerHeight,h=window.innerWidth),(t||o)&&e!==window&&(i=i||e.parentNode,!bt))do if(i&&i.getBoundingClientRect&&(g(i,"transform")!=="none"||o&&g(i,"position")!=="static")){var v=i.getBoundingClientRect();a-=v.top+parseInt(g(i,"border-top-width")),s-=v.left+parseInt(g(i,"border-left-width")),l=a+r.height,u=s+r.width;break}while(i=i.parentNode);if(n&&e!==window){var x=Pt(i||e),y=x&&x.a,w=x&&x.d;x&&(a/=w,s/=y,h/=y,p/=w,l=a+p,u=s+h)}return{top:a,left:s,bottom:l,right:u,width:h,height:p}}}function oo(e,t,o){for(var n=Et(e,!0),i=M(e)[t];n;){var r=M(n)[o],a=void 0;if(a=i>=r,!a)return n;if(n===ht())break;n=Et(n,!1)}return!1}function Ht(e,t,o,n){for(var i=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==m.ghost&&(n||a[r]!==m.dragged)&&lt(a[r],o.draggable,e,!1)){if(i===t)return a[r];i++}r++}return null}function Ze(e,t){for(var o=e.lastElementChild;o&&(o===m.ghost||g(o,"display")==="none"||t&&!pe(o,t));)o=o.previousElementSibling;return o||null}function nt(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==m.clone&&(!t||pe(e,t))&&o++;return o}function no(e){var t=0,o=0,n=ht();if(e)do{var i=Pt(e),r=i.a,a=i.d;t+=e.scrollLeft*r,o+=e.scrollTop*a}while(e!==n&&(e=e.parentNode));return[t,o]}function ii(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[o][n])return Number(o)}return-1}function Et(e,t){if(!e||!e.getBoundingClientRect)return ht();var o=e,n=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var i=g(o);if(o.clientWidth<o.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return ht();if(n||t)return o;n=!0}}while(o=o.parentNode);return ht()}function ri(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function $e(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var qt;function Co(e,t){return function(){if(!qt){var o=arguments,n=this;o.length===1?e.call(n,o[0]):e.apply(n,o),qt=setTimeout(function(){qt=void 0},t)}}}function ai(){clearTimeout(qt),qt=void 0}function To(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function Lo(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function _o(e,t,o){var n={};return Array.from(e.children).forEach(function(i){var r,a,s,l;if(!(!lt(i,t.draggable,e,!1)||i.animated||i===o)){var u=M(i);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,u.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,u.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,u.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var J="Sortable"+new Date().getTime();function si(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(g(i,"display")==="none"||i===m.ghost)){e.push({target:i,rect:M(i)});var r=pt({},e[e.length-1].rect);if(i.thisAnimationDuration){var a=Pt(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(ii(e,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var r=!1,a=0;e.forEach(function(s){var l=0,u=s.target,p=u.fromRect,h=M(u),v=u.prevFromRect,x=u.prevToRect,y=s.rect,w=Pt(u,!0);w&&(h.top-=w.f,h.left-=w.e),u.toRect=h,u.thisAnimationDuration&&$e(v,h)&&!$e(p,h)&&(y.top-h.top)/(y.left-h.left)===(p.top-h.top)/(p.left-h.left)&&(l=ui(y,v,x,i.options)),$e(h,p)||(u.prevFromRect=p,u.prevToRect=h,l||(l=i.options.animation),i.animate(u,y,h,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),e=[]},animate:function(n,i,r,a){if(a){g(n,"transition",""),g(n,"transform","");var s=Pt(this.el),l=s&&s.a,u=s&&s.d,p=(i.left-r.left)/(l||1),h=(i.top-r.top)/(u||1);n.animatingX=!!p,n.animatingY=!!h,g(n,"transform","translate3d("+p+"px,"+h+"px,0)"),this.forRepaintDummy=li(n),g(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),g(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){g(n,"transition",""),g(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function li(e){return e.offsetWidth}function ui(e,t,o,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*n.animation}var Dt=[],Ae={initializeByDefault:!0},Gt={mount:function(t){for(var o in Ae)Ae.hasOwnProperty(o)&&!(o in t)&&(t[o]=Ae[o]);Dt.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Dt.push(t)},pluginEvent:function(t,o,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var r=t+"Global";Dt.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][r]&&o[a.pluginName][r](pt({sortable:o},n)),o.options[a.pluginName]&&o[a.pluginName][t]&&o[a.pluginName][t](pt({sortable:o},n)))})},initializePlugins:function(t,o,n,i){Dt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,o,t.options);u.sortable=t,u.options=t.options,t[l]=u,vt(n,u.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,o){var n={};return Dt.forEach(function(i){typeof i.eventProperties=="function"&&vt(n,i.eventProperties.call(o[i.pluginName],t))}),n},modifyOption:function(t,o,n){var i;return Dt.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[o]=="function"&&(i=r.optionListeners[o].call(t[r.pluginName],n))}),i}};function ci(e){var t=e.sortable,o=e.rootEl,n=e.name,i=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,p=e.oldDraggableIndex,h=e.newDraggableIndex,v=e.originalEvent,x=e.putSortable,y=e.extraEventProperties;if(t=t||o&&o[J],!!t){var w,B=t.options,it="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!bt&&!Wt?w=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(n,!0,!0)),w.to=a||o,w.from=s||o,w.item=i||o,w.clone=r,w.oldIndex=l,w.newIndex=u,w.oldDraggableIndex=p,w.newDraggableIndex=h,w.originalEvent=v,w.pullMode=x?x.lastPutMode:void 0;var P=pt(pt({},y),Gt.getEventProperties(n,t));for(var K in P)w[K]=P[K];o&&o.dispatchEvent(w),B[it]&&B[it].call(t,w)}}var di=["evt"],W=function(t,o){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,r=Qn(n,di);Gt.pluginEvent.bind(m)(t,o,pt({dragEl:c,parentEl:R,ghostEl:S,rootEl:_,nextEl:Tt,lastDownEl:le,cloneEl:V,cloneHidden:xt,dragStarted:Nt,putSortable:U,activeSortable:m.active,originalEvent:i,oldIndex:Ot,oldDraggableIndex:jt,newIndex:et,newDraggableIndex:St,hideGhostForTarget:Io,unhideGhostForTarget:Oo,cloneNowHidden:function(){xt=!0},cloneNowShown:function(){xt=!1},dispatchSortableEvent:function(s){z({sortable:o,name:s,originalEvent:i})}},r))};function z(e){ci(pt({putSortable:U,cloneEl:V,targetEl:c,rootEl:_,oldIndex:Ot,oldDraggableIndex:jt,newIndex:et,newDraggableIndex:St},e))}var c,R,S,_,Tt,le,V,xt,Ot,et,jt,St,oe,U,Rt=!1,fe=!1,ye=[],At,st,Ce,Te,io,ro,Nt,Vt,Zt,Xt=!1,ne=!1,ue,j,Le=[],He=!1,ge=[],be=typeof document<"u",ie=je,ao=Wt||bt?"cssFloat":"float",hi=be&&!xo&&!je&&"draggable"in document.createElement("div"),Do=(function(){if(be){if(bt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),Vo=function(t,o){var n=g(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=Ht(t,0,o),a=Ht(t,1,o),s=r&&g(r),l=a&&g(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+M(r).width,p=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+M(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var h=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===h)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=i&&n[ao]==="none"||a&&n[ao]==="none"&&u+p>i)?"vertical":"horizontal"},pi=function(t,o,n){var i=n?t.left:t.top,r=n?t.right:t.bottom,a=n?t.width:t.height,s=n?o.left:o.top,l=n?o.right:o.bottom,u=n?o.width:o.height;return i===s||r===l||i+a/2===s+u/2},fi=function(t,o){var n;return ye.some(function(i){var r=i[J].options.emptyInsertThreshold;if(!(!r||Ze(i))){var a=M(i),s=t>=a.left-r&&t<=a.right+r,l=o>=a.top-r&&o<=a.bottom+r;if(s&&l)return n=i}}),n},Ro=function(t){function o(r,a){return function(s,l,u,p){var h=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||h))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return o(r(s,l,u,p),a)(s,l,u,p);var v=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===v||r.join&&r.indexOf(v)>-1}}var n={},i=t.group;(!i||Pe(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=o(i.pull,!0),n.checkPut=o(i.put),n.revertClone=i.revertClone,t.group=n},Io=function(){!Do&&S&&g(S,"display","none")},Oo=function(){!Do&&S&&g(S,"display","")};be&&!xo&&document.addEventListener("click",function(e){if(fe)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),fe=!1,!1},!0);var Ct=function(t){if(c){t=t.touches?t.touches[0]:t;var o=fi(t.clientX,t.clientY);if(o){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.target=n.rootEl=o,n.preventDefault=void 0,n.stopPropagation=void 0,o[J]._onDragOver(n)}}},yi=function(t){c&&c.parentNode[J]._isOutsideThisEl(t.target)};function m(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=vt({},t),e[J]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Vo(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:m.supportPointer!==!1&&"PointerEvent"in window&&(!Ft||je),emptyInsertThreshold:5};Gt.initializePlugins(this,e,o);for(var n in o)!(n in t)&&(t[n]=o[n]);Ro(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:hi,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?A(e,"pointerdown",this._onTapStart):(A(e,"mousedown",this._onTapStart),A(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(A(e,"dragover",this),A(e,"dragenter",this)),ye.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),vt(this,si())}m.prototype={constructor:m,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Vt=null)},_getDirection:function(t,o){return typeof this.options.direction=="function"?this.options.direction.call(this,t,o,c):this.options.direction},_onTapStart:function(t){if(t.cancelable){var o=this,n=this.el,i=this.options,r=i.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,p=i.filter;if(Ei(n),!c&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||i.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Ft&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=lt(l,i.draggable,n,!1),!(l&&l.animated)&&le!==l)){if(Ot=nt(l),jt=nt(l,i.draggable),typeof p=="function"){if(p.call(this,t,l,this)){z({sortable:o,rootEl:u,name:"filter",targetEl:l,toEl:n,fromEl:n}),W("filter",o,{evt:t}),r&&t.preventDefault();return}}else if(p&&(p=p.split(",").some(function(h){if(h=lt(u,h.trim(),n,!1),h)return z({sortable:o,rootEl:h,name:"filter",targetEl:l,fromEl:n,toEl:n}),W("filter",o,{evt:t}),!0}),p)){r&&t.preventDefault();return}i.handle&&!lt(u,i.handle,n,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,o,n){var i=this,r=i.el,a=i.options,s=r.ownerDocument,l;if(n&&!c&&n.parentNode===r){var u=M(n);if(_=r,c=n,R=c.parentNode,Tt=c.nextSibling,le=n,oe=a.group,m.dragged=c,At={target:c,clientX:(o||t).clientX,clientY:(o||t).clientY},io=At.clientX-u.left,ro=At.clientY-u.top,this._lastX=(o||t).clientX,this._lastY=(o||t).clientY,c.style["will-change"]="all",l=function(){if(W("delayEnded",i,{evt:t}),m.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!to&&i.nativeDraggable&&(c.draggable=!0),i._triggerDragStart(t,o),z({sortable:i,name:"choose",originalEvent:t}),tt(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(p){Ao(c,p.trim(),_e)}),A(s,"dragover",Ct),A(s,"mousemove",Ct),A(s,"touchmove",Ct),a.supportPointer?(A(s,"pointerup",i._onDrop),!this.nativeDraggable&&A(s,"pointercancel",i._onDrop)):(A(s,"mouseup",i._onDrop),A(s,"touchend",i._onDrop),A(s,"touchcancel",i._onDrop)),to&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),W("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(Wt||bt))){if(m.eventCanceled){this._onDrop();return}a.supportPointer?(A(s,"pointerup",i._disableDelayedDrag),A(s,"pointercancel",i._disableDelayedDrag)):(A(s,"mouseup",i._disableDelayedDrag),A(s,"touchend",i._disableDelayedDrag),A(s,"touchcancel",i._disableDelayedDrag)),A(s,"mousemove",i._delayedDragTouchMoveHandler),A(s,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&A(s,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var o=t.touches?t.touches[0]:t;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&_e(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,o){o=o||t.pointerType=="touch"&&t,!this.nativeDraggable||o?this.options.supportPointer?A(document,"pointermove",this._onTouchMove):o?A(document,"touchmove",this._onTouchMove):A(document,"mousemove",this._onTouchMove):(A(c,"dragend",this),A(_,"dragstart",this._onDragStart));try{document.selection?ce(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,o){if(Rt=!1,_&&c){W("dragStarted",this,{evt:o}),this.nativeDraggable&&A(document,"dragover",yi);var n=this.options;!t&&tt(c,n.dragClass,!1),tt(c,n.ghostClass,!0),m.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(st){this._lastX=st.clientX,this._lastY=st.clientY,Io();for(var t=document.elementFromPoint(st.clientX,st.clientY),o=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(st.clientX,st.clientY),t!==o);)o=t;if(c.parentNode[J]._isOutsideThisEl(t),o)do{if(o[J]){var n=void 0;if(n=o[J]._onDragOver({clientX:st.clientX,clientY:st.clientY,target:t,rootEl:o}),n&&!this.options.dragoverBubble)break}t=o}while(o=$o(o));Oo()}},_onTouchMove:function(t){if(At){var o=this.options,n=o.fallbackTolerance,i=o.fallbackOffset,r=t.touches?t.touches[0]:t,a=S&&Pt(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,u=ie&&j&&no(j),p=(r.clientX-At.clientX+i.x)/(s||1)+(u?u[0]-Le[0]:0)/(s||1),h=(r.clientY-At.clientY+i.y)/(l||1)+(u?u[1]-Le[1]:0)/(l||1);if(!m.active&&!Rt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(S){a?(a.e+=p-(Ce||0),a.f+=h-(Te||0)):a={a:1,b:0,c:0,d:1,e:p,f:h};var v="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");g(S,"webkitTransform",v),g(S,"mozTransform",v),g(S,"msTransform",v),g(S,"transform",v),Ce=p,Te=h,st=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:_,o=M(c,!0,ie,!0,t),n=this.options;if(ie){for(j=t;g(j,"position")==="static"&&g(j,"transform")==="none"&&j!==document;)j=j.parentNode;j!==document.body&&j!==document.documentElement?(j===document&&(j=ht()),o.top+=j.scrollTop,o.left+=j.scrollLeft):j=ht(),Le=no(j)}S=c.cloneNode(!0),tt(S,n.ghostClass,!1),tt(S,n.fallbackClass,!0),tt(S,n.dragClass,!0),g(S,"transition",""),g(S,"transform",""),g(S,"box-sizing","border-box"),g(S,"margin",0),g(S,"top",o.top),g(S,"left",o.left),g(S,"width",o.width),g(S,"height",o.height),g(S,"opacity","0.8"),g(S,"position",ie?"absolute":"fixed"),g(S,"zIndex","100000"),g(S,"pointerEvents","none"),m.ghost=S,t.appendChild(S),g(S,"transform-origin",io/parseInt(S.style.width)*100+"% "+ro/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,o){var n=this,i=t.dataTransfer,r=n.options;if(W("dragStart",this,{evt:t}),m.eventCanceled){this._onDrop();return}W("setupClone",this),m.eventCanceled||(V=Lo(c),V.removeAttribute("id"),V.draggable=!1,V.style["will-change"]="",this._hideClone(),tt(V,this.options.chosenClass,!1),m.clone=V),n.cloneId=ce(function(){W("clone",n),!m.eventCanceled&&(n.options.removeCloneOnHide||_.insertBefore(V,c),n._hideClone(),z({sortable:n,name:"clone"}))}),!o&&tt(c,r.dragClass,!0),o?(fe=!0,n._loopId=setInterval(n._emulateDragOver,50)):($(document,"mouseup",n._onDrop),$(document,"touchend",n._onDrop),$(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(n,i,c)),A(document,"drop",n),g(c,"transform","translateZ(0)")),Rt=!0,n._dragStartId=ce(n._dragStarted.bind(n,o,t)),A(document,"selectstart",n),Nt=!0,window.getSelection().removeAllRanges(),Ft&&g(document.body,"user-select","none")},_onDragOver:function(t){var o=this.el,n=t.target,i,r,a,s=this.options,l=s.group,u=m.active,p=oe===l,h=s.sort,v=U||u,x,y=this,w=!1;if(He)return;function B(ft,Mt){W(ft,y,pt({evt:t,isOwner:p,axis:x?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:h,fromSortable:v,target:n,completed:P,onMove:function(Jt,Kt){return re(_,o,c,i,Jt,M(Jt),t,Kt)},changed:K},Mt))}function it(){B("dragOverAnimationCapture"),y.captureAnimationState(),y!==v&&v.captureAnimationState()}function P(ft){return B("dragOverCompleted",{insertion:ft}),ft&&(p?u._hideClone():u._showClone(y),y!==v&&(tt(c,U?U.options.ghostClass:u.options.ghostClass,!1),tt(c,s.ghostClass,!0)),U!==y&&y!==m.active?U=y:y===m.active&&U&&(U=null),v===y&&(y._ignoreWhileAnimating=n),y.animateAll(function(){B("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==v&&(v.animateAll(),v._ignoreWhileAnimating=null)),(n===c&&!c.animated||n===o&&!n.animated)&&(Vt=null),!s.dragoverBubble&&!t.rootEl&&n!==document&&(c.parentNode[J]._isOutsideThisEl(t.target),!ft&&Ct(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function K(){et=nt(c),St=nt(c,s.draggable),z({sortable:y,name:"change",toEl:o,newIndex:et,newDraggableIndex:St,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=lt(n,s.draggable,o,!0),B("dragOver"),m.eventCanceled)return w;if(c.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||y._ignoreWhileAnimating===n)return P(!1);if(fe=!1,u&&!s.disabled&&(p?h||(a=R!==_):U===this||(this.lastPutMode=oe.checkPull(this,u,c,t))&&l.checkPut(this,u,c,t))){if(x=this._getDirection(t,n)==="vertical",i=M(c),B("dragOverValid"),m.eventCanceled)return w;if(a)return R=_,it(),this._hideClone(),B("revert"),m.eventCanceled||(Tt?_.insertBefore(c,Tt):_.appendChild(c)),P(!0);var Z=Ze(o,s.draggable);if(!Z||bi(t,x,this)&&!Z.animated){if(Z===c)return P(!1);if(Z&&o===t.target&&(n=Z),n&&(r=M(n)),re(_,o,c,i,n,r,t,!!n)!==!1)return it(),Z&&Z.nextSibling?o.insertBefore(c,Z.nextSibling):o.appendChild(c),R=o,K(),P(!0)}else if(Z&&vi(t,x,this)){var ct=Ht(o,0,s,!0);if(ct===c)return P(!1);if(n=ct,r=M(n),re(_,o,c,i,n,r,t,!1)!==!1)return it(),o.insertBefore(c,ct),R=o,K(),P(!0)}else if(n.parentNode===o){r=M(n);var b=0,T,I=c.parentNode!==o,L=!pi(c.animated&&c.toRect||i,n.animated&&n.toRect||r,x),X=x?"top":"left",Q=oo(n,"top","top")||oo(c,"top","top"),ot=Q?Q.scrollTop:void 0;Vt!==n&&(T=r[X],Xt=!1,ne=!L&&s.invertSwap||I),b=wi(t,n,r,x,L?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,ne,Vt===n);var O;if(b!==0){var Y=nt(c);do Y-=b,O=R.children[Y];while(O&&(g(O,"display")==="none"||O===S))}if(b===0||O===n)return P(!1);Vt=n,Zt=b;var rt=n.nextElementSibling,at=!1;at=b===1;var dt=re(_,o,c,i,n,r,t,at);if(dt!==!1)return(dt===1||dt===-1)&&(at=dt===1),He=!0,setTimeout(mi,30),it(),at&&!rt?o.appendChild(c):n.parentNode.insertBefore(c,at?rt:n),Q&&To(Q,0,ot-Q.scrollTop),R=c.parentNode,T!==void 0&&!ne&&(ue=Math.abs(T-M(n)[X])),K(),P(!0)}if(o.contains(c))return P(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Ct),$(document,"mousemove",Ct),$(document,"touchmove",Ct)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var o=this.el,n=this.options;if(et=nt(c),St=nt(c,n.draggable),W("drop",this,{evt:t}),R=c&&c.parentNode,et=nt(c),St=nt(c,n.draggable),m.eventCanceled){this._nulling();return}Rt=!1,ne=!1,Xt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Me(this.cloneId),Me(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ft&&g(document.body,"user-select",""),g(c,"transform",""),t&&(Nt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(_===R||U&&U.lastPutMode!=="clone")&&V&&V.parentNode&&V.parentNode.removeChild(V),c&&(this.nativeDraggable&&$(c,"dragend",this),_e(c),c.style["will-change"]="",Nt&&!Rt&&tt(c,U?U.options.ghostClass:this.options.ghostClass,!1),tt(c,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:R,newIndex:null,newDraggableIndex:null,originalEvent:t}),_!==R?(et>=0&&(z({rootEl:R,name:"add",toEl:R,fromEl:_,originalEvent:t}),z({sortable:this,name:"remove",toEl:R,originalEvent:t}),z({rootEl:R,name:"sort",toEl:R,fromEl:_,originalEvent:t}),z({sortable:this,name:"sort",toEl:R,originalEvent:t})),U&&U.save()):et!==Ot&&et>=0&&(z({sortable:this,name:"update",toEl:R,originalEvent:t}),z({sortable:this,name:"sort",toEl:R,originalEvent:t})),m.active&&((et==null||et===-1)&&(et=Ot,St=jt),z({sortable:this,name:"end",toEl:R,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){W("nulling",this),_=c=R=S=Tt=V=le=xt=At=st=Nt=et=St=Ot=jt=Vt=Zt=U=oe=m.dragged=m.ghost=m.clone=m.active=null;var t=this.el;ge.forEach(function(o){t.contains(o)&&(o.checked=!0)}),ge.length=Ce=Te=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":c&&(this._onDragOver(t),gi(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],o,n=this.el.children,i=0,r=n.length,a=this.options;i<r;i++)o=n[i],lt(o,a.draggable,this.el,!1)&&t.push(o.getAttribute(a.dataIdAttr)||xi(o));return t},sort:function(t,o){var n={},i=this.el;this.toArray().forEach(function(r,a){var s=i.children[a];lt(s,this.options.draggable,i,!1)&&(n[r]=s)},this),o&&this.captureAnimationState(),t.forEach(function(r){n[r]&&(i.removeChild(n[r]),i.appendChild(n[r]))}),o&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,o){return lt(t,o||this.options.draggable,this.el,!1)},option:function(t,o){var n=this.options;if(o===void 0)return n[t];var i=Gt.modifyOption(this,t,o);typeof i<"u"?n[t]=i:n[t]=o,t==="group"&&Ro(n)},destroy:function(){W("destroy",this);var t=this.el;t[J]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ye.splice(ye.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!xt){if(W("hideClone",this),m.eventCanceled)return;g(V,"display","none"),this.options.removeCloneOnHide&&V.parentNode&&V.parentNode.removeChild(V),xt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(xt){if(W("showClone",this),m.eventCanceled)return;c.parentNode==_&&!this.options.group.revertClone?_.insertBefore(V,c):Tt?_.insertBefore(V,Tt):_.appendChild(V),this.options.group.revertClone&&this.animate(c,V),g(V,"display",""),xt=!1}}};function gi(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function re(e,t,o,n,i,r,a,s){var l,u=e[J],p=u.options.onMove,h;return window.CustomEvent&&!bt&&!Wt?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=o,l.draggedRect=n,l.related=i||t,l.relatedRect=r||M(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),p&&(h=p.call(u,l,a)),h}function _e(e){e.draggable=!1}function mi(){He=!1}function vi(e,t,o){var n=M(Ht(o.el,0,o.options,!0)),i=_o(o.el,o.options,S),r=10;return t?e.clientX<i.left-r||e.clientY<n.top&&e.clientX<n.right:e.clientY<i.top-r||e.clientY<n.bottom&&e.clientX<n.left}function bi(e,t,o){var n=M(Ze(o.el,o.options.draggable)),i=_o(o.el,o.options,S),r=10;return t?e.clientX>i.right+r||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>i.bottom+r||e.clientX>n.right&&e.clientY>n.top}function wi(e,t,o,n,i,r,a,s){var l=n?e.clientY:e.clientX,u=n?o.height:o.width,p=n?o.top:o.left,h=n?o.bottom:o.right,v=!1;if(!a){if(s&&ue<u*i){if(!Xt&&(Zt===1?l>p+u*r/2:l<h-u*r/2)&&(Xt=!0),Xt)v=!0;else if(Zt===1?l<p+ue:l>h-ue)return-Zt}else if(l>p+u*(1-i)/2&&l<h-u*(1-i)/2)return Si(t)}return v=v||a,v&&(l<p+u*r/2||l>h-u*r/2)?l>p+u/2?1:-1:0}function Si(e){return nt(c)<nt(e)?1:-1}function xi(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,n=0;o--;)n+=t.charCodeAt(o);return n.toString(36)}function Ei(e){ge.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var n=t[o];n.checked&&ge.push(n)}}function ce(e){return setTimeout(e,0)}function Me(e){return clearTimeout(e)}be&&A(document,"touchmove",function(e){(m.active||Rt)&&e.cancelable&&e.preventDefault()});m.utils={on:A,off:$,css:g,find:Ao,is:function(t,o){return!!lt(t,o,t,!1)},extend:ri,throttle:Co,closest:lt,toggleClass:tt,clone:Lo,index:nt,nextTick:ce,cancelNextTick:Me,detectDirection:Vo,getChild:Ht,expando:J};m.get=function(e){return e[J]};m.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(m.utils=pt(pt({},m.utils),n.utils)),Gt.mount(n)})};m.create=function(e,t){return new m(e,t)};m.version=ni;var H=[],kt,Be,Ne=!1,De,Ve,me,Ut;function $i(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(o){var n=o.originalEvent;this.sortable.nativeDraggable?A(document,"dragover",this._handleAutoScroll):this.options.supportPointer?A(document,"pointermove",this._handleFallbackAutoScroll):n.touches?A(document,"touchmove",this._handleFallbackAutoScroll):A(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var n=o.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),so(),de(),ai()},nulling:function(){me=Be=kt=Ne=Ut=De=Ve=null,H.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,n){var i=this,r=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(r,a);if(me=o,n||this.options.forceAutoScrollFallback||Wt||bt||Ft){Re(o,this.options,s,n);var l=Et(s,!0);Ne&&(!Ut||r!==De||a!==Ve)&&(Ut&&so(),Ut=setInterval(function(){var u=Et(document.elementFromPoint(r,a),!0);u!==l&&(l=u,de()),Re(o,i.options,u,n)},10),De=r,Ve=a)}else{if(!this.options.bubbleScroll||Et(s,!0)===ht()){de();return}Re(o,this.options,Et(s,!1),!1)}}},vt(e,{pluginName:"scroll",initializeByDefault:!0})}function de(){H.forEach(function(e){clearInterval(e.pid)}),H=[]}function so(){clearInterval(Ut)}var Re=Co(function(e,t,o,n){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=ht(),u=!1,p;Be!==o&&(Be=o,de(),kt=t.scroll,p=t.scrollFn,kt===!0&&(kt=Et(o,!0)));var h=0,v=kt;do{var x=v,y=M(x),w=y.top,B=y.bottom,it=y.left,P=y.right,K=y.width,Z=y.height,ct=void 0,b=void 0,T=x.scrollWidth,I=x.scrollHeight,L=g(x),X=x.scrollLeft,Q=x.scrollTop;x===l?(ct=K<T&&(L.overflowX==="auto"||L.overflowX==="scroll"||L.overflowX==="visible"),b=Z<I&&(L.overflowY==="auto"||L.overflowY==="scroll"||L.overflowY==="visible")):(ct=K<T&&(L.overflowX==="auto"||L.overflowX==="scroll"),b=Z<I&&(L.overflowY==="auto"||L.overflowY==="scroll"));var ot=ct&&(Math.abs(P-i)<=a&&X+K<T)-(Math.abs(it-i)<=a&&!!X),O=b&&(Math.abs(B-r)<=a&&Q+Z<I)-(Math.abs(w-r)<=a&&!!Q);if(!H[h])for(var Y=0;Y<=h;Y++)H[Y]||(H[Y]={});(H[h].vx!=ot||H[h].vy!=O||H[h].el!==x)&&(H[h].el=x,H[h].vx=ot,H[h].vy=O,clearInterval(H[h].pid),(ot!=0||O!=0)&&(u=!0,H[h].pid=setInterval((function(){n&&this.layer===0&&m.active._onTouchMove(me);var rt=H[this.layer].vy?H[this.layer].vy*s:0,at=H[this.layer].vx?H[this.layer].vx*s:0;typeof p=="function"&&p.call(m.dragged.parentNode[J],at,rt,e,me,H[this.layer].el)!=="continue"||To(H[this.layer].el,at,rt)}).bind({layer:h}),24))),h++}while(t.bubbleScroll&&v!==l&&(v=Et(v,!1)));Ne=u}},30),Po=function(t){var o=t.originalEvent,n=t.putSortable,i=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(o){var u=n||r;s();var p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,h=document.elementFromPoint(p.clientX,p.clientY);l(),u&&!u.el.contains(h)&&(a("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function Xe(){}Xe.prototype={startIndex:null,dragStart:function(t){var o=t.oldDraggableIndex;this.startIndex=o},onSpill:function(t){var o=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=Ht(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(o,i):this.sortable.el.appendChild(o),this.sortable.animateAll(),n&&n.animateAll()},drop:Po};vt(Xe,{pluginName:"revertOnSpill"});function Ye(){}Ye.prototype={onSpill:function(t){var o=t.dragEl,n=t.putSortable,i=n||this.sortable;i.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),i.animateAll()},drop:Po};vt(Ye,{pluginName:"removeOnSpill"});m.mount(new $i);m.mount(Ye,Xe);const Ai=e=>{const t=e.item;let o=Array.prototype.slice.call(t.parentNode.childNodes);return o=o.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),o},Ci=(e,t,o,n,i,r)=>{const s=e.item.parentNode;for(const w of o)s.appendChild(w);if(e.oldIndex==e.newIndex)return;const l=n.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(i),p=l.find(w=>w.get(i)===u),h=r.dataset.layer,v=l.find(w=>w.get(i)==h);let x,y;for(x=0;x<l.length;x++)if(l[x]==p){n.removeAt(x);break}for(y=0;y<l.length;y++)if(l[y]===v){x>y?n.insertAt(y,p):n.insertAt(y+1,p);break}t.requestUpdate()};function Ti(e,t,o,n){let i=[],r=null;e._sortable=m.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),i=Ai(a)},onMove:a=>{r=a.related},onEnd:a=>Ci(a,n,i,t,o,r)})}function Li(e,t,o,n){const i=e.getArray();let r=!1;i.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(o)||(a.set(o,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function ze(e,t,o){let n=[];const i=(r,a,s)=>{n=[...n,...r.filter(u=>u.get(a)===s)];const l=r.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>i(u.getLayers().getArray(),a,s)),n};return i(e,t,o),n}function _i(e,t,o){if(!e||!t)return!1;if(!Ho(e,o))return!0;const n=e.get("minZoom"),i=e.get("maxZoom"),r=t.getView().getZoom();return r>n&&r<i}function Ho(e,t){const o=e.get("minZoom"),n=e.get("maxZoom");return!!(t&&(o!==-1/0||n!==1/0))}function lo(e,t){return!e||!t?void 0:e.getLayers?"group":t.getInteractions().getArray().filter(i=>i.freehand_!==void 0).map(i=>i.source_)?.ol_uid?.includes(e.getSource?e.getSource()?.ol_uid:void 0)?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Di=(e,t,o)=>{let n=t;o.layer.getSource().getTileUrlFunction()&&(n||(n=o.layer.getSource().getTileUrlFunction()),o.layer.getSource().setTileUrlFunction((...r)=>{const a=new URL(n(...r)),s=o.layerConfig.schema?.options?.removeProperties??[];return o.layer.getSource()instanceof Qo&&(o.layer.getSource()._updatedUrl=Ee(o.layer.getSource().getUrls()[0],e)),s.forEach(l=>a.searchParams.delete(l)),Ee(a.href,e)}),o.layer.getSource().setKey(new Date));const i=document.querySelector("eox-map");if(i){const r=i.globe;if(r){const a=r.planet.layers.filter(s=>s.name==o.layer.get("id"))[0];a.setUrl(Ee(a.url,e)),window.eoxMapGlobe.refresh()}}return n};function Vi(e,t,o){const n="updateStyleVariables"in t,i="setStyle"in t,r=n?t.style_:o.style;let a=r?.variables;if(a){const s=We(e);if(r.variables={...a,...s},n)t.updateStyleVariables(s);else if(i){const l=Ri(r);t.setStyle(l)}}}const We=e=>{const t={};for(const o in e)if(typeof e[o]=="object"&&e[o]!==null){const n=We(e[o]);for(const i in n)t[i]=n?.[i]}else t[o]=e?.[o];return t};function Ri(e){let t=e;if("variables"in e){let o=JSON.stringify(e);const{variables:n}=e;for(const i in n)typeof n[i]=="number"?o=o.replaceAll(`["var","${i}"]`,String(n[i])):o=o.replaceAll(`["var","${i}"]`,`"${n[i]}"`);t=JSON.parse(o)}return t}const Ii=(e,t)=>{if(!e)return;const o=We(t);let n,i;return Array.isArray(e)?i=structuredClone(e):i=[structuredClone(e)],n=i.filter(r=>{if(!("boundTo"in r))return!0;const a=r.boundTo.key,s=r.boundTo.value;return a in o&&o[a]==s}),n.length||(n=null),n?.map(r=>(delete r.boundTo,!("domainProperties"in r)||"domain"in r?r:Object.keys(r)?.reduce((a,s)=>(s==="domainProperties"?a.domain=r[s].map(l=>o[l]):a[s]=r[s],a),{})))};function Mo(e,t){let o={};for(const n in e){const i=e[n].type;if(i&&i!=="object"&&t[n]!==void 0)o[n]=i==="number"?Number(t[n]):t[n];else if(typeof e[n]=="object"&&e[n]?.properties){const r=Mo(e[n].properties,t);Object.keys(r).length>0&&(o[n]=r)}}return o}function Oi(e,t){if(!t)return null;let o={},n="updateStyleVariables"in e?e.style_?.variables:t.style?.variables;if((t.type==="style"||t.style)&&n)o=n;else if(e.getSource()?.getTileUrlFunction?.()){const r=new URL(e.getSource().getTileUrlFunction()([0,0,0]));o={};for(const[a,s]of r.searchParams.entries()){const l=r.searchParams.getAll(a);o[a]=l.length>1?l:s}}else return null;const i=Mo(t.schema?.properties||t.schema,o);return Object.keys(i).length?i:null}const Bo=(e,t)=>e?.filter(o=>["remove","sort"].filter(n=>t?.get("layerControlDisable")?n!=="sort":!0).includes(o)),No=(e,t)=>e?.filter(o=>{let n=!0;return["remove","sort"].includes(o)&&(n=!1),o==="info"&&(n=t.get("description")),o==="config"&&(n=t.get("layerConfig")),o==="datetime"&&(n=t.get("layerDatetime")),o==="legend"&&(n=t.get("layerLegend")),n}),Pi=(e,t,o)=>d`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${o?e:d`<i class="small primary-text">${t}</i>`}
  </button>
`,ko=(e,t)=>d`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:o}=e;o?.set("layerControlOptional",!0),o?.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:o,bubbles:!0}))}}
  >
    ${e.unstyled?"x":d`<i class="small red-text">${t}</i>`}
  </button>
`,Uo=(e,t,o)=>d`
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
    </svg>`}}const Fo=e=>{const t=["layerControlHide","layerControlOptional"];return e?.getArray()?.filter(o=>t.every(n=>!o.get(n)))};function qo(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}const ke=zo(class extends Wo{constructor(e){if(super(e),e.type!==_t.PROPERTY&&e.type!==_t.ATTRIBUTE&&e.type!==_t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Go(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===te||t===$t)return t;const o=e.element,n=e.name;if(e.type===_t.PROPERTY){if(t===o[n])return te}else if(e.type===_t.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return te}else if(e.type===_t.ATTRIBUTE&&o.getAttribute(n)===t+"")return te;return Jo(e),t}});var Ie,uo;function Hi(){if(uo)return Ie;uo=1;var e="Expected a function",t=NaN,o="[object Symbol]",n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l=typeof ee=="object"&&ee&&ee.Object===Object&&ee,u=typeof self=="object"&&self&&self.Object===Object&&self,p=l||u||Function("return this")(),h=Object.prototype,v=h.toString,x=Math.max,y=Math.min,w=function(){return p.Date.now()};function B(b,T,I){var L,X,Q,ot,O,Y,rt=0,at=!1,dt=!1,ft=!0;if(typeof b!="function")throw new TypeError(e);T=ct(T)||0,P(I)&&(at=!!I.leading,dt="maxWait"in I,Q=dt?x(ct(I.maxWait)||0,T):Q,ft="trailing"in I?!!I.trailing:ft);function Mt(N){var wt=L,Bt=X;return L=X=void 0,rt=N,ot=b.apply(Bt,wt),ot}function Ge(N){return rt=N,O=setTimeout(Qt,T),at?Mt(N):ot}function Jt(N){var wt=N-Y,Bt=N-rt,Ke=T-wt;return dt?y(Ke,Q-Bt):Ke}function Kt(N){var wt=N-Y,Bt=N-rt;return Y===void 0||wt>=T||wt<0||dt&&Bt>=Q}function Qt(){var N=w();if(Kt(N))return Je(N);O=setTimeout(Qt,Jt(N))}function Je(N){return O=void 0,ft&&L?Mt(N):(L=X=void 0,ot)}function jo(){O!==void 0&&clearTimeout(O),rt=0,L=Y=X=O=void 0}function Zo(){return O===void 0?ot:Je(w())}function we(){var N=w(),wt=Kt(N);if(L=arguments,X=this,Y=N,wt){if(O===void 0)return Ge(Y);if(dt)return O=setTimeout(Qt,T),Mt(Y)}return O===void 0&&(O=setTimeout(Qt,T)),ot}return we.cancel=jo,we.flush=Zo,we}function it(b,T,I){var L=!0,X=!0;if(typeof b!="function")throw new TypeError(e);return P(I)&&(L="leading"in I?!!I.leading:L,X="trailing"in I?!!I.trailing:X),B(b,T,{leading:L,maxWait:T,trailing:X})}function P(b){var T=typeof b;return!!b&&(T=="object"||T=="function")}function K(b){return!!b&&typeof b=="object"}function Z(b){return typeof b=="symbol"||K(b)&&v.call(b)==o}function ct(b){if(typeof b=="number")return b;if(Z(b))return t;if(P(b)){var T=typeof b.valueOf=="function"?b.valueOf():b;b=P(T)?T+"":T}if(typeof b!="string")return b===0?b:+b;b=b.replace(n,"");var I=r.test(b);return I||a.test(b)?s(b.slice(2),I?2:8):i.test(b)?t:+b}return Ie=it,Ie}var Mi=Hi();const co=tn(Mi);const ae=e=>e??$t;class Bi extends ut{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layer=null}#t=[];get layerLegend(){return this.#t?this.#t.length>1?this.#t:this.#t[0]:null}set layerLegend(t){t?Array.isArray(t)?this.#t=t.map((o,n)=>({id:(this.layer?.get("id")??"")+n,...o})):this.#t=[{id:(this.layer?.get("id")??"")+0,...t}]:this.#t=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{this.#t=this.#t?.map(t=>(this.offsetWidth!==t.width&&(t.width=this.offsetWidth),{...t})),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      ${D(this.layerLegend,()=>d`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${this.#t.map((t,o,n)=>d`
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
                ${o!==n.length-1?d`<div class="separator"></div>`:$t}
              `)}
          </div>
        `)}
    `}#e=Oe`
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
  `;#o=""}customElements.define("eox-layercontrol-layer-legend",Bi);class Ni extends ut{static properties={layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},customEditorInterfaces:{attribute:!1,type:Array}};#t={};#e=null;#o;constructor(){super(),this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=co(this.#n,1e3),this.customEditorInterfaces=[]}updated(t){if(t.has("layerConfig")){const o=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=co(this.#n,o),this.requestUpdate()}}#n(t){this.#t=t.detail,this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?Vi(this.#t,this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):this.#o=Di(this.#t,this.#o,this),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail,layer:this.layer}})),this.requestUpdate()}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){this.#e=Oi(this.layer,this.layerConfig),Object.keys(this.#t).length!==0&&(this.#e=this.#t),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const t={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return d`
      <style>
        ${this.#r}
        ${!this.unstyled&&this.#i}
      </style>
      ${D(this.layerConfig,()=>d`
          ${D(this.layerConfig.legend,()=>d`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Ii(this.layerConfig.legend,this.#t)}
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
    `}#r=Oe`
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
  `;#i=Oe`
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
  `}customElements.define("eox-layercontrol-layerconfig",Ni);class ki extends ut{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){const o=new Date(t.detail.date[0]),n=this.layerDatetime.controlValues?.some(r=>typeof r=="string"&&r.includes("T"));let i;n?i=o.toISOString():i=(a=>`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`)(o),i!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:i,layer:this.layer}})),this.layerDatetime.currentStep=i,this.requestUpdate())}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),d`
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
    `}#e="";#o=""}customElements.define("eox-layercontrol-layer-datetime",ki);class Ui extends ut{static properties={actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t=t=>(this.selectedTab===t||this.toolsAsList)&&"highlighted";render(){const t=this.tabs,o=this.actions,n=o.length+t.length>1;return d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${D(n,()=>d`
            <nav>
              ${D(!this.toolsAsList,()=>d`
                  <div>
                    <!-- Labels for tabs -->
                    ${se(t,(i,r)=>d`
                        <label
                          class=${this.#t(r)}
                          @click=${()=>this.selectedTab=r}
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
          ${se(t,(i,r)=>d`
              ${D(this.toolsAsList,()=>d`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${i}-icon`}>${i}</slot>
                    <span>${i}</span>
                  </label>
                `)}
              <div class="tab ${this.#t(r)}">
                <!-- Content slot for each tab -->
                <slot name=${`${i}-content`}>${i}</slot>
              </div>
              ${D(this.toolsAsList&&r<t.length-1,()=>d`<hr class="small" />`)}
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
    ${Ue}
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
  `}customElements.define("eox-layercontrol-tools-items",Ui);class Fi extends ut{static properties={layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{const t=this.parentElement||this.getRootNode()?.host;this.embedded=t?.tagName==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!this.layer?.getVisible():this.embedded===!1?!0:!!this.layer?.get("layerControlToolsExpand"))}),this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updated(t){this.toolsAutoExpand&&(t.has("toolsAutoExpand")||t.has("layer"))&&(this.open=!!this.layer?.getVisible())}#t(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail.jsonformValue,layer:t.detail.layer}}))}_removeButton=t=>ko(this,t);_sortButton=t=>Uo(this,t,this.unstyled);_button=(t,o)=>Pi(t,o,this.unstyled);_getDefaultTools=t=>d`
      <div slot="info-content">
        ${Ko(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${ke(this.layer?.getOpacity())}
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
    `;render(){const t=Bo(this.tools,this.layer),o=No(this.tools,this.layer),n=t?.length,i=o?.length;return d`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#o}
      </style>
      ${D(n+i>0,()=>d`
          ${D(!(n===1&&i===0),()=>d`
              <details
                class="tools"
                .open=${ke(this.open)}
                @toggle=${r=>{this.open=r.target.open}}
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
                  ${se(o,r=>this._button(r,Yt()[r]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(Yt())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}#e="";#o=`
    ${this.embedded?"":Ue}
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
  `}customElements.define("eox-layercontrol-layer-tools",Fi);const qi=e=>{const t=()=>{const o=_i(e.layer,e.map,e.showLayerZoomState);let n=!1;!o&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):o&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Ho(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},ji=(e,t)=>{const o=t.layer;if(o.setVisible(e.target.checked),t.toolsAutoExpand){const n=t.renderRoot.querySelector("eox-layercontrol-layer-tools");n&&(n.open=e.target.checked)}e.target.checked&&o.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(i=>{if(i.layer!==o&&i.layer?.get("layerControlExclusive")){if(i.layer.setVisible(!1),i.toolsAutoExpand){const r=i.renderRoot.querySelector("eox-layercontrol-layer-tools");r&&(r.open=!1)}i.requestUpdate()}}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:o})),t.requestUpdate()};class Zi extends ut{static properties={layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}};currLayerVisibilityBasedOnZoom=!0;constructor(){super(),this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}#t(t){return this.layer?.get(t)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){qi(this)}#e(t){ji(t,this)}render(){const t=this.layer.getVisible(),o=t?"visible":"",n=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",i=this.#t("layerControlDisable")?"disabled":"",r=this.#t("layerControlExclusive")?"radio":"checkbox",a=Bo(this.tools,this.layer)?.length>0,s=No(this.tools,this.layer)?.length>0,l=document.querySelector("eox-layercontrol-layer-tools");return l&&Object.assign(l,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),d`
      <style>
        ${this.#o}
        ${!this.unstyled&&this.#n}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${D(this.layer,()=>d`
          <!-- Render the layer -->
          <nav
            class="layer ${i} ${o} ${n} responsive tiny-space"
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
            ${D(!s&&a,()=>this.tools[0]==="remove"?ko(this,Yt()[this.tools[0]]):Uo(this,Yt()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${i} ${r} icon primary-text action visibility small"
            >
              <input
                type=${r}
                .checked=${ke(t)}
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
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}#o="";#n=`
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
  `}customElements.define("eox-layercontrol-layer",Zi);class Xi extends ut{static properties={group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=!!this.group?.get("layerControlExpand"),o=Fo(this.group.getLayers())?.length;return d`
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
  `}customElements.define("eox-layercontrol-layer-group",Xi);const Yi=e=>{const{layers:t,idProperty:o,titleProperty:n,renderRoot:i}=e,r=en(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&t?.un("change:length",a),t.on("change:length",a),t)){const s=i.querySelector("ul");Li(t,o,n,e),Ti(s,t,o,e)}};class zi extends ut{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){Yi(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.layers?Fo(this.layers).reverse():[];return d`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      <ul class="list no-space">
        ${D(this.layers,()=>d`
            ${Yo(t,o=>o,o=>d`
                <li
                  data-layer="${o.get(this.idProperty)}"
                  data-type="${lo(o,this.map)}"
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
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:d`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${o}
                            .layerType=${lo(o,this.map)}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
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
  `}customElements.define("eox-layercontrol-layer-list",zi);const Wi=e=>{const t=e.querySelector("select[name=optional]"),o=t?t.value:null,n=ze(e.layers.getArray(),"layerControlOptional",!0).find(i=>(i.get(e.idProperty)||i.ol_uid)===o);n?.set("layerControlOptional",!1),n?.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(i=>i.requestUpdate()),e.requestUpdate()};class Gi extends ut{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}};constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(){Wi(this)}render(){const t=ze(this.layers.getArray(),"layerControlOptional",!0);return d`
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
            ${t.map(o=>{const n=o.get(this.idProperty)||o.ol_uid,i=o.get(this.titleProperty),r=`layer ${o.get(this.idProperty)}`;return d` <option value="${n}">${i||r}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${this.#t}">Add</button>
      </nav>
    `}}customElements.define("eox-layercontrol-optional-list",Gi);const Ji=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},ho=e=>{const t=JSON.parse(`{"data":${So(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(o=>{e.eoxMap.addOrUpdateLayer(o)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},Ki=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function Qi(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(qe(t)==="XYZ")return{Name:t};try{const o=await Wn(t);e.wmsCapabilities=o}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const tr=(e,t)=>{const{Name:o}=e,n=qe(t.urlInput)||"XYZ",i={type:"Tile",properties:{id:o,title:o},source:{type:n,url:t.urlInput,params:{LAYERS:o}}};t.jsonInput=JSON.stringify(i)},er=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};class or extends ut{static properties={eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}};urlInput=null;jsonInput=null;open=null;searchLoad=!1;wmsCapabilities=null;constructor(){super(),this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){Ki(t,this)}async#e(){const t=await Qi(this);t&&this.#o(t)}#o(t){tr(t,this),ho(this)}#n(){ho(this)}#r(t){Ji(t,this)}#i(t){er(t,this)}render(){const t={add:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      </svg>`},o=this.open?"open":"close",n=this.open==="url",i=this.open==="json",r=!Gn(this.urlInput)||this.searchLoad?!0:$t;return d`
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
              class="${n?"active":""}"
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
          ${n?d`
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
                    disabled=${r}
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
                    @input=${this.#r}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${Jn(this.jsonInput)?$t:!0}
                  @click=${this.#n}
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
  `}customElements.define("eox-layercontrol-add-layers",or);const nr=(e,t)=>{t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"&&t.renderRoot.querySelector("eox-layercontrol-optional-list")?.requestUpdate()},po=e=>{const t=on(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};Xo();class ir extends ut{static properties={for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{type:Array}};#t;constructor(){super(),this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[]}firstUpdated(){this.eoxMap=po(this)}updated(t){t.has("for")&&(this.eoxMap=po(this))}get eoxMap(){return this.#t}set eoxMap(t){const o=this.#t;this.#t=t,this.requestUpdate("eoxMap",o)}#e(t){nr(t,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:t.detail}))}#o(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:t.detail}))}render(){const t=this.map?.getLayers().getArray(),o=t&&ze(t,"layerControlOptional",!0)?.length>0;return d`
      <style>
        ${!this.unstyled&&this.#n}
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
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${this.#e}
            @datetime:updated=${n=>qo(n,this)}
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
    `}#n=`
    ${Ue}
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
  `}customElements.define("eox-layercontrol",ir);export{ir as EOxLayerControl,Ri as updateVectorLayerStyle};
