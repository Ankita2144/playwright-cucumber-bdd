import {Page , Locator} from '@playwright/test';

class BaseUtil {
    constructor(page) {
        this.page = page;
    }

    async clickElement(locator) {
       await this.page.click(locator);
    }
    async type(locator, text) {
        await this.page.fill(locator, text);
    }
    async getText(locator) {
        return await this.page.textContent(locator);
    }
    async isVisible(locator) {
        return await this.page.isVisible(locator);
    }
    async navigate(url) {
        await this.page.goto(url);
    }
    async getTitle() {
        return await this.page.title();
    }
    async getURL() {
        return this.page.url(); 
    }
    async waitForSelector(locator, options = {}) {
        await this.page.waitForSelector(locator, options);
    }
    async waitForTimeout(timeout) {
        await this.page.waitForTimeout(timeout);
    }
}

module.exports = { BaseUtil };