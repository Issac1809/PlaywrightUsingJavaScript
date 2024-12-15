class LOsApprove {

    static PO_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Orders')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static VIEW_ORDER_SCHEDULE__BUTTON = "#BtnToApproveOS";
    static APPROVE_BUTTON = "#btnApprove";
    static ACCEPT_BUTTON = ".bootbox-accept";

 //TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LOsApprove;