class LPrSendForApproval {

    static SEND_FOR_APPROVAL_BUTTON = "#btnSendApproval";
    static YES = "//button[contains(text(), 'Yes')]";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '" + title + "')]";
    }
}

export default LPrSendForApproval;