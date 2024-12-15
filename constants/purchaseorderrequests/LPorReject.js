class LPorReject {

    static POR_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Order Requests')]";
    static REJECT_BUTTON = "#btnReject";
    static REMARKS_INPUT = ".bootbox-input";
    static YES = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LPorReject;