/// <reference types="cypress" />

describe('Intercept demo', () => {
  

  it('test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.intercept('GET', '/web/index.php/api/v2/pim/employees*', {
      statusCode: 201,
      body: {
        "data": [
        {
            "empNumber": 90,
            "lastName": "Test",
            "firstName": "Artem",
            "middleName": "Serhiyovich",
            "employeeId": "1",
            "terminationId": null,
            "jobTitle": {
                "id": null,
                "title": 'QA',
                "isDeleted": null
            },
            "subunit": {
                "id": null,
                "name": null
            },
            "empStatus": {
                "id": null,
                "name": null
            },
            "supervisors": []
        }]
      },
    })

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

    // cy.wait('@employees').its('response').then(resp => {
    //   console.log(resp)
    //   expect(resp.statusCode).to.eq(200)
    // })
    cy.get('.oxd-table').find('.oxd-table-card').should('not.exist')
  })
})
