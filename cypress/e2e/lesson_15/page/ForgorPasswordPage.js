export class ForgotPasswordPage {

  elements = {
    forgotPasswordTitle: () => cy.get('nb-request-password-page [id="title"]'),

    emailInput: () => cy.get('input[id="input-email"]'),

    requestPasswordButton: () => cy.get('button[status="primary"]'),
    registerButton: () => cy.get('a[href="/auth/register"]'),
    backButton: () => cy.get('a[class="link back-link"]'),
    backToLoginButton: () => cy.get('a[href="/auth/login"]')
  }
}
