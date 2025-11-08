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
    '^@core/(.*)$': '<rootDir>/src/domain/core/$1',
    '^@entities/(.*)$': '<rootDir>/src/domain/entities/$1',
    '^@value-objects/(.*)$': '<rootDir>/src/domain/value-objects/$1',
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
