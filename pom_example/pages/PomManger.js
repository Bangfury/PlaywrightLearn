import LoginPage from "./LoginPage.js";
import CommonActions from "../utils/CommonActions.js";
import SecurePage from "./SecurePage.js";
import CheckboxesPage from "./CheckboxesPage.js";

export default class PomManger {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page)
        this.checkboxesPage = new CheckboxesPage(page)
        this.securePage = new SecurePage(page)
    }
}