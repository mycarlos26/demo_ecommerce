
Feature: Comprar producto en la tienda virtual

  @compra_variada
  Scenario Outline: Compra sin iniciar sesión - Diferentes articulos
    Given Bob abre la tienda virtual
    When Bob agrega un articulo "<producto>" al carrito en la categoria "<categoria>"
    And Bob procede a realizar la compra
    Then Bob debería ver un mensaje de confirmación de compra exitosa
    Examples:
      | producto          | categoria |
      | Samsung galaxy s6 | Phones    |
      | Sony vaio i5      | Laptops   |
      | Apple monitor 24  | Monitors  |

  @comppra_dual
  Scenario: Comprar dos articulos de la categorias diferentes
    Given Bob abre la tienda virtual
    When Bob agrega un articulo "Sony vaio i5" al carrito en la categoria "Laptops"
    When Bob agrega un articulo "Samsung galaxy s6" al carrito en la categoria "Phones"
    And Bob procede a realizar la compra
    Then Bob debería ver un mensaje de confirmación de compra exitosa