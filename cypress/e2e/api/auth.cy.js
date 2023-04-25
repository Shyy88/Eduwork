describe('Basic Auth', () => {
    it('Succesfully login by appending username and password in URL', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('contain.text', '\n    Congratulations! You must have the proper credentials.\n')
    });
    
    it('Succesfully login using header', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            headers: {
                authorization: 'Basic YWRtaW46YWRtaW4='
            },
            failOnStatusCode: false
        })
        cy.get('p').should('contain.text', '\n    Congratulations! You must have the proper credentials.\n')
    })
    it('Succesfully Login Via API', () => {
       cy.loginViaAPI()
   })
})