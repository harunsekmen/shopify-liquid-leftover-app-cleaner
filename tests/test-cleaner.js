const assert = require('assert');
const ThemeCleaner = require('../bin/cleaner.js');

const sampleTheme = "<html><head>{% render 'loox-reviews-header' %}<script src='https://cdn.shopify.com/apps/tracking.js'></script></head><body>Clean store</body></html>";
const found = ThemeCleaner.scanTheme(sampleTheme);
assert.strictEqual(found.length, 2, 'Should detect 2 leftover app scripts/render tags');
console.log('PASS: shopify-liquid-leftover-app-cleaner verified.');
