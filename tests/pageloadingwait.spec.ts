
import {BrowserContext, test} from '@playwright/test'


test('page loading wait until test', async({page})=> {

    await page.goto('https://maya.net', {waitUntil:'load'});
    console.log(await page.title());
})

//domcontentloaded: elements are loaded in the DOM of the page but there is no gurantee that elements are visible on the page.
//commit: elements are in the DOM, and css/js/images are still pending to be visible on the page.
//networkidle: in the last 500ms all the api network calls are settled or completed.
//load: DOM is loaded, css/js/apis/images/resources are laoded and visible on the page and page is ready now.