export class SelectHotol{
constructor(page){
this.page=page;
this.selectBox=page.locator('//input[@type="radio"]');
this.continueBut=page.locator('//input[@id="continue"]');
}
async selectBox_Click(){
    await this.selectBox.click();

}
async continueBut_Click(){
    await this.continueBut.click();
}
    
}