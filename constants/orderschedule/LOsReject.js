class LOsReject {

    static PO_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Orders')]";
    static VIEW_ORDER_SCHEDULE__BUTTON = "#BtnToApproveOS";
    static REJECT_BUTTON = "#btnReject";
    static REMARKS_INPUT = ".bootbox-input";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LOsReject;