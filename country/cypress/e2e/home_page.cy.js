
describe('E2E Test - Country List App', () => {

    before(() => {
      // Visit the application's URL before each test
      cy.visit('http://localhost:3000'); 
    });

    it('should load the app and fetch country data', () => {

        // Type a country name and click "Get Info" button to fetch data
        cy.get('input[type="text"]').type('a');
        cy.contains('Get Info').click();

      // Check if the application loads and displays a list of countries
      cy.contains('Loading...').should('not.exist');
      cy.contains('Austria').should('exist'); 
      cy.contains('Austria').click();
      cy.get('.country-details').should('exist');
      cy.get('.country-details').should('contain', 'Austria');
        // Interact with pagination
        cy.get('.pagination a').contains('2').click();

        // Check if the next page is loaded
        cy.get('.country-item').should('have.length', 10); 
      
        // Enter a non-existent country name
        cy.get('input[type="text"]').type('InvalidCountryName');
        cy.contains('Get Info').click();
    
        // Check if an error message is displayed
        cy.contains('Not Found').should('exist');
        
    });

  

  
    
  });
  