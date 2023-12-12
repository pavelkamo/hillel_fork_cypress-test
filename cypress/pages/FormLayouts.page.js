import { FormsPage } from '../selectors/FormsSelectors.js'
import { NavMenu } from './components/NavMenuComponent.js'
import { BasicPage } from './Basic.page.js'

class FormLayoutsPage extends BasicPage {

  // emailInput2 = cy.get(FormsPage.emailInput)     // wrong

  emailInput2() {
    return cy.get(FormsPage.emailInput)
  }

  get emailInput() {
    return cy.get(FormsPage.emailInput)
  }

  get passwordInput() {
    return cy.get(FormsPage.emailInput)
  }

  get radioButton() {
    return cy.get('nb-radio-group label')
  }

  get signInButton() {
    return cy.contains('[status="primary"]', 'Sign in')
  }

  navMenu = new NavMenu()

  elements = {
    title: () => cy.get('nb-card-header').eq(1),
    emailInput: () => cy.get(FormsPage.emailInput),
    passwordInput: () => cy.get('#inputPassword2'),
    radioButton: (buttonLabel) => cy.contains('nb-radio-group label', buttonLabel),
    signInButton: () => cy.contains('[status="primary"]', 'Sign in')
  }

  open(){
    return cy.visit('/pages/forms/layouts')
  }

  login(email, password, radioButton){
    this.elements.emailInput().type(email)
    this.elements.passwordInput().type(password)
    this.elements.radioButton(radioButton).click()
    this.elements.signInButton().click()
  }
}


export default FormLayoutsPage