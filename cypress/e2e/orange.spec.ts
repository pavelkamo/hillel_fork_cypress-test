describe('intercept demo', () => {
  it('should login', () => {
    cy.intercept('GET', '/web/index.php/api/v2/leave/holidays*').as('holidays')
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')
    cy.wait('@holidays')
    cy.get('.oxd-table').find('.oxd-table-card').should('not.exist')
  })
})