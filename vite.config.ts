import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // Some packages need this to start properly if they reference global
      define: {
        global: "globalThis",
      },
      plugins: [
        polyfillNode({
          globals: {
            buffer: true,
            process: true,
          },
          polyfills: {
            buffer: true,
            process: true,
          },
        }),
      ],
    },
  },
  plugins: [react()],
});
