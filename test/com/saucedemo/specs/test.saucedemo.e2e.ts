import ProductsPage from "../pagobjects/products.page.ts";
import LoginPage from "../pagobjects/login.page.ts";

describe("Cause Demo", () => {
  it("Purchase an item", async () => {
    const username = "standard_user";
    const password = "secret_sauce";
    await LoginPage.open();
    await LoginPage.username.setValue(username);
    await LoginPage.password.setValue(password);
    await LoginPage.loginButton.click();
    await browser.pause(5000);

    const firstProductPrice = await ProductsPage.getFirstProductPrice();
    console.log("firstProductPrice = " + firstProductPrice);
  });
});
