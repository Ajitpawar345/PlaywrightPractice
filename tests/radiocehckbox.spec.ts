

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


test('radio and checkbox test', async({page})=> {

    await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26');

    //await create the locators + action(click, fill, testContent, isVisible.....
    //radio:
    await page.getByRole('radio',{name: 'C#', exact:true}).click();
    await page.getByRole('radio', {name: 'Male', exact: true}).click();

    //checkbox
    await page.getByRole('checkbox', {name: 'Selenium', exact: true}).click();
    await page.getByRole('checkbox', {name:'I agree to the Terms & Conditions', exact: true}).click();

    await page.waitForTimeout(5000);


})