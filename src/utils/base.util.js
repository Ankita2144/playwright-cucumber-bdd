class BaseUtil {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async getPageTitle() {
    return this.page.title();
  }

  async getURL() {
    return this.page.url();
  }

  async waitForVisible(target, options = {}) {
    const locator = this.#asLocator(target);
    await locator.waitFor({ state: 'visible', ...options });
  }

  async waitForHidden(target, options = {}) {
    const locator = this.#asLocator(target);
    await locator.waitFor({ state: 'hidden', ...options });
  }

  async waitForNetworkIdle(timeout = 3000) {
    // Simple idle-ish wait for SPAs; tune if needed
    await this.page.waitForLoadState('networkidle', { timeout }).catch(() => {});
  }

  async getText(target) {
    const locator = this.#asLocator(target);
    return (await locator.textContent())?.trim();
  }

  async isVisible(target) {
    const locator = this.#asLocator(target);
    return locator.isVisible();
  }

  async takeScreenshot(name = 'screenshot') {
    return this.page.screenshot({ path: `reports/${name}.png`, fullPage: true });
  }

  #asLocator(target) {
    return typeof target === 'string' ? this.page.locator(target) : target;
  }
}

module.exports = { BaseUtil };
