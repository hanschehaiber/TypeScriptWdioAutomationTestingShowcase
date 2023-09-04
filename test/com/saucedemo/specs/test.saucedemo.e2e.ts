import ProductsPage from "../pagobjects/products.page.js";

describe("Cause Demo", () => {
  it("Purchase an item", async () => {
    // await browser.url("https://www.saucedemo.com/");
    await ProductsPage.open();
    // const firstProductPrice = ProductsPage.printSomething();
    // console.log("firstProductPrice = " + firstProductPrice);
    await browser.pause(5000);
  });
});
