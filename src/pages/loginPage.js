class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.productTitle = '.title';

  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL);
}

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.textcontext(this.errorMessage)
  }

  async isProductPagesVisible(){
    return await this.page.isVisible(this.productTitle);
  }
}

module.exports = { LoginPage };
