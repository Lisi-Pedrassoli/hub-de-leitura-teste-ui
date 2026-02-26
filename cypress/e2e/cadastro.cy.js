//comando onde lista todos os metodos que tem no cypress quando coloco . ex: . click ou .type etc
///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPage  from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no hub de leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
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

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = faker.internet.email()
        let nome = faker.person.fullName({ sex: 'female'})
        cy.preencherCadastro(
            //Da para usar o faker também assim gera uma informção nova a cada momento que rodar o codigo
            nome,
            email,
            '44998434229',
            'Teste@123',
            'Teste@123'
        )
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso usando Page Objects', () => {
        let email = faker.internet.email()
        cadastroPage.preencherCadastro('Elisiane Pedrassoli', email, '44998434229', 'senha123', 'senha123')
        cy.url().should('include', 'dashboard')
    });

    it.only('Deve validar mensagem ao tentar cadastrar sem informar o nome', () => {
         cadastroPage.preencherCadastro('', 'lisi@teste.com', '44998434229', 'senha123', 'senha123')
         cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });
});
