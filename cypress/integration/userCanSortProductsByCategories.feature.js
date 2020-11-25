describe("User can see list of", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  describe("products", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/products",
        response: "fixture:products.json",
      });
    });

    it("sorted by categories", () => {
      cy.get('[data-cy="dropdown"]').click();
      cy.get("[role='option']").contains('Meat').should('exist');
    });
  });
})