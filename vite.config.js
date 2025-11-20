import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/flowerwall-vancouver-demo/', // 👈 repo name here
})
