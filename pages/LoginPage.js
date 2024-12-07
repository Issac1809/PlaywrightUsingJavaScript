class LoginPage {

    constructor(page){
        this.page = page;
    }

    async login() {
        await this.page.goto();

        let emailLocator = this.page.locator("#Input_Email");
        await emailLocator.fill('requester@cormsquare.com');

        let passwordLocator = this.page.locator("#Input_Password");
        await passwordLocator.fill('Admin@123');

        let loginButtonLocator = this.page.locator("#login-submit");
        await loginButtonLocator.click();   
    }
}

module.exports = LoginPage;