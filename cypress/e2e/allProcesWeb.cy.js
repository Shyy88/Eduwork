/// <reference types="cypress" />

describe('Web Test', function() {

    before(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://www.saucedemo.com/')
    });

    it('Should try to login with invalid data', () => {
        cy.get('.form_group').should('be.visible')
        cy.get('#user-name').type('invalid usn')
        cy.get('#password').type('invalid password')
        cy.get('input[name="login-button"]').click()
    });

    it('Should display error message', () => {
        cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    
    });

    it('Should login to web with valid data', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)
            cy.get('#password').clear()
            cy.get('#password').type(password)
            cy.get('input[name="login-button"]').click()

            cy.url().should('include', 'inventory.html')
            cy.contains('Products').should('be.visible')

        })
    });
    
    it('Should display Product Sort', () => { 
        cy.get('.product_sort_container').should('be.visible')
    });

    it('Should display sort of Name', () => {
        cy.get('.product_sort_container').select('Name (A to Z)').should('have.value', 'az')
        cy.get('.active_option').should('have.text', 'Name (A to Z)')
        
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get('.active_option').should('have.text', 'Name (Z to A)')
    });

    it('Should display sort of Price', () => {
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.active_option').should('not.have.text', 'Price (high to low)')
        
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get('.active_option').should('not.have.text', 'Price (low to high)')
    });

    it('Should try to add cart', () => {
        cy.get('#item_4_title_link').should('contain.text', 'Sauce Labs Backpack').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('be.visible')
        
    });
    
    it('Should try to remove product', () => {
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').should('not.have.class', 'shopping_cart_badge')
    });

    it('Should logout from the web', () => {
        cy.get('#back-to-products').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('.form_group').should('be.visible')
        
    });


});