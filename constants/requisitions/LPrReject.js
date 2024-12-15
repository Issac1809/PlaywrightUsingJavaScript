class LPrReject {

    static REJECT_BUTTON = "#btnReject";
    static REMARKS = ".bootbox-input";
    static YES = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '" + title + "')]";
    }
}

export default LPrReject;