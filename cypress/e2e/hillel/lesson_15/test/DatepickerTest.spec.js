/// <reference types="cypress" />

import { DatePickerPage } from "../page/DatePickerPage.js";
import moment from "moment";

//Date template
const dateToday = moment().format("MMM D, YYYY");
describe ('Date Picker tests', () => {
    const datePickerPage = new DatePickerPage();

    it('Date Picker visability and verify that input has today date value', () => {

        datePickerPage.open()
        datePickerPage.elements.dateInput().click()
        datePickerPage.elements.calendar().should('be.visible')
        datePickerPage.elements.dayToday().click()
        datePickerPage.elements.dateInput().should('have.value', dateToday)
    })
})
