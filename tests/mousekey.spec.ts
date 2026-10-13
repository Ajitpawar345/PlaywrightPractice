


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