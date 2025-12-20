export class BookConfirm{
constructor(page){
        this.page=page;
        this.searchHotel=page.locator('//input[@id="search_hotel"]');
        this.itinerary=page.locator('//input[@id="my_itinerary"]');
        this.logOut=page.locator('//input[@id="logout"]');
}
        async itinerary_click(){
            await this.itinerary.click();     
    }
}
