describe('Skills Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
      });
      
    it('should render all skill items', () => {
      cy.mount(<Skills isDarkMode={false} />);
  
      cy.get('.skill-item').should('have.length', 7); 
    });
  
    it('should apply dark mode styles correctly', () => {
      cy.mount(<Skills isDarkMode={true} />);
      
      cy.get('.skill-item').first().should('have.class', 'text-dark-text');
    });
  
    it('should apply light mode styles correctly', () => {
      cy.mount(<Skills isDarkMode={false} />);
      
      cy.get('.skill-item').first().should('have.class', 'text-light-text');
    });
  });
  