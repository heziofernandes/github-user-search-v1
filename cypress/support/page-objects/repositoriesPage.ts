/// <reference types="cypress" />

export class RepositoriesPage {
  async returnRepositories(repo: string) {
    cy.get('[data-testid="main-title"]')
      .should('be.visible')
      .invoke('text')
      .then((mainTitle) => {
        expect(mainTitle).to.equal('Look who we found 🔥');
      });
    cy.get('[data-testid^="reponame-"]')
      .invoke('text')
      .then((text) => {
        expect(text).to.contain(repo);
      });
    cy.get('[data-testid="user-not-found"]').should('not.exist');
  }

  async userNotFound() {
    cy.get('[data-testid="user-not-found"]')
      .invoke('text')
      .then((messageNotFound) => {
        expect(messageNotFound).to.equal('Ops, something went wrong 😢');
      });
    cy.get('[data-testid="main-title"]').should('not.exist');
  }

  async ReturnToHomePage() {
    cy.get('button[type="button"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  }

  async ReturnRepositoriesByFixture(dataList: any, username: string) {
    cy.get(dataList).then((items) => {
      (items as any).repositories.forEach((repo) => {
        cy.get('[data-testid^="reponame-"]')
          .invoke('text')
          .then((text) => {
            expect(text).to.contain(repo);
          });
      });
    });
    this.returnRepositories(username);
  }

  async ReturnUserWithoutRepository() {
    cy.get('[data-testid="main-title"]')
      .should('be.visible')
      .invoke('text')
      .then((message) => {
        expect(message).to.equal('Look who we found 🔥');
      });
    cy.get('[data-testid="repo-count"]')
      .invoke('text')
      .then((repository) => {
        expect(repository).to.equal('0');
      });
  }
}
export const repositoriesPage = new RepositoriesPage();
