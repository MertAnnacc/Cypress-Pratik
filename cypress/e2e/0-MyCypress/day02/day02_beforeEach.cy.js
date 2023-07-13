
describe('', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com/')
        // cy.visit('/)
    });
    it('title', () => {
        cy.title().should('eq' , 'Google')
        cy.title().should('include' , 'Google')
        
    });
    it('url test' , () => {
        cy.url().should('eq' , 'google')
    })
});