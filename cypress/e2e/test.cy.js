/// <reference types ="cypress"/>
import { tj } from "../json/jsontest.cy";
import { pc } from "../PC/mc.cy";
const tjobj = new tj();
const pcObj = new pc();
// it('json', () => {
//    tjobj.readingfile()
//  })

// it(' Testing array inputs ', () => {
//   cy.viewport(600,500)
//   let name = '';
//   let input = '';
//   cy.visit('cypress/html/index.html')
//    const names = ['Test']
//     cy.log(names.length)
//     for(let i = 0 ; i<names.length ; i++){
//       cy.get('#inputbox').type(names[i])
//       cy.get('#inputbox').invoke('val').then(($n) => {
//         input = 'Test'
//         //input = $n
//         cy.log('?',$n)
//         if(input == names[i]){
//           cy.get('#output').type(input)
//         }
//         else{
//           cy.get('#output').type('Could not find in array !!!!')
//         }
//       });
//       cy.get('#inputbox').clear()
//       cy.get('#output').clear()
//       cy.wait(1500)
//     }
// })

it('Math', () => {

  pcObj.mathTest();

})
