export class RegistrationPage {

  elements = {
    registerTitle: () => cy.get('nb-register [id="title"]'),

    //Inputs
    nameInput: () => cy.get('input[id="input-name"]'),
    emailInput: () => cy.get('input[id="input-email"]'),
    passwordInput: () => cy.get('input[id="input-password"]'),
    repeatPasswordInput: () => cy.get('input[name="rePass"]'),

    //Buttons
    registerButton: () => cy.get('button[status="primary"]'),
    backButton: () => cy.get('a[class="link back-link"]'),
    gitHubButton: () => cy.get('a[class="github with-icon"]'),
    faceBookButton: () => cy.get('a[class="facebook with-icon"]'),
    twitterButton: () => cy.get('a[class="twitter with-icon"]'),
    loginButton: () => cy.get('a[href="/auth/login"]'),

    //Check-boxes
    agreeTermsCheckbox: () => cy.get('span[class="custom-checkbox"]'),

    //Error locators
    nameInputError: () => cy.get('input[id="input-name"]').get('p'),
    emailInputError: () => cy.get('input[id="input-email"]').get('p'),
    passwordInputError: () => cy.get('input[id="input-password"]').get('p'),
    repeatPasswordInputError: () => cy.get('input[name="rePass"]').get('p'),

    //Error messages
    nameInputErrorMessage: 'Full name should contains from 4 to 50 characters',
    emailInputErrorMessage: 'Email should be the real one!',
    passwordInputErrorMessage: 'Password should contain from 4 to 50 characters',
    repeatPasswordInputErrorMessage: 'Password confirmation is required!',
  }

  open() {
    return cy.visit('/auth/register')
  }

  register(name, email, password) {
    this.elements.nameInput(name);
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.repeatPasswordInput().type(password);
    this.elements.agreeTermsCheckbox().click();
    this.elements.registerButton().click()
  }
}
