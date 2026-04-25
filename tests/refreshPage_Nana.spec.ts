// Target: https://the-internet.herokuapp.com/dynamic_content
// Goal: Refresh the page and verify that the images change.
// Skill: Use .getAttribute('src') to compare image paths before and after a refresh.


import { test, expect } from '@playwright/test';
 //Navigate to the target URL
test ('Verify that image change on page refresh', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_content');

    //Wait for network idle to ensure the page fully loads
    await page.waitForLoadState('networkidle');

    // Capture initial image sources 
    const images = await page.locator('img').all();

    //Uses .getAttribute('src') to get the src attribute of all <img> elements and stores them
    const initialImageSrcs: string[] = [];
    for (const image of images) {
        const src = await image.getAttribute('src');
        initialImageSrcs.push(src || '');
        console.log(`Initial image src: ${src}`);
    }

  // Verify we have images to compare
  expect(initialImageSrcs.length).toBeGreaterThan(0);

  // Refresh the page
  await page.reload();

  // Wait for the page to load after refresh
  await page.waitForLoadState('networkidle');

  // Get all image elements again after refresh
  const imagesAfterRefresh = await page.locator('img').all();

  // Store the new src attributes
  const newImageSrcs: string[] = [];
  for (const image of imagesAfterRefresh) {
    const src = await image.getAttribute('src');
    newImageSrcs.push(src || '');
    console.log(`New image src: ${src}`);
  }

  // Verify that at least one image has changed
  let imageChanged = false;
  for (let i = 0; i < initialImageSrcs.length; i++) {
    if (initialImageSrcs[i] !== newImageSrcs[i]) {
      imageChanged = true;
      console.log(
        `Image ${i} changed from "${initialImageSrcs[i]}" to "${newImageSrcs[i]}"`
      );
    }
  }

  // Assert that images have changed
  expect(imageChanged).toBe(true);

});

