// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'カレー具材ガチャ')
    cy.contains('div', '具の数:')
    cy.get('.gacha-ingredient').should('not.exist')
  })

  it('input 1', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}1')
    cy.get('.lottery').click()
    cy.get('.gacha-ingredient').should('be.visible')
  })

  it('input 2', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}2')
    cy.get('.lottery').click()
    cy.get('.gacha-ingredient').should('be.visible')
  })

  it('input ab', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}ab')
    cy.get('.lottery').click()
    cy.get('.gacha-ingredient').should('not.exist')
  })

  it('input -1', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}-1')
    cy.get('.gacha-ingredient').should('not.exist')
  })

  it('input 0', () => {
    cy.visit('/')
    cy.get('.count').type('{backspace}0')
    cy.get('.gacha-ingredient').should('not.exist')
  })})
