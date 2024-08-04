import LoginPage from '../pages/Login';
import HomePage from '../pages/HomePage'

describe("Test2.1", () => {
    it("Logowanie i wylogowanie", () => {
        const loginPages = new LoginPage();
        const homePages = new HomePage();

        loginPages.visit();
        loginPages.fillEmail("testowyqa@qa.team");
        loginPages.fillPassword("QA!automation-1");
        loginPages.submit();
        homePages.openBurgerMenu();
        homePages.logout();
    });
});