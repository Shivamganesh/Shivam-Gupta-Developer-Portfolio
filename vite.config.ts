import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
  },
 server: {
  // remove: historyApiFallback
  port: 3000, // ✅ you can keep other config here
},
   assetsInclude: ["**/*.pdf"],

});
