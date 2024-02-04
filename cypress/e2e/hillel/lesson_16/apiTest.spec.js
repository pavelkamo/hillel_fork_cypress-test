/// <reference types="cypress" />


const BASE_URL = 'https://jsonplaceholder.typicode.com';
describe('API tests', () => {

  it('GET request', () => {
    cy.request(BASE_URL + '/posts').then(response => {
      expect(response.status).to.eq(200);
      expect(response).not.be.null;
      expect(response.body).not.empty;
      cy.log(response);//залишено лог спеціально
    })
  })

  it('POST request', () => {
    const BODY = {
      title: 'Bob Bobenko', body: 'QA Engineer', userId: 55,
    };

    cy.request('POST', BASE_URL + '/posts', BODY).then(response => {
      expect(response.status).to.eq(201);
      expect(response.statusText).to.eq('Created');
      expect(response.body).not.empty;
      cy.log(response);//залишено лог спеціально
    });
  });

  it('PUT request', () => {
    const BODY = {
      id: 55, title: 'Bob Bobenko', body: 'QA Engineer', userId: 1,
    }
    cy.request('PUT', BASE_URL + '/posts/1', BODY).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).not.empty;
      cy.log(response);//залишено лог спеціально
    });
  });

  it('PATCH request', () => {
    const BODY = {title: 'Bob Bobenko'};
    cy.request('PATCH', BASE_URL + '/posts/1', BODY).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).not.empty;
      expect(response.body.title).to.eq('Bob Bobenko');
      cy.log(response);//залишено лог спеціально
    });
  });

  it('DELETE request', () => {
    cy.request('DELETE', BASE_URL + '/posts/1').then(response => {
      expect(response.status).not.to.eq(500);
      expect(response.status).not.to.eq(400);
      expect(response.status).not.to.eq(304);
      expect(response.status).not.to.eq(201);
      expect(response.status).to.eq(200);
      expect(response).not.be.null;
      cy.log(response);//залишено лог спеціально
    })
  })
})
