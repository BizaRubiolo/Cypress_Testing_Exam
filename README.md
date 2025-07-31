Historia de Usuario: Registro
•	Como usuario del nuevo sistema, quiero poder registrarme ingresando mi email, nombre completo y contraseña, para que pueda crear una cuenta y acceder a las funcionalidades del sistema. 
•	Criterios de aceptación: El formulario debe contener los siguientes campos obligatorios.
o	Email
o	Nombre completo
o	Contraseña
o	Confirmar contraseña
•	El botón “crear usuario” debe estar deshabilitado hasta que todos los campos estén completos y las contraseñas coincidan. 
•	La contraseña debe tener como mínimo 8 caracteres.
•	Al hacer click en “crear usuario”, si todos los datos son válidos, el sistema debe:
o	Crear el usuario en el sistema.
o	Mostrar el mensaje de éxito “Operación exitosa”
o	Mostrar un botón que redireccione a la pantalla de Login.
•	Si los campos están vacíos o hay errores (como contraseñas diferentes), debe mostrarse un mensaje de validación claro.

Historia de Usuario: Login
•	Como usuario del nuevo sistema, quiero poder iniciar sesión en el sistema ingresando mi email y contraseña, para que pueda acceder a mi cuenta y utilizar las funcionalidades disponibles.
•	Criterios de aceptación:
o	El formulario de inicio de sesión debe mostrar dos campos obligatorios: email y contraseña.
o	El botón “Iniciar sesión” debe estar habilitado solo cuando ambos campos estén completos.
o	Si las credenciales son válidas: El sistema debe iniciar sesión y redirigir al usuario al panel principal o página de inicio.
o	El enlace “Crea una” debe llevar al usuario a la página de registro.
o	El enlace “¡Olvidaste tu contraseña?” debe llevar al flujo de recuperación.
o	Si las credenciales son incorrectas se debe mostrar un mensaje de error “No pudimos iniciar sesión con estas credenciales”.
o	Si la cuenta no ha sido activada debe mostrarse un mensaje de error que contenga “Tu cuenta no ha sido activada”
Historia de Usuario: Carrito de compras
•	Como usuario autenticado, quiero agregar productos al carrito, para ver un resumen de mis compras antes de pagar.
•	Criterios de aceptación:
o	El carrito debe actualizarse cuando se agregan productos.
o	El usuario debe ver el nombre, cantidad y precio de los productos.
o	Debe ser posible eliminar productos del carrito.
o	Si el usuario no tiene sesión iniciada, puede agregar productos al carrito, pero deberá registrarse o iniciar sesión para hacer el checkout.
o	El sistema debe redirigir al usuario a la pagina de registro/login al intentar hacer checkout sin estar logeado.
o	El usuario debe poder limpiar el carrito.

Historia de Usuario: Checkout con tarjeta valida
•	Como usuario autenticado, quiero realizar el pago de los productos del carrito utilizando una tarjeta válida para que pueda completar mi compra exitosamente y recibir una confirmación.
•	Criterios de aceptación:
o	El sistema debe permitir realizar el pago solo si hay productos en el carrito.
o	El formulario de pago debe solicitar: numero de la tarjeta, fecha de expiración y un código de seguridad (CVV).
o	Si la tarjeta es válida, la transacción debe ser aprobada y se debe mostrar un mensaje de confirmación.
o	El usuario debe ser redirigido a una pantalla de resumen o éxito después del pago.
o	El carrito debe vaciarse automáticamente después de una compra exitosa.

Historia de Usuario: Checkout con tarjeta invalida
•	Como usuario autenticado, quiero recibir una notificación clara si mi tarjeta es rechazada por fondos insuficientes para poder tomar acción y completar mi compra.
•	Criterios de aceptación:
o	Al realizar el pago, el sistema debe validar la tarjeta y devolver mensajes específicos según el tipo de error: fondos insuficientes, tarjeta bloqueada, tarjeta invalida, etc.
o	El usuario debe poder agregar una nueva tarjeta.
