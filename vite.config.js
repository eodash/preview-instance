import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: ".eodash/dist",
  },
  server: {
    host: true,
  },
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },
});
