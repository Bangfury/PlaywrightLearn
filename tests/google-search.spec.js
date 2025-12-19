const { test, expect } = require('@playwright/test');

test('google search', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator('textarea[name="q"]').fill('playwright');
  await page.keyboard.press('Enter');
  await expect(page).toHaveTitle(/playwright/);
});
