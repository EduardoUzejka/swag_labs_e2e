describe('Remove from Cart', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
        it('Remove item to user cart.', () => {
            cy.login('standard_user','secret_sauce');
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            cy.get('[data-test="remove-sauce-labs-backpack"]').click();
            cy.contains('.shopping_cart_link span', '1').should('not.exist');
        });
})

