describe('Order API request', () => {

    it('Verificar historial de ordenes', () => {
        cy.request({
            method: 'GET',
            url: 'http://api.laboratoriodetesting.com/api/v1/orders',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiMDE5ZDYyLWU2YjktNDAyYS04NTA3LTRkZTM1ZGU1NjlkZSIsImlhdCI6MTc1Mzg3MTk4MywiZXhwIjoxNzU2NDYzOTgzfQ.bvbQvQJOCsJ4iN5Ui1UKf7TzwOfbA-LmtiO4WzLxrHg'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            expect(response.body).to.have.property('orders');
            response.body.orders.forEach(order => {
                expect(order).to.have.property('id');
                expect(order).to.have.property('userId'); 
                expect(order).to.have.property('createdAt');
                expect(order).to.have.property('updatedAt'); 
                expect(order).to.have.property('products'); 
                expect(order).to.have.property('total');  
            });
        })
    });

    it.only('Verificar una orden', () => {
        const orderId = '83a84e62-043f-4a5d-bc7c-9e0e5ab36fa6';
        cy.request({
            method: 'GET',
            url: `http://api.laboratoriodetesting.com/api/v1/orders/${orderId}`,
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiMDE5ZDYyLWU2YjktNDAyYS04NTA3LTRkZTM1ZGU1NjlkZSIsImlhdCI6MTc1Mzg3MTk4MywiZXhwIjoxNzU2NDYzOTgzfQ.bvbQvQJOCsJ4iN5Ui1UKf7TzwOfbA-LmtiO4WzLxrHg'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body));
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('userId'); 
            expect(response.body).to.have.property('createdAt');
            expect(response.body).to.have.property('updatedAt'); 
            expect(response.body).to.have.property('products');
            cy.log(JSON.stringify(response.body.total));
            expect(response.body).to.have.property('total');  
        })
    });

});