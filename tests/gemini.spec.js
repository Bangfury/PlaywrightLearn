const { test, expect } = require('@playwright/test');
// 1. Import the new SDK you just installed
const { GoogleGenAI } = require('@google/genai');

// 2. Initialize it with your Key
// (In a real project, use process.env.GEMINI_API_KEY instead of hardcoding)
const ai = new GoogleGenAI({ apiKey: 'AIzaSyCeDf9_kNHW5MHyXoKh2hwzNKqwwyrL8Wg' });

test('Verify Login Functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/...');
  
  // ... your existing login steps ...
});