class LRfqCreate {

    static CREATE_RFQ_BUTTON = "#btnCreateRFQ";
    static NOTES = "#notes";
    static CREATE_BUTTON = "#btnCreate";
    static YES_BUTTON = "//button[contains(text(),'Yes')]";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '" + title + "')]";
    }
}

export default LRfqCreate;