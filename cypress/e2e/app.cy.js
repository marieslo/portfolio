describe('App Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8081');
    });
  
    it('should render and toggle the About Me section', () => {

      cy.get('#aboutme').should('be.visible'); 
      cy.get('span.material-icons-outlined').contains("keyboard_arrow_down").click(); 
      cy.get('#aboutme').should('not.be.visible');
      cy.get('span.material-icons-outlined').contains("keyboard_arrow_up").click(); 
      cy.get('#aboutme').should('be.visible'); 
    });
  
    it('should render and toggle the Recent Projects section', () => {

      cy.get('#projects').should('be.visible'); 
      cy.get('span.material-icons-outlined').contains("keyboard_arrow_down").click(); 
      cy.get('#projects').should('not.be.visible'); 
      cy.get('span.material-icons-outlined').contains("keyboard_arrow_up").click();
      cy.get('#projects').should('be.visible');
    });
  
    it('should render and toggle the Contacts section', () => {

      cy.get('#connect').should('be.visible');
      cy.get('span.material-icons-outlined').contains("keyboard_arrow_down").click();
      cy.get('#connect').should('not.be.visible');
      cy.get('span.material-icons-outlined').contains("keyboard_arrow_up").click(); 
      cy.get('#connect').should('be.visible');
    });
  
    it('should toggle between dark and light mode', () => {

      cy.get('body').should('have.class', 'bg-light-bg');
      cy.get('body').should('have.class', 'text-dark-text');
      

      cy.get('button').contains('Dark Mode').click(); 
      cy.get('body').should('have.class', 'bg-dark-bg');
      cy.get('body').should('have.class', 'text-light-text');
    });
  
    it('should load the SectionAboutMe component lazily', () => {

      cy.get('#aboutme').click();
      cy.get('div').contains('Loading...');
      cy.get('div').contains('About Me'); 
    });
  
    it('should load the SectionRecentProjects component lazily', () => {

      cy.get('#projects').click();
      cy.get('div').contains('Loading...');
      cy.get('.carousel-container').should('be.visible');
    });
  
    it('should load the SectionContacts component lazily', () => {

      cy.get('#connect').click(); 
      cy.get('div').contains('Loading...'); 
      cy.get('.contacts-container').should('be.visible'); 
    });
  });
  