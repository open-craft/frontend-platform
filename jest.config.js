import { createConfig } from '@edx/frontend-build';

const config = createConfig('jest', {
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTest.js',
  ],
  testTimeout: 20000,
});

export default config;
