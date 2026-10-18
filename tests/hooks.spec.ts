import {Page, test} from '@playwright/test';


//hooks: before(setup) and after(teardown)

//Runs once before all the tests in the test file
test.beforeAll(async() => {
    console.log('Before All --- connect to the DB');  
    //user creation
    //admin settings
    //uploading test data
});

//Runs before each test
test.beforeEach(async()=>{
    console.log('Before each --- login to the app');
});

//Runs after each test
test.afterEach(async()=>{
    console.log('After each --- logout from the app');
});

//Runs once after all the tests in the test file
test.afterAll(async () => {
    console.log('After All --- disconnect to the DB');  
    //delete user
    //reset admin settings
    //delete the test data
});

test('title test', async({page})=>{
    console.log('title test');
});

test('Homepage test', async({page})=>{
    console.log('Homepage test');
});

test('Cart page test', async({page})=>{
    console.log('cart page test');
});