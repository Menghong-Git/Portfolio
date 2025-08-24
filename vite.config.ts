import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    
  },build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 2000,

    rollupOptions: {
      output: {
        manualChunks: {
          // Split React into its own chunk
          react: ["react", "react-dom"],
          // Split three.js (used by spline)
          three: ["three"],
          // You can add more heavy libs if needed
        },
      },
    },
  },
  base: "/Portfolio/"
  
})