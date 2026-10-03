


import {test} from '@playwright/test'


test('locators test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    page.getByRole('heading',{name: 'Returning Customer',exact: true}).highlight();
    page.getByRole('textbox', { name: 'E-Mail Address', exact: true }).highlight();


    await page.waitForTimeout(5000);

})