const email = 'bizarubiolo@gmail.com';
const password = '12345678?';
let token;
before(() => {
    cy.loginApi(email, password).then((response) => {
        cy.wrap(response.body.token).as('token');
    })
})

it('Agregar a favoritos', () => {
    cy.get('@token').then((token) => {
        cy.request({
            method: 'POST',
            url: 'http://api.laboratoriodetesting.com/api/v1/favorites',
            headers: {
                    Authorization: `Bearer ${token}`
                },
            body: {
                products: "7"
            }
    });
    });
});