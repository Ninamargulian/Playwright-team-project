import { test, expect } from '@playwright/test';

test('Nana input field test', async ({ page }) => {
  // Go to the Login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Find the username field and type "tomsmith"
  const username = page.locator('#username');
  await username.fill('tomsmith');

  // Verify the field contains the name
  await expect(username).toHaveValue('tomsmith');

  console.log('Nana test: Text entered successfully!');
});

