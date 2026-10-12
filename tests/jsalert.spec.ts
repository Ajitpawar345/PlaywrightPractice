

//JS Alerts---- JS pop ups --- model dialogues
//JS methods
//1. alert('message/error msg')
//2. confirm('are you sure??')
//3. prompt('message with textbox')

import {BrowserContext, Locator, test} from '@playwright/test'

test('JS alert handle test', async({page})=>{

    //NOTE: 1. default playwright listener do not capture any message on the alert.
    //2. If we use our own listener then default listener won't work and it will be overridden by our listener
    //3. default listener will dismiss the alert
   
    //1. Alert. -- just accept it
    page.on('dialog', async(popup)=>{
        if(popup.type() === 'alert'){
            console.log(popup.message());
            await popup.accept();
        }
    });

    //2. confirm. -- just accept it
    page.on('dialog', async(popup)=>{
        if(popup.type() === 'confirm'){
            console.log(popup.message());
            await popup.accept();//click ok
           // await popup.dismiss();//click cancel
        }
    });

    //3. Prompt. -- just accept it..
    page.on('dialog', async(popup)=>{
        if(popup.type() === 'prompt'){
            console.log(popup.message());
            await popup.accept('Ajit Pawar Playwright Training');//click ok and enter text message
           // await popup.dismiss();//click cancel
        }
    });

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.getByRole('button', {name: 'Click for JS Alert'}).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
    await page.waitForTimeout(2000);

    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    await page.waitForTimeout(2000);


    await page.pause();

})


test('Rediff mail login alert handle test', async({page})=>{

    //1. Alert. -- just accept it
    page.on('dialog', async(popup)=>{
        if(popup.type() === 'alert'){
            console.log(popup.message());
            await popup.accept();
        }
    });

    //2. confirm. -- just accept it
    page.on('dialog', async(popup)=>{
        if(popup.type() === 'confirm'){
            console.log(popup.message());
            await popup.accept();//click ok
           // await popup.dismiss();//click cancel
        }
    });

    //3. Prompt. -- just accept it..
    page.on('dialog', async(popup)=>{
        if(popup.type() === 'prompt'){
            console.log(popup.message());
            await popup.accept('Ajit Pawar Playwright Training');//click ok and enter text message
           // await popup.dismiss();//click cancel
        }
    });

    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    await page.getByRole('button', {name: 'Log in'}).click();
    await page.waitForTimeout(2000);

    await page.locator('#login1').fill('ajitpawar');
    await page.getByRole('button', {name: 'Log in'}).click();
    await page.waitForTimeout(2000);

    await page.locator('#password').fill('ajitpawar');
    await page.getByRole('button', {name: 'Log in'}).click();
    await page.waitForTimeout(2000);

    // await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    // await page.waitForTimeout(2000);


    await page.pause();

})