const { faker } = require ('@faker-js/faker');

describe('Flujos de registro', () => {
    beforeEach(() => {
        cy.visit('auth/login');
    });

    it('Login exitoso y boton deshabilitado', () => {
        cy.get('[data-at="submit-login"]').should('be.disabled');
        cy.fixture('loginExam').then((usuario) => {
            cy.get('[name="email"]').type(usuario.email);
            cy.get('[data-at="submit-login"]').should('be.disabled');
            cy.get('[name="password"]').type(usuario.password);
            cy.get('[data-at="submit-login"]').click();
            }
        )
        cy.get('[href="/my-account"]').should('be.visible');
    });

    it('Enlace crea una', () => {
        cy.get('.text-md.underline').click();
        cy.url().should('include', 'auth/login');
    });

    it('Enlace olvidaste tu contraseña', () => {
        cy.get('.mt-4.font-semibold').click();
        cy.url().should('include', 'auth/login');
        cy.get('.swal2-popup').should('contains.text','Recuperar contraseña');
    });

    it('Credenciales incorrectas', () => {
        cy.fixture('loginExam').then((usuario) => {
            cy.get('[name="email"]').type(usuario.emailError);
            cy.get('[name="password"]').type(usuario.password);
            cy.get('[data-at="submit-login"]').click();
            }
        )
        cy.get('.swal2-popup').should('contains.text','No pudimos iniciar sesión con estas credenciales.');
        cy.get('.swal2-confirm').click();
    });

    it.only('Cuenta no activada', () => {
        cy.fixture('registroExam').then((usuario) => {
            cy.get('[name="email"]').type(`${usuario.emailpre}@${usuario.dominio}`);
            cy.get('[name="password"]').type(usuario.password);
            cy.get('[data-at="submit-login"]').click();
            }
        )
        cy.get('.swal2-popup').should('contains.text','Tu cuenta no ha sido activada.');
        cy.get('.swal2-confirm').click()
    });
});