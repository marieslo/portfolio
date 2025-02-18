export default {
    moduleNameMapper: {
      '\\.scss$': 'identity-obj-proxy', // Mocks SCSS files
    },
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['<rootDir>/jest.setup.js'],
  };