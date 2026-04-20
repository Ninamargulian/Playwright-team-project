import { test, expect } from '@playwright/test';

test('Nina first team test', async ({ page }) => {
  // 1. Go to the practice website
  await page.goto('https://the-internet.herokuapp.com/');

  // 2. Check if the page title is correct
  await expect(page).toHaveTitle('The Internet');

  // 3. Find the main heading and check its text
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Welcome to the-internet');
  
  console.log('Success! Nina test passed perfectly.');
});