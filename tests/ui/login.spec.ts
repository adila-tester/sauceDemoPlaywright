import{test,expect}from '@playwright/test';
import{loginPage}from '../../pages/loginPage';



test.describe('login tests',()=>{
 test.beforeEach(async ({page})=>{
    await new loginPage(page).goto();
   });


test('valid login', async ({page}) => {
    
    const validlogin = new loginPage(page);
    await validlogin.login('standard_user','secret_sauce');
    await expect(page).toHaveURL(/inventory/);

});

test('locked-out user', async ({page}) => {

    const lockedoutuser = new loginPage(page);
    await lockedoutuser.login('locked_out_user', 'secret_sauce');
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');

});

test('problem user', async ({page}) => {
    const problemuser = new loginPage(page);
    await problemuser.login('problem_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('performance_glitch_user', async ({page}) => {

    const performanceglitchuser = new loginPage(page);
    await performanceglitchuser.login('performance_glitch_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

test('error_user', async ({page}) => {
    const erroruser = new loginPage(page);
    await erroruser.login('error_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('visual_user', async ({page}) => {

    const visualuser = new loginPage(page);
    await visualuser.login('visual_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


test('empty username', async ({page}) => {
    const emptyusername = new loginPage(page);
    await emptyusername.login('', 'secret_sauce');
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
});

test('empty password', async ({page}) => {
    const emptypassword = new loginPage(page);
    await emptypassword.login('standard_user', '');
    await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
});

test('invalid login-wrong-username', async ({page}) => {

    const invalidusername = new loginPage(page);
    await invalidusername.login('standard_user3', 'secret_sauce');
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');

});

test('invalid login-wrong-password', async ({page}) => {

    const invalidpassword = new loginPage(page);
    await invalidpassword.login('standard_user', 'secret_sauceee');
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');

});

test('invalid login-both-Empty', async ({page}) => {

    const invalidboth = new loginPage(page);
    await invalidboth.login('', '');
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');

});

})
