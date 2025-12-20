export class SearchHotel{
 constructor(page){

    this.page=page;
    this.location= page.locator('//select[@id="location"]');
    this.hotels_Addels=page.locator('//select[@id="hotels"]');
    this.roomType= page.locator('//select[@id="room_type"]');
    this.noOFRoom= page.locator('//select[@id="room_nos"]');
    this.checkInDate= page.locator('//input[@id="datepick_in"]');
    this.checkOutDate= page.locator('//input[@id="datepick_out"]');
    this.adultsPerRoom=page.locator('//select[@id="adult_room"]');
    this.childPerRoom=page.locator('//select[@id="child_room"]');
    this.searchBut=page.locator('//input[@id="Submit"]');
 }
 async location_add(index){
   await this.location.selectOption({index});
 }
async hotels_Addels_Add(index){
    await this.hotels_Addels.selectOption({index})
}
async roomType_Add(index){
    await this.roomType.selectOption({index})
}
async noOFRoom_Add(index){
     await this.noOFRoom.selectOption({index})
}
async checkInDate_Add(date){
  await this.checkInDate.fill(date)
}
async checkOutDate_Add(date){
 await this.checkOutDate.fill(date)
}
async adultsPerRoom_Add(index){
 await this.adultsPerRoom.selectOption({index})
}
async childPerRoom_Add(index){
 await this.childPerRoom.selectOption({index})
}
async searchBut_Add(){
 await this.searchBut.click();
}
}