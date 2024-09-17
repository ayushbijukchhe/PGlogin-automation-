
describe("beamerchat",()=>{
    it.only("request from client",()=>{
        cy.visit('http://172.31.1.20:9999')
        cy.get('[name="username"]').should('have.class','form-control').type('nagarik')
        cy.get('[name="password"]').should('have.class','ng-invalid').type('Nagarik@123')
        cy.get('[type="submit"]').should('contain', 'Login ').click()
        // cy.get('[type="search"]').type('qr')
        cy.get('#accordionExample').eq(0).should('have.class','list')
        //cy.get(':nth-child(8) > .hasSub').click()//click on set up
       // cy.get('.ng-star-inserted').eq(90).should('have.text','RequestMerchant QR').click({force:true})
        //cy.pause()
        cy.get('#menu12 > :nth-child(20) > .ng-star-inserted').click({force:true})//click on merchant QR request
        //cy.pause()
        cy.get('#createBtn').should('have.class','btn').click()
        cy.get(':nth-child(2) > .form-group > .form-control').clear().type('ayush@gmail.com')
       // cy.get('#contactPerson').clear().type('Ayush Bijukchhe')
      cy.get('[type="text"]').filter('#contactPerson').clear().type('Ayush Bijukchhe')
        cy.get('[type="tel"]').should('have.id','count').clear().type('9860000000')
       
                cy.get('.form-group').eq(5).within(()=>{
                cy.get('[type="text"]').type('NIC Asia')
                })
        
//inserting file remaining--TODO
        cy.get('[type="file"]').selectFile('PAN.png')

        cy.get(':nth-child(6) > .form-group > .form-control').type('15151515')
        cy.get('.btn.btn-success.mr-2.ng-star-inserted').click();
        cy.get('.btn.btn-primary.ml-2').should('have.id','confirmBtn').click()
    })
   it("For multiple request sent",()=>{
        cy.visit('http://172.31.1.20:9999')
        cy.get('[name="username"]').should('have.class','form-control').type('nagarik')
        cy.get('[name="password"]').should('have.class','ng-invalid').type('Nagarik@123')
        cy.get('[type="submit"]').should('contain', 'Login ').click()
        cy.get('[type="search"]').type('qr')
        cy.get('.ng-star-inserted.active').click()
        cy.get('#menu12 > :nth-child(20) > .ng-star-inserted').click()
        cy.get('#createBtn').click()
        cy.get(':nth-child(2) > .form-group > .form-control').clear().type('ayush@gmail.com')
       // cy.get('#contactPerson').clear().type('Ayush Bijukchhe')
      cy.get('[type="text"]').filter('#contactPerson').clear().type('Ayush Bijukchhe')
        cy.get('[type="tel"]').should('have.id','count').clear().type('9860000000')
       
        cy.get('.form-group').eq(5).within(()=>{
            cy.get('[type="text"]').clear().type('NIC Asia')
        })
        
//inserting file remaining--TODO
        cy.get('[type="file"]').selectFile('PAN.png')

        cy.get(':nth-child(6) > .form-group > .form-control').type('15151515')
        cy.get('.btn.btn-success.mr-2.ng-star-inserted').click();
        cy.get('.btn.btn-primary.ml-2').should('have.id','confirmBtn').click()
        cy.get('.ng-trigger > .ng-tns-c41-1').should('contain','Cannot update this request, as this request has already been Pending from Vendor')
    })
    
})