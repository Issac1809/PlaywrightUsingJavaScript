import Config from '../utils/Config';
import LoginPage from '../pages/login/LoginPage';
import Create from '../pages/requisition/create/Create';
import PurchaseRequisitionTypeHandler from '../pages/requisition/type/PurchaseRequisitionTypeHandler';
import SendForApproval from '../pages/requisition/sendforapproval/SendForApproval';
import Approve from '../pages/requisition/approve/Approve';
import Assign from '../pages/requisition/assign/Assign';
import Edit from '../pages/requisition/edit/Edit';
import Reject from '../pages/requisition/reject/Reject';
import BuyerManagerSuspend from '../pages/requisition/suspend/BuyerManagerSuspend';
import BuyerSuspend from '../pages/requisition/suspend/BuyerSuspend';

class BaseMain{

//TODO Constructor
    constructor(page){
            this.page = page;
            this.config = new Config();

//TODO Login && Logout
            this.login = new LoginPage(this.config, this.page);
            this.logout = new Logout(this.page);

//TODO Requisition
            this.prCreate = new Create(this.login, this.config, this.page, this.logout);
            this.prType = new PurchaseRequisitionTypeHandler(this.prCreate);
            this.prSendForApproval = new SendForApproval(this.login, this.page, this.logout);
            this.prApprove = new Approve(this.login, this.page, this.logout);
            this.prAssign = new Assign(this.login, this.page, this.logout);
            this.prEdit = new Edit(this.login, this.page, this.logout, this.prSendForApproval, this.prApprove, this.prAssign);
            this.prReject = new Reject(this.login, this.page, this.logout, this.prEdit);
            this.prBuyerManagerSuspend = new BuyerManagerSuspend(this.login, this.page, this.logout, this.prEdit);
            this.prBuyerSuspend = new BuyerSuspend(this.login, this.page, this.logout, this.prEdit);

//TODO Request For Quotation
            this.iRfqCreate = new RfqCreate(this.login, this.page, this.logout);
            this.iRfqEdit = new RfqEdit(this.login, this.page, this.logout);
            this.iRfqSuspend = new RfqSuspend(this.login, this.page, this.logout, iRfqEdit, prEdit, prSendForApproval, prApprove, prAssign, iRfqCreate);
            this.iQuoSubmit = new Quote(this.login, this.page, this.logout);
            this.iQuoRegret = new QuotationRegret(iQuoSubmit, this.login, this.page, this.logout);
            this.iQuoRequote = new Requote(this.login, this.page, this.logout);
            this.iReadyForEvalutation = new ReadyForEvaluation(this.login, this.page, this.logout);
            this.iTeReject = new TechnicalEvaluationReject(this.login, this.page, this.logout);
            this.iTeCreate = new TechnicalEvaluation(this.login, this.page, this.logout);
            this.iCeCreate = new CommercialEvaluation(this.login, this.page, this.logout);

//TODO Purchase Order Request
            this.iPorCreate = new PorCreate(this.login, this.page, this.logout);
            this.iPorEdit = new PorEdit(this.login, this.page, this.logout);
            this.iPorSuspend = new PorSuspend(this.login, this.page, this.logout, iPorEdit, iCeCreate, iPorCreate);
            this.iPorSendForApproval = new PorSendForApproval(this.login, this.page, this.logout);
            this.iPorApprove = new PorApprove(this.login, this.page, this.logout);
            this.iPorReject = new PorReject(this.login, this.page, this.logout, iPorEdit, iPorSendForApproval);
            this.iPorSendForApprovalAndApprove = new PorSendForApprovalAndApprove(iPorApprove, iPorSendForApproval);

//TODO Purchase Orders
            this.iPoCreate = new PoCreate(this.login, this.page, this.logout);
            this.iPoSendForVendor = new SendForVendor(this.login, this.page, this.logout);

//TODO Order Schedule
            this.iOsCreate = new OsCreate(this.login, this.page, this.logout);
            this.iOsEdit = new OsEdit(this.login, this.page, this.logout);
            this.iOsReject = new OsReject(this.login, this.page, this.logout);
            this.iOsApprove = new OsApprove(this.login, this.page, this.logout);

//TODO Inspection
            this.iInsReadyForInspection = new InsReadyForInspection(this.login, this.page, this.logout);
            this.iInsCreate = new InsCreate(this.login, this.page, this.logout);
            this.iInsAssign = new InsAssign(this.login, this.page, this.logout);
            this.iInsFail = new InsFail(this.login, this.page, this.logout, iInsReadyForInspection);

//TODO Dispatch Notes
            this.iDnCreate = new DnCreate(this.login, this.page, this.logout);
            this.iDnEdit = new DnEdit(this.login, this.page, this.logout);
            this.iDnReturn = new DnReturn(this.login, this.page, this.logout, iDnEdit);
            this.iDnCancel = new DnCancel(this.login, this.page, this.logout, iDnCreate);
            this.iDnAssign = new DnAssign(this.login, this.page, this.logout);

//TODO Freight Forwarder Requests
            this.iFfrInvite = new FfrInvite(this.login, this.page, this.logout);
            this.iFfrQuote = new FfrQuote(this.login, this.page, this.logout);
            this.iFfrRequote = new FfrRequote(this.login, iFfrQuote, this.logout, this.page);

//TODO Work Orders
            this.iWoCreate = new WoCreate(this.login, this.page, this.logout);
            this.iWoTrackerStatus = new WoTrackerStatus(this.login, this.page, this.logout);

//TODO POInvoice
            this.iInvCreate = new InvCreate(this.login, this.page, this.logout, iCurrencyExchangeRate);
            this.iInvCancel = new InvCancel(this.login, this.page, this.logout, iInvCreate);
            this.iInvHold = new InvHold(this.login, this.page, this.logout);
            this.iInvRevert = new InvRevert(this.login, this.page, this.logout);
            this.iInvChecklistAccept = new InvChecklistAccept(this.login, this.page, this.logout);
            this.iInvChecklistReject = new InvChecklistReject(this.login, this.page, this.logout);
            this.iInvSendForApproval = new InvSendForApproval(this.login, this.page, this.logout);
            this.iInvReturn = new InvReturn(this.login, this.page, this.logout, iInvSendForApproval);
            this.iInvVerify = new InvVerify(this.login, this.page, this.logout);
            this.iInvEdit = new InvEdit(this.login, this.page, this.logout);
            this.iInvReject = new InvReject(this.login, this.page, this.logout, iInvSendForApproval);
            this.iInvApproval = new InvApproval(this.login, this.page, this.logout);

//TODO WOInvoice
            this.iWoInvCreate = new WoInvCreate(this.login, this.page, this.logout, iCurrencyExchangeRate);
            this.iWoInvCancel = new WoInvCancel(this.login, this.page, this.logout, iWoInvCreate);
            this.iWoInvHold = new WoInvHold(this.login, this.page, this.logout);
            this.iWoInvRevert = new WoInvRevert(this.login, this.page, this.logout);
            this.iWoInvChecklistAccept = new WoInvChecklistAccept(this.login, this.page, this.logout);
            this.iWoInvChecklistReject = new WoInvChecklistReject(this.login, this.page, this.logout);
            this.iWoInvSendForApproval = new WoInvSendForApproval(this.login, this.page, this.logout);
            this.iWoInvReturn = new WoInvReturn(this.login, this.page, this.logout, iWoInvSendForApproval);
            this.iWoInvVerify = new WoInvVerify(this.login, this.page, this.logout);
            this.iWoInvEdit = new WoInvEdit(this.login, this.page, this.logout);
            this.iWoInvReject = new WoInvReject(this.login, this.page, this.logout, iWoInvSendForApproval);
            this.iWoInvApproval = new WoInvApproval(this.login, this.page, this.logout);

//TODO Others
            this.iCurrencyExchangeRate = new CurrencyExchangeRate(this.login, this.logout);
        } catch (error) {
            console.error("Error during object creation: " + error);
        }
    }

export default BaseMain;