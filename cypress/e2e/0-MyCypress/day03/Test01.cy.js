describe('Pozitif Login Testi', () => {
    it('pozitif login testi', () => {
        cy.visit('http://www.automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('have.text' , 'Login to your account')
        cy.get('.signup-form > h2').should('be.visible')
        cy.get('[data-qa="login-email"]').type('babayigit@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('have.text' , 'Login to your account')
    });
    it.only('negatif login testi', () => {
        cy.visit('http://www.automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('baba12@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('be.visible')
        
    });
});/*
TEST  – 1 Pozitif
1-  http://www.automationexercise.com 
2-  Signup/Login sayfasına git
3-  “Login to your account” yazısının bulunduğunu doğrula
4-  “New User Signup!” yazısının varlığını doğrula
5-  babayigit@gmail.com 123456 ile giriş yap
6-  Giriş yaptığını doğrula
7-  Çıkış yap
8-  Çıkış yapıldığını doğrula
TEST-2 Negatif
1-  http://www.automationexercise.com 
2-  Signup/Login sayfasına git
3-  baba71@gmail.com 123456 ile giriş yap
4-  Giriş yapılamadığını doğrula 
*/


