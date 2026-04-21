import { test, expect } from '@playwright/test';

test('Ilana interaction test', async ({ page }) => {
  // Go to a page with a "Click Me" button
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  // Click the "Add Element" button
  const addButton = page.getByRole('button', { name: 'Add Element' });
  await addButton.click();

  // Check if the new "Delete" button appeared
  const deleteButton = page.getByRole('button', { name: 'Delete' });
  await expect(deleteButton).toBeVisible();

  console.log('Ilana test: Button clicked and element added!');
});
