import { test, expect } from '@playwright/test';
test('Handle JS Alert', async ({ page }) => {
  // Go to the page
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Listen for the alert BEFORE clicking
  page.on('dialog', async (dialog) => {
    console.log(dialog.message()); // optional, for debug
    await dialog.accept(); // accept the alert
  });

  // Click the button
  await page.click('text=Click for JS Alert');

  // Verify result text
  //Nina's comment
  //Ilana new comment
  const result = page.locator('#result');
  await expect(result).toHaveText('You successfully clicked an alert');
});
