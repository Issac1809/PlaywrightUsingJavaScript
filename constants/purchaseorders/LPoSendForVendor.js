class LPoSendForVendor {

    static PO_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Orders')]";
    static SEND_FOR_VENDOR_BUTTON = "#btnSendPO";
    static EMAIL_POP_UP = "#vendorSendMailBtnId";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LPoSendForVendor;