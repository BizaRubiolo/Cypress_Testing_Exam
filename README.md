# Historias de Usuario - Proyecto Final Curso Cypress

## Registro

**Como usuario del nuevo sistema, quiero poder registrarme ingresando mi email, nombre completo y contraseña, para crear una cuenta y acceder a las funcionalidades del sistema.**

### Criterios de aceptación

1. El formulario debe contener los siguientes campos obligatorios:
    - Email
    - Nombre completo
    - Contraseña
    - Confirmar contraseña
2. El botón **Crear usuario** debe estar deshabilitado hasta que todos los campos estén completos y las contraseñas coincidan.
3. La contraseña debe tener como mínimo **8 caracteres**.
4. Al hacer clic en **Crear usuario**, si todos los datos son válidos, el sistema debe:
    - Crear el usuario en el sistema.
    - Mostrar el mensaje de éxito: `Operación exitosa`.
    - Mostrar un botón que redireccione a la pantalla de Login.
5. Si los campos están vacíos o hay errores (como contraseñas diferentes), debe mostrarse un mensaje de validación claro.

---

## Login

**Como usuario del nuevo sistema, quiero poder iniciar sesión ingresando mi email y contraseña, para acceder a mi cuenta y utilizar las funcionalidades disponibles.**

### Criterios de aceptación

1. El formulario de inicio de sesión debe mostrar dos campos obligatorios:
    - Email
    - Contraseña
2. El botón **Iniciar sesión** debe estar habilitado solo cuando ambos campos estén completos.
3. Si las credenciales son válidas:
    - El sistema debe iniciar sesión y redirigir al usuario al panel principal o página de inicio.
4. El enlace **Crea una** debe llevar al usuario a la página de registro.
5. El enlace **¡Olvidaste tu contraseña?** debe llevar al flujo de recuperación.
6. Si las credenciales son incorrectas, se debe mostrar un mensaje de error: `No pudimos iniciar sesión con estas credenciales`.
7. Si la cuenta no ha sido activada, debe mostrarse un mensaje de error que contenga: `Tu cuenta no ha sido activada`.

---

## Carrito de compras

**Como usuario autenticado, quiero agregar productos al carrito para ver un resumen de mis compras antes de pagar.**

### Criterios de aceptación

1. El carrito debe actualizarse cuando se agregan productos.
2. El usuario debe ver el nombre, cantidad y precio de los productos.
3. Debe ser posible eliminar productos del carrito.
4. Si el usuario no tiene sesión iniciada, puede agregar productos al carrito, pero deberá registrarse o iniciar sesión para hacer el checkout.
5. El sistema debe redirigir al usuario a la página de registro/login al intentar hacer checkout sin estar logeado.
6. El usuario debe poder limpiar el carrito.

---

## Checkout con tarjeta válida

**Como usuario autenticado, quiero realizar el pago de los productos del carrito utilizando una tarjeta válida para completar mi compra exitosamente y recibir una confirmación.**

### Criterios de aceptación

1. El sistema debe permitir realizar el pago solo si hay productos en el carrito.
2. El formulario de pago debe solicitar:
    - Número de la tarjeta
    - Fecha de expiración
    - Código de seguridad (CVV)
3. Si la tarjeta es válida, la transacción debe ser aprobada y se debe mostrar un mensaje de confirmación.
4. El usuario debe ser redirigido a una pantalla de resumen o éxito después del pago.
5. El carrito debe vaciarse automáticamente después de una compra exitosa.

---

## Checkout con tarjeta inválida

**Como usuario autenticado, quiero recibir una notificación clara si mi tarjeta es rechazada por fondos insuficientes para poder tomar acción y completar mi compra.**

### Criterios de aceptación

1. Al realizar el pago, el sistema debe validar la tarjeta y devolver mensajes específicos según el tipo de error:
    - Fondos insuficientes
    - Tarjeta bloqueada
    - Tarjeta inválida
2. El usuario debe poder agregar