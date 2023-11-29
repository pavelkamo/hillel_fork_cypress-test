/// <reference types="cypress" />

describe('Debugger demo', ()=>{
  const colors = {
    "Light": "rgb(255, 255, 255)",
    "Dark": "rgb(34, 43, 90)",
    "Cosmic": "rgb(50, 50, 89)",
    "Corporate": "rgb(255, 255, 255)"
   };

  beforeEach(()=>{
    cy.visit('/')
  })

  it('debug browser native', () => {
    cy.wrap(Object.keys(colors)).each(color => {
      cy.get('ngx-header .select-button').click()
      cy.contains('nb-option', `${color}`).click()
      
      cy.wrap(null).then(() => {
        cy.log('this is from cycle')
      })
    })
  })

  it('debug cypress custom', () => {
    cy.wrap(Object.keys(colors)).each(color => {
      cy.get('ngx-header .select-button').click()
      cy.contains('nb-option', `${color}`).debug().click()
    })
  })

  it('cypress pause', () => {
    cy.wrap(Object.keys(colors)).each(color => {
      cy.get('ngx-header .select-button').click()
      cy.contains('nb-option', `${color}`).pause().click()
      cy.pause()
    })
  })
})
