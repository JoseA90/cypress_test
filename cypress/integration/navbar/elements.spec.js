/// <reference types="cypress"/>

describe('tests de navbar', () => {

    beforeEach(() =>{
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(39) > a').click()
        cy.get('[href="/shifting_content/menu"]').click()
    })

    it('count', () => {

        cy.get('ul li').should('have.length', 5)

    } )



})