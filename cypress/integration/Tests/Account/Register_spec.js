describe('Register new user functionality', () => {
  beforeEach(() => {
  cy.visit('https://demo.saleor.io/')       
  cy.get('[data-testid=login-btn]').click()
})

  it('Check register tab', () => {   
   cy.contains('Register new account').should('be.visible')
  })
  
  it('Click register tab', () => {   
   cy.contains('Register new account').click() 
   cy.contains('Register').should('be.visible')
  })  

})
