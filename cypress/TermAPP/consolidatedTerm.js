export class newtermapp {

selfApply = '#radio-selfapply'
citizen = '#radio-citizen'
birthCountry = '#combobox_1'
nextButton = '[style="margin: 0px auto; display: block;"] > :nth-child(1) > .next-btn-container > .btn'
previousApplication = '#radio-not-applied'
nextStep = '.next-show-hide > .ng-binding'
travel = '#radio-no-travel'
heightradioButton = '#height-unit-metric'
height = '#metric-height'
weight = 'input[name=weight]'
nextHW = '#height-weight > :nth-child(1) > .next-btn-container > .btn'
treatment = "#no-treatment-counselling"
referredSpecialist = '#no-reason'
buttonTest = '[class$=-btn]' ////worked
symptoms = '#no-other'
disabilityBenefit = '#disability-benefits-no'
disabilityBenefitovermonth = '#disability-benefits-over-30-days-no'
prescribedMedical = '#medical-marijuana-no'
otherCondition = '#other-medical-conditions-no'
familyDisease = '#kidney-or-huntington-disease-no'
extremeSports = '#noExtremeSport'
extremeJob = '#noExtremeJob'
alcohol = '#radio-no-alcohol'
drugs = '#radio-no-drugs'
advisedTreatment = '#radio-no-treatment'
criminalRecord = '#no-criminal-record'
drivingRecord = '#no-bad-driving-record'
nextOrDecisiion = '[class$=-btn-secondary-clear]'
fName = '#name-first'
lname = '#name-last'
email = '#email'
phoneNumber = '#phone-number'
address = '#address'


    newtermapp(age){
        // this.url()

        this.step1()
        this.step2()
        this.step3()
        cy.log(age)

        if(age != false){
            this.step4()
        }


    }
    url(){
        cy.viewport('macbook-13')
        cy.visit("https://richmediawireless.com/dev/td/v3.18-edit/application/fr/", {
            auth: {
                username: '',
                password: ''
            },
        })
    }
    step1(){
        cy.get(this.selfApply).click({force:true})
        cy.get(this.citizen).click({force:true})
        cy.get(this.birthCountry).type('Canada{downArrow}{enter}',{force:true})
        cy.get(this.nextButton).click({force:true})
        cy.get(this.previousApplication).click({force:true})
        cy.wait(2000)
        cy.get(this.nextStep).click({force:true})

    }

    step2(){

        cy.get(this.travel).click({force:true})
        cy.get(this.heightradioButton).click({force:true})
        cy.get(this.height).type(180, {force:true})
        cy.get(this.weight).type(90,{force:true})
        cy.get(this.nextHW).click({force:true})
        cy.get(this.treatment).click({force:true})
        cy.get(this.referredSpecialist).click({force:true})
        cy.get(this.buttonTest).filter(':visible').click({force:true,multiple:true}) // worked filtering visible button
        cy.get(this.symptoms).click({force:true})
        cy.get(this.disabilityBenefit).click({force:true})
        cy.get(this.disabilityBenefitovermonth).click({force:true})
        cy.get(this.prescribedMedical).click({force:true})
        cy.get(this.otherCondition).click({force:true})
        cy.get(this.familyDisease).click({force:true})
        cy.get(this.extremeSports).click({force:true})
        cy.get(this.extremeJob).click({force:true})
        cy.get(this.buttonTest).filter(':visible').click({force:true,multiple:true})
        // cy.get('#current-occupation').type('QA')
        // cy.get(this.buttonTest).filter(':visible').click({force:true})
    //    cy.get('[control="currentOccupation"][show="$ctrl.coverageAmount >= 500000"] > :nth-child(1) > .next-btn-container > .btn').click()
        // cy.get('#annual-income').type(1234)
        cy.get(this.buttonTest).filter(':visible').click({force:true})
        cy.get(this.alcohol).click({force:true})
        cy.get(this.drugs).click({force:true})
        cy.get(this.advisedTreatment).click({force:true})
        cy.get(this.criminalRecord).click({force:true})
        //cy.get(this.buttonTest).filter(':visible').click({force:true})
        cy.get(this.drivingRecord).click({force:true})
        cy.get(this.nextOrDecisiion).click({force:true})

    }

    step3(){
        cy.get(this.fName).type('RMTest',{force:true})
        cy.get(this.lname).type('RM Last name',{force:true})
        cy.get(this.email).type('rm@rm.ca',{force:true})
        cy.get(this.phoneNumber).type(1234567890,{force:true})
        cy.get(this.address).type(1233,{force:true})
        cy.wait(5000)
        cy.get(this.address).type('{enter}',{force:true})
        cy.wait(2000)
        cy.get(this.nextOrDecisiion).click({force:true})

    }
    step4(){
        cy.wait(2000)
        cy.get(this.nextOrDecisiion).click({force:true})
    }


}