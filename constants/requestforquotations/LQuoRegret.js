class LQuoRegret {

    static REGRET_BUTTON = "#btnRegret";
    static REMARKS_POP_UP = ".bootbox-input";
    static REMARKS = "Regret";
    static ACCEPT_REMARKS_POP_UP = ".bootbox-accept";

//TODO Constructor    
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }
}

export default LQuoRegret;