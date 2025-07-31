const { faker } = require ('@faker-js/faker');

describe('Flujos de checkout', () => {
    beforeEach(() => {
        cy.visit('auth/login');
//El usuario ya debe estar logeado para realizar los tests
        cy.fixture('loginExam').then((usuario) => {
            cy.get('[name="email"]').type(usuario.email);
            cy.get('[name="password"]').type(usuario.password);
            cy.get('[data-at="submit-login"]').click();
        });
    });

    it('Verificacion de productos en el carrito para realizar pago', () => {
//Intentamos realizar el pago sin agregar productos al carrito
        cy.get('[data-at="cart-opener-mobile"]').click();
        cy.get('.bg-primaryColor.text-white').click();
        cy.datosCliente();
        cy.validCard();
        cy.get('.my-5 .bg-primaryColor.text-white').should('be.disabled');   
    });

    it('Pago con tarjeta valida', () => {
//Realizamos el pago con una tarjeta valida
        cy.addToCart(':nth-child(4) > .pt-0 > .align-middle', ':nth-child(3) > .pt-0 > .align-middle')
        cy.datosCliente();
        cy.validCard();
        cy.get('.my-5 .bg-primaryColor.text-white').click({force: true});
//Mensaje de pago realizado con exito
        cy.get('.swal2-popup').should('contain.text', 'Orden creada');
//Usuario redireccionado al resumen de sus actividades
        cy.get('.swal2-confirm.swal2-styled').click();
        cy.url().should('include', 'my-account');
//Verificar si el carrito esta vacio despues de el pago con exito
        cy.get('[data-at="cart-opener-mobile"]').click();
        cy.get('.text-center.text-gray-600').should('contain.text', 'No tienes elementos en el carrito');
    });

    it('Pago con tarjeta bloqueada', () => {
//Realizamos el pago con una tarjeta bloqueada
        cy.addToCart(':nth-child(4) > .pt-0 > .align-middle', ':nth-child(3) > .pt-0 > .align-middle')
        cy.datosCliente();
        cy.lockedCard();
        cy.get('.my-5 .bg-primaryColor.text-white').click({force: true});
        cy.get('#swal2-html-container').should('have.text', 'Rechazo general de la entidad.')
    });

    it('Pago con tarjeta invalida y agregar nueva tarjeta sin fondos', () => {
//Realizamos el pago con una tarjeta invalida
        cy.addToCart(':nth-child(4) > .pt-0 > .align-middle', ':nth-child(3) > .pt-0 > .align-middle')
        cy.datosCliente();
        cy.invalidCard();
        cy.get('.my-5 .bg-primaryColor.text-white').click({force: true});
        cy.get('#swal2-html-container').should('have.text', 'Tarjeta inválida')
//Opcion agregar nueva tarjeta y realizamos el pago con una tarjeta sin fondos
        cy.get('.swal2-confirm').click();
        cy.notFoundCard();
        cy.get('.my-5 .bg-primaryColor.text-white').click({force: true});
        cy.get('#swal2-html-container').should('have.text', 'Fondos Insuficientes')
    });
});