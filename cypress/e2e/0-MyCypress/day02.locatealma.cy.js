describe('Locate alma', () => {
    it('cy.get komutu', () => {
        cy.visit('/')
        cy.get('a#nav-orders > span.nav-line-2').click()

        
    });
});