import BasePage from "./base.page.js";

export class ProductsPage extends BasePage {
  async getFirstProductPrice() {
    return await $$("[class='inventory_list'] > div")[0]
      .$("[class='inventory_item_price']")
      .getText();
  }

  public printSomething() {
    console.log("PRINTING SOMETHING");
  }
}

export default new ProductsPage();
