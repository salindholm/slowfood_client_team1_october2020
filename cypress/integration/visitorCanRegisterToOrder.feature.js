describe('Visitors can register an account', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/products',
      response: 'fixture:products_index.json',
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth',
      response: 'fixture:user_registration.json',
    })
    cy.visit('/')
  })
  it('successfully', () => {
    cy.get("[data-cy='register-email']").type('user@mail.com')
    cy.get("[data-cy='register-password']").type('password')
    cy.get("[data-cy='register-password-confirmation']").type('password')
    cy.get("[data-cy='submit']").click()
    cy.get("[data-cy='register-message']").should(
      'contain',
      'Welcome user@mail.com'
    )
  })
})
