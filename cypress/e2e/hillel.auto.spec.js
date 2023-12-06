/// <reference types="cypress" />

describe('Form Layouts', () => {
  

  it.skip('test qaauto', () => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', {
      "email": Cypress.env('userName'),
      "password": Cypress.env('password'),
      "remember": false
    })
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/panel/settings')

  })
})
