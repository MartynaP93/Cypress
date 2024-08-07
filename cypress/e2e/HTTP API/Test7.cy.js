describe('Cookies', () => {
  
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/cookies',
      headers: {
        'Cookie': 'cookieName'
      },
      failOnStatusCode: false
    };
  
    it('test send cookie', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("cookieName", response.requestHeaders['Cookie']);
      })
    })
  })