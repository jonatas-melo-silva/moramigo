/// <reference types="cypress" />

context('Demostrar interesse', () => {
  beforeEach(() => {
    cy.visit('/usuario/login/');

    cy.get('[data-cy=nome-do-usuario]').type('Dudu');
    cy.get('[data-cy=senha-do-usuario]').type('Dudu2021');
    cy.get('[data-cy=entrar-btn]').click();

    cy.visit('/usuario/login/');
  });

  it('Deve demostrar interesse em um perfil', () => {
    cy.get('[data-cy=buscar-pessoas-link]').click();
    cy.get(':nth-child(1) > :nth-child(4) > [data-cy=ver-perfil-btn]').click();
    cy.get('[data-cy=demostrar-interesse-btn]').click();
  });
});
