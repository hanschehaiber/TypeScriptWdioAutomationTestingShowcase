import ProductsPage from "../pagobjects/products.page.ts";
import LoginPage from "../pagobjects/login.page.ts";
import ShoppingCartPage from "../pagobjects/shopping.cart.page.ts";
import CheckoutInfoPage from "../pagobjects/checkout.info.page.ts";

describe("Cause Demo", () => {
  it("Purchase an item", async () => {
    const username = "standard_user";
    const password = "secret_sauce";
    const firstName = "John";
    const lastName = "Smith";
    const postalCode = "12345";

    await LoginPage.open();
    await LoginPage.signIn(username, password);

    const firstProductPrice = await ProductsPage.getFirstProductPrice();
    await ProductsPage.addProductToCartByIndex(0);
    await ProductsPage.shoppingCart.click();

    await expect(await ShoppingCartPage.cartItems.length).toEqual(1);
    await ShoppingCartPage.checkout.click();

    await CheckoutInfoPage.fillOutAndSubmitCheckoutInfo(
      firstName,
      lastName,
      postalCode
    );

    await browser.pause(5000);
  });
});
