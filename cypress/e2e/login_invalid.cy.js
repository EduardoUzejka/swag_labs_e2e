describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
        it('Login with invalid user.', () => {
            cy.login('invalidUser43','fakePass');
            cy.get('[class="error-button"]').should('be.visible');
        });
})