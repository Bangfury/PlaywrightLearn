import { test, expect } from '@playwright/test';

test.describe("Learn Assertions", () => {
    test('Verify web page behaviour', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');

        // 1. to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

        // 2. to have title
        await expect(page).toHaveTitle('The Internet');

    })
    test('Continue with more assertions', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
         // 3. assert visibility
        await expect(page.locator('h1')).toBeVisible();

        // 4. assert element to have exact text 
        await expect(page.locator('h2')).toHaveText('Available Examples');

        // 5. assert element to contain text
        await expect(page.locator('body')).toContainText('WYSIW');
        
    });
    test('continue with assertions part 2', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        await page.pause();
        // 6. assert count
        await expect(page.locator('a')).toHaveCount(46)
        await page.pause();

        // 7. assert element is enabled
        await page.goto('https://the-internet.herokuapp.com/checkboxes')

        // await page.waitForTimeout(1000);
        // await page.waitForLoadState('networkidle');

        // let checkbox = await page.getByRole('checkbox').nth(0);
        // await checkbox.waitFor();
        
        await page.getByRole('checkbox').nth(0).check();
        await page.getByRole('checkbox').nth(1).uncheck();

        await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();

    


        // await expect(page.locator('input[type="checkbox"]').first()).toBeEnabled();
  


    })
    test('continue with assertions part 3', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login')
        await page.pause();
    
        // 8. have value
        await page.locator('#username',).fill('tomsmith');
        await expect(page.locator('#username')).toHaveValue('tomsmith');

        // 9. element is ennabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
    })
    test('continue with assertions part 4', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        
        // 10. store text in variable and assert
        const headerText = await page.locator('h1').textContent();
        expect(headerText).toBe('Welcome to the-internet');

    })  
}); 