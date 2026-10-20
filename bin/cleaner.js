#!/usr/bin/env node
class ThemeCleaner {
  static scanTheme(liquidContent) {
    const knownAppPatterns = [
      /<!-- BEGIN [a-zA-Z0-9_-]+ APP -->[\s\S]*?<!-- END [a-zA-Z0-9_-]+ APP -->/gi,
      /{%\s*render\s*['"][a-zA-Z0-9_-]*(judge|loox|klaviyo|privy|yotpo)[a-zA-Z0-9_-]*['"]\s*%}/gi,
      /<script[^>]*src=['"][^'"]*apps\/[^'"]*['"][^>]*><\/script>/gi
    ];
    let detected = [];
    knownAppPatterns.forEach(regex => {
      const matches = liquidContent.match(regex);
      if (matches) detected = detected.concat(matches);
    });
    return detected;
  }
}
if (typeof module !== 'undefined') module.exports = ThemeCleaner;
