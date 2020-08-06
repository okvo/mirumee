describe('Logging functionality', () => {
  beforeEach(() => {
  cy.visit('https://demo.saleor.io/')       
  cy.get('[data-testid=login-btn]').click()
})

  it('Check signin btn', () => {   
   cy.contains('Sign in').should('be.visible')
  })
  
  it('Check signin in with valid credentials', () => {   
   cy.get('button[type="submit"]').click() 
   cy.contains('Sign in').should('not.be.visible')
   cy.get('[data-testid=user-btn]').should('be.visible')
  })
  
  it('Log out', () => {
   cy.get('button[type="submit"]').click() 
   cy.contains('Sign in').should('not.be.visible')
   cy.get('[data-testid=user-btn]').click()
   cy.contains('Log Out').click()
   cy.get('[data-testid=login-btn]').should('be.visible')
   
  })
  
  it('Close logging window', () => {
   cy.get('[class=overlay__header__close-icon]').click()
   cy.contains('Sign in').should('not.be.visible')
   cy.get('[data-testid=login-btn]').should('be.visible')
   
  })

})
