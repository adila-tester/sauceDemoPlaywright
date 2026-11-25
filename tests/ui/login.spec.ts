import{test,expect}from '@playwright/test';
import{loginpage}from '../../pages/loginPage';



test.describe('login tests',()=>{
 test.beforeEach(async ({page})=>{
    await new loginpage(page).goto();
   });


test('valid login', async ({page}) => {
    
    const validlogin = new loginpage(page);
    await validlogin.login('standard_user','secret_sauce');
    await expect(page).toHaveURL(/inventory/);

});

test('locked-out user', async ({page}) => {

    const lockedoutuser = new loginpage(page);
    await lockedoutuser.login('locked_out_user', 'secret_sauce');
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');

});

test('problem user', async ({page}) => {

    await page.fill('#user-name','problem_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('performance_glitch_user', async ({page}) => {

    await page.fill('#user-name','performance_glitch_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('error_user', async ({page}) => {

    await page.fill('#user-name','error_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('visual_user', async ({page}) => {

    await page.fill('#user-name','visual_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


test('empty username', async ({page}) => {

    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
});

test('empty password', async ({page}) => {

    await page.fill('#user-name','standard_user');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
});

test('invalid login-wrong-username', async ({page}) => {

    await page.fill('#user-name','standard_user3');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');

});

test('invalid login-wrong-password', async ({page}) => {

    await page.fill('#user-name','standard_user');
    await page.fill('#password','secret_sauceee');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');

});

test('invalid login-both-Empty', async ({page}) => {

  
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');

});

})
