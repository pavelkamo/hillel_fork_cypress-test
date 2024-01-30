const colors = {
  "Light": "rgb(255, 255, 255)",
  "Dark": "rgb(34, 43, 69)",
  "Cosmic": "rgb(50, 50, 89)",
  "Corporate": "rgb(255, 255, 255)"
};
describe('Lesson 13: first UI test on Cypress', () => {

  /*
  I have decided to split Task 1 on 4 tests because 1 test should have 1 target
   */
  //Select Dark color and check if it accepted on page
  it('Task 1.1: change colors - Dark', () => {
    cy.visit('/');
    cy.get('button[class="select-button"]').should('be.visible').click()
    cy.get('ul nb-option[ng-reflect-value="dark"]').click()
    cy.get('nb-layout-header nav').should('have.css','background-color',colors.Dark)
  })

  //Select Cosmic color and check if it accepted on page
  it('Task 1.2: change colors - Cosmic', () => {
    cy.visit('/');
    cy.get('button[class="select-button"]').click()
    cy.get('ul nb-option[ng-reflect-value="cosmic"]').click()
    cy.get('nb-layout-header nav').should('have.css','background-color',colors.Cosmic)
  })

  //Select Corporate color and check if it accepted on page
  it('Task 1.3: change colors - Corporate', () => {
    cy.visit('/');
    cy.get('button[class="select-button"]').click()
    cy.get('ul nb-option[ng-reflect-value="corporate"]').click()
    cy.get('nb-layout-header nav').should('have.css','background-color',colors.Corporate)
  })

  //Added one more test to check Light color after selected another one
  it('Task 1.4: change colors - Light', () => {
    cy.visit('/');
    cy.get('button[class="select-button"]').click()
    cy.get('ul nb-option[ng-reflect-value="default"]').click()
    cy.get('nb-layout-header nav').should('have.css','background-color',colors.Corporate)
  })
})
