import BasePage from "./base.page.ts";

export class ProductsPage extends BasePage {
  async getFirstProductPrice() {
    return await $$("[class='inventory_list'] > div")[0]
      .$("[class='inventory_item_price']")
      .getText();
  }
}

export default new ProductsPage();
