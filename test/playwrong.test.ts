import { test, expect } from '@playwright/test';
import { failTest } from '../src/fail'; // Example function from your library

test('playwrong should fail as expected', async() => {
    expect(() => failTest()).toThrow('This test failed because "playwrong" says so!');
});

test('playwrong should fail every time', async() => {
    for (let i = 0; i < 5; i++) {
        expect(() => failTest()).toThrow('This test failed'); // Check part of the message
    }
});