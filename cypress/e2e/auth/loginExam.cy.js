import * as LoginExam from '../../support/selectors/loginExam';
const { faker } = require ('@faker-js/faker');

describe('Flujos de registro', () => {
    beforeEach(function () {
        cy.visit('auth/login');
        cy.fixture('loginExam').as('usuario');
    });

    it('Login exitoso y boton deshabilitado', function() {
        cy.get(LoginExam.BotonInicio).should('be.disabled');
            cy.get(LoginExam.EMAIL).type(this.usuario.email);
            cy.get(LoginExam.BotonInicio).should('be.disabled');
            cy.get(LoginExam.PASSWORD).type(this.usuario.password);
            cy.get(LoginExam.BotonInicio).click();
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

    it('Credenciales incorrectas', function () {
            cy.get(LoginExam.EMAIL).type(this.usuario.emailError);
            cy.get(LoginExam.PASSWORD).type(this.usuario.password);
            cy.get(LoginExam.BotonInicio).click();
 
        cy.get('.swal2-popup').should('contains.text','No pudimos iniciar sesión con estas credenciales.');
        cy.get('.swal2-confirm').click();
    });

    it('Cuenta no activada', function () {
            cy.get(LoginExam.EMAIL).type(`${this.usuario.emailpre}@${this.usuario.dominio}`);
            cy.get(LoginExam.PASSWORD).type(this.usuario.passwordPre);
            cy.get(LoginExam.BotonInicio).click();
        cy.get('.swal2-popup').should('contains.text','Tu cuenta no ha sido activada.');
        cy.get('.swal2-confirm').click()
    });
});