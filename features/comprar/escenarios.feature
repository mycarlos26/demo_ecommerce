Feature: Manejo de Usuarios y Compras en la Tienda Virtual

  # Registro de usuarios
  @creacion_usuario
  Scenario: Registro exitoso de un usuario no registrado
    Given Carlos abre la tienda virtual
    When Carlos intenta registrar un usuario llamado "testuser_{timestamp}" con contraseña "TestPassword123"
    Then Carlos debería ver un mensaje de registro exitoso

  @usuario_existente
  Scenario: Registro fallido - Usuario ya existente
    Given Carlos abre la tienda virtual
    When Carlos intenta registrar un usuario llamado "testuser_{timestamp}" con contraseña "TestPassword123"
    Then Carlos regresa al home de la tienda virtual
    And Carlos intenta registrar nuevamente el usuario llamado "testuser_unique"
    Then Carlos debería ver un mensaje indicando que el usuario ya existe

  # Inicio de sesión
  @login_exitoso
  Scenario: Inicio de sesión exitoso
    Given Carlos abre la tienda virtual
    When Carlos inicia sesión con usuario "testuser_unique" y contraseña "TestPassword123"
    Then Carlos debería ver el mensaje "testuser_unique"
  
  @login_fallido
  Scenario: Inicio de sesión fallido - Contraseña incorrecta
    Given Carlos abre la tienda virtual
    When Carlos intenta iniciar sesión con usuario "testuser_unique" y contraseña "WrongPassword456"
    Then Carlos debería ver un mensaje de error por contraseña incorrecta

  # Compra después de iniciar sesión
  @login_and_buy
  Scenario: Compra después de iniciar sesión
    Given Carlos abre la tienda virtual
    And Carlos inicia sesión con usuario "testuser_unique" y contraseña "TestPassword123"
    When Carlos agrega un articulo "Sony vaio i5" al carrito en la categoria "Laptops"
    When Carlos agrega un articulo "Samsung galaxy s6" al carrito en la categoria "Phones"
    Then Carlos regresa al home de la tienda virtual
    And Carlos procede a realizar la compra
    Then Carlos debería ver un mensaje de confirmación de compra exitosa
