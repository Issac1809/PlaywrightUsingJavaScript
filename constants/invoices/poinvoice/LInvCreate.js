class LInvCreate {

    static INVOICE_NAVIGATION_BAR = "//*[contains(text(), 'Invoices')]";
    static INVOICE_SELECT = ".btn.btn-primary";
    static SELECT_COMPANY_LOCATOR = "#select2-companyId-container";
    static COMPANY_RESULTS_LIST = "#select2-companyId-results";
    static COMPANY_ID_2400 = "2400";
    static COMPANY_ID_5K00 = "5K00";
    static COMPANY_ID_2U00 = "2U00";
    static COMPANY_ID_2W00 = "2W00";
    static SELECT_TYPE = "#select2-typeId-container";
    static SEARCH_FIELD = ".select2-search__field";
    static PO_LOCATOR = "//li[contains(text(), 'Purchase Order')]";
    static INVOICE_NUMBER_LOCATOR = "#invoiceNumber";
    static DATE_PLACE_HOLDER = "Select Invoice Date";
    static TODAY = "//span[@class='flatpickr-day today']";
    static PO_NUMBER_INPUT = "#select2-poId-container";
    static CURRENCY_CODE = "#currencyCode";
    static GST_LOCATOR = "#USDgstId";
    static DOM_TRIGGER = "document.getElementById('USDgstId').value";
    static SGD_SUB_TOTAL_INPUT = "#SGDsubtotalInput";
    static DOM_TRIGGER_SGD_INPUT = "el => { el.dispatchEvent(new Event('keyup', { bubbles: true })); }";
    static DOCUMENT_ID = "#doc1";
    static INVOICE_DOCUMENT_PATH = "C://Cormsquare//GePS-YEA//Downloads//Invoice Document.xlsx";
    static CREATE_BUTTON = "#btnCreate";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static get2400Id(){
        return "//li[contains(text(), '2400')]";
    }

    static get5K00Id(){
        return "//li[contains(text(), '5K00')]";
    }

    static get2U00Id(){
        return "//li[contains(text(), '2U00')]";
    }

    static get2W00Id(){
        return "//li[contains(text(), '2W00')]";
    }

    static getPoReferenceId(poReferenceId){
        return "//li[contains(text(), '" + poReferenceId + "')]";
    }
}

export default LInvCreate;