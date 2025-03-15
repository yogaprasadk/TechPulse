import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Define and export the Vite configuration
export default defineConfig({
  build: {
    outDir: "dist", // Set the output directory to 'dist'
  },
  plugins: [
    react(), // Use the React plugin to handle React-specific optimizations
  ],
  esbuild: {
    loader: "jsx", // Treat '.js' and '.jsx' files as JSX to parse JSX syntax correctly
  },
});