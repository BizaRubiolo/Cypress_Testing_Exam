const { faker } = require ('@faker-js/faker');

describe('Flujos de registro', () => {
    beforeEach(() => {
        cy.visit('auth/signup');
    });

    it('Registro de usuario exitoso con fixture', () => {
        cy.fixture('registroExam').then((usuario) => {
            const sufijoRandom = Math.floor(100 + Math.random() * 900);
            const email = `${usuario.emailpre}${sufijoRandom}@${usuario.dominio}`;
        cy.get('[name="email"]').type(email);
        cy.get('[name="name"]').type(usuario.nombre);
        cy.get('[name="password"]').type(usuario.password);
        cy.get('[name="repeatPassword"]').type(usuario.password);
        }
        )
        cy.get('[data-at="submit-signup"]').click();
        cy.get('#swal2-title').should('have.text', 'Operación Exitosa');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', 'auth/login');
    });

    it.only('Registro de usuario exitoso con Faker', () => {
        cy.get('[data-at="submit-signup"]').should('be.disabled');
        cy.get('[name="email"]').type(faker.internet.email());
        cy.get('[data-at="submit-signup"]').should('be.disabled');
        cy.get('[name="name"]').type(faker.person.fullName());
        cy.get('[data-at="submit-signup"]').should('be.disabled');
        let passWord = faker.internet.password({ length: 8 });
        cy.get('[name="password"]').type(passWord);
        cy.get('[data-at="submit-signup"]').should('be.disabled');
        cy.get('[name="repeatPassword"]').type(passWord);
        cy.get('[data-at="submit-signup"]').should('be.enabled');
        cy.get('[data-at="submit-signup"]').click();
        cy.get('#swal2-title').should('have.text', 'Operación Exitosa');
        cy.get('.swal2-confirm').click();
        cy.url().should('include', 'auth/login');
    });
    
});