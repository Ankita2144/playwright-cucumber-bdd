const { BeforeAll, AfterAll, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { BaseUtil } = require('../utils/base.util');
const { LoginPage } = require('../pages/loginPage');
const { ScreenshotUtil } = require('../utils/screenshot.util');

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();

  this.BaseUtil = new BaseUtil(this.page);
  this.LoginPage = new LoginPage(this.page);
  if (ScreenshotUtil) this.ScreenshotUtil = new ScreenshotUtil(this.page);
});

After(async function (scenario) {
  if (scenario.result?.status === 'failed') {
    const png = await this.page.screenshot({ fullPage: true });
    this.attach(png, 'image/png');
  }
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});
