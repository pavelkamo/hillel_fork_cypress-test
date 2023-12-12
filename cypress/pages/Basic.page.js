export class BasicPage {
  get menuItem () {
    return cy.get('.menu-item')
  }

  // elements = {
  //   menuItem: () => cy.get('.menu-item')
  // }

  openByTitle(title) {
    this.elements.menuItem().contains(title).click()
  }
}