// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';
Cypress.Commands.add('LoginOnWeb', ()=> {
    // const loginDetails = {
    //     "user": {
    //       "email": "smdelacruz28@yahoo.com",
    //       "password": "myself18!!"
    //     }
    //   }
    // cy.request('POST', 'https://anmelden.check24.de/20211012-1/ajax/user/login/', loginDetails) //request to API (method, url, body)
    // .its('body').then( responseBody => {
    //   const tokenfromuser = responseBody.c24challenge
    //   console.log(tokenfromuser)
    // //   cy.wrap(tokenfromuser).as('tokenfromuser')
    // //   cy.visit('/', {
    // //       onBeforeLoad(win){
    // //           win.localStorage.setItem('csrf', tokenfromuser)
    // //       }
    // //   })
    // })
})