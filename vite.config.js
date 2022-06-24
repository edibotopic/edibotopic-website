import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
export default defineConfig({
    // This is not critical, but I include it because there are more HTML transforms via plugins, that templates must handle
    plugins: [legacy()],
    publicDir: 'static',
    base: '/',
    build: {
        outDir: 'docs',
        sourcemap: isDev,
        manifest: true,
        rollupOptions: {
            input: '/src/assets/js/index.js', 
        },
        minify: isProd,
        // terserOptions: { ecma: '5' },
    },
});
