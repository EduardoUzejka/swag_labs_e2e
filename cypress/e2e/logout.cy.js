describe('Logout', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
        it('Logout successfully', () => {
            cy.login('standard_user','secret_sauce');
            cy.get('#react-burger-menu-btn').click();
            cy.get('#logout_sidebar_link').click();
            cy.url().should('eq', 'https://www.saucedemo.com/');
        })
})