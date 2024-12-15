class LTeReject {

    static RFQ_NAVIGATION_BAR = "//*[contains(text(), 'Request For Quotations')]";
    static TE_CREATE_BUTTON = "#btnCreateTE";
    static VENDOR_SELECT_CHECKBOX = ".border-primary";
    static CREATE_TECHNICAL_EVALUATION_BUTTON = "#btnCreate";
    static SEND_FOR_APPROVAL = "#btnSendApproval";
    static APPROVER_SELECT = ".select2-selection--single";
    static SEARCH_FIELD = ".select2-search__field";
    static SAVE_APPROVER = "#saveApproverAssign";
    static REJECT_BUTTON = "#btnReject";
    static YES = ".bootbox-accept";
    static REMARKS_INPUT_LOCATOR = ".bootbox-input";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '" + title + "')]";
    }

    static getTeApprover(approver){
        return "//li[contains(text(), '"+ approver +"')]";
    }
}

export default LTeReject;