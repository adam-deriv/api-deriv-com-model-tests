context("Perormance and Accessibility", () => {
  it("should pass the audits", function () {
    cy.visit('https://api.deriv.com/').then(() => {
      cy.lighthouse();
      cy.pa11y();
    })
  });
});
