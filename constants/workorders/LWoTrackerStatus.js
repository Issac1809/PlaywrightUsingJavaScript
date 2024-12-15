class LWoTrackerStatus {

    static WO_NAVIGATION_BAR = "//*[contains(text(), 'Work Orders')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static WO_REFERENCE_ID = "#referenceId";
    static STATUSES = ["Material_Pick_Up", "ETD", "Arrival_Notification", "Import_Clearance", "Out_for_Delivery", "Delivery_Completed"];
    static DATE_PICKER = ".form-control.form-control-sm.flatpickr-custom.form-control.input";
    static TODAY = "//span[@class='flatpickr-day today']";
    static STATUS_CONTAINER = "#select2-statusId-container";
    static SUBMIT_BUTTON = "#btnSubmit";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor() {
    }

    static getStatus(status) {
        return "//li[contains(text(), '" + status + "')]";
    }
}

export default LWoTrackerStatus;