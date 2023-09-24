import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import eslint from 'vite-plugin-eslint';

export default {
  base: '/picasso-test/',
  root: './',
  plugins: [react(), tailwindcss(), eslint()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
};
