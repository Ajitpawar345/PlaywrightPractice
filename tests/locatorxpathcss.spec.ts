

import {BrowserContext, Locator, test} from '@playwright/test'

test('get by text test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    
    //xpath:  address of the element in the HTML DOM

    //1. Absolute xpath: /html/body/div[2]/div/div/form/fieldset[1]/div[2]/div/input      - it starts with single /
    //page.locator('/html/body/div[2]/div/div/form/fieldset[1]/div[2]/div/input').fill();

    //Relative/custom xpath: 
    //htmltag[@attribute = 'value']
    //html[@attr='value' and @attr='value']


    //1. text():     //htmltag[text()='value']
    //2. contains();    //htmltag[contains(@attr, 'value')]    //input[contains(@id,'firstname')]
    //3. contains with text():       //htmltag[contains(text(), 'value')]    //h1[contains(text(), 'Account')]
    //4. start- with():    // htmltag[starts-with(text(), 'value')]      //h1[starts-with(text(), 'Register')]
    //5. ends- with(): NA
    //6. sibligs:     //td[text()='Jasmine.Morgan']/preceding-sibling::td/input[@type='checkbox']      //simillar  following- sibling



    //CSS: it do not have sibling concept - do not work in backward direction
    //1. id:
    //#id
    //htmltag#id
    // input#input-firstname


    //2. class:
    // .class
    //htmltag.class
    //.c1.c2.c3....cn      .alert.alert-danger.alert-dismissible

    //3. id and clas not available - css selector

    //html[attr='value']
    //input[placeholdder='E-mail Address']   --css
    //input[@placeholder='E-mail Address']   --- xpath
    //input[@placeholder='E-mail Address'][name='emial']   -- multi attribute CSS selector

    await page.locator("//input[@id='input-firstname']").fill('Ajit Pawar');

    let header =  await page.locator("//h1[text()='Register Account']").textContent();
    console.log(header);

    page.getByRole('heading',{name: 'Register Account', level:1}).textContent();

    await page.locator('input#input-firstname').fill('ajit');






    await page.pause();

})