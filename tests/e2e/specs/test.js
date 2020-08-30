// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'カレー具材ガチャ')
    cy.contains('p', '具の数:')
  })

  it('input 1', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}1')
    cy.get('.lottery').click()
    cy.contains(/(玉ねぎ.*|人参.*|じゃがいも.*|大根.*){1}/)
  })

  it('input 2', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}2')
    cy.get('.lottery').click()
    cy.contains(/(玉ねぎ.*|人参.*|じゃがいも.*|大根.*){2}/)
  })

  it('input 4', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}4')
    cy.get('.lottery').click()
    cy.contains(/(玉ねぎ.*|人参.*|じゃがいも.*|大根.*){4}/)
  })

  it('input 5', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}5')
    cy.get('.lottery').click()
    cy.contains(/(玉ねぎ.*|人参.*|じゃがいも.*|大根.*){4}/)
  })
})
