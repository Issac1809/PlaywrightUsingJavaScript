import {test, expect} from '../base/BaseTest.spec';

test('Successful Login', async ({loginPage}) => {
        try {
            const loginTitle = 'Requisitions - GePS-CPS';

            await loginPage.login();
            await loginPage.config.screenshotFunction(loginTitle, loginPage.page);
    
            await expect(loginPage.page).toHaveTitle(loginTitle);
        } catch (error) {
            console.error("Error in validating login page: " + error);
        }
    });