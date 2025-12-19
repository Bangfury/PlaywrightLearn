import { test, expect } from '@playwright/test';
import { permission } from 'node:process';
import { chromium } from 'playwright';
// note close shoul dbe within the descibe block, not changed as yet
//browser => context => page
let browser;
let context;
let page;

test.describe("describe block for hooks", () => {    
    
    test.beforeAll(async () => {
        // launch browser before all tests
        browser = await chromium.launch({headless: true});
        console.log('BEFORE ALL HOOK LAUNCHED CHROMIUM');
    });
    
    test.beforeEach(async () => {
        // create context for a browswer
        context = await browser.newContext();
        // create a new page in the context
        page = await context.newPage();
        // navigate to the URL
        await page.goto('https://the-internet.herokuapp.com/');
        console.log('BEFORE EACH HOOK LAUNCHED NEW PAGE');
        // execute pause
        await page.pause();

    });    

    test.afterEach(async () => {
        // close page and context
        await page.close();
        await context.close();
        console.log('AFTER HOOK CLOSED PAGE');

    }); 

    test.afterAll(async () => {
        // close browser after all tests
        await browser.close();
        console.log('AFTER ALL HOOK CLOSED BROWSER');


    });

    test('Verify A/B Testing page content', async () => {
        await page.click('text=A/B Testing');
        const header = await page.textContent('h3');
        expect(header).toBe('A/B Test Control');

    });

    test('Verify Checbox 1 is not checked', async () => {
        await page.click('text="Checkboxes"')
        // same response await page.getByRole('link', { name: 'Checkboxes' }).click();
        await expect(page.getByRole('checkbox').first()).not.toBeChecked();

    });

    test('Verify Checbox 0 is not checked', async () => {
        await page.click('text="Checkboxes"')
        // same response await page.getByRole('link', { name: 'Checkboxes' }).click();
        const checkbox = await page.isChecked('input[type="checkbox"]:first-child')
        expect(checkbox).toBe(false);

    });

    test('Geolocation setting in context and verification', async () => {
        context = await browser.newContext({
            permissions: ['geolocation'],
            geolocation: {latitude: 37.774929, longitude: -122.419416},
            viewport: {width: 1280, height: 720},
        //    timezoneId: 'America/Los_Angeles'
        });
        page = await context.newPage();
        console.log("USING CONTEXT AND PAGE CREATE WITHIN TEST AND NOT WITHIN HOOKS");
        await page.goto('https://the-internet.herokuapp.com/geolocation');
        await page.click('button')
        const lat = await page.textContent("#lat-value")
        const long = await page.textContent("#long-value")
        expect(parseFloat(lat)).toBeCloseTo(37.774929)
        expect(parseFloat(long)).toBeCloseTo(-122.419416)
        
    });

});