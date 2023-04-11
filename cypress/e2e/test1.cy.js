it('Google Search', function(){
cy.visit('https://www.google.com/')
cy.get('.gLFyf').type('hamsol solutions')
cy.wait(8000)
cy.contains('Google Search').click()
cy.get()


})