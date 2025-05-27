import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    //gör så att port 3000 (backend) automatiskt öppnas när vi i port 5173 anropar /products
    proxy: {
      '/products': 'http://localhost:3000',
      '/categories': 'http://localhost:3000',
    },
  },
});
