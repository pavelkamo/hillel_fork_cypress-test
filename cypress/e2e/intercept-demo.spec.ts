/// <reference types="cypress" />

describe('Intercept demo', () => {

  it.skip('test', () => {
    let postID
    // cy.visit('/web/index.php/auth/login')
    // cy.get('input[name="username"]').type('Admin')
    // cy.get('input[name="password"]').type('admin123')
    // cy.get('button[type="submit"]').click()
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }).then(res => {
      expect(res.status).to.eq(201)
      console.log(res)
      postID = res.body.id

    //   cy.request('DELETE', `https://jsonplaceholder.typicode.com/posts/${res.body.id}`).then(res => {

    //     expect(res.status).to.eq(200)
    //     console.log(res)
    // })
    })

    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/100', // baseUrl is prepend to URL
      form: false, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      body: {
        title: 'foo',
        body: 'bar',
        userId: 10,
      },
    }).then(res => {
      expect(res.status).to.eq(201)
      console.log(res)
      postID = res.body.id

    //   cy.request('DELETE', `https://jsonplaceholder.typicode.com/posts/${res.body.id}`).then(res => {

    //     expect(res.status).to.eq(200)
    //     console.log(res)
    // })
    })


    // cy.intercept('GET', '/web/index.php/api/v2/pim/employees*', {fixture: 'employee-response.json'}).as('employee')

    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

    // cy.wait('@employee').its('response').then(resp => {
    //   console.log(resp)
    //   expect(resp.statusCode).to.eq(200)
    // })
    // cy.get('.oxd-table').find('.oxd-table-card').should('exist')
  })

  it('fixture test', () => {
    cy.visit('/pages/forms/layouts')
    cy.fixture('users').then(users => {
      cy.log(users)
      cy.get('#inputEmail1').type(users[0].email)
      cy.get('#inputPassword2').type(users[0].password)
      cy.get('#inputEmail1').should('have.value', users[0].email)
      cy.get('#inputPassword2').should('have.value', users[0].password)
    })
  })
})
