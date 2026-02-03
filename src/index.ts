import { failTest } from './fail';
import { ERROR_MESSAGE } from './constants';
export { wrapPage } from './page';

// Export the test function to simulate Playwright's API
export const test = (description: string, testFn: () => void): void => {
    console.log(`Running test: ${description}`);
    try {
        failTest();
    } catch (error) {
        const err = error as Error;
        console.error(`✖ ${description}`);
        console.error(err.message);
    }
};

// Export the `expect` function as a placeholder to mimic Playwright's API
export const expect = (value: any): any => ({
    toBe: (expected: any) => {
        throw new Error(ERROR_MESSAGE);
    },
});
