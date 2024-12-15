class LPrBuyerManagerSuspend {

    static SUSPEND_BUTTON = "#btnSuspend";
    static REMARKS = ".bootbox-input";
    static YES = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '" + title + "')]";
    }
}

export default LPrBuyerManagerSuspend;