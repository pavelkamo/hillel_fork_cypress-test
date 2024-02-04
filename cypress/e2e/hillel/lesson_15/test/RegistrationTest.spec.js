/// <reference types="cypress" />

import {RegistrationPage} from "../page/RegistrationPage.js"
import {LoginedUserPage} from "../page/LoginedUserPage.js"

describe('Register tests', () => {
  const registerPage = new RegistrationPage();
  const loginedUserPage = new LoginedUserPage();

  it('Each validation error message is visable', () => {
    registerPage.open();
    //Fill form
    registerPage.elements.nameInput().type('1');
    registerPage.elements.emailInput().type('bobenko');
    registerPage.elements.passwordInput().type('qa');
    registerPage.elements.repeatPasswordInput().click();
    registerPage.elements.agreeTermsCheckbox().click();

    //Form error messages validation
    registerPage.elements.nameInputError().contains(registerPage.elements.nameInputErrorMessage).should('be.visible');
    registerPage.elements.emailInputError().contains(registerPage.elements.emailInputErrorMessage).should('be.visible');
    registerPage.elements.passwordInputError().contains(registerPage.elements.passwordInputErrorMessage).should('be.visible');
    registerPage.elements.repeatPasswordInputError().contains(registerPage.elements.repeatPasswordInputErrorMessage).should('be.visible');
  })

  it('Successful Register with valid data', () => {
    registerPage.open();
    registerPage.register(Cypress.env('username'), Cypress.env('email'), Cypress.env('user_pass'));
    loginedUserPage.elements.userIcon().should('be.visible');
  })
})
