@comprar
Feature: Comprar producto en la tienda virtual

  Scenario: Compra sin iniciar sesión - Teléfono Samsung S6
    Given Bob abre la tienda virtual
    When Bob agrega un teléfono "Samsung galaxy s6" al carrito
    And Bob procede a realizar la compra
    Then Bob debería ver un mensaje de confirmación de compra exitosa
