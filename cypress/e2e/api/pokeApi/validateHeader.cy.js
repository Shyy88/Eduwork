/// <reference types="cypress" />

describe('Automation API with PokeAPI', () => {
    
    it('Succesfully validate header content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
        cy.get('@pokemon').its('body').should('have.property', 'forms')
        cy.get('@pokemon').its('body').should('have.property', 'base_experience', 101)
        
    });
    
    it('Succesfully validate status code', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').its('status').should('equal', 200)
    });
// sangat penting untuk validate status karna memberitahu kita informasi tentang permintaan yang dibuat oleh kita untuk server. bila gagal kita dapat mengetahui mengapa bisa gagal.
    it.only('Succesfully validate content', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('ditto')
        cy.get('@ditto').then((response) => {
            expect(response.body.ability).to.eq(undefined)
    })
    });
})


