let actorId = 1136406; // Wheel Of Fortune
let actor;

describe("Actor Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((actorDetails) => {
        actor = actorDetails;
        return actorDetails.id;
      });
  });
  beforeEach(() => {
    cy.visit(`/actor/${actor.id}`);
  });
  describe("Base tests", () => {
    it("should display actor name in the page header", () => {
      cy.get("h3").contains(actor.name);
    });


    it("should display the actors's biography", () => {
        cy.get("h3").contains("Biography");
        cy.get("h3").next().contains("Spider-Man");
       
      });
    });
  });

  