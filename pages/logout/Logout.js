import LLogout from '../../constants/logout/LLogout';

class Logout {

//TODO Constructor
    constructor(page, config) {
        this.page = page;
        this.config = config;
    }

    async performLogout() {
        try {
            let avatarLocator = await this.page.locator(LLogout.LOGIN_AVATAR);
            await this.config.waitForLocator(avatarLocator);
            await avatarLocator.click();

            let signOutLocator = await this.page.locator(LLogout.SIGN_OUT);
            await this.config.waitForLocator(signOutLocator);
            await signOutLocator.click();
        } catch (error) {
            console.error("Logout error: " + error);
        }
    }
}

export default Logout;