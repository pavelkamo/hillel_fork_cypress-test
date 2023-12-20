/// <reference types="cypress" />

describe('CSS intro', ()=>{

  it('custom', () => {
    cy.task('log', {param1: 'Hello world', param:2} )
    cy.task('dateStamp')
    cy.getCustomersFromDB()
    cy.visit('/')
    cy.clickMenuByName('Layout')
    cy.clickMenuByName('Forms')
  })

  it.skip('custom', () => {
    cy.visit('/pages/forms/layouts')
    cy.get('input[disabled]').forceClick()
  })

  it.skip('login', () => {
    cy.visit('/auth/login')
    cy.get('#input-email').type('test@test.com')
    cy.get('#input-password').type('password')
    cy.get('form button[status="primary"]').click({force: true})
    cy.get('.user-container').should('be.visible')
  })

  it('login with custom commands', () => {
    cy.visit('/auth/login')
    cy.login('test@test.com', 'my password')
    cy.get('.user-container').should('be.visible')
  })

  it('login with custom commands', () => {
    cy.visit('/auth/login')
    cy.get('#input-email').type('email@test.com')
    cy.get('#input-password').type("password", {sensitive: true})
    cy.get('form button[status="primary"]').click()
    cy.get('.user-container').should('be.visible')
  })
})
