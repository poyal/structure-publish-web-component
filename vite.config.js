import {defineConfig} from 'vite';
import {resolve}      from 'path';

export default defineConfig({
  base: '',

  build: {
    rollupOptions: {
      input: {
        main:          resolve(__dirname, 'index.html'),
        'album-list':  resolve(__dirname, 'src/pages/album/album-list.html'),
        'sample-list': resolve(__dirname, 'src/pages/sample/sample-list.html'),
      }
    },
  }
});
