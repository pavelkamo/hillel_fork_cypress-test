/// <reference types="cypress" />

import { ForgotPasswordPage } from "../page/ForgorPasswordPage.js";

describe ('Forgot Password tests', () => {
    const forgotPassword = new ForgotPasswordPage();

    it('Email Input length validation error message visability', () => {
        cy.visit('/auth/request-password')
        forgotPassword.elements.emailInput().type('bo@$%')
        forgotPassword.elements.forgotPasswordTitle().click()
        cy.contains('[class="caption status-danger"]', 'Email should be the real one!').should('be.visible')
    })

    it('Email Input required validation error message visability', () => {
        cy.visit('/auth/request-password')
        forgotPassword.elements.emailInput().click()
        forgotPassword.elements.forgotPasswordTitle().click()
        cy.contains('[class="caption status-danger"]', 'Email is required!').should('be.visible')
    })


    it('Back to Login button route is correct', () => {
        cy.visit('/auth/request-password')
        forgotPassword.elements.backToLoginButton().click()
        cy.get('nb-login [id="title"]').should('be.visible')
    })

    it('Register button route is correct', () => {
        cy.visit('/auth/request-password')
        forgotPassword.elements.registerButton().click()
        cy.get('nb-register [id="title"]').should('be.visible')
    })
})
