context('Navigation Function Components', () => {

  it('Should clear history ', () => {
    cy.visit('/')
    cy.get('[data-cy="history"]').children().should('have.length', 0)
  })

  
  it('Should have 1 child element in history ', () => { 
      cy.get('[data-cy="7"]').click()
      cy.get('[data-cy="+"]').click()
      cy.get('[data-cy="8"]').click()
      cy.get('[data-cy="="]').click()
      cy.get('[data-cy="history"]').children().should('have.length', 1)
    })

  it('Should appear in history ', () => {
  
    cy.get('[data-cy="history"]').contains('7+8 = 15')
  })

  it('Should clear history ', () => {
    cy.visit('/settings')
    cy.contains('Clear All History').click()
    cy.visit('/')
    cy.get('[data-cy="history"]').children().should('have.length', 0)
  })
  it('Should have 10 child elements in history', () => {
    cy.visit('/')
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="7"]').click()
      cy.get('[data-cy="+"]').click()
      cy.get('[data-cy="8"]').click()
      cy.get('[data-cy="="]').click()
    }
    cy.get('[data-cy=history]').children().should('have.length', 10)
  })
  it('Should clear history ', () => {
    cy.visit('/settings')
    cy.contains('Clear All History').click()
    cy.visit('/')
    cy.get('[data-cy="history"]').children().should('have.length', 0)
  }) 
})

context('History Class Component', () => {

  it('Should clear history ', () => {
    cy.visit('/')
    cy.get('[data-cy="history"]').children().should('have.length', 0)
  })

  
  it('Should have 1 child element in history ', () => { 
      cy.get('[data-cy="7"]').click()
      cy.get('[data-cy="+"]').click()
      cy.get('[data-cy="8"]').click()
      cy.get('[data-cy="="]').click()
      cy.get('[data-cy="history"]').children().should('have.length', 1)
    })

  it('Should appear in history ', () => {
  
    cy.get('[data-cy="history"]').contains('7+8 = 15')
  })

  it('Should clear history ', () => {
    cy.visit('/settings')
    cy.contains('Clear All History').click()
    cy.visit('/')
    cy.get('[data-cy="history"]').children().should('have.length', 0)
  })
  it('Should have 10 child elements in history', () => {
    cy.visit('/')
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="7"]').click()
      cy.get('[data-cy="+"]').click()
      cy.get('[data-cy="8"]').click()
      cy.get('[data-cy="="]').click()
    }
    cy.get('[data-cy=history]').children().should('have.length', 10)
  })
  it('Should clear history ', () => {
    cy.visit('/settings')
    cy.contains('Clear All History').click()
    cy.visit('/')
    cy.get('[data-cy="history"]').children().should('have.length', 0)
  }) 
})