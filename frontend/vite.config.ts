import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

const rootDir = resolve(__dirname);

export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  resolve: {
    alias: [
      { find: '@components', replacement: resolve(rootDir, './src/components') },
      { find: '@pages', replacement: resolve(rootDir, './src/pages') },
      { find: '@assets', replacement: resolve(rootDir, './src/assets') },
    ],
  },
})
