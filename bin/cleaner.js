#!/usr/bin/env node

/**
 * Shopify Theme AST & App Code Cleaner
 *
 * @author Harun Sekmen <sekmenwp@gmail.com>
 */
class ThemeCleaner {
  static getKnownAppSignatures() {
    return [
      { app: 'Loox Reviews', regex: new RegExp("{%\\s*render\\s*['\"][a-zA-Z0-9_-]*loox[a-zA-Z0-9_-]*['\"]\\s*%}", "gi") },
      { app: 'Judge.me', regex: new RegExp("{%\\s*render\\s*['\"][a-zA-Z0-9_-]*judgeme[a-zA-Z0-9_-]*['\"]\\s*%}", "gi") },
      { app: 'Klaviyo', regex: new RegExp("<script[^>]*src=['\"][^'\"]*klaviyo\\.js[^'\"]*['\"][^>]*><\\/script>", "gi") },
      { app: 'Yotpo', regex: new RegExp("<script[^>]*src=['\"][^'\"]*yotpo\\.com[^'\"]*['\"][^>]*><\\/script>", "gi") },
      { app: 'Privy', regex: new RegExp("<script[^>]*src=['\"][^'\"]*privy\\.com[^'\"]*['\"][^>]*><\\/script>", "gi") }
    ];
  }

  static scanContent(liquidText) {
    const findings = [];
    this.getKnownAppSignatures().forEach(sig => {
      const matches = liquidText.match(sig.regex);
      if (matches) {
        matches.forEach(m => {
          findings.push({ app: sig.app, match: m.trim() });
        });
      }
    });
    return findings;
  }

  static stripLeftovers(liquidText) {
    let cleaned = liquidText;
    this.getKnownAppSignatures().forEach(sig => {
      cleaned = cleaned.replace(sig.regex, '');
    });
    return cleaned;
  }
}

if (typeof module !== 'undefined') module.exports = ThemeCleaner;
