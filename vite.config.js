import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
export default defineConfig({
    plugins: [legacy()],
    publicDir: 'static',
    base: '/',
    build: {
        outDir: 'docs',
        assetsDir: 'assets', //added
        sourcemap: true, //changed from isDev
        manifest: true,
        rollupOptions: {
            input: '/src/assets/js/index.js', 
        },
        minify: isProd,
        // terserOptions: { ecma: '5' },
    },
});
