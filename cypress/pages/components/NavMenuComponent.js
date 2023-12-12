export class NavMenu {
  elements = {
    menuItem: () => cy.get('.menu-item')
  }

  openByTitle(title) {
    this.elements.menuItem().contains(title).click()
  }
}