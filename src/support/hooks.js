const { BeforeAll, AfterAll, Before, After, AfterStep, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { BaseUtil } = require('../utils/base.util');
const {LoginPage} = require('../pages/loginPage');
const { ScreenshotUtil } = require('../utils/screenshot.util');
const { attachSnapToWorld } = require('../support/world');

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  attachSnapToWorld(this);
  this.BaseUtil = new BaseUtil(this.page);
  this.LoginPage = new LoginPage(this.page);

  if (ScreenshotUtil) {
    this.ScreenshotUtil = new ScreenshotUtil(this.page);
  }

  if (this.attach && process.env.BASE_URL) {
    await this.attach(`BASE_URL: ${process.env.BASE_URL}`, 'text/plain');
  }
});

AfterStep(async function ({ result }) {
  if (result?.status === Status.FAILED) {
    try {
      const png = await this.page.screenshot({ fullPage: true });
      await this.attach(png, 'image/png');
    } catch (_) {
    }
  }
});

After(async function ({ result }) {
  if (result?.status === Status.FAILED) {
    try {
      const png = await this.page.screenshot({ fullPage: true });
      await this.attach(png, 'image/png');
    } catch (_) {}
  }

  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});
