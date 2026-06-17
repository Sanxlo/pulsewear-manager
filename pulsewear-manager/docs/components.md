Componentes de la aplicación
Introducción

Para el desarrollo de PulseWear se utilizaron componentes reutilizables construidos con React y TypeScript.

El objetivo principal fue mantener una interfaz consistente, reducir la duplicación de código y facilitar el mantenimiento de la aplicación.

Todos los componentes utilizan props tipadas mediante interfaces o tipos de TypeScript para garantizar la seguridad de tipos y mejorar la experiencia de desarrollo.

Navbar
Descripción

La Navbar es el componente principal de navegación de la aplicación.

Permite al usuario acceder rápidamente a las diferentes secciones de PulseWear.

Funcionalidades
Navegación entre páginas.
Menú desplegable para categorías.
Acceso al catálogo.
Acceso al comparador.
Acceso al checkout.
Acceso al panel de administración.
Reutilización

Se utiliza de forma global en toda la aplicación.

Footer
Descripción

Componente encargado de mostrar información adicional sobre la tienda.

Funcionalidades
Información de la marca.
Enlaces rápidos.
Información de contacto.
Derechos de autor.
Reutilización

Visible en todas las páginas principales.

HeroSection
Descripción

Sección principal de la página de inicio.

Funcionalidades
Vídeo de fondo.
Presentación de la marca.
Llamadas a la acción.
Acceso rápido al catálogo.
Acceso rápido al comparador.
Reutilización

Utilizado únicamente en HomePage.

ProductCard
Descripción

Tarjeta reutilizable utilizada para mostrar productos.

Props
interface ProductCardProps {
  product: Product;
}
Información mostrada
Imagen del producto.
Nombre.
Categoría.
Precio.
Valoración.
Botón de acceso al detalle.
Reutilización

Se utiliza en:

Catálogo.
Productos relacionados.
Carruseles de productos.
ProductCarousel
Descripción

Carrusel horizontal para destacar productos.

Funcionalidades
Navegación visual.
Presentación de productos destacados.
Acceso rápido al detalle.
Reutilización

Utilizado en:

Página principal.
Página de detalle de producto.
ProductDetailPage Components
Descripción

Conjunto de elementos utilizados dentro de la página de detalle.

Funcionalidades
Imagen ampliada.
Información completa.
Selección de talla.
Añadir al carrito.
Productos relacionados.
ProductPreviewCard
Descripción

Tarjeta utilizada dentro del comparador.

Funcionalidades
Mostrar información resumida.
Mostrar mejor precio.
Mostrar mejor valoración.
Acceso directo al producto.
Compare Table
Descripción

Tabla visual utilizada para comparar productos.

Información comparada
Categoría.
Precio.
Valoración.
Objetivo

Ayudar al usuario a tomar una mejor decisión de compra.

Checkout Form
Descripción

Formulario principal del proceso de compra.

Funcionalidades
Captura de datos personales.
Captura de dirección.
Captura de información de pago.
Validación de campos.
Creación de pedidos.
Cart Summary
Descripción

Resumen de compra mostrado durante el checkout.

Funcionalidades
Mostrar productos añadidos.
Mostrar tallas seleccionadas.
Eliminar productos.
Calcular total automáticamente.
Order Card
Descripción

Componente utilizado en el panel de administración para visualizar pedidos.

Información mostrada
Cliente.
Correo electrónico.
Teléfono.
Dirección.
Productos comprados.
Tallas seleccionadas.
Total del pedido.
Estado del pedido.
Componentes reutilizables principales

Los componentes reutilizables más importantes del proyecto son:

Navbar
Footer
ProductCard
ProductCarousel
Cart Summary

Gracias a estos componentes se logró mantener una experiencia visual uniforme y reducir la duplicación de código.

Uso de TypeScript

Todos los componentes utilizan interfaces y tipos para definir correctamente sus props.

Ejemplo:

interface ProductCardProps {
  product: Product;
}

Esto permite detectar errores durante el desarrollo y facilita el mantenimiento del código.

Diseño visual

Todos los componentes fueron diseñados utilizando Tailwind CSS.

Se siguieron los siguientes principios:

Diseño moderno.
Interfaz limpia.
Responsive Design.
Consistencia visual.
Reutilización de estilos.
Conclusión

La arquitectura basada en componentes permitió desarrollar PulseWear de forma modular, escalable y fácil de mantener. Gracias a React, TypeScript y Tailwind CSS fue posible construir una interfaz moderna, reutilizable y preparada para futuras ampliaciones.