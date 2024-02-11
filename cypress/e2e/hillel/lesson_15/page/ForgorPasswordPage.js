export class ForgotPasswordPage {

  elements = {
    forgotPasswordTitle: () => cy.get('nb-request-password-page [id="title"]'),

    //Inputs
    emailInput: () => cy.get('input[id="input-email"]'),

    //Buttons
    requestPasswordButton: () => cy.get('button[status="primary"]'),
    registerButton: () => cy.get('a[href="/auth/register"]'),
    backButton: () => cy.get('a[class="link back-link"]'),
    backToLoginButton: () => cy.get('a[href="/auth/login"]'),

    //Error selectors
    emailInputError: () => cy.get('input[id="input-email"]').get('p'),

    //Error messages
    emailInputErrorMessage: 'Email should be the real one!',
    emailInputEmptyErrorMessage: 'Email is required!',
  }

  open() {
    return cy.visit('/auth/request-password');
  }
}
