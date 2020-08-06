describe('Check Home Page - logged in user', () => {
  beforeEach(() => {
  cy.visit('https://demo.saleor.io')
  cy.get('[data-testid=login-btn]').click()
  cy.get('button[type="submit"]').click() 
  cy.get('[data-testid=user-btn]').should('be.visible')
})
  
  it('Check if dropdown menu is visible', () => {
	cy.get('[data-testid=user-btn]').click()
	cy.get('[class="main-menu__dropdown"]').should('be.visible')
  })
  
  it('Check if logout option is present in dropdown', () => {
	cy.get('[data-testid=user-btn]').click()
	cy.contains('Log Out').should('be.visible')
  })
  	
})