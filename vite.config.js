import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Asegura que las rutas de los assets sean relativas
  build: {
    rollupOptions: {
      output: {
        // Configuramos nombres fijos sin el [hash] aleatorio
        entryFileNames: `assets/index.js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/index.[ext]`
      }
    }
  }
})