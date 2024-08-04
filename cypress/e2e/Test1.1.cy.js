import LoginPage from '../pages/Login';
import HomePage from '../pages/HomePage'

describe("Test2.1", () => {
    it("Logowanie i wylogowanie", () => {
        const loginPages = new LoginPage();
        const homePages = new HomePage();

        loginPages.visit();
        loginPages.fillEmail("user888@gmail.com");
        loginPages.fillPassword("1234567890");
        loginPages.submit();
        homePages.openBurgerMenu();
        homePages.logout();
    });
});
