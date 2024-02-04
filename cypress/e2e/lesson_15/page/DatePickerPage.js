export class DatePickerPage {

    elements = {
        dateInput: () => cy.get('nb-card-body input').eq(0),
        calendar: () => cy.get('nb-base-calendar [class="ng-star-inserted"]'),
        dayToday: () => cy.get('nb-calendar-day-cell.today')
    }

    open(){
        return cy.visit('/pages/forms/datepicker')
    }
}
