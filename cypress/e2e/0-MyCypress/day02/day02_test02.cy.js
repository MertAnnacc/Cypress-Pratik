
context('context kullanımı', () => {
    it('google', () => {
        cy.visit('https://www.trendyol.com')
    });
    it('title', () => {
        cy.visit('https://www.trendyol.com')
        cy.title().should('contain' , 'Trend')
    });
    
});