
//SVG: Scalable Vector Graphics

//It will work with Xpath and CSS only - Semantic  locators (getByRole, getByText) stratergy will not work

//1. Xpath: 
        //1. NOrmal xpath will not be used
        //2. special xpath using local-name() or name()
//2. CSS:
        //1. Regular CSS selectors

//normal xpath-  //svg[@fill='none']
//special xpath - //*[local-name()='svg' and @fill='none'].  - will work
//css- 


import {BrowserContext, test} from '@playwright/test'

test('SVG element test', async({page})=> {

    await page.goto('https://www.flipkart.com/');

    await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).first().fill('Macbook Pro');

    // await page
    //     .getByRole('button', {name: 'Search for Products, Brands and More'})
    //     .locator(`svg[fill="none"]`)
    //     .click();
  

    //click on search icon using special xpath
    await page
        .getByRole('button', {name: 'Search for Products, Brands and More'})
        .locator(`//*[local-name()="svg"]`)
        .click();


    await page.pause();

});

test('SVG Graph element with mouse hover test', async({page})=> {

    await page.goto('https://petdiseasealerts.org/forecast-map/#/');

    await page.waitForTimeout(5000);

   //let frame =  page.frameLocator('//iframe[contains(@id,"map-instance")]');
    let frame = page.frameLocator('iframe[id*="map-instance"]');

    let allRegions = await frame.locator('g.region').all();

    console.log('Total no of regions in USA:', allRegions.length);


    for(let ele of allRegions){
        await ele.hover({force: true});
        let regionId = await ele.getAttribute('id');
        console.log(regionId);
        await page.waitForTimeout(500);
    }

    await page.pause();

})