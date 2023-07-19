import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
});
