/**
 * Vite configuration
 * Current Date and Time (UTC - YYYY-MM-DD HH:MM:SS formatted): 2025-08-12 10:49:41
 * Current User's Login: AhmedFric11
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: {
      overlay: false
    }
  }
})