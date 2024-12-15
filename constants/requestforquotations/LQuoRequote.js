class LQuoRequote {

    static RFQ_NAVIGATION_BAR_BUTTON = "//*[contains(text(), 'Request For Quotations')]";
    static REQUOTE_BUTTON = "//a[contains(text(), ' Requote')]";
    static REMARKS = "Regret";
    static ACCEPT_REMARKS_POP_UP = ".bootbox-accept";
    static EMAIL_POP_UP = "#vendorSendMailBtnId";
    static REQUOTE_EDIT_BUTTON = "#btnEditQuote";
    static UPDATE_BUTTON = "#btnUpdate";

//TODO Constructor    
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LQuoRequote;