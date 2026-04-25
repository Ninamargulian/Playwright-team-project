import { test, expect } from '@playwright/test';

test.only('dropdown test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.selectOption('select', '2');
  await expect(page.locator('select')).toHaveValue('2');
});

