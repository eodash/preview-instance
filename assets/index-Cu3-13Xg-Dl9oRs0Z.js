import"./main-BwHIIjXa.js";import{A as F,a as k,b as d,c as X,e as Y}from"./addCommonStyleSheet-xNxGAsM0.js";import{e as D,i as E}from"./directive-CwRn8Fwj.js";import{p as T}from"./directive-helpers-DyV73Z3p.js";import{n as V}from"./when-CI7b_ccM.js";import{aw as ee,av as te}from"./intersectsextent-D03KA33t.js";import{g as se}from"./getElement-CdRlZPdn.js";import{k as ae,W as re,y as ie}from"./WKT-ClhfOfGp.js";import"./main-BDiAP4q1.js";import{_ as ne,b as oe,s as le,e as ce,R as de,N as ue,ak as pe,L as he,g as w,h as N,i as ye,q as S,v as H,aI as me,p as L,m as fe,k as O,aJ as J,aK as ge,V as G,aL as ve,o as we,M as Fe,aM as be,aF as Se,w as U,I as He,B as f,C as I,ah as Ve,aN as Le,aO as Ie}from"./index-Blt6j4zJ.js";import{c as Me,j as ke,P as $e}from"./ProcessList-CTTIZa06-B6lXKlke.js";import Ce from"./EodashChart-CLDqE93C-CLXSyGT6.js";import{i as x,u as Be,h as Ae}from"./handling-BrcDDlgS-DVjesan-.js";import{g as Ne,u as Oe,d as Je}from"./async-DSKj6g1f-C-RnGBcT.js";import"./sequential-DDW98mYE.js";import"./orient2d-DArCjZZA.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import"./utils-CJZBDejC.js";import"./index-2GfG_t-c.js";import"./index-DrCSUysz.js";import"./index-CUjl-ZsI-DHh8PTji.js";import"./VTooltip-CJw2FyWk-DkP2f0Bq.js";import"./forwardRefs-DH51zPUr-ChhIa8eF.js";import"./transition-OHcz5Qq1-DvoMWMBV.js";const Ge=D(class extends E{constructor(){super(...arguments),this.key=F}render(e,t){return this.key=e,t}update(e,[t,s]){return t!==this.key&&(T(e),this.key=t),s}}),Ue=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const t=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",t),e.clickInteraction.selectStyleLayer.on("change",t)},xe=(e,t,s)=>{if(e.clickId===t)return;const a=s?[]:[t];e.hoverInteraction.highlightById(a)},Pe=(e,t,s)=>{e.stopPropagation();const a=Number(e.target.getAttribute("index")),r=t.drawLayer.getSource().getFeatures()[a];t.drawLayer.getSource().removeFeature(r),t.drawnFeatures.splice(a,1),s.emitDrawnFeatures(),t.requestUpdate()},P={duration:750,padding:[20,20,20,20]},j={type:"FeatureCollection",features:[]},je=(e,t)=>{const{clickId:s,drawLayer:a,olMap:r,clickInteraction:i}=t,n=i.getId(e);if(s===n){const l=a.getSource().getExtent();r.getView().fit(l,P),i.highlightById([])}else{const l=t.eoxMap.projection||"EPSG:3857",c=t.eoxDrawTools.projection,p=e.clone().getGeometry().transform(c,l).getExtent();i.highlightById([n]),r.getView().fit(p,P)}t.requestUpdate()};class _e extends k{static properties={eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}};hoverInteraction;clickInteraction;hoverId;clickId;constructor(){super(),this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){Pe(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){je(t,this)}_handleHoverFeature(t,s=!1){xe(this,t,s)}firstUpdated(){Ue(this)}createRenderRoot(){return this}render(){this.hoverId=this.hoverInteraction?.selectedFids[0],this.clickId=this.clickInteraction?.selectedFids[0];const t=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return d`
      <ul class="list no-space">
        ${this.drawnFeatures.map((s,a)=>{const r=a+1,i=Object.values(this.eoxMap.selectInteractions)[0].getId(s),n=this.hoverId===i,o=this.clickId===i,l=n?"surface-container-low":o?"fill":F,c=this.featureNameKey?.split("."),p=s.get(this.featureNameKey)||c?.reduce((v,m)=>v?.[m],{...s.getProperties()}),y=p||`${this.featureName} ${r}`;return Ge(r,d`
              <li
                class="${l} no-round"
                @mouseover=${()=>this._handleHoverFeature(i)}
                @mouseout=${()=>this._handleHoverFeature(i,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(s)}"
              >
                <div class="max">
                  <span class="title">${y}</span>
                </div>
                <button
                  index=${a}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":d`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}customElements.define("eox-drawtools-list",_e);const qe=e=>{const{multipleFeatures:t,drawnFeatures:s,currentlyDrawing:a}=e,r=!t&&s?.length>0||a,i=!s?.length&&!a;return{drawDisabled:r,discardDisabled:i}};function Ke(e){navigator.clipboard.writeText(e).then(function(){},function(t){console.error("Could not copy text: ",t)})}const Re=(e,t)=>new ae().writeFeaturesObject(e,t),Ze=(e,t)=>new re().writeFeatures(e,t);class ze extends k{static properties={multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}};#e=!0;#t=!0;constructor(){super(),this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:s}=qe(this);this.#e=t,this.#t=s}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",s={Polygon:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:d`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:d`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:d`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:d`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},a=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,r=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,i=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,n=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,o=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return d`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${this.#e||F}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:d`
                  <i class="small"
                    >${this.select?a:s[this.type]}</i
                  >
                  <span class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </span>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${this.#t||F}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":d`
                  <i class="small">${r}</i>
                  <span class="tooltip bottom">Discard</span>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${V(this.showEditor,()=>d`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":d`
                    <i class="small">${i}</i>
                    <span class="tooltip bottom">Edit features</span>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${V(this.importFeatures,()=>d`
            <!-- Import Input Field : Hidden -->
            <input
              type="file"
              id="import-file"
              style="display: none;"
              @change=${this.drawFunc.import}
            />

            <!-- Main Import Button -->
            <button
              data-cy="importBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Import features":""}"
              @click=${()=>this.querySelector("#import-file").click()}
            >
              ${this.unstyled?"import":d`
                    <i class="small">${n}</i>
                    <span class="tooltip bottom">Import features</span>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${V(this.showEditor,()=>d`
          <div id="editor" class="field border extra hidden">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace; font-size: small; line-height: 1.4; padding: 0.4rem;"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin aloha"
              style="z-index: 1"
              @click=${()=>Ke(this.geoJSON)}
            >
              ${this.unstyled?"copy":d`
                    <i class="tiny">${o}</i>
                    <span class="tooltip top">Copy</span>
                  `}
            </button>
          </div>
        `)}
    `}}customElements.define("eox-drawtools-controller",ze);X();const We=`
  ${Y}
  :host {
    --padding: 0.5rem;
  }
  .drawtitle {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .hidden {
    display: none;
  }
`,Qe=e=>{(()=>{if(e.emitDrawnFeatures(),!e.multipleFeatures)e.draw?.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const a=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!a)return;e.drawLayer.getSource().addFeature(a),e.drawnFeatures=[a]}})(),e.requestUpdate()},Xe=e=>{const t=()=>{e.drawLayer.set("isDrawingEnabled",!0),e.draw?.setActive(!0),e.selectionEvents.addSelectionEvent()},s=()=>{e.currentlyDrawing=!0,e.requestUpdate()};t(),s()},M=(e,t,s)=>{if(!s||!t)return;const a=t.getLayerById(s),r=a?JSON.parse(JSON.stringify(a.get("_jsonDefinition"))):null;if(!r){console.error(`Layer with id ${s} not found`);return}const i={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:e.featureStyles?.hover||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},n={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:e.featureStyles?.click||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};r.interactions=[i,n],t.addOrUpdateLayer(r),K(t.layers,s,[r]);const o=e.draw;e.draw=t.selectInteractions.SelectLayerClickInteraction,o?.setActive(!1),t.selectInteractions.SelectLayerClickInteraction?.setActive(!1),t.selectInteractions.SelectLayerHoverInteraction?.setActive(!1)};function K(e,t,s){const a=e.findIndex(r=>r.properties.id===t);if(a!==-1)return e.splice(a,1,...s),e;for(const r of e)if(r.type==="Group"){const i=K(r.layers,t,s);i?.length&&(r.layers=i)}return e}const g=e=>{const t=e.getGeometry();if(!t)return;let s="";if(t.getType()==="Polygon"||t.getType()==="MultiPolygon"){const a=ee(t);a>1e6?s=(a/1e6).toFixed(2)+" km²":s=a.toFixed(2)+" m²"}else if(t.getType()==="LineString"||t.getType()==="MultiLineString"){const a=te(t);a>1e3?s=(a/1e3).toFixed(2)+" km":s=a.toFixed(2)+" m"}else if(t.getType()==="Circle"){const a=t.getRadius(),r=Math.PI*Math.pow(a,2);r>1e6?s=(r/1e6).toFixed(2)+" km²":s=r.toFixed(2)+" m²"}s&&e.get("measure")!==s&&e.set("measure",s)},Ye=e=>{const t=e.drawLayer.getSource(),s=a=>{const r=a.feature;r&&(g(r),r.getGeometry().on("change",()=>g(r)))};t.on("addfeature",s),t.getFeatures().forEach(a=>{g(a),a.getGeometry().on("change",()=>g(a))})},_=(e,t)=>{const a=se(e.for),r=a.map,i="0, 65, 112";e.drawLayer=a.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:t},source:{type:"Vector"},style:e.featureStyles?.layer||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:e.featureStyles?.layer||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},...e.layerId?[]:[{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:e.featureStyles?.hover||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:e.featureStyles?.click||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]]}),e.draw=a.interactions.drawInteraction,e.modify=a.interactions.drawInteraction_modify,M(e,a,e.layerId),e.measure&&Ye(e);const n=()=>e.onModifyEnd(),o=()=>Qe(e);return e.modify?.on("modifyend",n),e.measure&&e.draw&&typeof e.draw.on=="function"&&e.draw.on("drawstart",c=>{const p=c.feature;g(p),p.getGeometry().on("change",()=>g(p))}),a.addEventListener("addfeatures",o),{EoxMap:a,OlMap:r,reset:c=>{!c.eoxMap||!c.drawLayer||(c.drawLayer.getSource().clear(),c.eoxMap.map.removeLayer(c.drawLayer),c.modify?.un("modifyend",n),c.eoxMap.removeEventListener("addfeatures",o),c.layerId||(c.draw=null),c.modify=null)}}},De=e=>{const t=()=>{e.drawnFeatures=[],e.draw?.setActive(!1),e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},s=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};t(),s()},Ee=(e,t)=>{setTimeout(()=>{const a=e.drawLayer.getSource().getFeatures(),r=e.eoxMap.projection||"EPSG:3857",i=e.projection,n=i?a.map(l=>{l=l.clone();const c=l.getGeometry().transform(r,i);return l.setGeometry(c),l}):a;e.setDrawnFeaturesInternal?e.setDrawnFeaturesInternal(n):e.drawnFeatures=n;let o;switch(e.format){case"geojson":o=Re(e.drawnFeatures);break;case"wkt":o=Ze(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),t(o)},0)},Te=e=>{const t=r=>{r?.detail.id!=="SelectLayerClickInteraction"||!r.detail.feature||(typeof r.detail.feature.getGeometry().getCoordinates!="function"&&(r.detail.feature=ie(r.detail.feature)),e.drawLayer.getSource().addFeature(r.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:r.detail})))};return{addSelectionEvent:()=>{e.layerId&&(e.eoxMap.selectInteractions.SelectLayerHoverInteraction?.setActive(!0),e.eoxMap.addEventListener("select",t))},removeSelectionEvent:()=>{const r=e.eoxMap.selectInteractions?.SelectLayerHoverInteraction;r&&(r.selectedFids=[],r?.setActive(!1)),e.eoxMap.removeEventListener("select",t)}}},et=(e,t,s,a)=>{if(t){if(s){a&&s!==a&&q(e,t),M(e,t,s);return}if(!s&&a){q(e,t);return}}};function q(e,t){t&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=t.interactions.drawInteraction,t.selectInteractions.SelectLayerClickInteraction.remove(),t.selectInteractions.SelectLayerHoverInteraction.remove())}const R=e=>{e.currentlyDrawing&&(e.draw?.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())},tt=(e,t)=>{e.key==="Escape"&&R(t)};function st(e,t){const s=e.drawnFeatures.indexOf(t);s>-1&&Z(e,s)}function Z(e,t){if(t>-1&&t<e.drawnFeatures.length){const s=[...e.drawnFeatures];s.splice(t,1),e.drawnFeatures=s,e.emitDrawnFeatures()}}function at(e,t){function s(i){i.preventDefault(),i.stopPropagation()}function a(i){i.srcElement.style.opacity="0.4"}function r(i){i.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(i=>{t.addEventListener(i,s,!1),["dragenter","dragover"].includes(i)?t.addEventListener(i,a,!1):t.addEventListener(i,r,!1)}),t.addEventListener("drop",i=>z(i,e),!1)}function rt(e){e.preventDefault(),e.stopPropagation()}function z(e,t){rt(e);let s;"dataTransfer"in e&&e.dataTransfer?s=e.dataTransfer.files:e.target&&"files"in e.target?s=e.target.files:s=[],Array.from(s).forEach(a=>it(a,t)),e.target&&"value"in e.target&&(e.target.value="")}function it(e,t){const s=new FileReader;s.readAsText(e),s.onloadend=function(){typeof s.result=="string"&&t.handleFeatureChange(s.result)}}class nt extends k{static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}#e;#t;#i;#s;#a=!1;#n;#r=[];#o=t=>tt(t,this);constructor(){super(),this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}set continuous(t){this.#n=t,t&&(this.multipleFeatures=!0)}get continuous(){return this.#n}setDrawnFeaturesInternal(t){this.#a=!0,this.drawnFeatures=t,this.#a=!1}set drawnFeatures(t){const s=this.#r;if(this.#r=t,this.drawLayer&&!this.#a){if(this.drawLayer.getSource().clear(),t?.length){const a=this.eoxMap?.projection||"EPSG:3857",r=this.projection||"EPSG:4326";let i=t;a!==r&&(i=t.map(n=>{n=n.clone();const o=n.getGeometry().transform(r,a);return n.setGeometry(o),n})),this.drawLayer.getSource().addFeatures(i)}this.updateGeoJSON()}this.requestUpdate("drawnFeatures",s)}get drawnFeatures(){return this.#r}set layerId(t){et(this,this.eoxMap,t,this.#s),this.#s=t}get layerId(){return this.#s}startDrawing(){Xe(this)}stopDrawing(){R(this)}discardDrawing(){De(this)}removeFeature(t){st(this,t)}removeFeatureByIndex(t){Z(this,t)}handleFeatureChange(t,s=!1,a=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(j),this.drawLayer,this.eoxMap,s,a)}handleFilesChange(t){z(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){this.#i=JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||j,void 0,2)}emitDrawnFeatures(){Ee(this,s=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:s}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);const{EoxMap:t,OlMap:s,reset:a}=_(this,this.multipleFeatures);this.resetLayer=a,this.eoxMap=t,this.#t=s}firstUpdated(){this.updateLayer(),this.selectionEvents=Te(this),this.importFeatures&&at(this,this.eoxMap),this.drawnFeatures?.length>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(t){((a=>t.has(a)&&t.get(a)!==void 0)("for")||t.has("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return this.#e}set eoxMap(t){const s=this.#e;this.#e=t,this.requestUpdate("eoxMap",s)}connectedCallback(){if(super.connectedCallback(),document.addEventListener("keydown",this.#o),this.drawLayer&&this.eoxMap){const{reset:t}=_(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.#o),this.resetLayer?.(this)}render(){return d`
      <style>
        :host { display: block; }
        ${!this.unstyled&&We}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:t=>this.handleFeatureChange(t.target.value,!0),import:t=>this.handleFilesChange(t)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${this.#i}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&this.drawnFeatures?.length?d`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${this.#t}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:F}
    `}}customElements.define("eox-drawtools",nt);const ot=({selectedStac:e,jsonformSchema:t,isProcessed:s,processResults:a,loading:r,isPolling:i,mapElement:n})=>{we(async()=>{await x({enableCompare:n.value?.id==="compare",selectedStac:e,jsonformSchema:t,isProcessed:s,processResults:a,loading:r,isPolling:i,mapElement:n.value})}),Fe(async o=>{const l=n.value?.id==="compare",c=l?"compareLayers:updated":"layers:updated";if((l?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(o)){const y=await Be({jsonformSchema:t.value,newLayers:l?be():Se(),enableCompare:l,mapElement:n.value});y&&(t.value=y)}o===c&&await x({enableCompare:l,selectedStac:e,jsonformSchema:t,isProcessed:s,processResults:a,loading:r,isPolling:i,mapElement:n.value})})};function lt(e,t,s,a){const r=async n=>{await a()};U(s,n=>{e.value=n?.options?.execute||!1});const i=U([e,t],async([n,o],[l,c])=>{c&&c.removeEventListener("change",r),n&&o&&(o.removeEventListener("change",r),await Ve(),o.addEventListener("change",r))},{immediate:!0});He(()=>{t.value&&t.value.removeEventListener("change",r),i()})}const ct="eox-jsonform{padding:.7em;min-height:0px}",dt={ref:"container",class:"py-1"},ut=[".schema"],pt={class:"text-right"},ht={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(e){const t=f(!1),s=f(null),a=oe("jsonformEl"),r=I(()=>p.value?.links.filter(h=>h.endpoint==="eoxhub_workspaces").length),i=f(!1),n=f(!1),o=f(!1),l=f([]),c=I(()=>!n.value&&!!s.value&&!!a.value),{selectedStac:p,selectedCompareStac:y}=le(ce()),v=e.enableCompare?y:p,m=e.enableCompare?de:ue,$=e.enableCompare?pe:he,C=e.enableCompare?Me:ke,W=I(()=>$.value+m.value?.id+JSON.stringify(s.value));ot({selectedStac:v,mapElement:m,jsonformSchema:s,isProcessed:t,processResults:l,loading:i,isPolling:o});const Q=()=>{l.value.forEach(h=>{if(!h)return;let u="";typeof h=="string"?(u=h.includes("/")?h.split("/").pop()??"":h,u=u.includes("?")?u.split("?")[0]:u):u=v.value?.id+"_process_results.json",Je(u,h)})},B=async()=>{if(Ne(s.value).some(b=>Array.isArray(a.value?.value[b])&&!a.value?.value[b].length)){t.value=!1;const b=e.enableCompare?Le:Ie;b.value=null;return}const A=a.value?.editor.validate();if(A?.length){console.warn("[eodash] Form validation failed",A);return}l.value=[],await Ae({jobs:C,selectedStac:v,jsonformEl:a,jsonformSchema:s,loading:i,isPolling:o,processResults:l,mapElement:m.value}),t.value=!0,r.value&&Oe(C,$.value)};return lt(n,a,s,B),(h,u)=>(w(),N("div",dt,[ye($e,{"map-element":S(m),"enable-compare":e.enableCompare},null,8,["map-element","enable-compare"]),s.value?(w(),N("eox-jsonform",{key:W.value,ref_key:"jsonformEl",ref:a,".schema":s.value},null,40,ut)):H("v-if",!0),S(me)?H("v-if",!0):(w(),L(Ce,{key:1,"vega-embed-options":e.vegaEmbedOptions,"enable-compare":e.enableCompare},null,8,["vega-embed-options","enable-compare"])),fe("div",pt,[c.value?(w(),L(G,{key:0,loading:i.value,style:{"margin-right":"8px"},"append-icon":[S(ge)],onClick:B,density:"comfortable",size:"small"},{default:O(()=>[...u[0]||(u[0]=[J(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):H("v-if",!0),l.value.length&&t.value&&!r.value?(w(),L(G,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[S(ve)],onClick:Q,size:"small",density:"comfortable"},{default:O(()=>[...u[1]||(u[1]=[J(" Download ",-1)])]),_:1},8,["append-icon"])):H("v-if",!0)])],512))}},xt=ne(ht,[["styles",[ct]]]);export{xt as default};
