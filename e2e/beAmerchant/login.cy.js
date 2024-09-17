
describe('Login--valid username',()=>{
    
    context('Valid username and password',()=>{
        it('Valid username Valid password',()=>{
            cy.visit('http://172.31.1.20/')
           
            cy.get('form.ng-untouched')
             .within(()=>{
                cy.get('[type="text"]').should('have.attr','name','username').type('merchantesewa')
                cy.get('[type="password"]').should('have.attr','name','password').type('merchantesewa')
                
            })
            cy.get('[type="submit"]').should('have.class','btn').click ()
            cy.get('.modal--modal-content').should('be.visible')
            
            })
    })
   
    context('Invalid Credentials',()=>{
            it('Invalid username valid password',()=>{
                cy.visit('http://172.31.1.20/')
            
                cy.get('form.ng-untouched')
                .within(()=>{
                    cy.get('[type="text"]').should('have.attr','name','username').type('merchantesewa1')
                    cy.get('[type="password"]').should('have.attr','name','password').type('merchantesewa')
                    
                })
                cy.get('[type="submit"]').should('have.class','btn').click ()
                cy.get('#toast-container').should('contain.text','Username or password wrong')
                
                })
            
            it('Valid username Invalid password',()=>{
                    cy.visit('http://172.31.1.20/')
                
                    cy.get('form.ng-untouched')
                    .within(()=>{
                        cy.get('[type="text"]').should('have.attr','name','username').type('merchantesewa')
                        cy.get('[type="password"]').should('have.attr','name','password').type('merchantesewa1')
                        
                    })
                    cy.get('[type="submit"]').should('have.class','btn').click ()
                    cy.get('#toast-container').should('contain.text','Username or password wrong')
                    
                    })
        
            it('Invalid username Invalid password',()=>{
                    cy.visit('http://172.31.1.20/')
                
                    cy.get('form.ng-untouched')
                    .within(()=>{
                        cy.get('[type="text"]').should('have.attr','name','username').type('merchantesewa1')
                        cy.get('[type="password"]').should('have.attr','name','password').type('merchantesewa1')
                        
                    })
                    cy.get('[type="submit"]').should('have.class','btn').click ()
                    
                    cy.get('#toast-container').should('contain.text','Username or password wrong')
                    
                    })
    })
    



    context('Empty fields',()=>{
        it('Empty username Empty password',()=>{
                    cy.visit('http://172.31.1.20/')
       
                    cy.get('[type="submit"]').should('have.class','btn').click ()
                    cy.get('.error.ng-star-inserted').eq(0).should('have.text',' Username or Email is required ')
                    cy.get('.error.ng-star-inserted').eq(1).should('have.text',' Password is required ')
                
        
        })

        it('Empty username Filled password',()=>{
            cy.visit('http://172.31.1.20/')
            cy.get('[type="password"]').should('have.attr','name','password').type('merchantesewa1')

            cy.get('[type="submit"]').should('have.class','btn').click ()
            cy.get('.error.ng-star-inserted').should('have.text',' Username or Email is required ')
            
    
    })

    it('Filled username Empty password',()=>{
        cy.visit('http://172.31.1.20/')
        cy.get('[type="text"]').should('have.attr','name','username').type('merchantesewa1')
        cy.get('[type="submit"]').should('have.class','btn').click ()
        cy.get('.error.ng-star-inserted').should('have.text',' Password is required ')
        

})


})
     

})

