const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {}, // eslint-disable-line
    supportFile: false
  }
})
