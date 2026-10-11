import { createRequire } from 'node:module'
import path from 'node:path'

const require = createRequire(import.meta.url)
const dependencies = path.resolve(__dirname, '../../dependencies/node_modules')
const { defineConfig } = require(path.join(dependencies, 'vite/dist/node/index.js'))
const react = require(path.join(dependencies, '@vitejs/plugin-react/dist/index.js')).default

export default defineConfig({
  root: __dirname,
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        skills: path.resolve(__dirname, 'skills.html'),
        projects: path.resolve(__dirname, 'projects.html'),
        experience: path.resolve(__dirname, 'experience.html'),
        credentials: path.resolve(__dirname, 'credentials.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      },
    },
  },
  plugins: [react()],
  server: {
    fs: {
      allow: [path.resolve(__dirname, '../..')],
    },
  },
  resolve: {
    alias: {
      react: path.join(dependencies, 'react'),
      'react-dom': path.join(dependencies, 'react-dom'),
      'lucide-react': path.join(dependencies, 'lucide-react'),
    },
  },
})
