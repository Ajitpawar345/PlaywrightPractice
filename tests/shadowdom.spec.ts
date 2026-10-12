
import {BrowserContext, test} from '@playwright/test'


test('page loading wait until test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    //1. Xpath: will not work in Shadow dom 
    //2. Closed mode Shadow roots are not supported

    //button in shadow dom
    await page.getByRole('button', {name: 'Click Me'}).click();
   // await page.locator('//button[@id="shadow-btn"]').click(); //Xpath: will not work in Shadow dom 

    //input text box in shadow dom
    await page.getByRole('textbox', {name: 'Username'}).fill('Automation testing');
    await page.getByRole('button', {name: 'Submit'}).click();

    //level1---level2---element
    await page.getByRole('textbox', {name: 'Type inside nested shadow...'}).fill('I love PW');

    //level1---level2---level3--------element
    await page.getByRole('button', {name: 'Deep click'}).click();

    //closed shadow dom element
    //page.getByRole('textbox', { name: 'Type in closed shadow...' })

    page.pause();

   
})