/// <reference types="cypress" />

describe('Assertions intro', ()=>{
  const API_obj = { value: 50}


  beforeEach(()=>{
    cy.visit('/pages/forms/layouts')
  })

  it.skip('Assertions', () => {
    cy.get('#inputEmail1').type('Hello')
    cy.get('#inputEmail1').should('have.value', 'Hello')
    cy.visit('/pages/layout/accordion')
    cy.get('div.item-body').eq(0).should('exist')
    cy.get('div.item-body').eq(0).should('be.visible')
  })

  it('Functions', () => {
    cy.get('[status="primary"]').eq(0).then($button => {
      const btnText = $button.text()
      expect(btnText).to.have.length(7)
      expect(btnText).to.eq('Sign in')
    })
  })

  it('test API', () => {
    // cy.wrap(API_obj.value).should('to.equal', '50')
    // expect(API_obj.value).to.equal('50')
    // const statuses = ['Paid', 'Open']
    // const resultstatus = 'Open'
    // expect().to.be.true
    // cy.get('nb-accordion-item-header').should('be.visible')
    // cy.get('nb-accordion-item-header').first().click()
    // cy.get('nb-accordion-item-body').first().find('.ng-trigger-accordionItemBody').should('have.prop',  'class', 'ng-tns-c23-24')
    // cy.wait(5000)
    // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('[placeholder="Jane Doe"]').type('hello')
    cy.get('[placeholder="Jane Doe"]').should('have.value', 'hello')
  })
})