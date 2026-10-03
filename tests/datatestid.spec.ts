
import {BrowserContext, selectors, test} from '@playwright/test'


test('data testid test', async({page})=> {

    // await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
    // await page.getByTestId('username-input').fill('ajit pawar');

    // we can configure the data-testid value in playwright config

    //data-test-id="EMAIL"

    //use for specific test
    selectors.setTestIdAttribute('id');
    await page.goto('https://app.hubspot.com/signup-hubspot/crm?uuid=164f064e-42b8-42e4-8024-c2f4f34f686d&step=landing_page');
    //await page.getByTestId('EMAIL').fill('ajit pawar');
    await page.getByTestId('FormControl1').fill('dada pawar');



    await page.pause();

  
})
