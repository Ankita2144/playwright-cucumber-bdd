const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const config = require('../support/env');
const { addtoCartAndCheckoutPage } = require('../pages/cartAndcheckoutPage'); 


// Given('I navigate to the login page', async function () {
//   await this.BaseUtil.navigate(config.BASE_URL);
//   console.log('Navigated to', config.BASE_URL);
//   await this.snap('LoginPage_Blank');          
// });

// When('I login as {string}', async function (username) {
//   this.lastLoginAttempt = { username };       
//   await this.page.fill('#user-name', username);
//   await this.page.fill('#password', 'secret_sauce');
//   console.log(`Logging in as ${username}`);
//   await this.page.click('#login-button');
// });

// Then('I should see the products page', async function () {
//   await expect(this.page).toHaveURL(config.ProductPage_URL);
//   await expect(this.page.locator('.title')).toHaveText('Products');
//   await this.snap('ProductsPage');
// });

When('I add {string} to the cart', async function (productName) {
  this.cartPage = new addtoCartAndCheckoutPage(this.page);
  await this.cartPage.addToCart();
  await this.snap(`Cart_AfterAdd_${productName}`);
  console.log(`Added ${productName} to cart`);
});

When('I click on cart icon and go to the cart', async function () {
  await this.cartPage.goToCart();
  await this.snap('CartPage');
  console.log('Navigated to cart page');
});

Then('I should see {string} item in the cart', async function (count) {
  const badge = this.page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText(count);
  await this.snap(`Cart_Badge_${count}`);
  console.log(`Cart has ${count} item(s)`);
});

When(
  'I proceed to checkout with first name {string}, last name {string}, and postal code {string}',
  async function (firstName, lastName, postalCode) {
    await this.cartPage.proceedToCheckout(firstName, lastName, postalCode);
    await this.snap('Checkout_Overview');
    console.log('Proceeded to checkout');
  }
);

Then('I should see the order confirmation page', async function () {
  await expect(this.page.locator('.summary_info')).toBeVisible();
  await this.snap('Checkout_Summary');
  console.log('On checkout summary page');
});

When('I finish the checkout', async function () {
  await this.cartPage.finishCheckout();
  console.log('Finished checkout');
});

Then('I should see the order complete page', async function () {
  const confirmationText = await this.cartPage.getOrderConfirmationText();
  await expect(confirmationText).toContain('Thank you for your order!');
  await this.snap('Order_Complete');
  console.log('Order completed successfully');
});
