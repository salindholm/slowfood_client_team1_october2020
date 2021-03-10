/* eslint-disable no-undef */
describe('Users can add products to order', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/products',
      response: 'fixture:products_index.json',
    });
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth',
      response: 'fixture:user_registration.json',
    });
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/orders',
      response: 'fixture:product_added.json',
    });
    cy.route({
      method: 'PUT',
      url: 'http://localhost:3000/api/orders/**',
      response: 'fixture:second_product_added.json',
    });
    cy.visit('/');
    cy.get("[data-cy='register-email']").type('user@mail.com');
    cy.get("[data-cy='register-password']").type('password');
    cy.get("[data-cy='register-password-confirmation']").type('password');
    cy.get("[data-cy='submit']").click();
  });
  it('successfully adding first product', () => {
    cy.get("[data-cy='add-to-order-button1']").click();
    cy.get("[data-cy='order-message']").should(
      'contain',
      'The product has successfully been added to your order!'
    );
    cy.get("[data-cy='items-count-message']").should(
      'contain',
      'You have 1 item in your order'
    );
  });
  it('successfully adding second product', () => {
    cy.get("[data-cy='add-to-order-button1']").click();
    cy.get("[data-cy='add-to-order-button2']").click();
    cy.get("[data-cy='order-message']").should(
      'contain',
      'The product has successfully been added to your order!'
    );
    cy.get("[data-cy='items-count-message']").should(
      'contain',
      'You have 2 items in your order'
    );
  });
});
