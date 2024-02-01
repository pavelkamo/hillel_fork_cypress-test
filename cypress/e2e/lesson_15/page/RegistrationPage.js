export class RegistrationPage {

  elements = {
    registerTitle: () => cy.get('nb-register [id="title"]'),

    nameInput: () => cy.get('input[id="input-name"]'),
    emailInput: () => cy.get('input[id="input-email"]'),
    passwordInput: () => cy.get('input[id="input-password"]'),
    repeatPasswordInput: () => cy.get('input[name="rePass"]'),

    registerButton: () => cy.get('button[status="primary"]'),
    backButton: () => cy.get('a[class="link back-link"]'),
    gitHubButton: () => cy.get('a[class="github with-icon"]'),
    faceBookButton: () => cy.get('a[class="facebook with-icon"]'),
    twitterButton: () => cy.get('a[class="twitter with-icon"]'),
    loginButton: () => cy.get('a[href="/auth/login"]'),

    agreeTermsCheckbox: () => cy.get('span[class="custom-checkbox"]'),
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
