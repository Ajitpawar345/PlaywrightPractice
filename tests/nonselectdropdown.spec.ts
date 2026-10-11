import {BrowserContext, Locator, Page, test} from '@playwright/test'

test('multiple selection select dropdown test', async({page})=> {

    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
   
    await page.locator('#justAnInputBox').click();
    await page.waitForTimeout(2000);

    // await page
    //     .locator('span.comboTreeItemTitle')
    //     .filter({hasText: 'choice 6 2 3'})
    //     .first()
    //     .click();

    //TC 1- multi selection
   // await selectChoice(page, ['choice 3', 'choice 5', 'choice6']);

   //TC 2- single selection
   // await selectChoice(page, ['choice 6 2 3']);

    //Tc3- all selection
   await selectAllChoice(page);

    await page.pause();

})

async function selectChoice(page: Page, choices: string[]):Promise<void>{

    for(let ch of choices){
     await page        
        .locator('span.comboTreeItemTitle')
        .filter({hasText: `${ch}`})
        .first()
        .click();
    }
}

async function selectAllChoice(page: Page):Promise<void>{

    let allCheckBoxes = await page.locator('span.comboTreeItemTitle').all();
    for(let ch of allCheckBoxes){
     await ch.click();
    }
}