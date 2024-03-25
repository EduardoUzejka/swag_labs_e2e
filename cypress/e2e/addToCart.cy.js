describe('Add to Cart', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
        it('Add item to user cart.', () => {
            cy.login('standard_user','secret_sauce');
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            cy.contains('.shopping_cart_link span', '1').should('be.visible');
            cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
            cy.contains('.shopping_cart_link span', '2').should('be.visible');
        });
})

