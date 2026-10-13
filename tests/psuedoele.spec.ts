import {Page, test} from '@playwright/test';

test('get the text of textbox value test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

   
    //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('color');

    let content = await page.evaluate(()=>{
        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('content');
    });
    console.log(content);//"*"

    let color = await page.evaluate(()=>{
        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('color');
    });
    console.log(color);//

   let title =  await page.evaluate(()=>{
        alert('You are learing PW');
        return document.title;
    });

    console.log(title);

    await page.pause();
})