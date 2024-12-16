import TestData from '../test-data/TestData.json';
import LPrCreate from '../../../constants/requisitions/LPrCreate';

class Create {

//TODO Constructor
    constructor(login, config, page) {
        this.login = login;
        this.config = config;
        this.page = page;
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
            await this.config.waitForLocator(createButtonLocator);
            await createButtonLocator.click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async purchaseType(){
        try {
            let prTypeLocator = LPrCreate.getPrType(this.purchaseType);
            this.config.waitForLocator(prTypeLocator);
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
                    await this.config.waitForLocator(catalogTitleLocator);
                    await catalogTitleLocator.fill(title + "-" + this.purchaseType);
                    break;
                case "non-catalog":
                    let nonCatalogTitleLocator = await this.page.locator(LPrCreate.TITLE);
                    await this.config.waitForLocator(nonCatalogTitleLocator);
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
            await this.config.waitForLocator(projectDropDownLocator);
            await projectDropDownLocator.click();

            let projectSearchFieldLocator = await this.page.locator(LPrCreate.PROJECT_SEARCH);
            await this.config.waitForLocator(projectSearchFieldLocator);
            await projectSearchFieldLocator.fill(projectCode);

            const dropDownValues = await this.page.locator('.select2-results__options').allTextContents();
            for(let dropDownValue of dropDownValues){
                if(dropDownValue.includes(projectCode)){
                    let projectSelectLocator = await this.page.locator('.select2-results__option').first();
                    await this.config.waitForLocator(projectSelectLocator);
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
            await this.config.waitForLocator(wbsLocator);
            await wbsLocator.click();

            let wbsCodeValue = TestData.orderDetails.wbsCode;
            let wbsSearchLocator = await this.page.locator(LPrCreate.WBS_SEARCH);
            await this.config.waitForLocator(wbsSearchLocator);
            await wbsSearchLocator.fill(wbsCodeValue);

            let wbsSelectLocator = LPrCreate.getWBSForCandNC(wbsCodeValue);
            let finalWbsLocator = await this.page.locator(wbsSelectLocator);
            await this.config.waitForLocator(finalWbsLocator);
            await finalWbsLocator.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async vendor() {
        try {
            let vendorLocator = this.page.locator(LPrCreate.VENDOR);
            await this.config.waitForLocator(vendorLocator);
            await vendorLocator.click();

            let vendorMailId = TestData.mailIds.vendorEmail;
            let vendorSearchLocator = await page.locator(LPrCreate.VENDOR_SEARCH);
            await this.config.waitForLocator(vendorSearchLocator);
            await vendorSearchLocator.fill(vendorNameValue);

            let vendorOptionLocator = LPrCreate.getVendor(vendorNameValue);
            let vendorOption = await page.locator(vendorOptionLocator);
            await this.config.waitForLocator(vendorOption);
            await vendorOption.click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async rateContract() {
        try {
            let rateContractLocator = await this.page.locator(LPrCreate.RATE_CONTRACT);
            await this.config.waitForLocator(rateContractLocator);
            await this.rateContractLocator.click();

            let rateContractValue = TestData.billingAndPricingDetails.rateContract;
            let rateContractSearchLocator = await this.page.locator(LPrCreate.RATE_CONTRACT_SEARCH);
            await this.config.waitForLocator(rateContractSearchLocator);
            await rateContractSearchLocator.fill(rateContractValue);

            let rateContractOptionLocator = LPrCreate.getRateContract(rateContractValue);
            let rateContractOption = page.locator(rateContractOptionLocator);
            await this.config.waitForLocator(rateContractOption);
            await rateContractOption.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async incoterm() {
        try {
            let incotermLocator = await this.page.locator(LPrCreate.INCOTERM);
            await waitForLocator(incotermLocator);
            await incotermLocator.click();

            let incotermValue = TestData.locationAndShippingDetails.incoterm;
            let incotermSearchLocator = await this.page.locator(LPrCreate.INCOTERM_SEARCH);
            await incotermSearchLocator.fill(incotermValue);

            let incotermOptionLocator = await LPrCreate.getIncoterm(incotermValue);
            let incotermOption = await this.page.locator(incotermOptionLocator);
            await this.config.waitForLocator(incotermOption);
            await incotermOption.click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async shippingAddress() {
        try {
            let shippingAddressLocator = await this.page.locator(LPrCreate.SHIPPING_ADDRESS);
            await this.config.waitForLocator(shippingAddressLocator);
            await shippingAddressLocator.click();

            let shippingAddressValue = TestData.locationAndShippingDetails.shippingAddress;
            let shippingAddressOptionLocator = LPrCreate.getShippingAddress(shippingAddressValue);

            let shippingAddressOption = await this.page.locator(shippingAddressOptionLocator);
            await this.config.waitForLocator(shippingAddressOption);
            await shippingAddressOption.last().click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async billingType() {
        try {
            let billingTypeLocator = await this.page.locator(LPrCreate.BILLING_TYPE);
            await this.config.waitForLocator(billingTypeLocator);
            await billingTypeLocator.click();

            let selectedBillingType = TestData.billingAndPricingDetails.billingType;
            let billingTypeOptionLocator = this.config.getBillingType(selectedBillingType);

            let billingTypeOption = await this.page.locator(billingTypeOptionLocator);
            await this.config.waitForLocator(billingTypeOption);
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
            await this.config.waitForLocator(shippingModeLocator);
            await shippingModeLocator.click();

            let getShippingMode = TestData.locationAndShippingDetails.shippingMode;
            let shippingModeSearch = await this.page.locator(LPrCreate.SHIPPING_MODE_SEARCH);
            await this.config.waitForLocator(shippingModeSearch);
            await shippingModeSearch.fill(getShippingMode);

            let finalShippingMode = LPrCreate.getShippingMode(getShippingMode);
            let finalShippingModeLocator = await this.page.locator(finalShippingMode);
            await this.config.waitForLocator(finalShippingModeLocator);
            await finalShippingModeLocator.click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async quotationRequiredBy() {
        try {
            let quotationRequiredByField = await this.page.locator(LPrCreate.QUOTATION_REQUIRED_BY);
            await this.config.waitForLocator(quotationRequiredByField);
            await quotationRequiredByField.click();

            let todayOption = await this.page.locator(LPrCreate.TODAY);
            await this.config.waitForLocator(todayOption);
            await todayOption.first().click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async expectedPOIssue() {
        try {
            let expectedPoIssueField = await this.page.locator(LPrCreate.EXPECTED_PO_ISSUE);
            await this.config.waitForLocator(expectedPoIssueField);
            await expectedPoIssueField.click();

            let todayOption = await this.page.locator(LPrCreate.TODAY);
            await this.config.waitForLocator(todayOption);
            await todayOption.first().click();
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async expectedDelivery() {
        try {
            let expectedDeliveryField = await this.page.locator(LPrCreate.EXPECTED_DELIVERY);
            await this.config.waitForLocator(expectedDeliveryField);
            await expectedDeliveryField.click();

            let todayOption = await this.page.locator(LPrCreate.TODAY);
            await this.config.waitForLocator(todayOption);
            await todayOption.first().click();
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

   async buyerManager(){
       try {
           let buyerManagerDropdown = await this.page.locator(LPrCreate.BUYER_MANAGER);
           await this.config.waitForLocator(buyerManagerDropdown);
           await buyerManagerDropdown.click();

           let buyerManagerName = TestData.mailIds.buyerManagerEmail;

           let buyerManagerSearch = await this.page.locator(LPrCreate.BUYER_MANAGER_SEARCH);
           await this.config.waitForLocator(buyerManagerSearch);
           await buyerManagerSearch.fill(buyerManagerName);

           let buyerManagerLocator = LPrCreate.getBuyerManager(buyerManagerName);
           let finalBuyerManagerSelect = await this.page.locator(buyerManagerLocator);
           await this.config.waitForLocator(finalBuyerManagerSelect);
           await finalBuyerManagerSelect.click();
       } catch (error) {
           console.log("Error encountered: " + error);
       }
   }

    async projectManager(){
       try {
           let projectManagerDropdown = await this.page.locator(LPrCreate.PROJECT_MANAGER);
           await this.config.waitForLocator(projectManagerDropdown);
           await projectManagerDropdown.click();

           let projectManagerName = TestData.mailIds.projectManagerEmail;

           let projectManagerSearch = await this.page.locator(LPrCreate.PROJECT_MANAGER_SEARCH);
           await this.config.waitForLocator(projectManagerSearch);
           await projectManagerSearch.fill(projectManagerName);

           let projectManagerLocator = LPrCreate.getProjectManager(projectManagerName);
           let finalProjectManager = await this.page.locator(projectManagerLocator);
           await this.config.waitForLocator(finalProjectManager);
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
                this.config.waitForLocator(rohsComplianceLocator);
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
                await this.config.waitForLocator(oiAndTpCurrencyLocator);
                await oiAndTpCurrencyLocator.click();

                let currency = TestData.locationAndShippingDetails.oiAndTpCurrency.toLowerCase().trim();

                let oiAndTpCurrencySearchLocator = await this.page.locator(LPrCreate.OI_AND_TP_CURRENCY_SEARCH);
                await this.config.waitForLocator(oiAndTpCurrencySearchLocator);
                await oiAndTpCurrencySearchLocator.fill(currency);

                let currencySelect = LPrCreate.getOiAndTpCurrency(currency);
                let currencySelectLocator = await this.page.locator(currencySelect);
                await this.config.waitForLocator(currencySelectLocator);
                await currencySelectLocator.click();
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }

    async orderIntake(){
        try {
            let orderIntake = TestData.billingAndPricingDetails.orderIntake;
            let orderIntakeLocator = await this.page.locator(LPrCreate.ORDER_INTAKE);
            await this.config.waitForLocator(orderIntakeLocator);
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
                await this.config.waitForLocator(targetPriceLocator);
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
                await this.config.waitForLocator(warrantyRequirementsLocator);
                await warrantyRequirementsLocator.click();

                let warrantyRequirement = TestData.miscellaneousItemDetails.warrantyRequirement;

                let warrantyRequirementsSearchLocator = await this.page.locator(LPrCreate.WARRANTY_REQUIREMENTS_SEARCH);
                await this.config.waitForLocator(warrantyRequirementsSearchLocator);
                await warrantyRequirementsSearchLocator.fill(warrantyRequirement);

                let warrantyRequirementSelector = LPrCreate.getWarrantyRequirements(warrantyRequirement);
                let warrantyRequirementOptionLocator = await this.page.locator(warrantyRequirementSelector);
                await this.config.waitForLocator(warrantyRequirementOptionLocator);
                await warrantyRequirementOptionLocator.click();
            }
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    async priceValidity(){
        try {
            let priceValidityLocator = await this.page.locator(LPrCreate.PRICE_VALIDITY);
            await this.config.waitForLocator(priceValidityLocator);
            await priceValidityLocator.click();

            let warrantyRequirement = TestData.billingAndPricingDetails.priceValidity;

            let priceValiditySearchLocator = await this.page.locator(LPrCreate.PRICE_VALIDITY_SEARCH);
            await this.config.waitForLocator(priceValiditySearchLocator);
            await priceValiditySearchLocator.fill(warrantyRequirement);

            let priceValiditySelector = LPrCreate.getPriceValidity(warrantyRequirement);
            let priceValidityOptionLocator = await this.page.locator(priceValiditySelector);
            await this.config.waitForLocator(priceValidityOptionLocator);
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
                await this.config.waitForLocator(inspectionRequiredLocator);
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
                await this.config.waitForLocator(liquidatedDamagesSelector);
                await liquidatedDamagesSelector.click();

                let liquidatedDamagesInput = await this.page.locator(LPrCreate.LIQUIDATED_DAMAGES);
                await this.config.waitForLocator(liquidatedDamagesInput);
                await liquidatedDamagesInput.fill("Special Liquidated Damages");
            }
        } catch (error) {
            console.error("Error encountered: " + error);
        }
    }

    public void addLineRequisitionItems() {
        try {
            Locator addItemButton = null;
            Locator addLineItemButton = page.locator(ADD_LINE_ITEM_BUTTON);
            this.config.waitForLocator(addLineItemButton);
            addLineItemButton.click();

            Locator itemsDropdown = page.locator(ITEMS);
            this.config.waitForLocator(itemsDropdown);
            itemsDropdown.click();

            if (this.purchaseType.equals("Catalog")) {
                List<String> itemList = page.locator(ITEMS_LIST).allTextContents();
                for (int i = 1; i <= itemList.size(); i++) {
                    String itemName = itemList.get(i);
                    itemName.split(" - ");

                    if (i > 1) {
                        this.config.waitForLocator(addItemButton);
                        addLineItemButton.click();
                        this.config.waitForLocator(itemsDropdown);
                        itemsDropdown.click();
                    }

                    Locator itemSearchBox = page.locator(ITEM_SEARCH);
                    this.config.waitForLocator(itemSearchBox);
                    itemSearchBox.fill(itemName);

                    Locator itemOption = page.locator(getItem(itemName));
                    this.config.waitForLocator(itemOption);
                    itemOption.first().click();

                    Locator quantityField = page.locator(QUANTITY);
                    this.config.waitForLocator(quantityField);
                    quantityField.fill(String.valueOf(i));

                    addItemButton = page.locator(ADD_ITEM_BUTTON);
                    this.config.waitForLocator(addItemButton);
                    addItemButton.click();
                }
            } else if (this.purchaseType.equals("NonCatalog")) {
                String[] itemNames = properties.getProperty("items").split(",");
                String[] quantities = properties.getProperty("quantityList").split(",");

                for (int i = 0; i < itemNames.length; i++) {
                    this.config.waitForLocator(addItemButton);
                    addLineItemButton.click();

                    this.config.waitForLocator(itemsDropdown);
                    itemsDropdown.click();

                    Locator itemSearchBox = page.locator(ITEM_SEARCH);
                    this.config.waitForLocator(itemSearchBox);
                    itemSearchBox.fill(itemNames[i]);

                    Locator itemOption = page.locator(getItem(itemNames[i]));
                    this.config.waitForLocator(itemOption);
                    itemOption.first().click();

                    Locator quantityField = page.locator(QUANTITY);
                    this.config.waitForLocator(quantityField);
                    quantityField.fill(quantities[i]);

                    this.config.waitForLocator(addItemButton);
                    addItemButton.click();
                }
            } else if (this.purchaseType.equalsIgnoreCase("MH")) {
                String mhItemName = properties.getProperty("mhItem");

                Locator itemSearchBox = page.locator(ITEM_SEARCH);
                this.config.waitForLocator(itemSearchBox);
                itemSearchBox.fill(mhItemName);

                Locator itemOption = page.locator(getItem(mhItemName));
                this.config.waitForLocator(itemOption);
                itemOption.first().click();

                Locator quantityField = page.locator(QUANTITY);
                this.config.waitForLocator(quantityField);
                quantityField.fill("20");

                this.config.waitForLocator(addItemButton);
                addItemButton.click();
            }
        } catch (Exception error) {
            System.out.println("Error encountered: " + error.getMessage());
        }

    }

    public void notes() {
        try {
            String notesText = properties.getProperty("requisitionNotes");
            Locator notesField = page.locator(NOTES);
            this.config.waitForLocator(notesField);
            notesField.fill(notesText);
        } catch (Exception error) {
            System.out.println("Error encountered: " + error.getMessage());
        }
    }

    public void attachments(){
        try {
//TODO Internal Attachment
            Locator attachmentsButton = page.locator(ATTACHMENTS);
            this.config.waitForLocator(attachmentsButton);
            attachmentsButton.click();

            Locator internalFileUpload = page.locator(FILE_UPLOAD);
            this.config.waitForLocator(internalFileUpload);
            internalFileUpload.setInputFiles(Paths.get(properties.getProperty("internalFilePath")));

            Locator attachInternalFileButton = page.locator(ATTACH_FILE_BUTTON);
            this.config.waitForLocator(attachInternalFileButton);
            attachInternalFileButton.click();

//TODO External Attachment
            Locator externalAttachmentsButton = page.locator(ATTACHMENTS);
            this.config.waitForLocator(externalAttachmentsButton);
            externalAttachmentsButton.click();

            Locator externalFileUpload = page.locator(FILE_UPLOAD);
            this.config.waitForLocator(externalFileUpload);
            externalFileUpload.setInputFiles(Paths.get(properties.getProperty("externalFilePath")));

            Locator externalRadioButton = page.locator(EXTERNAL_RADIO_BUTTON);
            this.config.waitForLocator(externalRadioButton);
            externalRadioButton.click();

            Locator attachExternalFileButton = page.locator(ATTACH_FILE_BUTTON);
            this.config.waitForLocator(attachExternalFileButton);
            attachExternalFileButton.click();

            Locator continueButton = page.locator(CONTINUE_BUTTON);
            this.config.waitForLocator(continueButton);
            continueButton.click();

        } catch (Exception error) {
            System.out.println("Error encountered: " + error.getMessage());
        }
    }

    public void prCreate() {
        try {
            Locator createDraftButtonLocator = page.locator(CREATE_DRAFT_BUTTON);
            this.config.waitForLocator(createDraftButtonLocator);
            createDraftButtonLocator.click();

            Locator yesButtonLocator = page.locator(YES);
            this.config.waitForLocator(yesButtonLocator);
            yesButtonLocator.click();

            iLogout.performLogout();
        } catch (Exception error) {
            System.out.println("Error encountered: " + error.getMessage());
        }
    }
}