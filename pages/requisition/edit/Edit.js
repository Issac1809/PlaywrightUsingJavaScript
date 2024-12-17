import TestData from '../test-data/TestData.json';
import LPrEdit from '../constants/requisitions/LPrEdit';

class Edit {

//TODO Constructor
    constructor(iLogin, page, iLogout, iPrSendForApproval, iPrApprove, iPrAssign){
        this.iLogin = iLogin;
        this.page = page;
        this.iLogout = iLogout;
        this.iPrSendForApproval = iPrSendForApproval;
        this.iPrApprove = iPrApprove;
        this.iPrAssign = iPrAssign;
    }

    async edit() {
        try {
            let requesterEmailId = TestData.mailIds.requesterEmail;
            await this.iLogin.performLogin(requesterEmailId);

            let title = TestData.orderDetails.orderTitle;
            let getTitle = LPrEdit.getTitle(title);
            let titleLocator = await this.page.locator(getTitle);
            await this.config.waitForLocator(titleLocator);
            await titleLocator.first().click();

            let editButtonLocator = await this.page.locator(LPrEdit.EDIT_BUTTON);
            await this.config.waitForLocator(editButtonLocator);
            await editButtonLocator.click();

            let updateButtonLocator = await this.page.locator(LPrEdit.UPDATE_BUTTON);
            await this.config.waitForLocator(updateButtonLocator);
            await updateButtonLocator.click();

            let yesButtonLocator = await this.page.locator(LPrEdit.YES);
            await this.config.waitForLocator(yesButtonLocator);
            await yesButtonLocator.click();

            await this.iLogout.performLogout();
        } catch (error) {
            console.log("What is the error: " + error);
        }
    }

    async rejectEdit()  {
        try {
        edit();
        await this.iPrSendForApproval.sendForApproval();
        } catch (error) {
            console.log("What is the error: " + error);
        }
    }

    async buyerManagerSuspendEdit()  {
        try {
            edit();
            await this.iPrSendForApproval.sendForApproval();
            await this.iPrApprove.approve();
            await this.iPrAssign.buyerManagerLogin();
        } catch (error) {
            console.log("What is the error: " + error);
        }
    }

    async buyerSuspendEdit()  {
        try {
        edit();
        await this.iPrSendForApproval.sendForApproval();
        await this.iPrApprove.approve();
        await this.iPrAssign.buyerManagerLogin();
        await this.iPrAssign.buyerManagerAssign();
        } catch (error) {
            console.log("What is the error: " + error);
        }
    }
}