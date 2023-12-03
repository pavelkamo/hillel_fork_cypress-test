/// <reference types="cypress" />
import moment from "moment"
import { DatePicker } from "../selectors/DatePickerSelector"

describe('Date picker', () => {
  const dateToday = moment().format("MMM D, YYYY")  // generate today's date in specific format using moment

  it('test POM', () => {
    cy.visit('/pages/forms/datepicker')
    cy.get(DatePicker.formInput).click()      // open date picker modal
    cy.get(DatePicker.dateToday).click()      // click today's date
    cy.get(DatePicker.formInput).should('have.value', dateToday) // verify that date picker input has today's date value
  })

})
