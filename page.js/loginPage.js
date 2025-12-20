export class Login{
    constructor(page){
    this.page = page;
    this.userName=page.locator('//input[@id="username"]');
    this.passWord=page.locator('//input[@id="password"]');
    this.loginButton=page.locator('//input[@id="login"]');

    }
    async navigation(){
       await this.page.goto("http://adactinhotelapp.com/");

    }

    async userNameLog(username){
        await this.userName.fill(username);
    }
    async passwordLog(password){
       await  this.passWord.fill(password)
    }
    async buttonLog(login){
        await this.loginButton.click();
    }

}