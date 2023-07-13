describe('', () => {
    it('Login', () => {
        cy.visit('https://qa.qualitydemy.com/')
        cy.get('.cookieButton > a').click()

        // ASSERTION

        //1 have text

        cy.get('.btn-sign-in-simple').should('have.text' , 'Log in')

        //2 cy.url().should()
        cy.contains('Log in').click()
        cy.url().should('include' , 'login')

        //3 cy.title().should()
        cy.contains('Log in').click()
        cy.title().should('include' , 'Login')

        //4 be.visible

        cy.get('.text-14px').should('be.visible')

        //5 include text

        cy.get('.btn-sign-in-simple').should('include.text' , 'Log')

        
    });
});