context('Keypad Function Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should contain numbers from 0 to 9', () => {
    cy.get('[data-cy="0"]').should('exist')
    cy.get('[data-cy="1"]').should('exist')
    cy.get('[data-cy="2"]').should('exist')
    cy.get('[data-cy="3"]').should('exist')
    cy.get('[data-cy="4"]').should('exist')
    cy.get('[data-cy="5"]').should('exist')
    cy.get('[data-cy="6"]').should('exist')
    cy.get('[data-cy="7"]').should('exist')
    cy.get('[data-cy="8"]').should('exist')
    cy.get('[data-cy="9"]').should('exist')
  })

  it('Should contain operators +, -, *, /, =', () => {
    cy.get('[data-cy="+"]').should('exist')
    cy.get('[data-cy="-"]').should('exist')
    cy.get('[data-cy="*"]').should('exist')
    cy.get('[data-cy="/"]').should('exist')
    cy.get('[data-cy="="]').should('exist')
  })

  it('Should contain =', () => {
    cy.get('[data-cy="="]').should('exist')
  })

  it('Should contain ( and )', () => {
    cy.get('[data-cy="("]').should('exist')
    cy.get('[data-cy=")"]').should('exist')
  })

  it('Should contain .', () => {
    cy.get('[data-cy="."]').should('exist')
  })

  it('Should contain C', () => {
    cy.get('[data-cy="C"]').should('exist')
  })

  it('Should ignore second operator when two operators are entered in a row', () => {
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="+"').click()
    cy.get('[data-cy="+"').click()
    cy.get('[data-cy="display"]').should('have.text', '5+')
    cy.get('[data-cy="C"').click()

    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="-"').click()
    cy.get('[data-cy="-"').click()
    cy.get('[data-cy="display"]').should('have.text', '5-')
    cy.get('[data-cy="C"').click()
    
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="*"').click()
    cy.get('[data-cy="*"').click()
    cy.get('[data-cy="display"]').should('have.text', '5*')
    cy.get('[data-cy="C"').click()

    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="/"').click()
    cy.get('[data-cy="/"').click()
    cy.get('[data-cy="display"]').should('have.text', '5/')
    cy.get('[data-cy="C"').click() 
  })

  it('Should ignore second dot when two dots are entered in a row', () => {
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="."').click()
    cy.get('[data-cy="."').click()
    cy.get('[data-cy="display"]').should('have.text', '5.')
    cy.get('[data-cy="C"').click()
  })

  it('Should delete last symbol when backspace is pressed', () => {
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="←"').click()
    cy.get('[data-cy="display"]').should('have.text', '5')
  })

})

context('Keypad Class Component', () => {
  beforeEach(() => {
    cy.visit('/homecc')
  })

  it('Should contain numbers from 0 to 9', () => {
    cy.get('[data-cy="0"]').should('exist')
    cy.get('[data-cy="1"]').should('exist')
    cy.get('[data-cy="2"]').should('exist')
    cy.get('[data-cy="3"]').should('exist')
    cy.get('[data-cy="4"]').should('exist')
    cy.get('[data-cy="5"]').should('exist')
    cy.get('[data-cy="6"]').should('exist')
    cy.get('[data-cy="7"]').should('exist')
    cy.get('[data-cy="8"]').should('exist')
    cy.get('[data-cy="9"]').should('exist')
  })

  it('Should contain operators +, -, *, /, =', () => {
    cy.get('[data-cy="+"]').should('exist')
    cy.get('[data-cy="-"]').should('exist')
    cy.get('[data-cy="*"]').should('exist')
    cy.get('[data-cy="/"]').should('exist')
    cy.get('[data-cy="="]').should('exist')
  })

  it('Should contain =', () => {
    cy.get('[data-cy="="]').should('exist')
  })

  it('Should contain ( and )', () => {
    cy.get('[data-cy="("]').should('exist')
    cy.get('[data-cy=")"]').should('exist')
  })

  it('Should contain .', () => {
    cy.get('[data-cy="."]').should('exist')
  })

  it('Should contain C', () => {
    cy.get('[data-cy="C"]').should('exist')
  })

  it('Should ignore second operator when two operators are entered in a row', () => {
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="+"').click()
    cy.get('[data-cy="+"').click()
    cy.get('[data-cy="display"]').should('have.text', '5+')
    cy.get('[data-cy="C"').click()

    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="-"').click()
    cy.get('[data-cy="-"').click()
    cy.get('[data-cy="display"]').should('have.text', '5-')
    cy.get('[data-cy="C"').click()
    
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="*"').click()
    cy.get('[data-cy="*"').click()
    cy.get('[data-cy="display"]').should('have.text', '5*')
    cy.get('[data-cy="C"').click()

    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="/"').click()
    cy.get('[data-cy="/"').click()
    cy.get('[data-cy="display"]').should('have.text', '5/')
    cy.get('[data-cy="C"').click() 
  })

  it('Should ignore second dot when two dots are entered in a row', () => {
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="."').click()
    cy.get('[data-cy="."').click()
    cy.get('[data-cy="display"]').should('have.text', '5.')
    cy.get('[data-cy="C"').click()
  })

  it('Should delete last symbol when backspace is pressed', () => {
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="5"').click()
    cy.get('[data-cy="←"').click()
    cy.get('[data-cy="display"]').should('have.text', '5')
  })

})