import { test, expect } from '@playwright/test';

test('verify login page loads', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page.locator('h2')).toHaveText('Login Page');
});
