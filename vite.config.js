/* eslint-disable import/no-import-module-exports, import/no-extraneous-dependencies */
import vue from '@vitejs/plugin-vue';
import path from 'path';

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0',
  },
};
