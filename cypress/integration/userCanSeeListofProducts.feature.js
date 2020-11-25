/* eslint-disable no-undef */
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

    it("successfully", () => {
      cy.get("#index").within(() => {
        cy.contains("Hawaii");
        cy.contains("Margherita");
        cy.contains("Vesuvio");
      });
    });
  });

  describe("products", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/products",
        response: [],
      });
    });
    it("unsuccessfully", () => {
      cy.get("#index").should("not.exist");
      cy.get("#message").should("contain", "Sorry! Unfortunately we have issues with our menu")
    });
  });
});
