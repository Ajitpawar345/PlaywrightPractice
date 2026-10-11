

import {BrowserContext, Locator, test} from '@playwright/test'

test('locator chain test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page
        .locator('form')
        .getByRole('textbox', {name: 'First Name'})
        .fill('Automation test');
    await page.waitForTimeout(2000);

    await page
        .locator('#column-right')
        .getByRole('link', {name: 'Forgotten Password'})
        .click();

    await page.pause();

})

//td[text()='Performance']/preceding-sibling::td/input[@type='checkbox']

test('webtable handler test', async({page})=>{

    await page.goto('https://qavbox.github.io/demo/webtable/');

    await page
        .locator('#table01')
        .locator('tr')
        .filter({hasText: 'Functional'})
        .getByRole('checkbox')
        .check();
    await page.waitForTimeout(2000);


    await page
        .locator('#table01')
        .locator('tr')
        .filter({hasText: 'GUI'})
        .getByRole('button', {name:'Delete'})
        .click();
    await page.waitForTimeout(2000);


    let officeName = await page.locator('#table02').locator('tr').filter({hasText: 'Ashton Cox'}).locator('td').nth(2).innerText();
    console.log(officeName);

    let colcount = await page.locator('#table02 tr th').count();
    console.log(colcount);

    let rowcount = await page.locator('#table02 tr').count()-1;
    console.log(rowcount);


    await page.pause();

})

