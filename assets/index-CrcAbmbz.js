import"./main-BOVsXhwx.js";import{E as w,i as k,x as l,a as W}from"./addCommonStyleSheet-Yq-7s86-.js";import{e as Q,i as X}from"./directive-CwRn8Fwj.js";import{m as Y}from"./directive-helpers-BBe88Per.js";import{n as F}from"./when-CI7b_ccM.js";import{e as E}from"./style-DKU08UVs.js";import{g as D}from"./getElement-CdRlZPdn.js";import{G as T,W as ee,t as te}from"./WKT-DVs97ZYK.js";import"./main-DTG7On6E.js";import{o as _,aA as ae,aa as O,bH as se,a8 as re,bI as ie,a9 as ne,n as oe,b as J,f as le,x as S,d as L,A as ce,w as U,bJ as de,a1 as j,bK as ue,L as pe,M as I,e as v,aE as G}from"./main-DqshxVGm.js";import{c as he,j as ye,_ as me}from"./ProcessList-vUQpH2JU.js";import fe from"./EodashChart-BAL0PqUL.js";import{i as M,u as ge,h as ve}from"./handling-CzGXlg0w.js";import{i as we,u as be,m as He}from"./async-QVBEMS-r.js";import{K as Se,z as Ve,o as Fe,p as Le,u as V,e as Ie,b as f,i as Me,j as $e}from"./templates-BBKD2u9z.js";import"./sequential-w-Nnb9-P.js";import"./orient2d-DArCjZZA.js";import"./extent-CNYecLM1.js";import"./editor-CCHS57uz.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import"./utils-CSwSEuV8.js";import"./index-DTQ4VNEA.js";import"./index-gcynG9vV.js";import"./VTooltip-pwRoihMw.js";import"./forwardRefs-7tU8JLiX.js";import"./transition-D8AvBryZ.js";const Ce=Q(class extends X{constructor(){super(...arguments),this.key=w}render(e,t){return this.key=e,t}update(e,[t,a]){return t!==this.key&&(Y(e),this.key=t),a}}),ke=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const t=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",t),e.clickInteraction.selectStyleLayer.on("change",t)},Be=(e,t,a)=>{if(e.clickId===t)return;const s=a?[]:[t];e.hoverInteraction.highlightById(s)},Ae=(e,t,a)=>{e.stopPropagation();const s=Number(e.target.getAttribute("index")),i=t.drawLayer.getSource().getFeatures()[s];t.drawLayer.getSource().removeFeature(i),t.drawnFeatures.splice(s,1),a.emitDrawnFeatures(),t.requestUpdate()},P={duration:750,padding:[20,20,20,20]},q={type:"FeatureCollection",features:[]},Ne=(e,t)=>{const{clickId:a,drawLayer:s,olMap:i,clickInteraction:r}=t,n=r.getId(e);if(a===n){const c=s.getSource().getExtent();i.getView().fit(c,P),r.highlightById([])}else{const c=t.eoxMap.projection||"EPSG:3857",d=t.eoxDrawTools.projection,u=e.clone().getGeometry().transform(d,c).getExtent();r.highlightById([n]),i.getView().fit(u,P)}t.requestUpdate()};class Oe extends k{static properties={eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}};hoverInteraction;clickInteraction;hoverId;clickId;constructor(){super(),this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){Ae(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){Ne(t,this)}_handleHoverFeature(t,a=!1){Be(this,t,a)}firstUpdated(){ke(this)}createRenderRoot(){return this}render(){this.hoverId=this.hoverInteraction?.selectedFids[0],this.clickId=this.clickInteraction?.selectedFids[0];const t=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return l`
      <ul class="list no-space">
        ${this.drawnFeatures.map((a,s)=>{const i=s+1,r=Object.values(this.eoxMap.selectInteractions)[0].getId(a),n=this.hoverId===r,o=this.clickId===r,c=n?"surface-container-low":o?"fill":w,d=this.featureNameKey?.split("."),u=a.get(this.featureNameKey)||d?.reduce((m,y)=>m?.[y],{...a.getProperties()}),g=u||`${this.featureName} ${i}`;return Ce(i,l`
              <li
                class="${c} no-round"
                @mouseover=${()=>this._handleHoverFeature(r)}
                @mouseout=${()=>this._handleHoverFeature(r,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(a)}"
              >
                <div class="max">
                  <span class="title">${g}</span>
                </div>
                <button
                  index=${s}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":l`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}customElements.define("eox-drawtools-list",Oe);const Je=e=>{const{multipleFeatures:t,drawnFeatures:a,currentlyDrawing:s}=e,i=!t&&a?.length>0||s,r=!a?.length&&!s;return{drawDisabled:i,discardDisabled:r}};function Ue(e){navigator.clipboard.writeText(e).then(function(){},function(t){console.error("Could not copy text: ",t)})}const je=(e,t)=>new T().writeFeaturesObject(e,t),Ge=(e,t)=>new ee().writeFeatures(e,t);class Pe extends k{static properties={multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}};#e=!0;#t=!0;constructor(){super(),this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:a}=Je(this);this.#e=t,this.#t=a}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",a={Polygon:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:l`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},s=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,i=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,r=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,n=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,o=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return l`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${this.#e||w}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:l`
                  <i class="small"
                    >${this.select?s:a[this.type]}</i
                  >
                  <div class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </div>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${this.#t||w}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":l`
                  <i class="small">${i}</i>
                  <div class="tooltip bottom">Discard</div>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${F(this.showEditor,()=>l`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":l`
                    <i class="small">${r}</i>
                    <div class="tooltip bottom">Edit features</div>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${F(this.importFeatures,()=>l`
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
              ${this.unstyled?"import":l`
                    <i class="small">${n}</i>
                    <div class="tooltip bottom">Import features</div>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${F(this.showEditor,()=>l`
          <div id="editor" class="field textarea border extra hidden">
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
              @click=${()=>Ue(this.geoJSON)}
            >
              ${this.unstyled?"copy":l`
                    <i class="tiny">${o}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `)}
    `}}customElements.define("eox-drawtools-controller",Pe);W();const qe=`
  ${E}
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
`,Ke=e=>{(()=>{if(e.emitDrawnFeatures(),!e.multipleFeatures)e.draw?.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const s=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!s)return;e.drawLayer.getSource().addFeature(s),e.drawnFeatures=[s]}})(),e.requestUpdate()},_e=e=>{const t=()=>{e.drawLayer.set("isDrawingEnabled",!0),e.draw?.setActive(!0),e.selectionEvents.addSelectionEvent()},a=()=>{e.currentlyDrawing=!0,e.requestUpdate()};t(),a(),document.addEventListener("keydown",({key:s})=>{s==="Escape"&&e.currentlyDrawing&&(e.draw?.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())})},$=(e,t)=>{const s=D(e.for),i=s.map,r="0, 65, 112";e.drawLayer=s.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:t},source:{type:"Vector"},style:e.featureStyles?.layer||{"fill-color":`rgba(${r}, 0.1)`,"stroke-color":`rgba(${r}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${r}, 1)`},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:e.featureStyles?.layer||{"fill-color":`rgba(${r}, 0.1)`,"stroke-color":`rgba(${r}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${r}, 1)`}}},{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:e.featureStyles?.hover||{"fill-color":`rgba(${r}, 0.2)`,"stroke-color":`rgba(${r}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:e.featureStyles?.click||{"fill-color":`rgba(${r}, 0.2)`,"stroke-color":`rgba(${r}, 1)`,"stroke-width":2}}}]}),e.draw=s.interactions.drawInteraction,e.modify=s.interactions.drawInteractionmodify,C(e,s,e.layerId);const n=()=>e.onModifyEnd(),o=()=>Ke(e);return e.modify?.on("modifyend",n),s.addEventListener("addfeatures",o),e.drawnFeatures&&e.drawLayer.getSource().addFeatures(e.drawnFeatures),{EoxMap:s,OlMap:i,reset:d=>{!d.eoxMap||!d.drawLayer||(d.drawLayer.getSource().clear(),d.eoxMap.map.removeLayer(d.drawLayer),d.modify?.un("modifyend",n),d.eoxMap.removeEventListener("addfeatures",o),d.layerId||(d.draw=null),d.modify=null)}}},xe=e=>{const t=()=>{e.drawnFeatures=[],e.draw?.setActive(!1),e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},a=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};t(),a()},Re=(e,t)=>{setTimeout(()=>{const s=e.drawLayer.getSource().getFeatures(),i=e.eoxMap.projection||"EPSG:3857",r=e.projection;e.drawnFeatures=r?s.map(o=>{o=o.clone();const c=o.getGeometry().transform(i,r);return o.setGeometry(c),o}):s;let n;switch(e.format){case"geojson":n=je(e.drawnFeatures);break;case"wkt":n=Ge(e.drawnFeatures);break;case"feature":n=e.drawnFeatures;break;default:n=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),t(n)},0)},Ze=e=>{const t=i=>{i?.detail.id!=="SelectLayerClickInteraction"||!i.detail.feature||(typeof i.detail.feature.getGeometry().getCoordinates!="function"&&(i.detail.feature=te(i.detail.feature)),e.drawLayer.getSource().addFeature(i.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:i.detail})))};return{addSelectionEvent:()=>{e.layerId&&(e.eoxMap.selectInteractions.SelectLayerHoverInteraction?.setActive(!0),e.eoxMap.addEventListener("select",t))},removeSelectionEvent:()=>{const i=e.eoxMap.selectInteractions?.SelectLayerHoverInteraction;i&&(i.selectedFids=[],i?.setActive(!1)),e.eoxMap.removeEventListener("select",t)}}},C=(e,t,a)=>{if(!a||!t)return;const s=t.getLayerById(a),i=s?JSON.parse(JSON.stringify(s.get("_jsonDefinition"))):null;if(!i){console.error(`Layer with id ${a} not found`);return}const r={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:e.featureStyles?.hover||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},n={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:e.featureStyles?.click||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};i.interactions=[r,n],t.addOrUpdateLayer(i),x(t.layers,a,[i]);const o=e.draw;e.draw=t.selectInteractions.SelectLayerClickInteraction,o?.setActive(!1),t.selectInteractions.SelectLayerClickInteraction?.setActive(!1),t.selectInteractions.SelectLayerHoverInteraction?.setActive(!1)};function x(e,t,a){const s=e.findIndex(i=>i.properties.id===t);if(s!==-1)return e.splice(s,1,...a),e;for(const i of e)if(i.type==="Group"){const r=x(i.layers,t,a);r?.length&&(i.layers=r)}return e}const ze=(e,t,a,s)=>{if(t){if(a){s&&a!==s&&K(e,t),C(e,t,a);return}if(!a&&s){K(e,t);return}}};function K(e,t){t&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=t.interactions.drawInteraction,t.selectInteractions.SelectLayerClickInteraction.remove(),t.selectInteractions.SelectLayerHoverInteraction.remove())}function We(e,t){function a(r){r.preventDefault(),r.stopPropagation()}function s(r){r.srcElement.style.opacity="0.4"}function i(r){r.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(r=>{t.addEventListener(r,a,!1),["dragenter","dragover"].includes(r)?t.addEventListener(r,s,!1):t.addEventListener(r,i,!1)}),t.addEventListener("drop",r=>R(r,e),!1)}function Qe(e){e.preventDefault(),e.stopPropagation()}function R(e,t){Qe(e);let a;"dataTransfer"in e&&e.dataTransfer?a=e.dataTransfer.files:e.target&&"files"in e.target?a=e.target.files:a=[],Array.from(a).forEach(s=>Xe(s,t)),e.target&&"value"in e.target&&(e.target.value="")}function Xe(e,t){const a=new FileReader;a.readAsText(e),a.onloadend=function(){typeof a.result=="string"&&t.handleFeatureChange(a.result)}}class Ye extends k{static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{attribute:!1},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}#e;#t;#s;#a;#r;constructor(){super(),this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}set continuous(t){this.#r=t,t&&(this.multipleFeatures=!0)}get continuous(){return this.#r}set layerId(t){ze(this,this.eoxMap,t,this.#a),this.#a=t}get layerId(){return this.#a}startDrawing(){_e(this)}discardDrawing(){xe(this)}handleFeatureChange(t,a=!1,s=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(q),this.drawLayer,this.eoxMap,a,s)}handleFilesChange(t){R(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){this.#s=JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||q,void 0,2)}emitDrawnFeatures(){Re(this,a=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:a}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:t,OlMap:a,reset:s}=$(this,this.multipleFeatures);this.resetLayer=s,this.eoxMap=t,this.#t=a,this.selectionEvents=Ze(this),this.importFeatures&&We(this,this.eoxMap),this.updateGeoJSON(),this.requestUpdate()}updated(t){if(t.has("for")){const{EoxMap:a,OlMap:s}=$(this,this.multipleFeatures);this.eoxMap=a,this.#t=s}t.get("type")&&t.get("type")!==this.type&&(this.resetLayer(this),this.firstUpdated(),this.currentlyDrawing=!1)}get eoxMap(){return this.#e}set eoxMap(t){const a=this.#e;this.#e=t,this.requestUpdate("eoxMap",a)}connectedCallback(){if(super.connectedCallback(),this.drawLayer&&this.eoxMap){const{reset:t}=$(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){super.disconnectedCallback(),this.resetLayer?.(this)}render(){return l`
      <style>
        :host { display: block; }
        ${!this.unstyled&&qe}
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
        .geoJSON=${this.#s}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&this.drawnFeatures?.length?l`<eox-drawtools-list
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
          ></eox-drawtools-list>`:w}
    `}}customElements.define("eox-drawtools",Ye);const Ee=({selectedStac:e,jsonformSchema:t,isProcessed:a,processResults:s,loading:i,isPolling:r,mapElement:n})=>{const o=se(ie);_(async()=>{(n?.layers.length??0)>1?await M({enableCompare:n?.id==="compare",selectedStac:e,jsonformSchema:t,isProcessed:a,processResults:s,loading:i,isPolling:r}):o.once(async()=>{await M({enableCompare:n?.id==="compare",selectedStac:e,jsonformSchema:t,isProcessed:a,loading:i,processResults:s,isPolling:r})})});const c=n?.id==="compare",d=c?"compareLayers:updated":"layers:updated";ae(async(u,g)=>{if(u=="layertime:updated"||u=="compareLayertime:updated"||u=="time:updated"||u=="compareTime:updated"){const m=["layertime:updated","time:updated"].includes(u)&&!c,y=["compareLayertime:updated","compareTime:updated"].includes(u)&&c;if(m||y){const b=await ge({jsonformSchema:t.value,newLayers:g,enableCompare:c});t.value=b}}u===d&&await M({enableCompare:c,selectedStac:e,jsonformSchema:t,isProcessed:a,processResults:s,loading:i,isPolling:r})})};function De(e,t,a,s){const i=async o=>{await s()},r=async()=>{await re(()=>{t.value?.addEventListener("change",i)})},n=()=>{t.value?.removeEventListener("change",i)};O(a,o=>{e.value=o?.options?.execute||!1}),_(()=>{O(e,async o=>{o?await r():n()},{immediate:!0})})}const Te={ref:"container",class:"py-1"},et=[".schema"],tt={class:"text-right"},$t={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(e){const t=f(!1),a=f(null),s=pe("jsonformEl"),i=I(()=>u.value?.links.filter(h=>h.endpoint==="eoxhub_workspaces").length),r=f(!1),n=f(!1),o=f(!1),c=f([]),d=I(()=>!n.value&&!!a.value&&!!s.value),{selectedStac:u,selectedCompareStac:g}=ne(oe()),m=e.enableCompare?g:u,y=e.enableCompare?Se:Ve,b=e.enableCompare?Fe:Le,B=e.enableCompare?he:ye,Z=I(()=>b.value+y.value?.id+JSON.stringify(a.value));Ee({selectedStac:m,mapElement:y.value,jsonformSchema:a,isProcessed:t,processResults:c,loading:r,isPolling:o});const z=()=>{c.value.forEach(h=>{if(!h)return;let p="";typeof h=="string"?(p=h.includes("/")?h.split("/").pop()??"":h,p=p.includes("?")?p.split("?")[0]:p):p=m.value?.id+"_process_results.json",He(p,h)})},A=async()=>{if(we(a.value).some(H=>Array.isArray(s.value?.value[H])&&!s.value?.value[H].length)){t.value=!1;const H=e.enableCompare?Me:$e;H.value=null;return}const N=s.value?.editor.validate();if(N?.length){console.warn("[eodash] Form validation failed",N);return}c.value=[],await ve({jobs:B,selectedStac:m,jsonformEl:s,jsonformSchema:a,loading:r,isPolling:o,processResults:c,mapElement:y.value}),t.value=!0,i.value&&be(B,b.value)};return De(n,s,a,A),(h,p)=>(v(),J("div",Te,[le(me,{"map-element":V(y),"enable-compare":e.enableCompare},null,8,["map-element","enable-compare"]),a.value?(v(),J("eox-jsonform",{key:Z.value,ref_key:"jsonformEl",ref:s,".schema":a.value},null,40,et)):S("v-if",!0),V(Ie)?S("v-if",!0):(v(),L(fe,{key:1,"vega-embed-options":e.vegaEmbedOptions,"enable-compare":e.enableCompare},null,8,["vega-embed-options","enable-compare"])),ce("div",tt,[d.value?(v(),L(j,{key:0,loading:r.value,style:{"margin-right":"8px"},"append-icon":[V(de)],onClick:A,density:"comfortable",size:"small"},{default:U(()=>[...p[0]||(p[0]=[G(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):S("v-if",!0),c.value.length&&t.value&&!i.value?(v(),L(j,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[V(ue)],onClick:z,size:"small",density:"comfortable"},{default:U(()=>[...p[1]||(p[1]=[G(" Download ",-1)])]),_:1},8,["append-icon"])):S("v-if",!0)])],512))}};export{$t as default};
