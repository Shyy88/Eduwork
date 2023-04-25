describe('Update User', () => {
    it('Succesfully update user', () => {
        const user = {
            'name': 'Billy',
            'job': 'Entertainer'
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(202)
            expect(response.body).to.have.property('job', 'Entertainer')
        })

    }) 
})