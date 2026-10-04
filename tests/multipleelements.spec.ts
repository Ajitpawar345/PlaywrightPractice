import {Locator, Page, test} from '@playwright/test';
import { link } from 'fs';

test('get all the link test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    //total links
    //<a href text>

    let alllinks: Locator[] = await page.locator('a[href]').all();
    console.log('total links:', alllinks.length);

    let totallinks = await page.locator('a[href]').count();
    console.log('total links are:: ',totallinks);

    let totalrolelinks = await page.getByRole('link').count();
    console.log('total links with role:', totalrolelinks);

})


test('get all the link text test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');

    //total links
    //<a href text>

    let alllinks: Locator[] = await page.locator('a[href]').all();
    console.log('total links:', alllinks.length);

    for(let ele of alllinks){
       let text = await ele.textContent();
       let href = await ele.getAttribute('href');
       console.log(text, " : ", href);
    }
})

test('get all the images test', async({page})=>{

    await page.goto('https://www.flipkart.com/');

    let allimages: Locator[] = await page.locator('img').all();
    console.log('total images:', allimages.length);

    for(let ele of allimages){
       let imagename = await ele.textContent();
       let altval = await ele.getAttribute('alt');
       let srclink = await ele.getAttribute('src');
       console.log(imagename, " : ",altval, ":", altval, ":", srclink);
    }
})


test('iterate links and click with break test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

   let allLinks:Locator[] = await page.locator('a.list-group-item').all();
   console.log('total right panel links are::', allLinks.length);

   for(let ele of allLinks){
       await ele.highlight();
       let text = await ele.textContent(); 
       console.log(text);
       page.waitForTimeout(2000);
       if(text === 'Downloads'){
            await ele.click();
            break;
       }
   }
   await page.pause();
   
})

test('iterate all the links text test',async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

   
   let allPanelLinks: String[] = await page.locator('a.list-group-item').allInnerTexts();
   console.log(allPanelLinks);
   for(let ele of allPanelLinks){
    console.log(ele);
   }

})

//<div login>
//      <a myLogin>


//textContent()  - text of the element  + text of the child element as well  ---> login, myLogin
//innerText()   - text of the exact element only 


test('get all header test',async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('textbox', {name: 'E-mail Address'}).fill('ajitpawar@gmail.com');
    await page.getByRole('textbox', {name: 'Password'}).fill('pwd@123');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.waitForTimeout(2000);

    let allHeaders = await page.getByRole('heading', {level:2}).allInnerTexts();
    console.log('all headers:', allHeaders.length);
    console.log(allHeaders);

})


test('click all the footer link test',async ({page}) => {
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let allLinks: Locator[] = await page.locator('footer a').all();
    console.log(allLinks);
    for(let ele of allLinks){
        await ele.highlight();
        let linktext = await ele.innerText();
        console.log('clicking on :', linktext);
        await ele.click();
        let pageTitle = await page.title();
        console.log(`${linktext} page title is::`, pageTitle);
        console.log('Now going to previous page!!');
        await page.goBack();
        
    }

    await page.pause();
})