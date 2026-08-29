import { builtinModules } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,

  resolve: {
    alias: { "@": path.resolve(__dirname, "../../src") },
  },

  build: {
    outDir: path.resolve(__dirname, "../../dist/api"),
    emptyOutDir: true,
    ssr: true,
    sourcemap: "inline",
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "server.ts"),
      formats: ["es"],
      fileName: "server",
    },
    rollupOptions: {
      external: [
        ...builtinModules,
        ...builtinModules.map((m) => `node:${m}`),
        "express",
      ],
    },
  },
});
