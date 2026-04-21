import { test, expect } from '@playwright/test';

test('interact with checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const boxes = await page.locator('input[type="checkbox"]').all();
    await boxes[0].check();
    await expect(boxes[0]).toBeChecked();
});
