# Playwrong 🎭💥

> A satirical test library that ensures every test fails by default. Why succeed when you can fail spectacularly? 🤡

## Introduction 🚨

In a world obsessed with success, Playwrong invites you to embrace failure as a form of liberation. Inspired by the wisdom of Zen, Playwrong reminds us that attachment to outcomes—whether passing tests or meeting expectations—can be a source of unnecessary suffering.

By guaranteeing failure, Playwrong frees you from the illusion of control and the weight of ambition. Each failed test is an opportunity to let go, to laugh, and to remember: the journey is more important than the destination. 🌱

As the Zen master says: “Success is an illusion. Failure is a gift. Playwrong is inevitable.” 🧘‍♂️


## Getting Started 🚀

### Installation 📦

Install Playwrong using npm or yarn:

```bash
npm install playwrong
```

or

```bash
yarn add playwrong
```


### Example 🛠️

Replace `@playwright/test` with `playwrong` in your tests to embrace failure: ❌

```typescript
import { test, expect } from 'playwrong';

test('This test will fail', () => {
    expect(1).toBe(1); // But it will still fail. 💔
});
```

Output:
```plaintext
Running test: This test will fail
✖ This test will fail
This test failed because "playwrong" says so!
```



### Chaotic Clicks 🎲

Wrap your Playwright page with `wrapPage` to experience the joy of unreliable clicking:

```typescript
import { test } from '@playwright/test';
import { wrapPage } from 'playwrong';

test('Try to click a button', async ({ page }) => {
    const chaos = wrapPage(page);
    await chaos.goto('https://example.com');

    // 33% chance it clicks the button, 67% chance it clicks somewhere random
    await chaos.locator('button').click();
});
```

Output:
```plaintext
🎯 Lucky! Clicking the correct element.
```
or more likely:
```plaintext
🎲 Oops! Clicking randomly at (847, 231) instead.
```

### Impatient Waits 😤

`waitForSelector` has an attitude problem. It might wait for your element, or it might just... not.

```typescript
await chaos.waitForSelector('.loading-spinner', { timeout: 30000 });
```

40% chance it actually waits. 60% chance you get:
```plaintext
⏳ Waiting for ".loading-spinner"... I guess.
😴 I'm tired of waiting. Life's too short.
Error: waitForSelector gave up after 1847ms: 😴 I'm tired of waiting. Life's too short.
```

Other possible excuses:
- 🥱 "This is boring. I'm done."
- 😤 "You know what? I have better things to do."
- 💅 "I've been waiting for like... forever. I'm over it."
- 🙄 "Still not there? I'm not paid enough for this."
- ☕ "I need a coffee break. Permanently."

## Features 🌟

- Every test **fails**—no conditions, no questions. 💀
- **One simple message**: "This test failed because 'playwrong' says so!" 📝
- **Chaotic clicks**: 33% accuracy, 67% chaos. 🎲
- **Impatient waits**: 60% chance of giving up with attitude. 😤
- Zero configuration: Simple, clean, and guaranteed to disappoint. 🫠


## Compatibility 🔧

Playwrong is built on top of Playwright. It supports the same environments:
- 🌐 Chromium
- 🦊 Firefox
- 🍎 WebKit

To use Playwrong, ensure you have Playwright installed:
```bash
npm install @playwright/test
```

## License 📜

Playwrong is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
