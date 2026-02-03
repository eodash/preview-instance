import"./main-BOVsXhwx.js";import{E as w,i as $,x as l,a as W}from"./addCommonStyleSheet-Yq-7s86-.js";import{e as Q,i as X}from"./directive-CwRn8Fwj.js";import{m as Y}from"./directive-helpers-BBe88Per.js";import{n as S}from"./when-CI7b_ccM.js";import{e as E}from"./style-DKU08UVs.js";import{g as D}from"./getElement-CdRlZPdn.js";import{G as T,W as ee,t as te}from"./WKT-DswoXuO-.js";import"./main-Dwsmyb_r.js";import{o as K,bH as ae,aA as se,aa as N,a8 as re,bI as ie,K as ne,J as V,a9 as oe,n as le,b as O,f as ce,y as b,d as F,x as de,w as J,bJ as ue,a1 as U,bK as pe,e as v,aE as G}from"./main-qpYJifUq.js";import{c as he,j as ye,_ as fe}from"./ProcessList-vFkTXR_6.js";import me from"./EodashChart-DlCm-f3m.js";import{i as L,u as ge,h as ve}from"./handling-C226dh7R.js";import{j as we,u as be,n as He}from"./async-Cj4kOJdQ.js";import{a as f,L as Se,z as Ve,o as Fe,p as Le,u as H,i as Ie,g as Me,h as $e}from"./templates-DpRAJmv9.js";import"./sequential-w-Nnb9-P.js";import"./orient2d-DArCjZZA.js";import"./extent-CNYecLM1.js";import"./editor-CCHS57uz.js";import"./toolcool-range-slider.min-BO3Tl_nj.js";import"./utils-CHGQ4ScM.js";import"./index-CxojoGlr.js";import"./index-DJgBxPHe.js";import"./index-aieDcwWM.js";import"./VTooltip-BCuYtmZT.js";import"./forwardRefs-CU6l0Rmy.js";import"./transition-Iv55GX9L.js";const Ce=Q(class extends X{constructor(){super(...arguments),this.key=w}render(e,t){return this.key=e,t}update(e,[t,a]){return t!==this.key&&(Y(e),this.key=t),a}}),ke=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const t=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",t),e.clickInteraction.selectStyleLayer.on("change",t)},Be=(e,t,a)=>{if(e.clickId===t)return;const s=a?[]:[t];e.hoverInteraction.highlightById(s)},Ae=(e,t,a)=>{e.stopPropagation();const s=Number(e.target.getAttribute("index")),i=t.drawLayer.getSource().getFeatures()[s];t.drawLayer.getSource().removeFeature(i),t.drawnFeatures.splice(s,1),a.emitDrawnFeatures(),t.requestUpdate()},j={duration:750,padding:[20,20,20,20]},q={type:"FeatureCollection",features:[]},Ne=(e,t)=>{const{clickId:a,drawLayer:s,olMap:i,clickInteraction:r}=t,o=r.getId(e);if(a===o){const d=s.getSource().getExtent();i.getView().fit(d,j),r.highlightById([])}else{const d=t.eoxMap.projection||"EPSG:3857",c=t.eoxDrawTools.projection,u=e.clone().getGeometry().transform(c,d).getExtent();r.highlightById([o]),i.getView().fit(u,j)}t.requestUpdate()};class Oe extends ${static properties={eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}};hoverInteraction;clickInteraction;hoverId;clickId;constructor(){super(),this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){Ae(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){Ne(t,this)}_handleHoverFeature(t,a=!1){Be(this,t,a)}firstUpdated(){ke(this)}createRenderRoot(){return this}render(){this.hoverId=this.hoverInteraction?.selectedFids[0],this.clickId=this.clickInteraction?.selectedFids[0];const t=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return l`
      <ul class="list no-space">
        ${this.drawnFeatures.map((a,s)=>{const i=s+1,r=Object.values(this.eoxMap.selectInteractions)[0].getId(a),o=this.hoverId===r,n=this.clickId===r,d=o?"surface-container-low":n?"fill":w,c=this.featureNameKey?.split("."),u=a.get(this.featureNameKey)||c?.reduce((g,y)=>g?.[y],{...a.getProperties()}),m=u||`${this.featureName} ${i}`;return Ce(i,l`
              <li
                class="${d} no-round"
                @mouseover=${()=>this._handleHoverFeature(r)}
                @mouseout=${()=>this._handleHoverFeature(r,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(a)}"
              >
                <div class="max">
                  <span class="title">${m}</span>
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
    `}}customElements.define("eox-drawtools-list",Oe);const Je=e=>{const{multipleFeatures:t,drawnFeatures:a,currentlyDrawing:s}=e,i=!t&&a?.length>0||s,r=!a?.length&&!s;return{drawDisabled:i,discardDisabled:r}};function Ue(e){navigator.clipboard.writeText(e).then(function(){},function(t){console.error("Could not copy text: ",t)})}const Ge=(e,t)=>new T().writeFeaturesObject(e,t),je=(e,t)=>new ee().writeFeatures(e,t);class qe extends ${static properties={multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}};#e=!0;#t=!0;constructor(){super(),this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:a}=Je(this);this.#e=t,this.#t=a}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",a={Polygon:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
    </svg>`,o=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,n=l`<svg
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
        ${S(this.showEditor,()=>l`
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
        ${S(this.importFeatures,()=>l`
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
                    <i class="small">${o}</i>
                    <div class="tooltip bottom">Import features</div>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${S(this.showEditor,()=>l`
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
                    <i class="tiny">${n}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `)}
    `}}customElements.define("eox-drawtools-controller",qe);W();const Pe=`
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
`,Ke=e=>{(()=>{if(e.emitDrawnFeatures(),!e.multipleFeatures)e.draw?.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const s=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!s)return;e.drawLayer.getSource().addFeature(s),e.drawnFeatures=[s]}})(),e.requestUpdate()},_e=e=>{const t=()=>{e.drawLayer.set("isDrawingEnabled",!0),e.draw?.setActive(!0),e.selectionEvents.addSelectionEvent()},a=()=>{e.currentlyDrawing=!0,e.requestUpdate()};t(),a(),document.addEventListener("keydown",({key:s})=>{s==="Escape"&&e.currentlyDrawing&&(e.draw?.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())})},I=(e,t)=>{const s=D(e.for),i=s.map,r="0, 65, 112";e.drawLayer=s.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:t},source:{type:"Vector"},style:e.featureStyles?.layer||{"fill-color":`rgba(${r}, 0.1)`,"stroke-color":`rgba(${r}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${r}, 1)`},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:e.featureStyles?.layer||{"fill-color":`rgba(${r}, 0.1)`,"stroke-color":`rgba(${r}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${r}, 1)`}}},{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:e.featureStyles?.hover||{"fill-color":`rgba(${r}, 0.2)`,"stroke-color":`rgba(${r}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:e.featureStyles?.click||{"fill-color":`rgba(${r}, 0.2)`,"stroke-color":`rgba(${r}, 1)`,"stroke-width":2}}}]}),e.draw=s.interactions.drawInteraction,e.modify=s.interactions.drawInteractionmodify,M(e,s,e.layerId);const o=()=>e.onModifyEnd(),n=()=>Ke(e);return e.modify?.on("modifyend",o),s.addEventListener("addfeatures",n),e.drawnFeatures&&e.drawLayer.getSource().addFeatures(e.drawnFeatures),{EoxMap:s,OlMap:i,reset:c=>{!c.eoxMap||!c.drawLayer||(c.drawLayer.getSource().clear(),c.eoxMap.map.removeLayer(c.drawLayer),c.modify?.un("modifyend",o),c.eoxMap.removeEventListener("addfeatures",n),c.layerId||(c.draw=null),c.modify=null)}}},xe=e=>{const t=()=>{e.drawnFeatures=[],e.draw?.setActive(!1),e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},a=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};t(),a()},Re=(e,t)=>{setTimeout(()=>{const s=e.drawLayer.getSource().getFeatures(),i=e.eoxMap.projection||"EPSG:3857",r=e.projection;e.drawnFeatures=r?s.map(n=>{n=n.clone();const d=n.getGeometry().transform(i,r);return n.setGeometry(d),n}):s;let o;switch(e.format){case"geojson":o=Ge(e.drawnFeatures);break;case"wkt":o=je(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),t(o)},0)},Ze=e=>{const t=i=>{i?.detail.id!=="SelectLayerClickInteraction"||!i.detail.feature||(typeof i.detail.feature.getGeometry().getCoordinates!="function"&&(i.detail.feature=te(i.detail.feature)),e.drawLayer.getSource().addFeature(i.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:i.detail})))};return{addSelectionEvent:()=>{e.layerId&&(e.eoxMap.selectInteractions.SelectLayerHoverInteraction?.setActive(!0),e.eoxMap.addEventListener("select",t))},removeSelectionEvent:()=>{const i=e.eoxMap.selectInteractions?.SelectLayerHoverInteraction;i&&(i.selectedFids=[],i?.setActive(!1)),e.eoxMap.removeEventListener("select",t)}}},M=(e,t,a)=>{if(!a||!t)return;const s=t.getLayerById(a),i=s?JSON.parse(JSON.stringify(s.get("_jsonDefinition"))):null;if(!i){console.error(`Layer with id ${a} not found`);return}const r={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:e.featureStyles?.hover||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},o={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:e.featureStyles?.click||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};i.interactions=[r,o],t.addOrUpdateLayer(i),_(t.layers,a,[i]);const n=e.draw;e.draw=t.selectInteractions.SelectLayerClickInteraction,n?.setActive(!1),t.selectInteractions.SelectLayerClickInteraction?.setActive(!1),t.selectInteractions.SelectLayerHoverInteraction?.setActive(!1)};function _(e,t,a){const s=e.findIndex(i=>i.properties.id===t);if(s!==-1)return e.splice(s,1,...a),e;for(const i of e)if(i.type==="Group"){const r=_(i.layers,t,a);r?.length&&(i.layers=r)}return e}const ze=(e,t,a,s)=>{if(t){if(a){s&&a!==s&&P(e,t),M(e,t,a);return}if(!a&&s){P(e,t);return}}};function P(e,t){t&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=t.interactions.drawInteraction,t.selectInteractions.SelectLayerClickInteraction.remove(),t.selectInteractions.SelectLayerHoverInteraction.remove())}function We(e,t){function a(r){r.preventDefault(),r.stopPropagation()}function s(r){r.srcElement.style.opacity="0.4"}function i(r){r.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(r=>{t.addEventListener(r,a,!1),["dragenter","dragover"].includes(r)?t.addEventListener(r,s,!1):t.addEventListener(r,i,!1)}),t.addEventListener("drop",r=>x(r,e),!1)}function Qe(e){e.preventDefault(),e.stopPropagation()}function x(e,t){Qe(e);let a;"dataTransfer"in e&&e.dataTransfer?a=e.dataTransfer.files:e.target&&"files"in e.target?a=e.target.files:a=[],Array.from(a).forEach(s=>Xe(s,t)),e.target&&"value"in e.target&&(e.target.value="")}function Xe(e,t){const a=new FileReader;a.readAsText(e),a.onloadend=function(){typeof a.result=="string"&&t.handleFeatureChange(a.result)}}class Ye extends ${static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{attribute:!1},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}#e;#t;#s;#a;#r;constructor(){super(),this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}set continuous(t){this.#r=t,t&&(this.multipleFeatures=!0)}get continuous(){return this.#r}set layerId(t){ze(this,this.eoxMap,t,this.#a),this.#a=t}get layerId(){return this.#a}startDrawing(){_e(this)}discardDrawing(){xe(this)}handleFeatureChange(t,a=!1,s=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(q),this.drawLayer,this.eoxMap,a,s)}handleFilesChange(t){x(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){this.#s=JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||q,void 0,2)}emitDrawnFeatures(){Re(this,a=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:a}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:t,OlMap:a,reset:s}=I(this,this.multipleFeatures);this.resetLayer=s,this.eoxMap=t,this.#t=a,this.selectionEvents=Ze(this),this.importFeatures&&We(this,this.eoxMap),this.updateGeoJSON(),this.requestUpdate()}updated(t){if(t.has("for")){const{EoxMap:a,OlMap:s}=I(this,this.multipleFeatures);this.eoxMap=a,this.#t=s}t.get("type")&&t.get("type")!==this.type&&(this.resetLayer(this),this.firstUpdated(),this.currentlyDrawing=!1)}get eoxMap(){return this.#e}set eoxMap(t){const a=this.#e;this.#e=t,this.requestUpdate("eoxMap",a)}connectedCallback(){if(super.connectedCallback(),this.drawLayer&&this.eoxMap){const{reset:t}=I(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){super.disconnectedCallback(),this.resetLayer?.(this)}render(){return l`
      <style>
        :host { display: block; }
        ${!this.unstyled&&Pe}
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
    `}}customElements.define("eox-drawtools",Ye);const Ee=({selectedStac:e,jsonformEl:t,jsonformSchema:a,isProcessed:s,processResults:i,loading:r,isPolling:o,mapElement:n})=>{const d=ae(ie);K(async()=>{(n?.layers.length??0)>1?await L({enableCompare:n?.id==="compare",selectedStac:e,jsonformEl:t,jsonformSchema:a,isProcessed:s,processResults:i,loading:r,isPolling:o}):d.once(async()=>{await L({enableCompare:n?.id==="compare",selectedStac:e,jsonformEl:t,jsonformSchema:a,isProcessed:s,loading:r,processResults:i,isPolling:o})})});const c=n?.id==="compare"?"compareLayers:updated":"layers:updated";se(async(u,m)=>{(u=="layertime:updated"||u=="compareLayertime:updated"||u=="time:updated"||u=="compareTime:updated")&&await ge({jsonformSchema:a.value,newLayers:m}),u===c&&await L({enableCompare:n?.id==="compare",selectedStac:e,jsonformEl:t,jsonformSchema:a,isProcessed:s,processResults:i,loading:r,isPolling:o})})};function De(e,t,a,s){const i=async n=>{await s()},r=async()=>{await re(()=>{t.value?.addEventListener("change",i)})},o=()=>{t.value?.removeEventListener("change",i)};N(a,n=>{e.value=n?.options?.execute||!1}),K(()=>{N(e,async n=>{n?await r():o()},{immediate:!0})})}const Te={ref:"container",class:"py-1"},et=[".schema"],tt={class:"text-right"},Ct={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(e){const t=f(!1),a=f(null),s=ne("jsonformEl"),i=V(()=>u.value?.links.filter(p=>p.endpoint==="eoxhub_workspaces").length),r=f(!1),o=f(!1),n=f(!1),d=f([]),c=V(()=>!o.value&&!!a.value&&!!s.value),{selectedStac:u,selectedCompareStac:m}=oe(le()),g=e.enableCompare?m:u,y=e.enableCompare?Se:Ve,C=e.enableCompare?Fe:Le,k=e.enableCompare?he:ye,R=V(()=>C.value+y.value?.id);Ee({selectedStac:g,mapElement:y.value,jsonformEl:s,jsonformSchema:a,isProcessed:t,processResults:d,loading:r,isPolling:n});const Z=()=>{d.value.forEach(p=>{if(!p)return;let h="";typeof p=="string"?(h=p.includes("/")?p.split("/").pop()??"":p,h=h.includes("?")?h.split("?")[0]:h):h=g.value?.id+"_process_results.json",He(h,p)})},B=async()=>{const p=we(a.value);if(p&&Array.isArray(s.value?.value[p])&&!s.value?.value[p].length){t.value=!1;const z=e.enableCompare?Me:$e;z.value=null;return}const A=s.value?.editor.validate();if(A?.length){console.warn("[eodash] Form validation failed",A);return}d.value=[],await ve({jobs:k,selectedStac:g,jsonformEl:s,jsonformSchema:a,loading:r,isPolling:n,processResults:d,mapElement:y.value}),t.value=!0,i.value&&be(k,C.value)};return De(o,s,a,B),(p,h)=>(v(),O("div",Te,[ce(fe,{"map-element":H(y),"enable-compare":e.enableCompare},null,8,["map-element","enable-compare"]),a.value?(v(),O("eox-jsonform",{key:R.value,ref_key:"jsonformEl",ref:s,".schema":a.value},null,40,et)):b("v-if",!0),H(Ie)?b("v-if",!0):(v(),F(me,{key:1,"vega-embed-options":e.vegaEmbedOptions,"enable-compare":e.enableCompare},null,8,["vega-embed-options","enable-compare"])),de("div",tt,[c.value?(v(),F(U,{key:0,loading:r.value,style:{"margin-right":"8px"},"append-icon":[H(ue)],onClick:B,density:"comfortable",size:"small"},{default:J(()=>[...h[0]||(h[0]=[G(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):b("v-if",!0),d.value.length&&t.value&&!i.value?(v(),F(U,{key:1,color:"primary","append-icon":[H(pe)],onClick:Z,size:"small",density:"comfortable"},{default:J(()=>[...h[1]||(h[1]=[G(" Download ",-1)])]),_:1},8,["append-icon"])):b("v-if",!0)])],512))}};export{Ct as default};
