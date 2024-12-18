import TestData from '../test-data/TestData.json';
import LPrBuyerManagerSuspend from '../constants/requisitions/LPrBuyerManagerSuspend';

class BuyerManagerSuspend {

//TODO Constructor
    constructor(iLogin, page, iLogout, iPrEdit, config){
        this.iLogin = iLogin;
        this.page = page;
        this.iLogout = iLogout;
        this.iPrEdit = iPrEdit;
        this.config = config;
    }

    async suspend() {
        try {
            let buyerManagerMailId = TestData.mailIds.BuyerManager;
            await this.iLogin.performLogin(buyerManagerMailId);

            let title = TestData.orderDetails.orderTitle;
            let titleLocator = await this.page.locator(LPrBuyerManagerSuspend.getTitle(title));
            await this.config.waitForLocator(titleLocator);
            await titleLocator.first().click();

            let suspendButtonLocator = await this.page.locator(LPrBuyerManagerSuspend.SUSPEND_BUTTON);
            await this.config.waitForLocator(suspendButtonLocator);
            await suspendButtonLocator.click();

            let remarksLocator = await this.page.locator(LPrBuyerManagerSuspend.REMARKS);
            await this.config.waitForLocator(remarksLocator);
            await remarksLocator.fill("Buyer Manager Suspended");

            let acceptLocator = await this.page.locator(LPrBuyerManagerSuspend.YES);
            await this.config.waitForLocator(acceptLocator);
            await acceptLocator.click();

            await this.iLogout.performLogout();

            await this.iPrEdit.buyerManagerSuspendEdit();
        } catch (error) {
            console.log("What is the Error: " + error);
        }
    }
}

export default BuyerManagerSuspend;