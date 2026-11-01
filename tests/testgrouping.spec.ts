import {test} from '@playwright/test';


//test groups --> test suites --> mulitple test cases
//test.describe --> test() test().....


test.describe('Login related test cases', ()=>{

    test('google title test', async({page})=>{

        await page.goto('https://www.google.com');
        console.log(await page.title());
    });

    test('google URL test', async({page})=>{

        await page.goto('https://www.google.com');
        console.log(page.url());
    });

     test('google random test', async({page})=>{

        await page.goto('https://www.google.com');
       
    });
});

test.describe('Search related test cases', ()=>{

    test('google title test', async({page})=>{

        await page.goto('https://www.google.com');
        console.log(await page.title());
    });

    test('google URL test', async({page})=>{

        await page.goto('https://www.google.com');
        console.log(page.url());
    });

     test('google random test', async({page})=>{

        await page.goto('https://www.google.com');
       
    });
});

test.describe('OPencart related test cases', ()=>{

    test.beforeAll(async()=>{
        console.log('connect to DB');
    });
    test.beforeEach(async()=>{
        console.log('Create a user');
    });
    test.afterEach(async()=>{
        console.log('disconnect to DB');
    });
    test.afterAll(async()=>{
        console.log('delete a user');
    });

    test('google title test', async({page})=>{

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        console.log(await page.title());
    });

    test('google URL test', async({page})=>{

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        console.log(page.url());
    });

     test('google random test', async({page})=>{

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
       
    });
});

test.describe.serial('User CRUD test cases', ()=>{

    test('Create a user test', async({})=>{
        console.log('user is created:', 1001);
    });

    test('Get a user test', async({})=>{
        console.log('get a user using userID', 1001);
    });

     test('update a user test', async({})=>{
        console.log('update a user using userID', 1001);
    });
    test('Delete a user test', async({})=>{
       console.log('delete user using userId', 1001);
    });
});