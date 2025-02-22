describe("SocialMediaItem Component", () => {
    beforeEach(() => {
        cy.visit('http://localhost:8081');
      });
      
    const testProps = {
      href: "https://github.com/marieslo",
      imgSrc: "https://img.icons8.com/ios-filled/4895ef/50/github.png",
      alt: "GitHub",
      name: "GitHub",
      isDarkMode: false,
    };
  
    beforeEach(() => {
      cy.mount(<SocialMediaItem {...testProps} />);
    });
  
    it("should render the social media icon", () => {
      cy.get('img.contact-icon').should('exist');
      cy.get('img.contact-icon').should('have.attr', 'src', testProps.imgSrc);
      cy.get('img.contact-icon').should('have.attr', 'alt', testProps.alt);
    });
  
    it("should render the QR code", () => {
      cy.get('svg.react-qr-code').should('exist');
    });
  
    it("should have the correct link", () => {
      cy.get('a').should('have.attr', 'href', testProps.href);
      cy.get('a').should('have.attr', 'target', '_blank');
      cy.get('a').should('have.attr', 'rel', 'noopener noreferrer');
    });
  
    it("should show the correct name", () => {
      cy.get('span').should('contain.text', testProps.name);
    });
  
    it("should navigate to the correct URL when clicked", () => {
      cy.get('a').click();
      cy.url().should('eq', testProps.href);

      cy.window().then((win) => {
        const openedWindow = win.open;
        expect(openedWindow).to.be.calledWith(testProps.href);
      });
    });
  
    it("should handle dark mode", () => {
      cy.mount(<SocialMediaItem {...testProps} isDarkMode={true} />);
      cy.get('a').should('have.class', 'text-dark-text');
      cy.get('img.contact-icon').should('have.class', 'text-dark-text');
    });
  
    it("should handle light mode", () => {
      cy.mount(<SocialMediaItem {...testProps} isDarkMode={false} />);
      cy.get('a').should('have.class', 'text-light-text');
      cy.get('img.contact-icon').should('have.class', 'text-light-text');
    });
  });