/// <reference types="cypress" />

describe('Navbar Test', function() {
    before(() => {
        cy.clearAllLocalStorage()
        cy.clearAllCookies()
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('#online_banking_features').should('be.visible')
        cy.get('#account_summary_link').should('have.class', 'headers')
    })
    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('.signin-controls').should('be.visible')
        cy.get('[class=pull-right]').should('be.visible')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.get('.carousel-inner').should('be.visible')
    });
    
});
    

