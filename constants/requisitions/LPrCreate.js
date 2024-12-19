class LPrCreate {

    static CREATE_BUTTON = "//button[@data-bs-toggle='modal']";
    static TITLE = "#title";
    static SHIP_TO_YOKOGAWA = "#shipToYokogawa";
    static PROJECT = "#select2-projectId-container";
    static PROJECT_SEARCH = ".select2-search__field";
    static WBS = "#select2-wbsId-container";
    static WBS_SEARCH = ".select2-search__field";
    static WBS_LIST = "#select2-wbsId-results";
    static VENDOR = "#select2-vendorId-container";
    static VENDOR_SEARCH = ".select2-search__field";
    static RATE_CONTRACT = "#select2-rateContractId-container";
    static RATE_CONTRACT_SEARCH = ".select2-search__field";
    static INCOTERM = "#select2-incoterm-container";
    static INCOTERM_SEARCH = ".select2-search__field";
    static SHIPPING_ADDRESS = "#select2-shippingaddressId-container";
    static CATALOG_SHIPPING_MODE = "#select2-shippingModeId-container";
    static NON_CATALOG_MH_SHIPPING_MODE = "#select2-shippingmodeid-container";
    static SHIPPING_MODE_SEARCH = ".select2-search__field";
    static QUOTATION_REQUIRED_BY = "//*[@id='dates']/div[1]/input[2]";
    static EXPECTED_PO_ISSUE = "//*[@id='dates']/div[2]/input[2]";
    static EXPECTED_DELIVERY = "//*[@id='dates']/div[3]/input[2]";
    static TODAY = "//span[@class='flatpickr-day today']";
    static BUYER_MANAGER = "#select2-buyerManagerId-container";
    static BUYER_MANAGER_SEARCH = ".select2-search__field";
    static PROJECT_MANAGER = "#select2-projectManagerId-container";
    static PROJECT_MANAGER_SEARCH = ".select2-search__field";
    static ROHS_COMPLIANCE = "#rohsnotcomplianceid";
    static OI_AND_TP_CURRENCY = "#select2-oiTpCurrencyId-container";
    static OI_AND_TP_CURRENCY_SEARCH = ".select2-search__field";
    static ORDER_INTAKE = "#orderintakeid";
    static TARGET_PRICE = "#targetpriceid";
    static WARRANTY_REQUIREMENTS = "#select2-warrantyrequirementsid-container";
    static WARRANTY_REQUIREMENTS_SEARCH = ".select2-search__field";
    static PRICE_VALIDITY = "#select2-pricevalidityid-container";
    static PRICE_VALIDITY_SEARCH = ".select2-search__field";
    static INSPECTION_REQUIRED = "#inspectrequired";
    static LIQUIDATED_DAMAGES_SELECT = "#isLDStandardNoId";
    static LIQUIDATED_DAMAGES = "#liquidatedamageTextId";
    static ADD_LINE_ITEM_BUTTON = "#addLineRequisitionItems";
    static ITEMS_LIST = "#select2-itemId-results";
    static ITEMS = "#select2-itemid-container";
    static ITEM_SEARCH = ".select2-search__field";
    static QUANTITY = "#quantity";
    static ADD_ITEM_BUTTON = "#saveRequisitionItem";
    static NOTES = "#notes";
    static ATTACHMENTS = "#attachDocs";
    static FILE_UPLOAD = "#formFilePreupload";
    static EXTERNAL_RADIO_BUTTON = "#radioInActive";
    static ATTACH_FILE_BUTTON = "#saveAttachments1";
    static CONTINUE_BUTTON = "#attachmentSaveId";
    static CREATE_DRAFT_BUTTON = "//*[contains(text(), 'Create Draft')]";
    static YES = ".bootbox-accept";
    static BILLING_TYPE = "#select2-billingTypeId-container";

//TODO Constructor
    constructor() {
    }

    static getPrType(type) {
        return "//a[@href='/Procurement/Requisitions/POC_" + type + "_Create']";
    }

    static getProject(project) {
        return "//li[contains(text(),'" + project + "')]";
    }

    static getWBSForMh(wbs) {
        return "//li[contains(text(), " + wbs + ")]";
    }

    static getWBSForCandNC(wbs) {
        return "//li[contains(text(),'" + wbs + "')]";
    }

    static getVendor(vendor) {
        return "//li[contains(text(),'" + vendor + "')]";
    }

    static getRateContract(rateContract) {
        return "//li[contains(text(),'" + rateContract + "')]";
    }

    static getIncoterm(incoterm) {
        return "//li[contains(text(),'" + incoterm + "')]";
    }

    static getShippingAddress(shippingAddress) {
        return "//*[contains(text(),'" + shippingAddress + "')]";
    }

    static getShippingMode(shippingMode) {
        return "//li[contains(text(),'" + shippingMode + "')]";
    }

    static getBuyerManager(buyerManager) {
        return "//li[contains(text(),'" + buyerManager + "')]";
    }

    static getProjectManager(projectManager) {
        return "//li[contains(text(),'" + projectManager + "')]";
    }

    static getOiAndTpCurrency(currency) {
        return "//li[contains(text(),'" + currency + "')]";
    }

    static getWarrantyRequirements(warrantyRequirements) {
        return "//li[contains(text(),'" + warrantyRequirements + "')]";
    }

    static getPriceValidity(priceValidity) {
        return "//li[contains(text(),'" + priceValidity + "')]";
    }

    static getItem(item) {
        return "//li[contains(text(),'" + item + "')]";
    }

    static getBillingType(billingType) {
        return "//li[contains(text(),'" + billingType + "')]";
    }
}

export default LPrCreate;