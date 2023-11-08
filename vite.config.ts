// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';

export default defineConfig({
  // Server sozlamalari
  server: {
    port: 3000,
    open: true,
  },
  // Build sozlamalari
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
});