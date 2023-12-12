/// <reference types="cypress" />

describe('CSS intro', ()=>{

  it('custom', () => {
    cy.visit('/')
    cy.clickMenuByName('Layout')
    cy.clickMenuByName('Forms')
  })

  it('custom', () => {
    cy.visit('/pages/forms/layouts')
    cy.get('input[disabled]').forceClick()
  })

  it.skip('login', () => {
    cy.visit('/auth/login')
    cy.get('#input-email').type('test@test.com')
    cy.get('#input-password').type('password')
    cy.get('form button[status="primary"]').click()
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
