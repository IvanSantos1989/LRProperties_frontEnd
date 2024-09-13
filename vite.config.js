import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/LRProperties_frontEnd/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});