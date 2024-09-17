describe('TMS',()=>{
    it('tr',()=>{
        cy.visit('http://192.168.50.166/login')
        cy.get(':nth-child(1) > .form-control').click()
        cy.get(':nth-child(1) > .form-control').type('ayushhh')
        cy.get('.form-control-icon > .form-control').type('Test@123')
        cy.get('.btn').click()
        
        cy.get('.ic-add').click()
        //cy.wait(5000)
       // cy.get('. css-19hkwwg').select('Bhaktapur Branch')
        //cy.get('.css-dl7eeo-placeholder').eq(0).click()
        cy.get('.css-dl7eeo-placeholder').eq(0).click()
    // cy.get('#react-select-2-option-0').click()  
       cy.get('#react-select-2-option-0').contains('Bhaktapur Branch').click()
      // cy.get('select').contains('Bhaktapur Branch').click({ force: true })
      cy.get('#productType > .css-1d7u08t-control > .css-19hkwwg').click()
      cy.get('#react-select-3-option-0').click()
      cy.get('#problemTitle').type('this is a test ticket')
      cy.get('#problemDescription').type('this is a test description')
      cy.get('.btn-primary').click()
      cy.wait(5000)
      cy.get('.heading-count').then(($element)=>{
        const text = $element.text();//to get texts from the locator.
        // Log the text to the console (optional)
        cy.log(text);
      })
      

      
       
        
    })
})