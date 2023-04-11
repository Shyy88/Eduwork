/// <reference types="cypress" />

describe('Searchbox Test', function() {
    before(() => {
        cy.clearAllLocalStorage()
        cy.clearAllCookies()
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Shoul type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    })

    it('Should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
        cy.get('a[href]')
        .should('have.attr', 'href')
        .and('contain', '/')
    })
})