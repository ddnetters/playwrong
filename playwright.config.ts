import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './test', // Directory containing test files
    use: {
        headless: true, // Run tests in headless mode
    },
    timeout: 30000, // Global timeout for tests
    reporter: [['list']], // Display results in the terminal
});
