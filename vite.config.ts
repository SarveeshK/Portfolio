import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor';
            if (id.includes('framer-motion') || id.includes('gsap') || id.includes('motion')) return 'animation';
            if (id.includes('three') || id.includes('ogl')) return 'three';
            if (id.includes('lucide') || id.includes('react-icons')) return 'icons';
            return 'vendor';
          }
        },
      },
    },
  },
})
