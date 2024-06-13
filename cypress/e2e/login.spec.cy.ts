describe('Login test', () => {
  it('User not exists', () => {
    cy.visit(Cypress.env('BASE_FRONT_END_URI'));
    cy.get('[data-cy="e2e-email-login"]').type("tiago@gmail.com");
    cy.get('[data-cy="e2e-password-login"]').type("123456")
    cy.get('[data-cy="e2e-button-login"] > div').click();
    cy.wait(2000);
    cy.get('[data-cy="e2e-alert-message"] > .MuiAlert-message').should('have.text', 'Usuário inexistente.');
  });

  it('User is disabled', () => {
    cy.visit(Cypress.env('BASE_FRONT_END_URI'));
    cy.get('[data-cy="e2e-email-login"]').type("usuario-inativo@gmail.com");
    cy.get('[data-cy="e2e-password-login"]').type("123456")
    cy.get('[data-cy="e2e-button-login"] > div').click();
    cy.wait(2000);
    cy.get('[data-cy="e2e-alert-message"]').should('have.text', 'Confirme seu e-mail antes de fazer login!');
  });

  it('User exists', () => {
    cy.visit(Cypress.env('BASE_FRONT_END_URI'));
    cy.get('[data-cy="e2e-email-login"]').type("tiagoluizrs@gmail.com");
    cy.get('[data-cy="e2e-password-login"]').type("123456")
    cy.get('[data-cy="e2e-button-login"] > div').click();
  });
})