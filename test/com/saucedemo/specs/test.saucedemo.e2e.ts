import ProductsPage from "../pagobjects/products.page.ts";
import LoginPage from "../pagobjects/login.page.ts";
import ShoppingCartPage from "../pagobjects/shopping.cart.page.ts";
import CheckoutInfoPage from "../pagobjects/checkout.info.page.ts";
import CheckoutOverviewPage from "../pagobjects/checkout.overview.page.ts";
import CheckoutCompletePage from "../pagobjects/checkout.complete.page.ts";

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

    await expect(CheckoutOverviewPage.subtotal).toHaveTextContaining(
      firstProductPrice
    );

    await CheckoutOverviewPage.finish.click();
    const expectedMessage =
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
    await expect(CheckoutCompletePage.completeText).toHaveTextContaining(
      expectedMessage
    );
  });
});
