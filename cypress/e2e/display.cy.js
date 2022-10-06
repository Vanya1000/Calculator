describe('Display Function Components', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should be a display', () => {
        cy.get('[data-cy="display"]').should('be.visible')
    })
    
    it('Should be 0 by default', () => {
        cy.get('[data-cy="display"]').should('have.text', '0')
    })

    it('Should contain numbers from 0 to 9', () => {
        cy.get('[data-cy="0"]').click()
        cy.get('[data-cy="1"]').click()
        cy.get('[data-cy="2"]').click()
        cy.get('[data-cy="3"]').click()
        cy.get('[data-cy="4"]').click()
        cy.get('[data-cy="5"]').click()
        cy.get('[data-cy="6"]').click()
        cy.get('[data-cy="7"]').click()
        cy.get('[data-cy="8"]').click()
        cy.get('[data-cy="9"]').click()
        cy.get('[data-cy="display"]').should('have.text', '0123456789')
    })

    it('Should contain 40 characters', () => {
      for (let i = 0; i < 45; i++) {
        cy.get('[data-cy="3"]').click()
      }
      cy.get('[data-cy="display"]').invoke('text').then((text) => {
        expect(text.length).to.be.at.least(40)
    })
    })

    it('Should contain error message when wrong expression', () => {
      cy.get('[data-cy="7"]').click()
      cy.get('[data-cy="+"]').click()
      cy.get('[data-cy="="]').click()
      cy.get('[data-cy="error"]').contains('Error! Please, check input')
    })

    it('The error message should disappear after editing the expression', () => {
      cy.get('[data-cy="7"]').click()
      cy.get('[data-cy="+"]').click()
      cy.get('[data-cy="="]').click()
      cy.get('[data-cy="←"]').click()
      cy.get('[data-cy="error"]').should('not.be.visible')
    })

})

describe('Display Class Components', () => {
  beforeEach(() => {
      cy.visit('/homecc')
  })

  it('Should be a display', () => {
      cy.get('[data-cy="display"]').should('be.visible')
  })
  
  it('Should be 0 by default', () => {
      cy.get('[data-cy="display"]').should('have.text', '0')
  })

  it('Should contain numbers from 0 to 9', () => {
      cy.get('[data-cy="0"]').click()
      cy.get('[data-cy="1"]').click()
      cy.get('[data-cy="2"]').click()
      cy.get('[data-cy="3"]').click()
      cy.get('[data-cy="4"]').click()
      cy.get('[data-cy="5"]').click()
      cy.get('[data-cy="6"]').click()
      cy.get('[data-cy="7"]').click()
      cy.get('[data-cy="8"]').click()
      cy.get('[data-cy="9"]').click()
      cy.get('[data-cy="display"]').should('have.text', '0123456789')
  })

  it('Should contain 40 characters', () => {
    for (let i = 0; i < 45; i++) {
      cy.get('[data-cy="3"]').click()
    }
    cy.get('[data-cy="display"]').invoke('text').then((text) => {
      expect(text.length).to.be.at.least(40)
  })
  })

  it('Should contain error message when wrong expression', () => {
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="error"]').contains('Error! Please, check input')
  })

  it('The error message should disappear after editing the expression', () => {
    cy.get('[data-cy="7"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="←"]').click()
    cy.get('[data-cy="error"]').should('not.be.visible')
  })

})