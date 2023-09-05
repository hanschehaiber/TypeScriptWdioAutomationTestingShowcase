import BasePage from "./base.page.ts";

class CheckoutOverviewPage extends BasePage {
  get subtotal() {
    return $("[class=summary_subtotal_label]");
  }
  get finish() {
    return $("#finish");
  }
}

export default new CheckoutOverviewPage();
