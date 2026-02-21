describe('Funcionalidade: contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulario de contato com sucesso', () => {
    cy.get('#name').type('Elisiane Pedrassoli')
    cy.get('#email').type('teste@email.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    // cy.get('#name').type('Elisiane Pedrassoli')
    cy.get('#email').type('teste@email.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('#name').type('Elisiane Pedrassoli')
    // cy.get('#email').type('teste@email.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  });

  it('Deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('#name').type('Elisiane Pedrassoli')
    cy.get('#email').type('teste@email.com')
    // cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto')
  });

  it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('#name').type('Elisiane Pedrassoli')
    cy.get('#email').type('teste@email.com')
    cy.get('#subject').select('Parcerias')
    // cy.get('#message').type('Mensagem teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem')
  });
})