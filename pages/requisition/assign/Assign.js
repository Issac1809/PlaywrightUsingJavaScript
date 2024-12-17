import TestData from '../test-data/TestData.json';
import LPrAssign from '../constants/requisitions/LPrAssign';

class Assign {

//TODO Constructor
    constructor(iLogin, page, iLogout){
        this.page = page;
        this.iLogin = iLogin;
        this.iLogout = iLogout;
    }

    async buyerManagerLogin() {
        try {
            let buyerManager = TestData.mailIds.buyerManagerEmail;
            await this.iLogin.performLogin(buyerManager);
        } catch (error) {
            console.log("What is the error: " + error);
        }
    }

    async buyerManagerAssign() {
        try {
            let title = TestData.orderDetails.orderTitle;
            let buyerMailId = TestData.mailIds.buyerEmail;
            let getTitle = LPrAssign.getTitle(title);

            let titleLocator = await this.page.locator(getTitle);
            await this.config.waitForLocator(titleLocator);
            await titleLocator.first().click();

            let assignUser = await this.page.locator(LPrAssign.ASSIGN_USER);
            await this.config.waitForLocator(assignUser);
            await assignUser.click();

            let selectAssignUser = await this.page.locator(LPrAssign.SELECT_ASSIGN_USER);
            await this.config.waitForLocator(selectAssignUser);
            await selectAssignUser.click();

            await this.page.locator(LPrAssign.SEARCHBOX).fill(buyerMailId);
            let getBuyerMailId = LPrAssign.getBuyerMailId(buyerMailId);
            let buyerManager = await this.page.locator(getBuyerMailId);
            await this.config.waitForLocator(buyerManager);
            await buyerManager.first().click();
            let saveUser = await this.page.locator(LPrAssign.SAVE_USER);
            await this.config.waitForLocator(saveUser);
            await saveUser.click();
            
            await this.iLogout.performLogout();
        } catch (error) {
            console.log("What is the error: " + error);
        }
    }
}