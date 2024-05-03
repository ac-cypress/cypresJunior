import { BasePage } from "../BasePage";

const PAGE_TITLE = '[data-test="title"]'
const INVENTORY_CONTAINER = '[data-test="inventory-container"]'
const INVENTORY_ITEM_NAMES = '[data-test="inventory-item-name"]'
const ADD_TO_CART_BUTTONS = '[data-test="inventory-item-price"] + button'


export class ProductsPage extends BasePage {

    static productsPageIsVisible() {
        BasePage.hasText(PAGE_TITLE, 'Products')
        BasePage.isVisible(INVENTORY_CONTAINER)
    }

    static addFirstItemToTheCart() {
        cy.get(INVENTORY_ITEM_NAMES)
            .first()
            .then((itemName)=>{
                cy.wrap(itemName.text()).as('addedItemText')
            })
        BasePage.clickFirst(ADD_TO_CART_BUTTONS)
    }
}