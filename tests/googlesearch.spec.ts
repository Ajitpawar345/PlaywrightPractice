import {BrowserContext, Locator, Page, test} from '@playwright/test'

test('google search test', async({page})=> {

    await page.goto('https://www.google.com');
   
    await page.getByRole('combobox', { name: 'Search' }).fill('Ajit Pawar');

    //await page.getByText('Ajit Pawar birthday').click();



    await page.pause();

})

test('amazon search test', async({page})=> {

    await page.goto('https://www.amazon.in');
   
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('MacBook Pro');

     await page.locator('div.autocomplete-results-container').getByText('macbook pro cover', {exact: true}).click();
    // await page.locator('div.autocomplete-results-container').filter({hasText:'macbook pro cover'}).click();

    await page.pause();

})