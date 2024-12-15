class LOsEdit {

    static OS_NAVIGATION_BAR = "//*[contains(text(), 'Order Schedules')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static EDIT_BUTTON = "#btnEdit";
    static UPDATE_BUTTON = "#btnUpdate";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LOsEdit;