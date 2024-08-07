describe('Treść odpowiedzi', () => {
  
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/get',
      failOnStatusCode: false
    };
  
    it('test single response body key', () => {
        cy.request(request).then(response => {
          assert.equal('88.156.140.49', response.body['origin']);
        })
    })
 })
