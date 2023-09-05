import BasePage from "./base.page.ts";

export class LoginPage extends BasePage {
    get username() {
    return  $("[data-test='username']");
  }
   get password() {
    return $("#password");
  }
   get loginButton() {
    return $("#login-button");
  }

  public async signIn(username: string, password: string) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.loginButton.click()
  }
}

export default new LoginPage();
