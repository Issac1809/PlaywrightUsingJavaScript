class LPoCreate {

    static POR_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Order Requests')]";
    static CREATE_PO_BUTTON = "#createPOContainer";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LPoCreate;