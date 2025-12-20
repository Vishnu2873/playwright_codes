import{test} from"@playwright/test";
import { Login } from "../page.js/loginPage";
import { SearchHotel } from "../page.js/searchHotel";
import { SelectHotol } from "../page.js/selectHotel";
import { BookingHotel } from "../page.js/bookHotel";
import { BookConfirm } from "../page.js/bookingConfirm";

test("Hotel Booking",async ({page})=>{
    
    const logs = new Login(page);
    const hotel=new SearchHotel(page);
    const select=new SelectHotol(page);
    const book=new BookingHotel(page);
    const bookConf=new BookConfirm(page);
    
    await logs.navigation();
    await logs.userNameLog("Vishnu28");
    await logs.passwordLog("04UD58");
    await logs.buttonLog();

    await hotel.location_add(1);
    await hotel.hotels_Addels_Add(1);
    await hotel.roomType_Add(1);
    await hotel.noOFRoom_Add(1);
    await hotel.checkInDate_Add("12/12/2025");
    await hotel.checkOutDate_Add("12/12/2025");
    await hotel.adultsPerRoom_Add(1);
    await hotel.childPerRoom_Add(1);
    await hotel.searchBut_Add();

    await page.waitForLoadState();
    await select.selectBox_Click();
    await select.continueBut_Click();

    await page.waitForLoadState();
    await book.firstName_Add("Vishnu");
    await book.lastName_Add("M");
    await book.address_Add("Ramapuram,Chennai");
    await book.creditCard_Add("6380622498213456");
    await book.creditCardType_Add(3);
    await book.expiryDateMonth_Add(5);
    await book.expiryDateYear_Add(6);
    await book.cvvNumber_Add("1234");
    await book.bookNow_Add();

    await page.waitForLoadState();
    await bookConf.itinerary_click();
}
)