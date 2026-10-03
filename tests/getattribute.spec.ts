import {Page, test} from '@playwright/test';

test('get the text of textbox value test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let placeholdderVal = await page.getByRole('textbox', {name: 'First Name'}).getAttribute('placeholder');
    console.log(placeholdderVal);
    console.log('---------------------------------');

    let hrefVal = await page.getByRole('link',{name: 'Forgotten Password'}).getAttribute('href');
    console.log(hrefVal);

    console.log('---------------------------------');
    await page.getByRole('textbox', {name: 'First Name'}).fill('Ajit Pawar');
   // let newVal = await page.getByRole('textbox', {name: 'First Name'}).getAttribute('value'); // it will not fetch value so we will need to use textContent
    let newVal = await page.getByRole('textbox', {name: 'First Name'}).inputValue(); 
    console.log(newVal);




    await page.pause();


})