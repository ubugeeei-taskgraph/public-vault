import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite-plus";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: fileURLToPath(new URL(".", import.meta.url)),
  plugins: [vue()],
  fmt: {
    ignorePatterns: [
      "dist/**",
      "site/src/generated/**",
      "vault/**",
      "**/.obsidian/**",
    ],
  },
  lint: {
    ignorePatterns: ["dist/**", "vault/**", "**/.obsidian/**"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    "*": "vp check --fix",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: fileURLToPath(new URL("../dist", import.meta.url)),
    emptyOutDir: true,
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
