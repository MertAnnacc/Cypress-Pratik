describe('', () => {
    before(() => { // Tüm testlerden önce birkez çalışır
        cy.visit('https://www.google.com')
        
    });
    after(() => { // Tüm Testler (Tüm it blokları) tamamlandı
        cy.log('Tüm testler tamamlandı')
    });
    beforeEach(() => { // Her bir testten önce bir kez çalışır
        cy.log('Yeni test');
    });
    it('Google cypress', () => {    
        cy.get('#APjFqb').type('cypress{enter}')
        
    });
    afterEach(() => { // Her bir testen (it bloğu) sonra çalışır.
        cy.log('Bir test tamamlandı.Diğerine geçiliyor.')
        
    });
        
    
});