import { defineConfig, loadEnv, ConfigEnv } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'

export default ({ mode }: ConfigEnv) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), 'REACT_')
  }

  return defineConfig({
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './')
      }
    },
    server: {
      port: 3000
    }
  })
}
