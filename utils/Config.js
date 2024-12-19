import TestData from '../test-data/TestData.json';

class Config{

//TODO Constructor
    constructor(){
    }

    async navigateToUrl(page){
        try{
        const url = TestData.browserAndExecutionSettings.appUrl;
        await page.goto(url);
        } catch (error) {
            console.error("What is the Error: " + error);
        }
    }

    async screenshotFunction(title, page){
        const screenshots = '../screenshots';
        const extention = '.jpeg';
        const path = `${screenshots}/${title}${extention}`;
        try{
            await page.screenshot({path, fullpage : true});
        } catch (error){
            console.error("What is the Error: " + error);
        }
    }

    async waitForLocator(page){
        try {
            await page.waitForLoadState('domcontentloaded');
            await page.waitForLoadState('networkidle'); 
        } catch (error) {
            console.error("What is the Error: " + error);
        }
    }
}

export default Config;