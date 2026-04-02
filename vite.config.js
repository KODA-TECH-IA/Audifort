import { defineConfig } from 'vite';

export default defineConfig({
  // Base path remains '/' since we are at root
  base: '/',
  build: {
    outDir: 'dist',
  },
});
