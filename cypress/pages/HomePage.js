export class HomePage {
    openBurgerMenu() {
        cy.get('[data-element-type="burger-menu"]').click();
    }

    logout() {
        cy.contains("Log out").click();
    }
}
export default HomePage;