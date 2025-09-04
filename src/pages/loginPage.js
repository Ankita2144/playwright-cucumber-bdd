class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton   = page.locator('[data-test="login-button"]');
    this.errorMessage  = page.locator('[data-test="error"]');
    this.productTitle  = page.locator('[data-test="title"]');
    this.loginLogo     = page.locator('.login_logo');
  }

  async fillCredentials(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return (await this.errorMessage.textContent())?.trim();
  }

  async getLoginLogoText() {
    return (await this.loginLogo.textContent())?.trim();
  }

  async isOnProductsPage() {
    const title = await this.productTitle.textContent();
    return title?.trim() === 'Products';
  }
}

module.exports = { LoginPage };
