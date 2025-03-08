@comprar
Feature: Comprar producto en la tienda virtual

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

