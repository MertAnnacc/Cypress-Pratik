describe('Temel Cypress Komutları', () => {
    it('cy.visit komutu', () => {
        cy.visit('https://www.google.com')  // base url tanımlı değilse bu şekilde kullanılıyor
        cy.visit('/')
        cy.visit('/gift-cards')
    });

    it('cy.visit komutu.2', () => {
        cy.visit('/sells')
        
    });

    it('cy.title komutu', () => {
        cy.visit('/') // baseUrl adrese gider
        cy.title().should('eq' , 'Amazon.com. Spend less. Smile more.') // Title ile aynı mı birebir
        cy.title().should('include' , 'Spend') // Title içinde var mı
        cy.title().should('contains' , 'Amazon')

    });

    it.only('cy.url ve cy.location', () => { // only sadece bu testi çalıştırır. Skip ise bu testi çalıştırmadan geçer
        cy.visit('/')
        cy.url().should('eq' , 'https://www.amazon.com/')
        cy.url().should('include' , 'amazon')
        
    });
});