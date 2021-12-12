let movies;
const movieId =  335983; // The movie Venom id
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    // Get movie reviews
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        // console.log(response);
        reviews = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
  });  
  describe("From the home page", () => {
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h3").contains(movies[0].title);
    });
  });
  describe("The site header", () => {
    describe("when the viewport is desktop scale", () => {
      it("should allow navigation to the Popular Actors Page from the link", () => {
     
        cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();

        cy.get("header").find(".MuiToolbar-root").find("button").eq(3).click();
        cy.url().should("include", `/popular/actors`);
        cy.get("h3").contains("Actors");
      });
      it("should allow navigation to the Tv shows page from the link", () => {
        cy.get("header").find(".MuiToolbar-root").find("button").eq(4).click();
        cy.url().should("include", `/tv/discovertv`);
        cy.get("h3").contains("Tv Shows");
      });
    });
    describe(
      "when the viewport is a mobile",
      {
        viewportHeight: 896,
        viewportWidth: 414,
      },
      () => {
        it("should allow navigation to the Actors page from the dropdown menu", () => {
 
          cy.get("header").find("button").click();
          cy.get("li").eq(3).click();
          cy.url().should("include", `/popular/actors`);
          cy.get("h3").contains("Actors");
        });
      });
  });
  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.get("button[aria-label='add to favorites']").eq(0).click();
      cy.get("button[aria-label='add to favorites']").eq(1).click();
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h3").contains(movies[0].title);
    });
  });
  
  describe("The forward/backward links", () => {
    beforeEach(() => {
      cy.get("button[aria-label='add to favorites']").eq(0).click();

      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();

    });
    it("should navigate backward and forward between the movies detail page and the Discover page.", () => {
      cy.get("button[aria-label='go back'").click();
      cy.get("h3").contains("Discover Movies");
      cy.url().should("not.include", `/movies/${movies[0].id}`);
      cy.get("button[aria-label='go forward'").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h3").contains(movies[0].title);
    });
    // it("should navigate backward and forward between the favourite movies page and movie details page.", () => {

    //   cy.get("header").find(".MuiToolbar-root").find("button").eq(1).click();
    //   cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();

    

    //   cy.get("button[aria-label='go back'").click();
    //   cy.get("button[aria-label='go forward'").click();

     
    //    }); //This works in cypress but not in he ec2 test not sure what the problem is
    
   });
describe("Login Page/Register Page Navigation",()=>{
   it("should goto the login page and then to the register page",()=>{
   cy.get("header").find(".MuiToolbar-root").find("button").eq(5).click();
   cy.get("h3").contains("Login");
   cy.get("h4").contains("Register").click()
   cy.get("h3").contains("Register User");

   });
});

});
