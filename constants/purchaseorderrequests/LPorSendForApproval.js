class LPorSendForApproval {

    static POR_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Order Requests')]";
    static SEND_FOR_APPROVAL__BUTTON = "#btnNewSendApproval";
    static APPROVAL_POP_UP = "//h3[contains(text(), 'Purchase Order Request Send For Approval')]";
    static CFO_DROPDOWN_LOCATOR = "#role-7";
    static PRESIDENT_DROPDOWN_LOCATOR = "#select2-role-8-container";
    static SUBMIT_BUTTON = "btnSendUserFromPM";
    static APPROVERS_LIST = "#approvalData tbody tr td";
    static YES = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }

    static getCfoId(id){
        return "//span[contains(text(), '"+ id +"')]";
    }

    static getPresidentId(id){
        return "//li[contains(text(), '" + id + "')]";
    }
}

export default LPorSendForApproval;