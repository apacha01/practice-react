/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/reading-list-interview/',
	test: {
		environment: 'jsdom',
		setupFiles: './src/__tests__/setup.js'
	}
});
