/// <reference types="cypress" />
import FormLayoutsPage from '../pages/FormLayouts.page.js'

describe('Form Layouts', () => {
  const formLayoutsPage = new FormLayoutsPage()

  it('test POM', () => {
    formLayoutsPage.open()
    formLayoutsPage.elements.emailInput().type('test@test.com')
    formLayoutsPage.elements.passwordInput().type('password')
    formLayoutsPage.elements.radioButton('Option 1').click()
    formLayoutsPage.elements.signInButton().click()
  })


  it('test POM', () => {
    formLayoutsPage.open()
    formLayoutsPage.login('test@test.com', 'p@ssword', 'Option 1')
  })

  it('test POM', () => {
    formLayoutsPage.open()
    // formLayoutsPage.emailInput.type('test@test.com')
    formLayoutsPage.emailInput2().type('test@test.com')
    formLayoutsPage.passwordInput.type('password')
    formLayoutsPage.radioButton.contains('Option 1').click()
    formLayoutsPage.signInButton.click()
    formLayoutsPage.navMenu.openByTitle('Auth')
  })
  it.only('test POM', () => {
    formLayoutsPage.open()
    formLayoutsPage.elements.menuItem()
  })
})
