

import ProductsPage from "../pagobjects/products.page.ts";
import LoginPage from "../pagobjects/login.page.ts";

describe("Cause Demo", () => {
  it("Purchase an item", async () => {
    const username = "standard_user";
    const password = "secret_sauce";

    await LoginPage.open();
    await LoginPage.signIn(username, password);

    const firstProductPrice = await ProductsPage.getFirstProductPrice();
    await ProductsPage.addProductToCartByIndex(0);
    await ProductsPage.shoppingCart.click();

    await browser.pause(5000);
    
  });
});
