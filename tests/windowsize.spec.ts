import {BrowserContext, Locator, Page, test} from '@playwright/test'

test.use({
    viewport: {width: 440, height: 956}
});

test('window size test', async({page})=> {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.pause();

});

test('my window size test', async({page})=> {
    page.setViewportSize({width: 700, height: 700});
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.pause();

});