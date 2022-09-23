import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'


export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        }
    },
    plugins: [Vue()]
})