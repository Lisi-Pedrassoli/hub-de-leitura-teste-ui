//comando onde lista todos os metodos que tem no cypress quando coloco . ex: . click ou .type etc
///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no hub de leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {

        //função que gera uma palavra aleatória sempre que rodo o projeto ${Date.now()}}
        let email = `teste${Date.now()}@teste.com`

        cy.get('#name').type('Elisiane Pedrassoli')
        cy.get('#email').type(email)
        cy.get('#phone').type('44998434229')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso, usando faker', () => {

        //função que gera informações diferentes cada vez que rodo, ex: nome, email etc...
        let nome = faker.person.fullName()
        let email = faker.internet.email()

        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('44998434229')
        cy.get('#password').type('Teste@123')
        cy.get('#confirm-password').type('Teste@123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });
});
