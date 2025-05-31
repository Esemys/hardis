
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hardis/', // match your GitHub Pages URL
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
