describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'カレー具材ガチャ')
    cy.contains('div', '具の数:')
    cy.get('.gacha-ingredient').should('not.exist')
    cy.get('.target-ingredient .ingredient').should('have.length', 2)
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
  })

  it('push 対象具材の展開ボタン', () => {
    cy.visit('/')
    cy.get('.list-item-more-button').click()
    cy.get('.target-ingredient .ingredient').should('have.length', 18)
  })

  it('push 対象具材の折りたたみボタン', () => {
    cy.visit('/')
    cy.get('.list-item-more-button').click()
    cy.get('.list-item-less-button').click()
    cy.get('.target-ingredient .ingredient').should('have.length', 2)
  })
})
