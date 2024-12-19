import {test, expect} from "../../base/BaseTest.spec";

test('Requisition Create Test', async({prTypeHandler}) => {
     try {

      const {status, body} = await prTypeHandler.processRequisitionType();
      
      expect(status).toBe(200);
//      await expect(body.success).toBe(true);

     } catch (error) {
        console.error("What is the error: " + error);
     }
});