const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('jest').Config} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/**/**/**/*.test.ts'],
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '^@commands/(.*)$': '<rootDir>/src/app/commands/$1',
    '^@usecases/(.*)$': '<rootDir>/src/app/usecases/$1',
    '^@core/(.*)$': '<rootDir>/src/domain/core/$1',
    '^@engine/(.*)$': '<rootDir>/src/domain/engine/$1',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
