import { User } from "models";

describe("Cypress Studio Demo", function() {
  beforeEach(function() {
    cy.task("db:seed");

    cy.database("find", "users").then((user: User) => {
      cy.login(user.username, "s3cret", true);
    });
  });

  it("create new transaction", function() {
    // cy.get("[data-test=nav-personal-tab] > .MuiTab-wrapper").click();
    cy.getBySelLike("nav-personal-tab").click();
    cy.get(".MuiButton-label").click();
    cy.contains("Ibrahim Dickens").click();
    cy.get("#amount").type("5");
    cy.getBySelLike("transaction-create-description-input").click().type("Sushi dinner :)");
    // cy.get("#transaction-create-description-input").click().type("Sushi dinner :)");
    cy.getBySelLike("transaction-create-submit-payment").click({ force: true });
    // cy.get("[data-test=transaction-create-submit-payment] > .MuiButton-label").click({ force: true });
    cy.getBySelLike("alert-bar-success").should("contain", "Transaction Submitted!");
  });

});