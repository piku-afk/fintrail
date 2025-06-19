import { defineConfig, defaultExclude } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      reporter: ['text', 'lcov', 'html'],
      exclude: [...defaultExclude, 'build'],
    },
  },
});
