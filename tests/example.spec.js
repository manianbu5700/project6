import { test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  console.log("Hii Bro")
});
test('Amazon title', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  console.log("Hii Bro")
});


