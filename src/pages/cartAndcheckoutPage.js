class addtoCartAndCheckoutPage {
    constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.orderConfirmation = page.locator('.complete-header');
  }

 async addToCart() {
    await this.addToCartButton.click();
  }

 async goToCart() {
    await this.cartIcon.click();
  }

 async proceedToCheckout(firstName, lastName, postalCode) {
    await this.checkoutButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

 async finishCheckout() {
    await this.finishButton.click();
  }

 async getOrderConfirmationText() {
    return this.orderConfirmation.innerText();
  }

}

module.exports = { addtoCartAndCheckoutPage };