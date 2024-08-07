describe('Test GET', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/get',
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
      })
    })
  })