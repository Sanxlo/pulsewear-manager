Formularios e interacción
Introducción

Los formularios son una parte fundamental de PulseWear, ya que permiten la interacción entre los usuarios y la aplicación.

Durante el desarrollo se implementaron formularios controlados utilizando React y TypeScript.

Los formularios permiten capturar información del usuario, validarla y enviarla posteriormente a la API.

Formularios implementados

Durante el proyecto se desarrollaron los siguientes formularios:

Checkout

Formulario principal de compra.

Permite introducir:

Nombre completo.
Correo electrónico.
Dirección de envío.
Teléfono.
Información de pago.
Formularios controlados

Todos los formularios utilizan el patrón de componentes controlados.

Los valores de los inputs se almacenan dentro del estado del componente mediante useState.

Ejemplo:

const [form, setForm] = useState({
  name: "",
  email: "",
  address: "",
  phone: "",
});

Cada cambio actualiza el estado:

onChange={(event) =>
  setForm({
    ...form,
    name: event.target.value,
  })
}
Validación de datos

Antes de procesar un pedido se verifica que todos los campos obligatorios estén completos.

Ejemplo:

if (
  !form.name ||
  !form.email ||
  !form.address ||
  !form.phone
) {
  setMessage(
    "Por favor, completa todos los campos."
  );

  return;
}
Validación del carrito

La aplicación comprueba que exista al menos un producto antes de crear un pedido.

Ejemplo:

if (cart.length === 0) {
  setMessage(
    "Tu carrito está vacío."
  );

  return;
}
Validación de talla

Antes de añadir un producto al carrito se exige seleccionar una talla.

Ejemplo:

if (!selectedSize) {
  setMessage(
    "Selecciona una talla antes de añadir al carrito."
  );

  return;
}
Validación de pago

El proceso de checkout incluye información de pago.

El usuario debe introducir:

Nombre del titular.
Número de tarjeta.
Fecha de expiración.
Código CVV.

Mientras estos campos no estén completos no es posible finalizar la compra.

Mensajes de confirmación

Después de completar correctamente una acción, la aplicación muestra mensajes informativos.

Ejemplo:

setMessage(
  "Pedido creado correctamente."
);
Mensajes de error

Cuando ocurre un problema durante el proceso de compra se muestra una notificación al usuario.

Ejemplo:

setMessage(
  "Error al crear el pedido."
);
Experiencia de usuario

Los formularios fueron diseñados para ofrecer:

Simplicidad.
Rapidez.
Claridad visual.
Validación inmediata.
Retroalimentación constante.
Relación con React

Los formularios utilizan principalmente:

useState

Gestiona los datos introducidos por el usuario.

Eventos onChange

Actualizan el estado en tiempo real.

Eventos onSubmit

Procesan la información y ejecutan acciones.

Ejemplo:

<form onSubmit={handleSubmit}>
Beneficios obtenidos

La implementación de formularios controlados permitió:

Mantener sincronizados los datos y la interfaz.
Validar información fácilmente.
Mejorar la experiencia de usuario.
Integrar el frontend con la API de pedidos.
Conclusión

Los formularios desarrollados en PulseWear permiten capturar, validar y procesar información de manera segura y eficiente. Gracias a React y TypeScript fue posible implementar una experiencia de usuario moderna y mantener una gestión clara del estado de los formularios.