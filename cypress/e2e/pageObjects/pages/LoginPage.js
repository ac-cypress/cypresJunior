import { BasePage } from "../BasePage";

const USERNAME_FIELD = '[data-test="username"]'
const PASSWORD_FIELD = '[data-test="password"]'
const LOGIN_BUTTON = '#login-button'


export class LoginPage extends BasePage {
    
    static openLoginPage() {
        BasePage.openBasePage()
    }

    static inputUsername(username) {
        BasePage.type(USERNAME_FIELD, username)
    }

    static inputPassword() {
        BasePage.type(PASSWORD_FIELD, 'secret_sauce')
    }

    static clickLoginButton() {
        BasePage.click(LOGIN_BUTTON)
    }

}