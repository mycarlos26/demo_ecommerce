Feature: Manejo de Usuarios y Compras en la Tienda Virtual

  # Registro de usuarios
  @creacion_usuario
  Scenario: Registro exitoso de un usuario no registrado
    Given Bob abre la tienda virtual
    When Bob intenta registrar un usuario llamado "testuser_unique" con contraseña "TestPassword123"
    Then Bob debería ver un mensaje de registro exitoso

  @usuario_existente
  Scenario: Registro fallido - Usuario ya existente
    Given Bob abre la tienda virtual
    When Bob intenta registrar un usuario llamado "testuser_{timestamp}" con contraseña "TestPassword123"
    Then Bob regresa al home de la tienda virtual
    And Bob intenta registrar nuevamente el usuario llamado "testuser_unique"
    Then Bob debería ver un mensaje indicando que el usuario ya existe

  # Inicio de sesión
  @login_exitoso
  Scenario: Inicio de sesión exitoso
    Given Bob abre la tienda virtual
    When Bob inicia sesión con usuario "testuser_unique" y contraseña "TestPassword123"
    Then Bob debería ver el mensaje "testuser_unique"
  
  @login_fallido
  Scenario: Inicio de sesión fallido - Contraseña incorrecta
    Given Bob abre la tienda virtual
    When Bob intenta iniciar sesión con usuario "testuser_unique" y contraseña "WrongPassword456"
    Then Bob debería ver un mensaje de error por contraseña incorrecta

  # Compra después de iniciar sesión
  @login_and_buy
  Scenario: Compra después de iniciar sesión
    Given Bob abre la tienda virtual
    And Bob inicia sesión con usuario "testuser_unique" y contraseña "TestPassword123"
    When Bob agrega un articulo "Sony vaio i5" al carrito en la categoria "Laptops"
    When Bob agrega un articulo "Samsung galaxy s6" al carrito en la categoria "Phones"
    Then Bob regresa al home de la tienda virtual
    And Bob procede a realizar la compra
    Then Bob debería ver un mensaje de confirmación de compra exitosa
