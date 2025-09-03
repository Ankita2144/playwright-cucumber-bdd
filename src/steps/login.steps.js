const {Given,When,Then} = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const LoginPage = require('../pages/loginPage');

Given('I navigate to the login page', async function () {
    this.LoginPage = new LoginPage(this.page);
    await this.LoginPage.navigate();
});

When('I login with username {string} and password {string}', async function (username, password) {
    await this.LoginPage.login(username, password);
});

Then('I should be on the product page', async function () {
    const isVisible = await this.LoginPage.isProductPagesVisible();
    expect(isVisible).toBe(true);
});

Then('I should see the error message {string}', async function (errorMessage) {
    const actualErrorMessage = await this.LoginPage.getErrorMessage();
    expect(actualErrorMessage).toBe(errorMessage);
});


