import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/easy-mix/",

  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: [
      "react", "react-dom",
      "react/jsx-runtime", "react/jsx-dev-runtime",
      "@tanstack/react-query", "@tanstack/query-core",
    ],
  },

  build: {
    // เพิ่ม warning threshold เล็กน้อย (เพราะ cursor base64 ทำให้ไฟล์ใหญ่ขึ้นหน่อย)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        manualChunks: {
          // React core — โหลดก่อนทุก chunk
          "vendor-react": ["react", "react-dom", "react/jsx-runtime"],

          // Router + Query — ใช้ทุกหน้า
          "vendor-router": ["react-router-dom"],
          "vendor-query":  ["@tanstack/react-query"],

          // Radix UI — แยกออกเพราะใหญ่มาก
          "vendor-radix": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-toast",
            "@radix-ui/react-accordion",
            "@radix-ui/react-tabs",
            "@radix-ui/react-select",
          ],

          // Form + validation
          "vendor-form": ["react-hook-form", "@hookform/resolvers", "zod"],

          // Icons
          "vendor-icons": ["lucide-react"],
        },
      },
    },
  },
}));
