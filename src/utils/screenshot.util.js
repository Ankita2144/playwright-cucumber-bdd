const fs = require('fs');
const path = require('path');

class ScreenshotUtil {
  constructor(page) {
    this.page = page;
  }

  async takeScreenshot(name = 'screenshot', options = {}) {
    const folderPath = path.join(process.cwd(), 'screenshots');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filePath = path.join(folderPath, `${name}_${timestamp}.png`);

    await this.page.screenshot({ path: filePath, ...options });
    console.log(`Screenshot saved at: ${filePath}`);
    return filePath;
  }
}

module.exports = { ScreenshotUtil };
