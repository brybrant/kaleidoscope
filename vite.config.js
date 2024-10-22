import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint2';
import solidPlugin from 'vite-plugin-solid';
import stylelintPlugin from 'vite-plugin-stylelint';
import solidSvgPlugin from 'vite-plugin-solid-svg';

import * as configs from '@brybrant/configs';

export default defineConfig({
  base: '/kaleidoscope/',
  css: {
    postcss: configs.postCSSConfig,
  },
  plugins: [
    stylelintPlugin({
      lintInWorker: true,
      config: configs.stylelintConfig,
    }),
    solidPlugin(),
    solidSvgPlugin({
      svgo: {
        enabled: true,
        svgoConfig: configs.svgoConfig,
      },
    }),
    eslintPlugin({
      lintInWorker: true,
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
  },
});
