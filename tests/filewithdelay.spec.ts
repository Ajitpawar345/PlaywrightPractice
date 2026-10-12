
import {BrowserContext, test} from '@playwright/test'


test('fill value with delay test', async({page})=> {

    await page.goto('https://maya.net/');

    await page.getByLabel('Where do you want to travel?').pressSequentially('India', {delay: 500});

    await page.pause(); 
})
