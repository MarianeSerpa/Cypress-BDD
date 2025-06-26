import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AmazonHomePage, SearchResultsPage, ProductDetailsPage } from "../pages/amazonPage.js";

const homePage = new AmazonHomePage();
const resultsPage = new SearchResultsPage();
const detailsPage = new ProductDetailsPage();

Given('que o usuario está na página principal', () => {
  homePage.visit();
});

When('o usuario insere {string} na barra de pesquisa', (produto) => {
  homePage.searchProduct(produto);
});

When('o usuario seleciona o produto', () => {
  resultsPage.verifyResultsVisible();
  resultsPage.clickFirstProduct();
  detailsPage.verifyProductInStock();
});

When('o usuario clica em {string} sem garantia estendida', (botaoAdicionar) => {
  if (botaoAdicionar.toLowerCase().includes('carrinho')) {
    detailsPage.clickAddToCartButton();
  } else {
    throw new Error(`Botão desconhecido: ${botaoAdicionar}`);
  }
  detailsPage.declineExtendedWarranty();
});

Then('o sistema deve exibir uma mensagem de confirmação de adição ao carrinho', () => {
  cy.get('#attachDisplayAddBaseAlert .a-alert-heading', { timeout: 10000 }) // espera até 10s se necessário
    .should('be.visible')
    .and('contain.text', 'Adicionado ao carrinho');
});

When('o usuario remove o produto do carrinho', () => {
  detailsPage.clickViewCartButton();
  detailsPage.clickRemoveFromCartButton();
});

When('o sistema deve exibir uma mensagem de confirmação de exclusão do carrinho', () => {
  detailsPage.verifyProductRemovedFromCart();
});

When('o usuario altera a quantidade do produto no carrinho', () => {
  detailsPage.clickViewCartButton();
  detailsPage.increaseProductQuantity();
});

Then('o sistema deve exibir o subtotal com {int} produtos', (quantidade) => {
  detailsPage.verifyCartQuantity(quantidade);
});
