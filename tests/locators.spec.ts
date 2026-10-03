

//Locators/selectors

//1. Visible on the page to the user: Accessibility/ any tool = screen reader tools  -- rules
//Accessbility/semantic based / Role based locators

// text field-> Role: Textbox + visibility name
// Login button --> Role: button + visible name: login
// forgotten pwd link ---> role: link _ visible name: login

//page.getBy methods:
//page.getByRole()
//page.getByLable()
//page.getByTitle()
//page.getByAlt()
//page.getByPalceholder()
//page.datatestID()
//page.getByText()

//2. technical way: xpath/css using DOM --- all the browsers

//html/body/div[2]/div/ul/li/input
//input[@id='username]
//input[@name='username]
//input[@class='username]

//page.locator(xpath/css).click()

//Headers: h1 to h6



import {BrowserContext, Locator, test} from '@playwright/test'


test('locators test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //await create the locators + action(click, fill, testContent, isVisible.....)

    let emailID: Locator = page.getByRole('textbox', {name:'E-mail Address'});
    await emailID.fill('ajit.pawar.engg@gmail.com');

    await page.getByRole('textbox',{name:'Password'}).fill('pwd@123');

    await page.getByRole('button',{name:'Login'}).click();

    await page.getByTitle('')

   let search: Locator =  page.locator("//input[@name='search']");
   await search.fill('macbook');

   await page.locator("#input-password").fill('pwd@123')

   let header = await page.getByRole('heading', { name: 'Returning Customer' }).textContent();
   console.log('header value:', header);


    //radio:
    await page.getByRole('radio',{name: 'C#'}).click();





    await page.waitForTimeout(5000);


})