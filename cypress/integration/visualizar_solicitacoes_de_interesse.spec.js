/// <reference types="cypress" />

context('Meus interesses', () => {
  beforeEach(() => {
    cy.visit('/usuario/login/');

    cy.get('[data-cy=nome-do-usuario]').type('Dudu');
    cy.get('[data-cy=senha-do-usuario]').type('Dudu2021');
    cy.get('[data-cy=entrar-btn]').click();

    cy.visit('/');
  });

  it('Deve visualizar solicitações de interesse', () => {
    cy.get('[data-cy=meus-interesses-link]').click();
    cy.get('[data-cy=lista-de-solicitacoes]');
  });
});
