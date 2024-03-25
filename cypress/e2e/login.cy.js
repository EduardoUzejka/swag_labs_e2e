describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })
        it('Login to the system successfully.', () => {
            cy.login('standard_user','secret_sauce');
            cy.contains('.title', 'Products').should('be.visible');
        })
})