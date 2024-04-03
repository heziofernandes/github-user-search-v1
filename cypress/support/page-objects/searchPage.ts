/// <reference types="cypress" />

export class SearchPage {
    
  async searchUser(username: string) {
    cy.get('input[data-testid="input-element"]').type(username);
    cy.get('button[data-testid="search-button"]').click();
  }
}
export const searchPage = new SearchPage()
