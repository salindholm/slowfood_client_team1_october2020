describe('Users can add products to order', () => {
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
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/orders',
      response: {
        message: 'The product has successfully been added to your order!',
      },
    })
    cy.visit('/')
    cy.get("[data-cy='register-email']").type('user@mail.com')
    cy.get("[data-cy='register-password']").type('password')
    cy.get("[data-cy='register-password-confirmation']").type('password')
    cy.get("[data-cy='submit']").click()
  })
  it('successfully', () => {
    cy.get("[data-cy='add-to-order-button']").click()
    cy.get("[data-cy='order-message']").should(
      'contain',
      'The product has successfully been added to your order!'
    )
  })
})
