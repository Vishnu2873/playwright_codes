Feature: validating the Adactin hotel app functionalities

@AD1
Scenario: validating login using valid creds
Given navigate to Adactin app
When enter username in username field
And enter password in password field
Then click login btn and it navigate to search hotel page

@AD2
Scenario: validating login using valid creds
Given navigate to Adactin app
When enter username in username field
And enter password in password field
Then click login btn and it navigate to search hotel page
When enter location in location field
And enter hotel_addels in hotel_addels field
And enter room_type in room_type field
And enter noofroom in noofroom field
And enter checkindate in checkindate field
And enter checkoutdate in checkoutdate field
And enter adultsperroom in adultsperroom field
And enter childperroom in childperroom field
Then click search btn and it navigate to select hotel page

@AD3
Scenario: validating login using valid creds
Given navigate to Adactin app
When enter username in username field
And enter password in password field
Then click login btn and it navigate to search hotel page
When enter location in location field
And enter hotel_addels in hotel_addels field
And enter room_type in room_type field
And enter noofroom in noofroom field
And enter checkindate in checkindate field
And enter checkoutdate in checkoutdate field
And enter adultsperroom in adultsperroom field
And enter childperroom in childperroom field
Then click search btn and it navigate to select hotel page
When enter selectBox click in selectBox field
Then click contiuneBut and it navigate to select hotel Book page

@AD4
Scenario: validating login using valid creds
Given navigate to Adactin app
When enter username in username field
And enter password in password field
Then click login btn and it navigate to search hotel page
When enter location in location field
And enter hotel_addels in hotel_addels field
And enter room_type in room_type field
And enter noofroom in noofroom field
And enter checkindate in checkindate field
And enter checkoutdate in checkoutdate field
And enter adultsperroom in adultsperroom field
And enter childperroom in childperroom field
Then click search btn and it navigate to select hotel page
When enter selectBox click in selectBox field
Then click contiuneBut and it navigate to select hotel Book page
When enter first name in first name field
And enter last name in last name field
And enter address in address field
And enter creditcard in creditcard field
And enter creditcard Type in creditcard type field
And enter expireDateMonth in expireDateMonth field
And enter expireDateYear in expireDateYear field
And enter cvvnumber in cvvnumber field
Then click Booknow and it navigate to select confrim Book page 

@AD5
Scenario: validating login using valid creds
Given navigate to Adactin app
When enter username in username field
And enter password in password field
Then click login btn and it navigate to search hotel page
When enter location in location field
And enter hotel_addels in hotel_addels field
And enter room_type in room_type field
And enter noofroom in noofroom field
And enter checkindate in checkindate field
And enter checkoutdate in checkoutdate field
And enter adultsperroom in adultsperroom field
And enter childperroom in childperroom field
Then click search btn and it navigate to select hotel page
When enter selectBox click in selectBox field
Then click contiuneBut and it navigate to select hotel Book page
When enter first name in first name field
And enter last name in last name field
And enter address in address field
And enter creditcard in creditcard field
And enter creditcard Type in creditcard type field
And enter expireDateMonth in expireDateMonth field
And enter expireDateYear in expireDateYear field
And enter cvvnumber in cvvnumber field
Then click Booknow and it navigate to select confrim Book page
Then click itinerary in itinerary field

@AD6
Scenario: validating login using valid creds
Given navigate to Adactin app
When enter "Vishnu28" in username field
And enter "04UD58" in password field
Then click login btn and it navigate to search hotel page
