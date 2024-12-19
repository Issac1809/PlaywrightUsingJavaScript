import TestData from '../../../test-data/TestData.json'

class PurchaseRequisitionTypeHandler {

//TODO Constructor
    constructor(create){
        this.create = create;
    }

    async processRequisitionType() {
        let status = null;
        let body = null;
        try {
            let prType = TestData.orderDetails.purchaseType.toLowerCase();
            switch (prType) {
                case "catalog":
                    await this.create.requesterLogin();
                    await this.create.createButton();
                    await this.create.getPurchaseType();
                    await this.create.title();
                    await this.create.shipToYokogawa();
                    await this.create.project();
                    await this.create.wbs();
                    await this.create.vendor();
                    await this.create.rateContract();
                    await this.create.shippingAddress();
                    await this.create.shippingMode();
                    await this.create.expectedPOIssue();
                    await this.create.expectedDelivery();
                    await this.create.orderIntake();
                    await this.create.inspectionRequired();
                    await this.create.addLineRequisitionItems();
                    await this.create.notes();
                    await this.create.attachments();
                    ({status, body} = await this.create.prCreate());
                    break;
                case "noncatalog":
                    await this.create.requesterLoginPRCreate();
                    await this.create.createButton();
                    await this.create.purchaseType();
                    await this.create.title();
                    await this.create.shipToYokogawa();
                    await this.create.project();
                    await this.create.wbs();
                    await this.create.incoterm();
                    await this.create.shippingAddress();
                    await this.create.shippingMode();
                    await this.create.quotationRequiredBy();
                    await this.create.expectedPOIssue();
                    await this.create.expectedDelivery();
                    await this.create.rohsCompliance();
                    await this.create.inspectionRequired();
                    await this.create.oiAndTpCurrency();
                    await this.create.orderIntake();
                    await this.create.targetPrice();
                    await this.create.warrantyRequirements();
                    await this.create.priceValidity();
                    await this.create.liquidatedDamages();
                    await this.create.addLineRequisitionItems();
                    await this.create.notes();
                    await this.create.attachments();
                    ({status, body} = await this.create.prCreate());
                    break;
                default:
                    console.log("Enter Proper Purchase Type");
                    break;
            }
            return {status, body};
        } catch (error) {
            console.log("Error encountered: " + error);
        }
    }
}

export default PurchaseRequisitionTypeHandler;