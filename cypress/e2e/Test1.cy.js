describe("Test1", () => {
    it("Logowanie i wylogowanie", () => {
      cy.visit("https://www.edu.goit.global/account/login");
      cy.get("#user_email").type("user888@gmail.com");  
      cy.get("#user_password").type("1234567890");
      cy.get('[type="submit"]').click()
      cy.get('[data-element-type="burger-menu"]').click()
      cy.contains("Log out").click()
    })
  });