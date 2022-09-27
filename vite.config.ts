import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'

import Unocss from 'unocss/vite'
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [Vue(), Unocss()],
})
