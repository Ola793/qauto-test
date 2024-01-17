/// <reference types = "cypress" />

// describe("Change photo test", () => {
//   const authData = `${Cypress.env("authName")}:${Cypress.env("authPass")}`;

//   it("photo change", () => {
//     cy.log("photo change");
//     cy.visit(`https://${authData}@qauto.forstudy.space/`);
//     cy.request("POST", "https://qauto.forstudy.space/api/auth/signin", {
//       email: Cypress.env("loginEmail"),
//       password: Cypress.env("loginPass"),
//       remember: false,
//     });

//     cy.visit(`https://${authData}@qauto.forstudy.space/panel/profile`);
//     cy.contains("button", "Edit profile").click();
//     cy.get("input#editProfilePhoto").selectFile("cypress/fixtures/ava.png");
//     cy.contains("Save").click();
//   });
// });

describe("Change photo test", () => {
  const authData = `${CYPRESS_siteAuthUserName}:${CYPRESS_siteAuthPassword}`;

  it("photo change", () => {
    cy.log("photo change");
    cy.visit(`https://${authData}@qauto.forstudy.space/`);
    cy.request("POST", "https://qauto.forstudy.space/api/auth/signin", {
      email: CYPRESS_user,
      password: CYPRESS_password,
      remember: false,
    });

    cy.visit(`https://${authData}@qauto.forstudy.space/panel/profile`);
    cy.contains("button", "Edit profile").click();
    cy.get("input#editProfilePhoto").selectFile("cypress/fixtures/ava.png");
    cy.contains("Save").click();
  });
});
