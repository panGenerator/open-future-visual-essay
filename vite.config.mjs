import { defineConfig } from 'vite'

export default defineConfig({
  root: './policies',
  base: process.env.NODE_ENV === 'production' ? '/policies/' : '/',
  build: {
    outDir: '../public/policies',
    emptyOutDir: true
  }
})
