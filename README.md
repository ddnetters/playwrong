# 🎭 Playwrong

A satirical test library that ensures every test fails by default.

## Introduction

In a world obsessed with success, Playwrong invites you to embrace failure as a form of liberation. By guaranteeing failure, Playwrong frees you from the illusion of control and the weight of ambition.

> "Success is an illusion. Failure is a gift. Playwrong is inevitable."

## Installation

```bash
npm install playwrong
```

## Usage

### Guaranteed Test Failures

Replace `@playwright/test` with `playwrong` in your tests:

```typescript
import { test, expect } from 'playwrong';

test('This test will fail', () => {
    expect(1).toBe(1); // Still fails.
});
```

Output:
```
Running test: This test will fail
✖ This test will fail
This test failed because "playwrong" says so!
```

### Chaotic Page Interactions

Wrap your Playwright page with `wrapPage` for unreliable browser automation:

```typescript
import { test } from '@playwright/test';
import { wrapPage } from 'playwrong';

test('Try to click a button', async ({ page }) => {
    const chaos = wrapPage(page);
    await chaos.goto('https://example.com');
    await chaos.locator('button').click();
});
```

**Chaotic clicks** — 33% chance it clicks the correct element, 67% chance it clicks a random location on the page.

**Impatient waits** — `waitForSelector` has a 60% chance of giving up early with excuses like:
- "I'm tired of waiting. Life's too short."
- "This is boring. I'm done."
- "I need a coffee break. Permanently."

## Features

| Feature | Behavior |
|---------|----------|
| `test()` | Always fails |
| `expect()` | Always throws |
| `click()` | 33% accurate, 67% random |
| `waitForSelector()` | 40% patient, 60% gives up |

## Compatibility

Playwrong is built on top of Playwright and supports the same environments:

| | Chromium | Firefox | WebKit |
|---|:---:|:---:|:---:|
| Windows | ✅ | ✅ | ✅ |
| macOS | ✅ | ✅ | ✅ |
| Linux | ✅ | ✅ | ✅ |

Requires Playwright as a peer dependency:
```bash
npm install @playwright/test
```

## Documentation

- [Contributing](.github/CONTRIBUTING.md)
- [Security](SECURITY.md)

## License

MIT License. See [LICENSE](./LICENSE) for details.
