/// <reference types="cypress" />

describe('Working with HTML elements', () => {

  before(() => {
    console.log('before')
  })

  beforeEach(() => {
    cy.visit('https://sea-turtle-app-phgrt.ondigitalocean.app/')    
  })

  afterEach(() => {
    console.log('afterEach')
  })

  after(() => {
    console.log('after')
  })
    

  it('checks title of the page', () => {  
    cy.get('h1').invoke('text').should('equal', 'UI Automation Testing with Cypress - General')
  })

  it('Checkbox Example', () => {  
    cy.get('[id="checkBoxOption1"]').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('[type="checkbox"]').check(['option2', 'option3'])
  })

  it('Radio buttons Example', () => { 
    cy.get('[value="radio1"]').check().should('be.checked') 
    cy.get('[value="radio2"]').should('not.be.checked') 
    cy.get('[value="radio3"]').should('not.be.checked') 

    cy.get('[value="radio2"]').check().should('be.checked') 
    cy.get('[value="radio1"]').should('not.be.checked') 
    cy.get('[value="radio3"]').should('not.be.checked') 
  })

  // Dropdown Example
  it('Dropdown Example', () => { 
    cy.get('select').select('option2').should('have.value', 'option2')
  })
})