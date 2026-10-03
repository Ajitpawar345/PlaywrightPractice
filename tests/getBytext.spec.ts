

import {BrowserContext, Locator, test} from '@playwright/test'

test('get by text test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //when to use: for paragraph, strong, span, div

    let header = await page.getByText('Register Account', {exact: true}).textContent();

    console.log(header);

    await page.getByTitle('My Account', {exact: true}).click();


    await page.waitForTimeout(5000);

})