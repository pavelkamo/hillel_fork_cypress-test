export class LoginPage {

  elements = {
    loginTitle: () => cy.get('nb-login [id="title"]'),

    //Inputs
    emailInput: () => cy.get('input[id="input-email"]'),
    passwordInput: () => cy.get('input[id="input-password"]'),

    //Buttons
    loginButton: () => cy.get('button[status="primary"]'),
    forgotPasswordButton: () => cy.get('a[class="forgot-password caption-2"]'),
    registerButton: () => cy.get('a[href="/auth/register"]'),
    backButton: () => cy.get('a[class="link back-link"]'),
    gitHubButton: () => cy.get('a[class="github with-icon ng-star-inserted"]'),
    faceBookButton: () => cy.get('a[class="facebook with-icon ng-star-inserted"]'),
    twitterButton: () => cy.get('a[class="twitter with-icon ng-star-inserted"]'),

    //Check-boxes
    rememberMeCheckbox: () => cy.get('span[class="custom-checkbox"]'),

    //Error locators
    passwordInputError: () => cy.get('input[id="input-password"]').get('p'),
    emailInputError: () => cy.get('input[id="input-email"]').get('p'),

    //Error messages
    emailInputErrorMessage: 'Email should be the real one!',
    emailInputEmptyErrorMessage: 'Email is required!',
    passwordInputErrorMessage: 'Password should contain from 4 to 50 characters',
    passwordInputEmptyErrorMessage: 'Password is required!'
  }

  open() {
    return cy.visit('/auth/login')
  }

  login(email, password) {
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().click();
  }
}
