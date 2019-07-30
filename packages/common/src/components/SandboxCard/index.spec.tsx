/// <reference types="cypress" />

describe('SandboxCard', () => {
  describe('basic', () => {
    it('Should render counts', () => {
      cy.visit('components/sandboxcard/basic');
      cy.get('[data-test=view_count]').contains('100');
      cy.get('[data-test=fork_count]').contains('100');
      cy.get('[data-test=like_count]').contains('100');
    });
  });
  describe('popular', () => {
    it('Should render counts', () => {
      cy.visit('components/sandboxcard/popular');
      cy.get('[data-test=view_count]').contains('1000.0M');
      cy.get('[data-test=fork_count]').contains('1000.0M');
      cy.get('[data-test=like_count]').contains('1000.0M');
    });
  });
});
