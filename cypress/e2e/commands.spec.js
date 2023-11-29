/// <reference types="cypress" />

describe('Commands intro', ()=>{
  let userID
  let buttonText

  beforeEach(()=>{
    // cy.visit('/pages/forms/layouts')
    cy.visit('/pages/tables/smart-table')
  })

  it('test then', () =>{
    cy.get('body').then(button => {
      buttonText = button.html() 
      cy.log(buttonText)
      // cy.wrap(buttonText).should('to.equal', 'Submit')
      expect(buttonText).to.have.length(6)
    })
  })

  it('Edit table row without then', () => {
    cy.get('tbody tr').eq(0).find('.nb-edit').click()
    cy.get('tbody tr').eq(0).find('input[placeholder="First Name"]').clear().type('Artem')
    cy.get('tbody tr').eq(0).find('input[placeholder="Last Name"]').clear().type('test')
    cy.get('tbody tr').eq(0).find('.nb-checkmark').click()
    cy.get('tbody tr').eq(0).find('table-cell-view-mode').eq(1).should('have.text', 'Artem')
    cy.get('tbody tr').eq(0).find('table-cell-view-mode').eq(2).should('have.text', 'test')
  })

  it('Edit table row with then', () => {
    cy.get('tbody tr').eq(0).then(row => {
      cy.wrap(row).find('.nb-edit').click()
      cy.wrap(row).find('input[placeholder="First Name"]').clear().type('Artem')
      cy.wrap(row).find('input[placeholder="Last Name"]').clear().type('test')
      cy.wrap(row).find('.nb-checkmark').click()
      cy.wrap(row).find('table-cell-view-mode').eq(1).should('have.text', 'Artem')
      cy.wrap(row).find('table-cell-view-mode').eq(2).should('have.text', 'test')
    })
  })

  it('Edit table row with within', () => {
    cy.get('tbody tr').eq(0).within(() => {
      cy.get('.nb-edit').click()
      cy.get('input[placeholder="First Name"]').clear().type('Artem')
      cy.get('input[placeholder="Last Name"]').clear().type('test')
      cy.get('.nb-checkmark').click()
      cy.get('table-cell-view-mode').eq(1).should('have.text', 'Artem')
      cy.get('table-cell-view-mode').eq(2).should('have.text', 'test')
    })
  })

  it.skip('get user ID', () => {
    cy.get('tbody tr').eq(0).within(() => {
      cy.get('table-cell-view-mode').eq(0).then(id => {
        userID = id.text()
        cy.log(userID)
      })
    })
  })

})

describe('popovers', () => {
  beforeEach(()=> {
    cy.visit('/pages/modal-overlays/popover')
  })

  it('invoke', () => {
    cy.contains('button', 'Right').then(button => {
      cy.log(button)
      button.text('text from then')
    
    })

    cy.contains('button', 'Right').invoke('text', 'NEW NAME')

    const myObg = {
      test: 'test',
      a: (myName) => {
        console.log('Hello from obj' + myName)

      }
    }
    cy.wrap(myObg).its('test').should('')
    cy.wrap(myObg).invoke('a', 'Artem')
    cy.wrap(myObg).then(el => {
      el.a('Testing')
      expect($el.test).to.equal('test')
    })
  })

  it('trigger', () => {
    
    cy.contains('button', 'Right').trigger('mouseenter')
  })
})
