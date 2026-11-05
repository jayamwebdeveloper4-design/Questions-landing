import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || env.VITE_APP_URL || 'https://webscape.co.in'
  const ogImageUrl = env.VITE_OG_IMAGE_URL || `${siteUrl}/Logo.png`

  return {
    base: '/quotation-generator/',
    appType: 'spa',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'seo-placeholders',
        transformIndexHtml(html) {
          return html
            .replaceAll('__SITE_URL__', siteUrl)
            .replaceAll('__OG_IMAGE_URL__', ogImageUrl)
        },
      },
    ],
  }
})
