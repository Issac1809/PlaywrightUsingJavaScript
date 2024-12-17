class BaseMain{

//TODO Constructor
    constructor(page){

//TODO Login && Logout
            this.iLogin = new Login(properties, page);
            this.iLogout = new Logout(page);

//TODO Requisition
            this.iPrCreate = new Create(iLogin, properties, page, iLogout);
            this.iPrType = new PurchaseRequisitionTypeHandler(iPrCreate, properties);
            this.iPrSendForApproval = new SendForApproval(iLogin, properties, page, iLogout);
            this.iPrApprove = new Approve(iLogin, properties, page, iLogout);
            this.iPrAssign = new Assign(iLogin, properties, page, iLogout);
            this.iPrEdit = new Edit(iLogin, properties, page, iLogout, iPrSendForApproval, iPrApprove, iPrAssign);
            this.iPrReject = new Reject(iLogin, properties, page, iLogout, iPrEdit);
            this.iPrBuyerManagerSuspend = new BuyerManagerSuspend(iLogin, properties, page, iLogout, iPrEdit);
            this.iPrBuyerSuspend = new BuyerSuspend(iLogin, properties, page, iLogout, iPrEdit);

//TODO Request For Quotation
            this.iRfqCreate = new RfqCreate(iLogin, properties, page, iLogout);
            this.iRfqEdit = new RfqEdit(iLogin, properties, page, iLogout);
            this.iRfqSuspend = new RfqSuspend(iLogin, properties, page, iLogout, iRfqEdit, iPrEdit, iPrSendForApproval, iPrApprove, iPrAssign, iRfqCreate);
            this.iQuoSubmit = new Quote(iLogin, properties, page, iLogout);
            this.iQuoRegret = new QuotationRegret(iQuoSubmit, iLogin, properties, page, iLogout);
            this.iQuoRequote = new Requote(iLogin, properties, page, iLogout);
            this.iReadyForEvalutation = new ReadyForEvaluation(iLogin, properties, page, iLogout);
            this.iTeReject = new TechnicalEvaluationReject(iLogin, properties, page, iLogout);
            this.iTeCreate = new TechnicalEvaluation(iLogin, properties, page, iLogout);
            this.iCeCreate = new CommercialEvaluation(iLogin, properties, page, iLogout);

//TODO Purchase Order Request
            this.iPorCreate = new PorCreate(iLogin, properties, page, iLogout);
            this.iPorEdit = new PorEdit(iLogin, properties, page, iLogout);
            this.iPorSuspend = new PorSuspend(iLogin, properties, page, iLogout, iPorEdit, iCeCreate, iPorCreate);
            this.iPorSendForApproval = new PorSendForApproval(iLogin, properties, page, iLogout);
            this.iPorApprove = new PorApprove(iLogin, properties, page, iLogout);
            this.iPorReject = new PorReject(iLogin, properties, page, iLogout, iPorEdit, iPorSendForApproval);
            this.iPorSendForApprovalAndApprove = new PorSendForApprovalAndApprove(iPorApprove, iPorSendForApproval);

//TODO Purchase Orders
            this.iPoCreate = new PoCreate(iLogin, properties, page, iLogout);
            this.iPoSendForVendor = new SendForVendor(iLogin, properties, page, iLogout);

//TODO Order Schedule
            this.iOsCreate = new OsCreate(iLogin, properties, page, iLogout);
            this.iOsEdit = new OsEdit(iLogin, properties, page, iLogout);
            this.iOsReject = new OsReject(iLogin, properties, page, iLogout);
            this.iOsApprove = new OsApprove(iLogin, properties, page, iLogout);

//TODO Inspection
            this.iInsReadyForInspection = new InsReadyForInspection(iLogin, properties, page, iLogout);
            this.iInsCreate = new InsCreate(iLogin, properties, page, iLogout);
            this.iInsAssign = new InsAssign(iLogin, properties, page, iLogout);
            this.iInsFail = new InsFail(iLogin, properties, page, iLogout, iInsReadyForInspection);

//TODO Dispatch Notes
            this.iDnCreate = new DnCreate(iLogin, properties, page, iLogout);
            this.iDnEdit = new DnEdit(iLogin, properties, page, iLogout);
            this.iDnReturn = new DnReturn(iLogin, properties, page, iLogout, iDnEdit);
            this.iDnCancel = new DnCancel(iLogin, properties, page, iLogout, iDnCreate);
            this.iDnAssign = new DnAssign(iLogin, properties, page, iLogout);

//TODO Freight Forwarder Requests
            this.iFfrInvite = new FfrInvite(iLogin, properties, page, iLogout);
            this.iFfrQuote = new FfrQuote(iLogin, properties, page, iLogout);
            this.iFfrRequote = new FfrRequote(iLogin, properties, iFfrQuote, iLogout, page);

//TODO Work Orders
            this.iWoCreate = new WoCreate(iLogin, properties, page, iLogout);
            this.iWoTrackerStatus = new WoTrackerStatus(iLogin, properties, page, iLogout);

//TODO POInvoice
            this.iInvCreate = new InvCreate(iLogin, properties, page, iLogout, iCurrencyExchangeRate);
            this.iInvCancel = new InvCancel(iLogin, properties, page, iLogout, iInvCreate);
            this.iInvHold = new InvHold(iLogin, properties, page, iLogout);
            this.iInvRevert = new InvRevert(iLogin, properties, page, iLogout);
            this.iInvChecklistAccept = new InvChecklistAccept(iLogin, properties, page, iLogout);
            this.iInvChecklistReject = new InvChecklistReject(iLogin, properties, page, iLogout);
            this.iInvSendForApproval = new InvSendForApproval(iLogin, properties, page, iLogout);
            this.iInvReturn = new InvReturn(iLogin, properties, page, iLogout, iInvSendForApproval);
            this.iInvVerify = new InvVerify(iLogin, properties, page, iLogout);
            this.iInvEdit = new InvEdit(iLogin, properties, page, iLogout);
            this.iInvReject = new InvReject(iLogin, properties, page, iLogout, iInvSendForApproval);
            this.iInvApproval = new InvApproval(iLogin, properties, page, iLogout);

//TODO WOInvoice
            this.iWoInvCreate = new WoInvCreate(iLogin, properties, page, iLogout, iCurrencyExchangeRate);
            this.iWoInvCancel = new WoInvCancel(iLogin, properties, page, iLogout, iWoInvCreate);
            this.iWoInvHold = new WoInvHold(iLogin, properties, page, iLogout);
            this.iWoInvRevert = new WoInvRevert(iLogin, properties, page, iLogout);
            this.iWoInvChecklistAccept = new WoInvChecklistAccept(iLogin, properties, page, iLogout);
            this.iWoInvChecklistReject = new WoInvChecklistReject(iLogin, properties, page, iLogout);
            this.iWoInvSendForApproval = new WoInvSendForApproval(iLogin, properties, page, iLogout);
            this.iWoInvReturn = new WoInvReturn(iLogin, properties, page, iLogout, iWoInvSendForApproval);
            this.iWoInvVerify = new WoInvVerify(iLogin, properties, page, iLogout);
            this.iWoInvEdit = new WoInvEdit(iLogin, properties, page, iLogout);
            this.iWoInvReject = new WoInvReject(iLogin, properties, page, iLogout, iWoInvSendForApproval);
            this.iWoInvApproval = new WoInvApproval(iLogin, properties, page, iLogout);

//TODO Others
            this.iCurrencyExchangeRate = new CurrencyExchangeRate(iLogin, properties, iLogout);
        } catch (error) {
            console.error("Error during object creation: " + error);
        }
    }

export default BaseMain;