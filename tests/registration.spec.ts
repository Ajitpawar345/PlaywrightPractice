


import {BrowserContext, Locator, test} from '@playwright/test'


test('locators test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //await page.getByRole('textbox', {name: 'Password', exact: true}).fill('pwd@123')
   // page.getByRole('link', {name:'Forgotten Password'}).nth(1);
   // page.getByRole('link', {name:'Forgotten Password'}).first();
    page.getByRole('link', {name:'Forgotten Password'}).last();




    await page.waitForTimeout(5000);

})