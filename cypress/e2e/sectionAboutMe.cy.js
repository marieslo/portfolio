describe('SectionAboutMe Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
      });

    it('should render About Me section with correct content', () => {
      cy.get('section').contains('Experience');
  
      cy.get('section')
        .contains('Full Stack Developer at HSE')
        .should('exist');
      cy.get('section')
        .contains('Junior Developer at ABC Tech')
        .should('exist');
      cy.get('section')
        .contains('Intern at XYZ Corp')
        .should('exist');
  
      cy.get('section').contains('Achievements');
  

      cy.get('section')
        .contains('Built a scalable web app with 1M+ users')
        .should('exist');
      cy.get('section')
        .contains('Contributed to open-source projects')
        .should('exist');
  

      cy.get('section').contains('Education');
      cy.get('section')
        .contains('Bachelor of Science in Computer Science')
        .should('exist');
      cy.get('section')
        .contains('University of Technology')
        .should('exist');
  

      cy.get('section').contains('Skills');
      cy.get('section').find('.skills-section').should('exist'); 
    });
  
    it('should display the profile image', () => {
      cy.get('motion.img')
        .should('have.attr', 'src', '/images/Marie_photo.png')
        .and('be.visible');
    });
  
    it('should toggle between light and dark mode', () => {

      cy.get('section').should('have.class', 'bg-light-bg');
  

      cy.get('header').find('.material-icons-outlined').contains('dark_mode').click();
      

      cy.get('section').should('have.class', 'bg-dark-bg');
      cy.get('section').should('have.class', 'text-light-text');
  

      cy.get('header').find('.material-icons-outlined').contains('light_mode').click();
  

      cy.get('section').should('have.class', 'bg-light-bg');
      cy.get('section').should('have.class', 'text-dark-text');
    });
  
    it('should render Skills component inside About Me section', () => {
      cy.get('section')
        .contains('Skills')
        .should('be.visible');
      

      cy.get('section').find('.skills-section').should('exist');
    });
  
    it('should show animations for each section', () => {

      cy.get('section')
        .contains('Experience')
        .should('have.css', 'opacity', '1'); 
  
      cy.get('motion.img').should('have.css', 'opacity', '1');
    });
  
  });
