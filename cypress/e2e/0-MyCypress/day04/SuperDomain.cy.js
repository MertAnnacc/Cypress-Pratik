/// <reference types="Cypress" />

describe('Super Domain', () => {
    it('Aynı Classta iki farkli visit hata veriyor', () => {
        cy.visit('https://www.google.com')
        cy.visit('https://www.amazon.com')
    });
    it('Farklı classta sıkıntı olmuyor', () => {
        cy.visit('https://www.amazon.com')
    });
});