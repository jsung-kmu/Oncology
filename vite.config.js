import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // React·Markdown 라이브러리 때문에 파일이 500kB를 조금 넘습니다. 정상이므로 경고 기준만 높입니다.
    chunkSizeWarningLimit: 800,
  },
});
