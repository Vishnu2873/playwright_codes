export class BookingHotel{
    constructor(page){
        this.page=page;
        this.firstName=page.locator('//input[@id="first_name"]');
        this.lastName=page.locator('//input[@id="last_name"]');
        this.address=page.locator('//textarea[@id="address"]');
        this.creditCard=page.locator('//input[@id="cc_num"]');
        this.creditCardType=page.locator('//select[@id="cc_type"]');
        this.expiryDateMonth=page.locator('//select[@id="cc_exp_month"]');
        this.expiryDateYear=page.locator('//select[@id="cc_exp_year"]');
        this.cvvNumber=page.locator('//input[@id="cc_cvv"]');
        this.bookNow=page.locator('//input[@id="book_now"]');
    }
    async firstName_Add(firstname){
    await this.firstName.fill(firstname);
    }
    async lastName_Add(lastname){
    await this.lastName.fill(lastname);
    }
     async address_Add(addressname){
    await this.address.fill(addressname);
    }
     async creditCard_Add(creditcard){
    await this.creditCard.fill(creditcard);
    }
     async creditCardType_Add({index}){
    await this.creditCardType.selectOption({index});
    }
     async expiryDateMonth_Add({index}){
    await this.expiryDateMonth.selectOption({index});
    }
     async expiryDateYear_Add({index}){
    await this.expiryDateYear.selectOption({index});
    }
     async cvvNumber_Add(cvvnumber){
    await this.cvvNumber.fill(cvvnumber);
    }
     async bookNow_Add(){
    await this.bookNow.click();
    }
}