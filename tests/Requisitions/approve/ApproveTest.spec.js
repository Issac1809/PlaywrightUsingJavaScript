import {test, expect} from '../../base/BaseTest';

test('Requisition Approve Test', async({prApprove} => {
    try {
        prApprove.approve();
    } catch (error) {
        System.out.println("What is the error: " + error);
    }
}));