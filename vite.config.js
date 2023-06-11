import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [react(), legacy({ targets: ["defaults", "not IE 11"] })],

  server: {
    open: true
  },
  preview: {
    open: true
  }
});
