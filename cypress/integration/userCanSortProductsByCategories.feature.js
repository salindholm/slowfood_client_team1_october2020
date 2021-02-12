describe("User can see", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/products",
      response: "fixture:products.json",
    });

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/categories/**",
      response: "fixture:veggie_request.json",
    });
    cy.visit("/");
  });
  it("all products", () => {
    cy.get("#index").should("contain", "Vesuvio");
    cy.get("#index").should("contain", "Margherita");
  });

  it("only veggie products", () => {
    cy.get('[data-cy="dropdown"]').click();
    cy.get("[role='option']").contains("Veggie").click();
    cy.get("#index").should("not.contain", "Vesuvio");
    cy.get("#index").should("contain", "Margherita");
  });

  it("can see all products again", () => {
    cy.get('[data-cy="dropdown"]').click();
    cy.get("[role='option']").contains("View All").click();
    cy.get("#index").should("contain", "Vesuvio");
    cy.get("#index").should("contain", "Margherita");
  });
});