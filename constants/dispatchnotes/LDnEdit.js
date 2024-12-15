class LDnEdit {

    static DN_NAVIGATION_BAR = "//*[contains(text(), 'Dispatch Notes')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static EDIT_BUTTON = "#btnEdit";
    static UPDATE_BUTTON = "#btnUpdate";
    static ACCEPT_BUTTON = ".bootbox-accept";


//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '"+ title +"')]";
    }
}

export default LDnEdit;