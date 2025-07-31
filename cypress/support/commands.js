// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('datosCliente', () => {
    cy.fixture('checkout').then((cliente) => {
        cy.get('[name="name"]').type(cliente.nombre);
        cy.get('[name="lastname"]').type(cliente.apellido);
        cy.get('[name="email"]').type(cliente.email);
        cy.get('[name="address"]').type(cliente.direccion);
        cy.get('[name="country"]').select(cliente.pais);
        cy.get('[name="nameHolder"]').type(`${cliente.nombre} ${cliente.apellido}`);
    });
});

Cypress.Commands.add('addToCart', (producSelect1, producSelect2) => {
    cy.get(producSelect1).click();
    cy.get(producSelect2).click();
    cy.get('[data-at="cart-opener-mobile"]').click();
    cy.get('.bg-primaryColor.text-white').click();
});

Cypress.Commands.add('validCard', () => {
    cy.fixture('checkout').then((cliente) => {
        cy.get('[name="cardNumber"]').type(cliente.num_tarjeta);
        cy.get('[name="expiryDate"]').type(cliente.fecha_exp);
        cy.get('[name="securityCode"]').type(cliente.cvv);
    });
});

Cypress.Commands.add('lockedCard', () => {
    cy.fixture('checkout').then((cliente) => {
        cy.get('[name="cardNumber"]').type(cliente.num_tarjeta_block);
        cy.get('[name="expiryDate"]').type(cliente.fecha_exp_block);
        cy.get('[name="securityCode"]').type(cliente.cvv_block);
    });
});

Cypress.Commands.add('invalidCard', () => {
    cy.fixture('checkout').then((cliente) => {
        cy.get('[name="cardNumber"]').type(cliente.num_tarjeta_inv);
        cy.get('[name="expiryDate"]').type(cliente.fecha_exp_inv);
        cy.get('[name="securityCode"]').type(cliente.cvv_inv);
    });
});

Cypress.Commands.add('notFoundCard', () => {
    cy.fixture('checkout').then((cliente) => {
        cy.get('[name="cardNumber"]').clear().type(cliente.num_tarjeta_nf);
        cy.get('[name="expiryDate"]').clear().type(cliente.fecha_exp_nf);
        cy.get('[name="securityCode"]').clear().type(cliente.cvv_nf);
    });
});