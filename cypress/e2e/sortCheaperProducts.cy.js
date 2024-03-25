describe('Sort Products', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
    
    it('Sort cheaper products', () => {
        cy.login('standard_user','secret_sauce');
        cy.get('[data-test="product_sort_container"]').select('lohi');
        cy.get('.inventory_item_price').first().should('contain', '$7.99');
        cy.get('.inventory_item_price').last().should('contain', '$49.99');
    })
})