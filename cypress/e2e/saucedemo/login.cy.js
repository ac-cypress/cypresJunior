/// <reference types="cypress" />
import { LoginPage } from "../pageObjects/pages/LoginPage";
import { ProductsPage } from "../pageObjects/pages/ProductsPage";

describe('SauceDemo Login Page Tests', () => {

  // beforeEach(() => {
  //   cy.visit('https://www.saucedemo.com/')    
  // })

  it('Login with valid user', () => {
    LoginPage.openLoginPage()
    LoginPage.inputUsername('standard_user')
    LoginPage.inputPassword()
    LoginPage.clickLoginButton()
    ProductsPage.productsPageIsVisible()
  })

  // it('Trying to login with locked user', () => {

  // })

  // it('Trying to login with invalid user', () => {

  // })

  // it('Trying to login without any credential input', () => {

  // })

  // it('Clasing error message', () => {

  // })
})
