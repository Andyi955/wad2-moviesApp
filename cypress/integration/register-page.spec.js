beforeEach(() => {
    cy.visit("/signup")
  });

  describe("Base test", () => {
    it("displays page header", () => {
      cy.get("h3").contains("Register User");
    });
  });

  describe("Register",()=>{
      it("Should not register a user with invalid email ",()=>{
        let emailString = "testing@test.com"
        let passwordString = "test12"
        cy.get('input').eq(0).clear().type(emailString)
        cy.get('input').eq(1).clear().type(passwordString)
        cy.get("button[aria-label='Register']").click()
      })
   
  });

  