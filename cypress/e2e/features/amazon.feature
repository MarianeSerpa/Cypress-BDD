Feature: Busca e compra de produto na Amazon

  Background: 
    Given que o usuário está na página principal

  Scenario: Realizar compra de um produto no carrinho
    When o usuário insere "notebook" na barra de pesquisa
    And o usuario seleciona o produto
    And o usuário clica em "Adicionar ao carrinho"
    And o usuario não seleciona a garantia estendida
    And o sistema deve exibir uma mensagem de confirmação de adição ao carrinho
    And o usuario preenche os dados pessoais
    Then o sistema deve exibir as formas de pagamento

