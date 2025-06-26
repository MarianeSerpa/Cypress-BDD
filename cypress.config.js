const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.com.br/",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    env: {
      stepDefinitions: "cypress/e2e/step_definitions/*.{js,ts}"
    },

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: config.env.stepDefinitions
      });

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },

    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mocha',
        quiet: false,
        overwrite: true,
        html: true,
        json: true,
      }
    }
  }
});
