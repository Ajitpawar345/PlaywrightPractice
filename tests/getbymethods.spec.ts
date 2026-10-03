

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


test('get by methods test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //it will only work for input fields
    await page.getByLabel('E-Mail', {exact: true}).fill('ajit@gmail.com');
    await page.getByLabel('Telephone', {exact: true}).fill('9899098889');
    await page.getByLabel('Yes', {exact: true}).click();


    //placeholder
    //it will only work for input fields
    await page.getByPlaceholder('First Name').fill('Ajit');
    await page.getByPlaceholder('Last Name').fill('Pawar');

    //it will work only for img tag
    //await page.getByAltText('naveenopencart').click();
    await page.getByRole('img', {name: 'naveenopencart'})



    await page.waitForTimeout(5000);


})