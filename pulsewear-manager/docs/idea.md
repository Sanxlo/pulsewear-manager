Idea del proyecto: PulseWear Manager
Nombre del proyecto

PulseWear Manager

Descripción general

PulseWear Manager es una aplicación web fullstack para una marca ficticia de ropa deportiva y urbana. La aplicación combina una landing page de producto, un catálogo de productos, un comparador y un panel de administración básico.

El objetivo del proyecto es simular una tienda online moderna inspirada en marcas de ropa deportiva y lifestyle, pero adaptada a un MVP sencillo y realista para el desarrollo de prácticas.

Problema que intenta resolver

Muchas tiendas online pequeñas necesitan mostrar sus productos de forma profesional, permitir que los usuarios consulten información clara antes de comprar y gestionar pedidos de manera sencilla.

PulseWear Manager intenta resolver este problema ofreciendo una plataforma básica donde se pueden visualizar productos, comparar características, realizar pedidos y consultar esos pedidos desde un panel administrativo.

Usuario objetivo

La aplicación está pensada para dos tipos de usuarios:

Usuario comprador

Persona interesada en ropa deportiva o urbana que quiere ver productos, comparar opciones y realizar un pedido de forma sencilla.

Usuario administrador

Persona encargada de gestionar la tienda, revisar pedidos recibidos y consultar información básica del negocio.

Funcionalidades principales
Landing page con presentación de la marca y producto destacado.
Catálogo de productos.
Filtro y búsqueda de productos.
Página de detalle de producto.
Comparador entre productos.
Formulario de pedido con validaciones básicas.
Panel de administración.
Vista de pedidos recibidos.
Actualización del estado de un pedido.
Consumo de datos desde una API REST.
Cliente de API tipado en el frontend.
Arquitectura por capas en el backend.
Funcionalidades opcionales
Animaciones en botones y tarjetas.
Sección de reviews de clientes.
Productos recomendados.
Segundo custom hook para búsquedas o filtros.
Lazy loading de páginas con React.lazy.
Tests básicos de componentes.
Documentación Swagger/OpenAPI para la API.
Filtros avanzados por precio, categoría o valoración.
Mejoras futuras

En una versión futura, la aplicación podría incluir:

Autenticación de usuarios.
Login para administradores.
Base de datos real con PostgreSQL o MongoDB.
Carrito de compra.
Pasarela de pagos.
Gestión completa de productos desde el panel admin.
Subida de imágenes de productos.
Estadísticas avanzadas de ventas.
Sistema de favoritos.
Control de stock.
Historial de pedidos por usuario.
Alcance del MVP

Para la primera versión del proyecto, se desarrollará un MVP centrado en cumplir los requisitos principales de la práctica.

El MVP incluirá:

Página principal.
Catálogo de productos.
Página de detalle.
Comparador.
Formulario de pedido.
Panel admin simple.
Gestión básica de pedidos.
Backend con Express.
API REST.
Datos simulados en memoria.
Documentación técnica en la carpeta docs/.

No se incluirán pagos reales, autenticación ni base de datos, ya que quedan definidos como mejoras futuras.

Justificación técnica

Este proyecto permite practicar la integración entre frontend y backend usando React, TypeScript, Tailwind CSS, Node.js y Express.

Además, permite aplicar:

React Router para navegación.
Hooks de React para estado y efectos.
Context API para estado global.
Componentes reutilizables.
Formularios controlados.
API REST con arquitectura por capas.
Tipos compartidos entre frontend y cliente API.
Gestión del proyecto con tablero Kanban en Trello.
Inspiración visual

La distribución visual estará inspirada en tiendas modernas de ropa deportiva y lifestyle, con diseño limpio, imágenes grandes, secciones claras y llamadas a la acción visibles.

La aplicación no copiará marcas reales, sino que usará una identidad ficticia propia llamada PulseWear.