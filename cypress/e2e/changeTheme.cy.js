context('Change dark theme', () => {
  beforeEach(() => {
    cy.visit('/settings')
    cy.get('select').select('dark')
  }) 

  it('Should change theme to dark', () => {
    cy.get('select').should('have.value', 'dark')
  })

  it('Should be a dark gray header background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(51, 51, 51)')
  })

  it('Should be a black header background color', () => {
    cy.get('header').should('have.css', 'background-color', 'rgb(0, 0, 0)')
  })

})

context('Change light theme', () => {
  beforeEach(() => {
    cy.visit('/settings')
    cy.get('select').select('light')
  }) 

  it('Should change theme to light', () => {
    cy.get('select').should('have.value', 'light')
  })

  it('Should be a light gray header background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(245, 245, 245)')
  })

  it('Should be a dark gray header background color', () => {
    cy.get('header').should('have.css', 'background-color', 'rgb(51, 51, 51)')
  })

})

context('Change colored theme', () => {
  beforeEach(() => {
    cy.visit('/settings')
    cy.get('select').select('colored')
  }) 

  it('Should change theme to colored', () => {
    cy.get('select').should('have.value', 'colored')
  })

  it('Should be a white header background color', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(245, 245, 245)')
  })

  it('Should be a aquamarine header background color', () => {
    cy.get('header').should('have.css', 'background-color', 'rgb(0, 137, 123)')
  })

})
