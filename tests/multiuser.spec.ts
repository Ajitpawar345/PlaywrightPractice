
import {BrowserContext, test} from '@playwright/test'


test('multi user test', async({browser})=> {

       let ctx1: BrowserContext =  await browser.newContext();
       let ctx2: BrowserContext =  await browser.newContext();

       let page1 = await ctx1.newPage();
       let page2 = await ctx2.newPage();

       await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
       await page1.locator('#input-email').fill('ajitpawar@gmail.com');
       await page1.locator('#input-password').fill('pwd@123');
       await page1.locator('//input[@value="Login"]').click();

       await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
       await page2.locator('#input-email').fill('ajitdada@gmail.com');
       await page2.locator('#input-password').fill('pwd@123');
       await page2.locator('//input[@value="Login"]').click();

        await page1.pause();
        await page2.pause();

        //ajitpawar@gmail.com   pwd@123
        //ajitdada@gmail.com   pwd@123


})