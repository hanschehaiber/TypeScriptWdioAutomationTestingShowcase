import BasePage from "./base.page.ts";

class CheckoutCompletePage extends BasePage {
  get completeText() {
    return $("[class='complete-text']");
  }
}

export default new CheckoutCompletePage();
