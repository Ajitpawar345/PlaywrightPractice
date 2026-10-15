import { test, expect } from '@playwright/test';

test('teo window handle test', async ({ browser }) => {

  
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://orangehrm.com/contact-sales');

    let [childWindowPage] = await Promise.all([
        context.waitForEvent('page'),//start listening the page event in the browser
        page.getByRole('link', {name: 'About Us'}).click()//this will click on the link and generate a new page
    ]);

    await childWindowPage.waitForLoadState();//child window is loaded properly

    let allPages = context.pages();
    console.log('total no of pages:', allPages.length);//2

    childWindowPage.bringToFront();//bring the child window to front

    let childWindowTitle = await childWindowPage.title();
    console.log('The child window title is:', childWindowTitle);
    console.log('The child window heading is:', await childWindowPage.getByRole('heading', {name: 'Leadership'}).textContent());
    await childWindowPage.close();//close the child window

    let parentWindowTitle = await page.title();
    console.log('The parent window title is:', parentWindowTitle);

    await page.pause();
});