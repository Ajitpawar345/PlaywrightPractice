import {expect, test} from '@playwright/test';

test.describe('Search related test cases', ()=>{


    test.describe.configure({retries: 2});
    test('google title test', async({page})=>{

        await page.goto('https://www.google.com');
        console.log(await page.title());
    });

    test('google URL test', async({page})=>{

        await page.goto('https://www.google.com');
        console.log(page.url());
    });

     test('google random test', async({page})=>{

        expect(100).toBe(200);
       
    });
});