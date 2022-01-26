describe('Visit Site Test Suite', function(){

    it('visit mlbd starter page and verify title and header', function()
    {
        cy.visit("https://mlbd-starter-angular-ant-design.netlify.app/");
        cy.title().should('contain','MlbdStarterAngular');
        cy.get('nz-header.ant-layout-header').should('be.visible');
    })

    it('verify other elements', function()
    {
        cy.contains('home works!').should('be.visible');
        cy.contains('About').click();
        cy.contains('about works!').should('be.visible');
        cy.contains('Contact').click();
        cy.contains('contact works!').should('be.visible');
        cy.contains('Dashboard').click();
        cy.contains('user list works!').should('be.visible');




    })
    

})
