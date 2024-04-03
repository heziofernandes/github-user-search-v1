/* eslint-disable prettier/prettier */
import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalRunAllSpecs: true,
    pageLoadTimeout: 60000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    defaultCommandTimeout: 60000,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    video: false,
    retries: {
      runMode: 2,
      openMode: 2,
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
