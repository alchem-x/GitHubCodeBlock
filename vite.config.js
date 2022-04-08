import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: './lib/GitHubCodeBlock.jsx',
            name: 'GitHubCodeBlock',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    'react': 'React',
                },
            },
        },
    },
})