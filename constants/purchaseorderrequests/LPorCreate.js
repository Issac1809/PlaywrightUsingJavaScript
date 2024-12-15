class LPorCreate {

    static RFQ_NAVIGATION_BAR = "//*[contains(text(), 'Request For Quotations')]";
    static POR_CREATE_BUTTON = "//a[contains(text(),' Create POR ')]";
    static BELOW_5L = "#below5L";
    static TAX_CODE = "-- Select Tax Codes --";
    static POR_NOTES = "#notes";
    static CREATE_BUTTON = "#btnCreate";
    static YES = "//button[contains(text(),'Yes')]";

//TODO Constructor
    constructor(){
    }

    static getTitle( title){
        return "//span[contains(text(), '"+ title +"')]";
    }

    static getTaxCode(taxCode){
        return "//li[contains(text(), '"+ taxCode +"')]";
    }
}

export default LPorCreate;