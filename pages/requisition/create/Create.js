import TestData from '../../../test-data/TestData.json';
import LPrCreate from '../../../constants/requisitions/LPrCreate';

class Create {

//TODO Constructor
    constructor(login, config, page, logout) {
        this.login = login;
        this.config = config;
        this.page = page;
        this.logout = logout;
        this.purchaseType = TestData.orderDetails.purchaseType;
    }

    async requesterLogin(){
        try {
            let requesterEmailId = TestData.mailIds.requesterEmail;
            await this.login.login(requesterEmailId);
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async createButton(){
        try {
            const createButtonLocator = await this.page.locator(LPrCreate.CREATE_BUTTON);
            await this.config.waitForLocator(this.page);
            await createButtonLocator.click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async getPurchaseType(){
        try {
            let prTypeLocator = LPrCreate.getPrType(this.purchaseType);
            this.config.waitForLocator(this.page);
            await this.page.locator(prTypeLocator).click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async title() {
        try {
            let title = TestData.orderDetails.orderTitle;
            switch (this.purchaseType.toLowerCase()) {
                case "catalog":
                    let catalogTitleLocator = await this.page.locator(LPrCreate.TITLE);
                    await this.config.waitForLocator(this.page);
                    await catalogTitleLocator.fill(title + "-" + this.purchaseType);
                    break;
                case "non-catalog":
                    let nonCatalogTitleLocator = await this.page.locator(LPrCreate.TITLE);
                    await this.config.waitForLocator(this.page);
                    await nonCatalogTitleLocator.fill(title + "-" + this.purchaseType);
                    break;
                default:
                    console.log("--Enter Proper PR Type--");
                    break;
            }
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async shipToYokogawa() {
        try {
            let val = TestData.locationAndShippingDetails.shipToYokogawa;
            
            if(val.toLowerCase().equals('yes')){
                await this.page.locator(LPrCreate.SHIP_TO_YOKOGAWA).check();
            }
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async project() {
        try {
            let projectCode = TestData.orderDetails.projectCode;

            let projectDropDownLocator = await this.page.locator(LPrCreate.PROJECT);
            await this.config.waitForLocator(this.page);
            await projectDropDownLocator.click();

            let projectSearchFieldLocator = await this.page.locator(LPrCreate.PROJECT_SEARCH);
            await this.config.waitForLocator(this.page);
            await projectSearchFieldLocator.fill(projectCode);

            const dropDownValues = await this.page.locator('.select2-results__options').allTextContents();
            for(let dropDownValue of dropDownValues){
                if(dropDownValue.includes(projectCode)){
                    let projectSelectLocator = await this.page.locator('.select2-results__option').first();
                    await this.config.waitForLocator(this.page);
                    await projectSelectLocator.click();
                    break;
                } else {
                    console.log("No Projects Found");
                }
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async wbs() {
        try {
            let wbsLocator = await this.page.locator(LPrCreate.WBS);
            await this.config.waitForLocator(this.page);
            await wbsLocator.click();

            let wbsCodeValue = TestData.orderDetails.wbsCode;
            let wbsSearchLocator = await this.page.locator(LPrCreate.WBS_SEARCH);
            await this.config.waitForLocator(this.page);
            await wbsSearchLocator.fill(wbsCodeValue);

            let wbsSelectLocator = LPrCreate.getWBSForCandNC(wbsCodeValue);
            let finalWbsLocator = await this.page.locator(wbsSelectLocator);
            await this.config.waitForLocator(this.page);
            await finalWbsLocator.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async vendor() {
        try {
            let vendorLocator = this.page.locator(LPrCreate.VENDOR);
            await this.config.waitForLocator(this.page);
            await vendorLocator.click();

            let vendorMailId = TestData.mailIds.vendorEmail;
            let vendorSearchLocator = await page.locator(LPrCreate.VENDOR_SEARCH);
            await this.config.waitForLocator(this.page);
            await vendorSearchLocator.fill(vendorNameValue);

            let vendorOptionLocator = LPrCreate.getVendor(vendorNameValue);
            let vendorOption = await page.locator(vendorOptionLocator);
            await this.config.waitForLocator(this.page);
            await vendorOption.click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async rateContract() {
        try {
            let rateContractLocator = await this.page.locator(LPrCreate.RATE_CONTRACT);
            await this.config.waitForLocator(this.page);
            await this.rateContractLocator.click();

            let rateContractValue = TestData.billingAndPricingDetails.rateContract;
            let rateContractSearchLocator = await this.page.locator(LPrCreate.RATE_CONTRACT_SEARCH);
            await this.config.waitForLocator(this.page);
            await rateContractSearchLocator.fill(rateContractValue);

            let rateContractOptionLocator = LPrCreate.getRateContract(rateContractValue);
            let rateContractOption = page.locator(rateContractOptionLocator);
            await this.config.waitForLocator(this.page);
            await rateContractOption.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async incoterm() {
        try {
            let incotermLocator = await this.page.locator(LPrCreate.INCOTERM);
            await waitForLocator(this.page);
            await incotermLocator.click();

            let incotermValue = TestData.locationAndShippingDetails.incoterm;
            let incotermSearchLocator = await this.page.locator(LPrCreate.INCOTERM_SEARCH);
            await incotermSearchLocator.fill(incotermValue);

            let incotermOptionLocator = await LPrCreate.getIncoterm(incotermValue);
            let incotermOption = await this.page.locator(incotermOptionLocator);
            await this.config.waitForLocator(this.page);
            await incotermOption.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async shippingAddress() {
        try {
            let shippingAddressLocator = await this.page.locator(LPrCreate.SHIPPING_ADDRESS);
            await this.config.waitForLocator(this.page);
            await shippingAddressLocator.click();

            let shippingAddressValue = TestData.locationAndShippingDetails.shippingAddress;
            let shippingAddressOptionLocator = LPrCreate.getShippingAddress(shippingAddressValue);

            let shippingAddressOption = await this.page.locator(shippingAddressOptionLocator);
            await this.config.waitForLocator(this.page);
            await shippingAddressOption.last().click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async billingType() {
        try {
            let billingTypeLocator = await this.page.locator(LPrCreate.BILLING_TYPE);
            await this.config.waitForLocator(this.page);
            await billingTypeLocator.click();

            let selectedBillingType = TestData.billingAndPricingDetails.billingType;
            let billingTypeOptionLocator = this.config.getBillingType(selectedBillingType);

            let billingTypeOption = await this.page.locator(billingTypeOptionLocator);
            await this.config.waitForLocator(this.page);
            await billingTypeOption.last().click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async shippingMode() {
        try {
            let prTypeLocator = LPrCreate.getPrType(this.purchaseType);

            let shippingMode = this.purchaseType.equals("catalog") ? LPrCreate.CATALOG_SHIPPING_MODE : LPrCreate.NON_CATALOG_MH_SHIPPING_MODE;

            let shippingModeLocator = await this.page.locator(shippingMode);
            await this.config.waitForLocator(this.page);
            await shippingModeLocator.click();

            let getShippingMode = TestData.locationAndShippingDetails.shippingMode;
            let shippingModeSearch = await this.page.locator(LPrCreate.SHIPPING_MODE_SEARCH);
            await this.config.waitForLocator(this.page);
            await shippingModeSearch.fill(getShippingMode);

            let finalShippingMode = LPrCreate.getShippingMode(getShippingMode);
            let finalShippingModeLocator = await this.page.locator(finalShippingMode);
            await this.config.waitForLocator(this.page);
            await finalShippingModeLocator.click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async quotationRequiredBy() {
        try {
            let quotationRequiredByField = await this.page.locator(LPrCreate.QUOTATION_REQUIRED_BY);
            await this.config.waitForLocator(this.page);
            await quotationRequiredByField.click();

            let todayOption = await this.page.locator(LPrCreate.TODAY);
            await this.config.waitForLocator(this.page);
            await todayOption.first().click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async expectedPOIssue() {
        try {
            let expectedPoIssueField = await this.page.locator(LPrCreate.EXPECTED_PO_ISSUE);
            await this.config.waitForLocator(this.page);
            await expectedPoIssueField.click();

            let todayOption = await this.page.locator(LPrCreate.TODAY);
            await this.config.waitForLocator(this.page);
            await todayOption.first().click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async expectedDelivery() {
        try {
            let expectedDeliveryField = await this.page.locator(LPrCreate.EXPECTED_DELIVERY);
            await this.config.waitForLocator(this.page);
            await expectedDeliveryField.click();

            let todayOption = await this.page.locator(LPrCreate.TODAY);
            await this.config.waitForLocator(this.page);
            await todayOption.first().click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

   async buyerManager(){
       try {
           let buyerManagerDropdown = await this.page.locator(LPrCreate.BUYER_MANAGER);
           await this.config.waitForLocator(this.page);
           await buyerManagerDropdown.click();

           let buyerManagerName = TestData.mailIds.buyerManagerEmail;

           let buyerManagerSearch = await this.page.locator(LPrCreate.BUYER_MANAGER_SEARCH);
           await this.config.waitForLocator(this.page);
           await buyerManagerSearch.fill(buyerManagerName);

           let buyerManagerLocator = LPrCreate.getBuyerManager(buyerManagerName);
           let finalBuyerManagerSelect = await this.page.locator(buyerManagerLocator);
           await this.config.waitForLocator(this.page);
           await finalBuyerManagerSelect.click();
       } catch (error) {
           console.log("Error encountered: " + error);
       }
   }

    async projectManager(){
       try {
           let projectManagerDropdown = await this.page.locator(LPrCreate.PROJECT_MANAGER);
           await this.config.waitForLocator(this.page);
           await projectManagerDropdown.click();

           let projectManagerName = TestData.mailIds.projectManagerEmail;

           let projectManagerSearch = await this.page.locator(LPrCreate.PROJECT_MANAGER_SEARCH);
           await this.config.waitForLocator(this.page);
           await projectManagerSearch.fill(projectManagerName);

           let projectManagerLocator = LPrCreate.getProjectManager(projectManagerName);
           let finalProjectManager = await this.page.locator(projectManagerLocator);
           await this.config.waitForLocator(this.page);
           await finalProjectManager.click();
       } catch (error) {
           console.error("Error encountered: " + error);
       }
   }

    async rohsCompliance(){
        try {
            let compliance = TestData.miscellaneous.rohsCompliance.toLowerCase().trim();

            if (compliance.equals("no")) {
                let rohsComplianceLocator = await this.page.locator(LPrCreate.ROHS_COMPLIANCE);
                this.config.waitForLocator(this.page);
                await rohsComplianceLocator.click();
            }
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async oiAndTpCurrency(){
        try {
            if (this.purchaseType.equals("NonCatalog")) {

                let oiAndTpCurrencyLocator =await this.page.locator(LPrCreate.OI_AND_TP_CURRENCY);
                await this.config.waitForLocator(this.page);
                await oiAndTpCurrencyLocator.click();

                let currency = TestData.locationAndShippingDetails.oiAndTpCurrency.toLowerCase().trim();

                let oiAndTpCurrencySearchLocator = await this.page.locator(LPrCreate.OI_AND_TP_CURRENCY_SEARCH);
                await this.config.waitForLocator(this.page);
                await oiAndTpCurrencySearchLocator.fill(currency);

                let currencySelect = LPrCreate.getOiAndTpCurrency(currency);
                let currencySelectLocator = await this.page.locator(currencySelect);
                await this.config.waitForLocator(this.page);
                await currencySelectLocator.click();
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async orderIntake(){
        try {
            let orderIntake = TestData.billingAndPricingDetails.orderIntake;
            await this.config.waitForLocator(this.page);
            await orderIntakeLocator.fill(orderIntake);
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async targetPrice(){
        try {
            if (this.purchaseType.toLowerCase().equals("noncatalog")) {
                let targetPrice = TestData.billingAndPricingDetails.targetPrice;
                let targetPriceLocator = await this.page.locator(LPrCreate.TARGET_PRICE);
                await this.config.waitForLocator(this.page);
                await targetPriceLocator.fill(targetPrice);
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async warrantyRequirements(){
        try {
            if (this.purchaseType.toLowerCase().equals("noncatalog")) {
                let warrantyRequirementsLocator = await this.page.locator(LPrCreate.WARRANTY_REQUIREMENTS);
                await this.config.waitForLocator(this.page);
                await warrantyRequirementsLocator.click();

                let warrantyRequirement = TestData.miscellaneousItemDetails.warrantyRequirement;

                let warrantyRequirementsSearchLocator = await this.page.locator(LPrCreate.WARRANTY_REQUIREMENTS_SEARCH);
                await this.config.waitForLocator(this.page);
                await warrantyRequirementsSearchLocator.fill(warrantyRequirement);

                let warrantyRequirementSelector = LPrCreate.getWarrantyRequirements(warrantyRequirement);
                let warrantyRequirementOptionLocator = await this.page.locator(warrantyRequirementSelector);
                await this.config.waitForLocator(this.page);
                await warrantyRequirementOptionLocator.click();
            }
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async priceValidity(){
        try {
            let priceValidityLocator = await this.page.locator(LPrCreate.PRICE_VALIDITY);
            await this.config.waitForLocator(this.page);
            await priceValidityLocator.click();

            let warrantyRequirement = TestData.billingAndPricingDetails.priceValidity;

            let priceValiditySearchLocator = await this.page.locator(LPrCreate.PRICE_VALIDITY_SEARCH);
            await this.config.waitForLocator(this.page);
            await priceValiditySearchLocator.fill(warrantyRequirement);

            let priceValiditySelector = LPrCreate.getPriceValidity(warrantyRequirement);
            let priceValidityOptionLocator = await this.page.locator(priceValiditySelector);
            await this.config.waitForLocator(this.page);
            await priceValidityOptionLocator.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async inspectionRequired() {
        try {
            let isInspectionRequired = Boolean.parseBoolean(TestData.miscellaneousItemDetails.inspectionRequired);

            if (isInspectionRequired) {
                let inspectionRequiredLocator = await this.page.locator(LPrCreate.INSPECTION_REQUIRED);
                await this.config.waitForLocator(this.page);
                await inspectionRequiredLocator.click();
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async liquidatedDamages(){
        try {
            let liquidatedDamages = TestData.billingAndPricingDetailsliquidatedDamages.toLowerCase().trim();

            if (liquidatedDamages.equals("special")) {
                let liquidatedDamagesSelector = await this.page.locator(LPrCreate.LIQUIDATED_DAMAGES_SELECT);
                await this.config.waitForLocator(this.page);
                await liquidatedDamagesSelector.click();

                let liquidatedDamagesInput = await this.page.locator(LPrCreate.LIQUIDATED_DAMAGES);
                await this.config.waitForLocator(this.page);
                await liquidatedDamagesInput.fill("Special Liquidated Damages");
            }
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async addLineRequisitionItems() {
        try {
            let addItemButton = null;
            let addLineItemButton = await this.page.locator(LPrCreate.ADD_LINE_ITEM_BUTTON);
            await this.config.waitForLocator(this.page);
            await addLineItemButton.click();

            let itemsDropdown = await this.page.locator(LPrCreate.ITEMS);
            await this.config.waitForLocator(this.page);
            await itemsDropdown.click();

            if (this.purchaseType.toLowerCase().equals("catalog")) {
                let itemList = await this.page.$$(LPrCreate.ITEMS_LIST).allTextContents();
                for (let i = 1; i < itemList.length; i++) {
                    let itemName = itemList[i].split(' - ');

                    if (itemList.length > 1) {
                        await this.config.waitForLocator(this.page);
                        await addLineItemButton.click();
                        await this.config.waitForLocator(this.page);
                        await itemsDropdown.click();
                    }

                    let itemSearchBox = await this.page.locator(LPrCreate.ITEM_SEARCH);
                    await this.config.waitForLocator(this.page);
                    await itemSearchBox.fill(itemName);

                    let itemOption = await this.page.locator(LPrCreate.getItem(itemName));
                    this.config.waitForLocator(this.page);
                    await itemOption.first().click();

                    let quantityField = await this.page.locator(LPrCreate.QUANTITY);
                    await this.config.waitForLocator(this.page);
                    await quantityField.fill(String.valueOf(i));

                    addItemButton = await this.page.locator(LPrCreate.ADD_ITEM_BUTTON);
                    await this.config.waitForLocator(this.page);
                    await addItemButton.click();
                }
            } else if (this.purchaseType.toLowerCase().equals("noncatalog")) {
                let itemNames = TestData.orderDetails.items.split(',');
                let quantities = TestData.orderDetails.quantityList.split(",");

                for (let i = 1; i < itemNames.length; i++) {
                    await this.config.waitForLocator(this.page);
                    await addLineItemButton.click();

                    await this.config.waitForLocator(this.page);
                    await itemsDropdown.click();

                    let itemSearchBox = await this.page.locator(LPrCreate.ITEM_SEARCH);
                    await this.config.waitForLocator(this.page);
                    await itemSearchBox.fill(itemNames[i]);

                    let itemOption = await this.page.locator(LPrCreate.getItem(itemNames[i]));
                    await this.config.waitForLocator(this.page);
                    await itemOption.first().click();

                    let quantityField = await this.page.locator(LPrCreate.QUANTITY);
                    await this.config.waitForLocator(this.page);
                    await quantityField.fill(quantities[i]);

                    await this.config.waitForLocator(this.page);
                    await addItemButton.click();
                }
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async notes() {
        try {
            let notes = TestData.documentsAndNotes.requisitionNotes;
            let notesField = await this.page.locator(LPrCreate.NOTES);
            await this.config.waitForLocator(this.page);
            await notesField.fill(notesText);
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async attachments(){
        try {
            let internalFile = TestData.browserAndExecutionSettings.internalFilePath;
            let externalFile = TestData.browserAndExecutionSettings.externalFilePath;
//TODO Internal Attachment
            let attachmentsButton = await this.page.locator(LPrCreate.ATTACHMENTS);
            await this.config.waitForLocator(this.page);
            await attachmentsButton.click();

            let internalFileUpload = await this.page.locator(LPrCreate.FILE_UPLOAD);
            await this.config.waitForLocator(this.page);
            await internalFileUpload.setInputFiles(Paths.get(internalFile));

            let attachInternalFileButton = await this.page.locator(LPrCreate.ATTACH_FILE_BUTTON);
            await this.config.waitForLocator(this.page);
            attachInternalFileButton.click();

//TODO External Attachment
            let externalAttachmentsButton = await this.page.locator(LPrCreate.ATTACHMENTS);
            await this.config.waitForLocator(this.page);
            await externalAttachmentsButton.click();

            let externalFileUpload = await this.page.locator(LPrCreate.FILE_UPLOAD);
            await this.config.waitForLocator(this.page);
            await externalFileUpload.setInputFiles(Paths.get(externalFile));

            let externalRadioButton = await this.page.locator(LPrCreate.EXTERNAL_RADIO_BUTTON);
            await this.config.waitForLocator(this.page);
            await externalRadioButton.click();

            let attachExternalFileButton = await this.page.locator(LPrCreate.ATTACH_FILE_BUTTON);
            await this.config.waitForLocator(this.page);
            await attachExternalFileButton.click();

            let continueButton = await this.page.locator(LPrCreate.CONTINUE_BUTTON);
            await this.config.waitForLocator(this.page);
            await continueButton.click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async prCreate() {
        try {
            let createDraftButtonLocator = await this.page.locator(LPrCreate.CREATE_DRAFT_BUTTON);
            await this.config.waitForLocator(this.page);
            await createDraftButtonLocator.click();

            let yesButtonLocator = await this.page.locator(LPrCreate.YES);
            await this.config.waitForLocator(this.page);

            const [response] = Promise.all([
                await this.page.waitForResponse((response) =>
                response.url().includes('/api/requisitions') && response.status()),
                await yesButtonLocator.click()
            ]);

            const status = await response.status();
            const body = await response.body();

            await iLogout.performLogout();

            return {status, body};
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }
}

export default Create;