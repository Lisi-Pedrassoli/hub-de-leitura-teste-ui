///<reference types="cypress"/>
//importando para fazer o teste da massa de dados, no caminho tive que por ../ para voltar uma pasta e conseguir pegar a fixrues (igual CD ..)
import user from "../fixtures/usuario.json"

describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')

    });

    it('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('usuario@teste.com', 'user123')
    });

    it('Deve fazer login com sucesso utulizando conta Admin - Usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    });

    it('Deve fazer login com sucesso - Usando importação da massa de dados', () => {
        cy.login(user.email, user.senha)
    });
});