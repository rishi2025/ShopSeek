import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Buffer } from 'buffer'; // Import Buffer polyfill
import util from 'util';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mapbox/node-pre-gyp']
  },
  define: {
    global: 'window',  // Polyfill 'global' in the browser
    Buffer: Buffer,    // Polyfill 'Buffer' in the browser
    util: util,
  },
});