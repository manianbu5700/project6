import { test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  console.log("Hii Bro")
});
test('flipkart', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  console.log("Hii Bro")
});


