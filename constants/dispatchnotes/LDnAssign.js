class LDnAssign {

    static DN_NAVIGATION_BAR = "//*[contains(text(), 'Dispatch Notes')]";
    static LIST_CONTAINER = "#listContainer tr td";
    static DETAILS_BUTTON = ".btn-link";
    static DISPATCH_NOTES_REFERENCE_ID = "#dispatchNote";
    static DROP_DOWN = "#dnActionDropdown";
    static ASSIGN_BUTTON = "#btnToAssign";
    static SELECT_LOGISTICS_MANAGER_DROP_DOWN = "#select2-assignerId-container";
    static SEARCH_FIELD = ".select2-search__field";
    static SAVE_BUTTON = "#saveAssine";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }

    static getLogisticsManagerId(id){
        return "//li[contains(text(), '" + id + "')]";
    }
}

export default LDnAssign;