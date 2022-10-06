context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should go to settings page', () => {
    cy.contains('Settings').click()
    cy.url().should('include', '/settings')
  })

  it('Should go to Home(CC) page', () => {
    cy.contains('Home(CC)').click()
    cy.url().should('include', '/homecc')
  })

  it('Should stay on the last page after reload', () => {
    cy.contains('Home(CC)').click()
    cy.reload()
    cy.url().should('include', '/homecc')
  })

  it('Should go back to the previous page', () => {
    cy.contains('Home(CC)').click()
    cy.contains('Settings').click()
    cy.go('back')
    cy.url().should('include', '/homecc')
  })

  it('Should go forward to the next page', () => {
    cy.contains('Home(CC)').click()
    cy.contains('Settings').click()
    cy.go('back')
    cy.go('forward')
    cy.url().should('include', '/settings')
  })
})