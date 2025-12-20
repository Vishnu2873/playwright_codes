import { Given, Then, When } from "@cucumber/cucumber";
import { Login } from "../../page.js/loginPage.js";
import { SearchHotel } from "../../page.js/searchHotel.js";
import { SelectHotol } from "../../page.js/selectHotel.js";
import { BookingHotel } from "../../page.js/bookHotel.js";
import { BookConfirm } from "../../page.js/bookingConfirm.js";
let search;
let booknowcon;
let selectHot;
let loginPage;
let cfnBook;
Given('navigate to Adactin app', async function () {
    loginPage = new Login(this.page);
    search =new SearchHotel(this.page);
    selectHot=new SelectHotol(this.page);
    booknowcon=new BookingHotel(this.page);
    cfnBook=new BookConfirm(this.page);
    await loginPage.navigation();

});

When('enter username in username field', async function () {
    await loginPage.userNameLog("Vishnu28");
});

When('enter password in password field', async function () {
    await loginPage.passwordLog("04UD58");
});

Then('click login btn and it navigate to search hotel page', async function () {
    await loginPage.buttonLog();
});


 When('enter location in location field',async function () {
         await search.location_add(1);
         });

          When('enter hotel_addels in hotel_addels field',async function () {
           await search.hotels_Addels_Add(1);
         });

           When('enter room_type in room_type field',async function () {
          await search.roomType_Add(1);
        
         });

          When('enter noofroom in noofroom field',async function () {
          await search.noOFRoom_Add(1);
         });

           When('enter checkindate in checkindate field',async function () {
          await search.checkInDate_Add("12/12/2025");
         });

          When('enter checkoutdate in checkoutdate field',async function () {
          await search.checkOutDate_Add("12/15/2025");

         });

 When('enter adultsperroom in adultsperroom field',async function () {
           await search.adultsPerRoom_Add(1);
                 });

When('enter childperroom in childperroom field',async function () {
          await search.childPerRoom_Add(1);
         });

          Then('click search btn and it navigate to select hotel page',async function () {
          await search.searchBut_Add();
         });

           When('enter selectBox click in selectBox field',async function () {
          await selectHot.selectBox_Click();
         });


         Then('click contiuneBut and it navigate to select hotel Book page',async function () {
            await selectHot.continueBut_Click();
         })



        When('enter first name in first name field',async function () {
           await booknowcon.firstName_Add("vicky");
         });

         When('enter last name in last name field',async function () {
          await booknowcon.lastName_Add("r");
         });
         When('enter address in address field',async function () {
          await booknowcon.address_Add("chennai");
         });


         When('enter creditcard in creditcard field',async function () {
           await booknowcon.creditCard_Add("1234567890098765");
         });



         When('enter creditcard Type in creditcard type field',async function () {
           await booknowcon.creditCardType_Add(2);
         });



         When('enter expireDateMonth in expireDateMonth field',async function () {
           await booknowcon.expiryDateMonth_Add(4);
         });

         When('enter expireDateYear in expireDateYear field',async function () {
           await booknowcon.expiryDateYear_Add(7);
         });

         When('enter cvvnumber in cvvnumber field',async function () {
          await booknowcon.cvvNumber_Add("1234");
         });


         Then('click Booknow and it navigate to select confrim Book page',async function () {
          await booknowcon.bookNow_Add();
         });

 Then('click itinerary in itinerary field',async function () {
           await cfnBook.itinerary_click();
         });

           When('enter {string} in username field',async function (string) {
           await loginPage.userNameLog(string);
         });

          When('enter {string} in password field',async function (string) {
           await loginPage.passwordLog(string);
         });

         