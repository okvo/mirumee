describe('Check Home Page - logged out user/guest', () => {
  beforeEach(() => {
  cy.visit('https://demo.saleor.io/')
})
  it('Check Accessories category URL', () => {
    cy.contains('Accessories').click()
	cy.url().should('include', '/category/accessories/')
  })
  
  it('Check groceries category URL', () => {
	cy.contains('Groceries').click()
	cy.url().should('include', '/category/groceries/')
  })
  
  it('Check apparel category URL', () => {
	cy.contains('Apparel').click()
	cy.url().should('include', '/category/apparel/')
  })
 
  
  it('Check title', () => {
	cy.title().should('contain', 'Demo PWA');
  })
  
  it('Check login icon', () => {
	cy.get('[data-testid=login-btn]').click()
	cy.contains('Sign in').should('be.visible')
  })
    
})