/// <reference types="cypress" />

describe('tests de login', () => {

    beforeEach(() =>{
        cy.visit('https://the-internet.herokuapp.com/login')
    })

    it.skip('valid user can login', () => {

        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click()
        cy.get('#flash').contains("You logged into a secure area!")

    } )

    it.only('not valid username can not login', () => {

        cy.get('#username').type("tom")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.fa').click()
        cy.get('#flash').contains("Your username is invalid!")

    } )

    it('not valid password can not login', () => {

        cy.get('#username').type("tomsmith")
        cy.get('#password').type("Super")
        cy.get('.fa').click()
        cy.get('#flash').contains("Your password is invalid!")

    } )

})



