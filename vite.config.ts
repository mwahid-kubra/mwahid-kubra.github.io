import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "bizhq-report-table-viz",
      fileName: "bizhq-report-table-viz",
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  plugins: [react()],
});
