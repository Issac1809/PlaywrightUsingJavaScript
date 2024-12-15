class LPorApprove {

    static MY_APPROVALS = "//span[contains(text(), 'My Approvals')]";
    static ADD_APPROVERS = "#btnAddApprovers";
    static PROJECT_MANAGER_POP_UP = "//h3[contains(text(), 'Purchase Order Request Send For Approval')]";
    static PROJECT_MANAGER_DROP_DOWN = "#select2-PMBId-container";
    static SEARCH_FIELD = "select2-search__field";
    static DEPARTMENT_MANAGER_DROP_DOWN = "#select2-departmentManagerId-container";
    static DIVISION_MANAGER = "#select2-divisionManagerId-container";
    static SAVE_APPROVAL_USERS = "#btnSendUserFromPM";
    static APPROVE_BUTTON = "#btnApprove";
    static ACCEPT_BUTTON = ".bootbox-accept";

//TODO Constructor
    constructor(){
    }

    static getTitle(title){
        return "//span[contains(text(), '"+ title +"')]";
    }

    static getGroupB(groupB){
        return "//li[contains(text(), '"+ groupB +"')]";
    }

    static getGroupC(groupC){
        return "//li[contains(text(), '"+ groupC +"')]";
    }

    static getGroupD(groupD){
        return "//li[contains(text(), '"+ groupD +"')]";
    }
}

export default LPorApprove;