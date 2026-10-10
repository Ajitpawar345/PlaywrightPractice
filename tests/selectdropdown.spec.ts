
import {BrowserContext, Locator, test} from '@playwright/test'


test('single select dropdown test', async({page})=> {

    await page.goto('https://orangehrm.com/contact-sales');
    //role: listbox
  
    let selectValue: string[] = await page.getByRole('combobox', {name:'Country'}).selectOption('India');//direct dropdown value
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', {name:'Country'}).selectOption({label:'Angola'});//visible text
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', {name:'Country'}).selectOption({value:'Belgium'});//value attribute
    console.log(selectValue);
    await page.waitForTimeout(2000);

    selectValue = await page.getByRole('combobox', {name:'Country'}).selectOption({index: 10});//using index
    console.log(selectValue);
    await page.waitForTimeout(2000);

    let currentvalue = await page.getByRole('combobox', {name:'Country'}).innerText();
    console.log(currentvalue);


    await page.pause();

})

test('multiple selection select dropdown test', async({page})=> {

    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
    //multiple attribute is present for the select tag. EX: <select multiple name="Month" size="12">
    //Role: listbox

    let selectValue: string[] = await page.locator("[name='Month']").selectOption(['January','May','August']);
    console.log(selectValue);
    await page.waitForTimeout(2000);


    // await page.locator("[name='Month']").selectOption(['January','May','August']);
    // let inpval = await page.locator("[name='Month']").inputValue();
    // console.log(inpval);


    await page.waitForTimeout(2000);

   
    await page.pause();

})