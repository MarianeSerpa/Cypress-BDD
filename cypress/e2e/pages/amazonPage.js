class AmazonHomePage {
  visit() {
    cy.visit('/');
  }

  searchProduct(product) {
    cy.get('#twotabsearchtextbox').type(product);
    cy.get('#nav-search-submit-button').click();
  }
}

class SearchResultsPage {
  verifyResults() {
    cy.get('.s-search-results').should('be.visible');
  }

  clickFirstProduct() {
    cy.get('.s-search-results').should('be.visible');
    cy.get('.a-section.aok-relative.s-image-square-aspect')
      .first()
      .should('be.visible')
      .click();
  }
}

class ProductDetailsPage {
  verifyProductDetails() {
    cy.get('#availability > .a-size-medium')
      .should('be.visible')
      .and('contain.text', 'Em estoque');
  }

  verifyCartAdditionMessage() {
    cy.get('#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading')
      .should('be.visible')
      .and('contain.text', 'Adicionado ao carrinho');
  }

  verifyExclusao() {
    cy.get('.sc-list-item-removed-msg-delete')
      .should('be.visible')
      .and('contain.text', 'foi removido de Carrinho de compras.');
  }

  clickButton() {
    cy.get('#add-to-cart-button')
      .should('be.visible')
      .click();
  }

  clickButtonCarrinhoFinal() {
    cy.get('#attach-sidesheet-view-cart-button') 
      .should('be.visible')
      .click();
  }

  clickButtonNao() {
    cy.get('#attachSiNoCoverage')
      .should('be.visible')
      .click();
  }

  clickButtonCarrinhoExcluir() {
    cy.get('.sc-action-delete-active > .a-declarative > .a-color-link')
      .should('be.visible')
      .click();
  }
  

}

// Exportar todas as classes
export { AmazonHomePage, SearchResultsPage, ProductDetailsPage};
