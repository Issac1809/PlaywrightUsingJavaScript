class LInsFail {

    static OS_NAVIGATION_BAR = "//*[contains(text(), 'Order Schedules')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static ASSIGN_INSPECTOR_BUTTON = "#btnAssignInspector";
    static SELECT_INSPECTOR_DROP_DOWN = "#select2-InspectionId-container";
    static SEARCH_FIELD = ".select2-search__field";
    static SAVE_INSPECTOR = "#saveInspector";
    static ACCEPT_BUTTON = ".bootbox-accept";
    static CREATE_INSPECTION_BUTTON = "#btnForCreateInspection";
    static PHYSICAL_INSPECTION_NOT_REQUIRED = "#physicalInspectionNotReq";
    static INSPECTION_FAIL_BUTTON = "#inspectFail";
    static REMARKS_INPUT = ".bootbox-input";
    static CREATE_BUTTON = "#btnCreateInspection";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }

    static getRequestorId(id){
        return "//li[contains(text(), '"+ id +"')]";
    }
}

export default LInsFail;