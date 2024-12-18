import TestData from '../test-data/TestData.json';
import LPrApprove from '../constants/requisitions/LPrApprove';

class Approve {

//TODO Constructor
    constructor(iLogin, page, config, iLogout){
        this.iLogin = iLogin;
        this.page = page;
        this.config = config;
        this.iLogout = iLogout;
    }

    async approve() {
        try {
            let projectManager = TestData.mailIds.projectManagerEmail;
            await this.iLogin.performLogin(projectManager);

            let title = TestData.orderDetails.orderTitle;
            let approveButtonLocator = LPrApprove.getApproveButton(title);
            let projectManagerOption = await this.page.locator(approveButtonLocator);
            await this.config.waitForLocator(projectManagerOption);
            await projectManagerOption.first().click();

            let approveButton = await this.page.locator(LPrApprove.APPROVE);
            await this.config.waitForLocator(approveButton);
            await approveButton.click();

            let yesButtonLocator = await this.page.locator(LPrApprove.YES);
            await this.config.waitForLocator(yesButtonLocator);
            await yesButtonLocator.click();

            await this.iLogout.performLogout();
        } catch (error) {
            console.error("What is the error: " + error);
        }
    }
}

export default Approve;