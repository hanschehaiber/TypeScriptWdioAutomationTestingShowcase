import BasePage from "./base.page.ts";

class ShoppingCartPage extends BasePage {
  get cartItems() {
    return $$("[class='cart_item']");
  }
  get checkout() {
    return $("[data-test='checkout']");
  }
}

export default new ShoppingCartPage();
