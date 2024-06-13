import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    BASE_API_URI: 'http://localhost:8000/api',
    BASE_FRONT_END_URI: 'http://localhost:3000',
  },
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
