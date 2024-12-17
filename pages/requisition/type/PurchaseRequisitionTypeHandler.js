import TestData from '../test-data/TestData.json';

class PurchaseRequisitionTypeHandler {

//TODO Constructor
    constructor(create){
        this.create = create;
    }

    async processRequisitionType() {
        try {
            let prType = TestData.orderDetails.purchaseType.toLowerCase();
            switch (prType) {
                case "catalog":
                    this.create.requesterLoginPRCreate();
                    this.create.createButton();
                    this.create.purchaseType();
                    this.create.title();
                    this.create.shipToYokogawa();
                    this.create.project();
                    this.create.wbs();
                    this.create.vendor();
                    this.create.rateContract();
                    this.create.shippingAddress();
                    this.create.shippingMode();
                    this.create.expectedPOIssue();
                    this.create.expectedDelivery();
                    this.create.orderIntake();
                    this.create.inspectionRequired();
                    this.create.addLineRequisitionItems();
                    this.create.notes();
                    this.create.attachments();
                    this.create.prCreate();
                    break;
                case "noncatalog":
                    this.create.requesterLoginPRCreate();
                    this.create.createButton();
                    this.create.purchaseType();
                    this.create.title();
                    this.create.shipToYokogawa();
                    this.create.project();
                    this.create.wbs();
                    this.create.incoterm();
                    this.create.shippingAddress();
                    this.create.shippingMode();
                    this.create.quotationRequiredBy();
                    this.create.expectedPOIssue();
                    this.create.expectedDelivery();
                    this.create.rohsCompliance();
                    this.create.inspectionRequired();
                    this.create.oiAndTpCurrency();
                    this.create.orderIntake();
                    this.create.targetPrice();
                    this.create.warrantyRequirements();
                    this.create.priceValidity();
                    this.create.liquidatedDamages();
                    this.create.addLineRequisitionItems();
                    this.create.notes();
                    this.create.attachments();
                    this.create.prCreate();
                    break;
                default:
                    console.log("Enter Proper Purchase Type");
                    break;
            }
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }
}