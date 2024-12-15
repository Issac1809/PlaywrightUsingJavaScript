class LFfrInvite {

    static DN_NAVIGATION_BAR = "//*[contains(text(), 'Dispatch Notes')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static INVITE_VENDOR_BUTTON = "#addFrightForwordVendors";
    static DROP_DOWN = "#select2-ffvendorId-container";
    static SEARCH_FIELD = ".select2-search__field";
    static SAVE_BUTTON = "#saveFrightForworderVendor";
    static EMAIL_POP_UP = "#vendorSendMailBtnId";

//TODO Constructor
    constructor(){
    }

    static getFreightForwarder(id){
        return "//li[contains(text(), '"+ id +"')]";
    }
}

export default LFfrInvite;