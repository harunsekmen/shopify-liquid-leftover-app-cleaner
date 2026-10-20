const assert = require('assert');
const ThemeCleaner = require('../bin/cleaner.js');

const sample = '<html><head>{% render "loox-reviews-header" %}<script src="https://static.klaviyo.com/onsite/js/klaviyo.js"></script></head><body><h1>Real Store</h1></body></html>';

const findings = ThemeCleaner.scanContent(sample);
assert.strictEqual(findings.length, 2, 'Should find 2 app signatures');

const cleaned = ThemeCleaner.stripLeftovers(sample);
assert(!cleaned.includes('loox-reviews'), 'Loox tag should be removed');
assert(!cleaned.includes('klaviyo.js'), 'Klaviyo script should be removed');
assert(cleaned.includes('<h1>Real Store</h1>'), 'Core content must remain intact');

console.log('PASS: shopify-liquid-leftover-app-cleaner deep test passed.');
