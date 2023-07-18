describe('go komutu kullanimi', () => {
    it('', () => {
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('selenium{enter}')
        cy.go('back') // cy.go(-1) Aynı işlevi görüyor
        cy.wait(2000) // Bekeleme koyuyoruz
        cy.go('forward') // cy.go(1)  Aynı işlevi görüyor
        cy.reload()
    });
});