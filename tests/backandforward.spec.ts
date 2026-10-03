
import {BrowserContext, test} from '@playwright/test'


test('multi user test', async({page})=> {

    await page.goto('https://maya.net');
    console.log(await page.title());

    await page.goto('https://www.google.com');
    console.log(await page.title());

    await page.goBack();
    console.log(await page.title());

    await page.goForward();
    console.log(await page.title());

    await page.goBack();
    console.log(await page.title());

    await page.reload(); //will refresh the page
})
