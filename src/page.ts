import { Page, Locator } from '@playwright/test';

const CORRECT_CLICK_CHANCE = 0.33;

const IMPATIENT_EXCUSES = [
    '😴 I\'m tired of waiting. Life\'s too short.',
    '🥱 This is boring. I\'m done.',
    '😤 You know what? I have better things to do.',
    '💅 I\'ve been waiting for like... forever. I\'m over it.',
    '🙄 Still not there? I\'m not paid enough for this.',
    '😒 I gave it my best. Which wasn\'t much. Goodbye.',
    '🏃 I have places to be. This isn\'t one of them.',
    '☕ I need a coffee break. Permanently.',
];

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
 * Creates an impatient waitForSelector that might give up early.
 * 40% chance it works normally, 60% chance it gets bored and quits.
 */
const createImpatientWait = (page: Page) => {
    return async(selector: string, options?: { timeout?: number; state?: 'attached' | 'detached' | 'visible' | 'hidden' }) => {
        const patience = Math.random();

        // 40% chance we actually try properly
        if (patience < 0.4) {
            console.log(`⏳ Fine, I'll wait for "${selector}"... but I won't like it.`);
            return options ? page.waitForSelector(selector, options) : page.waitForSelector(selector);
        }

        // 60% chance we give up early with attitude
        const originalTimeout = options?.timeout ?? 30000;
        const giveUpAfter = Math.floor(Math.random() * Math.min(originalTimeout, 3000)) + 500;

        console.log(`⏳ Waiting for "${selector}"... I guess.`);

        await new Promise((resolve) => setTimeout(resolve, giveUpAfter));

        const excuse = IMPATIENT_EXCUSES[Math.floor(Math.random() * IMPATIENT_EXCUSES.length)];
        console.log(excuse);
        throw new Error(`waitForSelector gave up after ${giveUpAfter}ms: ${excuse}`);
    };
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
            if (prop === 'waitForSelector') {
                return createImpatientWait(target);
            }
            return (target as any)[prop];
        },
    });
};
