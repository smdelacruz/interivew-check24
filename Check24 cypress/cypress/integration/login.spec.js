/// <reference types="cypress" />

describe('Check 24 UI Test', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('url'))
      cy.wait(500)
    })

    it('Validated Email address is an Existing User', () => {
        cy.contains('Mein Konto').click()
        cy.contains('Anmelden').click()
        cy.wait(1000)
        cy.enter('iframe.c24-uli-loginlayer-iframe').then(getBody => {
            getBody().find('[data-tid="page-title"]').should('have.text', 'Anmelden')
            getBody().find('div.c24-uli-top-title').should('have.text', 'Mit Ihrem persönlichen Kundenkonto von allen CHECK24 Vorteilen profitieren!')
            getBody().find('[for="cl_login"]').should('have.text', 'E-Mail-Adresse')
            getBody().find('[name="username"]').clear().type(Cypress.env('username')) 
            getBody().find("button[value='weiter']").click()

            getBody().find('[data-tid="page-title"]').should('have.text', 'Willkommen')
            getBody().find('div.c24-uli-top-title').should('have.text', 'Wie es aussieht, haben Sie bereits ein CHECK24 Kundenkonto.')
            getBody().find('[for="cl_pw_login"]').should('have.text', 'Ihr CHECK24 Passwort')
            getBody().find("[data-tid='user-data']").should('eq', Cypress.env('username'))
        })
    })

    it('Validate Success Login', () => {
        cy.contains('Mein Konto').click()
        cy.contains('Anmelden').click()
        cy.wait(1000)
        cy.enter('iframe.c24-uli-loginlayer-iframe').then(getBody => {
            getBody().find('[data-tid="page-title"]').should('have.text', 'Anmelden')
            getBody().find('div.c24-uli-top-title').should('have.text', 'Mit Ihrem persönlichen Kundenkonto von allen CHECK24 Vorteilen profitieren!')
            getBody().find('[for="cl_login"]').should('have.text', 'E-Mail-Adresse')
            getBody().find('[name="username"]').clear().type(Cypress.env('username')) 
            getBody().find("button[value='weiter']").click()

            getBody().find('[data-tid="page-title"]').should('have.text', 'Willkommen')
            getBody().find('div.c24-uli-top-title').should('have.text', 'Wie es aussieht, haben Sie bereits ein CHECK24 Kundenkonto.')
            getBody().find('[for="cl_pw_login"]').should('have.text', 'Ihr CHECK24 Passwort')
            getBody().find("div.c24-uli-user-data").should('have.text', Cypress.env('username'))
            getBody().find('[name="password"]').clear().type(Cypress.env('password')) 
            getBody().find("#c24-uli-pw-btn span").click()
        })
        cy.contains('Mein Konto').click()
        cy.contains('Mein Konto').should('have.text', 'Mein Konto')
    })
  })
  