import { createEodash } from "@eodash/eodash";

export default createEodash({
  id: "preview",
  stacEndpoint: assignStacEndpoint(),
  brand: {
    noLayout: true,
    name: "Preview",
    font: {
      headers: {
        family: "Open Sans",
        link: "https://eox.at/fonts/opensans/opensans.css",
      },
      body: {
        family: "Sintony",
        link: "https://eox.at/fonts/sintony/sintony.css",
      },
    },
    theme: {
      colors: {
        primary: "#002742",
        secondary: "#0071C2",
        surface: "#ffff",
      },
      variables: {
        "surface-opacity": 0.6,
        "primary-opacity": 0.8,
      },
      // Bank-Wong palette
      collectionsPalette: [
        "#009E73",
        "#E69F00",
        "#56B4E9",
        "#009E73",
        "#F0E442",
        "#0072B2",
        "#D55E00",
        "#CC79A7",
        "#994F00",
      ],
    },
    footerText: "Demo configuration of eodash client",
  },
  template: {
    loading: {
      id: Symbol(),
      type: "web-component",
      widget: {
        // https://uiball.com/ldrs/
        link: "https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js",
        tagName: "l-mirage",
        properties: {
          class: "align-self-center justify-self-center",
          size: "120",
          speed: "2.5",
          color: "#004170",
        },
      },
    },
    background: {
      id: "background-map",
      type: "internal",
      widget: {
        name: "EodashMap",
        properties: {
          enableCompare: true,
        },
      },
    },
    widgets: [
      {
        id: Symbol(),
        type: "internal",
        title: "Tools",
        layout: { x: 0, y: 0, w: 3, h: 1 },
        widget: {
          name: "EodashTools",
          properties: {
            showLayoutSwitcher: false,
            itemFilterConfig: {
              resultType: "cards",
              subTitleProperty: "subtitle",
              imageProperty: "thumbnail",
              aggregateResults: "collection_group",
              style: {
                "--form-flex-direction": "row",
              },
            },
          },
        },
      },
      {
        id: Symbol(),
        type: "internal",
        title: "Layers",
        layout: { x: 0, y: 1, w: 3, h: 6 },
        widget: {
          name: "EodashLayerControl",
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "Information",
                title: "Information",
                layout: { x: 9, y: 0, w: 3, h: 6 },
                type: "internal",
                widget: {
                  name: "EodashStacInfo",
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selectedSTAC) => {
          return selectedSTAC
            ? {
                id: "expert-datepicker",
                type: "internal",
                layout: { x: 5, y: 11, w: 2, h: 1 },
                title: "Date",
                widget: {
                  name: "EodashDatePicker",
                  properties: {
                    hintText: `<b>Hint:</b> closest available date is displayed <br />
                            on map (see Analysis Layers)`,
                    toggleCalendar: true,
                  },
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selected) => {
          return selected
            ? {
                id: "Buttons",
                layout: { x: 8, y: 0, w: 1, h: 2 },
                title: "Buttons",
                type: "internal",
                widget: {
                  name: "EodashMapBtns",
                  properties: {
                    compareIndicators: false,
                  },
                },
              }
            : null;
        },
      },
      {
        defineWidget: (selectedSTAC) =>
          selectedSTAC?.links.some((l) => l.rel === "service")
            ? {
                id: "Processes",
                type: "internal",
                title: "Processes",
                layout: { x: 9, y: 6, w: 3, h: 5 },
                widget: {
                  name: "EodashProcess",
                },
              }
            : null,
      },
    ],
  },
});

function assignStacEndpoint() {
  const urlParams = new URLSearchParams(window.location.search);
  const stacEndpoint = urlParams.get("stacEndpoint");

  if (stacEndpoint && stacEndpoint.endsWith("catalog.json")) {
    console.log(
      "[eodash-preview-instance] assigned stacEndpoint:",
      stacEndpoint,
    );

    return /** @type {`${string}/catalog.json`} */ (stacEndpoint);
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
  return "https://esa-eodashboards.github.io/eodashboard-catalog/trilateral/catalog.json";
}

window.addEventListener("message", (event) => {
  switch (event.data.type) {
    case "eodash:reload":
      window.location.reload();
      break;

    case "eodash:stacEndpoint":
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

    default:
      break;
  }
});
