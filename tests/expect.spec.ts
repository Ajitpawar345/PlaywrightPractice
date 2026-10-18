
import {BrowserContext, expect, Locator, test} from '@playwright/test'


test('expect assertion test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //expect(100).toBe(101);

    expect(page.url()).toContain('account/register');

    let header = page.getByRole('heading', {name: 'Register Account', level:1});
    await expect(header).toBeVisible();

    //Register Account
    await expect.soft(page.locator('#column-right a.list-group-item')).toHaveCount(13);

    page.getByRole('textbox', {name:'* First Name'}).fill('Naveen Automation Lab');
    await expect(page.getByRole('textbox', {name:'* First Name'})).toHaveValue('Naveen Automation Lab');

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');

    expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);
    await page.getByTestId('country-select').selectOption('India');
    await expect(page.getByTestId('country-select')).toHaveValue('in');
    
    console.log('====END=====');
    console.log('====END=====');
    
});
test('expect assertion for different element test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled({timeout: 10000});//10 

    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEmpty();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEmpty();

    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEditable();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEditable();

    expect(page.getByRole('textbox', { name: 'Username (read-only, auto-generated)' })).not.toBeEditable();
    
    await page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).check();
    expect(page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' })).toBeChecked();


    await expect(page.getByRole('button', { name: 'Create Account' })).toBeEnabled();
    
    page.getByRole('checkbox', { name: 'I agree to the Terms of Service and Privacy Policy' }).uncheck();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();

    //attribute
    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('type', 'text');
    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('placeholder', 'Enter first name');

    await expect(page.getByRole('textbox', { name: 'Username (read-only, auto-generated)' })).toHaveAttribute('readonly', '');
    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveId('firstname');

    console.log('====END=====');
    
});

test('expect timeout test', async({page})=> {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    //Create account
    //default timeout: 5 secs or 5000ms
    //to increaase the timeout from PW config - expect: {timeout:10000}
    let header = page.getByRole('heading', { name: 'Create Account', level: 1 });
    await expect(header).toHaveText('Create Account123');

    console.log('====END=====');
    
});

//AAA pattern: Arrange Act Assert
//Assertion:    test cases -> only 1 hard assertion
//test cases:    multiple soft assertions

//Register page test: steps ---- assertions:
//1. check the logo.  -- tc1
//2. check the url -- tc2
//3. check the title -- tc3
//4. check the footer -- tc4
//5. check the right panel links -- tc5
//6. check teh fn is visible -- tc6

//Register page test: Hard assertion.  - bad practice
//1. check the logo.  -- pass
//2. check the url -- fail
//3. check the title -- 
//4. check the footer -- 
//5. check the right panel links -- 
//6. check teh fn is visible -- 

//Register page test: soft assertion
//1. check the logo.  -- pass
//2. check the url -- fail
//3. check the title -- pass 
//4. check the footer -- pass
//5. check the right panel links -- failed 
//6. check teh fn is visible -- pass
//Report: Pass: 4, failed: 2

//soft ---> with the smae functionlity checkpoints:
//tc: register form element visibility check
//1 to 6 : soft assertion
