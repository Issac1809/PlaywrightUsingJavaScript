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
                case "noncatalog":
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
            
            if(val.toLowerCase() ==='yes' ){
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
            
            const [response] = await Promise.all([
                this.page.waitForResponse((response) =>
                response.url().includes('/api/Projects')),
                projectDropDownLocator.click()
            ]);

            const responseBody = await response.json();

            for(let getProject of responseBody){
                if(getProject.text === projectCode){
                    let projectSearchFieldLocator = await this.page.locator(LPrCreate.PROJECT_SEARCH);
                    await this.config.waitForLocator(this.page);
                    await projectSearchFieldLocator.fill(projectCode);
    
                    let projectSelectLocator = await this.page.locator('.select2-results__option').first();
                    await this.config.waitForLocator(this.page);
                    await projectSelectLocator.click();
                    break;
                }
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async wbs() {
        try {
            let wbsCodeValue = TestData.orderDetails.wbsCode;

            let wbsLocator = await this.page.locator(LPrCreate.WBS);
            await this.config.waitForLocator(this.page);

            const [response] = await Promise.all([
                this.page.waitForResponse((response) =>
                response.url().includes('/api/workBreakdownStructures')),
                wbsLocator.click()
            ]);

            const responseBody = await response.json();
            const getWbs = await responseBody.map(wbs => wbs.text);

            for(let wbs of getWbs){
                if(wbs === wbsCodeValue){
                    let wbsSearchLocator = await this.page.locator(LPrCreate.WBS_SEARCH);
                    await this.config.waitForLocator(this.page);
                    await wbsSearchLocator.fill(wbsCodeValue);

                    let wbsSelectLocator = await this.page.locator('.select2-results__option').first();
                    await this.config.waitForLocator(this.page);
                    await wbsSelectLocator.click();
                    break;
                }
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async vendor() {
        try {
            let vendorLocator = this.page.locator(LPrCreate.VENDOR);
            await this.config.waitForLocator(this.page);
            await vendorLocator.click();

            let vendorNameValue = TestData.orderDetails.vendorName;
            let vendorSearchLocator = await this.page.locator(LPrCreate.VENDOR_SEARCH);
            await this.config.waitForLocator(this.page);
            await vendorSearchLocator.fill(vendorNameValue);

            let vendorOptionLocator = LPrCreate.getVendor(vendorNameValue);
            let vendorOption = await this.page.locator(vendorOptionLocator);
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
            await rateContractLocator.click();

            let rateContractValue = TestData.billingAndPricingDetails.rateContract;
            let rateContractSearchLocator = await this.page.locator(LPrCreate.RATE_CONTRACT_SEARCH);
            await this.config.waitForLocator(this.page);
            await rateContractSearchLocator.fill(rateContractValue);

            let rateContractOptionLocator = LPrCreate.getRateContract(rateContractValue);
            let rateContractOption = this.page.locator(rateContractOptionLocator);
            await this.config.waitForLocator(this.page);
            await rateContractOption.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async incoterm() {
        try {
            let incotermLocator = await this.page.locator(LPrCreate.INCOTERM);
            await this.config.waitForLocator(this.page);
            await incotermLocator.click();

            let incotermValue = TestData.locationAndShippingDetails.incoterm;
            let incotermSearchLocator = await this.page.locator(LPrCreate.INCOTERM_SEARCH);
            await incotermSearchLocator.fill(incotermValue);

            let incotermOptionLocator = LPrCreate.getIncoterm(incotermValue);
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

            let shippingMode = this.purchaseType ==="Catalog" ? LPrCreate.CATALOG_SHIPPING_MODE : LPrCreate.NON_CATALOG_SHIPPING_MODE;

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
            let expectedPoIssue;
            if(this.purchaseType === 'Catalog'){
                expectedPoIssue = await this.page.locator(LPrCreate.EXPECTED_PO_ISSUE_CATALOG);
            } else {
                expectedPoIssue = await this.page.locator(LPrCreate.EXPECTED_PO_ISSUE_NON_CATALOG);
            }
            await this.config.waitForLocator(this.page);
            await expectedPoIssue.click();

            let todayOption = await this.page.locator(LPrCreate.TODAY);
            await this.config.waitForLocator(this.page);
            await todayOption.first().click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async expectedDelivery() {
        try {
            let expectedDelivery;
            if(this.purchaseType === 'Catalog'){
                expectedDelivery = await this.page.locator(LPrCreate.EXPECTED_DELIVERY_CATALOG);
            } else {
                expectedDelivery = await this.page.locator(LPrCreate.EXPECTED_DELIVERY_NON_CATALOG);
            }
            await this.config.waitForLocator(this.page);
            await expectedDelivery.click();

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
            let compliance = TestData.miscellaneousItemDetails.rohsCompliance;

            if (compliance === 'No') {
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
            if (this.purchaseType === "NonCatalog") {

                let oiAndTpCurrencyLocator = await this.page.locator(LPrCreate.OI_AND_TP_CURRENCY);
                await this.config.waitForLocator(this.page);
                await oiAndTpCurrencyLocator.click();

                let currency = TestData.locationAndShippingDetails.oiAndTpCurrency;

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

            let orderIntakeLocator;

            if(this.purchaseType === 'Catalog'){
                orderIntakeLocator = await this.page.locator(LPrCreate.CATALOG_ORDER_INTAKE);
            } else {
                orderIntakeLocator = await this.page.locator(LPrCreate.NON_CATALOG_ORDER_INTAKE);
            }
            await this.config.waitForLocator(this.page);
            await orderIntakeLocator.fill(orderIntake.toString());
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async targetPrice(){
        try {
            if (this.purchaseType === 'NonCatalog') {
                let targetPrice = TestData.billingAndPricingDetails.targetPrice;
                let targetPriceLocator = await this.page.locator(LPrCreate.TARGET_PRICE);
                await this.config.waitForLocator(this.page);
                await targetPriceLocator.fill(targetPrice.toString());
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async warrantyRequirements(){
        try {
            if (this.purchaseType === 'NonCatalog') {
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

            let priceValidity = TestData.billingAndPricingDetails.priceValidity;

            let priceValiditySearchLocator = await this.page.locator(LPrCreate.PRICE_VALIDITY_SEARCH);
            await this.config.waitForLocator(this.page);
            await priceValiditySearchLocator.fill(priceValidity);

            let priceValiditySelector = LPrCreate.getPriceValidity(priceValidity);
            let priceValidityOptionLocator = await this.page.locator(priceValiditySelector);
            await this.config.waitForLocator(this.page);
            await priceValidityOptionLocator.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async inspectionRequired() {
        try {
            let isInspectionRequired = TestData.miscellaneousItemDetails.inspectionRequired;
            let purchaseType = this.purchaseType;
            let inspectionRequiredLocator;
            if (isInspectionRequired === 'true'){
                if (purchaseType === 'Catalog') {
                    inspectionRequiredLocator = await this.page.locator(LPrCreate.CATALOG_INSPECTION_REQUIRED);
                } else if(purchaseType === 'NonCatalog') {
                    inspectionRequiredLocator = await this.page.locator(LPrCreate.NON_CATALOG_INSPECTION_REQUIRED);
                }
            }
                await this.config.waitForLocator(this.page);
                await inspectionRequiredLocator.click();
            } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async liquidatedDamages(){
        try {
            let liquidatedDamages = TestData.billingAndPricingDetails.liquidatedDamages;

            if (liquidatedDamages === 'Special') {
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
            const addLineItemButton = await this.page.locator(LPrCreate.ADD_LINE_ITEM_BUTTON);
            await addLineItemButton.click();
            
            if (this.purchaseType === "Catalog") {

                const catalogItemsDropdown = await this.page.locator(LPrCreate.CATALOG_ITEMS_CONTAINER);

                const [response] = await Promise.all([
                    this.page.waitForResponse((response) => 
                    response.url().includes('/api/RateContractItems')),
                    catalogItemsDropdown.click()
                ]);

                const responseBody = await response.json();
                const items = await responseBody.map(item => item.text);
                
                for (let i = 0; i < items.length; i++) {
                    let itemSearchBox = await this.page.locator(LPrCreate.ITEM_SEARCH);
                    await this.config.waitForLocator(this.page);
                    await itemSearchBox.fill(items[i]);

                    let itemOption = await this.page.locator(LPrCreate.getItem(items[i]));
                    this.config.waitForLocator(this.page);
                    await itemOption.click();

                    let quantityField = await this.page.locator(LPrCreate.QUANTITY);
                    await this.config.waitForLocator(this.page);
                    await quantityField.fill("10");

                    let addItemButton = await this.page.locator(LPrCreate.ADD_ITEM_BUTTON);
                    await this.config.waitForLocator(this.page);
                    await addItemButton.click();

                    if(i === items.length - 1){
                        break;
                    } else {
                        await addLineItemButton.click();
                        await catalogItemsDropdown.click();
                    }
                }
            } else if (this.purchaseType === "NonCatalog") {
                const nonCatalogItemsDropdown = await this.page.locator(LPrCreate.NON_CATALOG_ITEMS_CONTAINER);

                let itemNames = TestData.orderDetails.items;
                const items = itemNames.split(',').map(item => item.trim());
                let quantities = TestData.orderDetails.quantityList;
                const finalQuantities = quantities.split(',').map(quantity => quantity.trim());

                for (let i = 0; i < items.length; i++) {
                    await this.config.waitForLocator(this.page);
                    await nonCatalogItemsDropdown.click();

                    let itemSearchBox = await this.page.locator(LPrCreate.ITEM_SEARCH);
                    await this.config.waitForLocator(this.page);
                    await itemSearchBox.fill(items[i]);

                    let itemOption = await this.page.locator(LPrCreate.getItem(items[i]));
                    await this.config.waitForLocator(this.page);
                    await itemOption.first().click();

                    let quantityField = await this.page.locator(LPrCreate.QUANTITY);
                    await this.config.waitForLocator(this.page);
                    await quantityField.fill(finalQuantities[i]);

                    let addItemButton = await this.page.locator(LPrCreate.ADD_ITEM_BUTTON);
                    await this.config.waitForLocator(this.page);
                    await addItemButton.click();

                    if(i === items.length - 1){
                        break;
                    } else {
                        await addLineItemButton.click();
                    }
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
            await notesField.fill(notes);
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async attachments(){
        try {
            const path = require('path');
            let fileType = TestData.browserAndExecutionSettings.fileType;
            let internalFile = TestData.browserAndExecutionSettings.internalFilePath;
            let externalFile = TestData.browserAndExecutionSettings.externalFilePath;

            let attachmentsButton = await this.page.locator(LPrCreate.ATTACHMENTS);
            await this.config.waitForLocator(this.page);
            await attachmentsButton.click();

            let fileUploadLocator = await this.page.locator(LPrCreate.FILE_UPLOAD);
            await this.config.waitForLocator(this.page);


            if(fileType === 'Internal'){
                await fileUploadLocator.setInputFiles(path.resolve(internalFile));
            } else if(fileType === 'External'){
                await fileUploadLocator.setInputFiles(path.resolve(externalFile));

                let externalRadioButton = await this.page.locator(LPrCreate.EXTERNAL_RADIO_BUTTON);
                await this.config.waitForLocator(this.page);
                await externalRadioButton.click();
            } else {
                console.log("Enter Proper file type or unable to fetch the file")
            }

            let attachFileButton = await this.page.locator(LPrCreate.ATTACH_FILE_BUTTON);
            await attachFileButton.waitFor({state : 'attached'});
            await this.config.waitForLocator(this.page);
            await attachFileButton.click();

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

            const [response] = await Promise.all([
                this.page.waitForResponse((response) =>
                response.url().includes('/api/requisitions')),
                yesButtonLocator.click()
            ]);

            const status = await response.status();

            await this.logout.performLogout();

            return status;
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }
}

export default Create;