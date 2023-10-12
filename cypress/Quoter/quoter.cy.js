import { NAT } from "../NAT/NAT.cy.js";
import { termapp } from "../TermAPP/term.cy.js";
import { newtermapp } from "../TermAPP/consolidatedTerm.js";

const termObj = new termapp()
const NATobj = new NAT()
const newTerm = new newtermapp()

export class quoter {

// locators
dobMonth = '#birthDate-month'
dobDate = '#birthDate-date'
dobYear = '#birthDate-year'
MLoc = '#radio-sex-male'
FLoc = '#radio-sex-female'
nonSmoker = '#radio-smoking-no'
smoker = '#radio-smoking-yes'
provinceLoc = '#province'
bank = '#checkbox-bankCustomer'
homeAuto = '#checkbox-homeAutoCustomer'
wealth = '#checkbox-wealthCustomer'
employee = '#checkbox-employee'
alum = '#checkbox-alumni'
combo = '#combobox_1'
seePrice = '[class$=-padding]'
productLoc = '#productDropdown'
applybtn = '[class$=-btn-CTA]'
onlineDiscount = '[class$=-sm-50]'
wopYes = '#radio-wop-yes'
wopNo = '#radio-wop-no'
coverageSlider = '#coverage-value-input'



    quoter(ln){
        // cy.viewport('iphone-6')
    //    cy.viewport('ipad-2')
       cy.viewport(1280,850);
        let lang = ln
        let url17 = "https://richmediawireless.com/dev/td/v3.17/quoter/"+lang // version 3.17
        let url20 = "https://richmediawireless.com/dev/td/v3.20/quoter/"+lang // version 3.19/3.20/Misc Changes
        let url64 = "https://richmediawireless.com/dev/td/v3.19-bill-64/quoter/"+lang // Bill 64
        let urlCS = "https://richmediawireless.com/dev/td/v3.19-cross-sell/quoter/"+lang // Cross Sell
        let urlFO = "https://richmediawireless.com/dev/td/v3.19-funnel/quoter/"+lang // Funnel optimization
        let urlED = "https://richmediawireless.com/dev/td/v3.19-edit/quoter/"+lang // Edit details
        let prodURL = "https://www.tdinsurance.com/products-services/life-insurance/quote/"+lang // prod URL
        let sex = 'M'
        let smoker = 'N'
        let discountOption = '';
        let selectProvince = 'Alberta' // Québec
        let belowSixty = true
        let coverageAmount = 100000 ;
        let uri =  url20
        this.visitQuoter(uri,lang)
        this.dob(lang,belowSixty)
        this.gender(sex)
        this.smokingStatus(smoker)
        this.discount(discountOption)
        this.province(selectProvince,uri,belowSixty,coverageAmount)

    }

    visitQuoter(link,lng) {
        if(lng !== 'en' && lng !== 'fr'){
            cy.log("INCORRECT SELECTION!!! ",lng)
        }

        if(!link.includes("product-services")){
            cy.visit(link, {
                auth: {
                    username: 'richmedia',
                    password: 'yellowrobot20'
                },
            })
        }

    }

    dob(ln,younger) {
        cy.log("lang selected ",ln)
        if(ln == 'en'){
            cy.get(this.dobMonth).select('January')
        }
        else if(ln == 'fr'){
            cy.get(this.dobMonth).select('décembre') //décembre, janvier
        }
        else{
            cy.log("INCORRECT SELECTION!!! ",ln)
        }

        if(younger == true){
            cy.get(this.dobYear).type(1988)
        }
        else{
            cy.get(this.dobYear).type(1961)
        }

        cy.get(this.dobDate).type(1)
    }

    gender(a) {

        if (a == 'M'){
            cy.get(this.MLoc).click({force:true})
        }
        else if(a == 'F') {
            cy.get(this.FLoc).click({force:true})
        }
        else {
            cy.log('wrong selection')
        }
    }

    smokingStatus(b) {
        if(b == 'N'){
            cy.get(this.nonSmoker).click({force:true})
        }
        else if (b == 'Y'){
            cy.get(this.smoker).click({force:true})
        }
        else{
            cy.log('Incorrect selection')
        }
    }

    discount(i) {
        if(i == 'bankCustomer' || i == 1){
            cy.get(this.bank).click({force:true})
        }
        else if(i == 'homeAutoCustomer'|| i == 2){
            cy.get(this.homeAuto).click({force:true})
        }
        else if(i == 'wealthCustomer'|| i == 3){
            cy.get(this.wealth).click({force:true})
        }
        else if(i == 'employee'|| i == 4){
            cy.get(this.employee).click({force:true})
        }
        else if(i == 'alumni' || i == 5){
            cy.get(this.alum).click({force:true})
            cy.get(this.combo).type('Other')
        }
        else if(i == 'all' || i == 6){
            cy.get(this.bank).click({force:true})        // 1
            cy.get(this.homeAuto).click({force:true})    // 2
            cy.get(this.wealth).click({force:true})      // 3
        }

        else{
            cy.log('Invalid selection or nothing selected')
        }
    }

    province(p,link,ag,camount) {
        cy.get(this.provinceLoc).select(p)
        if(p == 'Quebec' || p == 'Québec'){
            cy.wait(2000)
            cy.get('.container > .btn').click({force:true})
            NATobj.NAT()
            newTerm.newtermapp()
        }
        else{
            this.seeMyPrice()
            this.termProduct(20,link,ag,camount)
        }
    }

    seeMyPrice() {
        cy.get(this.seePrice).click({force:true})
    }

    termProduct(b,u,age,amt) {

        cy.wait(1000)

        if(u.includes('3.20')){

        cy.get(this.onlineDiscount)
             .filter(':visible')
                 .click({force:true})
        }
        cy.wait(1000)
        cy.get(this.coverageSlider).clear({force:true})
        cy.wait(1000)
        cy.get(this.coverageSlider).type(amt,{force:true})
        cy.wait(1000)
        if(b == 10){
            cy.log(' its 10')
            cy.get(this.productLoc).select(0)
        }
       else if(b == 20){
            cy.log(' its 20')
            cy.get(this.productLoc).select(1)
            cy.wait(1000)
        }
       else if(b == 100 || b == ''){
            cy.log('its 100')
            cy.get(this.productLoc).select(1)
        }
        else{
            cy.log('NO SUCH PRODUCT EXIST!!!!!')
        }
// Apply now button
        cy.get(this.applybtn)
                 .filter(':visible')
                     .click({force:true})

        if(u.includes('sell') || u.includes('edit') || u.includes('v3.20') && age == true){

            cy.get(this.wopYes).click({force:true}) // for CS
            // cy.get(this.wopNo).click({force:true})
            cy.get(this.onlineDiscount)
                .filter(':visible')
                    .click({force:true})
        }

        else{
            cy.log('No WOP!!!!!')
            newTerm.newtermapp(age)
        }

        if(u.includes('v3.17') || u.includes('product-services')){
            cy.get(this.onlineDiscount)
            .filter(':visible')
                .click({force:true})
            termObj.termapp()
        }
        else{
            newTerm.newtermapp()
        }



    }

}