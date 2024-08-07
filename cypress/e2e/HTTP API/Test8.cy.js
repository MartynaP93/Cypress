describe('Headers', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        "Host": "httpbin.org"
      },
      failOnStatusCode: false
    };
  
    it('test that header set correctly', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("httpbin.org", response.requestHeaders.Host);
      })
    })
  })