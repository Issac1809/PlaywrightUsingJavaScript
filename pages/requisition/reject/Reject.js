import TestData from '../test-data/TestData.json';
import LPrReject from '../constants/requisitions/LPrReject';

class Reject {

//TODO Constructor
    constructor(iLogin, page, iLogout, iPrEdit, config){
        this.iLogin = iLogin;
        this.page = page;
        this.iLogout = iLogout;
        this.iPrEdit = iPrEdit;
        this.config = config;
    }

    async reject()  {
        try {
            let projectManagerMailId = TestData.mailIds.projectManagerEmail;
            await this.iLogin.performLogin(projectManagerMailId);

            let title = TestData.orderDetails.orderTitle;
            let getTitle = LPrReject.getTitle(title);
            let titleLocator = await this.page.locator(getTitle);
            await this.config.waitForLocator(titleLocator);
            await titleLocator.first().click();

            let rejectButtonLocator = await this.page.locator(LPrReject.REJECT_BUTTON);
            await this.config.waitForLocator(rejectButtonLocator);
            await rejectButtonLocator.click();

            let remarksLocator = await this.page.locator(LPrReject.REMARKS);
            await this.config.waitForLocator(remarksLocator);
            await remarksLocator.fill("Rejected");

            let yesButtonLocator = await this.page.locator(LPrReject.YES);
            await this.config.waitForLocator(yesButtonLocator);
            await yesButtonLocator.click();

            await this.iLogout.performLogout();

            await this.iPrEdit.rejectEdit();
        } catch (error) {
            console.log("What is the error: " + error);
        }
    }
}