import TestData from '../test-data/TestData.json';
import LPrBuyerSuspend from '../constants/requisitions/LPrBuyerSuspend';

class BuyerSuspend {

//TODO Constructor
    constructor(iLogin, page, iLogout, iPrEdit, config){
        this.iLogin = iLogin;
        this.page = page;
        this.iLogout = iLogout;
        this.iPrEdit = iPrEdit;
        this.config = config;
    }

    async suspend(){
        try {
        let buyerMailId = TestData.mailIds.buyerEmail;
        await this.iLogin.performLogin(buyerMailId);

        let title = TestData.orderDetails.orderTitle;
        let getTitle = LPrBuyerSuspend.getTitle(title);
        let titleLocator = await this.page.locator(getTitle);
        await this.config.waitForLocator(titleLocator);
        await titleLocator.first().click();

        let suspendButtonLocator = await this.page.locator(LPrBuyerSuspend.SUSPEND_BUTTON);
        await this.config.waitForLocator(suspendButtonLocator);
        await suspendButtonLocator.click();

        let remarksLocator = await this.page.locator(LPrBuyerSuspend.REMARKS);
        await this.config.waitForLocator(remarksLocator);
        await remarksLocator.fill("Buyer Suspended");

        let yesButtonLocator = await this.page.locator(LPrBuyerSuspend.YES);
        await this.config.waitForLocator(yesButtonLocator);
        await yesButtonLocator.click();

        await this.iLogout.performLogout();

        await this.iPrEdit.buyerSuspendEdit();
        } catch (error) {
            console.error("What is the error: " + error);
        }
    }
}

export default BuyerSuspend;