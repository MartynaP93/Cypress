describe('Wysyłanie losowych parametrów zapytań', () => {

    it('test random', () => {
      for(let i = 0; i < 5; i++) {
        const randomId = getRandomInt(5000);
  
        const request = {
          url: 'https://httpbin.org/headers',
          id: randomId
        }
  
        cy.request(request).then(response => {
          assert.isTrue(response.status == 200)
        })
      } 
    })
  })
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }