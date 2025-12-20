import { setWorldConstructor } from "@cucumber/cucumber";
import{chromium } from '@playwright/test';
class Execution{
    constructor(){
        this.broswer=null;
        this.context=null;
        this.page=null;
    }
    async openBroswer(){
        this.broswer=await chromium.launch({headless:false});
        this.context=await this.broswer.newContext();
        this.page=await this.context.newPage()
    }
    async closeBroswer(){
        await this.broswer.close();
    }
}
setWorldConstructor(Execution);