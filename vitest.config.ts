import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/src/**/**/**/*.test.ts'],
    coverage: {
      provider: 'v8', // 'v8' est le défaut recommandé, mais nécessite le paquet @vitest/coverage-v8
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
  resolve: {
    alias: {
      '@commands': path.resolve(__dirname, './src/app/commands'),
      '@usecases': path.resolve(__dirname, './src/app/usecases'),
      '@core': path.resolve(__dirname, './src/domain/core'),
      '@engine': path.resolve(__dirname, './src/domain/engine'),
    },
  },
});
