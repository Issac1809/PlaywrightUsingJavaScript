class LInsCreate {

    static OS_NAVIGATION_BAR = "//*[contains(text(), 'Order Schedules')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static CREATE_INSPECTION_BUTTON = "#btnForCreateInspection";
    static PHYSICAL_INSPECTION_NOT_REQUIRED = "#physicalInspectionNotReq";
    static CREATE_BUTTON = "#btnCreateInspection";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LInsCreate;