
import { Login } from "../../page.js/loginPage.js";
import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(60*1000);
Before(async function(){ 
await this.openBroswer();
this.loginPage=new Login(this.page);
})


After(async function(){
await this.closeBroswer();
})

