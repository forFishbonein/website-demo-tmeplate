import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    //启动的ip
    host: "0.0.0.0",
    open: true, //是否在浏览器自动打开
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@assets": resolve(__dirname, "src/assets"),
      "@router": resolve(__dirname, "src/router"),
      "@request": resolve(__dirname, "src/request"),
      "@views": resolve(__dirname, "src/views"),
      "@components": resolve(__dirname, "src/components"),
      "@store": resolve(__dirname, "src/store"),
      "@apis": resolve(__dirname, "src/apis"),
      "@plugins": resolve(__dirname, "src/plugins"),
      "@styles": resolve(__dirname, "src/styles"),
      "@config": resolve(__dirname, "src/config"),
    },
  },
});
