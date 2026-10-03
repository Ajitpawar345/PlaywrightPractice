import { Browser, Page, chromium, firefox, webkit } from "@playwright/test";
import { type } from "os";


// (async()=>{
//     console.log('hello world');

// //browser --> page ---> url ---> locator --- close

//     //open the browser
//     let browser: Browser = await chromium.launch({headless: false, channel:'chrome'});
//     let page: Page =  await browser.newPage();
//     await page.goto('https://maya.net');
//      let title: string =  await page.title();
//      console.log('Page title is', title);
//      console.log(page.url());
//      browser.close();

// })();

type BrowserName = 'chrome'|'edge'|'firefox'|'webkit';

async function launchBrowser(browserName: BrowserName){
    console.log('browserName',browserName);

switch (browserName.trim().toLowerCase()) {
    case 'chrome':
        return await chromium.launch({headless: false, channel: 'chrome'});
    case 'edge':
        return await chromium.launch({headless: false, channel: 'msedge'});
    case 'firefox':
            return await firefox.launch({headless: false});
    case 'webkit':
                return await webkit.launch({headless: false})
    default:
        console.log('invalid browser.....', browserName);
        throw new Error(`invalid browser:, $(browserName)`);
}
}

//calling this

let browser: Browser = await launchBrowser('chrome');
let page: Page =await  browser.newPage();
await page.goto('https://maya.net');
let title: string =  await page.title();
console.log('Page title is', title);
console.log(page.url());
browser.close();