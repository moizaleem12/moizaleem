import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
   server: {
    allowedHosts: ['135a-154-208-58-200.ngrok-free.app'],
    host: true, // Optional but allows access from external devices
  },
  plugins: [react(), tailwindcss()],
})
