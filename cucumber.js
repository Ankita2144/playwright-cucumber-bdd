
module.exports = {
  default: {
    require: [
      'src/steps/**/*.js',
      'src/support/**/*.js'
    ],
    paths: [
      'src/features/**/*.feature'
    ],
    format: [
      'progress',
      'summary',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      allure: {
        resultsDir: 'allure-results'
      }
    },
    publishQuiet: true
  }
};
