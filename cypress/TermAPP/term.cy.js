export class termapp {

    termapp(){
        this.step1()
        this.nextButton()
        this.step2()
        this.nextButton()
        this.step3()
        this.nextButton()
        this.step4()
        this.nextButton()
        this.step5()
        this.nextButton()
        this.step6()
        this.nextButton()
        this.step7()
        this.nextButton()
    }

    step1() {
        cy.wait(2000)
        cy.get('[style="display: block;"] > :nth-child(1) > .app-question-inner > .question > .mt-0 > .row > .td-multi-single-select-buttons-group > :nth-child(1) > label').click({force:true})
        cy.get('[show="$ctrl.model.personalApplication === true"] > :nth-child(1) > .app-question-inner > .question > .mt-0 > .row > .td-multi-single-select-buttons-group > :nth-child(1) > label').click({force:true})
        cy.wait(1000)
        cy.get('#radio-no-travel').click({ force: true })

    }
    nextButton() {
        cy.wait(2000)
        cy.get('.next-show-hide > .ng-binding').click({ force: true })
    }
    questionNextButton() {
        cy.wait(2000)
        cy.get('[style="display: block;"] > :nth-child(1) > .next-btn-container > .btn').should('be.visible').click({ multiple: true, force: true })
    }
    step2() {
        cy.wait(2000)
        cy.get('[style="display: block;"] > :nth-child(1) > .app-question-inner > .question > .mt-0 > .row > .td-multi-single-select-buttons-group > :nth-child(2) > label').click({force:true})
    }

    step3() {
        cy.wait(2000)

        cy.get('#height-unit-metric').should('be.visible').click({ multiple: true, force: true })
        // cy.get('#imperial-ft').type(5,{force:true})
        cy.wait(2000)
        // cy.get('#imperial-in').type(0,{force:true})
        cy.get('#metric-height').should('be.visible').type(180, { multiple: true, force: true })
        cy.wait(2000)
        this.questionNextButton()
        cy.get('[control="weight"][style="display: block;"] > :nth-child(1) > .app-question-inner > .question > .row > .form-group > .input-group > .form-control').should('be.visible').type(90, { multiple: true, force: true })
        // cy.get('#weight').type(400)
        this.questionNextButton()
        cy.get('#no-treatment-counselling').click({force:true})
        this.questionNextButton()
        cy.get('#no-reason').click({force:true})
        this.questionNextButton()
        cy.get('#no-other').click({force:true})
        // this.questionNextButton()
        cy.get('.short-err > .td-multi-single-select-buttons-group > :nth-child(2) > label').click({force:true})
        cy.get('[show="$ctrl.form.disabilityBenefits.$valid"] > :nth-child(1) > .app-question-inner > .question > .td-multi-single-select-buttons > .td-multi-single-select-buttons-group > :nth-child(2) > label').click({force:true})
        cy.get('[show="$ctrl.form.disabilityBenefitsOver30Days.$valid"] > :nth-child(1) > .app-question-inner > .question > .mt-0 > .td-multi-single-select-buttons-group > :nth-child(2) > label').click({force:true})
        cy.get('[show="$ctrl.form.medicalMarijuana.$valid"] > :nth-child(1) > .app-question-inner > .question > .td-multi-single-select-buttons > .td-multi-single-select-buttons-group > :nth-child(2) > label').click({force:true})
    }

    step4() {
        cy.wait(2000)
        cy.get('.td-multi-single-select-buttons-group > :nth-child(2) > label').click({force:true})
    }

    step5() {
        cy.wait(2000)
        cy.get('#noExtremeSport').click({ multiple: true, force: true })
        cy.get('[control="extremeSports"] > :nth-child(1) > .next-btn-container > .btn').click({force: true})
        cy.get('#noExtremeJob').click({ multiple: true, force: true })
        cy.get('[control="extremeJobs"] > :nth-child(1) > .next-btn-container > .btn').click({ multiple: true, force: true })
        // cy.get('#current-occupation').type('QA')
        // cy.get('[control="currentOccupation"][show="$ctrl.coverageAmount >= 500000"] > :nth-child(1) > .next-btn-container > .btn').click()
        // cy.get('#annual-income').type(123456)
        // cy.get('[control="annualIncome"][show="$ctrl.coverageAmount >= 500000"] > :nth-child(1) > .next-btn-container > .btn').click()


        cy.get('[control="alcoholConsumption"][hide-button=""] > :nth-child(1) > .app-question-inner > .question > .row > .td-multi-single-select-buttons-group > :nth-child(2) > label').click({ multiple: true, force: true })
        cy.get('[control="drugUse"][hide-button=""] > :nth-child(1) > .app-question-inner > .question > .row > .td-multi-single-select-buttons-group > :nth-child(2) > label').click({ multiple: true, force: true })
        cy.get('[control="treatment"][hide-button=""] > :nth-child(1) > .app-question-inner > .question > .row > .td-multi-single-select-buttons-group > :nth-child(2) > label').click({ multiple: true, force: true })
    }

    step6() {
        cy.wait(2000)
        cy.get('#no-criminal-record').click({force: true})
        cy.get('[control="criminalRecord"] > :nth-child(1) > .next-btn-container > .btn').click({force: true})
        cy.get('#no-bad-driving-record').click({force: true})
    }

    step7() {
        cy.wait(2000)
        cy.get('#name-first').type('Test fname', { force: true })
        cy.get('#name-last').type('Test lname', { force: true })
        cy.get('#email').type('test@test.com', { force: true })
        cy.get('#phone-number').type(1234567890, { force: true })
        cy.get('#combobox_1').type('Canada', { force: true })
        cy.get('#address').type(123, { force: true })
    }
}