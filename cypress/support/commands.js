/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }




Cypress.Commands.add('clickMenuByName', (name) => {
  cy.log('from custom command clickMenuByName')
  cy.get('nb-sidebar nb-menu').contains(name).click()
})

Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject) => {
  cy.wrap(subject).click({force: true})
})

// Cypress.Commands.add('login', (email, password) => { 
//   cy.get('#input-email').type(email)
//   cy.get('#input-password').type(password)
//   cy.get('form button[status="primary"]').click()
// })


Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})


Cypress.Commands.add('login', (email, password, radioButton) => { 
  cy.get('input[data-cy="imputEmail1"]').type(email)
  

})