describe('Visitors can see a list of products', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/products',
      response: 'fixture: products_index.json',
    })
    cy.visit('/')
  })
  it('successfully', () => {
    cy.get("[data-cy='products-index']").within(() => {
      cy.contains('Margarita')
      cy.contains('Vesuvio')
      cy.contains('Hawaii')
      cy.contains('Pepperoni')
      cy.contains('Calzone')
    })
  })
})
