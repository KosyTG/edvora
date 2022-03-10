import {registerPage, loginPage} from "../../cypress/fixtures/selectors.js";
 
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe("Given I am on the Register page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("REGISTER - I Should be able to register account with valid informations", function () {
     cy.get(registerPage.singInPage).click()
      cy.get(registerPage.usernameField).type(registerPage.usernameText)
      cy.get(registerPage.passwordField).type(registerPage.passwordText)
      cy.get(registerPage.createAccountButton).click()
      cy.wait(10000)
      
      it("REGISTER - I Should be not be able to register account with a username and a blank password", function () {
      cy.get(registerPage.singInPage).click()
      //cy.get(registerPage.usernameField).type(registerPage.usernameText)
      cy.get(registerPage.passwordField).type(registerPage.passwordText)
      cy.get(registerPage.createAccountButton).click()

      })
    })

    })


 
