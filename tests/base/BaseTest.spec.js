import {test as baseTest} from '@playwright/test';
import LoginPage from "../../pages/login/LoginPage";
import Config from '../../utils/Config';

export const test = baseTest.extend({

    config : async({page}, use) => {
        const config = new Config();
        await use(config);
    },

    loginPage : async({page, config}, use) =>{
        const loginPage = new LoginPage(page, config);
        await use(loginPage);
    }

// /* Requisitions */
//     prCreate : async({loginPage, config, page}, use) => {
//         const prCreate = new Create(loginPage, config, page, );
//         await use(prCreate);
//     },




});

export { expect } from '@playwright/test';