const { faker } = require ('@faker-js/faker');

describe('Flujos de registro', () => {
    beforeEach(() => {
        cy.visit('');
    });

    it('Agregar y ver productos sin logear', () => {
//Se guardan los detalles del producto que enviaremos al carrito de compras    
        cy.get('[data-at="product-card"]').eq(3).find('.block.font-sans').eq(0).invoke('text').
            then((pdName) => {
                cy.wrap(pdName).as('productName');
            })    
        cy.get('[data-at="product-card"]').eq(3).find('.block.font-sans').eq(1).invoke('text').  
            then((pdPrice) => {
                cy.wrap(pdPrice).as('productPrice');
            })
//Se envian dos productos al carrito y se verifica que se puede eliminar el segundo
        cy.get(':nth-child(4) > .pt-0 > .align-middle').click();
        cy.get(':nth-child(3) > .pt-0 > .align-middle').click();
        cy.get('[data-at="cart-opener-mobile"]').should('contains.text', '2');
//Se verifica la eliminacion del segundo producto
        cy.get('.grid.place-content-center').eq(1).click({force: true});
        cy.get('[data-at="cart-opener-mobile"]').should('contains.text', '1');
//Verificacion de coincidencia de producto en homepage vs add to cart
        cy.get('[data-at="cart-opener-mobile"]').click();
        cy.get('@productName').then((description) => {
            cy.get('.text-black').eq(1).invoke('text').then((nameCart) => {
                expect(nameCart.trim()).to.eq(description.trim());
            })
        })
        cy.get('@productPrice').then((price) => {
            cy.get('.text-black').eq(3).invoke('text').then((priceCart) => {
                expect(priceCart.trim()).to.eq(price.trim());
            })
        })
        cy.get('.text-black').eq(2).should('have.text', '1');
        cy.get('.text-center.text-gray-600').should('contain.text', 'No tienes elementos en el carrito');  
    });

    it('Checkout logeado', () => {
        cy.get(':nth-child(4) > .pt-0 > .align-middle').click();
        cy.get('[data-at="cart-opener-mobile"]').should('contains.text', '1');
        cy.get('[data-at="cart-opener-mobile"]').click();
        cy.get('.bg-primaryColor.text-white').click();
        cy.url().should('include', 'auth/login');
    });

    it.only('Limpiar carrito', () => {
//Se envian dos productos al carrito y se verifica que se puede limpiar
        cy.get(':nth-child(4) > .pt-0 > .align-middle').click();
        cy.get(':nth-child(3) > .pt-0 > .align-middle').click();
        cy.get('[data-at="cart-opener-mobile"]').should('contains.text', '2');
        cy.get('[data-at="cart-opener-mobile"]').click();
        cy.get('.bg-transparent').click();
        cy.get('.text-center.text-gray-600').should('contain.text', 'No tienes elementos en el carrito');  
    });
});