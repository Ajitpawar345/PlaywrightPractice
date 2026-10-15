


import {test} from '@playwright/test'


test('Right click test', async({page})=> {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');


    //right click or content click on context menu

    await page.getByText('right click me',{exact: true}).click({button: 'right'});

    await page.waitForTimeout(3000);

    await page.getByText('Copy', {exact: true}).click();

    await page.pause();


});

test('Drag and Drop test', async({page})=> {

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');


    //right click or content click on context menu

    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    await source.dragTo(target);
    await page.pause();
});

test('Menu and submenu level 2 test', async({page})=> {

    await page.goto('https://www.spicejet.com/');

    let source = await page.getByText('Travel Policies', { exact: true }).hover();//L1

    //wait for the sub menu element:
    await page.getByText('Passenger Rights', { exact: true }).first().waitFor({state:'visible'});
 
    await page.getByText('Passenger Rights', { exact: true }).first().click();//L2

    await page.pause();
});

test('Menu and submenu handling level 4 test', async({page})=> {

    await page.goto('https://www.bigbasket.com/');

    await page.getByText('Shop by', { exact: true }).last().click();//L1

    await page.locator('[id*="headlessui-menu-items"]').getByRole('link', { name: 'Beverages' }).last().hover();//l2

    await page.getByRole('link', { name: 'Tea', exact: true }).hover();//l3

    await page.getByRole('link', { name: 'Green Tea' }).click();//l4


    await page.pause();
});
test('Keyboard enter test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    let searchBox = page.getByRole('textbox', {name: 'Search'});
    await searchBox.fill('Mackbook');

    //Press Enter from the keyboard
    await searchBox.press('Enter');

    await page.pause();
});

test('Keyboard Tab sequence with accessibility from submission test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', {name: '* First Name'});
    await firstName.fill('Adu');

    await page.keyboard.press('Tab');
    await page.keyboard.type('Pawar');// last name

    await page.keyboard.press('Tab');
    await page.keyboard.type('adu@gmail.com');// email

    await page.keyboard.press('Tab');
    await page.keyboard.type('9898989890');//telephone

    await page.keyboard.press('Tab');
    await page.keyboard.type('adu@123');//  pass

    await page.keyboard.press('Tab');
    await page.keyboard.type('adu@123');//confirm ass

    await page.keyboard.press('Tab');
    await page.keyboard.type('ArrowRight');//sub --- yes

    await page.keyboard.press('Tab');//privacy policy

    await page.keyboard.press('Tab');//checkbox
    await page.keyboard.press('Space');//click on checkbox

    await page.keyboard.press('Enter');//press enter to submit the form

    await page.pause();
});

test('Keyboard copy paste test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', { name: '* First Name' });

    await firstName.fill('Automation');

    //Control + A
    //Control + C
    //Control + V

    await firstName.press('ControlOrMeta+A');
    await firstName.press('ControlOrMeta+C');

    let lastName = page.getByRole('textbox', { name: '* Last Name' });
    lastName.press('ControlOrMeta+V');

    await page.waitForTimeout(3000);

    await firstName.press('ControlOrMeta+A');
    await firstName.press('Backspace');

    //Hard refresh the page: control+shift+R
    //await page.keyboard.press('ControlOrMeta+Shift+R');

    //open a new tab in new window

    await page.getByRole('link', { name: 'Forgotten Password' }).click({modifiers: ['ControlOrMeta']});

  

    await page.pause();
});