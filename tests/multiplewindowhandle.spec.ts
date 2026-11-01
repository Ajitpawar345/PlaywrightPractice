import { test, expect, Locator, Page } from '@playwright/test';

test('two window handle test', async ({ browser }) => {

  
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

test('multiple window handle test', async ({ browser }) => {

  
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://orangehrm.com/contact-sales');

    //array of locators/links
    let links: Locator[] = [
        page.getByRole('link', { name: 'About Us' }),
        page.getByRole('link', { name: 'Contact Us' }),
        page.getByRole('link', { name: 'Press Releases' }),
        page.getByRole('link', { name: 'Become a Partner' })
    ];

    let childWindowPages: Page[] = [];//0

    for(let link of links){

       let [childWindow] =  await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ]);

        await childWindow.waitForLoadState();
        childWindowPages.push(childWindow);
    }
    console.log('total number of pages:', context.pages().length);//5

    //go to each and every child window and get the title, close it...

    for(let i= 0; i<childWindowPages.length; i++){
        let child = childWindowPages[i];
        await child.bringToFront();
        console.log(await child.title());
        await child.waitForTimeout(1000);
        await child.close();
    }

    //back to parent window... only 1 tab is left....

    await page.bringToFront();
    console.log('parent window title:', await page.title());
    console.log('total number of pages:', context.pages().length);//1

    await page.pause();
});