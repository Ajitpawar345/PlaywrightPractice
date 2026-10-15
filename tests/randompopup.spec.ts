
import {BrowserContext, test} from '@playwright/test'


test('kill random popup test', async({page})=> {


    page.addLocatorHandler(
        page.getByRole('button', {name: 'Allow all'}),
        async (allowAllButton)=>{
            await allowAllButton.click();
            console.log('The Cookie Banner is killed successfully......');
        }

    );

    await page.goto('https://orangehrm.com/contact-sales');

    await page.getByRole('textbox', {name: 'Full Name'}).fill('John Doe');
    await page.pause(); 
});

test('launch spicejet and handle location popup test', async({page})=> {

   // page.goto('https://www.spicejet.com/');//add permissions[] in playwright.config.ts file to handle location popup

    page.goto('https://www.maya.net/');

    await page.pause(); 
})

