

describe('', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('google arama', () => {
        cy.get('textarea#APjFqb').type('selam{enter}')
    });
});