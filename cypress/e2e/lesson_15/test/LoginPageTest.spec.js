/// <reference types="cypress" />

import {LoginPage} from "../page/LoginPage.js";
import {LoginedUserPage} from "../page/LoginedUserPage.js";

describe('Login tests', () => {
  const loginPage = new LoginPage();
  const loginUserPage = new LoginedUserPage();

  it('Email and Password Input length validation error message visability', () => {
    loginPage.open()

    //Do actions
    loginPage.elements.emailInput().type('bobboenko')
    loginPage.elements.passwordInput().type('111')
    loginPage.elements.rememberMeCheckbox().click()

    //Check error messages
    loginPage.elements.emailInputError().contains(loginPage.elements.emailInputErrorMessage).should('be.visible');
    loginPage.elements.passwordInputError().contains(loginPage.elements.passwordInputErrorMessage).should('be.visible');
  })

  it('Email and Password Input required validation error message visability', () => {
    loginPage.open()

    //Do actions
    loginPage.elements.emailInput().click()
    loginPage.elements.passwordInput().click()
    loginPage.elements.rememberMeCheckbox().click()

    //Check error messages
    loginPage.elements.emailInputError().contains(loginPage.elements.emailInputEmptyErrorMessage).should('be.visible');
    loginPage.elements.passwordInputError().contains(loginPage.elements.passwordInputEmptyErrorMessage).should('be.visible');
  })

  it('Successful Login with valid data', () => {
    loginPage.open();

    //Не переношу отримання емейлу та пароля із Cypress.env бо краще мати нормальний віддалений конфіг та брати звідти
    loginPage.login(Cypress.env('email'), Cypress.env('user_pass'));

    //Check is user logined
    loginUserPage.elements.userIcon().should('be.visible');
  })
})
