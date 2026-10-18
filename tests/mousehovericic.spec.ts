import {Page, test} from '@playwright/test';

test('mouse hover test with bounding box test', async({page})=>{

    await page.goto('https://www.icicilife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html');

    await page.waitForTimeout(3000);

    //let allPoints = page.locator('.highcharts-markers .highcharts-point');
    let allPoints = page.locator('.highcharts-series-0 .highcharts-point');
    //.highcharts-column-series .highcharts-point
    //
    let allDots = await allPoints.all();
    console.log('Total no of points:', allDots.length);

    for(let ele of allDots){{
        await ele.hover();//trigger the hover event
        //await page.waitForTimeout(1000);

        let box = await ele.boundingBox();
        let x = box!.x + box!.width/2;
        let y = box!.y + box!.height/2;

        await page.mouse.move(x, y);//move the mouse to the center of the element
        let yearAmount = await page.locator('.highcharts-tooltip').textContent();
        console.log('The year and amount is:', yearAmount);
        await page.waitForTimeout(500);
    }
}
})