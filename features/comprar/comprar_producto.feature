
Feature: Comprar producto en la tienda virtual

  @compra_variada
  Scenario Outline: Compra sin iniciar sesión - Diferentes articulos
    Given Carlos abre la tienda virtual
    When Carlos agrega un articulo "<producto>" al carrito en la categoria "<categoria>"
    And Carlos procede a realizar la compra
    Then Carlos debería ver un mensaje de confirmación de compra exitosa
    Examples:
      | producto          | categoria |
      | Samsung galaxy s6 | Phones    |
      | Sony vaio i5      | Laptops   |
      | Apple monitor 24  | Monitors  |

  @comppra_dual
  Scenario: Comprar dos articulos de categorias diferentes
    Given Carlos abre la tienda virtual
    When Carlos agrega un articulo "Sony vaio i5" al carrito en la categoria "Laptops"
    When Carlos agrega un articulo "Samsung galaxy s6" al carrito en la categoria "Phones"
    And Carlos procede a realizar la compra
    Then Carlos debería ver un mensaje de confirmación de compra exitosa