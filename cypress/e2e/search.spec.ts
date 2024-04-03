/// <reference types="cypress" />

import { searchPage } from '../support/page-objects/searchPage.ts';
import { repositoriesPage } from '../support/page-objects/repositoriesPage.ts';

describe('Perform search', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.fixture('repositoriesHezio.json').as('reporitories');
    cy.intercept('GET', 'https://api.github.com/users/*').as('getUsers');
    cy.intercept('GET', 'https://api.github.com/users/agatafernandes', {
      fixture: 'mockUser.json',
    });
  });

  it('Perform user search with multiple repositories', () => {
    searchPage.searchUser('heziofernandes');
    cy.wait('@getUsers').then((res: any) => {
      console.log(res.response.body.login);
      expect(res.response.statusCode).to.eq(200);
      expect(res.response.body.login).to.be.equal('heziofernandes');
      repositoriesPage.ReturnRepositoriesByFixture('@reporitories', 'heziofernandes');
    });
  });

  it('Perform user search without repositories', () => {
    searchPage.searchUser('hezinho');
    cy.wait('@getUsers').then((res: any) => {
      expect(res.response.statusCode).to.eq(200);
      expect(res.response.body.login).to.be.equal('hezinho');
      repositoriesPage.ReturnUserWithoutRepository();
      repositoriesPage.ReturnToHomePage();
    });
  });

  it('Perform user not found', () => {
    searchPage.searchUser('_?`Ç');
    cy.wait('@getUsers').then((res: any) => {
      expect(res.response.statusCode).to.eq(404);
      repositoriesPage.userNotFound();
    });
  });

  it('Perform user mock', () => {
    searchPage.searchUser('agatafernandes');
    repositoriesPage.returnRepositories('agatafernandes/branas-JS');
  });

  //TODO: An error message should appear, so that the script/route becomes invalid (404)
  it('Cross -Site Scripting(XSS)', () => {
    const searchTerm = "<script>alert('XSS')</script>";
    searchPage.searchUser(searchTerm);
    console.log('Should be redirect to 404');
  });
});
