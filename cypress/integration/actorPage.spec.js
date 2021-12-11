let actors;    // List of movies from TMDB

// Utility functions
const filterByTitle = (actorList, string) =>
  actorList.filter((m) => m.name.toLowerCase().search(string) !== -1);



describe("Actor Page ", () => {
  before(() => {
    // Get tv shows from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        actors = response.results
      })
  })

  beforeEach(() => {
    cy.visit("/popular/actors")
  });

  describe("Base test", () => {
    it("displays page header", () => {
      cy.get("h3").contains("Actors");
      cy.get("h1").contains("Filter the Actors");
    });
});

  describe("Filtering", () => {
    describe("By actor name", () => {
     it("should only display actors with tom in their name", () => {
       let searchString = "tom";
       let matchingActors = filterByTitle(actors, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter c in text box
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingActors.length
       );
   
     })
     it("should only display actors with f in their name", () => {
       let searchString = "f";
       let matchingActors = filterByTitle(actors, searchString);
       cy.get("#filled-search").clear().type(searchString); // Enter m in text box
       cy.get(".MuiCardHeader-content").should(
         "have.length",
         matchingActors.length
       );
       });
 
     it("should display no actors after inputtig xyz", () => {
        let searchString = "xyz";
        let matchingActors = filterByTitle(actors, searchString);
        cy.get("#filled-search").clear().type(searchString); // Enter xyz in text box
        cy.get(".MuiCardHeader-content").should("have.length", 0,matchingActors);

     });
      });

  });
});

