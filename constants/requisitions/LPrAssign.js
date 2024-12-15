class LPrAssign {

    static ASSIGN_USER = "#btnAssignUser";
    static SEARCHBOX = ".select2-search__field";
    static SELECT_ASSIGN_USER = "#select2-bgUser-container";
    static SAVE_USER = "#saveBuyerUser";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '"+ title +"')]";
    }

    static getBuyerMailId(mailId){
        return "//li[contains(text(), '"+ mailId +"')]";
    }
}

export default LPrAssign;