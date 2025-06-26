import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AmazonHomePage, SearchResultsPage, ProductDetailsPage } from "../pages/amazonPage.js";

// Instância única para cada página (pode ser fora dos steps)
const homePage = new AmazonHomePage();
const resultsPage = new SearchResultsPage();
const detailsPage = new ProductDetailsPage();

// -- Busca de Produto --
Given('que o usuario está na página principal', () => {
  homePage.visit();
});

When('o usuario insere {string} na barra de pesquisa', (produto) => {
  homePage.searchProduct(produto);
});

When('o usuario seleciona o produto', () => {
  resultsPage.verifyResults();
  resultsPage.clickFirstProduct();
  detailsPage.verifyProductDetails();
});

When('o usuario clica em {string} sem garantia estendida', (botaoAdicionar) => {
  // Dependendo do texto passado no parâmetro, decide qual botão clicar
  if (botaoAdicionar.toLowerCase().includes('carrinho')) {
    detailsPage.clickButton();  // botão "Adicionar ao carrinho"
  } else {
    // Caso queira tratar outros botões, pode expandir aqui
    throw new Error(`Botão desconhecido: ${botaoAdicionar}`);
  }
  detailsPage.clickButtonNao();
});

Then('o sistema deve exibir uma mensagem de confirmação de adição ao carrinho', () => {
  cy.wait(5000);
  detailsPage.verifyCartAdditionMessage();
  
});


When('o usuario remove o produto do carrinho', () => {
  detailsPage.clickButtonCarrinhoFinal();
  detailsPage.clickButtonCarrinhoExcluir();

});

When('o sistema deve exibir uma mensagem de confirmação de exclusão do carrinho', () => {
  detailsPage.verifyExclusao();
});

When('o usuario altera a quantidade do produto no carrinho', () => {
 detailsPage.clickButtonCarrinhoFinal();



 
});