describe("User can view list of products", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  describe("displays products", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/products",
        response: "fixtures:products.json",
      });
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

describe("displays no products", () => {
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
  });
});
