class LFfrQuote {

    static FFR_NAVIGATION_BAR = "//*[contains(text(), 'Freight Forwarder Requests')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static SEND_QUOTE_BUTTON = "#btnffrSendQuote";
    static TOTAL_CHARGEABLE_WEIGHT = "#totalChargableWeight";
    static UNIT_RATE = "#rate";
    static SUBMIT_BUTTON = "#submitQuotation";

//TODO Constructor
    constructor(){
    }
}

export default LFfrQuote;