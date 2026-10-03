import {Locator, Page, test} from '@playwright/test';

test('get all the link test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    //total links
    //<a href text>

    let alllinks: Locator[] = await page.locator('a[href]').all();
    console.log('total links:', alllinks.length);

    let totallinks = await page.locator('a[href]').count();
    console.log(totallinks);

    let totalrolelinks = await page.getByRole('link').count();
    console.log('total links with role:', totalrolelinks);

})