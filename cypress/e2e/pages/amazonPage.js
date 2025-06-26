class AmazonHomePage {
  visit() {
    cy.visit('https://www.amazon.com.br');
  }

  searchProduct(product) {
    cy.get('#twotabsearchtextbox').type(product);
    cy.get('#nav-search-submit-button').click();
  }
}

class SearchResultsPage {
  clickFirstProduct() {
    // Aguarda a seção de resultados estar visível
    cy.get('.s-search-results').should('be.visible');

    // Seleciona o primeiro item com a classe específica e clica nele
    cy.get('.a-section.aok-relative.s-image-square-aspect') // Seleciona a classe desejada
      .first() // Seleciona o primeiro item que corresponde à classe
      .should('be.visible') // Verifica se o item está visível
      .click(); // Clica no item
}
  
    verifyResults() {
      cy.get('.s-search-results').should('be.visible');
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

clickButton() {
  cy.get('#add-to-cart-button')
    .should('be.visible') // Verifica se o botão está visível
    .click(); // Clica no botão
}

clickButtonCarrinhoFinal() {
  cy.get('#attach-close_sideSheet-link')
    .should('be.visible') // Verifica se o botão está visível
    .click(); // Clica no botão
}
clickNoButtonNao() {
  cy.get('#attachSiNoCoverage')
    .should('be.visible') // Verifica se o botão está visível
    .click(); // Clica no botão
}
}


// Exportar todas as classes em um único objeto
export { AmazonHomePage, SearchResultsPage, ProductDetailsPage };