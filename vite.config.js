import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: ".eodash/dist",
  },
  server: {
    host: true,
  },
});
