export default class BasePage {
  public open() {
    return browser.url(`https://www.saucedemo.com/`);
  }
  public get shoppingCart() {
    return $("[class='shopping_cart_link']");
  }
}
