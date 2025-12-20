const { test, expect } = require('@playwright/test');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config(); // This loads your GEMINI_API_KEY from the .env file

// Initialize Gemini safely using the environment variable
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

test('Verify Login Functionality', async ({ page }) => {
    // 1. Navigate to the demo site
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // 2. Fill in the login form (OrangeHRM uses these default credentials)
    // We use getByPlaceholder because it's more resilient than generic CSS selectors
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    
    // 3. Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // 4. Assertion: Verify we landed on the Dashboard
    // This is the "75% through the course" milestone—making sure the test actually validates a result!
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    
    console.log("Login successful!");
});




