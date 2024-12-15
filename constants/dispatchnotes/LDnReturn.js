class LDnReturn {

    static DN_NAVIGATION_BAR = "//*[contains(text(), 'Dispatch Notes')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static DROP_DOWN = "#dropdownMenuButton";
    static RETURN_BUTTON = "#btnToReturn";
    static REMARKS_FIELD = ".bootbox-input";
    static ACCEPT_BUTTON = ".bootbox-accept";


//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '"+ title +"')]";
    }
}

export default LDnReturn;