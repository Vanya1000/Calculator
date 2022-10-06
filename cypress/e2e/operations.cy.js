
context('Arithmetic operations Function Components', () => {
  it('Division should work', () => {
    cy.visit('/')
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="/"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '3')
  })

  it('Multiplication should work', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="*"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '27')
  })

  it('Subtraction should work', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="-"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '6')
  })

  it('Addition should work', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '12')
  })

  it('Should work for expressions', () => {
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="*"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '14')
  })

  it('Should work for expressions with brackets', () => {
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="*"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="("]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy=")"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '14')
  }) 
  it('Should work for nested expressions with brackets', () => {
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="*"]').click()
    cy.get('[data-cy="("]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="("]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy=")"]').click()
    cy.get('[data-cy=")"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '24')
  })

  it('Should work for numbers with decimals', () => {
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="."]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="."]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '5.600') 
  })

  it('Should work for numbers with decimals without 0', () => {
    cy.get('[data-cy="."]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="."]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '0.500')
  })

  it('When dividing zero by zero, it should return an error', () => {
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="/"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', 'Error')
  })

  it('When dividing by zero, it should return an error', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="/"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', 'Error')
  })
})

context('Arithmetic operations Class Components', () => {
  it('Division should work', () => {
    cy.visit('/homeCC')
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="/"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '3')
  })

  it('Multiplication should work', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="*"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '27')
  })

  it('Subtraction should work', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="-"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '6')
  })

  it('Addition should work', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '12')
  })

  it('Should work for expressions', () => {
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="*"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '14')
  })

  it('Should work for expressions with brackets', () => {
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="*"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="("]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy=")"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '14')
  }) 
  it('Should work for nested expressions with brackets', () => {
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="*"]').click()
    cy.get('[data-cy="("]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="("]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy=")"]').click()
    cy.get('[data-cy=")"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '24')
  })

  it('Should work for numbers with decimals', () => {
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="."]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="."]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '5.600') 
  })

  it('Should work for numbers with decimals without 0', () => {
    cy.get('[data-cy="."]').click()
    cy.get('[data-cy="3"]').click()
    cy.get('[data-cy="+"]').click()
    cy.get('[data-cy="."]').click()
    cy.get('[data-cy="2"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', '0.500')
  })

  it('When dividing zero by zero, it should return an error', () => {
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="/"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', 'Error')
  })

  it('When dividing by zero, it should return an error', () => {
    cy.get('[data-cy="9"]').click()
    cy.get('[data-cy="/"]').click()
    cy.get('[data-cy="0"]').click()
    cy.get('[data-cy="="]').click()
    cy.get('[data-cy="display"]').should('have.text', 'Error')
  })
})





