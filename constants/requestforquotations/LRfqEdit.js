class LRfqEdit {

    static RFQ_NAVIGATION_BAR = "//*[contains(text(), 'Request For Quotations')]";
    static EDIT_BUTTON = "#btnEditRfq";
    static UPDATE_BUTTON = "#btnUpdate";
    static REMARKS_POP_UP = ".bootbox-input";
    static REMARKS = "Updated";
    static ACCEPT_REMARKS_POP_UP = ".bootbox-accept";

//TODO COnstructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LRfqEdit;