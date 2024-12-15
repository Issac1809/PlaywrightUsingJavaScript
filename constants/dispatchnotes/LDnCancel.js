class LDnCancel {

    static DN_NAVIGATION_BAR = "//*[contains(text(), 'Dispatch Notes')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static DROP_DOWN = "#dropdownMenuButton";
    static CANCEL_BUTTON = "#btnToCancel";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LDnCancel;