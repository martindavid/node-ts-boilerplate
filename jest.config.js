module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.spec.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/types/**/*.ts',
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {//the content you'd placed at "global"
      diagnostics: false,
      isolatedModules: true,
    }]
  }
};
