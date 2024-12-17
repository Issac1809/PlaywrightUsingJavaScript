import {test, expect} from '@playwright/test';
import Config from '../../../utils/Config';
import LoginPage from '../../../pages/login/LoginPage';
import Create from '../../../pages/requisition/create/Create';
import PurchaseRequisitionTypeHandler from '../../../pages/requisitions/PurchaseRequisitionTypeHandler';

test('Requisition Create Test', async({page}) => {
     try {
      const config = new Config();
      const login = new LoginPage(config, page);
      const prCreate = new Create(login, config, page);
      const prType = new PurchaseRequisitionTypeHandler(prCreate);

      prType.processRequisitionType();

     } catch (error) {
        console.error("What is the error: " + error);
     }
});