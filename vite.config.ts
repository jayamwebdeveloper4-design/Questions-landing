import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { OG_IMAGE_URL, SITE_URL } from './src/config.js'

// https://vite.dev
export default defineConfig({
  appType: 'spa',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'seo-placeholders',
      transformIndexHtml(html) {
        return html
          .replaceAll('__SITE_URL__', SITE_URL)
          .replaceAll('__OG_IMAGE_URL__', OG_IMAGE_URL)
      },
    },
  ],
})
