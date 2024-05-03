export class BasePage {

    static openBasePage() {
        // cy.visit('/')
        cy.visit('https://www.saucedemo.com/')
    }

    static type(selector, text) {
        cy.get(selector).type(text)
    }

    static click(selector) {
        cy.get(selector).click()
    }

    static clickFirst(selector) {
        cy.get(selector).first().click()
    }

    static clickLast(selector) {
        cy.get(selector).last().click()
    }

    static isVisible(selector) {
        cy.get(selector).should('be.visible')
    }

    static hasText(selector, text) {
        cy.get(selector).should('have.text', text)
    }
}