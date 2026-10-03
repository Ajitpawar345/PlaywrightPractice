

import {BrowserContext, Locator, test} from '@playwright/test'

test('get by text test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   //it will only if <title> attribute is present for the elment
    await page.getByTitle('naveenopencart').click();
   // await page.getByTitle('My Account', {exact: true}).click();


    await page.pause();

})