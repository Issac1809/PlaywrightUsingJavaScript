class LPorSuspend {

    static POR_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Order Requests')]";
    static SUSPEND_BUTTON = "#btnToSuspendPOR";
    static YES = ".bootbox-accept";
    static REMARKS_INPUT_LOCATOR = ".bootbox-input";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LPorSuspend;