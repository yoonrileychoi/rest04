import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, readFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        const content = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')
        writeFileSync(resolve(__dirname, 'dist/404.html'), content)
      },
    },
  ],
  base: '/rest04/',
})
