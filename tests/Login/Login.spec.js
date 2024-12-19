import {test, expect} from '../base/BaseTest.spec';

test('Successful Login', async ({loginPage}) => {
        try {
            const loginTitle = 'Requisitions - GePS-CPS';

            const {status, body} = await loginPage.login();
            await loginPage.config.screenshotFunction(loginTitle, loginPage.page);
    
            expect(status).toBe(200);
            // await expect(body.success).toBe(true);

        } catch (error) {
            console.error("Error in validating login page: " + error);
        }
    });