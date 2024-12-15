class LQuoSubmit {

    static RFQ_NAVIGATION_BAR = "//*[contains(text(), 'Request For Quotations')]";
    static INVITE_VENDORS = "#addRequestForQuotationVendors";
    static VENDOR_SEARCH_FIELD = "#select2-vendorId-container";
    static VENDOR_SEARCH = ".select2-search__field";
    static INVITE_BUTTON = "#saveRequestForQuotationVendor";
    static VENDOR_EMAIL_POP_UP = "#vendorSendMailBtnId";
    static SEND_QUOTE_BUTTON = "#btnSendQuote";
    static INCOTERM_LOCATION = "#incotermLocation";
    static QUOTATION_REFERENCE_NUMBER = "#quotationReferenceNumber";
    static VALIDITY_DATE = "#dates";
    static TODAY = "//span[@class='flatpickr-day today']";
    static FIRST_DAY_OF_NEXT_MONTH = ".flatpickr-day.nextMonthDay";
    static LIQUIDATED_DAMAGES = "#liquidatedComplyId";
    static ROHS_COMPLIANCE = "#rohsComplyId";
    static WARRANTY_REQUIREMENTS = "#warrantyRequirementsComplyId";
    static RFQ_ITEM_LIST = "#rfqVendorItems-container tr td label[id^='lineNumber-']";
    static HS_CODE = "#hsCode-";
    static MAKE = "#make-";
    static MODEL = "#model-";
    static PART_NUMBER = "#partNumber-";
    static COUNTRY_OF_ORIGIN = "#countryOfOrigin-";
    static RATE = "#rate-";
    static DISCOUNT = "#discount-";
    static LEAD_TIME = "#leadTime-";
    static QUOTATION_NOTES = "#notes-";
    static GST = "#gstId";
    static ATTACH_FILE = "#attachFile";
    static FILE_INPUT = "#formFilePreupload";
    static ATTACHMENT_TYPE_DROPDOWN = "#select2-attachmentTypeId-container";
    static SAVE_ATTACHMENTS = "#attachmentSaveId";
    static CREATE_BUTTON = "#btnCreate";
    static ACCEPT_BUTTON_LOCATOR = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }

    static getVendor(vendor){
        return "//li[contains(text(), '"+ vendor +"')]";
    }

    static getThirtyOne(num){
        return "//span[contains(text(), '" + num + "')]";
    }

    static getNextDay(num){
        return "//span[contains(text(), '" + num + "')]";
    }

    static getAttatmentType(type){
        return "//li[contains(text(), '" + type + "')]";
    }
}

export default LQuoSubmit;