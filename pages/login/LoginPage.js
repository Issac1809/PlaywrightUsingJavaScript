import LLogin from '../../constants/login/LLogin';
import TestData from '../../test-data/TestData.json';

class LoginPage {

//TODO Constructor    
    constructor(page, config){
        this.config = config;
        this.page = page;
    }

    async login() {
        try {
            await this.config.navigateToUrl(this.page);

            let emailLocator = await this.page.locator(LLogin.EMAIL);
            await emailLocator.fill(TestData.mailIds.requesterEmail);
    
            let passwordLocator = await this.page.locator(LLogin.PASSWORD);
            await passwordLocator.fill(TestData.browserAndExecutionSettings.loginPassword);
    
            let loginButtonLocator = await this.page.locator(LLogin.LOGIN_BUTTON);

            const [response] = await Promise.all([
                this.page.waitForResponse((response) =>
                response.url().includes('/api/users/current') && response.status()),
                loginButtonLocator.click()
        ]);

        const status = await response.status();
        const body = await response.json();
        return {status, body};
        } catch (error) {
            console.error("What is the Error: " + error);
        }
    }
}

export default LoginPage;