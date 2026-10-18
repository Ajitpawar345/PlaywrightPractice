


import {BrowserContext, Locator, test} from '@playwright/test'


//1. Single selection: user name is found on the 1st page, on any page, on the last page, user is not found at all 
//2. Multiple selection: usernames are found on the 1st page, on any page, on the last page, users are not found at all
test('webtable with pagination with single selection test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while(true){
        
        let isUserPresent = await page.locator(`td:has-text("ellis_ra11o")`).first().isVisible();
        if(isUserPresent){
            //User is found on the first page itself
            await page.locator('table#dataTable tr').filter({hasText: 'ellis_rao'}).first().getByRole('checkbox').check(); 
            break;
        }
        else{
            //User is not found on the first page, so pagination logic:

            let nextButton = await page.getByRole('button', {name: '›'});
            await nextButton.click();
            await page.waitForTimeout(2000);

            let isNextElementDisabled = await nextButton.isDisabled();
            if(isNextElementDisabled){
                console.log('Pagination is over and user is not found in the table  ');
                break;
            }
        }
    }

    await page.waitForTimeout(5000);

});

test('webtable with pagination with mulitple selection test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while(true){
        
        let allUserChecks = await page.locator('table#dataTable tr').filter({hasText: 'john_doe'}).first().getByRole('checkbox').all();
        
        if(allUserChecks.length > 0){
            for(let ele of allUserChecks){
                await ele.check();
            }
    }   
    //go to the next page, click on next button
    let nextButton = page.getByRole('button', {name: '›'});

    let isNextButtonDisabled = await nextButton.isDisabled();

    if(isNextButtonDisabled){
        console.log('Pagination is over .........');
        break;
    }
        await nextButton.click();
        await page.waitForTimeout(2000);
    }
    await page.pause();

});