beforeEach(() => {
    cy.visit("/")
  });

  describe("PrivateRoute",()=>{
  it("should test private route when logged out then signed in",()=>{
    let emailString = "test@test.com"
    let passwordString = "test12"
    cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
    cy.get('input').eq(0).clear().type(emailString)
    cy.get('input').eq(1).clear().type(passwordString)
    cy.get("button[aria-label='Login']").click()
    cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
    cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
    

  });
});