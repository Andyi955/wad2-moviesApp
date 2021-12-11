
beforeEach(() => {
    cy.visit("/login")
  });

  describe("Base test", () => {
    it("displays page header", () => {
      cy.get("h3").contains("Login");
    });
  });

  describe("Login and SignOut",()=>{
      it("Should login in the user ",()=>{
        let emailString = "test@test.com"
        let passwordString = "test12"
        cy.get('input').eq(0).clear().type(emailString)
        cy.get('input').eq(1).clear().type(passwordString)
        cy.get("button[aria-label='Login']").click()
        cy.get("h4").contains(emailString)
      })
      it("should sign out the user",()=>{

        cy.get("button[aria-label='SignOut']").click()

      });
  });

  

