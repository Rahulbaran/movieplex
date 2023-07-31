import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { VitePWA } from "vite-plugin-pwa";

import manifest from "./manifest.json";

export default defineConfig({
  build: { emptyOutDir: true },
  plugins: [
    react(),
    legacy({ targets: ["defaults", "not IE 11"] }),
    VitePWA({
      manifest,
      manifestFilename: "site.webmanifest",
      includeAssets: ["robots.txt"],
      devOptions: {
        enabled: true
      },
      workbox: {
        globPatterns: [
          "**/*.{css,html,js}",
          "**/*.{ico,png,webp,gif,jpeg,avif,svg}"
        ],
        sourcemap: true
      },
      registerType: "prompt"
    })
  ],

  server: {
    open: true
  },
  preview: {
    open: true,
    port: 5000
  }
});
