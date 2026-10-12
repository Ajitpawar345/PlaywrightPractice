
import {BrowserContext, Frame, test} from '@playwright/test'


test('iframe element test', async({page})=> {

    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');

    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

    //Iframe DOM will be loaded....

    let iframeLocator =  page.frameLocator('#frame-one748593425');
    await iframeLocator.getByRole('textbox',{name: 'Proposal title'}).fill('Autoamtion testing');
    //await iframeLocator.getByRole('textbox',{name: 'Location'}).fill('Pune');

    let header = await page.getByRole('heading', { name: 'Vehicle Registration Form', level: 3 }).innerText();
    console.log(header);

    await iframeLocator.getByRole('textbox',{name: 'Location'}).fill('Pune');

    await page.pause(); 
});

test('frame test', async({page})=> {

    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let header = page.frameLocator('[name="main"]').getByRole('heading',{level: 2}).innerText();
    console.log(header);

    let footer = page.frameLocator('[name="bot"]').getByRole('heading',{level: 2}).innerText();
    console.log(footer);

    await page.pause(); 
});

test('total frame count test', async({page})=> {

    await page.goto('https://vinothqaacademy.com/iframe/');

    let allFrames: Frame[] = page.frames();
    let count = allFrames.length;
    console.log('Total frames on the site::',count);

    for(let ele of allFrames){
        let frameName = ele.name();
        let frameURL = ele.url();
        console.log(frameName, ' : ', frameURL );
    }
    await page.pause(); 
});

test('nested iframe test', async({page})=> {

    await page.goto('https://www.dezlearn.com/nested-iframes-example/');

    let parentFrame = page.frameLocator('#parent_iframe');
    let childFrame = parentFrame.frameLocator('#iframe1');

    await childFrame.getByRole('button',{name: 'Click Here'}).click();
    let childMessage = await childFrame.locator('#processing').innerText();
    console.log(childMessage);

    console.log('-----------------------');
    
    await parentFrame.getByRole('button',{name: 'Click Here'}).click();
    let parentMessage = await childFrame.locator('#processing').innerText();
    console.log(parentMessage);

    console.log('-----------------------');

    let mainHeader = await page.getByRole('heading', {name: 'Nested iFrames Example', level: 2}).innerText();
    console.log(mainHeader);

    console.log('------------USING ONE LINER-----------');

    // await page
    //     .frameLocator('#parent_iframe')
    //     .frameLocator('#processing')
    //     .getByRole('button',{name: 'Click Here'})
    //     .click();


    await page.pause(); 
});