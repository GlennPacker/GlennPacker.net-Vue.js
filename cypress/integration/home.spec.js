describe('home page', () => {
    it('should render with a title', () => {
        cy.visit(`${ Cypress.env().url }`);
        cy.get('img');
    })
})