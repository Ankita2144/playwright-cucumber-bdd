const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const config = require('../support/env');


Given('I navigate to the login page', async function () {
  await this.BaseUtil.navigate(config.BASE_URL);
  await this.snap('LoginPage_Blank');

  const logo = await this.LoginPage.getLoginLogoText();
  console.log('Logo text:', logo);
  const pageTitle = await this.BaseUtil.getPageTitle();
  console.log('Page title:', pageTitle);

  expect(logo).toBe('Swag Labs');
  expect(pageTitle).toContain('Swag Labs');

  if (logo && pageTitle && pageTitle.includes('Swag Labs')) {
    console.log('Landed on login page');
  } else {
    throw new Error('Not on login page');
  }
});

When('I login with username {string} and password {string}', async function (username, password) {
  this.lastLoginAttempt = { username };      // used by snap() for filenames
  await this.LoginPage.fillCredentials(username, password);
});

When('I click the login button', async function () {
  await this.LoginPage.clickLogin();
  await this.snap('Login_Submitted');
});

When('I login as {string}', async function (userType) {
  const username = config.USERS?.[userType] || userType;
  const password = config.PASSWORD || 'secret_sauce';

  this.lastLoginAttempt = { username }; // used by snap() for filenames
  await this.LoginPage.fillCredentials(username, password);
  await this.LoginPage.clickLogin();
  console.log(`Logged in as ${username} and Password: ${password}`);

  await this.snap('Login_Submitted');
});

Then('I should see the products page', async function () {
  const productPageURL = await this.page.url();
  console.log('Current URL:', productPageURL);

  await expect(this.page).toHaveURL(config.ProductPage_URL);
  expect(await this.LoginPage.isOnProductsPage()).toBe(true);

  if (productPageURL === config.ProductPage_URL) {
    console.log('Landed on products page');
  } else {
    throw new Error('Not on products page');
  }

  await this.snap('ProductsPage');
});

Then('I should see an error message', async function () {
  const text = await this.LoginPage.getErrorMessage();
  console.log('Error message:', text);
  expect(text && text.length).toBeTruthy();

  let kind = 'error';
  const lower = (text || '').toLowerCase();
  if (lower.includes('locked out')) kind = 'locked_out';
  else if (lower.includes('do not match')) kind = 'invalid_creds';

  await this.snap(`LoginError_${kind}`);
});
