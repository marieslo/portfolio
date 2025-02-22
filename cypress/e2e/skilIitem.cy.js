describe('SkillItem Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081');
  });
    
  const skill = 'React';
    
    it('should render the skill badge correctly', () => {
      cy.mount(<SkillItem skill={skill} isDarkMode={false} />);
      
      cy.get('img')
        .should('have.attr', 'src')
        .and('include', 'react')
        .and('include', '8d99ae');
    });
  
    it('should apply dark mode styles correctly', () => {
      cy.mount(<SkillItem skill={skill} isDarkMode={true} />);
      
      cy.get('.skill-item')
        .should('have.class', 'text-dark-text'); 
  
      cy.get('img')
        .should('have.attr', 'src')
        .and('include', 'react')
        .and('include', '03071e');
    });
  
    it('should hide image if the src URL fails to load', () => {
      cy.mount(<SkillItem skill="NonExistentSkill" isDarkMode={false} />);
      
      cy.get('img').should('not.be.visible');
    });
  });
  