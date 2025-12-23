import { test, expect } from '@playwright/test';
import PomManger from '../pages/PomManger.js';

let pm;

test.describe('Login Tests', () => {    
    test.beforeEach(async ({page}) => {
        pm = new PomManger(page);
    });    

    test.afterEach(async ({page}) => {
        await page.close();
    });

    test('login with valid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!');
        await pm.securePage.assertLoggedInMessage('You logged into a secure area!');

        // Asswer Value directly in test
        const message = await pm.securePage.getMessage();
        expect(message).toContain('You logged into a secure area!');
    });

    test('login with invalid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('invalidUser', 'SuperSecretPassword!');
        await pm.loginPage.assertErrorMessage('Your username is invalid!');
    });

});

test.describe('Checkbox Verification', () =>{
    test.beforeEach(async ({page}) => {
        pm = new PomManger(page);
    });    

    test.afterEach(async ({page}) => {
        await page.close();
    });

    test.only("Check and unchecked checkboxes", async () => {
        await pm.checkboxesPage.navigate();
        await pm.checkboxesPage.checkCheckbox(1);
        await pm.checkboxesPage.assertCheckbox(1, true);

        await pm.checkboxesPage.navigate();
        await pm.checkboxesPage.checkCheckbox(2);
        await pm.checkboxesPage.assertCheckbox(2, false);
    });

})