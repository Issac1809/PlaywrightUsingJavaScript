import {test as baseTest} from '@playwright/test';
import LoginPage from "../../pages/login/LoginPage";
import Config from '../../utils/Config';
import Logout from '../../pages/logout/Logout';
import Create from '../../pages/requisition/create/Create';
import PurchaseRequisitionTypeHandler from '../../pages/requisition/type/PurchaseRequisitionTypeHandler';

export const test = baseTest.extend({

    config : async({page}, use) => {
        const config = new Config();
        await use(config);
    },

    loginPage : async({page, config}, use) =>{
        const loginPage = new LoginPage(page, config);
        await use(loginPage);
    },

    logoutPage : async({page, config}, use) => {
        const logoutPage = new Logout(page, config);
        await use(logoutPage);
    },

/* Requisitions */
    prTypeHandler : async({loginPage, config, page, logoutPage}, use) => {
        const prCreate = new Create(loginPage, config, page, logoutPage);
        const prTypeHandler = new PurchaseRequisitionTypeHandler(prCreate);
        await use(prTypeHandler);
    },

    // prSendForApproval : async({loginPage, page, logoutPage, config}, use) => {
    //     const prSendForApproval = new SendForApproval(loginPage, page, logoutPage, config);
    //     await use(prSendForApproval);
    // },

    // prApprove : async({loginPage, page, config, logoutPage}, use) => {
    //     const prApprove = new Approve(loginPage, page, config, logoutPage);
    //     await use(prApprove);
    // },

    // prAssign : async({loginPage, page, logoutPage}, use) => {
    //     const prAssign = new Assign(loginPage, page, logoutPage);
    //     await use(prAssign);
    // },

    // prEdit : async({loginPage, page, logoutPage, prSendForApproval, prApprove, prAssign}, use) => {
    //     const prEdit = new Edit(loginPage, page, logoutPage, prSendForApproval, prApprove, prAssign);
    //     await use(prEdit);
    // },

    // prReject : async({loginPage, page, logoutPage, prEdit, config}, use) => {
    //     const prReject = new Reject(loginPage, page, logoutPage, prEdit, config);
    //     await use(prReject);
    // },

    // prBuyerManagerSuspend : async({loginPage, page, logoutPage, prEdit, config}, use) => {
    //     const prBuyerManagerSuspend = new BuyerManagerSuspend(loginPage, page, logoutPage, prEdit, config);
    //     await use(prBuyerManagerSuspend);
    // },

    // prBuyerSuspend : async({loginPage, page, logoutPage, prEdit, config}, use) => {
    //     const prBuyerSuspend = new BuyerSuspend(loginPage, page, logoutPage, prEdit, config);
    //     await use(prBuyerSuspend);
    // }
});

export { expect } from '@playwright/test';