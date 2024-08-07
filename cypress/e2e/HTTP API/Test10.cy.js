describe('Czas trawania ządania', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/get',
      failOnStatusCode: false
    };
  
    it('test duration', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 200)
      })
    })
  })

