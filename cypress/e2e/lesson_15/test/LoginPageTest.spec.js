/// <reference types="cypress" />

import { LoginPage } from "../page/LoginPage.js";

describe ('Login tests', () => {
    const loginPage = new LoginPage();

    it('Email and Password Input length validation error message visability', () => {
        loginPage.open()
        loginPage.elements.emailInput().type('bobboenko')
        loginPage.elements.passwordInput().click()
        cy.contains('[class="caption status-danger"]', 'Email should be the real one!').should('be.visible')
        loginPage.elements.passwordInput().type('111')
        loginPage.elements.rememberMeCheckbox().click()
        cy.contains('[class="caption status-danger"]', 'Password should contain from 4 to 50 characters').should('be.visible')
    })

    it('Email and Password Input required validation error message visability', () => {
        loginPage.open()
        loginPage.elements.emailInput().click()
        loginPage.elements.passwordInput().click()
        cy.contains('[class="caption status-danger"]', 'Email is required!').should('be.visible')
        loginPage.elements.rememberMeCheckbox().click()
        cy.contains('[class="caption status-danger"]', 'Password is required!').should('be.visible')
    })

    it('Successful Login with valid data', () => {
        loginPage.open()
        loginPage.login(Cypress.env('email'), Cypress.env('user_pass'))
        cy.get('div[class="user-picture image ng-star-inserted"]').should('be.visible')
    })
})
