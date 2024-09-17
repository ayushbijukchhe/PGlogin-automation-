describe('Vendor should be able to view requests',()=>{
   
       
    it('Vendor should be able to view pending requests',()=>{
    cy.visit('http://172.31.1.20')
        cy.fixture('login').then(user =>{
            cy.get('[name="username"]').type(user.userNameVendor)
            cy.get('[name="password"]').type(user.passwordVendor)
        })
    
    cy.get('[type="submit"]').should('contain.text',' Login ').click()
    cy.get('.btn.btn-primary.btn-lg.mt-4').should('have.text','Confirm').click()
    cy.contains('Pending Member Request').click()
    cy.get('.pq-toolbar').within(()=>{
        cy.get('[type="button"]').eq(0).should('have.class','ui-button').click()
    })
    // .should('have.class','ui-button.ui-corner-all.ui-widget').click()

})
})