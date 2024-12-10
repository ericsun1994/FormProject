import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "./src/jsx", // Babel importSource와 동일하게
  },
});
