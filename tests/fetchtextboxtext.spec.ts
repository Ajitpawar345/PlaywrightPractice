import {Page, test} from '@playwright/test';

test('get the text of textbox value test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', {name: 'First Name'}).fill('Ajit');
    let firstname = await page.getByRole('textbox', {name: 'First Name'}).inputValue();

    console.log(firstname);
    await page.pause();


})