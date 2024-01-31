describe('Qaker first cypress test suit', () => {

  before(() => {
    cy.log('Before all')
  })
  beforeEach(() => {
    cy.visit('/');
  })

  afterEach('Test finished', () => {
    cy.log('Test finished')
  });

  after('After all', () => {
    cy.log('After all')
  })


  it('First test', () => {
    cy.log('test 1');
  })

  it('Second test', () => {
    cy.log('test 2');
  })

  describe('Negative tests', () => {

    before(() => {
      cy.log('Before negative all')
    })
    beforeEach(() => {
      cy.log('Before negative each')
    })

    it.skip('First negative test', () => {
      cy.log('negative test 1');
    })

    it('Second negative test', () => {
      cy.log('negative test 2');
    })
  })
})
