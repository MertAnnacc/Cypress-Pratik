describe('Login Testi', () => {
    it('Login', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.cookieButton > a').click()
       // cy.get('.btn-sign-in-simple').click()

       // cy.contains('Log in').click()

        cy.contains('log in' , {matchCase:false}).click() // log in yazısına case sensitive durumuna bakmaksızın tıkladık


        cy.get('#login-email').type('random.net')
        cy.get('#login-password').type('lo3456.b{enter}')

    });
});