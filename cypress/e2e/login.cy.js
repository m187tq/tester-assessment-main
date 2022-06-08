/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/// <reference types="Cypress" />
import LoginPage from '../support/pages/LandingPage'
import WelcomePage from '../support/pages/WelcomePage'

const loginPage = new LoginPage()
const welcomePage = new WelcomePage()

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.document().its('contentType').should('eq', 'text/html')

    cy.url().should('eq', 'http://localhost:3000/')
    cy.title().should('eq', 'Welcome to NearForm')
    loginPage.logoImage().should('be.visible')
    loginPage.loginForm().contains('Email')
    loginPage.loginForm().contains('Password')
    loginPage.loginForm().contains('Submit')
  })

  it('should render submit button', () => {
    loginPage.submitButton().should('be.visible').contains('Submit').click()
  })

  it('should render error warning messages for email and password', () => {
    loginPage.submitButton().should('be.visible').click()
    loginPage
      .emailErrorWarningMsg()
      .should('be.visible')
      .contains('Email is required')
    loginPage
      .passworderrorWarningMsg()
      .should('be.visible')
      .contains('Password is required')
  })

  it('should render error warning messages for email', () => {
    loginPage.emailBox().should('be.visible').clear().type('userName')
    loginPage.passwordBox().should('be.visible').clear().type('Password&123')
    loginPage.submitButton().should('be.visible').click()
    loginPage.emailErrorWarningMsg()
      .should('be.visible')
      .contains('Enter a valid email')
  })

  it('should render error warning messages for password', () => {
    loginPage.emailBox().should('be.visible').clear().type('userName@email.com')
    loginPage.passwordBox().should('be.visible').clear().type('password')
    loginPage.submitButton().should('be.visible').click()
    loginPage
      .passworderrorWarningMsg()
      .should('be.visible')
      .contains(
        'Password should contain a mix of upper and lower case letters, numbers and at least one special character'
      )
  })

  it('should login with valid credentials', () => {
    cy.url().should('eq', 'http://localhost:3000/')
    cy.title().should('eq', 'Welcome to NearForm')
    loginPage.emailBox().should('be.visible').clear().type('userName@email.com')
    loginPage.passwordBox().should('be.visible').clear().type('Password_123@')
    loginPage.submitButton().should('be.visible').click()
    welcomePage.smileyImage().should('be.visible')
    welcomePage.welcomeMsg()
    .should('be.visible')
    .contains('@')
    welcomePage.logoutLink()
    .should('be.visible')
    .click()


  })

  it('should login with valid credentials', () => {
    cy.visit('http://localhost:3000/')
    cy.document().its('contentType').should('eq', 'text/html')

    cy.url().should('eq', 'http://localhost:3000/')
    cy.title().should('eq', 'Welcome to NearForm')
    loginPage.logoImage().should('be.visible')
    loginPage.loginForm().contains('Email')
    loginPage.loginForm().contains('Password')
    loginPage.loginForm().contains('Submit')

  })
})
