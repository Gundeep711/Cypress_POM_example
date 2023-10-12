export class pc{


    mathTest(){
      let number1,number2='';
      let result='';
      cy.visit('cypress/html/index.html')
      cy.get('#num1').type(10)

      cy.get('#num1').invoke('val').then(($n1) => {
               number1 = $n1
               cy.log('1 is ',number1)
      });
      cy.log('1 is ',number1)
      cy.get('#num2').type(10)
      cy.get('#num2').invoke('val').then(($n2) => {
         number2 = $n2
    });
    cy.get('#add').click();
//      result = number1+number2;
      cy.log('???',this.number1)
      //cy.get('#output').type(number1)
        }
    }
