/// <reference types="Cypress" />

describe('Hover Over', () => {
    it('', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover') // Üzerine mouse ile gelince menü açar 
        cy.get('div#nav-flyout-icp span > div').click()
        cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text').click()
        cy.get('#icp-dropdown_18').click()
        cy.get('.a-button-input').click()
    });
    it.only('', () => {
        cy.visit('https://www.amazon.com/')
        cy.wait(4000)
        cy.reload()  // sayfayı refresh eder
        cy.wait(4000)
        cy.reload(true) // sayfayı 0'dan açar
    });
});