/// <reference types ="cypress"/>
import { NAT } from "../NAT/NAT.cy.js";
import { termapp } from "../TermAPP/term.cy.js";
import { quoter } from "../Quoter/quoter.cy.js";
import { newtermapp } from "../TermAPP/consolidatedTerm.js";
const NATobj = new NAT()
const quoterObj = new quoter()
const termObj = new newtermapp()


it(' TD App ', () => {

   quoterObj.quoter('fr')
   // NATobj.NAT()
   // termObj.newtermapp() // testing consolidated version
})





