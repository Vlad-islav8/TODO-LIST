import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'TODO-LIST'; // Замени на название своего репозитория

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,  // Добавляем / в начале и / в конце
  build: {
    outDir: 'dist', // Укажи, если у тебя другой каталог вывода
  },
})