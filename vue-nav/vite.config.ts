import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9091,
    // 代理
    proxy: {
      "/api": {
        target: "http://localhost:9092",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src/",
      "@c": "/src/components",
      "@v": "/src/views",
    },
  },
});
