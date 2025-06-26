Feature: Selecionar Produtos

  Background: 
    Given que o usuario está na página principal

  Scenario: Adicionar um produto ao carrinho
    When o usuario insere "notebook" na barra de pesquisa
    And o usuario seleciona o produto
    And o usuario clica em "Adicionar ao carrinho" sem garantia estendida
    Then o sistema deve exibir uma mensagem de confirmação de adição ao carrinho
  

  Scenario: Remover um produto do carrinho
    When o usuario insere "notebook" na barra de pesquisa
    And o usuario seleciona o produto
    And o usuario clica em "Adicionar ao carrinho" sem garantia estendida
    And o sistema deve exibir uma mensagem de confirmação de adição ao carrinho
    And o usuario remove o produto do carrinho
    Then o sistema deve exibir uma mensagem de confirmação de exclusão do carrinho
  
  Scenario: Mudar a quantidade do produto adicionado ao carrinho
   When o usuario insere "notebook" na barra de pesquisa
   And o usuario seleciona o produto
   And o usuario clica em "Adicionar ao carrinho" sem garantia estendida
   And o usuario altera a quantidade do produto no carrinho

