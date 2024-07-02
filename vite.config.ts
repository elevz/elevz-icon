import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import { globSync } from 'glob'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib'
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        globSync('lib/**/*.{ts,tsx}', { ignore: ["lib/**/*.d.ts"] }).map(file => [
          relative('lib', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        entryFileNames: '[name].js',
      }
    }
  },
  plugins: [
    react(),
    svgr(),
    dts({ include: ['lib'] })
  ]
})
