import "./style.css";
import "@eox/ui";
import "@eodash/eodash/webcomponent";
import {
  assignStacEndpoint,
  createEoDashElement,
  handleFormSubmit,
  hideInputForm,
  setupIframeMessageListener,
} from "./methods";

const app = document.querySelector("#app");
if (!app) {
  throw new Error("App element not found");
}
const stacEndpoint =
  assignStacEndpoint() ||
  "https://esa-eodashboards.github.io/RACE-catalog/RACE/catalog.json";
app.innerHTML = /* html */ `
<form id="stac-endpoint-form">
  <nav>
    <div class="field border round input-container">
      <input id="stac-endpoint" value="${stacEndpoint}" type="text">
      <span class="helper">Please Enter your STAC endpoint</span>
    </div>
  <button>Load</button>
  </nav>
</form>
<div id="eodash-container"></div>
`;

createEoDashElement(stacEndpoint);

const inIframe = setupIframeMessageListener();

hideInputForm(inIframe);
handleFormSubmit(inIframe);
