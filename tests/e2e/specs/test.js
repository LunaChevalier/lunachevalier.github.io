// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'カレー具材ガチャ')
    cy.contains('只今開発中')
    cy.contains('p', 'HOME VUE')
  })
})
