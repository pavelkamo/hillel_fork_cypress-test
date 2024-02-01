export class LoginPage {

  elements = {
    loginTitle: () => cy.get('nb-login [id="title"]'),

    emailInput: () => cy.get('input[id="input-email"]'),
    passwordInput: () => cy.get('input[id="input-password"]'),

    loginButton: () => cy.get('button[status="primary"]'),
    forgotPasswordButton: () => cy.get('a[class="forgot-password caption-2"]'),
    registerButton: () => cy.get('a[href="/auth/register"]'),
    backButton: () => cy.get('a[class="link back-link"]'),
    gitHubButton: () => cy.get('a[class="github with-icon ng-star-inserted"]'),
    faceBookButton: () => cy.get('a[class="facebook with-icon ng-star-inserted"]'),
    twitterButton: () => cy.get('a[class="twitter with-icon ng-star-inserted"]'),

    rememberMeCheckbox: () => cy.get('span[class="custom-checkbox"]')
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
