describe("Adding a product to create order", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_up",
      response: "fixture:successfull_sign_up.json",
      headers: {
        uid: "thomas@craft.com",
        access_token: "accesstoken",
        client: "12345",
        token_type: "Bearer",
        expiry: 1699999,
      },
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/products",
      response: "fixture:products.json",
    });
    cy.visit("/");
  });
});