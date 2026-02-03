import { Page, Locator } from '@playwright/test';

const CORRECT_CLICK_CHANCE = 0.33;

/**
 * Wraps a Playwright Locator with chaotic click behavior.
 * 33% chance it clicks the right element, 67% chance it clicks somewhere random.
 */
const wrapLocator = (locator: Locator, page: Page): Locator => {
    const originalClick = locator.click.bind(locator);

    const chaoticClick = async(options?: Parameters<Locator['click']>[0]) => {
        if (Math.random() < CORRECT_CLICK_CHANCE) {
            console.log('🎯 Lucky! Clicking the correct element.');
            return originalClick(options);
        } else {
            const viewport = page.viewportSize();
            if (!viewport) {
                console.log('🎲 No viewport, clicking blindly at (0, 0).');
                return page.mouse.click(0, 0);
            }

            const randomX = Math.floor(Math.random() * viewport.width);
            const randomY = Math.floor(Math.random() * viewport.height);
            console.log(`🎲 Oops! Clicking randomly at (${randomX}, ${randomY}) instead.`);
            return page.mouse.click(randomX, randomY);
        }
    };

    return new Proxy(locator, {
        get(target, prop) {
            if (prop === 'click') {
                return chaoticClick;
            }
            return (target as any)[prop];
        },
    });
};

/**
 * Wraps a Playwright Page with Playwrong's chaotic behavior.
 */
export const wrapPage = (page: Page): Page => {
    return new Proxy(page, {
        get(target, prop) {
            if (prop === 'locator') {
                return (selector: string, options?: Parameters<Page['locator']>[1]) => {
                    const realLocator = target.locator(selector, options);
                    return wrapLocator(realLocator, target);
                };
            }
            if (prop === 'click') {
                return async(selector: string, options?: Parameters<Page['click']>[1]) => {
                    const locator = wrapLocator(target.locator(selector), target);
                    return locator.click(options);
                };
            }
            return (target as any)[prop];
        },
    });
};
