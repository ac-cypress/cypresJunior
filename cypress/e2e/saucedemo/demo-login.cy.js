/// <reference types="cypress" />

describe('SauceDemo Page', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')    
  })

  it('Simple login test', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="title"]').should('have.text', 'Products')
  })

})