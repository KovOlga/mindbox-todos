describe('cypress test', () => {
  beforeEach(function () {
    cy.visit('/');
  });

  it('проверка работы инпута и добавления новой задачи', () => {
    const input = cy.get('[data-testid="form"]').find('input');
    input.should('have.value', '');
    input.type('test adding new todo');
    input.should('have.value', 'test adding new todo');
    const form = cy.get('[data-testid="form"]');
    form.submit();
    cy.get('li').should('have.length', 5);

    cy.get('ul').within(() => {
      cy.get('li')
        .eq(0)
        .within(() => {
          cy.get('[data-testid="list-item-text"]').find('span').should('have.text', 'test adding new todo');
          cy.get('[type="checkbox"]').should('not.be.checked').check();
        });
    });

    cy.get('[data-testid="btn-completed"]').click();

    cy.get('li').should('have.length', 2);
  });

  it('проверка работы фильтров', () => {
    cy.get('li').should('have.length', 4);

    cy.get('[data-testid="btn-active"]').click();
    cy.get('li').should('have.length', 3);

    cy.get('[data-testid="btn-completed"]').click();
    cy.get('li').should('have.length', 1);

    cy.get('[data-testid="btn-active"]').click();

    cy.get('ul').within(() => {
      cy.get('li')
        .eq(0)
        .within(() => {
          cy.get('[data-testid="list-item-button-0"]').click();
        });
    });

    cy.get('li').should('have.length', 2);

    cy.get('[data-testid="btn-completed"]').click();
    cy.get('li').should('have.length', 2);

    cy.get('[data-testid="counter"]').contains('span', '2 left');
  });
});
