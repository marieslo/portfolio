describe('SectionContacts Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
      });
      
    it('should render the contact section with correct content', () => {
      cy.get('section').contains('Contacts').should('exist');
  
      cy.get('a').contains('GitHub').should('exist');
      cy.get('a').contains('LinkedIn').should('exist');
      cy.get('a').contains('Telegram').should('exist');
      cy.get('a').contains('Email').should('exist');
  
      cy.get('a').find('img[alt="GitHub"]').should('be.visible');
      cy.get('a').find('img[alt="LinkedIn"]').should('be.visible');
      cy.get('a').find('img[alt="Telegram"]').should('be.visible');
      cy.get('a').find('img[alt="Email"]').should('be.visible');
    });
  
    it('should display the correct social media links', () => {

      cy.get('a').contains('GitHub').should('have.attr', 'href', 'https://github.com/marieslo');
      cy.get('a').contains('LinkedIn').should('have.attr', 'href', 'https://www.linkedin.com/in/marie-slovokhotov/');
      cy.get('a').contains('Telegram').should('have.attr', 'href', 'https://t.me/marieslo');
      cy.get('a').contains('Email').should('have.attr', 'href', 'mailto:maria.slovohotova@gmail.com');
    });
  
    it('should toggle between light and dark mode', () => {
      // Test initial mode (light mode assumed)
      cy.get('section').should('have.class', 'bg-light-bg');  // Adjust based on your default state
  
      // Toggle dark mode by clicking the dark mode icon
      cy.get('header').find('.material-icons-outlined').contains('dark_mode').click();
      
      // After clicking, check if the section switches to dark mode styles
      cy.get('section').should('have.class', 'bg-dark-bg');
      cy.get('section').should('have.class', 'text-light-text'); // Check text color for dark mode
  
      // Toggle back to light mode
      cy.get('header').find('.material-icons-outlined').contains('light_mode').click();
  
      // Ensure it switches back to light mode styles
      cy.get('section').should('have.class', 'bg-light-bg');
      cy.get('section').should('have.class', 'text-dark-text'); // Check text color for light mode
    });
  
    it('should render SocialMediaItem component for each contact link', () => {

      cy.get('.social-media-item').should('have.length', 4);
  

      cy.get('.social-media-item')
        .first()
        .find('a')
        .should('have.attr', 'href', 'https://github.com/marieslo')
        .find('img')
        .should('have.attr', 'alt', 'GitHub');
  
      cy.get('.social-media-item')
        .eq(1)
        .find('a')
        .should('have.attr', 'href', 'https://www.linkedin.com/in/marie-slovokhotov/')
        .find('img')
        .should('have.attr', 'alt', 'LinkedIn');
  
      cy.get('.social-media-item')
        .eq(2)
        .find('a')
        .should('have.attr', 'href', 'https://t.me/marieslo')
        .find('img')
        .should('have.attr', 'alt', 'Telegram');
  
      cy.get('.social-media-item')
        .eq(3)
        .find('a')
        .should('have.attr', 'href', 'mailto:maria.slovohotova@gmail.com')
        .find('img')
        .should('have.attr', 'alt', 'Email');
    });
  
  });
  