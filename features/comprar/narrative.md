# 🛒 Comprar un Producto en la Tienda Virtual

## 📋 Propósito
Asegurar que los usuarios puedan navegar, seleccionar productos y completar el proceso de compra de manera exitosa en la tienda virtual.

---

## 🧑‍💼 Narrativa

**Como** un usuario no registrado  
**Quiero** poder comprar un teléfono y otros productos sin necesidad de iniciar sesión  
**Para** completar mis compras rápidamente y sin complicaciones

---

## 🌟 Criterios de Aceptación

### ✅ 1. Compra de un Teléfono
- **Dado** que el usuario no está registrado  
- **Cuando** selecciona un teléfono y lo agrega al carrito  
- **Y** procede a la compra  
- **Entonces** debería ver un mensaje de confirmación de compra exitosa.

---

### ✅ 2. Compra de una Laptop
- **Dado** que el usuario no está registrado  
- **Cuando** selecciona una laptop y la agrega al carrito  
- **Y** procede a la compra  
- **Entonces** debería ver un mensaje de confirmación de compra exitosa.

---

### ✅ 3. Compra de Teléfono y Laptop
- **Dado** que el usuario no está registrado  
- **Cuando** selecciona un teléfono y una laptop y los agrega al carrito  
- **Y** procede a la compra  
- **Entonces** debería ver un mensaje de confirmación de compra exitosa.

---

### ✅ 4. Registro Exitoso de Usuario
- **Dado** que el usuario no está registrado  
- **Cuando** intenta registrarse con un nombre de usuario único  
- **Entonces** debería ver un mensaje de "Registro exitoso".

---

### 🚫 5. Registro Fallido - Usuario Existente
- **Dado** que el usuario no está registrado  
- **Cuando** intenta registrarse con un nombre de usuario que ya existe  
- **Entonces** debería ver un mensaje indicando que el usuario ya existe.

---

### ✅ 6. Inicio de Sesión Exitoso
- **Dado** que el usuario está registrado  
- **Cuando** ingresa sus credenciales correctas  
- **Entonces** debería ver un mensaje de bienvenida.

---

### 🚫 7. Inicio de Sesión Fallido - Contraseña Incorrecta
- **Dado** que el usuario está registrado  
- **Cuando** ingresa una contraseña incorrecta  
- **Entonces** debería ver un mensaje indicando que la contraseña es incorrecta.

---

### ✅ 8. Compra de un Monitor Iniciando Sesión
- **Dado** que el usuario ha iniciado sesión exitosamente  
- **Cuando** selecciona un monitor y lo agrega al carrito  
- **Y** procede a la compra  
- **Entonces** debería ver un mensaje de confirmación de compra exitosa.

---

## 📊 Reglas de Negocio

1. Los usuarios no registrados deben poder comprar productos sin necesidad de iniciar sesión.  
2. El sistema debe mostrar mensajes claros y específicos para cada acción (compra exitosa, usuario existente, etc.).  
3. Los productos agregados al carrito deben mantenerse hasta que se complete la compra o el usuario los elimine.  

---

## 🛠 Herramientas Utilizadas

- **Framework:** Serenity/JS  
- **Pruebas:** Cucumber.js  
- **Navegación:** Playwright  
- **Lenguaje:** TypeScript  

---

## 📈 Reporte de Ejecución

El reporte de ejecución se genera automáticamente y se puede visualizar en: