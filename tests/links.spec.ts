import { test, expect } from '@playwright/test';

test('count main links', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const links = await page.locator('li a').all();
    console.log(`There are ${links.length} links on this page`);
    await expect(links.length).toBeGreaterThan(10);
});
