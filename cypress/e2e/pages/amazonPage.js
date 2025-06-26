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
  verifyResultsVisible() {
    cy.get('.s-search-results').should('be.visible');
  }

  clickFirstProduct() {
    cy.get('.s-search-results').should('be.visible');
    cy.get('.a-section.aok-relative.s-image-square-aspect')
      .first()
      .click();
  }
}

class ProductDetailsPage {
  verifyProductInStock() {
    cy.get('#availability > .a-size-medium')
      .should('be.visible')
      .and('contain.text', 'Em estoque');
  }

  verifyCartAdditionMessage() {
    cy.get('#attachDisplayAddBaseAlert .a-alert-heading')
      .should('be.visible')
      .and('contain.text', 'Adicionado ao carrinho');
  }

  verifyProductRemovedFromCart() {
    cy.get('.sc-list-item-removed-msg-delete')
      .should('be.visible')
      .and('contain.text', 'foi removido de Carrinho de compras.');
  }

  clickAddToCartButton() {
    cy.get('#add-to-cart-button')
      .should('be.visible')
      .click();
  }

  clickViewCartButton() {
    cy.get('#attach-sidesheet-view-cart-button') 
      .should('be.visible')
      .click();
  }

  increaseProductQuantity() {
    cy.get('[aria-label="Aumentar a quantidade em um"] > .a-icon') 
      .should('be.visible')
      .click();
  }

  declineExtendedWarranty() {
    cy.get('#attachSiNoCoverage')
      .should('be.visible')
      .click();
  }

  clickRemoveFromCartButton() {
    cy.get('.sc-action-delete-active > .a-declarative > .a-color-link')
      .should('be.visible')
      .click();
  }

  verifyCartQuantity(quantity) {
    cy.get('#sc-subtotal-label-activecart')
      .should('be.visible')
      .and('contain.text', `Subtotal (${quantity} produto${quantity > 1 ? 's' : ''})`);
  }
}

export { AmazonHomePage, SearchResultsPage, ProductDetailsPage };
