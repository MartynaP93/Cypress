export class LoginPage {
    visit() {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    fillEmail(email) {
        cy.get("#user_email").type(email);
    }

    fillPassword(password) {
        cy.get("#user_password").type(password);
    }

    submit() {
        cy.get('[type="submit"]').click();
    }

}
export default LoginPage;