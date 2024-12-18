import TestData from '../test-data/TestData.json';
import LPrSendForApproval from '../constants/requisitions/LPrSendForApproval';

class SendForApproval {

//TODO Constructor
    constructor(iLogin, page, iLogout, config) {
        this.page = page;
        this.iLogin = iLogin;
        this.iLogout = iLogout;
        this.config = config;
    }

    async sendForApproval() {
        try {
            let title = TestData.orderDetails.orderTitle;
            let requesterMailId = TestData.mailIds.requesterEmail;
            await this.iLogin.performLogin(requesterMailId);

            let getTitle = LPrSendForApproval.getTitle(title);
            let titleLocator = await this.page.locator(getTitle);
            await this.config.waitForLocator(titleLocator);
            titleLocator.first().click();

            let sendForApprovalButtonLocator = await this.page.locator(LPrSendForApproval.SEND_FOR_APPROVAL_BUTTON);
            await this.config.waitForLocator(sendForApprovalButtonLocator);
            await sendForApprovalButtonLocator.click();

            let yesButtonLocator = await this.page.locator(LPrSendForApproval.YES);
            await this.config.waitForLocator(yesButtonLocator);
            await yesButtonLocator.click();

            await this.iLogout.performLogout();
        } catch (error) {
            console.log("What is the error: " + error);
        }
    }
}

export default SendForApproval;