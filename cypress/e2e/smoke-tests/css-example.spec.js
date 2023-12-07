/// <reference types="cypress" />

describe('CSS intro', ()=>{
  beforeEach(()=>{
    cy.visit('/pages/forms/layouts')
  })

  it('selectors example', ()=>{
    cy.get('button')                  // за тегом
    cy.get('div.form-group.row')          // за класом
    cy.get('body div input ')          // за класом
    cy.get('#inputEmail')             // за id
    cy.get('button.status-danger')    // за тегом з класом
    cy.get('div button')              
    cy.get('div>button')              
    cy.get('form, input')     
    cy.get('form input:nth-of-type(1)')            
    cy.get('form input[type="email"]')              
    cy.get('form input:not([type="text"])')              
    cy.get('a[href^="https:"]')              
  })
  it('cypress helpers', () => {
    cy.get('button').eq(10)
    cy.get('button').first()
    cy.get('button').last()
    cy.get('form').find('.status-danger')
    cy.contains('button[status="danger"]','Submit')
    cy.contains('button','Submit')
    cy.get('button', {log: false})     
    cy.get('button', { withinSubject: 'form' })     
    cy.contains('nb-card form', 'Sign in').last().within(() => {
      cy.get('input').eq(0).type('Hello')
      cy.get('input').eq(1).type('test')
    })
  })
})