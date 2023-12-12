
/// <reference types="cypress" />

describe('CSS intro', ()=>{
  
  it('test db', () => {
    cy.task(
      "queryDb",
      `SELECT * FROM shop.agents`
    ).then(count => {
      cy.task('log', count)
      cy.wrap(count).then(count => {
        expect(count).to.have.lengthOf(13);
      })
    });

    // cy.task('log', count)
  })

  it('Create user', () => {
    cy.task('queryDb', 
      "INSERT INTO shop.customer VALUES ('C00113', 'Holmes', 'London', 'London', 'UK', '2', '6000.00', '5000.00', '7000.00', '4000.00', 'BBBBBBB', 'A003');    "
    ).then(res => {
      cy.task('log', res)
    })
  })
  
})


