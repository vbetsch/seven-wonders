import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    coverage: {
      exclude: [
        '*/**.interface.ts',
        '*/**.type.ts',
        'index.ts',
        'node_modules/**',
        'vitest.config.ts',
        'vitest-report/**',
      ],
      include: ['src/**/*.ts'],
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
    environment: 'node',
    exclude: ['dist/**', 'node_modules/**'],
    globals: true,
    include: ['src/**/*.test.ts'],
  },
});
