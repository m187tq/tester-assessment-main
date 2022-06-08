/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

/* eslint-disable no-unused-vars */
class LandingPage {
  logoImage() {
    return cy.get('.makeStyles-logo-3')
  }

  loginForm() {
    return cy.get('#root').as('root')
  }
  emailBox() {
    return cy.get('#email')
  }

  passwordBox() {
    return cy.get('#password')
  }
  submitButton() {
    return cy.get('.MuiButton-label').as("sumit")
  }

  emailErrorWarningMsg() {
    return cy.get("#email-helper-text")
  }
  passworderrorWarningMsg() {
    return cy.get("#password-helper-text")
  }

  

}

export default LandingPage
