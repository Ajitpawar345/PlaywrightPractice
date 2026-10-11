

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

test('get all the webtable row data test', async({page})=>{

    await page.goto('https://www.w3schools.com/html/html_tables.asp');
    let fullData: string[] = await page.locator('table').first().locator('tr').allInnerTexts();

    //innertext ---
    //textContent- parent + child _ extra white space ---> text

    for(let e of fullData){
        console.log(e);
        console.log('------------------------------------------------------------');
    }
    await page.pause();

})

test('Check all the checkbox in webtable test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
    let allCheckBox = await page.locator('table#resultTable tbody tr td').getByRole('checkbox').all();

    for(let ele of allCheckBox){
        await ele.click();
        //await page.waitForTimeout(2000);
    }
    //ignore first checkbox

    // for (let i = 0; i < allCheckBox.length; i++) {
    //     await allCheckBox[i].click();
    //     await page.waitForTimeout(500);
        
    // }
    await page.pause();

})

test('Get tables data from crickinfo webtable test', async({page})=>{

    await page.goto('https://www.cricinfo.com/series/west-indies-in-india-2026-27-1529215/india-vs-west-indies-1st-t20i-1529230/full-scorecard');

    let playerNmae = 'Shimron Hetmyer';
    let wicketTakerName = await page
        .locator('table.ci-scorecard-table')
        .first()
        .locator('tr')
        .filter({hasText: `${playerNmae}`})
        .first().locator('td')
        .nth(1)
        .locator('span span').innerText();

        console.log(wicketTakerName);

    let playerScoreCard = await page
        .locator('table.ci-scorecard-table')
        .first()
        .locator('tr')
        .filter({hasText: 'Shai Hope'})
        .first()
        .locator('td').all();

    for(let ele of playerScoreCard){
        let infor = await ele.textContent();
        console.log(infor);
    }

    

    

    await page.pause();

})