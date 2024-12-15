class LPrApprove {

    static APPROVE = "#btnApprove";
    static YES = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getApproveButton(title){
        return "//*[contains(text(), '" + title + "')]";
    }
}

export default LPrApprove;