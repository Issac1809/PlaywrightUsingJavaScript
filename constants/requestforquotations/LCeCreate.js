class LCeCreate {

    static RFQ_NAVIGATION_BAR = "//*[contains(text(), 'Request For Quotations')]";
    static CREATE_BUTTON = "#btnCreateCE";
    static SELECTION_CRITERIA = "select[onchange='isSelect(event)']";
    static OPTION = "Yes";
    static SUBMIT_BUTTON = "#btnSubmitCE";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LCeCreate;