import { newtermapp } from "../TermAPP/consolidatedTerm.js";
import { termapp } from "../TermAPP/term.cy.js";
const termObj = new termapp()
const newTerm = new newtermapp()
export class NAT {

    NAT() {
        let j = '';
        let pName = 'Alberta';
        // this.visit()
        // this.dob()
        // this.smokingStatus()
        // this.annualIncome()
        // this.discount(j)
        // this.province(pName) // commnet
        this.nextButtonWait()
        this.family()
        this.nextButton()
        this.property()
        this.nextButton()
        this.debts()
        // this.nextButton()
        this.insurance()
        this.applyNow(pName)
    }

    visit() {
        cy.clearCookies()
        cy.viewport('macbook-13')
        cy.visit("https://richmediawireless.com/dev/td/v3.18/needs/fr/", {
            auth: {
                username: 'richmedia',
                password: 'yellowrobot20'
            },
        })
    }

    dob(){
        cy.get('#year-input').clear()
        cy.get('#day-input').clear()
        cy.get('#day-input').type(3)
        cy.get('#months-dropdown-question-select').select('janvier')
        cy.get('#year-input').type(1972)
    }
    smokingStatus() {
        cy.get('#smoking > .question-container > .col-sm-10 > .td-multi-single-select-buttons > .td-multi-single-select-buttons-group > :nth-child(2) > .ng-binding').click()
    }
    annualIncome() {
        cy.get('#annual-income-input').type(123456)
    }
    discount(i) {
       // cy.get('#checkbox-alumni').click() // since it's pre-selected so un-selecting it

        if(i == 'bankCustomer'){
            cy.get('#checkbox-bankCustomer').click()
        }
        else if(i == 'homeAutoCustomer'){
            cy.get('#checkbox-homeAutoCustomer').click()
        }
        else if(i == 'wealthCustomer'){
            cy.get('#checkbox-wealthCustomer').click()
        }
        else if(i == 'employee'){
            cy.get('#checkbox-employee').click()
        }
        else if(i == 'notalumni'){
            cy.get('#checkbox-alumni').click()
        }
        else if(i == 'all'){
            cy.get('#checkbox-bankCustomer').click()        // 1
            cy.get('#checkbox-homeAutoCustomer').click()    // 2
            cy.get('#checkbox-wealthCustomer').click()      // 3
            cy.get('#checkbox-employee').click()            // 4
            // alumni is pre-selected on review link
        }

        else{
            cy.log('Invalid selection or nothing selected')
        }

    }

    province(provinceName) {
        if(provinceName == 'Québec' || provinceName == 'Quebec'){
            cy.get('#province-select').select(provinceName)
        }
        else{
            cy.log('Nothing selected')
        }
    }

    nextButton() {
        cy.get('.next-button > .btn').click()
    }

    nextButtonWait() {
        cy.wait(5000)
        cy.get('.next-button > .btn').click()
    }

    family() {
        cy.get('#single-checkbox').check()
    }

    property() {
        cy.get('.td-multi-single-select-buttons-group > :nth-child(1) > .ng-binding').click()
        cy.get('[control="mortgage-question"] > .button-container > .ng-isolate-scope > .btn').click()
        //call next button for next step
    }

    debts() {
        cy.get('[control="group-insurance"] > .button-container > .ng-isolate-scope > .btn').click({force: true})
        // cy.get('.td-multi-single-select-buttons-group > :nth-child(2) > .ng-binding').click({force: true})
    }

    insurance(){
       // cy.get('.td-multi-single-select-buttons-group > :nth-child(2) > .ng-binding').click()
        this.nextButton()
    }

    applyNow(p) {
        //cy.get('#average-coverage > .form-field > :nth-child(1) > .input-group > #coverage-value-input').clear()
        //cy.get('#average-coverage > .form-field > :nth-child(1) > .input-group > #coverage-value-input').type(450000)

        //T20
        cy.get('#digital-bind-discount-popup > .popup-container > .popup-content > .container > .action-button-container > .ng-scope > .btn').click()
        cy.get('#twenty-year-top > .btn').click()
        cy.get('.wop-input > .td-multi-single-select-buttons-group > :nth-child(1) > label').click({force:true})
        cy.get('#wop-popup > .popup-container > .popup-content > .container > .action-button-container > .ng-scope > .btn').click()
        // cy.get('#apply-now-td-10').click()
        //online discount

        //WOP
        if(p == "Quebec" || p == "Québec"){
            cy.get('.wop-input > .td-multi-single-select-buttons-group > :nth-child(1) > label').click({force:true})
            cy.get('#wop-popup > .popup-container > .popup-content > .container > .action-button-container > .ng-scope > .btn').click()
        }
       // newTerm.newtermapp()
        // termObj.termapp()
    }

}