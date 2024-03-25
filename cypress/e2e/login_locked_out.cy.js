describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
        it('Login with locked out user.', () => {
            cy.login('locked_out_user','secret_sauce');
            cy.get('[class="error-button"]').should('be.visible');
        });

})