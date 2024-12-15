class LRfqSuspend {

    static RFQ_NAVIGATION_BAR = "//*[contains(text(), 'Request For Quotations')]";
    static SUSPEND_BUTTON = "#btnToSuspendRfq";
    static REMARKS_INPUT = ".bootbox-input";
    static YES = ".bootbox-accept";


//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '" + title + "')]";
    }
}

export default LRfqSuspend;