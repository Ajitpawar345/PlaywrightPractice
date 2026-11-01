
import {expect, test} from '@playwright/test';

test('title test', async()=>{
    console.log('title test');
});

test('url test', async()=>{
    console.log('url test');
});

// test.only('search test', async()=>{
//     console.log('search test');
// })

test.skip('cart test', async()=>{
    console.log('cart test');
});

test('payment test', async()=>{
    test.fixme();//known issue, fix it later
    console.log('payment test');

});
test('order test', async()=>{
    test.fail();//expected to be failed
    console.log('order test');
    expect(100).toBe(200);
})