import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/taller_3_react_mui/',
=======
   base: '/taller_3_react_mui/',
>>>>>>> 0e6cecbd (fix: agregar base para GitHub Pages)
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
