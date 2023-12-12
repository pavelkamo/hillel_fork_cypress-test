/// <reference types="cypress" />

describe('API login', () => {
  
  it.skip('test', {
    env: {
      WORK_ENV: 'https://staging.myapi.com',
    },
  }, () => {
    cy.loginViaAPI('test@gmail.com', 'Test1235')
    cy.get('[routerlink="settings"]').click()


    cy.log(Cypress.env('POST'))
    cy.log(Cypress.env('password'))
    cy.log(Cypress.env('userName'))
    cy.log(Cypress.env('WORK_ENV'))
    
  })
})
