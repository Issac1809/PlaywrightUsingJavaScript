import {test, expect} from '@playwright/test';
const LoginPage = require('C:\My_Personal_Folder\Playwright_Automation_JavaScript\pages\LoginPage.js');

const url = "https://geps_hopes_yea.cormsquare.com";
const screenshotFolderPath = ".\screenshots";
const emailId = "requester@cormsquare.com";
const password = "Admin@123";

test("Title", async({page}) => {
    try{
        await page.goto(url);
        page.screenshot({path: '${screenshotFolderPath}/titleScreenshot.jpeg', fullPage: true});
        await expect(page).toHaveTitle("Login - GePS-CPS");
    } catch(error){
        console.error("Error is validating title of the login page: " + error);
    }
});

test("Valid Login Credentials", async({page}) => {
    try {
        const loginPageObject = new LoginPage(page);
        LoginPage.login(page);
        page.screenshot({path: screenshotFolderPath, fullPage: true});
        await expect(page).toHaveTitle("Requisitions - GePS-CPS")
    } catch(error){
        console.error("Error is validating login page with valid credentials: " + error);
    }
});

test("Invalid Login Credentials - EmailId", async({page}) => {
    try {
        await page.goto(url);

        let emailLocator = page.locator("#Input_Email");
        await emailLocator.fill("cormsquare@cormsquare.com");

        let passwordLocator = page.locator("#Input_Password");
        await passwordLocator.fill(password);

        let loginButtonLocator = page.locator("#login-submit");
        await loginButtonLocator.click();

        page.screenshot({path: screenshotFolderPath, fullPage: true});

        await expect(page).toHaveTitle("Login - GePS-CPS");
    } catch(error){
        console.error("Error is validating login page with invalid emailId: " + error);
    }
});

test("Invalid Login Credentials - Password", async({page}) => {
    try {
        await page.goto(url);

        let emailLocator = page.locator("#Input_Email");
        await emailLocator.fill(emailId);

        let passwordLocator = page.locator("#Input_Password");
        await passwordLocator.fill(password);

        let loginButtonLocator = page.locator("#login-submit");
        await loginButtonLocator.click();

        page.screenshot({path: screenshotFolderPath, fullPage: true});

        await expect(page).toHaveTitle("Login - GePS-CPS");
    } catch(error){
        console.error("Error is validating login page with invalid password: " + error);
    }
});