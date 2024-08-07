describe('Test DELETE - negativ', () => {
    const request = {
      method: 'DELETE',
      url: 'https://httpbin.org/patch',
      failOnStatusCode: false
    };
  
    it('response code should be 405', () => {
      cy.request(request).then(response => {
        assert.equal(405, response.status);
      })
    })
  })