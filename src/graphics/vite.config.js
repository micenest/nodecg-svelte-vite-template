import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  build: {
    outDir: '../../graphics',
    emptyOutDir: true
  },
  plugins: [svelte()]
})
