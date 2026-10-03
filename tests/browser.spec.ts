

import { Browser, Page, chromium, firefox, test, webkit } from "@playwright/test";


test('title test', async({page})=> {
       await page.goto('https://www.google.com');
       let title = await page.title();
       console.log('title is:', title);
       let appUrl = page.url();
       console.log('appURL is::', appUrl);
})

test.skip('multiple browser', async({})=>{

    //let browser: Browser =  await chromium.launch({headless: false});
    //let browser: Browser =  await chromium.launch({headless: false, channel:'chrome'});
    //let browser: Browser =  await chromium.launch({headless: false, channel:'msedge'});
    //let browser: Browser = await chromium.launch({headless:false, executablePath: '/Applicaiton/.../Opera' });
    //let browser: Browser = await chromium.launch({headless:false, executablePath: '/Applicaiton/.../Brave' });

    //let browser: Browser = await firefox.launch({headless:false, channel:'firefox'});

    let browser: Browser = await webkit.launch({headless:false});

    let page: Page = await browser.newPage();
    page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is:', title);
    let appUrl = page.url();
    console.log('appURL is::', appUrl);
    await page.pause();

})