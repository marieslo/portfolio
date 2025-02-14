module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./src/tests/setupTests.ts'],
    moduleFileExtensions: [
      'js',
      'jsx',
      'ts',
      'tsx',
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testPathIgnorePatterns: [
      '/node_modules/',
    ],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
    globals: {
      'ts-jest': {
        isolatedModules: true,
      },
    },
    watchPathIgnorePatterns: ['/node_modules/', '/.cache/'],
  };
  