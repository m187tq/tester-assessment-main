/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

/* eslint-disable no-unused-vars */
class WelcomePage {
    smileyImage() {
      return cy.get('.makeStyles-smiley-4')
    }
    welcomeMsg() {
      return cy.get('h1')
    }
    logoutLink() {
      return cy.get('.MuiButton-label')
    }
    
}
  export default WelcomePage
  