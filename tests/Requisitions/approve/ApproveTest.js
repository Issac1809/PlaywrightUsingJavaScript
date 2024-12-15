import {test, expect} from '@playwright/test';


test('Requisition Approve Test', async({page} => {
    try {
        iPrApprove.approve();
    } catch (error) {
        System.out.println("What is the error: " + error.);
    }
}));