import {test, expect} from "../../base/BaseTest.spec";

test('Requisition Create Test', async({prTypeHandler}) => {
     try {
      const status = await prTypeHandler.processRequisitionType();
      
      await expect(status).toBe(200);
     } catch (error) {
        console.error("What is the error: " + error);
     }
});