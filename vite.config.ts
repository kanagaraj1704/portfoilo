import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          bootstrap: ['bootstrap']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['bootstrap']
  }
})
