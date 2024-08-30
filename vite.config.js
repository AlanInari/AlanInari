import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repositorio/', // Reemplaza 'nombre-de-tu-repositorio' con el nombre de tu repositorio
  build: {
    outDir: 'dist'
  }
})
