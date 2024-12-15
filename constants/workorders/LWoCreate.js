class LWoCreate {

    static DN_NAVIGATION_BAR = "//*[contains(text(), 'Dispatch Notes')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static ACTION_DROPDOWN = "#dnActionDropdown";
    static CREATE_WORK_ORDER_BUTTON = "#btnToCreateWorkOrder";
    static FREIGHT_FORWARDER_DROPDOWN = "#select2-freightForwarderId-container";
    static SEARCH_FIELD = ".select2-search__field";
    static PRIORITY_DROPDOWN = "#select2-priority-container";
    static DATE_LOCATOR = "Select Date";
    static TODAY = "//span[@class='flatpickr-day today']";
    static DESTINATION_FIELD = "#destinationTermLocationId";
    static PROCEED_BUTTON = "//*[contains(text(), 'Proceed')]";
    static SEND_MAIL_BUTTON = "#vendorSendMailBtnId";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor() {
    }

    static getVendor(id) {
        return "//li[contains(text(), '" + id + "')]";
    }

    static getPriority(priority) {
        return "//li[contains(text(), '" + priority + "')]";
    }
}

export default LWoCreate;