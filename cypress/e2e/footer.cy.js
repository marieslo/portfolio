describe('Footer Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
      });
      
    it('should render footer with correct text and links', () => {
      const currentYear = new Date().getFullYear();
      cy.get('footer').contains(`© ${currentYear}`);
      cy.get('footer').contains('Marie Slovokhotov');
      

      cy.get('footer').contains('Icons provided by').find('a').should('have.attr', 'href', 'https://icons8.com');
      cy.get('footer').contains('Badges powered by').find('a').should('have.attr', 'href', 'https://shields.io/');
  

      cy.get('footer').then(($footer) => {
        const footerClass = $footer.hasClass('text-light-text') ? 'text-light-text' : 'text-dark-text';
        cy.get('footer').should('have.class', footerClass);
      });
    });
  
    it('should switch classes based on dark mode', () => {
      cy.get('footer').should('have.class', 'text-dark-text');
  
      cy.get('button[aria-label="Toggle dark mode"]').click(); 
  
      cy.get('footer').should('have.class', 'text-light-text');
    });
    
    it('should have correct link behavior for Icons8', () => {
      cy.get('footer').contains('Icons provided by').find('a')
        .should('have.attr', 'href', 'https://icons8.com')
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'rel', 'noopener noreferrer');
    });
  
    it('should have correct link behavior for Shields.io', () => {
      cy.get('footer').contains('Badges powered by').find('a')
        .should('have.attr', 'href', 'https://shields.io/')
        .should('have.attr', 'target', '_blank')
        .should('have.attr', 'rel', 'noopener noreferrer');
    });
    
  });  