class LReadyForEvaluation {

    static RFQ_NAVIGATION_BAR = "//*[contains(text(), 'Request For Quotations')]";
    static READY_FOR_EVALUATION_BUTTON = "#btnReadyForEvalution";
    static YES = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '" + title + "')]";
    }
}

export default LReadyForEvaluation;