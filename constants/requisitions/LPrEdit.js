class LPrEdit {

    static EDIT_BUTTON = "#btnEdit";
    static UPDATE_BUTTON = "#btnUpdate";
    static YES = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '" + title + "')]";
    }
}

export default LPrEdit;