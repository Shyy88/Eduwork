describe('Create User', () => {
    it('Succesfully create new user', () => {
        const user = {
            'name': 'Stardom',
            'job': 'Entertainer'
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', 'Stardom')
        })

    }) 
})