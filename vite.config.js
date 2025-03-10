import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'TODO-LIST'; 

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}`,  
  build: {
    outDir: 'dist', 
  },
})