import BasePage from "./base.page.ts";

export class LoginPage extends BasePage {
  get username() {
    return $("[data-test='username']");
  }
  get password() {
    return $("#password");
  }
  get loginButton() {
    return $("#login-button");
  }
}

export default new LoginPage();
