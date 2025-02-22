describe('SectionRecentProjects Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081');
  });
    
  const mockProjects = [
      {
        id: 1,
        imageUrls: ['https://via.placeholder.com/400'],
        name: 'Project One',
        description: 'This is a description of Project One.',
        skills: ['React', 'Node.js'],
        appUrl: 'https://project-one.com',
        codeUrl: 'https://github.com/project-one',
      },
      {
        id: 2,
        imageUrls: ['https://via.placeholder.com/400'],
        name: 'Project Two',
        description: 'This is a description of Project Two.',
        skills: ['Vue.js', 'Express'],
        appUrl: 'https://project-two.com',
        codeUrl: 'https://github.com/project-two',
      },
    ];
  
    beforeEach(() => {
      cy.mount(<SectionRecentProjects projects={mockProjects} isDarkMode={false} />);
    });
  
    it('should render the correct number of projects', () => {
      cy.get('.carousel-container .group').should('have.length', mockProjects.length);
    });
  
    it('should render project name and description correctly', () => {
      mockProjects.forEach((project, index) => {
        cy.get('.carousel-container .group').eq(index).within(() => {
          cy.contains(project.name);
          cy.contains(project.description);
        });
      });
    });
  
    it('should render carousel images correctly', () => {
      mockProjects.forEach((project, index) => {
        cy.get('.carousel-container .group').eq(index).within(() => {
          project.imageUrls.forEach((url, imgIndex) => {
            cy.get('img').eq(imgIndex).should('have.attr', 'src', url);
          });
        });
      });
    });
  
    it('should render View App and View Code links', () => {
      mockProjects.forEach((project, index) => {
        cy.get('.carousel-container .group').eq(index).within(() => {
          if (project.appUrl) {
            cy.get('a').contains('View App').should('have.attr', 'href', project.appUrl);
          }
          if (project.codeUrl) {
            cy.get('a').contains('View Code').should('have.attr', 'href', project.codeUrl);
          }
        });
      });
    });
  
    it('should toggle between dark and light mode', () => {

      cy.get('.carousel-container').should('have.class', 'text-light-text');
  

      cy.mount(<SectionRecentProjects projects={mockProjects} isDarkMode={true} />);
  

      cy.get('.carousel-container').should('have.class', 'text-dark-text');
    });
  
    it('should animate cards correctly on page load', () => {

      cy.get('.carousel-container').should('have.class', 'motion-div');
      cy.get('.group').first().should('have.class', 'motion-div');
    });
  
    it('should handle the carousel navigation', () => {

      cy.get('.carousel-container .group').first().within(() => {
        cy.get('.MuiCarousel-root').should('exist');
        cy.get('.MuiCarousel-next').should('be.visible');
        cy.get('.MuiCarousel-prev').should('be.visible'); 
      });
    });
  });
  