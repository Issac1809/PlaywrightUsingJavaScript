class LOsCreate {

    static PO_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Orders')]";
    static PO_REFERENCE_ID = "#referenceId";
    static CREATE_OS_BUTTON = "#btnCreateOR";
    static TODAY = "//span[@class='flatpickr-day today']";
    static SCHEDULE_DATE = ".scheduleDate-1";
    static CREATE_BUTTON = "#btnCreate";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LOsCreate;