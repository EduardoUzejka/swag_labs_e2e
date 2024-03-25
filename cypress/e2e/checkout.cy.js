describe('Checkout', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
        it('Complete checkout.', () => {
            cy.login('standard_user','secret_sauce');
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            cy.contains('.shopping_cart_link span', '1').should('be.visible').click();
            cy.contains('.title', 'Your Cart').should('be.visible');
            cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('be.visible');
            cy.get('[data-test="checkout"]').click();
            cy.contains('.title', 'Checkout: Your Information').should('be.visible');
            cy.get('[data-test="firstName"]').type('standard_user')
            cy.get('[data-test="lastName"]').type('standard_user');
            cy.get('[data-test="postalCode"]').type('5555555');
            cy.get('[data-test="continue"]').click();
            cy.contains('.title', 'Checkout: Overview').should('be.visible');
            cy.contains('.summary_total_label', '32.39').should('be.visible');
            cy.get('[data-test="finish"]').click();
            cy.contains('.complete-header', 'Thank you for your order!').should('be.visible');
            cy.contains('.shopping_cart_link span', '1').should('not.exist');
        });
})

