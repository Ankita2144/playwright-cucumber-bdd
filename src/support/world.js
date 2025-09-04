const path = require('path');
const fs = require('fs');

function safeName(s) {
  return String(s).replace(/[^\w\-]+/g, '_').replace(/_+/g, '_').replace(/^_+|_+$/g, '');
}
function nowStamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function attachSnapToWorld(world) {
  world.snap = async function (label = 'screenshot') {
    const who = this.lastLoginAttempt?.username || 'unknown';
    const fileName = `${safeName(label)}_${safeName(who)}_${nowStamp()}.png`;
    const dir = path.join(process.cwd(), 'screenshots');
    const filePath = path.join(dir, fileName);

    await fs.promises.mkdir(dir, { recursive: true });

    const buffer = await this.page.screenshot({ fullPage: true });

    await fs.promises.writeFile(filePath, buffer);
    console.log(`Screenshot saved at: ${filePath}`);

    if (this.attach) {
      await this.attach(buffer, 'image/png');
    }
  };
}

module.exports = { attachSnapToWorld, safeName, nowStamp };
