import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // three core is shared by the character (loads on all devices) and
            // the desktop-only TechStack — split it out so it caches on its own.
            if (id.includes("/three/") || id.includes("three-stdlib"))
              return "three";
            if (id.includes("gsap")) return "gsap";
          }
        },
      },
    },
  },
});
