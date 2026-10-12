

import {BrowserContext, Locator, test} from '@playwright/test'

test('single file upload test', async({page})=>{



    //it should have type="file" attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    await page.locator('#single-file').setInputFiles('/Users/ajit/Downloads/7 days report.csv');
    await page.waitForTimeout(2000);
    await page.locator('#single-file').setInputFiles([]);//remove file

    await page.pause();

});

test('multiple file upload test', async({page})=>{

    //it should have type="file" and multiple attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    await page.locator('#multi-file').setInputFiles([
        '/Users/ajit/Downloads/7 days report.csv',
        '/Users/ajit/Downloads/Cruise Global- Shared by Ana.png',
        '/Users/ajit/Downloads/Procution image1.png',
        '/Users/ajit/Downloads/yesterday report.csv'
    ]);
    await page.waitForTimeout(3000);
    await page.locator('#multi-file').setInputFiles([]);//remove file

    await page.pause();

});
test('Upload Without <input type="file"> attribute test', async({page})=>{

    //file upload when single/multiple files and <input type="file"> attribute is not available
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [fileUpload] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click()
    ]);

    fileUpload.setFiles([
        '/Users/ajit/Downloads/7 days report.csv',
        '/Users/ajit/Downloads/Cruise Global- Shared by Ana.png',
        '/Users/ajit/Downloads/Procution image1.png',
        '/Users/ajit/Downloads/yesterday report.csv'
    ])
   
    await page.waitForTimeout(3000);
    await fileUpload.setFiles([]);//remove file

    await page.pause();

});