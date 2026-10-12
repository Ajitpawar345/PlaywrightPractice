import {expect, Page, test} from '@playwright/test';
import fs from 'fs';

test('download file test', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download');

   
    let [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', {name: 'report.txt'}).click()
    ]);

    //make sure that there is no failure during downloading process....
    expect(await download.failure()).toBeNull();

    //get the file name"
    console.log('file name:', download.suggestedFilename());

    //save to the specific path:
    let filepath = './downlaods/'+ download.suggestedFilename();//download/records.txt
    await download.saveAs(filepath);

    //verify the file exists:
    expect(fs.existsSync(filepath)).toBeTruthy();

    //verify the file size 
    let fileSize = fs.statSync(filepath).size;
    expect(fileSize).toBeGreaterThan(0);

    await page.pause();
});
