// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // Ce chemin doit correspondre au nom du dépôt
  plugins: [react()],
});


