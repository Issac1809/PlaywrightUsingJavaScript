class LDnCreate {

    static PO_NAVIGATION_BAR = "//*[contains(text(), 'Purchase Orders')]";
    static DN_CREATE_BUTTON = "#btnCreateDispatchNote";
    static SOURCE_COUNTRY_CODE = "#select2-sourceCountryId-container";
    static SEARCH_FIELD = ".select2-search__field";
    static DESTINATION_COUNTRY_CODE = "#select2-destinationCountryId-container";
    static ADD_DISPATCH_NOTE_PACKAGES_BUTTON = "#addDispatchNotePackages";
    static PACKAGE_TYPE = "#select2-packagetypeId-container";
    static GROSS_WEIGHT = "#grossWeight";
    static NET_WEIGHT = "#netWeight";
    static VOLUME = "#volume";
    static QUANTITY = "#quantity";
    static SAVE_DISPATCH_NOTE_PACKAGES_BUTTON = "#saveDispatchNotePackages";
    static CREATE_BUTTON = "#btnCreate";
    static ACCEPT_BUTTON = ".bootbox-accept";


//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//*[contains(text(), '"+ title +"')]";
    }

    static getSourceCountry(sourceCountry){
        return "//li[contains(text(), '"+ sourceCountry +"')]";
    }

    static getDestinationCountry(destinationCountry){
        return "//li[contains(text(), '"+ destinationCountry +"')]";
    }

    static getPackageType(packageType){
        return "//li[contains(text(), '"+ packageType +"')]";
    }
}
