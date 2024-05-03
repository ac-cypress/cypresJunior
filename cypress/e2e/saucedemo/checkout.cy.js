/// <reference types="cypress" />
import { LoginPage } from "../pageObjects/pages/LoginPage";
import { ProductsPage } from "../pageObjects/pages/ProductsPage"
import { CartPage } from "../pageObjects/pages/CartPage";

describe('SauceDemo Checkout Page Tests', () => {

  it('Adding an item to the cart', () => {
    LoginPage.openLoginPage()
    LoginPage.inputUsername('standard_user')
    LoginPage.inputPassword()
    LoginPage.clickLoginButton()
    ProductsPage.productsPageIsVisible()

    ProductsPage.addFirstItemToTheCart()
    cy.get('[data-test="shopping-cart-link"]').click()
    CartPage.cartPageIsVisibe()
    CartPage.verifyFirstAddedItem()
  })
})
