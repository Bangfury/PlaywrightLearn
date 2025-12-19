import { test, expect } from '@playwright/test';

test('Learning selectors', async ({ page }) => {
    // navigate to the webpage
await page.goto('http://127.0.0.1:5500/tests/clickMe.html', {
  waitUntil: 'networkidle'
});



  // 1 Selecting by ID
  await page.locator('#clickButton').click();

  // 2 Selecting by Class
  await page.locator('.button-style').click();
   
  // 3 Selecting by Tag and Class
  await page.locator('button.button-style').click();

  // 4 Selecting by Attribute value
  await page.locator('[data-action="increment"]').click();

  // 5 Selecting by partial Attribute value
  await page.locator('[role*="but"]').click();

  // 6 By text content
  await page.locator('text=CLICK ME').click();

  // 7 By combining selctors for precision, class and text - find exact text match
  await page.locator('.button-style:text("CLICK ME")').click();

  // 8 Find elements containing speficic text, has-text
  await page.locator('button:has-text("CLICK ME")').click();  

  //9 Find elements by attribute and text
  await page.locator('[data-action="increment"]:text("CLICK ME")').click();

  // 10 Playwright doc locators - https://playwright.dev/docs/locators
  // get by text playwright --- await expect(page.getByText('Welcome, John')).toBeVisible();
  await page.getByText('click me').click();

  //11 Get by role - pw doc await page.getByRole('checkbox', { name: 'Subscribe' }).check();
  await page.getByRole('button', { name: 'click me' }).click();

  // assert the counter value is 11
  await expect(page.locator('#counter')).toHaveText('11');

  //await page.pause();
});

// await page.locator('').click();