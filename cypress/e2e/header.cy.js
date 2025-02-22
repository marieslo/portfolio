describe('Header Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
      });
      
    it('should render header with correct text and structure', () => {

      cy.get('header').contains('Marie Slovokhotov');
      cy.get('header').contains('From idea to finished project');
      
      cy.get('header').contains('recent projects').should('have.attr', 'href', '#projects');
      cy.get('header').contains('about me').should('have.attr', 'href', '#aboutme');
      cy.get('header').contains('contacts').should('have.attr', 'href', '#connect');
      
      cy.get('header').find('hr').should('have.length', 2);
      cy.get('header').contains('•');
    });
  
    it('should toggle between light and dark mode', () => {
      cy.get('header').should('have.class', 'bg-light-bg'); 
  
      cy.get('header').find('.material-icons-outlined').contains('dark_mode').click();
      
      cy.get('header').should('have.class', 'bg-dark-bg');
      cy.get('header').should('have.class', 'text-light-text');
  

      cy.get('header').find('.material-icons-outlined').contains('light_mode').click();
  

      cy.get('header').should('have.class', 'bg-light-bg');
      cy.get('header').should('have.class', 'text-dark-text'); 
    });
  
    it('should navigate to the correct sections when menu links are clicked', () => {
        cy.get('header').contains('recent projects').click();
        cy.get('#projects').should('be.visible');
      
        cy.get('header').contains('about me').click();
        cy.get('#aboutme').should('be.visible');
      
        cy.get('header').contains('contacts').click();
        cy.get('#connect').should('be.visible');
      });
      
  
    it('should have correct behavior and styling for dark mode toggle button', () => {

      cy.get('header').find('.material-icons-outlined').contains('dark_mode');
  
      cy.get('header').find('.material-icons-outlined').contains('dark_mode').click();
      cy.get('header').find('.material-icons-outlined').contains('light_mode');
  
      cy.get('header').find('.material-icons-outlined').contains('light_mode').click();
      cy.get('header').find('.material-icons-outlined').contains('dark_mode');
    });
  
  });  