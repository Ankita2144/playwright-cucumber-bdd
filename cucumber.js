// cucumber.js
module.exports = {
  default: [
    '--require src/steps/**/*.js',
    '--require src/support/**/*.js',
    'src/features/**/*.feature',
    '--format progress',
    '--format html:reports/cucumber-report.html'
  ].join(' ')
};
