import {loginPage, settingsPage} from "../../cypress/fixtures/selectors.js";
 
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
describe("Given I am on the Login page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
    it("Login - I Should be able to Login with valid informations", function () {
        cy.get(loginPage.usernameFieldLog).type(loginPage.usernameTextlog)
        cy.get(loginPage.passwordFieldlog).type(loginPage.passwordTextlog)
        cy.get(loginPage.loginBtn).click()
        cy.wait(1000)
  
      })
      it("Settings Page  - I Should be able to change informations on the settings page and save ", function () {
        cy.get(loginPage.usernameFieldLog).type(loginPage.usernameTextlog)
        cy.get(loginPage.passwordFieldlog).type(loginPage.passwordTextlog)
        cy.get(loginPage.loginBtn).click()
        cy.get(settingsPage.editButton).click()
       cy.get(settingsPage.clearFirstnameField).clear()
       cy.get(settingsPage.firstNameField).type(settingsPage.firstNameText)
       cy.get(settingsPage.clearMobilePhone).clear()
       cy.get(settingsPage.mobilePhoneField).type(settingsPage.mobilePhoneTxt)
       cy.get(settingsPage.dateOfBirthField).type(settingsPage.dateOfBirthTxt)
       cy.get(settingsPage.gender).select(settingsPage.genderMorF)
       cy.get(settingsPage.clearAddressField).clear()
       cy.get(settingsPage.addressfield).type(settingsPage.addressText)
       cy.get(settingsPage.changePasswordField).type(settingsPage.changePasswordTxt)
       cy.get(settingsPage.saveBtn).click()
    
      })
      it("Settings Page  - I Should not be able to change informations on the settings page with a blank full name  ", function () {
        cy.get(loginPage.usernameFieldLog).type(loginPage.usernameTextlog)
        cy.get(loginPage.passwordFieldlog).type(loginPage.passwordTextlog)
        cy.get(loginPage.loginBtn).click()
        cy.get(settingsPage.editButton).click()
       cy.get(settingsPage.clearFirstnameField).clear()
       cy.get(settingsPage.clearMobilePhone).clear()
       cy.get(settingsPage.mobilePhoneField).type(settingsPage.mobilePhoneTxt)
       cy.get(settingsPage.dateOfBirthField).type(settingsPage.dateOfBirthTxt)
       cy.get(settingsPage.gender).select(settingsPage.genderMorF)
       cy.get(settingsPage.clearAddressField).clear()
       cy.get(settingsPage.addressfield).type(settingsPage.addressText)
       cy.get(settingsPage.changePasswordField).type(settingsPage.changePasswordTxt)
       cy.get(settingsPage.saveBtn).click()
    
      })


    })