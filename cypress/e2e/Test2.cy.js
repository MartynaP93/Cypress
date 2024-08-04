describe("Test2", () => {
    it("Logowanie i wylogowanie", () => {
      cy.visit("https://www.edu.goit.global/account/login");
      cy.get("#user_email").type("testowyqa@qa.team");  
      cy.get("#user_password").type("QA!automation-1");
      cy.get('[type="submit"]').click()
      cy.get('[data-element-type="burger-menu"]').click()
      cy.contains("Log out").click()
    })
  });