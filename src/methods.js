import { getBaseConfig } from "@eodash/eodash/templates";

export function assignStacEndpoint() {
  const urlParams = new URLSearchParams(window.location.search);
  const stacEndpoint = urlParams.get("stacEndpoint");

  if (stacEndpoint) {
    console.log(
      "[eodash-preview-instance] assigned stacEndpoint:",
      stacEndpoint,
    );

    return stacEndpoint;
  }

  if (window.parent !== window) {
    const message = {
      type: "eodash:loaded",
      endpoint: new URL(window.location.href).searchParams.get("stacEndpoint"),
    };
    window.parent.postMessage(message, "*");
  }
  console.warn(
    "[eodash-preview-instance] stacEndpoint not assigned, using default",
  );
  /*
    TODO: we should evaluate how to handle if stacEndpoint is not set, having a default
    endpoint is not a good idea, it should show an error message instead
    setting it to an empty string for now
    */
  return "";
}

/**
 * Appends a millisecond timestamp as a cache buster to a given URL.
 * @param {string} url - The original URL string.
 * @returns {string} The modified URL string with the 't' parameter.
 */
const addCacheBuster = (url) => {
  try {
    const urlObj = new URL(url);
    
    // .set() adds 't' if missing, or overwrites it if it already exists
    urlObj.searchParams.set('t', Date.now().toString());
    
    return urlObj.toString();
  } catch (error) {
    console.error("Invalid URL provided to addCacheBuster", error);
    return url;
  }
};


export function setupIframeMessageListener() {
  if (window.parent == window) {
    return false;
  }
  window.addEventListener("message", (event) => {
    switch (event.data.type) {
      case "eodash:reload":
        window.location.reload();
        break;

      case "eodash:stacEndpoint": {
        const stacEndpoint = event?.data.endpoint;
        console.log("stacEndpoint from parent:", stacEndpoint);
        if (stacEndpoint && stacEndpoint.endsWith("catalog.json")) {
          const urlParams = new URLSearchParams(window.location.search);
          urlParams.set("stacEndpoint", stacEndpoint);
          window.history.replaceState({}, "", `?${urlParams}`);
          window.location.reload();
          console.log(
            "[eodash-preview-instance] assigned stacEndpoint:",
            stacEndpoint,
          );
        }
        break;
      }

      default:
        break;
    }
  });
  return true;
}
/**
 *
 * @param {string} stacEndpoint
 */
export const createEoDashElement = (stacEndpoint) => {
  const eodashContainer = document.getElementById("eodash-container");
  const eoDash = document.createElement("eo-dash");
  if (!eoDash) {
    throw new Error("eo-dash element not found");
  }
  const api = !(stacEndpoint.includes(".json"));
  const cacheBustedUrl = api ? stacEndpoint : addCacheBuster(stacEndpoint);
  //@ts-expect-error needs to be updated in eodash
  eoDash.config = () =>
    getBaseConfig({
      stacEndpoint: {
        endpoint: cacheBustedUrl,
        api,
      },
    });

  eodashContainer?.appendChild(eoDash);
};
/**
 *
 * @param {boolean} inIframe
 */
export const handleFormSubmit = (inIframe) => {
  if (inIframe) {
    return;
  }
  const inputEl = document.querySelector("input");
  const formEl = document.querySelector("form#stac-endpoint-form");

  formEl?.addEventListener("submit", (e) => {
    e.preventDefault();
    const stacEndpoint = inputEl?.value;
    const eoDash = document.querySelector("eo-dash");
    if (!eoDash || !stacEndpoint) {
      console.error("eo-dash element or stacEndpoint not found");
      return;
    }
    eoDash.remove();
    createEoDashElement(stacEndpoint);
  });
};

/**
 * @param {boolean} inIframe
 * @returns
 */
export const hideInputForm = (inIframe) => {
  const hasStacEndpoint = new URLSearchParams(window.location.search).has(
    "stacEndpoint",
  );

  if (!inIframe && !hasStacEndpoint) {
    return;
  }
  const formEl = document.querySelector("form");
  const eodashContainer = document.getElementById("eodash-container");
  if (!eodashContainer || !formEl) {
    return;
  }
  formEl?.remove();
  eodashContainer.style.height = "100%";
};
