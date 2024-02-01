/// <reference types="cypress" />

import {ForgotPasswordPage} from "../page/ForgorPasswordPage.js";
import {LoginPage} from "../page/LoginPage.js";
import {RegistrationPage} from "../page/RegistrationPage"

describe('Forgot Password tests', () => {
  const forgotPassword = new ForgotPasswordPage();
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();

  it('Email Input length validation error message visability', () => {
    forgotPassword.open()
    forgotPassword.elements.emailInput().type('bo@$%')
    forgotPassword.elements.forgotPasswordTitle().click()
    forgotPassword.elements.emailInputError().contains(forgotPassword.elements.emailInputErrorMessage).should('be.visible');
  })

  it('Email Input required validation error message visability', () => {
    forgotPassword.open()
    forgotPassword.elements.emailInput().click()
    forgotPassword.elements.forgotPasswordTitle().click()
    forgotPassword.elements.emailInputError().contains(forgotPassword.elements.emailInputEmptyErrorMessage).should('be.visible');
  })


    it('Back to Login button route is correct', () => {
        forgotPassword.open();
        forgotPassword.elements.backToLoginButton().click();
        loginPage.elements.loginTitle().should('be.visible');
    })

    it('Register button route is correct', () => {
        forgotPassword.open();
        forgotPassword.elements.registerButton().click();
        registrationPage.elements.registerTitle().should('be.visible');
    })
})
