describe('Wysyłanie parametrów zapytań', () => {
    const request = {
      url: 'https://httpbin.org/get',
      qs: {
        "user": "login",
      },
      failOnStatusCode: false
    };
  
    it('response code should be 200', () => {
      cy.request(request).then(response => {
        assert.equal("login", response.body.args.user);
      })
    })
  })