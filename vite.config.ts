import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'libUtils',
      fileName: (format) => `lib-utils.${format}.js`,
    },
    rollupOptions: {},
  },
})
