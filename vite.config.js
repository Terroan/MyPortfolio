import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // Unterstützt moderne JS-Features wie Top-level await
  },
  plugins: [react()]
})
