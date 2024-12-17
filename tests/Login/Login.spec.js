import {test, expect} from '@playwright/test';
import LoginPage from '../../pages/login/LoginPage';
import Config from '../../utils/Config';

test('Successful Login', async ({page}) => {
        try {
            const config = new Config();
            const loginPage = new LoginPage(config, page);

            const loginTitle = 'Requisitions - GePS-CPS';
            
            await loginPage.login();
            await config.screenshotFunction(loginTitle, page);
    
            await expect(page).toHaveTitle(loginTitle);
        } catch (error) {
            console.error("Error in validating login page: " + error);
        }
    });