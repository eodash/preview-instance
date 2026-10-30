import{eB as Yi,bc as h,eq as Qt,ep as Wi,fY as _t,bf as dt,be as Pe,fC as je,fD as Gi,fB as Ji}from"./index-BvwgT-QJ.js";import{n as N}from"./directive-CCBPy0DW.js";import{_ as gi,c as Ki}from"./index-IdKP0dUn.js";import{l as Ie}from"./live-CqYCaQ8r.js";import{o as Qi}from"./unsafe-html-Cx6IqiH0.js";import{o as re}from"./map-Bv-shLAs.js";import"./directive-helpers-D2MAJFYu.js";var C=e=>e!==void 0,yi=(e,t,i)=>t in e?e[t]:e[t]=i;const Xt={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class tn{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,i){return be(t,i).join("")}}function be(e,t){return mi(e,t,[]).join("")}function mi(e,t,i){if(e.nodeType===Xt.CDATA_SECTION||e.nodeType===Xt.TEXT)t?i.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):i.push(e.nodeValue);else{var n;for(n=e.firstChild;n;n=n.nextSibling)mi(n,t,i)}return i}function en(e,t,i,n){for(var o=nn(t);o;o=on(o)){var r=o.namespaceURI||null,a=e[r];if(C(a)){var s=a[o.localName];C(s)&&s.call(n,o,i)}}}function nn(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==Xt.ELEMENT;)t=t.nextSibling;return t}function on(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==Xt.ELEMENT;)t=t.nextSibling;return t}function J(e,t,i){return rn(e,t,i)}function rn(e,t,i){var n=C(i)?i:{},o,r;for(o=0,r=e.length;o<r;++o)n[e[o]]=t;return n}function bi(e,t){return(function(i,n){var o=e.call(C(t)?t:this,i,n);if(C(o)){var r=n[n.length-1];r.push(o)}})}function Y(e,t,i,n,o){return n.push(e),en(t,i,n,o),n.pop()}function p(e,t,i){return(function(n,o){let r=e.call(C(i)?i:this,n,o);if(C(r)){var a=o[o.length-1],s=C(t)?t:n.localName;a[s]=r}})}function ot(e,t,i){return(function(n,o){var r=e.call(C(i)?i:this,n,o);if(C(r)){var a=o[o.length-1],s=C(t)?t:n.localName,l=yi(a,s,[]);l.push(r)}})}const an=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function sn(e){return e.replace(an,"")}function Vt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return C(t[1])||!1}function Mt(e){return gt(be(e,!1))}function gt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function xe(e){return ce(be(e,!1))}function ce(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function _(e){return sn(be(e,!1))}const ln="http://www.w3.org/1999/xlink";function Fe(e){return e.getAttributeNS(ln,"href")}function un(e,t){return Y({},In,e,t)}function vi(e){return[gt(e.getAttribute("minx")),gt(e.getAttribute("miny")),gt(e.getAttribute("maxx")),gt(e.getAttribute("maxy"))]}function cn(e,t){const i=vi(e),n=[gt(e.getAttribute("resx")),gt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:i,res:n}}function dn(e,t){const i=vi(e);if(!(!C(i[0])||!C(i[1])||!C(i[2])||!C(i[3])))return i}function fn(e,t){const i=parseFloat(e.getAttribute("min")),n=parseFloat(e.getAttribute("max"));return{min:i,max:n}}function hn(e,t){const i=Y({},Hn,e,t);if(!C(i))return;const n=i.westBoundLongitude,o=i.southBoundLatitude,r=i.eastBoundLongitude,a=i.northBoundLatitude;if(!(!C(n)||!C(o)||!C(r)||!C(a)))return[n,o,r,a]}function pn(e,t){return Y({},Tn,e,t)}function gn(e,t){return Y({},Ln,e,t)}function yn(e,t){return Y({},Mn,e,t)}function mn(e,t){return Y({},Rn,e,t)}function bn(e,t){return Y({},On,e,t)}function vn(e,t){return Y([],Pn,e,t)}function wn(e,t){const i=Vt(e.getAttribute("queryable"));return Y({queryable:C(i)?i:!1},Si,e,t)}function xn(e,t){var i=t[t.length-1];const n=Y({},Si,e,t);if(!C(n))return;let o=Vt(e.getAttribute("queryable"));C(o)||(o=i.queryable),n.queryable=C(o)?o:!1;let r=ce(e.getAttribute("cascaded"));C(r)||(r=i.cascaded),n.cascaded=r;let a=Vt(e.getAttribute("opaque"));C(a)||(a=i.opaque),n.opaque=C(a)?a:!1;let s=Vt(e.getAttribute("noSubsets"));C(s)||(s=i.noSubsets),n.noSubsets=C(s)?s:!1;let l=gt(e.getAttribute("fixedWidth"));C(l)||(l=i.fixedWidth),n.fixedWidth=l;let u=gt(e.getAttribute("fixedHeight"));C(u)||(u=i.fixedHeight),n.fixedHeight=u;const c=["Style","CRS","AuthorityURL"];for(let m=0,v=c.length;m<v;m++){const g=c[m],S=i[g];if(C(S)){let F=yi(n,g,[]);F=F.concat(S),n[g]=F}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let m=0,v=d.length;m<v;m++){const g=d[m],S=n[g];if(!C(S)){const F=i[g];n[g]=F}}return n}function Sn(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Vt(e.getAttribute("multipleValues")),nearestValue:Vt(e.getAttribute("nearestValue")),current:Vt(e.getAttribute("current")),values:_(e)}}function mt(e,t){return Y({},Fn,e,t)}function En(e,t){return Y({},Nn,e,t)}function Cn(e,t){return Y({},kn,e,t)}function An(e,t){return Y({},Un,e,t)}function Se(e,t){return Y({},Bn,e,t)}function wi(e,t){var i=mt(e,t);if(C(i)){const n=[ce(e.getAttribute("width")),ce(e.getAttribute("height"))];return i.size=n,i}}function $n(e,t){var i=mt(e,t);if(C(i))return i.name=e.getAttribute("name"),i}function _n(e,t){var i=mt(e,t);if(C(i))return i.type=e.getAttribute("type"),i}function Vn(e,t){return Y({},jn,e,t)}function xi(e,t){return Y([],qn,e,t)}const K=[null,"http://www.opengis.net/wms"],Dn=J(K,{Service:p(gn),Capability:p(pn)}),Tn=J(K,{Request:p(En),Exception:p(vn),Layer:p(wn)}),Ln=J(K,{Name:p(_),Title:p(_),Abstract:p(_),KeywordList:p(xi),OnlineResource:p(Fe),ContactInformation:p(yn),Fees:p(_),AccessConstraints:p(_),LayerLimit:p(xe),MaxWidth:p(xe),MaxHeight:p(xe)}),Mn=J(K,{ContactPersonPrimary:p(mn),ContactPosition:p(_),ContactAddress:p(bn),ContactVoiceTelephone:p(_),ContactFacsimileTelephone:p(_),ContactElectronicMailAddress:p(_)}),Rn=J(K,{ContactPerson:p(_),ContactOrganization:p(_)}),On=J(K,{AddressType:p(_),Address:p(_),City:p(_),StateOrProvince:p(_),PostCode:p(_),Country:p(_)}),Pn=J(K,{Format:bi(_)}),Si=J(K,{Name:p(_),Title:p(_),Abstract:p(_),KeywordList:p(xi),CRS:ot(_),SRS:ot(_),EX_GeographicBoundingBox:p(hn),LatLonBoundingBox:p(dn),BoundingBox:ot(cn),Dimension:ot(Sn),Attribution:p(un),AuthorityURL:ot($n),Identifier:ot(_),MetadataURL:ot(_n),DataURL:ot(mt),FeatureListURL:ot(mt),Style:ot(Vn),MinScaleDenominator:p(Mt),MaxScaleDenominator:p(Mt),ScaleHint:p(fn),Layer:ot(xn)}),In=J(K,{Title:p(_),OnlineResource:p(Fe),LogoURL:p(wi)}),Hn=J(K,{westBoundLongitude:p(Mt),eastBoundLongitude:p(Mt),southBoundLatitude:p(Mt),northBoundLatitude:p(Mt)}),Nn=J(K,{GetCapabilities:p(Se),GetMap:p(Se),GetFeatureInfo:p(Se)}),Bn=J(K,{Format:ot(_),DCPType:ot(Cn)}),kn=J(K,{HTTP:p(An)}),Un=J(K,{Get:p(mt),Post:p(mt)}),jn=J(K,{Name:p(_),Title:p(_),Abstract:p(_),LegendURL:ot(wi),StyleSheetURL:p(mt),StyleURL:p(mt)}),Fn=J(K,{Format:p(_),OnlineResource:p(Fe)}),qn=J(K,{Keyword:bi(_)});class Zn{constructor(t,i){!i&&typeof window<"u"&&(i=window.DOMParser),this.version=void 0,this._parser=new tn(i),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let i=t.firstChild;i;i=i.nextSibling)if(i.nodeType==Xt.ELEMENT)return this.readFromNode(i);return null}readFromNode(t){return this.version=t.getAttribute("version"),Y({version:this.version},Dn,t,[])||null}}async function zn(e){let t=new URL(e),i=t.searchParams;i.set("SERVICE","WMS"),i.set("REQUEST","GetCapabilities");let n=t.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Zn(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function qe(e){const t=/\b(?:wms|ows)\b/i,i=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":i.test(e)?"XYZ":!1}function Xn(e){const i=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),n=qe(e);return!!(e&&i&&n)}function Ei(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Yn(e){try{return JSON.parse(Ei(e)),!!e}catch{return!1}}function Ee(e,t){const i=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{i.set(l,s[l])}):Array.isArray(s)?(i.delete(a),s.forEach(l=>{i.append(a,l)})):i.set(a,s)});const n=e.split("?")[0],o=i.toString();return`${n}?${o}`}function Wn(e,t,i){return(t=Qn(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},bt.apply(null,arguments)}function ti(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function ht(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?ti(Object(i),!0).forEach(function(n){Wn(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ti(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function Gn(e,t){if(e==null)return{};var i,n,o=Jn(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)===-1&&{}.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}function Jn(e,t){if(e==null)return{};var i={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;i[n]=e[n]}return i}function Kn(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qn(e){var t=Kn(e,"string");return typeof t=="symbol"?t:t+""}function He(e){"@babel/helpers - typeof";return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},He(e)}var to="1.15.7";function yt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var vt=yt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Yt=yt(/Edge/i),ei=yt(/firefox/i),Ut=yt(/safari/i)&&!yt(/chrome/i)&&!yt(/android/i),Ze=yt(/iP(ad|od|hone)/i),Ci=yt(/chrome/i)&&yt(/android/i),Ai={capture:!1,passive:!1};function $(e,t,i){e.addEventListener(t,i,!vt&&Ai)}function A(e,t,i){e.removeEventListener(t,i,!vt&&Ai)}function de(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function $i(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function ct(e,t,i,n){if(e){i=i||document;do{if(t!=null&&(t[0]===">"?e.parentNode===i&&de(e,t):de(e,t))||n&&e===i)return e;if(e===i)break}while(e=$i(e))}return null}var ii=/\s+/g;function at(e,t,i){if(e&&t)if(e.classList)e.classList[i?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(ii," ").replace(" "+t+" "," ");e.className=(n+(i?" "+t:"")).replace(ii," ")}}function w(e,t,i){var n=e&&e.style;if(n){if(i===void 0)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(i=e.currentStyle),t===void 0?i:i[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=i+(typeof i=="string"?"":"px")}}function Ot(e,t){var i="";if(typeof e=="string")i=e;else do{var n=w(e,"transform");n&&n!=="none"&&(i=n+" "+i)}while(!t&&(e=e.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function _i(e,t,i){if(e){var n=e.getElementsByTagName(t),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function ft(){var e=document.scrollingElement;return e||document.documentElement}function Z(e,t,i,n,o){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,s,l,u,c,d;if(e!==window&&e.parentNode&&e!==ft()?(r=e.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,u=r.right,c=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,c=window.innerHeight,d=window.innerWidth),(t||i)&&e!==window&&(o=o||e.parentNode,!vt))do if(o&&o.getBoundingClientRect&&(w(o,"transform")!=="none"||i&&w(o,"position")!=="static")){var m=o.getBoundingClientRect();a-=m.top+parseInt(w(o,"border-top-width")),s-=m.left+parseInt(w(o,"border-left-width")),l=a+r.height,u=s+r.width;break}while(o=o.parentNode);if(n&&e!==window){var v=Ot(o||e),g=v&&v.a,S=v&&v.d;v&&(a/=S,s/=g,d/=g,c/=S,l=a+c,u=s+d)}return{top:a,left:s,bottom:l,right:u,width:d,height:c}}}function ni(e,t,i){for(var n=Et(e,!0),o=Z(e)[t];n;){var r=Z(n)[i],a=void 0;if(a=o>=r,!a)return n;if(n===ft())break;n=Et(n,!1)}return!1}function Pt(e,t,i,n){for(var o=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==x.ghost&&(n||a[r]!==x.dragged)&&ct(a[r],i.draggable,e,!1)){if(o===t)return a[r];o++}r++}return null}function ze(e,t){for(var i=e.lastElementChild;i&&(i===x.ghost||w(i,"display")==="none"||t&&!de(i,t));)i=i.previousElementSibling;return i||null}function lt(e,t){var i=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==x.clone&&(!t||de(e,t))&&i++;return i}function oi(e){var t=0,i=0,n=ft();if(e)do{var o=Ot(e),r=o.a,a=o.d;t+=e.scrollLeft*r,i+=e.scrollTop*a}while(e!==n&&(e=e.parentNode));return[t,i]}function eo(e,t){for(var i in e)if(e.hasOwnProperty(i)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[i][n])return Number(i)}return-1}function Et(e,t){if(!e||!e.getBoundingClientRect)return ft();var i=e,n=!1;do if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=w(i);if(i.clientWidth<i.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||i.clientHeight<i.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!i.getBoundingClientRect||i===document.body)return ft();if(n||t)return i;n=!0}}while(i=i.parentNode);return ft()}function io(e,t){if(e&&t)for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function Ce(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var jt;function Vi(e,t){return function(){if(!jt){var i=arguments,n=this;i.length===1?e.call(n,i[0]):e.apply(n,i),jt=setTimeout(function(){jt=void 0},t)}}}function no(){clearTimeout(jt),jt=void 0}function Di(e,t,i){e.scrollLeft+=t,e.scrollTop+=i}function Ti(e){var t=window.Polymer,i=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):i?i(e).clone(!0)[0]:e.cloneNode(!0)}function Li(e,t,i){var n={};return Array.from(e.children).forEach(function(o){var r,a,s,l;if(!(!ct(o,t.draggable,e,!1)||o.animated||o===i)){var u=Z(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,u.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,u.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,u.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var rt="Sortable"+new Date().getTime();function oo(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(w(o,"display")==="none"||o===x.ghost)){e.push({target:o,rect:Z(o)});var r=ht({},e[e.length-1].rect);if(o.thisAnimationDuration){var a=Ot(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(eo(e,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var r=!1,a=0;e.forEach(function(s){var l=0,u=s.target,c=u.fromRect,d=Z(u),m=u.prevFromRect,v=u.prevToRect,g=s.rect,S=Ot(u,!0);S&&(d.top-=S.f,d.left-=S.e),u.toRect=d,u.thisAnimationDuration&&Ce(m,d)&&!Ce(c,d)&&(g.top-d.top)/(g.left-d.left)===(c.top-d.top)/(c.left-d.left)&&(l=ao(g,m,v,o.options)),Ce(d,c)||(u.prevFromRect=c,u.prevToRect=d,l||(l=o.options.animation),o.animate(u,g,d,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),e=[]},animate:function(n,o,r,a){if(a){w(n,"transition",""),w(n,"transform","");var s=Ot(this.el),l=s&&s.a,u=s&&s.d,c=(o.left-r.left)/(l||1),d=(o.top-r.top)/(u||1);n.animatingX=!!c,n.animatingY=!!d,w(n,"transform","translate3d("+c+"px,"+d+"px,0)"),this.forRepaintDummy=ro(n),w(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),w(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){w(n,"transition",""),w(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function ro(e){return e.offsetWidth}function ao(e,t,i,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))*n.animation}var Dt=[],Ae={initializeByDefault:!0},Wt={mount:function(t){for(var i in Ae)Ae.hasOwnProperty(i)&&!(i in t)&&(t[i]=Ae[i]);Dt.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Dt.push(t)},pluginEvent:function(t,i,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=t+"Global";Dt.forEach(function(a){i[a.pluginName]&&(i[a.pluginName][r]&&i[a.pluginName][r](ht({sortable:i},n)),i.options[a.pluginName]&&i[a.pluginName][t]&&i[a.pluginName][t](ht({sortable:i},n)))})},initializePlugins:function(t,i,n,o){Dt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,i,t.options);u.sortable=t,u.options=t.options,t[l]=u,bt(n,u.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,i){var n={};return Dt.forEach(function(o){typeof o.eventProperties=="function"&&bt(n,o.eventProperties.call(i[o.pluginName],t))}),n},modifyOption:function(t,i,n){var o;return Dt.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[i]=="function"&&(o=r.optionListeners[i].call(t[r.pluginName],n))}),o}};function so(e){var t=e.sortable,i=e.rootEl,n=e.name,o=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,c=e.oldDraggableIndex,d=e.newDraggableIndex,m=e.originalEvent,v=e.putSortable,g=e.extraEventProperties;if(t=t||i&&i[rt],!!t){var S,F=t.options,D="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!vt&&!Yt?S=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(S=document.createEvent("Event"),S.initEvent(n,!0,!0)),S.to=a||i,S.from=s||i,S.item=o||i,S.clone=r,S.oldIndex=l,S.newIndex=u,S.oldDraggableIndex=c,S.newDraggableIndex=d,S.originalEvent=m,S.pullMode=v?v.lastPutMode:void 0;var b=ht(ht({},g),Wt.getEventProperties(n,t));for(var L in b)S[L]=b[L];i&&i.dispatchEvent(S),F[D]&&F[D].call(t,S)}}var lo=["evt"],nt=function(t,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=Gn(n,lo);Wt.pluginEvent.bind(x)(t,i,ht({dragEl:f,parentEl:U,ghostEl:E,rootEl:H,nextEl:$t,lastDownEl:ae,cloneEl:k,cloneHidden:St,dragStarted:Nt,putSortable:G,activeSortable:x.active,originalEvent:o,oldIndex:Rt,oldDraggableIndex:Ft,newIndex:st,newDraggableIndex:xt,hideGhostForTarget:Pi,unhideGhostForTarget:Ii,cloneNowHidden:function(){St=!0},cloneNowShown:function(){St=!1},dispatchSortableEvent:function(s){it({sortable:i,name:s,originalEvent:o})}},r))};function it(e){so(ht({putSortable:G,cloneEl:k,targetEl:f,rootEl:H,oldIndex:Rt,oldDraggableIndex:Ft,newIndex:st,newDraggableIndex:xt},e))}var f,U,E,H,$t,ae,k,St,Rt,st,Ft,xt,te,G,Lt=!1,fe=!1,he=[],Ct,ut,$e,_e,ri,ai,Nt,Tt,qt,Zt=!1,ee=!1,se,tt,Ve=[],Ne=!1,pe=[],ve=typeof document<"u",ie=Ze,si=Yt||vt?"cssFloat":"float",uo=ve&&!Ci&&!Ze&&"draggable"in document.createElement("div"),Mi=(function(){if(ve){if(vt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),Ri=function(t,i){var n=w(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=Pt(t,0,i),a=Pt(t,1,i),s=r&&w(r),l=a&&w(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+Z(r).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+Z(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=o&&n[si]==="none"||a&&n[si]==="none"&&u+c>o)?"vertical":"horizontal"},co=function(t,i,n){var o=n?t.left:t.top,r=n?t.right:t.bottom,a=n?t.width:t.height,s=n?i.left:i.top,l=n?i.right:i.bottom,u=n?i.width:i.height;return o===s||r===l||o+a/2===s+u/2},fo=function(t,i){var n;return he.some(function(o){var r=o[rt].options.emptyInsertThreshold;if(!(!r||ze(o))){var a=Z(o),s=t>=a.left-r&&t<=a.right+r,l=i>=a.top-r&&i<=a.bottom+r;if(s&&l)return n=o}}),n},Oi=function(t){function i(r,a){return function(s,l,u,c){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return i(r(s,l,u,c),a)(s,l,u,c);var m=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===m||r.join&&r.indexOf(m)>-1}}var n={},o=t.group;(!o||He(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=i(o.pull,!0),n.checkPut=i(o.put),n.revertClone=o.revertClone,t.group=n},Pi=function(){!Mi&&E&&w(E,"display","none")},Ii=function(){!Mi&&E&&w(E,"display","")};ve&&!Ci&&document.addEventListener("click",function(e){if(fe)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),fe=!1,!1},!0);var At=function(t){if(f){t=t.touches?t.touches[0]:t;var i=fo(t.clientX,t.clientY);if(i){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=i,n.preventDefault=void 0,n.stopPropagation=void 0,i[rt]._onDragOver(n)}}},ho=function(t){f&&f.parentNode[rt]._isOutsideThisEl(t.target)};function x(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=bt({},t),e[rt]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ri(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:x.supportPointer!==!1&&"PointerEvent"in window&&(!Ut||Ze),emptyInsertThreshold:5};Wt.initializePlugins(this,e,i);for(var n in i)!(n in t)&&(t[n]=i[n]);Oi(t);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=t.forceFallback?!1:uo,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?$(e,"pointerdown",this._onTapStart):($(e,"mousedown",this._onTapStart),$(e,"touchstart",this._onTapStart)),this.nativeDraggable&&($(e,"dragover",this),$(e,"dragenter",this)),he.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),bt(this,oo())}x.prototype={constructor:x,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Tt=null)},_getDirection:function(t,i){return typeof this.options.direction=="function"?this.options.direction.call(this,t,i,f):this.options.direction},_onTapStart:function(t){if(t.cancelable){var i=this,n=this.el,o=this.options,r=o.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,c=o.filter;if(xo(n),!f&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||o.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Ut&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=ct(l,o.draggable,n,!1),!(l&&l.animated)&&ae!==l)){if(Rt=lt(l),Ft=lt(l,o.draggable),typeof c=="function"){if(c.call(this,t,l,this)){it({sortable:i,rootEl:u,name:"filter",targetEl:l,toEl:n,fromEl:n}),nt("filter",i,{evt:t}),r&&t.preventDefault();return}}else if(c&&(c=c.split(",").some(function(d){if(d=ct(u,d.trim(),n,!1),d)return it({sortable:i,rootEl:d,name:"filter",targetEl:l,fromEl:n,toEl:n}),nt("filter",i,{evt:t}),!0}),c)){r&&t.preventDefault();return}o.handle&&!ct(u,o.handle,n,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,i,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!f&&n.parentNode===r){var u=Z(n);if(H=r,f=n,U=f.parentNode,$t=f.nextSibling,ae=n,te=a.group,x.dragged=f,Ct={target:f,clientX:(i||t).clientX,clientY:(i||t).clientY},ri=Ct.clientX-u.left,ai=Ct.clientY-u.top,this._lastX=(i||t).clientX,this._lastY=(i||t).clientY,f.style["will-change"]="all",l=function(){if(nt("delayEnded",o,{evt:t}),x.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!ei&&o.nativeDraggable&&(f.draggable=!0),o._triggerDragStart(t,i),it({sortable:o,name:"choose",originalEvent:t}),at(f,a.chosenClass,!0)},a.ignore.split(",").forEach(function(c){_i(f,c.trim(),De)}),$(s,"dragover",At),$(s,"mousemove",At),$(s,"touchmove",At),a.supportPointer?($(s,"pointerup",o._onDrop),!this.nativeDraggable&&$(s,"pointercancel",o._onDrop)):($(s,"mouseup",o._onDrop),$(s,"touchend",o._onDrop),$(s,"touchcancel",o._onDrop)),ei&&this.nativeDraggable&&(this.options.touchStartThreshold=4,f.draggable=!0),nt("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||i)&&(!this.nativeDraggable||!(Yt||vt))){if(x.eventCanceled){this._onDrop();return}a.supportPointer?($(s,"pointerup",o._disableDelayedDrag),$(s,"pointercancel",o._disableDelayedDrag)):($(s,"mouseup",o._disableDelayedDrag),$(s,"touchend",o._disableDelayedDrag),$(s,"touchcancel",o._disableDelayedDrag)),$(s,"mousemove",o._delayedDragTouchMoveHandler),$(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&$(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var i=t.touches?t.touches[0]:t;Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){f&&De(f),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;A(t,"mouseup",this._disableDelayedDrag),A(t,"touchend",this._disableDelayedDrag),A(t,"touchcancel",this._disableDelayedDrag),A(t,"pointerup",this._disableDelayedDrag),A(t,"pointercancel",this._disableDelayedDrag),A(t,"mousemove",this._delayedDragTouchMoveHandler),A(t,"touchmove",this._delayedDragTouchMoveHandler),A(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,i){i=i||t.pointerType=="touch"&&t,!this.nativeDraggable||i?this.options.supportPointer?$(document,"pointermove",this._onTouchMove):i?$(document,"touchmove",this._onTouchMove):$(document,"mousemove",this._onTouchMove):($(f,"dragend",this),$(H,"dragstart",this._onDragStart));try{document.selection?le(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,i){if(Lt=!1,H&&f){nt("dragStarted",this,{evt:i}),this.nativeDraggable&&$(document,"dragover",ho);var n=this.options;!t&&at(f,n.dragClass,!1),at(f,n.ghostClass,!0),x.active=this,t&&this._appendGhost(),it({sortable:this,name:"start",originalEvent:i})}else this._nulling()},_emulateDragOver:function(){if(ut){this._lastX=ut.clientX,this._lastY=ut.clientY,Pi();for(var t=document.elementFromPoint(ut.clientX,ut.clientY),i=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ut.clientX,ut.clientY),t!==i);)i=t;if(f.parentNode[rt]._isOutsideThisEl(t),i)do{if(i[rt]){var n=void 0;if(n=i[rt]._onDragOver({clientX:ut.clientX,clientY:ut.clientY,target:t,rootEl:i}),n&&!this.options.dragoverBubble)break}t=i}while(i=$i(i));Ii()}},_onTouchMove:function(t){if(Ct){var i=this.options,n=i.fallbackTolerance,o=i.fallbackOffset,r=t.touches?t.touches[0]:t,a=E&&Ot(E,!0),s=E&&a&&a.a,l=E&&a&&a.d,u=ie&&tt&&oi(tt),c=(r.clientX-Ct.clientX+o.x)/(s||1)+(u?u[0]-Ve[0]:0)/(s||1),d=(r.clientY-Ct.clientY+o.y)/(l||1)+(u?u[1]-Ve[1]:0)/(l||1);if(!x.active&&!Lt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(E){a?(a.e+=c-($e||0),a.f+=d-(_e||0)):a={a:1,b:0,c:0,d:1,e:c,f:d};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");w(E,"webkitTransform",m),w(E,"mozTransform",m),w(E,"msTransform",m),w(E,"transform",m),$e=c,_e=d,ut=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!E){var t=this.options.fallbackOnBody?document.body:H,i=Z(f,!0,ie,!0,t),n=this.options;if(ie){for(tt=t;w(tt,"position")==="static"&&w(tt,"transform")==="none"&&tt!==document;)tt=tt.parentNode;tt!==document.body&&tt!==document.documentElement?(tt===document&&(tt=ft()),i.top+=tt.scrollTop,i.left+=tt.scrollLeft):tt=ft(),Ve=oi(tt)}E=f.cloneNode(!0),at(E,n.ghostClass,!1),at(E,n.fallbackClass,!0),at(E,n.dragClass,!0),w(E,"transition",""),w(E,"transform",""),w(E,"box-sizing","border-box"),w(E,"margin",0),w(E,"top",i.top),w(E,"left",i.left),w(E,"width",i.width),w(E,"height",i.height),w(E,"opacity","0.8"),w(E,"position",ie?"absolute":"fixed"),w(E,"zIndex","100000"),w(E,"pointerEvents","none"),x.ghost=E,t.appendChild(E),w(E,"transform-origin",ri/parseInt(E.style.width)*100+"% "+ai/parseInt(E.style.height)*100+"%")}},_onDragStart:function(t,i){var n=this,o=t.dataTransfer,r=n.options;if(nt("dragStart",this,{evt:t}),x.eventCanceled){this._onDrop();return}nt("setupClone",this),x.eventCanceled||(k=Ti(f),k.removeAttribute("id"),k.draggable=!1,k.style["will-change"]="",this._hideClone(),at(k,this.options.chosenClass,!1),x.clone=k),n.cloneId=le(function(){nt("clone",n),!x.eventCanceled&&(n.options.removeCloneOnHide||H.insertBefore(k,f),n._hideClone(),it({sortable:n,name:"clone"}))}),!i&&at(f,r.dragClass,!0),i?(fe=!0,n._loopId=setInterval(n._emulateDragOver,50)):(A(document,"mouseup",n._onDrop),A(document,"touchend",n._onDrop),A(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,f)),$(document,"drop",n),w(f,"transform","translateZ(0)")),Lt=!0,n._dragStartId=le(n._dragStarted.bind(n,i,t)),$(document,"selectstart",n),Nt=!0,window.getSelection().removeAllRanges(),Ut&&w(document.body,"user-select","none")},_onDragOver:function(t){var i=this.el,n=t.target,o,r,a,s=this.options,l=s.group,u=x.active,c=te===l,d=s.sort,m=G||u,v,g=this,S=!1;if(Ne)return;function F(pt,It){nt(pt,g,ht({evt:t,isOwner:c,axis:v?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:d,fromSortable:m,target:n,completed:b,onMove:function(Gt,Jt){return ne(H,i,f,o,Gt,Z(Gt),t,Jt)},changed:L},It))}function D(){F("dragOverAnimationCapture"),g.captureAnimationState(),g!==m&&m.captureAnimationState()}function b(pt){return F("dragOverCompleted",{insertion:pt}),pt&&(c?u._hideClone():u._showClone(g),g!==m&&(at(f,G?G.options.ghostClass:u.options.ghostClass,!1),at(f,s.ghostClass,!0)),G!==g&&g!==x.active?G=g:g===x.active&&G&&(G=null),m===g&&(g._ignoreWhileAnimating=n),g.animateAll(function(){F("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(n===f&&!f.animated||n===i&&!n.animated)&&(Tt=null),!s.dragoverBubble&&!t.rootEl&&n!==document&&(f.parentNode[rt]._isOutsideThisEl(t.target),!pt&&At(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),S=!0}function L(){st=lt(f),xt=lt(f,s.draggable),it({sortable:g,name:"change",toEl:i,newIndex:st,newDraggableIndex:xt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=ct(n,s.draggable,i,!0),F("dragOver"),x.eventCanceled)return S;if(f.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||g._ignoreWhileAnimating===n)return b(!1);if(fe=!1,u&&!s.disabled&&(c?d||(a=U!==H):G===this||(this.lastPutMode=te.checkPull(this,u,f,t))&&l.checkPut(this,u,f,t))){if(v=this._getDirection(t,n)==="vertical",o=Z(f),F("dragOverValid"),x.eventCanceled)return S;if(a)return U=H,D(),this._hideClone(),F("revert"),x.eventCanceled||($t?H.insertBefore(f,$t):H.appendChild(f)),b(!0);var R=ze(i,s.draggable);if(!R||mo(t,v,this)&&!R.animated){if(R===f)return b(!1);if(R&&i===t.target&&(n=R),n&&(r=Z(n)),ne(H,i,f,o,n,r,t,!!n)!==!1)return D(),R&&R.nextSibling?i.insertBefore(f,R.nextSibling):i.appendChild(f),U=i,L(),b(!0)}else if(R&&yo(t,v,this)){var j=Pt(i,0,s,!0);if(j===f)return b(!1);if(n=j,r=Z(n),ne(H,i,f,o,n,r,t,!1)!==!1)return D(),i.insertBefore(f,j),U=i,L(),b(!0)}else if(n.parentNode===i){r=Z(n);var y=0,V,O=f.parentNode!==i,T=!co(f.animated&&f.toRect||o,n.animated&&n.toRect||r,v),P=v?"top":"left",X=ni(n,"top","top")||ni(f,"top","top"),et=X?X.scrollTop:void 0;Tt!==n&&(V=r[P],Zt=!1,ee=!T&&s.invertSwap||O),y=bo(t,n,r,v,T?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,ee,Tt===n);var B;if(y!==0){var W=lt(f);do W-=y,B=U.children[W];while(B&&(w(B,"display")==="none"||B===E))}if(y===0||B===n)return b(!1);Tt=n,qt=y;var M=n.nextElementSibling,I=!1;I=y===1;var Q=ne(H,i,f,o,n,r,t,I);if(Q!==!1)return(Q===1||Q===-1)&&(I=Q===1),Ne=!0,setTimeout(go,30),D(),I&&!M?i.appendChild(f):n.parentNode.insertBefore(f,I?M:n),X&&Di(X,0,et-X.scrollTop),U=f.parentNode,V!==void 0&&!ee&&(se=Math.abs(V-Z(n)[P])),L(),b(!0)}if(i.contains(f))return b(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){A(document,"mousemove",this._onTouchMove),A(document,"touchmove",this._onTouchMove),A(document,"pointermove",this._onTouchMove),A(document,"dragover",At),A(document,"mousemove",At),A(document,"touchmove",At)},_offUpEvents:function(){var t=this.el.ownerDocument;A(t,"mouseup",this._onDrop),A(t,"touchend",this._onDrop),A(t,"pointerup",this._onDrop),A(t,"pointercancel",this._onDrop),A(t,"touchcancel",this._onDrop),A(document,"selectstart",this)},_onDrop:function(t){var i=this.el,n=this.options;if(st=lt(f),xt=lt(f,n.draggable),nt("drop",this,{evt:t}),U=f&&f.parentNode,st=lt(f),xt=lt(f,n.draggable),x.eventCanceled){this._nulling();return}Lt=!1,ee=!1,Zt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Be(this.cloneId),Be(this._dragStartId),this.nativeDraggable&&(A(document,"drop",this),A(i,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Ut&&w(document.body,"user-select",""),w(f,"transform",""),t&&(Nt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),E&&E.parentNode&&E.parentNode.removeChild(E),(H===U||G&&G.lastPutMode!=="clone")&&k&&k.parentNode&&k.parentNode.removeChild(k),f&&(this.nativeDraggable&&A(f,"dragend",this),De(f),f.style["will-change"]="",Nt&&!Lt&&at(f,G?G.options.ghostClass:this.options.ghostClass,!1),at(f,this.options.chosenClass,!1),it({sortable:this,name:"unchoose",toEl:U,newIndex:null,newDraggableIndex:null,originalEvent:t}),H!==U?(st>=0&&(it({rootEl:U,name:"add",toEl:U,fromEl:H,originalEvent:t}),it({sortable:this,name:"remove",toEl:U,originalEvent:t}),it({rootEl:U,name:"sort",toEl:U,fromEl:H,originalEvent:t}),it({sortable:this,name:"sort",toEl:U,originalEvent:t})),G&&G.save()):st!==Rt&&st>=0&&(it({sortable:this,name:"update",toEl:U,originalEvent:t}),it({sortable:this,name:"sort",toEl:U,originalEvent:t})),x.active&&((st==null||st===-1)&&(st=Rt,xt=Ft),it({sortable:this,name:"end",toEl:U,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){nt("nulling",this),H=f=U=E=$t=k=ae=St=Ct=ut=Nt=st=xt=Rt=Ft=Tt=qt=G=te=x.dragged=x.ghost=x.clone=x.active=null;var t=this.el;pe.forEach(function(i){t.contains(i)&&(i.checked=!0)}),pe.length=$e=_e=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":f&&(this._onDragOver(t),po(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],i,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)i=n[o],ct(i,a.draggable,this.el,!1)&&t.push(i.getAttribute(a.dataIdAttr)||wo(i));return t},sort:function(t,i){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];ct(s,this.options.draggable,o,!1)&&(n[r]=s)},this),i&&this.captureAnimationState(),t.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),i&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,i){return ct(t,i||this.options.draggable,this.el,!1)},option:function(t,i){var n=this.options;if(i===void 0)return n[t];var o=Wt.modifyOption(this,t,i);typeof o<"u"?n[t]=o:n[t]=i,t==="group"&&Oi(n)},destroy:function(){nt("destroy",this);var t=this.el;t[rt]=null,A(t,"mousedown",this._onTapStart),A(t,"touchstart",this._onTapStart),A(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(A(t,"dragover",this),A(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(i){i.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),he.splice(he.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!St){if(nt("hideClone",this),x.eventCanceled)return;w(k,"display","none"),this.options.removeCloneOnHide&&k.parentNode&&k.parentNode.removeChild(k),St=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(St){if(nt("showClone",this),x.eventCanceled)return;f.parentNode==H&&!this.options.group.revertClone?H.insertBefore(k,f):$t?H.insertBefore(k,$t):H.appendChild(k),this.options.group.revertClone&&this.animate(f,k),w(k,"display",""),St=!1}}};function po(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ne(e,t,i,n,o,r,a,s){var l,u=e[rt],c=u.options.onMove,d;return window.CustomEvent&&!vt&&!Yt?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=i,l.draggedRect=n,l.related=o||t,l.relatedRect=r||Z(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),c&&(d=c.call(u,l,a)),d}function De(e){e.draggable=!1}function go(){Ne=!1}function yo(e,t,i){var n=Z(Pt(i.el,0,i.options,!0)),o=Li(i.el,i.options,E),r=10;return t?e.clientX<o.left-r||e.clientY<n.top&&e.clientX<n.right:e.clientY<o.top-r||e.clientY<n.bottom&&e.clientX<n.left}function mo(e,t,i){var n=Z(ze(i.el,i.options.draggable)),o=Li(i.el,i.options,E),r=10;return t?e.clientX>o.right+r||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>o.bottom+r||e.clientX>n.right&&e.clientY>n.top}function bo(e,t,i,n,o,r,a,s){var l=n?e.clientY:e.clientX,u=n?i.height:i.width,c=n?i.top:i.left,d=n?i.bottom:i.right,m=!1;if(!a){if(s&&se<u*o){if(!Zt&&(qt===1?l>c+u*r/2:l<d-u*r/2)&&(Zt=!0),Zt)m=!0;else if(qt===1?l<c+se:l>d-se)return-qt}else if(l>c+u*(1-o)/2&&l<d-u*(1-o)/2)return vo(t)}return m=m||a,m&&(l<c+u*r/2||l>d-u*r/2)?l>c+u/2?1:-1:0}function vo(e){return lt(f)<lt(e)?1:-1}function wo(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,i=t.length,n=0;i--;)n+=t.charCodeAt(i);return n.toString(36)}function xo(e){pe.length=0;for(var t=e.getElementsByTagName("input"),i=t.length;i--;){var n=t[i];n.checked&&pe.push(n)}}function le(e){return setTimeout(e,0)}function Be(e){return clearTimeout(e)}ve&&$(document,"touchmove",function(e){(x.active||Lt)&&e.cancelable&&e.preventDefault()});x.utils={on:$,off:A,css:w,find:_i,is:function(t,i){return!!ct(t,i,t,!1)},extend:io,throttle:Vi,closest:ct,toggleClass:at,clone:Ti,index:lt,nextTick:le,cancelNextTick:Be,detectDirection:Ri,getChild:Pt,expando:rt};x.get=function(e){return e[rt]};x.mount=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(x.utils=ht(ht({},x.utils),n.utils)),Wt.mount(n)})};x.create=function(e,t){return new x(e,t)};x.version=to;var q=[],Bt,ke,Ue=!1,Te,Le,ge,kt;function So(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(i){var n=i.originalEvent;this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):this.options.supportPointer?$(document,"pointermove",this._handleFallbackAutoScroll):n.touches?$(document,"touchmove",this._handleFallbackAutoScroll):$(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(i){var n=i.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?A(document,"dragover",this._handleAutoScroll):(A(document,"pointermove",this._handleFallbackAutoScroll),A(document,"touchmove",this._handleFallbackAutoScroll),A(document,"mousemove",this._handleFallbackAutoScroll)),li(),ue(),no()},nulling:function(){ge=ke=Bt=Ue=kt=Te=Le=null,q.length=0},_handleFallbackAutoScroll:function(i){this._handleAutoScroll(i,!0)},_handleAutoScroll:function(i,n){var o=this,r=(i.touches?i.touches[0]:i).clientX,a=(i.touches?i.touches[0]:i).clientY,s=document.elementFromPoint(r,a);if(ge=i,n||this.options.forceAutoScrollFallback||Yt||vt||Ut){Me(i,this.options,s,n);var l=Et(s,!0);Ue&&(!kt||r!==Te||a!==Le)&&(kt&&li(),kt=setInterval(function(){var u=Et(document.elementFromPoint(r,a),!0);u!==l&&(l=u,ue()),Me(i,o.options,u,n)},10),Te=r,Le=a)}else{if(!this.options.bubbleScroll||Et(s,!0)===ft()){ue();return}Me(i,this.options,Et(s,!1),!1)}}},bt(e,{pluginName:"scroll",initializeByDefault:!0})}function ue(){q.forEach(function(e){clearInterval(e.pid)}),q=[]}function li(){clearInterval(kt)}var Me=Vi(function(e,t,i,n){if(t.scroll){var o=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=ft(),u=!1,c;ke!==i&&(ke=i,ue(),Bt=t.scroll,c=t.scrollFn,Bt===!0&&(Bt=Et(i,!0)));var d=0,m=Bt;do{var v=m,g=Z(v),S=g.top,F=g.bottom,D=g.left,b=g.right,L=g.width,R=g.height,j=void 0,y=void 0,V=v.scrollWidth,O=v.scrollHeight,T=w(v),P=v.scrollLeft,X=v.scrollTop;v===l?(j=L<V&&(T.overflowX==="auto"||T.overflowX==="scroll"||T.overflowX==="visible"),y=R<O&&(T.overflowY==="auto"||T.overflowY==="scroll"||T.overflowY==="visible")):(j=L<V&&(T.overflowX==="auto"||T.overflowX==="scroll"),y=R<O&&(T.overflowY==="auto"||T.overflowY==="scroll"));var et=j&&(Math.abs(b-o)<=a&&P+L<V)-(Math.abs(D-o)<=a&&!!P),B=y&&(Math.abs(F-r)<=a&&X+R<O)-(Math.abs(S-r)<=a&&!!X);if(!q[d])for(var W=0;W<=d;W++)q[W]||(q[W]={});(q[d].vx!=et||q[d].vy!=B||q[d].el!==v)&&(q[d].el=v,q[d].vx=et,q[d].vy=B,clearInterval(q[d].pid),(et!=0||B!=0)&&(u=!0,q[d].pid=setInterval((function(){n&&this.layer===0&&x.active._onTouchMove(ge);var M=q[this.layer].vy?q[this.layer].vy*s:0,I=q[this.layer].vx?q[this.layer].vx*s:0;typeof c=="function"&&c.call(x.dragged.parentNode[rt],I,M,e,ge,q[this.layer].el)!=="continue"||Di(q[this.layer].el,I,M)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&m!==l&&(m=Et(m,!1)));Ue=u}},30),Hi=function(t){var i=t.originalEvent,n=t.putSortable,o=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(i){var u=n||r;s();var c=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i,d=document.elementFromPoint(c.clientX,c.clientY);l(),u&&!u.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function Xe(){}Xe.prototype={startIndex:null,dragStart:function(t){var i=t.oldDraggableIndex;this.startIndex=i},onSpill:function(t){var i=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=Pt(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(i,o):this.sortable.el.appendChild(i),this.sortable.animateAll(),n&&n.animateAll()},drop:Hi};bt(Xe,{pluginName:"revertOnSpill"});function Ye(){}Ye.prototype={onSpill:function(t){var i=t.dragEl,n=t.putSortable,o=n||this.sortable;o.captureAnimationState(),i.parentNode&&i.parentNode.removeChild(i),o.animateAll()},drop:Hi};bt(Ye,{pluginName:"removeOnSpill"});x.mount(new So);x.mount(Ye,Xe);const Eo=e=>{const t=e.item;let i=Array.prototype.slice.call(t.parentNode.childNodes);return i=i.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),i},Co=(e,t,i,n,o,r)=>{const s=e.item.parentNode;for(const S of i)s.appendChild(S);if(e.oldIndex==e.newIndex)return;const l=n.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(o),c=l.find(S=>S.get(o)===u),d=r.dataset.layer,m=l.find(S=>S.get(o)==d);let v,g;for(v=0;v<l.length;v++)if(l[v]==c){n.removeAt(v);break}for(g=0;g<l.length;g++)if(l[g]===m){v>g?n.insertAt(g,c):n.insertAt(g+1,c);break}t.requestUpdate()};function Ao(e,t,i,n){let o=[],r=null;e._sortable=x.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),o=Eo(a)},onMove:a=>{r=a.related},onEnd:a=>Co(a,n,o,t,i,r)})}function $o(e,t,i,n){const o=e.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(i)||(a.set(i,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function We(e,t,i){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(u=>u.get(a)===s)];const l=r.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>o(u.getLayers().getArray(),a,s)),n};return o(e,t,i),n}function _o(e,t,i){if(!e||!t)return!1;if(!Ni(e,i))return!0;const n=e.get("minZoom"),o=e.get("maxZoom"),r=t.getView().getZoom();return r>n&&r<o}function Ni(e,t){const i=e.get("minZoom"),n=e.get("maxZoom");return!!(t&&(i!==-1/0||n!==1/0))}function ui(e,t){return!e||!t?void 0:e.getLayers?"group":t.getInteractions().getArray().filter(o=>o.freehand_!==void 0).map(o=>o.source_)?.ol_uid?.includes(e.getSource?e.getSource()?.ol_uid:void 0)?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Vo=(e,t,i)=>{let n=t;const o=i.layer.getSource(),r=i.layerConfig.schema?.options?.removeProperties??[],a={...e};r.forEach(l=>delete a[l]),o.updateParams?o.updateParams(a):o.getTileUrlFunction&&o.getTileUrlFunction()&&(n||(n=o.getTileUrlFunction()),o instanceof Yi&&(o._updatedUrl=Ee(o.getUrls()[0],e)),o.setTileUrlFunction((...l)=>{const u=new URL(n(...l));return r.forEach(c=>u.searchParams.delete(c)),Ee(u.href,e)}),o.setKey(new Date().toISOString()));const s=document.querySelector("eox-map");if(s){const l=s.globe;if(l){const u=l.planet.layers.filter(c=>c.name==i.layer.get("id"))[0];u&&u.setUrl(Ee(u.url,e)),window.eoxMapGlobe.refresh()}}return n};async function Do(e,t,i){const n="updateStyleVariables"in t,o="setStyle"in t,r=n?t.style_:i.style,a=Ge(e);if(r){const s=r.variables||{};r.variables={...s,...a}}if(n){const s=e?.variable??e?.band;if(s!==void 0){const c=t.get("_lastVariable");if(s!==c){const d=await Io(t,String(s)),m=d?.targetMin??me(t,String(s)).targetMin,v=d?.targetMax??me(t,String(s)).targetMax;(i?.autofill===!0||i?.schema?.autofill===!0||r?.variables?.min!==void 0||r?.variables?.max!==void 0||i?.schema?.properties?.min!==void 0||i?.schema?.properties?.max!==void 0)&&(e&&("min"in e&&(e.min=m),"max"in e&&(e.max=v)),a.min=m,a.max=v,r?.variables&&(r.variables.min=m,r.variables.max=v))}}const l=t.get("_geozarrDimensions"),u=t.getSource?t.getSource():null;if(u&&typeof u.updateDimensions=="function"&&l){const c={};for(const d of Object.keys(l))e[d]!==void 0&&(c[d]=Number(e[d]));Object.keys(c).length>0&&u.updateDimensions(c)}t.updateStyleVariables(a)}else if(o&&r){const s=To(r);t.setStyle(s)}}const Ge=e=>{const t={};for(const i in e)if(typeof e[i]=="object"&&e[i]!==null){const n=Ge(e[i]);for(const o in n)t[o]=n?.[o]}else t[i]=e?.[i];return t};function To(e){let t=e;if("variables"in e){let i=JSON.stringify(e);const{variables:n}=e;for(const o in n)typeof n[o]=="number"?i=i.replaceAll(`["var","${o}"]`,String(n[o])):i=i.replaceAll(`["var","${o}"]`,`"${n[o]}"`);t=JSON.parse(i)}return t}const Lo=(e,t,i)=>{if(!e)return;const n=Ge(t);let o,r;return Array.isArray(e)?r=structuredClone(e):r=[structuredClone(e)],o=r.filter(a=>{if(!("boundTo"in a))return!0;const s=a.boundTo.key,l=a.boundTo.value;return s in n&&n[s]==l}),o.length||(o=null),o?.map(a=>{if(delete a.boundTo,a.rangeProperty&&i){const s=n[a.rangeProperty];s&&i[s]?(a.range=i[s],delete a.rangeProperty):s&&(a.range=["#ffffff","#000000"])}return!("domainProperties"in a)||"domain"in a?a:Object.keys(a)?.reduce((s,l)=>(l==="domainProperties"?s.domain=a[l].map(u=>n[u]):s[l]=a[l],s),{})}).filter(Boolean)};function Re(e,t){if(!t)return null;let i={},n="updateStyleVariables"in e?e.styleVariables_||e.style_?.variables||e.get?.("style")?.variables:t.style?.variables;if((t.type==="style"||t.style)&&n)i={...n};else if(e.getSource()?.getParams?.())i=e.getSource().getParams();else if(e.getSource()?.getTileUrlFunction?.())try{const s=e.getSource().getTileUrlFunction()([0,0,0]);if(s){const l=new URL(s);i={};for(const[u,c]of l.searchParams.entries()){const d=l.searchParams.getAll(u);i[u]=d.length>1?d:c}}}catch(s){console.error("Error parsing start values from tile URL",s)}else return null;const o=t;i.min===void 0&&o.min!==void 0&&(i.min=o.min),i.max===void 0&&o.max!==void 0&&(i.max=o.max),i.bands===void 0&&o.bands!==void 0&&(i.bands=o.bands),i.band===void 0&&o.band!==void 0&&(i.band=o.band),i.variable===void 0&&(i.variable=o.variable??o.band??(Array.isArray(o.bands)&&o.bands.length>0?o.bands[0]:void 0)??e.get?.("_lastVariable"));const r=ye(t.schema),a=Bi(Object.keys(r).length?r:t.schema,i,t.schema,e);return Object.keys(a).length?a:null}function ye(e,t=e,i=new Set){if(!e||typeof e!="object")return{};const n={};typeof e.$ref=="string"&&!i.has(e.$ref)&&(i.add(e.$ref),Object.assign(n,ye(Mo(e.$ref,t),t,i)));for(const o of["anyOf","oneOf","allOf"])if(Array.isArray(e[o]))for(const r of e[o])Object.assign(n,ye(r,t,i));return Object.assign(n,e.properties)}function Bi(e,t,i=e,n=null){let o={};for(const r in e){const a=e[r]?.type;if(a&&a!=="object"&&t[r]!==void 0){const s=["number","integer"].includes(a)?Number(t[r]):t[r];o[r]=Number.isNaN(s)?t[r]:s}else if(r==="variable"&&a&&a!=="object"&&n){const s=n.getSource?n.getSource():null,l=n.get?.("_lastVariable")||(typeof s?.getBands=="function"?s.getBands():null)||s?.bands_||n.get?.("_jsonDefinition")?.source?.bands||n.get?.("source")?.bands,u=Array.isArray(l)&&l.length>0?l[0]:typeof l=="string"?l:void 0;u&&(!Array.isArray(e[r]?.enum)||e[r].enum.includes(u))?o[r]=u:e[r]?.default!==void 0?o[r]=e[r].default:Array.isArray(e[r]?.enum)&&e[r].enum.length>0&&(o[r]=e[r].enum[0])}else if(a&&a!=="object"&&e[r]?.default!==void 0)o[r]=e[r].default;else if(a&&a!=="object"&&Array.isArray(e[r]?.enum)&&e[r].enum.length>0)o[r]=e[r].enum[0];else{const s=Bi(ye(e[r],i),t,i,n);Object.keys(s).length>0&&(o[r]=s)}}return o}function Mo(e,t){if(e.startsWith("#/"))return e.slice(2).split("/").reduce((i,n)=>i?.[n.replace(/~1/g,"/").replace(/~0/g,"~")],t)}const ki=(e,t)=>e?.filter(i=>["remove","sort"].filter(n=>t?.get("layerControlDisable")?n!=="sort":!0).includes(i)),Ui=(e,t)=>e?.filter(i=>{let n=!0;return["remove","sort"].includes(i)&&(n=!1),i==="info"&&(n=t.get("description")),i==="config"&&(n=t.get("layerConfig")),i==="datetime"&&(n=t.get("layerDatetime")?.controlValues),i==="legend"&&(n=t.get("layerLegend")),n}),Ro=(e,t,i)=>h`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${i?e:h`<i class="small primary-text">${t}</i>`}
  </button>
`,ji=(e,t)=>h`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:i}=e;i?.set("layerControlOptional",!0),i?.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:i,bubbles:!0}))}}
  >
    ${e.unstyled?"x":h`<i class="small red-text">${t}</i>`}
  </button>
`,Fi=(e,t,i)=>h`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${i?"═":h`<i class="small primary-text">${t}</i>`}
  </button>
`;function zt(){return{dots:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const qi=e=>{const t=["layerControlHide","layerControlOptional"];return e?.getArray()?.filter(i=>t.every(n=>!i.get(n)))};function Oo(e,t){const i=e.get("layerDatetime")?.sliceMap;if(!i||!(t in i))return;const n=e.getSource?.();typeof n?.updateDimensions=="function"&&n.updateDimensions({time:i[t]})}function Zi(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}function ci(e,t){const i=Math.abs(t-e);return i===0?.01:i<=.01?1e-4:i<=.1?.001:i<=1?.01:i<=10?.1:1}function Po(e,t,i){if(Array.isArray(i)&&i.length===2&&typeof i[0]=="number"&&typeof i[1]=="number"&&!Number.isNaN(i[0])&&!Number.isNaN(i[1])){const u=i[0],c=i[1],d=ci(u,c);return{minProp:{type:"number",format:"number",title:"Min Value",default:e!==void 0?e:u,minimum:u,maximum:c,step:d},maxProp:{type:"number",format:"number",title:"Max Value",default:t!==void 0?t:c,minimum:u,maximum:c,step:d}}}const o=e!==void 0?e:0,r=t!==void 0?t:1,a=typeof e=="number"?Math.min(0,e):0,s=typeof t=="number"&&t>a?t:a+1,l=ci(a,s);return{minProp:{type:"number",format:"range",title:"Min Value",default:o,minimum:a,maximum:s,step:l},maxProp:{type:"number",format:"range",title:"Max Value",default:r,minimum:a,maximum:s,step:l}}}function me(e,t,i){const r=(e?.get?e.get("_geozarrVariables"):e?._geozarrVariables)?.[t]?.valid_range;let a,s;return Array.isArray(r)&&r.length===2&&typeof r[0]=="number"&&typeof r[1]=="number"&&!Number.isNaN(r[0])&&!Number.isNaN(r[1])&&(a=r[0],s=r[1]),{targetMin:a!==void 0?a:0,targetMax:s!==void 0?s:1}}async function Io(e,t){if(!e||!t)return;const i=e.getSource?e.getSource():null,n=e.get("_geozarrSourceUrl")||e.get("_jsonDefinition")?.source?.url||e.get("source")?.url||e.get("_geozarrRootUrl");let o=i;if(i){if(typeof i.setBands=="function")i.setBands([t]);else if(n&&i.constructor){const D=i.constructor,b=i.getProjection?.()||e.get("_mapProjection")||e.get("_jsonDefinition")?.source?.projection,L=new D({url:n,bands:[t],crossOrigin:"anonymous",...b?{projection:b}:{}});e.setSource(L),o=L}}if(typeof o?.ready=="function")try{await o.ready()}catch{}e.set("_lastVariable",t);const r=e.get("bands")||(Array.isArray(e.get("_jsonDefinition")?.source?.bands)?e.get("_jsonDefinition")?.source?.bands:null),a=Array.isArray(r)&&r.length>1?r:[t];e.get("bands")!==void 0&&e.set("bands",a),e.get("band")!==void 0&&e.set("band",t);const s=e.get("layerConfig"),{targetMin:l,targetMax:u}=me(e,t),d=(e?.get?e.get("_geozarrVariables"):e?._geozarrVariables)?.[t]?.valid_range,{minProp:m,maxProp:v}=Po(l,u,d);let g=s;if(s){const D=s?.autofill===!0||s?.schema?.autofill===!0;let b;s.schema?.properties&&(b={...s.schema.properties},b.variable&&(b.variable={...b.variable,default:t}),b.band&&(b.band={...b.band,default:t}),b.bands&&(b.bands={...b.bands,default:b.bands.type==="array"?a:a[0]}),b.redMax||b.greenMax||b.blueMax||((b.min!==void 0||D)&&(b.min={...b.min||{},...m,default:l}),(b.max!==void 0||D)&&(b.max={...b.max||{},...v,default:u}))),g={...s,bands:a,band:t,...D||s.min!==void 0?{min:l}:{},...D||s.max!==void 0?{max:u}:{},schema:b?{...s.schema,properties:b}:s.schema},e.set("layerConfig",g)}if(s?.autofill===!0||s?.schema?.autofill===!0||e.styleVariables_?.min!==void 0||e.styleVariables_?.max!==void 0||e.style_?.variables?.min!==void 0||e.style_?.variables?.max!==void 0||e.get?.("style")?.variables?.min!==void 0||e.get?.("style")?.variables?.max!==void 0||s?.schema?.properties?.min!==void 0||s?.schema?.properties?.max!==void 0){typeof e.updateStyleVariables=="function"&&e.updateStyleVariables({min:l,max:u}),e.styleVariables_&&(e.styleVariables_.min=l,e.styleVariables_.max=u),e.style_?.variables&&(e.style_.variables.min=l,e.style_.variables.max=u);const D=e.get?.("style");D?.variables&&(D.variables.min=l,D.variables.max=u)}if(o&&typeof o.getDimensions=="function")try{const D=await o.getDimensions();if(D){const b={};for(const[L,R]of Object.entries(D)){if(L==="time"||!R||R.size<=0)continue;b[L]=R;const j=e.get("layerConfig")||g,y=j?.autofill===!0||j?.schema?.autofill===!0;if(j?.schema?.properties&&(j.schema.properties[L]!==void 0||y)){const V=R.attributes?.long_name||L.charAt(0).toUpperCase()+L.slice(1),O=R.attributes?.units,T=O?`${V} (${O})`:V,P={...j.schema.properties};P[L]={type:"integer",title:T,default:0,minimum:0,maximum:R.size-1,step:1,format:"range",...P[L]||{}},g={...j,schema:{...j.schema,properties:P}},e.set("layerConfig",g)}typeof o.updateDimensions=="function"&&o.updateDimensions({[L]:0})}if(e.set("_geozarrDimensions",b),D?.time&&D.time.size>0){const L=D.time,{units:R}=L.attributes||{};let j=0,y=1e3;if(R&&typeof R=="string"&&R.includes(" since ")){const M=R.split(" since ");let I=M[1].trim();!I.includes("T")&&!I.includes("Z")&&(I=I.replace(" ","T")+"Z"),j=Date.parse(I)||0;const Q=M[0].toLowerCase();Q.includes("day")?y=86400*1e3:Q.includes("nanosecond")?y=1e-6:Q.includes("microsecond")?y=.001:Q.includes("millisecond")?y=1:Q.includes("second")&&(y=1e3)}const V=M=>typeof M=="string"?new Date(M):new Date(j+Number(M)*y),O=await Promise.all([...Array(L.size).keys()].map(async M=>{const I=typeof o.getValue=="function"?await o.getValue("time",M):M;return{index:M,date:V(I)}}));O.sort((M,I)=>M.date.getTime()-I.date.getTime());const T={},P=O.map(M=>{const I=M.date.toISOString();return T[I]=M.index,I}),X=e.get("layerDatetime")||{},et=X.currentStep&&P.includes(X.currentStep)?X.currentStep:P[0];e.set("layerDatetime",{showUTC:!0,slider:!0,navigation:!0,...X,controlValues:P,sliceMap:T,currentStep:et});const B=P.map(M=>({date:M}));e.set("timeControlValues",B);const W=T[et]??0;typeof o.updateDimensions=="function"&&o.updateDimensions({time:W})}}}catch(D){console.warn("Could not refresh GeoZarr dimensions for new band:",D)}return{targetMin:l,targetMax:u}}var Oe,di;function Ho(){if(di)return Oe;di=1;var e="Expected a function",t=NaN,i="[object Symbol]",n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l=typeof Qt=="object"&&Qt&&Qt.Object===Object&&Qt,u=typeof self=="object"&&self&&self.Object===Object&&self,c=l||u||Function("return this")(),d=Object.prototype,m=d.toString,v=Math.max,g=Math.min,S=function(){return c.Date.now()};function F(y,V,O){var T,P,X,et,B,W,M=0,I=!1,Q=!1,pt=!0;if(typeof y!="function")throw new TypeError(e);V=j(V)||0,b(O)&&(I=!!O.leading,Q="maxWait"in O,X=Q?v(j(O.maxWait)||0,V):X,pt="trailing"in O?!!O.trailing:pt);function It(z){var wt=T,Ht=P;return T=P=void 0,M=z,et=y.apply(Ht,wt),et}function Je(z){return M=z,B=setTimeout(Kt,V),I?It(z):et}function Gt(z){var wt=z-W,Ht=z-M,Qe=V-wt;return Q?g(Qe,X-Ht):Qe}function Jt(z){var wt=z-W,Ht=z-M;return W===void 0||wt>=V||wt<0||Q&&Ht>=X}function Kt(){var z=S();if(Jt(z))return Ke(z);B=setTimeout(Kt,Gt(z))}function Ke(z){return B=void 0,pt&&T?It(z):(T=P=void 0,et)}function zi(){B!==void 0&&clearTimeout(B),M=0,T=W=P=B=void 0}function Xi(){return B===void 0?et:Ke(S())}function we(){var z=S(),wt=Jt(z);if(T=arguments,P=this,W=z,wt){if(B===void 0)return Je(W);if(Q)return B=setTimeout(Kt,V),It(W)}return B===void 0&&(B=setTimeout(Kt,V)),et}return we.cancel=zi,we.flush=Xi,we}function D(y,V,O){var T=!0,P=!0;if(typeof y!="function")throw new TypeError(e);return b(O)&&(T="leading"in O?!!O.leading:T,P="trailing"in O?!!O.trailing:P),F(y,V,{leading:T,maxWait:V,trailing:P})}function b(y){var V=typeof y;return!!y&&(V=="object"||V=="function")}function L(y){return!!y&&typeof y=="object"}function R(y){return typeof y=="symbol"||L(y)&&m.call(y)==i}function j(y){if(typeof y=="number")return y;if(R(y))return t;if(b(y)){var V=typeof y.valueOf=="function"?y.valueOf():y;y=b(V)?V+"":V}if(typeof y!="string")return y===0?y:+y;y=y.replace(n,"");var O=r.test(y);return O||a.test(y)?s(y.slice(2),O?2:8):o.test(y)?t:+y}return Oe=D,Oe}var No=Ho();const fi=Wi(No);const oe=e=>e??_t;class Bo extends dt{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layer=null}#t=[];get layerLegend(){return this.#t?this.#t.length>1?this.#t:this.#t[0]:null}set layerLegend(t){t?Array.isArray(t)?this.#t=t.map((i,n)=>({id:(this.layer?.get("id")??"")+n,...i})):this.#t=[{id:(this.layer?.get("id")??"")+0,...t}]:this.#t=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{this.#t=this.#t?.map(t=>(this.offsetWidth!==t.width&&(t.width=this.offsetWidth),{...t})),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),h`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#i}
      </style>
      ${N(this.layerLegend,()=>h`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${this.#t.map((t,i,n)=>h`
                <color-legend
                  id="${t.id}"
                  width=${t.width??325}
                  scaleType="${oe(t.scaleType)}"
                  markType="${oe(t.markType)}"
                  titleText="${oe(t.title)}"
                  .range=${t.range}
                  .domain=${t.domain}
                  tickFormat="${oe(t.tickFormat)}"
                  .ticks=${t.ticks??5}
                  .tickValues=${t.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${i!==n.length-1?h`<div class="separator"></div>`:_t}
              `)}
          </div>
        `)}
    `}#e=Pe`
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
  `;#i=""}customElements.define("eox-layercontrol-layer-legend",Bo);class ko extends dt{static properties={layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};#t={};#e=null;#i;constructor(){super(),this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=fi(this.#r,1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}connectedCallback(){super.connectedCallback(),this.layer?.on&&this.layer.on("propertychange",this.#n)}disconnectedCallback(){super.disconnectedCallback(),this.layer?.un&&this.layer.un("propertychange",this.#n)}#n=t=>{if(t.key==="layerConfig"){this.layerConfig=this.layer.get("layerConfig");const n=Re(this.layer,this.layerConfig)||{},o=this.layerConfig?.schema?.properties,r=this.layerConfig?.autofill===!0||this.layerConfig?.schema?.autofill===!0;this.layerConfig?.min!==void 0&&(r||o?.min!==void 0)&&(this.#t.min=this.layerConfig.min),this.layerConfig?.max!==void 0&&(r||o?.max!==void 0)&&(this.#t.max=this.layerConfig.max);const a=this.layer.get("_lastVariable")||this.layerConfig?.band||(Array.isArray(this.layerConfig?.bands)?this.layerConfig.bands[0]:void 0);if(a&&(r||o?.variable!==void 0||o?.band!==void 0)&&(o?.band!==void 0?this.#t.band=a:this.#t.variable=a),this.#e={...this.#t,...n},o&&!r){const s=new Set(Object.keys(o));for(const l of Object.keys(this.#e))s.has(l)||delete this.#e[l]}this.#t={...this.#e},this.requestUpdate()}};updated(t){if(t.has("layer")){const i=t.get("layer");i?.un&&i.un("propertychange",this.#n),this.layer?.on&&this.layer.on("propertychange",this.#n)}if(t.has("layerConfig")){const i=this.layerConfig?.type==="style"||this.layerConfig?.style?100:1e3;this.throttleDataChange=fi(this.#r,i)}}async#r(t){const i=this.#t?.variable??this.#t?.band??this.layer?.get?.("_lastVariable")??this.layerConfig?.band??(Array.isArray(this.layerConfig?.bands)?this.layerConfig.bands[0]:void 0),n=t.detail?.variable??t.detail?.band,o=n!==void 0&&i!==void 0&&String(n)!==String(i);if(o){const{targetMin:r,targetMax:a}=me(this.layer,String(n),this.layerConfig);t.detail&&(("min"in t.detail||this.layerConfig?.min!==void 0)&&(t.detail.min=r),("max"in t.detail||this.layerConfig?.max!==void 0)&&(t.detail.max=a))}if(this.#t={...t.detail},this.layerConfig?.type==="style"||this.layerConfig?.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?await Do(this.#t,this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):this.#i=Vo(this.#t,this.#i,this),o){this.layerConfig=this.layer?.get?.("layerConfig")||this.layerConfig;const r=Re(this.layer,this.layerConfig)||{},a=this.layerConfig?.schema?.properties,s=this.layerConfig?.autofill===!0||this.layerConfig?.schema?.autofill===!0;if(this.#e={...this.#t,...r,...n&&(s||a?.variable!==void 0||a?.band!==void 0)?a?.band!==void 0?{band:n}:{variable:n}:{},...this.#t.min!==void 0&&(s||a?.min!==void 0)?{min:this.#t.min}:{},...this.#t.max!==void 0&&(s||a?.max!==void 0)?{max:this.#t.max}:{}},a&&!s){const u=new Set(Object.keys(a));for(const c of Object.keys(this.#e))u.has(c)||delete this.#e[c]}this.#t={...this.#e};const l=this.renderRoot?.querySelector("eox-jsonform");l?.editor&&!l.editor.destroyed&&l.editor.ready&&l.editor.setValue(this.#t)}this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:this.#t,layer:this.layer}})),this.requestUpdate()}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i={...Re(this.layer,this.layerConfig)||{},...this.#t},n=this.layerConfig?.schema?.properties,o=this.layerConfig?.autofill===!0||this.layerConfig?.schema?.autofill===!0;if(n&&!o){const s=new Set(Object.keys(n));for(const l of Object.keys(i))s.has(l)||delete i[l]}const r=Object.keys(i).length?i:null;JSON.stringify(r)!==JSON.stringify(this.#e)&&(this.#e=r),this.#t={...this.#e},customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const a={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0,no_additional_properties:!0};return h`
      <style>
        ${this.#o}
        ${!this.unstyled&&this.#a}
      </style>
      ${N(this.layerConfig,()=>h`
          ${N(this.layerConfig.legend,()=>h`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Lo(this.layerConfig.legend,this.#e,this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${this.#e}
            .options=${a}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}#o=Pe`
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
  `;#a=Pe`
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
  `}customElements.define("eox-layercontrol-layerconfig",ko);class Uo extends dt{static properties={unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}};constructor(){super(),this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}disconnectedCallback(){this.#t.flush(),super.disconnectedCallback()}#t=gi(Oo,300);#e(t){const i=new Date(t.detail.date[0]),n=this.layerDatetime.controlValues?.some(r=>typeof r=="string"&&r.includes("T"));let o;n?o=i.toISOString():o=(a=>`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`)(i),o!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:o,layer:this.layer}})),this.#t(this.layer,o),this.layerDatetime.currentStep=o,this.requestUpdate())}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),h`
      <style>
        ${this.#i}
        ${!this.unstyled&&this.#n}
      </style>
      ${N(this.layerDatetime?.controlValues,()=>h`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(t=>({date:t}))}]}
            @select=${this.#e}
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
    `}#i="";#n=""}customElements.define("eox-layercontrol-layer-datetime",Uo);class jo extends dt{static properties={actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}};constructor(){super(),this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t=t=>(this.selectedTab===t||this.toolsAsList)&&"highlighted";render(){const t=this.tabs,i=this.actions,n=i.length+t.length>1;return h`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#i}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${N(n,()=>h`
            <nav>
              ${N(!this.toolsAsList,()=>h`
                  <div>
                    <!-- Labels for tabs -->
                    ${re(t,(o,r)=>h`
                        <label
                          class=${this.#t(r)}
                          @click=${()=>this.selectedTab=r}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${o}-icon`}>${o}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${re(i,o=>h`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${o}-icon`}>${o}</slot>
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
          ${re(t,(o,r)=>h`
              ${N(this.toolsAsList,()=>h`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${o}-icon`}>${o}</slot>
                    <span>${o}</span>
                  </label>
                `)}
              <div class="tab ${this.#t(r)}">
                <!-- Content slot for each tab -->
                <slot name=${`${o}-content`}>${o}</slot>
              </div>
              ${N(this.toolsAsList&&r<t.length-1,()=>h`<hr class="small" />`)}
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
  `;#i=`
    ${je}
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
  `}customElements.define("eox-layercontrol-tools-items",jo);class Fo extends dt{static properties={layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{const t=this.parentElement||this.getRootNode()?.host;this.embedded=t?.tagName==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!this.layer?.getVisible():this.embedded===!1?!0:!!this.layer?.get("layerControlToolsExpand"))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layer?.on?.("propertychange",t=>{const i=t;(i.key==="layerConfig"||i.key==="layerDatetime"||i.key==="timeControlValues")&&this.requestUpdate()})}updated(t){this.toolsAutoExpand&&(t.has("toolsAutoExpand")||t.has("layer"))&&(this.open=!!this.layer?.getVisible())}#t(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail.jsonformValue,layer:t.detail.layer}}))}_removeButton=t=>ji(this,t);_sortButton=t=>Fi(this,t,this.unstyled);_button=(t,i)=>Ro(t,i,this.unstyled);_getDefaultTools=t=>h`
      <div slot="info-content">
        ${Qi(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Ie(this.layer?.getOpacity())}
            class="tiny max"
            @input=${i=>{this.layer.setOpacity(parseFloat(i.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(this.layer?.getOpacity()*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${N(this.layer.get("layerConfig"),()=>h`
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
        ${N(this.layer.get("layerDatetime"),()=>h`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${i=>Zi(i,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${N(this.layer.get("layerLegend"),()=>h`
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
    `;render(){const t=ki(this.tools,this.layer),i=Ui(this.tools,this.layer),n=t?.length,o=i?.length;return h`
      <style>
        ${this.#e}
        ${!this.unstyled&&this.#i}
      </style>
      ${N(n+o>0,()=>h`
          ${N(!(n===1&&o===0),()=>h`
              <details
                class="tools"
                .open=${Ie(this.open)}
                @toggle=${r=>{this.open=r.target.open}}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${t}
                  .tabs=${i}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${re(i,r=>this._button(r,zt()[r]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(zt())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}#e="";#i=`
    ${this.embedded?"":je}
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
  `}customElements.define("eox-layercontrol-layer-tools",Fo);const qo=e=>{const t=()=>{const i=_o(e.layer,e.map,e.showLayerZoomState);let n=!1;!i&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):i&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Ni(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t())),e.layer?.on?.("propertychange",i=>{const n=i;(n.key==="layerDatetime"||n.key==="layerConfig"||n.key==="timeControlValues")&&e.requestUpdate()})},Zo=(e,t)=>{const i=t.layer;if(i.setVisible(e.target.checked),t.toolsAutoExpand){const n=t.renderRoot.querySelector("eox-layercontrol-layer-tools");n&&(n.open=e.target.checked)}e.target.checked&&i.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(o=>{if(o.layer!==i&&o.layer?.get("layerControlExclusive")){if(o.layer.setVisible(!1),o.toolsAutoExpand){const r=o.renderRoot.querySelector("eox-layercontrol-layer-tools");r&&(r.open=!1)}o.requestUpdate()}}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:i})),t.requestUpdate()};class zo extends dt{static properties={layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};currLayerVisibilityBasedOnZoom=!0;constructor(){super(),this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}#t(t){return this.layer?.get(t)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){qo(this)}#e(t){Zo(t,this)}render(){const t=this.layer.getVisible(),i=t?"visible":"",n=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",o=this.#t("layerControlDisable")?"disabled":"",r=this.#t("layerControlExclusive")?"radio":"checkbox",a=ki(this.tools,this.layer)?.length>0,s=Ui(this.tools,this.layer)?.length>0,l=document.querySelector("eox-layercontrol-layer-tools");return l&&Object.assign(l,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),h`
      <style>
        ${this.#i}
        ${!this.unstyled&&this.#n}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${N(this.layer,()=>h`
          <!-- Render the layer -->
          <nav
            class="layer ${o} ${i} ${n} responsive tiny-space"
          >
            ${N(!this.unstyled,()=>{if(this.#t("color"))return h`
                  <i class="small" style="color: ${this.#t("color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return h` <i class="small"> </i> `;case"draw":return h`
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
                  `;case"vector":return h`
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
                  `;case"raster":return h`
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
                  `;default:return h` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${o}">
              <span class="layertitle truncate"
                >${this.#t(this.titleProperty)}</span
              >
            </div>

            ${N(s&&!this.toolsAutoExpand,()=>h`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const u=this.renderRoot.querySelector("eox-layercontrol-layer-tools");u.open=!u.open}}
                >
                  <i class="small">
                    ${zt()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${N(!s&&a,()=>this.tools[0]==="remove"?ji(this,zt()[this.tools[0]]):Fi(this,zt()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${o} ${r} icon primary-text action visibility small"
            >
              <input
                type=${r}
                .checked=${Ie(t)}
                @click=${this.#e}
                disabled=${o||_t}
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
      ${N(s&&!l,()=>h`
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
    `}#i="";#n=`
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
  `}customElements.define("eox-layercontrol-layer",zo);class Xo extends dt{static properties={group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=!!this.group?.get("layerControlExpand"),i=qi(this.group.getLayers())?.length;return h`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      ${N(this.group,()=>h`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${t||_t}
            data-children-length=${i}
          >
            <summary class="square">
              ${N(i>0,()=>h`
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
  `}customElements.define("eox-layercontrol-layer-group",Xo);const Yo=e=>{const{layers:t,idProperty:i,titleProperty:n,renderRoot:o}=e,r=gi(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&t?.un("change:length",a),t.on("change:length",a),t)){const s=o.querySelector("ul");$o(t,i,n,e),Ao(s,t,i,e)}};class Wo extends dt{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}};constructor(){super(),this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){Yo(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.layers?qi(this.layers).reverse():[];return h`
      <style>
        ${this.#t}
        ${!this.unstyled&&this.#e}
      </style>
      <ul class="list no-space">
        ${N(this.layers,()=>h`
            ${Ki(t,i=>i,i=>h`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${ui(i,this.map)}"
                  class="square"
                >
                  ${i.getLayers?h`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${i}
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
                        `:h`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${i}
                            .layerType=${ui(i,this.map)}
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
  `}customElements.define("eox-layercontrol-layer-list",Wo);const Go=e=>{const t=e.querySelector("select[name=optional]"),i=t?t.value:null,n=We(e.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(e.idProperty)||o.ol_uid)===i);n?.set("layerControlOptional",!1),n?.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),e.requestUpdate()};class Jo extends dt{static properties={idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}};constructor(){super(),this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(){Go(this)}render(){const t=We(this.layers.getArray(),"layerControlOptional",!0);return h`
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
            ${t.map(i=>{const n=i.get(this.idProperty)||i.ol_uid,o=i.get(this.titleProperty),r=`layer ${i.get(this.idProperty)}`;return h` <option value="${n}">${o||r}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${this.#t}">Add</button>
      </nav>
    `}}customElements.define("eox-layercontrol-optional-list",Jo);const Ko=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},hi=e=>{const t=JSON.parse(`{"data":${Ei(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(i=>{e.eoxMap.addOrUpdateLayer(i)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},Qo=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function tr(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(qe(t)==="XYZ")return{Name:t};try{const i=await zn(t);e.wmsCapabilities=i}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const er=(e,t)=>{const{Name:i}=e,n=qe(t.urlInput)||"XYZ",o={type:"Tile",properties:{id:i,title:i},source:{type:n,url:t.urlInput,params:{LAYERS:i}}};t.jsonInput=JSON.stringify(o)},ir=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};class nr extends dt{static properties={eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}};urlInput=null;jsonInput=null;open=null;searchLoad=!1;wmsCapabilities=null;constructor(){super(),this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}#t(t){Qo(t,this)}async#e(){const t=await tr(this);t&&this.#i(t)}#i(t){er(t,this),hi(this)}#n(){hi(this)}#r(t){Ko(t,this)}#o(t){ir(t,this)}render(){const t={add:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},i=this.open?"open":"close",n=this.open==="url",o=this.open==="json",r=!Xn(this.urlInput)||this.searchLoad?!0:_t;return h`
      <style>
        ${this.#a}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${i}"
          >
            <a
              @click=${()=>this.#o("url")}
              class="${n?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>this.#o("json")}
              class="${o?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>this.#o(this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":h`<i class="small primary-text">${t.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${i}" style="padding: 15px 0">
          ${n?h`
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
                    ${this.unstyled?"Search":h`<i class="small">${t.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?h`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(a=>{const s=a.Name;return h`
                            <li class="search-list">
                              ${s}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>this.#i(a)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:_t}
              `:h`
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
                  disabled=${Yn(this.jsonInput)?_t:!0}
                  @click=${this.#n}
                >
                  ${this.unstyled?"Add JSON":h`<i class="small">${t.plus}</i>`}
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
  `}customElements.define("eox-layercontrol-add-layers",nr);const or=(e,t)=>{t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"&&t.renderRoot.querySelector("eox-layercontrol-optional-list")?.requestUpdate()},pi=e=>{const t=Gi(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};Ji();class rr extends dt{static properties={for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}};#t;constructor(){super(),this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=pi(this)}updated(t){t.has("for")&&(this.eoxMap=pi(this))}get eoxMap(){return this.#t}set eoxMap(t){const i=this.#t;this.#t=t,this.requestUpdate("eoxMap",i)}#e(t){or(t,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:t.detail}))}#i(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:t.detail}))}render(){const t=this.map?.getLayers().getArray(),i=t&&We(t,"layerControlOptional",!0)?.length>0;return h`
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
      ${N(this.addExternalLayers&&this.#t?.addOrUpdateLayer,()=>h`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${this.#t}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${N(this.map,()=>h`
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
            @datetime:updated=${n=>Zi(n,this)}
            @layerConfig:change=${this.#i}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${N(i,()=>h`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}#n=`
    ${je}
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
  `}customElements.define("eox-layercontrol",rr);export{rr as EOxLayerControl,To as updateVectorLayerStyle};
