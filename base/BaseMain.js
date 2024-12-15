class BaseMain{

//TODO Constructor
    constructor(){
    }

    async initializeObjects() {
        try {
            page = playwrightFactory.initializePage();

//TODO Login && Logout
            iLogin = new Login(properties, page);
            iLogout = new Logout(page);

//TODO Requisition
            iPrCreate = new Create(iLogin, properties, page, iLogout);
            iPrType = new PurchaseRequisitionTypeHandler(iPrCreate, properties);
            iPrSendForApproval = new SendForApproval(iLogin, properties, page, iLogout);
            iPrApprove = new Approve(iLogin, properties, page, iLogout);
            iPrAssign = new Assign(iLogin, properties, page, iLogout);
            iPrEdit = new Edit(iLogin, properties, page, iLogout, iPrSendForApproval, iPrApprove, iPrAssign);
            iPrReject = new Reject(iLogin, properties, page, iLogout, iPrEdit);
            iPrBuyerManagerSuspend = new BuyerManagerSuspend(iLogin, properties, page, iLogout, iPrEdit);
            iPrBuyerSuspend = new BuyerSuspend(iLogin, properties, page, iLogout, iPrEdit);

//TODO Request For Quotation
            iRfqCreate = new RfqCreate(iLogin, properties, page, iLogout);
            iRfqEdit = new RfqEdit(iLogin, properties, page, iLogout);
            iRfqSuspend = new RfqSuspend(iLogin, properties, page, iLogout, iRfqEdit, iPrEdit, iPrSendForApproval, iPrApprove, iPrAssign, iRfqCreate);
            iQuoSubmit = new Quote(iLogin, properties, page, iLogout);
            iQuoRegret = new QuotationRegret(iQuoSubmit, iLogin, properties, page, iLogout);
            iQuoRequote = new Requote(iLogin, properties, page, iLogout);
            iReadyForEvalutation = new ReadyForEvaluation(iLogin, properties, page, iLogout);
            iTeReject = new TechnicalEvaluationReject(iLogin, properties, page, iLogout);
            iTeCreate = new TechnicalEvaluation(iLogin, properties, page, iLogout);
            iCeCreate = new CommercialEvaluation(iLogin, properties, page, iLogout);

//TODO Purchase Order Request
            iPorCreate = new PorCreate(iLogin, properties, page, iLogout);
            iPorEdit = new PorEdit(iLogin, properties, page, iLogout);
            iPorSuspend = new PorSuspend(iLogin, properties, page, iLogout, iPorEdit, iCeCreate, iPorCreate);
            iPorSendForApproval = new PorSendForApproval(iLogin, properties, page, iLogout);
            iPorApprove = new PorApprove(iLogin, properties, page, iLogout);
            iPorReject = new PorReject(iLogin, properties, page, iLogout, iPorEdit, iPorSendForApproval);
            iPorSendForApprovalAndApprove = new PorSendForApprovalAndApprove(iPorApprove, iPorSendForApproval);

//TODO Purchase Orders
            iPoCreate = new PoCreate(iLogin, properties, page, iLogout);
            iPoSendForVendor = new SendForVendor(iLogin, properties, page, iLogout);

//TODO Order Schedule
            iOsCreate = new OsCreate(iLogin, properties, page, iLogout, playwrightFactory);
            iOsEdit = new OsEdit(iLogin, properties, page, iLogout);
            iOsReject = new OsReject(iLogin, properties, page, iLogout);
            iOsApprove = new OsApprove(iLogin, properties, page, iLogout);

//TODO Inspection
            iInsReadyForInspection = new InsReadyForInspection(iLogin, properties, page, iLogout);
            iInsCreate = new InsCreate(iLogin, properties, page, iLogout);
            iInsAssign = new InsAssign(iLogin, properties, page, iLogout);
            iInsFail = new InsFail(iLogin, properties, page, iLogout, iInsReadyForInspection);

//TODO Dispatch Notes
            iDnCreate = new DnCreate(iLogin, properties, page, iLogout);
            iDnEdit = new DnEdit(iLogin, properties, page, iLogout);
            iDnReturn = new DnReturn(iLogin, properties, page, iLogout, iDnEdit);
            iDnCancel = new DnCancel(iLogin, properties, page, iLogout, iDnCreate);
            iDnAssign = new DnAssign(iLogin, properties, page, iLogout, playwrightFactory);

//TODO Freight Forwarder Requests
            iFfrInvite = new FfrInvite(iLogin, properties, page, iLogout);
            iFfrQuote = new FfrQuote(iLogin, properties, page, iLogout);
            iFfrRequote = new FfrRequote(iLogin, properties, iFfrQuote, iLogout, page);

//TODO Work Orders
            iWoCreate = new WoCreate(iLogin, properties, page, iLogout);
            iWoTrackerStatus = new WoTrackerStatus(iLogin, properties, page, iLogout, playwrightFactory);

//TODO POInvoice
            iInvCreate = new InvCreate(playwrightFactory, iLogin, properties, page, iLogout, iCurrencyExchangeRate);
            iInvCancel = new InvCancel(iLogin, properties, page, iLogout, iInvCreate);
            iInvHold = new InvHold(iLogin, properties, page, iLogout);
            iInvRevert = new InvRevert(iLogin, properties, page, iLogout);
            iInvChecklistAccept = new InvChecklistAccept(iLogin, properties, page, iLogout);
            iInvChecklistReject = new InvChecklistReject(iLogin, properties, page, iLogout);
            iInvSendForApproval = new InvSendForApproval(iLogin, properties, page, iLogout);
            iInvReturn = new InvReturn(iLogin, properties, page, iLogout, iInvSendForApproval);
            iInvVerify = new InvVerify(iLogin, properties, page, iLogout);
            iInvEdit = new InvEdit(iLogin, properties, page, iLogout);
            iInvReject = new InvReject(iLogin, properties, page, iLogout, iInvSendForApproval);
            iInvApproval = new InvApproval(iLogin, properties, page, iLogout);

//TODO WOInvoice
            iWoInvCreate = new WoInvCreate(playwrightFactory, iLogin, properties, page, iLogout, iCurrencyExchangeRate);
            iWoInvCancel = new WoInvCancel(iLogin, properties, page, iLogout, iWoInvCreate);
            iWoInvHold = new WoInvHold(iLogin, properties, page, iLogout);
            iWoInvRevert = new WoInvRevert(iLogin, properties, page, iLogout);
            iWoInvChecklistAccept = new WoInvChecklistAccept(iLogin, properties, page, iLogout);
            iWoInvChecklistReject = new WoInvChecklistReject(iLogin, properties, page, iLogout);
            iWoInvSendForApproval = new WoInvSendForApproval(iLogin, properties, page, iLogout);
            iWoInvReturn = new WoInvReturn(iLogin, properties, page, iLogout, iWoInvSendForApproval);
            iWoInvVerify = new WoInvVerify(iLogin, properties, page, iLogout);
            iWoInvEdit = new WoInvEdit(iLogin, properties, page, iLogout);
            iWoInvReject = new WoInvReject(iLogin, properties, page, iLogout, iWoInvSendForApproval);
            iWoInvApproval = new WoInvApproval(iLogin, properties, page, iLogout);

//TODO Others
            iCurrencyExchangeRate = new CurrencyExchangeRate(playwrightFactory, iLogin, properties, iLogout);
        } catch (error) {
            console.error("Error during object creation: ", error);
        }
        
    }
}

export default BaseMain;