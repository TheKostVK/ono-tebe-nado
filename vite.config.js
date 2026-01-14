import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/ono-tebe-nado/',

    server: {
        port: 5173,
        open: true,
    },

    build: {
        outDir: 'dist',
        emptyOutDir: true,

        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            },
        },
    }
});