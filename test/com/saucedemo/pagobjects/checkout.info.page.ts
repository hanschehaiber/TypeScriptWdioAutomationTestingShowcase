import BasePage from "./base.page.ts";

class CheckoutInfoPage extends BasePage {
  get firstName() {
    return $("#first-name");
  }
  get lastName() {
    return $("#last-name");
  }
  get postalCode() {
    return $("#postal-code");
  }
  get continueButton() {
    return $("#continue");
  }

  async fillOutAndSubmitCheckoutInfo(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.postalCode.setValue(postalCode);
    await this.continueButton.click();
  }
}

export default new CheckoutInfoPage();
