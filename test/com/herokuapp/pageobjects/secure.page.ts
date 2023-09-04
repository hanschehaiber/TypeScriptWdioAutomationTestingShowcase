import BasePage from "./base.page.ts";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends BasePage {
  /**
   * define selectors using getter methods
   */
  public get flashAlert() {
    return $("#flash");
  }
}

export default new SecurePage();
