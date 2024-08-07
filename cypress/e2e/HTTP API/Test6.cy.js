describe('User-Agent', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/user-agent',
      headers: {
        'user-agent': 'User-Agent'
      },
      failOnStatusCode: false
    };
  
    it('test that user-agent set correctly', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("User-Agent", response.requestHeaders['user-agent']);
      })
    })
  })