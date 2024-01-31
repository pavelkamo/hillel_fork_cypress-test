//Expected data to check
const colors = {
  "Light": "rgb(255, 255, 255)",
  "Dark": "rgb(34, 43, 69)",
  "Cosmic": "rgb(50, 50, 89)",
  "Corporate": "rgb(255, 255, 255)"
};

function checkAncClickSelectButton() {
  cy.get('button[class="select-button"]').should('be.visible');
  cy.get('button[class="select-button"]').click();
}

describe('Lesson 13: first UI test on Cypress(Task 1)', () => {

  beforeEach(() => {
    cy.visit('/');
  })
  /*
  I have decided to split Task 1 on 4 tests because 1 test should have 1 target
   */
  //Select Dark color and check if it accepted on page
  it('Task 1.1: change colors - Dark', () => {
    checkAncClickSelectButton();
    cy.get('ul nb-option[ng-reflect-value="dark"]').click();
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Dark);
  })

  //Select Cosmic color and check if it accepted on page
  it('Task 1.2: change colors - Cosmic', () => {
    checkAncClickSelectButton();
    cy.get('ul nb-option[ng-reflect-value="cosmic"]').click();
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Cosmic);
  })

  //Select Corporate color and check if it accepted on page
  it('Task 1.3: change colors - Corporate', () => {
    checkAncClickSelectButton();
    cy.get('ul nb-option[ng-reflect-value="corporate"]').click();
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Corporate);
  })

  //Added one more test to check Light color after selected another one
  it('Task 1.4: change colors - Light', () => {
    checkAncClickSelectButton();
    cy.get('ul nb-option[ng-reflect-value="default"]').click();
    cy.get('nb-layout-header nav').should('have.css', 'background-color', colors.Corporate);
  })
})

describe('Lesson 13: first UI test on Cypress(Task 2-4)', () => {

  it('Task 2: Text from "Product Details" block visibility', () => {
    cy.visit('/pages/layout/accordion');
    cy.contains('nb-accordion-item-body', 'hydrogen, helium and other ionized gases.').should('be.hidden');
    cy.get('button[class="appearance-filled size-medium status-primary shape-rectangle transitions"]').click();
    cy.contains('nb-accordion-item-body', 'hydrogen, helium and other ionized gases.').should('be.visible');

  })

  it('Task 3: Hint of "Right" button is visible ', () => {
    cy.visit('/pages/modal-overlays/popover');
    cy.get('button[ng-reflect-position="right"]').trigger("mouseenter");
    cy.contains('nb-popover', 'Hello, how are you today?').should('be.visible');

  })

  it('Task 4: Entered Name is contained in "Names" list', () => {
    const NAME = 'QAKER';
    cy.visit('/pages/modal-overlays/dialog');
    cy.contains('button', 'Enter Name').click();
    cy.get('input[class="size-medium shape-rectangle"]').type(NAME);
    cy.get('input[class="size-medium shape-rectangle"]').should('have.value', NAME);
    cy.get('button[class="appearance-filled size-medium status-success shape-rectangle transitions"]').click();
    cy.get('nb-card-body[class="result-from-dialog"]').should('contain', NAME);
  })
})
