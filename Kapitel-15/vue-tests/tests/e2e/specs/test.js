// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "cart is visible with app start": (browser) => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent(".header-cart")
      .assert.containsText("h4", "Ihr Warenkorb")
      .end();
  },
};
