class LPorEdit {

    static POR_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Order Requests')]";
    static EDIT_BUTTON = "#btnEdit";
    static UPDATE_BUTTON = "#btnUpdate";
    static REMARKS_INPUT = ".bootbox-input";
    static YES = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LPorEdit;