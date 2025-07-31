describe('Login API', () => {

    it('Login con POST', () => {
        const email = 'bizarubiolo@gmail.com';
        const password = '12345678?';
        cy.loginApi(email, password).then((response) => {
            expect(response.status).to.eq(201);
            cy.log(JSON.stringify(response.body));
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('email'); 
            expect(response.body).to.have.property('token');
            expect(response.body).to.have.property('role'); 
            expect(response.body).to.have.property('createdAt');
            expect(response.body.token).to.be.a('string').and.to.have.length.greaterThan(15);
        })
    });
});